# Portfolio

A personal portfolio website with a **Next.js** frontend and a **NestJS** API.

```
Portfolio/
├── backend/    NestJS API — serves portfolio content, handles the contact form
└── frontend/   Next.js site — renders the portfolio, sends contact messages via a server action
```

## Getting started

```bash
npm run install:all   # install root, backend and frontend dependencies
npm run dev           # API on http://localhost:4000/api, site on http://localhost:3000
```

## Editing your content

The site is bilingual — English at `/en` and Persian (right-to-left) at `/fa`. Visitors are sent to the language their browser prefers, and the language switch in the header remembers their choice.

- **Portfolio content** (profile, experience, projects, skills, education) lives in two files that mirror each other:
  - `backend/src/portfolio/data/en.ts`
  - `backend/src/portfolio/data/fa.ts`

  Keep project `slug`s identical in both; the API tests check this.
- **Interface text** (buttons, headings, form messages) lives in `frontend/src/i18n/dictionaries/en.ts` and `fa.ts`.

Changes appear on the site within about 60 seconds. The résumé button links to `frontend/public/resume.pdf`.

## API

| Method | Path                   | Description                                       |
| ------ | ---------------------- | ------------------------------------------------- |
| GET    | `/api/health`          | Health check                                      |
| GET    | `/api/portfolio?lang=` | All portfolio content (`en` or `fa`)              |
| GET    | `/api/projects`        | List of projects                                  |
| GET    | `/api/projects/:slug`  | Single project                                    |
| POST   | `/api/contact`         | Submit a message (validated, 5 per minute per IP) |
| GET    | `/api/contact`         | Read messages — requires `x-admin-token` header   |

Contact messages are stored in `backend/storage/messages.json`.

## Configuration

- `backend/.env` — `PORT`, `CORS_ORIGIN`, `MESSAGES_FILE`, `ADMIN_TOKEN` (see `.env.example`)
- `frontend/.env.local` — `API_URL` (see `.env.example`)

## Production

```bash
npm run build
npm start
```

Run `npm test` to execute the API end-to-end tests.

## Deploying to the server

The app runs from `/opt/homa-portfolio` as two systemd services, next to other sites on the same server:

| Service                 | Listens on        |
| ----------------------- | ----------------- |
| `homa-portfolio-api`    | `127.0.0.1:4000`  |
| `homa-portfolio-web`    | `127.0.0.1:3002`  |

Nginx (`deploy/nginx/homa-portfolio.conf`) serves the website on the portfolio's own domain; the API is never exposed publicly.

To ship a new version, push to `main`, then on the server run:

```bash
/opt/homa-portfolio/deploy/deploy.sh
```

It pulls, rebuilds both apps, restarts the services and checks they are healthy.

The domain (`homazohdi.ir`) is connected once by an admin, after its DNS `A` records point to the server:

```bash
sudo bash /opt/homa-portfolio/deploy/setup-domain.sh
```

It installs the Nginx site and requests the Let's Encrypt certificate (renewed automatically by certbot).
