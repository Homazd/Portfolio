#!/usr/bin/env bash
#
# deploy.sh — Pull the latest code on the server, rebuild, restart and health-check.
# Run on the server as the "deploy" user:  /opt/homa-portfolio/deploy/deploy.sh
#
set -euo pipefail

APP_DIR=/opt/homa-portfolio
cd "$APP_DIR"

echo "==> Pulling latest code"
git pull --ff-only

echo "==> Building API"
npm ci --prefix backend --no-audit --no-fund
npm run build --prefix backend

echo "==> Building website"
npm ci --prefix frontend --no-audit --no-fund
npm run build --prefix frontend

echo "==> Restarting services"
sudo /usr/bin/systemctl restart homa-portfolio-api
sudo /usr/bin/systemctl restart homa-portfolio-web

echo "==> Health check"
for i in $(seq 1 30); do
  if curl -fsS http://127.0.0.1:4000/api/health >/dev/null && curl -fsS -o /dev/null http://127.0.0.1:3002/; then
    echo "[OK] Portfolio is live (API :4000, website :3002)"
    exit 0
  fi
  sleep 2
done

echo "[FAIL] Services did not become healthy. Check: journalctl -u homa-portfolio-api -u homa-portfolio-web -n 50" >&2
exit 1
