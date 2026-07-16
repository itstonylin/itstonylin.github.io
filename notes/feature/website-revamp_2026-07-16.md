# Website Revamp — Swiss Modern

2026-07-16 — Full revamp of everything below the hero on itstonylin.ca: new About, filterable Index-Rows Experience, Feature-Rows Portfolio, updated resume PDF, three sections deleted, Swiss Modern typography.

## Goal

The site is a new-grad job-hunting site. Current content is stale (says "third year… seeking co-op 2024"). Tony graduated from McMaster (Honours CS Co-op, Summa Cum Laude, Sep 2021 – Apr 2026) and is Lead Software Engineer at Backyard Brands (Jun 2025 – present).

## Decisions

- **Approach:** surgical revamp in place. Single static `index.html` + `style.css` + `main.js` on GitHub Pages (CNAME: itstonylin.ca). No build step, no framework.
- **Hero stays untouched** — Bootstrap carousel, animated Bebas Neue text, social icons. Bootstrap/jQuery stay because the carousel needs them.
- **Design system (chosen via visual mockups):** "Swiss Modern" — Inter Tight (weights 400–900) for display/headings, Inter for body. White `#ffffff` background, near-black `#0a0a0a` text, neutral grays, single blue accent `#2563eb`. Big tight-tracked headings (negative letter-spacing). Below-hero sections drop the old fonts (Lemonada, Patrick Hand, Poppins, Rubik, Work Sans usage below hero).
- **Experience format:** "Index Rows" — numbered full-width rows, oversized company name, dates right-aligned, role in accent blue. Rows expand on click (accordion) revealing bullets + tech tags; current role (Backyard Brands) expanded by default.
- **Experience filter:** pills `All` / `Software`. Software = Backyard Brands, Stelco, Tech Mahindra, McMaster Start Coding. All adds Teaching Assistant and Game Official. Wealthsimple ambassador and high-school tutoring are dropped entirely.
- **Portfolio format:** "Feature Rows" — same numbered-row visual language as Experience. Exactly 4 projects, no filter buttons: ApptVia, Coping-Gacha (with `GI 2026 RESEARCH` badge), Peerio, Mahjong Counter.
- **Project links:** only Mahjong Counter links out (https://mahjong-counter.onrender.com). The other three render without a link arrow, but markup keeps a ready anchor slot (e.g. `<a class="project-link" href="" hidden>` or equivalent) so adding a URL later is a one-attribute edit.
- **Resume:** compile `~/Documents/Resumes/resume.tex` (pdflatex, TeX Live 2026 installed) and replace `Resume/Tony's Resume.pdf`. Keep embed + download link, restyled.
- **Deleted sections:** Languages, Tech (software), Awards & Certifications, and all four dot-divider interludes (`#period0–4`, "That was a lot of info…", "The End"). Their CSS and the old portfolio-filter JS in `main.js` go too.
- **Nav:** same styling, links reduced to Home · About · Experience · Portfolio · Resume.

## Content

### About (rewritten copy, approved direction)

> I'm Tony — a software engineer in Toronto. I recently graduated from McMaster University (Honours Computer Science Co-op, Summa Cum Laude, '26) and I'm currently the Lead Software Engineer at Backyard Brands, where I lead a team of five building AI-powered pool-care apps used across Canada. I like shipping real products — mobile, web, and the occasional smart-glasses integration.

Keep photo + text layout (existing `cali_bg.JPG` photo). Update `<meta>` description/keywords (currently say "High School Student") and copyright year.

### Experience rows (content source: ~/Documents/Resumes/resume.tex)

| # | Company | Role | Dates | Filter |
|---|---------|------|-------|--------|
| 01 | Backyard Brands | Lead Software Engineer | Jun 2025 — Present | Software |
| 02 | Stelco | Process Automation Engineer | Jan 2024 — Dec 2024 | Software |
| 03 | Tech Mahindra | Software Engineer | Summers 2022 & 2023 | Software |
| 04 | McMaster Start Coding | Full Stack Developer | Sep 2023 — Apr 2025 | Software |
| 05 | McMaster University | Teaching Assistant (COMPSCI 2ME3) | Sep 2023 — Apr 2025 | All only |
| 06 | McMaster Intramurals | Game Official | Sep 2023 — Apr 2025 | All only |

Bullets: 2-3 per role, condensed from resume.tex (not copied verbatim — punchier, web-length). Tech tags per role from resume.tex tech lists.

### Portfolio rows

| # | Project | One-liner | Tags | Dates | Link |
|---|---------|-----------|------|-------|------|
| 01 | ApptVia | AI-powered scheduling platform for service businesses — booking, payments, notifications, and a multi-channel scheduling agent | Next.js, TypeScript, PostgreSQL, OpenAI, Stripe | 2026 — now | none (slot ready) |
| 02 | Coping-Gacha | Therapeutic app with 10 AI personalities + cross-conversation memory; GI 2026 extended abstract & poster | React Native, Expo, Claude, Supabase | 2026 | none (slot ready), badge: GI 2026 RESEARCH |
| 03 | Peerio | Tinder-style two-way matching between project seekers and creators, hybrid ML matching engine | React Native, Python, Supabase | 2025 — 2026 | none (slot ready) |
| 04 | Mahjong Counter | Score-keeping web app that tracks 10 gameplay stats | HTML/CSS/JS | 2020 | https://mahjong-counter.onrender.com |

### Footer

Same social links (GitHub, LinkedIn, email, phone), Swiss restyle, copyright "© Tony Lin 2026", drop the "reach out if you have opportunities" begging line — replace with a neutral "Let's connect".

## Implementation notes

- Files touched: `index.html`, `style.css`, `main.js`, `Resume/Tony's Resume.pdf` (regenerated), `.gitignore` (add `.superpowers/`).
- Add Google Fonts link for Inter Tight + Inter; remove unused font links (keep Bebas Neue for hero; audit Patrick Hand — still used by hero/nav CSS, keep only if hero/nav reference it).
- `main.js`: remove old `filterSelection` portfolio code; add (1) experience filter pills toggling rows by `data-filter` class, (2) accordion expand/collapse for experience rows. Keep spinner + hamburger menu code.
- AOS stays for subtle fade-up on new sections (already loaded); use sparingly (fade-up only, no zoom/flip circus).
- Section headings share one style: Inter Tight 900, clamp()-sized, tight tracking.
- No test suite exists in this repo (plain static site) — verification is loading the page in a browser (desktop + mobile widths) and checking: hero unchanged, filters work, accordion works, resume PDF renders, no console errors, deleted sections and nav links gone.

## Out of scope

- Hero changes, new screenshots for projects (cards work without images), rebuilding on a framework, changing hosting/DNS.
