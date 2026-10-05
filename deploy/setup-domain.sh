#!/usr/bin/env bash
#
# setup-domain.sh — Connect homazohdi.ir to the portfolio: Nginx site + Let's Encrypt certificate.
# Run once on the server as an admin:  sudo bash /opt/homa-portfolio/deploy/setup-domain.sh
#
# Safe to re-run. Every Nginx change is tested before reloading; on failure the
# portfolio's own config is removed again, so other sites on this server keep working.
#
set -euo pipefail

DOMAIN=homazohdi.ir
SERVER_IP=195.214.235.204
REPO=/opt/homa-portfolio
SITE=/etc/nginx/sites-available/homa-portfolio
LINK=/etc/nginx/sites-enabled/homa-portfolio
CERT=/etc/letsencrypt/live/$DOMAIN/fullchain.pem

if [ "$(id -u)" -ne 0 ]; then
  echo "Run this with sudo." >&2
  exit 1
fi

rollback() {
  echo "!! Something failed — removing the portfolio's Nginx config so other sites are unaffected." >&2
  rm -f "$LINK" "$SITE"
  nginx -t >/dev/null 2>&1 && systemctl reload nginx
}

apply_site() {
  ln -sf "$SITE" "$LINK"
  if ! nginx -t; then
    rollback
    exit 1
  fi
  systemctl reload nginx
}

# 1. DNS must point here, otherwise Let's Encrypt can't verify the domain.
echo "==> Checking DNS"
for host in "$DOMAIN" "www.$DOMAIN"; do
  ip=$(getent ahostsv4 "$host" | awk '{print $1; exit}' || true)
  if [ "$ip" != "$SERVER_IP" ]; then
    echo "DNS for $host points to '${ip:-nothing}', not $SERVER_IP." >&2
    echo "Set an A record for $host to $SERVER_IP, wait for it to update, then run this again." >&2
    exit 1
  fi
done

# 2. Certificate (skipped if it already exists)
if [ ! -f "$CERT" ]; then
  echo "==> Serving the Let's Encrypt challenge over HTTP"
  cat > "$SITE" <<EOF
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;
    location /.well-known/acme-challenge/ { root /var/www/certbot; }
    location / { return 404; }
}
EOF
  apply_site

  echo "==> Requesting the certificate"
  if ! certbot certonly --webroot -w /var/www/certbot \
      -d "$DOMAIN" -d "www.$DOMAIN" \
      --non-interactive --agree-tos --register-unsafely-without-email \
      --deploy-hook "systemctl reload nginx"; then
    rollback
    exit 1
  fi
fi

# 3. The full HTTPS site
echo "==> Enabling https://$DOMAIN"
cp "$REPO/deploy/nginx/homa-portfolio.conf" "$SITE"
apply_site

echo ""
echo "[OK] https://$DOMAIN is live."
