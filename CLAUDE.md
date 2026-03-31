# Jake Bowen Personal Website — Project Context

## About Jake Bowen

**Contact & Links**
- Phone: (925) 660-9568
- Email: jakeeb05@gmail.com
- Location: Fullerton, CA
- LinkedIn: linkedin.com/in/jake-bowen-6b1269338/
- GitHub: github.com/JakeBowen2005
- Live App: clearbid.us

**Personal**
- 20 years old, CS student at Cal State Fullerton
- B.S. Computer Science, Minor: Mathematics
- GPA: 3.66 (don't display on site, exists for reference)
- Expected Graduation: May 2027
- Grew up in Bay Area, now in Fullerton
- Family-oriented, valued hard work growing up
- Competitive athlete (basketball most of life, now serious runner + jiu jitsu training)

**Personality & Brand**
- **Core Story**: "I'm early. I don't have internships yet, but I genuinely can't stop building things. I want to learn from engineers better than me."
- **Key Traits**: Ambitious, direct, learner, builder mentality, competitive drive translates to work
- **Hero Narrative**: Athlete's mindset (showing up consistently, learning through doing) applies to building products
- **Work Ethic**: Hospitality background taught communication, composure under pressure, customer focus

## Technical Skills

**Languages/Frameworks**
- Python, Django, SQL (PostgreSQL), C++, R, MATLAB, HTML, CSS, Tailwind CSS

**Data/Analysis**
- Pandas, NumPy, Matplotlib, yfinance

**AI/APIs**
- Anthropic Claude API, Google Places API, Server-Sent Events (SSE)

**Tools/Infrastructure**
- Git, GitHub, Render, AWS S3, Resend

## Projects (In Priority Order)

### ClearBid — THE HERO PROJECT
**URLs**: clearbid.us | clearbid.onrender.us | github.com/JakeBowen2005/ClearBid

**Timeline**: Started mid-March 2026, V1 live end of March 2026 (2-3 weeks to market)
- **KEY STORY**: From zero to live product with real customers in the pipeline in 2 weeks — this is the speed-to-market hero moment

**What It Is**
- Founded and sole-developed production SaaS platform (original partner dropped out)
- Automates vendor bid management for HOA communities and property management companies
- Live with active customer outreach in Orange County, CA

**Technical Stack**
- Backend: Django 6, Python 3.13, PostgreSQL
- Deployment: Render, AWS S3, Resend (transactional email)
- Frontend: Tailwind CSS
- Features: Tokenized vendor invitations, no-account-required bid forms, dual-portal system

**What Makes It Special** (What Jake's Proud Of)
- **Feature Complexity**: Three AI integrations seamlessly built
  - Batch vendor review summarization
  - Real-time multi-page contract generation via SSE streaming
  - AI-powered PDF contract parsing auto-populating fields
- Google Places API integration with 2-stage AJAX loading + 24-hour caching (smart cost optimization)
- Automated bid scoring (0-100 pts) across price, timeline, licensing, HOA experience
- Dual-portal system: individual HOA boards vs. property management company dashboards
- Automated contract renewal alerts at 90/60/30/14 days

**Customer Focus**
- Jake handles all development and outreach (original co-founder departed)
- Target: HOA management companies with 5-50 communities in Southern California
- Currently in active demo/outreach phase

---

### Stock Market Dashboard
**URLs**: github.com/JakeBowen2005/Stock_Dashboard | stock-dashboard-uef7.onrender.com
**Timeline**: Feb 2026 - Mar 2026

- Django stock dashboard with user accounts and watchlists
- Python analytics engine: returns, CAGR, drawdown, volatility, moving averages, valuation metrics
- Price/percentage alerts with background checks and push delivery
- Built with Django, Pandas, yfinance/Finnhub, PostgreSQL, Redis/Celery, Render

---

### Garmin Running Data Analysis
**URLs**: github.com/JakeBowen2005/Garmin-running-summary
**Timeline**: Sep 2025 - Jan 2026

- Personal data analysis project (shows athletic side + technical curiosity)
- Cleaned and analyzed own Garmin running data with Python/Pandas
- Visual dashboards (Matplotlib) for pace consistency, mileage trends, performance progress
- Demonstrates ability to turn personal passion into data insight

---

## Work Experience (Shows Grounded Nature)

1. **Courtyard Marriott — Bistro Attendant** (Sep 2025 - Present)
   - Fullerton, CA
   - POS systems, fast-paced café environment
   - Customer focus

2. **Lafayette Park Hotel — Food Runner** (Mar 2023 - Aug 2025)
   - Lafayette, CA
   - 2+ years, accuracy + speed critical, guest satisfaction

3. **Additional Work History** (From summary)
   - Ultimate Fieldhouse (basketball gym) — 2021-2023
   - Beets Hospitality — Summer 2022 (4 months)
   - Mathnasium (math tutor) — Aug 2024 - Jan 2025

## Website Strategy & Design

**Core Narrative**
- Life story: athlete → hospitality worker → builder
- Eager to get foot in door, learn by doing
- Competitive drive from sports applies to coding
- Built real product (ClearBid) that real people are using

**Site Structure**
- 3 separate pages: Home | Projects | About
- BUT told cohesively as one narrative journey
- Storytelling-first design with smooth animations
- One strategic interactive element (to emerge naturally during design)

**Design/Aesthetic**
- Storytelling-first (not specs-heavy)
- Smooth scroll animations, visual journey
- Hybrid approach: some animations + one interactive element
- Modern but personal
- Dark/light mode support encouraged

**Call-to-Action**
- Email: jakeeb05@gmail.com
- LinkedIn: linkedin.com/in/JakeBowen
- Live app: clearbid.us (show real product)
- Both email + LinkedIn CTAs prominent

**Key Emphasis**
1. **Speed**: 2-week ClearBid launch is the hero story
2. **Balance**: 50% ClearBid/projects + 50% personal story
3. **Athlete's Mindset**: How sports (jiu jitsu, running, basketball) shaped work ethic
4. **Hunger**: "I'm early, I want to learn from engineers better than me"
5. **Real Work**: Live products with real customers, not just school projects

## Tech Stack for Site

- **Framework**: Next.js 15+ with React 19
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Deployment**: Vercel (fastest, native Next.js)
- **Interactive Element**: TBD (will emerge during design, likely project showcase or timeline)

## Design Direction

- Clean, modern, minimalist base
- Warm human touches (athlete background, honest tone from cover letter)
- Color scheme: Dark blue/slate background with blue accent (matches tech feel)
- Typography: Modern sans-serif, readable
- No overwhelming animations — subtle, purposeful
- Mobile-first, fully responsive
- Fast performance (Vercel + Next.js optimizations)

## Tone

- Honest, direct, humble-but-confident
- Show the work, not just the credentials
- Personal voice (like the cover letter — genuine, not corporate-speak)
- Emphasize growth mindset and willingness to learn

## Success Criteria

- Recruiters understand Jake's story in 30 seconds (hero: 2-week ClearBid launch)
- Clear picture of technical depth (ClearBid's 3 AI integrations, Stock Dashboard analytics)
- Personal side is equally visible (athlete → builder connection)
- Easy to contact (email + LinkedIn prominent)
- Mobile beautiful and fast
- Memorable enough to stand out from 100 other CS student portfolios

## Content + Media Update Notes (Mar 31, 2026)

- Site copy has been upgraded to a more professional, recruiter-facing tone while preserving Jake's authentic voice.
- New reusable component: `components/ImagePlaceholder.tsx`.
- Current placeholder slots now exist across pages for:
  - Primary headshot
  - Athlete/builder personal image
  - ClearBid dashboard/workflow screenshots
  - Per-project screenshot areas on the Projects page
  - About-page personal/athletics/professional story photos
- Placeholder blocks are intentionally descriptive so screenshots/photos can be swapped in later without layout refactors.
- Education section on-site should not display GPA.
