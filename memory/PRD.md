# Anu Gupta — UX Portfolio · PRD

## Original Problem Statement
Create a professional UX portfolio website equipped with case studies, project showcases, process breakdowns, and contact pages. Modern, latest, clean, visually appealing, interactive, and a download version.

## Architecture
- **Frontend**: React 19 + react-router + Tailwind + framer-motion + Lenis smooth scroll + jsPDF (client-side resume PDF) + sonner toasts.
- **Backend**: FastAPI (single-file `server.py`) + Motor (async MongoDB driver).
- **DB**: MongoDB collections — `contact_messages`, `status_checks`.
- **Design system**: Swiss / High-Contrast Brutalist. Cabinet Grotesk (display) + Satoshi (body) + JetBrains Mono. 1px hairline borders, 0 radii, signal red accent (#FF3823), dark+light theme toggle (persisted in localStorage).

## User Personas
1. **Hiring manager / Recruiter** — needs to quickly assess capability, outcomes, and contact options.
2. **Design lead** — wants to inspect process, decisions, and design system fluency.
3. **Anu (portfolio owner)** — needs a memorable, modern site that lets her share work without friction.

## Core Requirements (static)
- Hero with name, role, availability, hero stats (95% / 40% / 32%).
- About with bio + 4 stats.
- 3 expandable case studies with: problem, role, challenges, 4-step process, decisions, outcomes, live link, image.
- Skills bento (9 cells).
- Experience timeline (3 jobs).
- Contact: direct links + functional form (DB persisted) + downloadable resume.
- Dark/light toggle, sticky nav, mobile menu.

## Implemented (2026-05-30)
- Full single-page portfolio at `/`.
- Backend endpoints: `GET /api/health`, `POST /api/contact`, `GET /api/contact`, legacy `POST/GET /api/status`.
- Client-side PDF resume generation via jsPDF (data sourced from `/src/data/portfolio.js`).
- 11/11 backend pytest cases passing; frontend flows verified end-to-end (theme toggle, case-study expand/collapse, contact submit + toast, mobile menu, anchor nav).
- Lenis smooth scroll + framer-motion word-mask hero reveals.

## P0 / P1 / P2 Backlog
- **P1**: Tiny race where the first programmatic click on the Filejet toggle can be swallowed by Lenis (only seen in Playwright; not user-facing).
- **P1**: Optional admin-only `/admin/messages` page protected by simple password env var to view contact submissions in-browser (currently visible via `GET /api/contact`).
- **P2**: Add email forwarding on new contact submission (Resend / SendGrid) so messages also hit Anu's inbox.
- **P2**: Open Graph + Twitter metadata + favicon refresh.
- **P2**: Add print-resume route `/resume` with pure CSS print stylesheet as an alternative to jsPDF.
- **P2**: Add micro-page-transition + scroll progress bar.
