# Global Solutions — Architecture

> Firma internacional de consultoría de crecimiento empresarial.

## Overview

Global Solutions is built on Next.js 15 with a content-driven, division-centric architecture designed to scale from a marketing website to a full consulting platform.

## Core Principles

1. **Vision over services** — Home sells the firm's vision; SEO lives in divisions, services, and insights.
2. **Divisions as core unit** — All capabilities are organized under strategic divisions.
3. **Content-driven** — Adding content never requires modifying components or routing.
4. **Server-first** — React Server Components by default; client components only for interactivity.
5. **SEO/SEM separation** — Branding pages vs. keyword-optimized pages have distinct metadata strategies.

## Architecture Layers

```
┌─────────────────────────────────────────────┐
│  app/           Routes & pages              │
├─────────────────────────────────────────────┤
│  components/    UI, sections, motion, layout│
├─────────────────────────────────────────────┤
│  content/       Data source of truth        │
│    locales/     Per-language content        │
│    registry/    Central indexes             │
├─────────────────────────────────────────────┤
│  lib/           Utilities, SEO, i18n        │
├─────────────────────────────────────────────┤
│  config/        Theme, site, features, SEO  │
├─────────────────────────────────────────────┤
│  types/         TypeScript interfaces       │
└─────────────────────────────────────────────┘
```

## Page Categories

### Branding Pages (Home, About, Contact, Methodology)
- Purpose: trust, conversion, brand positioning
- Metadata: `createBrandingMetadata()` — minimal keyword optimization
- UX priority: maximum whitespace, calm, authority

### SEO Pages (Divisions, Services, Insights)
- Purpose: organic search positioning
- Metadata: `createSeoMetadata()` — keyword-targeted titles, descriptions, structured data
- Content: rich, keyword-optimized copy with internal linking

### SEM Pages (Services, Landing Pages `/lp/`)
- Purpose: Google Ads conversion
- Metadata: `createSemMetadata()` — conversion-focused titles
- Features: custom CTAs, FAQ schema, noindex option for test pages

## Content Flow

```
content/locales/es/divisions/*.ts
        ↓
content/registry/divisions.registry.ts
        ↓
lib/content/index.ts (getters)
        ↓
app/divisions/[slug]/page.tsx (render + SEO)
```

Adding a division = 1 content file + 1 registry import. Zero component changes.

## Feature Flags

All future capabilities are controlled via `config/features.ts`:

```typescript
features.i18n           // Multi-language routing
features.blog           // Insights / Blog
features.clientPortal   // Private client area
features.investorPortal // Investor portal
features.conversationalAI
features.crm            // CRM integration
features.semLandingPages
```

## Future Routes (prepared, not implemented)

| Route | Purpose | Phase |
|-------|---------|-------|
| `/insights` | SEO blog | v2 |
| `/lp/[slug]` | SEM landing pages | v2 |
| `/client` | Client portal | v3 |
| `/investor` | Investor portal | v3 |
| `/api/chat` | Conversational AI | v3 |

## Tech Stack

- **Next.js 15** — App Router, RSC, Metadata API
- **TypeScript** — Strict mode
- **Tailwind CSS v4** — Utility-first + CSS variables
- **Framer Motion** — Subtle animations (fade, slide)
- **Geist Sans/Mono** — Typography

## Directory Structure

See the full tree in the project root. Key directories:

- `app/` — Next.js routes
- `components/ui/` — Design system primitives
- `components/sections/` — Home page sections (Phase 2)
- `components/motion/` — Animation wrappers
- `content/` — All content data
- `config/` — Site, theme, features, SEO config
- `docs/` — Project documentation
