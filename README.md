# Jake Bowen Portfolio

A modern, storytelling-first personal website showcasing Jake Bowen's journey from athlete to software engineer.

## Features

- **Modern Design**: Dark theme with gradient accents, smooth animations
- **Responsive**: Fully mobile-optimized
- **Story-First**: Narrative-driven content structure
- **Fast**: Next.js 15 with optimizations
- **Interactive**: Framer Motion animations

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- **Home** (`/`) - Hero section with overview and CTAs
- **Projects** (`/projects`) - Detailed project showcase
- **About** (`/about`) - Personal story and background

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx (home)
│   ├── globals.css
│   ├── projects/
│   │   └── page.tsx
│   └── about/
│       └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ProjectCard.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── CLAUDE.md (context for development)
```

## Deploy to Vercel

```bash
git push origin main
```

The site will automatically deploy to Vercel.

## Contact

- Email: jakeeb05@gmail.com
- LinkedIn: linkedin.com/in/JakeBowen
- GitHub: github.com/JakeBowen2005
