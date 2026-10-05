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

All text on the site — profile, experience, projects, skills, education and certifications — lives in one file:

**`backend/src/portfolio/portfolio.data.ts`**

Edit it and the site updates within about 60 seconds. The résumé button links to `/resume.pdf`, so put your PDF at `frontend/public/resume.pdf` (or remove `resumeUrl`).

## API

| Method | Path                   | Description                                       |
| ------ | ---------------------- | ------------------------------------------------- |
| GET    | `/api/health`          | Health check                                      |
| GET    | `/api/portfolio`       | All portfolio content                             |
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
