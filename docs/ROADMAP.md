# Roadmap

## Phase 0 — Foundation ✅
- [x] Project setup (Next.js 15, TypeScript, Tailwind v4)
- [x] Folder structure with future stubs
- [x] Design tokens and CSS variables
- [x] TypeScript types and interfaces
- [x] 6 divisions with content
- [x] 6 services with SEO metadata
- [x] Content registries and getters
- [x] SEO/SEM metadata helpers
- [x] Structured data (JSON-LD)
- [x] Sitemap and robots
- [x] Feature flags
- [x] i18n middleware (disabled)
- [x] UI component primitives
- [x] Motion wrappers
- [x] Documentation

## Phase 1 — Design System + Layout ✅
- [x] Header (sticky, border on scroll)
- [x] Footer (divisions, legal, contact)
- [x] Mobile menu
- [x] PageLayout wrapper
- [x] Locale switcher (ES / EN)

## Phase 2 — Home Page ✅
- [x] Hero section (vision-first)
- [x] Vision section
- [x] Divisions grid (6 cards)
- [x] Growth process section
- [x] Proof/metrics section
- [x] Methodology preview
- [x] CTA section

## Phase 3 — Division Pages ✅
- [x] Division index page (polished)
- [x] Division detail pages (6 × 2 locales)
- [x] Capabilities display with service links
- [x] Related services linking
- [x] Division-specific CTAs
- [x] Metadata + structured data per division

## Phase 4 — Secondary Pages ✅
- [x] Methodology page (full content)
- [x] Case studies index + detail (3 placeholders × 2 locales)
- [x] About page with testimonials (placeholder)
- [x] 404 page (locale-aware)
- [x] Privacy + Terms stubs

## Phase 5 — SEO + Performance
- [x] Sitemap updated (case studies, about)
- [x] Web manifest
- [x] OG images (root + locale)
- [x] Placeholder noindex + sitemap exclusion
- [x] Staging indexing control (`NEXT_PUBLIC_ALLOW_INDEXING`)
- [ ] Lighthouse audit (95+ target) — run locally before launch
- [ ] Accessibility audit — run locally before launch

## Phase 6 — Contact + Deploy
- [x] Contact form (API ready)
- [x] Vercel prep (`vercel.json`, `docs/DEPLOY.md`)
- [x] Favicon + apple-icon (dynamic)
- [x] Analytics + Search Console stubs (env-based, no fake IDs)
- [ ] Production deploy on Vercel

---

## Future (v2+)

| Feature | Flag | Description |
|---------|------|-------------|
| i18n (English) | `features.i18n` | Activate `[locale]` routing |
| Insights/Blog | `features.blog` | SEO content marketing |
| SEM Landing Pages | `features.semLandingPages` | `/lp/[slug]` pages |
| CRM Integration | `features.crm` | HubSpot/Pipedrive |
| Analytics | `features.analytics` | Vercel Analytics / Plausible |
| Client Portal | `features.clientPortal` | Private client area |
| Investor Portal | `features.investorPortal` | Investor dashboard |
| Conversational AI | `features.conversationalAI` | Chat assistant |

To activate a feature: set its flag to `true` in `config/features.ts`.
