# Global Solutions

> Firma internacional de consultoría de crecimiento empresarial.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Next.js 15** — App Router, RSC
- **TypeScript** — Strict mode
- **Tailwind CSS v4** — Design tokens
- **Framer Motion** — Subtle animations
- **Geist Sans** — Typography

## Project Structure

```
app/           → Routes and pages
components/    → UI, sections, motion, layout
content/       → Content data (divisions, services)
config/        → Theme, site, features, SEO
lib/           → Utilities, SEO helpers, i18n
types/         → TypeScript interfaces
docs/          → Documentation
```

## Documentation

- [Architecture](./docs/ARCHITECTURE.md) — Technical overview
- [Design System](./docs/DESIGN-SYSTEM.md) — Visual guidelines
- [SEO Strategy](./docs/SEO.md) — SEO/SEM approach
- [Adding a Division](./docs/ADDING-A-DIVISION.md) — Content guide
- [Roadmap](./docs/ROADMAP.md) — Development phases
- [i18n](./docs/I18N.md) — Internationalization guide

## Development Phases

| Phase | Status | Description |
|-------|--------|-------------|
| 0 | ✅ | Foundation, types, content, SEO |
| 1 | 🔜 | Design system + layout |
| 2 | | Home page |
| 3 | | Division pages |
| 4 | | Secondary pages |
| 5 | | SEO + performance |
| 6 | | Contact + deploy |

## Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run type-check   # TypeScript check
```
