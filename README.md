# Portfolio

**🌐 [homazohdi.ir](https://homazohdi.ir)**

[English](#english) · [فارسی](#فارسی)

---

## English

A personal portfolio website with a **Next.js** frontend and a **NestJS** API, live at **[homazohdi.ir](https://homazohdi.ir)**.

```
Portfolio/
├── backend/    NestJS API — serves portfolio content, handles the contact form
└── frontend/   Next.js site — renders the portfolio, sends contact messages via a server action
```

### Getting started

```bash
npm run install:all   # install root, backend and frontend dependencies
npm run dev           # API on http://localhost:4000/api, site on http://localhost:3000
```

### Editing your content

The site is bilingual — Persian (right-to-left) at `/fa` and English at `/en`. New visitors see Persian in dark mode; the language switch and theme toggle in the header remember each visitor's choice.

- **Portfolio content** (profile, experience, projects, skills, education) lives in two files that mirror each other:
  - `backend/src/portfolio/data/en.ts`
  - `backend/src/portfolio/data/fa.ts`

  Keep project `slug`s identical in both; the API tests check this.
- **Interface text** (buttons, headings, form messages) lives in `frontend/src/i18n/dictionaries/en.ts` and `fa.ts`.

Changes appear on the site within about 60 seconds. The résumé button links to `frontend/public/resume.pdf`.

### API

| Method | Path                   | Description                                       |
| ------ | ---------------------- | ------------------------------------------------- |
| GET    | `/api/health`          | Health check                                      |
| GET    | `/api/portfolio?lang=` | All portfolio content (`en` or `fa`)              |
| GET    | `/api/projects`        | List of projects                                  |
| GET    | `/api/projects/:slug`  | Single project                                    |
| POST   | `/api/contact`         | Submit a message (validated, 5 per minute per IP) |
| GET    | `/api/contact`         | Read messages — requires `x-admin-token` header   |

Contact messages are stored in `backend/storage/messages.json`.

### Configuration

- `backend/.env` — `PORT`, `CORS_ORIGIN`, `MESSAGES_FILE`, `ADMIN_TOKEN` (see `.env.example`)
- `frontend/.env.local` — `API_URL` (see `.env.example`)

### Production

```bash
npm run build
npm start
```

Run `npm test` to execute the API end-to-end tests.

### Deploying to the server

The app runs from `/opt/homa-portfolio` as two systemd services, next to other sites on the same server:

| Service                 | Listens on        |
| ----------------------- | ----------------- |
| `homa-portfolio-api`    | `127.0.0.1:4000`  |
| `homa-portfolio-web`    | `127.0.0.1:3002`  |

Nginx (`deploy/nginx/homa-portfolio.conf`) serves the website on [homazohdi.ir](https://homazohdi.ir); the API is never exposed publicly.

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

---

<div dir="rtl">

## فارسی

وب‌سایت نمونه‌کار شخصی با فرانت‌اند **Next.js** و API ساخته‌شده با **NestJS**، در دسترس در **[homazohdi.ir](https://homazohdi.ir)**.

</div>

```
Portfolio/
├── backend/    NestJS API — serves portfolio content, handles the contact form
└── frontend/   Next.js site — renders the portfolio, sends contact messages via a server action
```

<div dir="rtl">

- پوشه‌ی `backend`: سرویس API که محتوای سایت را ارائه می‌دهد و فرم تماس را مدیریت می‌کند.
- پوشه‌ی `frontend`: سایت Next.js که نمونه‌کارها را نمایش می‌دهد و پیام‌های فرم تماس را از طریق server action ارسال می‌کند.

### شروع کار

</div>

```bash
npm run install:all   # install root, backend and frontend dependencies
npm run dev           # API on http://localhost:4000/api, site on http://localhost:3000
```

<div dir="rtl">

دستور اول وابستگی‌های ریشه، `backend` و `frontend` را نصب می‌کند. دستور دوم API را روی `http://localhost:4000/api` و سایت را روی `http://localhost:3000` اجرا می‌کند.

### ویرایش محتوا

سایت دوزبانه است: فارسی (راست‌به‌چپ) در مسیر `/fa` و انگلیسی در مسیر `/en`. بازدیدکننده‌های جدید سایت را به فارسی و در حالت تیره می‌بینند؛ دکمه‌های تغییر زبان و تم در سربرگ، انتخاب هر بازدیدکننده را به خاطر می‌سپارند.

- **محتوای نمونه‌کار** (پروفایل، سوابق کاری، پروژه‌ها، مهارت‌ها، تحصیلات) در دو فایل هم‌ساختار قرار دارد:
  - `backend/src/portfolio/data/en.ts`
  - `backend/src/portfolio/data/fa.ts`

  مقدار `slug` هر پروژه باید در هر دو فایل یکسان باشد؛ تست‌های API این را بررسی می‌کنند.
- **متن‌های رابط کاربری** (دکمه‌ها، عنوان‌ها، پیام‌های فرم) در `frontend/src/i18n/dictionaries/en.ts` و `fa.ts` قرار دارند.

تغییرات حداکثر حدود ۶۰ ثانیه بعد روی سایت دیده می‌شوند. دکمه‌ی رزومه به فایل `frontend/public/resume.pdf` لینک شده است.

### API

| متد | مسیر | توضیح |
| --- | --- | --- |
| GET | `/api/health` | بررسی سلامت سرویس |
| GET | `/api/portfolio?lang=` | کل محتوای نمونه‌کار (`en` یا `fa`) |
| GET | `/api/projects` | فهرست پروژه‌ها |
| GET | `/api/projects/:slug` | یک پروژه |
| POST | `/api/contact` | ارسال پیام (با اعتبارسنجی، حداکثر ۵ پیام در دقیقه برای هر IP) |
| GET | `/api/contact` | خواندن پیام‌ها — نیازمند هدر `x-admin-token` |

پیام‌های فرم تماس در `backend/storage/messages.json` ذخیره می‌شوند.

### پیکربندی

- فایل `backend/.env`: متغیرهای `PORT`، `CORS_ORIGIN`، `MESSAGES_FILE` و `ADMIN_TOKEN` (نمونه در `.env.example`)
- فایل `frontend/.env.local`: متغیر `API_URL` (نمونه در `.env.example`)

### اجرای نسخه‌ی نهایی

</div>

```bash
npm run build
npm start
```

<div dir="rtl">

برای اجرای تست‌های end-to-end مربوط به API دستور `npm test` را اجرا کنید.

### استقرار روی سرور

برنامه از مسیر `/opt/homa-portfolio` به‌صورت دو سرویس systemd، در کنار سایت‌های دیگرِ همان سرور اجرا می‌شود:

| سرویس | آدرس |
| --- | --- |
| `homa-portfolio-api` | `127.0.0.1:4000` |
| `homa-portfolio-web` | `127.0.0.1:3002` |

Nginx (با پیکربندی `deploy/nginx/homa-portfolio.conf`) سایت را روی [homazohdi.ir](https://homazohdi.ir) ارائه می‌دهد؛ API هیچ‌وقت به‌صورت عمومی در دسترس نیست.

برای انتشار نسخه‌ی جدید، تغییرات را به `main` پوش کنید و سپس روی سرور اجرا کنید:

</div>

```bash
/opt/homa-portfolio/deploy/deploy.sh
```

<div dir="rtl">

این اسکریپت آخرین تغییرات را می‌گیرد، هر دو برنامه را دوباره build می‌کند، سرویس‌ها را ری‌استارت می‌کند و سلامت آن‌ها را بررسی می‌کند.

دامنه (`homazohdi.ir`) یک بار توسط ادمین متصل می‌شود، پس از آن‌که رکوردهای `A` در DNS به سرور اشاره کنند:

</div>

```bash
sudo bash /opt/homa-portfolio/deploy/setup-domain.sh
```

<div dir="rtl">

این اسکریپت سایت را در Nginx نصب می‌کند و گواهی Let's Encrypt را دریافت می‌کند (تمدید خودکار با certbot).

</div>
