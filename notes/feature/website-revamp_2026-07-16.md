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

## Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Revamp everything below the hero on the static site (index.html/style.css/main.js) to the approved Swiss Modern design, delete stale sections, and refresh the resume PDF.

**Architecture:** Single static page on GitHub Pages. Hero (header nav bar styling, Bootstrap carousel, `#home`) is untouched except nav link list. Each section below the hero is rewritten in place using a small design-token layer added to style.css. No build step.

**Tech Stack:** HTML/CSS/vanilla JS (+ existing jQuery/Bootstrap/AOS kept for hero and fade-ups), pdflatex (TeX Live 2026) for the resume.

### Global constraints

- Fonts below hero: `"Inter Tight"` (display), `"Inter"` (body). Hero keeps Bebas Neue. Accent color exactly `#2563eb`.
- Do NOT touch: `.spinner*`, `.first`, `header`, `.site-nav*` (except deleting 3 `<li>`s), `.menu-toggle`, `.hamburger*`, `.hero-image*`, `#home*`, `#social-media-row` styles, the Bootstrap/jQuery/w3.css/Font Awesome/AOS `<script>`/`<link>` tags.
- No test suite exists (static site). Each task verifies with `grep` assertions and the final task verifies in a real browser. Do not add a test framework.
- AOS animations in new sections: `data-aos="fade-up" data-aos-duration="600"` only — no zoom/flip variants.
- All tasks run in the repo root `/Users/tonylin/Developer/itstonylin.github.io`. Commit at the end of every task on `master`.

---

### Task 1: Design foundation — head cleanup, meta, fonts, tokens

**Files:**
- Modify: `index.html` (head, lines ~5-48)
- Modify: `style.css` (top-of-file imports, `body`, `h2` rules)

**Interfaces:**
- Produces CSS classes consumed by Tasks 3-6: `.section` (page-width wrapper), `.section-title` (big heading), `.tag` (tech chip), and CSS vars `--ink --paper --accent --gray-1 --gray-2 --gray-3 --gray-4 --gray-5 --font-display --font-body`.

- [ ] **Step 1: Update meta tags in index.html**

Replace the `<meta name="description">`, `<meta name="keywords">`, and `<meta property="og:image">` lines with:

```html
<meta name="description" content="Tony Lin — software engineer in Toronto. McMaster CS grad, Lead Software Engineer at Backyard Brands." />
<meta name="keywords" content="Tony Lin, Software Engineer, McMaster University, Toronto, React Native, TypeScript" />
<meta name="author" content="Tony Lin" />
<meta property="og:image" content="Images/About-Me-Pictures/headshot.jpg">
```

(Note: the og:image path fix — the old value starts with `.Images/`, a typo.)

- [ ] **Step 2: Swap Google Font links in index.html head**

Delete the three `<link>` lines loading `Lemonada`, `Patrick+Hand`, and `Barlow` (keep `Bebas+Neue` — the hero uses it). Add after the Bebas Neue link:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;600;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

- [ ] **Step 3: Replace font imports and base styles in style.css**

Delete the four `@import url(...)` lines at the top of style.css (Quicksand, Poppins, Work Sans, Rubik — all their consumers are being deleted or restyled).

Add at the very top of style.css:

```css
:root {
    --ink: #0a0a0a;
    --paper: #ffffff;
    --accent: #2563eb;
    --gray-1: #f5f5f5;
    --gray-2: #e5e5e5;
    --gray-3: #a3a3a3;
    --gray-4: #737373;
    --gray-5: #525252;
    --font-display: "Inter Tight", "Inter", -apple-system, sans-serif;
    --font-body: "Inter", -apple-system, sans-serif;
}
```

Change the `body` rule (currently `background-color: #e6e6e6; font-family: "Patrick Hand", cursive;`) to:

```css
body {
    background-color: var(--paper);
    font-family: var(--font-body);
    color: var(--ink);
}
```

Change the global `h2 { text-decoration: underline; }` rule to `#home-text h2 { text-decoration: underline; }` (preserves the hero's underlined "Hello," without underlining new section headings).

- [ ] **Step 4: Add shared section classes to style.css**

Append after the `:root` block:

```css
/* -------------------------------------------- */
/* Swiss Modern shared (sections below hero) */
/* -------------------------------------------- */

.section {
    width: 90%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 5rem 0 2rem;
    scroll-margin-top: 4rem;
}

.section-title {
    font-family: var(--font-display);
    font-weight: 900;
    font-size: clamp(3rem, 8vw, 5.5rem);
    letter-spacing: -0.04em;
    line-height: 1;
    color: var(--ink);
    text-align: left;
    margin: 0 0 0.4em;
}

.tag {
    display: inline-block;
    font-family: var(--font-body);
    font-size: 0.75rem;
    font-weight: 500;
    color: var(--gray-5);
    background: var(--gray-1);
    border-radius: 6px;
    padding: 3px 10px;
    margin: 0 6px 6px 0;
}
```

- [ ] **Step 5: Verify**

Run: `grep -c "Patrick Hand" index.html style.css` → expect `index.html:0`, `style.css:0`. Run: `grep -c "Inter+Tight" index.html` → expect `1`. Run: `grep -c "@import" style.css` → expect `0`. Open `index.html` via `python3 -m http.server` if needed; hero must look unchanged (Bebas Neue headings, carousel working).

- [ ] **Step 6: Commit**

```bash
git add index.html style.css
git commit -m "Swiss Modern foundation: fonts, tokens, meta cleanup"
```

---

### Task 2: Delete dead sections + prune nav

**Files:**
- Modify: `index.html` (nav `<li>`s; `#languages`, `#software`, `#awards-certifications` sections; `#period0`–`#period3` divs and the interlude `<h1>`s between them; `#period4` + `#heading-below-period4`)
- Modify: `style.css` (Languages, Software, Awards, Dot styles blocks)

**Interfaces:**
- Consumes: nothing. Produces: a page whose only sections are Home, About, Experience(old timeline), Portfolio(old grid), Resume, footer.

- [ ] **Step 1: Remove nav items**

In the `<nav class="site-nav">` list delete the three `<li>` blocks whose anchors are `#languages`, `#software`, `#awards-certifications`. Remaining nav anchors: `#home`, `#about`, `#experience`, `#portfolio`, `#resume`.

- [ ] **Step 2: Delete section HTML**

Delete from `index.html`:
1. The entire `<div id="languages">…</div>` block.
2. `<h1 id="software" …>Tech</h1>` and the entire `<div id="software-container">…</div>`.
3. `<h1 id="awards-certifications" …>` and the entire `<div id="awards-legend-container">…</div>`.
4. The interlude blocks: `<div id="period0">…</div>`, the `<h1>That was a lot of info</h1>`, `<div id="period1">…</div>`, `<h1 id="heading-above-period2">…</h1>`, `<div id="period2">…</div>`, `<h1 id="heading-above-period3">…</h1>`, `<div id="period3">…</div>`, `<div id="period4">…</div>`, and `<h1 id="heading-below-period4">The End</h1>`.

- [ ] **Step 3: Delete their CSS**

Delete from `style.css` the blocks under comments `/* Languages Styles */` (rules `#languages`, `#skills-graphic-outter-container`, `.skills-graphic-container`, `.skills`, `.python`, `.html`, `.css`, `.js`, `.java`, `.sql`, `.bash`, `.haskell`, plus their media query), `/* Software Styles */` (`#software`, `#software-container`, `.software-box`, `.software-svg`), `/* Awards Styles */` (`#awards-certifications`, `.awards-box`, `.awards-list`), and `/* Dot Styles */` (`#period0`–`#period4` rules and media query).

- [ ] **Step 4: Verify**

Run: `grep -c "languages\|software-container\|awards\|period" index.html` → expect `0`. Run: `grep -c "skills-graphic\|software-box\|awards-box\|#period" style.css` → expect `0`. Serve and load the page: nav shows 5 links, page flows Hero → About → Experience → Portfolio → Resume → footer, no console errors.

- [ ] **Step 5: Commit**

```bash
git add index.html style.css
git commit -m "Remove Languages, Tech, Awards & Certs, and dot-divider sections"
```

---

### Task 3: About section rewrite

**Files:**
- Modify: `index.html` (`#about` block)
- Modify: `style.css` (About Styles block)

**Interfaces:**
- Consumes: `.section`, `.section-title` from Task 1.

- [ ] **Step 1: Replace the About HTML**

Replace the entire `<div id="about">…</div>` with:

```html
<section id="about" class="section">
    <h2 class="section-title" data-aos="fade-up" data-aos-duration="600">About</h2>
    <div id="about-me-container">
        <div id="about-me-img-container" data-aos="fade-up" data-aos-duration="600">
            <img src="Images/About-Me-Pictures/cali_bg.JPG" alt="Tony Lin" />
        </div>
        <div id="about-me-p-container" data-aos="fade-up" data-aos-duration="600">
            <p>
                I'm Tony — a software engineer in Toronto. I recently graduated from
                McMaster University (Honours Computer Science Co-op, Summa Cum Laude, '26)
                and I'm currently the Lead Software Engineer at
                <span class="about-highlight">Backyard Brands</span>, where I lead a team of
                five building AI-powered pool-care apps used across Canada.
            </p>
            <p>
                I like shipping real products — mobile, web, and the occasional
                smart-glasses integration.
            </p>
        </div>
    </div>
</section>
```

- [ ] **Step 2: Replace the About CSS**

Replace everything in the `/* About Styles */` block of style.css (rules `#about`, `#about h1`, `#about p/h1/h2`, `#about-me-container`, `#about-me-container img`, `#about-me-p-container`, `#about-me-p-container p`, `#about-me-img-container`, and its 900px media query) with:

```css
#about-me-container {
    display: flex;
    align-items: center;
    gap: 3rem;
}

#about-me-img-container {
    flex: 1 1 45%;
}

#about-me-img-container img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 16px;
}

#about-me-p-container {
    flex: 1 1 55%;
}

#about-me-p-container p {
    font-family: var(--font-body);
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--gray-5);
    margin: 0 0 1.25em;
}

.about-highlight {
    color: var(--accent);
    font-weight: 600;
}

@media only screen and (max-width: 900px) {
    #about-me-container {
        flex-direction: column;
        gap: 1.5rem;
    }
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "third year\|coop opportunities\|summer 2024" index.html` → expect `0`. Run: `grep -c "Summa Cum Laude" index.html` → expect `1`. Serve and check: About renders photo left / text right on desktop, stacked on narrow widths; heading is huge tight-tracked Inter Tight, not underlined.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "Rewrite About section: new-grad copy, Swiss Modern layout"
```

---

### Task 4: Experience — Index Rows with filter + accordion

**Files:**
- Modify: `index.html` (replace `<h1 id="experience">` + `#timeline-container` block)
- Modify: `style.css` (delete Experience/timeline block, add xp styles)
- Modify: `main.js` (add filter + accordion handlers)

**Interfaces:**
- Consumes: `.section`, `.section-title`, `.tag`, tokens from Task 1.
- Produces: `.pill` / `.pill-active` buttons with `data-filter="all|software"`; `.xp-row` articles with `data-category="software|other"`; `.xp-head` toggles `.open` on its row. Task 5 reuses the row visual language but with its own `pf-` classes.

- [ ] **Step 1: Replace Experience HTML**

Replace `<h1 … id="experience">Experience</h1>` and the entire `<div … id="timeline-container">…</div>` with:

```html
<section id="experience" class="section">
    <h2 class="section-title" data-aos="fade-up" data-aos-duration="600">Experience</h2>
    <div id="experience-filters" data-aos="fade-up" data-aos-duration="600">
        <button class="pill pill-active" data-filter="all">All</button>
        <button class="pill" data-filter="software">Software</button>
    </div>
    <div id="experience-rows">
        <article class="xp-row open" data-category="software" data-aos="fade-up" data-aos-duration="600">
            <button class="xp-head" aria-expanded="true">
                <span class="xp-num">01</span>
                <span class="xp-main">
                    <span class="xp-top">
                        <span class="xp-company">Backyard Brands</span>
                        <span class="xp-dates">Jun 2025 — Present</span>
                    </span>
                    <span class="xp-role">Lead Software Engineer</span>
                </span>
            </button>
            <div class="xp-body">
                <ul>
                    <li>Leading a team of 5 building bilingual pool-care mobile apps with conversational AI, water testing, and job management — used by 50+ partner retail locations across Canada.</li>
                    <li>Built native iOS and Android integrations for Solos smart glasses: hands-free conversational AI and photo capture for AI-powered image analysis.</li>
                    <li>Shipped a bilingual, location-aware weather alert system for 5,000+ pool owners, driving an 8% increase in attributed sales.</li>
                </ul>
                <div class="xp-tags">
                    <span class="tag">React Native</span><span class="tag">TypeScript</span><span class="tag">Kotlin</span><span class="tag">Swift</span><span class="tag">PostgreSQL</span><span class="tag">OpenAI</span><span class="tag">ElevenLabs</span>
                </div>
            </div>
        </article>
        <article class="xp-row" data-category="software" data-aos="fade-up" data-aos-duration="600">
            <button class="xp-head" aria-expanded="false">
                <span class="xp-num">02</span>
                <span class="xp-main">
                    <span class="xp-top">
                        <span class="xp-company">Stelco</span>
                        <span class="xp-dates">Jan 2024 — Dec 2024</span>
                    </span>
                    <span class="xp-role">Process Automation Engineer</span>
                </span>
            </button>
            <div class="xp-body">
                <ul>
                    <li>Automated steel-batch chemistry deviation detection, cutting metallurgist review time by 95%.</li>
                    <li>Migrated and deployed 140+ Oracle Analytics Publisher reports across dev, test, and production.</li>
                    <li>Added search and quick-action shortcuts to the steelmaking reporting utility, reducing report retrieval time by 60%.</li>
                </ul>
                <div class="xp-tags">
                    <span class="tag">Python</span><span class="tag">PL/SQL</span><span class="tag">Power Automate</span><span class="tag">Power BI</span><span class="tag">Bash</span>
                </div>
            </div>
        </article>
        <article class="xp-row" data-category="software" data-aos="fade-up" data-aos-duration="600">
            <button class="xp-head" aria-expanded="false">
                <span class="xp-num">03</span>
                <span class="xp-main">
                    <span class="xp-top">
                        <span class="xp-company">Tech Mahindra</span>
                        <span class="xp-dates">Summers 2022 &amp; 2023</span>
                    </span>
                    <span class="xp-role">Software Engineer</span>
                </span>
            </button>
            <div class="xp-body">
                <ul>
                    <li>Built a Java plugin generating JUnit test scaffolding for Spring Boot APIs, accelerating test development.</li>
                    <li>Normalized Oracle SQL schemas, eliminating redundant data and cutting storage footprint by 10%.</li>
                    <li>Authored technical specifications for a mortgage-processing system, expanding test coverage of edge cases.</li>
                </ul>
                <div class="xp-tags">
                    <span class="tag">Java</span><span class="tag">JUnit</span><span class="tag">Oracle SQL</span><span class="tag">UML</span>
                </div>
            </div>
        </article>
        <article class="xp-row" data-category="software" data-aos="fade-up" data-aos-duration="600">
            <button class="xp-head" aria-expanded="false">
                <span class="xp-num">04</span>
                <span class="xp-main">
                    <span class="xp-top">
                        <span class="xp-company">McMaster Start Coding</span>
                        <span class="xp-dates">Sep 2023 — Apr 2025</span>
                    </span>
                    <span class="xp-role">Full Stack Developer</span>
                </span>
            </button>
            <div class="xp-body">
                <ul>
                    <li>Developed a browser IDE with React.js, PostgreSQL, Haskell, and Docker for teaching functional programming in Elm.</li>
                    <li>Shipped user-requested features — including dark mode — for thousands of student users.</li>
                </ul>
                <div class="xp-tags">
                    <span class="tag">React.js</span><span class="tag">PostgreSQL</span><span class="tag">Haskell</span><span class="tag">Docker</span>
                </div>
            </div>
        </article>
        <article class="xp-row" data-category="other" data-aos="fade-up" data-aos-duration="600">
            <button class="xp-head" aria-expanded="false">
                <span class="xp-num">05</span>
                <span class="xp-main">
                    <span class="xp-top">
                        <span class="xp-company">McMaster University</span>
                        <span class="xp-dates">Sep 2023 — Apr 2025</span>
                    </span>
                    <span class="xp-role">Teaching Assistant — COMPSCI 2ME3</span>
                </span>
            </button>
            <div class="xp-body">
                <ul>
                    <li>Taught software design concepts — design patterns, interface specs, UML, SDLC — for Intro to Software Development.</li>
                    <li>Supported and graded a cohort of 180+ students.</li>
                </ul>
                <div class="xp-tags">
                    <span class="tag">Teaching</span><span class="tag">UML</span><span class="tag">Software Design</span>
                </div>
            </div>
        </article>
        <article class="xp-row" data-category="other" data-aos="fade-up" data-aos-duration="600">
            <button class="xp-head" aria-expanded="false">
                <span class="xp-num">06</span>
                <span class="xp-main">
                    <span class="xp-top">
                        <span class="xp-company">McMaster Intramurals</span>
                        <span class="xp-dates">Sep 2023 — Apr 2025</span>
                    </span>
                    <span class="xp-role">Game Official</span>
                </span>
            </button>
            <div class="xp-body">
                <ul>
                    <li>Officiated soccer for McMaster's largest intramural league — thousands of students per semester.</li>
                    <li>Made quick, confident calls under pressure and kept games under control.</li>
                </ul>
                <div class="xp-tags">
                    <span class="tag">Leadership</span>
                </div>
            </div>
        </article>
    </div>
</section>
```

- [ ] **Step 2: Replace Experience CSS**

Delete the `/* Experience Styles */` block (`#experience`, `#timeline-container`, `.timeline*`, `.entry*` rules and the 960px media query). Add in its place:

```css
/* -------------------------------------------- */
/* Experience Styles (Index Rows) */
/* -------------------------------------------- */

#experience-filters {
    margin-bottom: 1.5rem;
}

.pill {
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--gray-5);
    background: var(--paper);
    border: 1px solid var(--gray-2);
    border-radius: 999px;
    padding: 6px 18px;
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.15s linear;
}

.pill:hover {
    border-color: var(--ink);
}

.pill-active,
.pill-active:hover {
    background: var(--ink);
    border-color: var(--ink);
    color: var(--paper);
}

.xp-row {
    border-top: 1px solid var(--gray-2);
}

.xp-head {
    display: flex;
    gap: 1.25rem;
    width: 100%;
    text-align: left;
    background: none;
    border: none;
    padding: 1.25rem 0;
    cursor: pointer;
    align-items: baseline;
}

.xp-num {
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--gray-3);
}

.xp-main {
    flex: 1;
}

.xp-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
}

.xp-company {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(1.5rem, 4vw, 2.1rem);
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--ink);
    transition: color 0.15s linear;
}

.xp-head:hover .xp-company {
    color: var(--accent);
}

.xp-dates {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--gray-4);
    white-space: nowrap;
}

.xp-role {
    display: block;
    font-family: var(--font-body);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--accent);
    margin-top: 2px;
}

.xp-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    padding-left: 2.55rem;
}

.xp-row.open .xp-body {
    max-height: 500px;
    padding-bottom: 1.25rem;
}

.xp-body ul {
    margin: 0 0 0.75rem;
    padding-left: 1.1rem;
}

.xp-body li {
    font-family: var(--font-body);
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--gray-5);
    margin-bottom: 0.4em;
}

@media only screen and (max-width: 600px) {
    .xp-body {
        padding-left: 0;
    }
}
```

- [ ] **Step 3: Replace old portfolio-button JS with experience JS in main.js**

Delete from `main.js`: the `filterSelection("all");` call, and functions `filterSelection`, `addClass`, `removeClass`, `setThisButtonActive`, `resetActiveButton`, and the `.portfolio-buttons` forEach listener block (the whole `// Portfolio` section). Keep the spinner and nav-bar sections. Add:

```js
// Experience filter + accordion
// ===================================================================
document.querySelectorAll(".pill").forEach((pill) => {
    pill.addEventListener("click", function() {
        document.querySelectorAll(".pill").forEach((p) => p.classList.remove("pill-active"));
        pill.classList.add("pill-active");
        const filter = pill.dataset.filter;
        document.querySelectorAll(".xp-row").forEach((row) => {
            row.style.display =
                filter === "all" || row.dataset.category === filter ? "" : "none";
        });
    });
});

document.querySelectorAll(".xp-head").forEach((head) => {
    head.addEventListener("click", function() {
        const row = head.closest(".xp-row");
        row.classList.toggle("open");
        head.setAttribute("aria-expanded", row.classList.contains("open"));
    });
});
// ===================================================================
```

**Sequencing note:** the old portfolio grid HTML still exists until Task 5 and calls `filterSelection(...)` from inline `onclick`. Removing the JS first is acceptable — clicking those old buttons throws a console error during the window between Tasks 4 and 5 only; page load is unaffected because the `filterSelection("all")` startup call is also removed. But the old portfolio cards rely on `filterSelection("all")` at load to become visible (`.show`). To keep the page presentable between tasks, ALSO add the class `show` directly to each old `.column` div... **Skip that** — instead, Tasks 4 and 5 must land in the same working session back-to-back; the intermediate commit may have a blank old-portfolio grid. This is accepted.

- [ ] **Step 4: Verify**

Run: `grep -c "timeline\|Wealthsimple\|Sir John A" index.html` → expect `0`. Run: `grep -c "filterSelection" main.js` → expect `0`. Run: `grep -c "xp-row" index.html` → expect `6`. Serve and check: 6 rows in All, 4 in Software, first row expanded by default, rows expand/collapse on click, company name turns blue on hover.

- [ ] **Step 5: Commit**

```bash
git add index.html style.css main.js
git commit -m "Experience: replace timeline with filterable Index Rows"
```

---

### Task 5: Portfolio — Feature Rows

**Files:**
- Modify: `index.html` (replace `<h1 id="portfolio">`, `#myBtnContainer`, and the whole `<div class="main">…</div>` grid)
- Modify: `style.css` (delete old Projects styles, add pf styles)

**Interfaces:**
- Consumes: `.section`, `.section-title`, `.tag` from Task 1. Link-slot convention: each project name contains `<a class="pf-link" …>` — hidden when no URL; to publish a link later, set `href` and remove `hidden`.

- [ ] **Step 1: Replace Portfolio HTML**

Replace `<h1 … id="portfolio">Portfolio</h1>`, the `<div … id="myBtnContainer">…</div>`, and the entire `<div class="main">…</div>` with:

```html
<section id="portfolio" class="section">
    <h2 class="section-title" data-aos="fade-up" data-aos-duration="600">Portfolio</h2>
    <div id="portfolio-rows">
        <article class="pf-row" data-aos="fade-up" data-aos-duration="600">
            <span class="pf-num">01</span>
            <div class="pf-main">
                <div class="pf-top">
                    <h3 class="pf-name">ApptVia
                        <!-- To publish a link: set href and remove `hidden` -->
                        <a class="pf-link" href="" hidden target="_blank" aria-label="Visit ApptVia">↗</a>
                    </h3>
                    <span class="pf-dates">2026 — now</span>
                </div>
                <p class="pf-desc">AI-powered scheduling platform for service businesses — online booking, payments, notifications, and a multi-channel scheduling agent.</p>
                <div class="pf-tags">
                    <span class="tag">Next.js</span><span class="tag">TypeScript</span><span class="tag">PostgreSQL</span><span class="tag">OpenAI</span><span class="tag">Stripe</span><span class="tag">Twilio</span>
                </div>
            </div>
        </article>
        <article class="pf-row" data-aos="fade-up" data-aos-duration="600">
            <span class="pf-num">02</span>
            <div class="pf-main">
                <div class="pf-top">
                    <h3 class="pf-name">Coping-Gacha
                        <a class="pf-link" href="" hidden target="_blank" aria-label="Visit Coping-Gacha">↗</a>
                        <span class="pf-badge">GI 2026 Research</span>
                    </h3>
                    <span class="pf-dates">2026</span>
                </div>
                <p class="pf-desc">Therapeutic app with 10 AI personalities and cross-conversation memory — published as a Graphics Interface 2026 extended abstract and poster.</p>
                <div class="pf-tags">
                    <span class="tag">React Native</span><span class="tag">Expo</span><span class="tag">Claude</span><span class="tag">Supabase</span>
                </div>
            </div>
        </article>
        <article class="pf-row" data-aos="fade-up" data-aos-duration="600">
            <span class="pf-num">03</span>
            <div class="pf-main">
                <div class="pf-top">
                    <h3 class="pf-name">Peerio
                        <a class="pf-link" href="" hidden target="_blank" aria-label="Visit Peerio">↗</a>
                    </h3>
                    <span class="pf-dates">2025 — 2026</span>
                </div>
                <p class="pf-desc">Tinder-style two-way matching between people seeking project experience and project creators — hybrid matching engine with semantic similarity and Elo ranking.</p>
                <div class="pf-tags">
                    <span class="tag">React Native</span><span class="tag">Python</span><span class="tag">Supabase</span><span class="tag">Railway</span>
                </div>
            </div>
        </article>
        <article class="pf-row" data-aos="fade-up" data-aos-duration="600">
            <span class="pf-num">04</span>
            <div class="pf-main">
                <div class="pf-top">
                    <h3 class="pf-name">Mahjong Counter
                        <a class="pf-link" href="https://mahjong-counter.onrender.com" target="_blank" aria-label="Visit Mahjong Counter">↗</a>
                    </h3>
                    <span class="pf-dates">2020</span>
                </div>
                <p class="pf-desc">Score-keeping web app for Mahjong that tracks 10 gameplay stats — money won/lost, streaks, highest win.</p>
                <div class="pf-tags">
                    <span class="tag">HTML/CSS</span><span class="tag">JavaScript</span>
                </div>
            </div>
        </article>
    </div>
</section>
```

- [ ] **Step 2: Replace Projects CSS**

Delete from the `/* Projects Styles */` block: `#portfolio`, `#myBtnContainer`, `body>h1`, `.row`, its 600px media query, `.column`, `.row h4`, `.row .content p`, `.viewProject`, `.viewProject:hover`, `.show`, `.portfolio-buttons*` rules. Add:

```css
/* -------------------------------------------- */
/* Portfolio Styles (Feature Rows) */
/* -------------------------------------------- */

.pf-row {
    border-top: 1px solid var(--gray-2);
    display: flex;
    gap: 1.25rem;
    padding: 1.5rem 0;
    align-items: baseline;
}

.pf-num {
    font-family: var(--font-body);
    font-size: 0.8rem;
    font-weight: 500;
    color: var(--gray-3);
}

.pf-main {
    flex: 1;
}

.pf-top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
}

.pf-name {
    font-family: var(--font-display);
    font-weight: 800;
    font-size: clamp(1.5rem, 4vw, 2.1rem);
    letter-spacing: -0.03em;
    line-height: 1.1;
    color: var(--ink);
    margin: 0;
}

.pf-link {
    color: var(--accent);
    text-decoration: none;
    font-size: 0.8em;
}

.pf-link:hover {
    color: var(--ink);
    text-decoration: none;
}

.pf-badge {
    display: inline-block;
    vertical-align: middle;
    font-family: var(--font-body);
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #92400e;
    background: #fef3c7;
    border-radius: 999px;
    padding: 3px 10px;
    margin-left: 8px;
}

.pf-dates {
    font-family: var(--font-body);
    font-size: 0.85rem;
    color: var(--gray-4);
    white-space: nowrap;
}

.pf-desc {
    font-family: var(--font-body);
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--gray-5);
    max-width: 46rem;
    margin: 0.35rem 0 0.75rem;
}
```

- [ ] **Step 3: Verify**

Run: `grep -c "pf-row" index.html` → expect `4`. Run: `grep -c "myBtnContainer\|viewProject\|Under Construction\|Amogus\|Colour Game" index.html` → expect `0`. Run: `grep -c "portfolio-buttons\|viewProject" style.css` → expect `0`. Serve and check: 4 numbered rows, only Mahjong Counter shows the ↗ arrow, Coping-Gacha shows the amber GI 2026 badge.

- [ ] **Step 4: Commit**

```bash
git add index.html style.css
git commit -m "Portfolio: replace filtered grid with 4 Feature Rows"
```

---

### Task 6: Resume PDF refresh + Resume/footer restyle

**Files:**
- Modify: `Resume/Tony's Resume.pdf` (regenerated from `~/Documents/Resumes/resume.tex`)
- Modify: `index.html` (`#resume` block, footer)
- Modify: `style.css` (Resume + Footer blocks)

**Interfaces:**
- Consumes: `.section`, `.section-title` from Task 1.

- [ ] **Step 1: Compile the resume**

```bash
cd ~/Documents/Resumes && pdflatex -interaction=nonstopmode resume.tex && pdflatex -interaction=nonstopmode resume.tex
cp ~/Documents/Resumes/resume.pdf "/Users/tonylin/Developer/itstonylin.github.io/Resume/Tony's Resume.pdf"
```

Expected: exit 0, `resume.pdf` produced (run twice for stable refs). Verify: `pdftotext "Resume/Tony's Resume.pdf" - | head -5` contains "Tony Lin" and "Backyard Brands" (if pdftotext is missing, verify file mtime is new and size > 20KB).

- [ ] **Step 2: Restyle the Resume section HTML**

Replace `<h1 id="resume" …>Resume</h1>` and the `<div id="resume-container">…</div>` with:

```html
<section id="resume" class="section">
    <h2 class="section-title" data-aos="fade-up" data-aos-duration="600">Resume</h2>
    <div id="resume-container" data-aos="fade-up" data-aos-duration="600">
        <div class="resume-inner-container">
            <embed src="./Resume/Tony's Resume.pdf" width="100%" height="800px" value="Resume">
        </div>
        <a id="resume-download" href="Resume/Tony's Resume.pdf" target="_blank" download>Download PDF</a>
    </div>
</section>
```

- [ ] **Step 3: Restyle Resume + Footer CSS**

Replace the `/* Resume Styles */` block with:

```css
#resume-container .resume-inner-container {
    overflow-y: hidden;
    overflow-x: auto;
    border: 1px solid var(--gray-2);
    border-radius: 12px;
}

#resume-download {
    display: inline-block;
    font-family: var(--font-body);
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--paper);
    background: var(--accent);
    border-radius: 8px;
    padding: 10px 22px;
    margin: 1.25rem 0 3rem;
    text-decoration: none;
    transition: background 0.15s linear;
}

#resume-download:hover {
    background: var(--ink);
    color: var(--paper);
    text-decoration: none;
}
```

In the `/* Footer Styles */` block, replace the `footer p` rule with:

```css
footer p {
    text-align: center;
    font-size: 1.1rem;
    font-family: var(--font-body);
}
```

- [ ] **Step 4: Update footer HTML**

In the `<footer>`: change `<p>Let's Stay Connected!</p>` to `<p>Let's connect.</p>`, delete the `<p>-- Reach Out To Me If You Have Any Opportunities Or Questions --</p>` line, and change the copyright line to `<p>© Tony Lin 2026</p>`.

- [ ] **Step 5: Verify**

Run: `grep -c "Copyright Tony Lin 2020\|Reach Out To Me" index.html` → expect `0`. Serve and check: PDF embed shows the NEW resume (Backyard Brands visible on page 1), download button is a blue rounded button.

- [ ] **Step 6: Commit**

```bash
git add "Resume/Tony's Resume.pdf" index.html style.css
git commit -m "Refresh resume PDF, restyle Resume section and footer"
```

---

### Task 7: Full-page browser verification

**Files:** none modified (fix-forward if issues found).

- [ ] **Step 1: Serve and inspect**

```bash
cd /Users/tonylin/Developer/itstonylin.github.io && python3 -m http.server 8123
```

Load `http://localhost:8123` in a real browser (Playwright MCP tools if available). Check at desktop width (1440) and mobile width (390):

1. Hero: carousel cycles, Bebas Neue text animates, social icons present — UNCHANGED from before revamp.
2. Nav: exactly Home / About / Experience / Portfolio / Resume; hamburger works at mobile width.
3. About: new copy, photo/text side-by-side desktop, stacked mobile.
4. Experience: All shows 6 rows, Software shows 4; accordion opens/closes; row 01 open on load.
5. Portfolio: 4 rows; only Mahjong Counter has a working link; badge on Coping-Gacha.
6. Resume: new PDF renders in embed; download works.
7. Footer: "Let's connect." + © 2026.
8. Browser console: zero errors on load and after clicking filters/accordions.

- [ ] **Step 2: Screenshot evidence**

Capture full-page screenshots at both widths; report them with the completion summary.

- [ ] **Step 3: Push (only after user sees the result)**

Do NOT `git push` — leave publishing to the user (site deploys straight to itstonylin.ca from master).

