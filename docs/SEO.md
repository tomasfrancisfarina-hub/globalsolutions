# SEO & SEM Strategy

> Home = branding. Divisions, Services, Insights = SEO/SEM.

## Strategy Overview

```
┌──────────────────────────────────────────────┐
│  HOME              Branding + Conversion     │
│  (no keyword optimization)                   │
├──────────────────────────────────────────────┤
│  DIVISIONS         Primary SEO targets       │
│  (division-level keywords)                   │
├──────────────────────────────────────────────┤
│  SERVICES          Keyword landing pages     │
│  (specific service keywords)                 │
├──────────────────────────────────────────────┤
│  INSIGHTS/BLOG     Content marketing SEO     │
│  (long-tail keywords, topical authority)     │
├──────────────────────────────────────────────┤
│  LP/[slug]         SEM landing pages         │
│  (Google Ads conversion pages)               │
└──────────────────────────────────────────────┘
```

## Page Categories

### Branding Pages
**Routes:** `/`, `/about`, `/contact`, `/methodology`

- Metadata via `createBrandingMetadata()`
- Focus: brand name, trust, conversion
- No keyword stuffing
- Structured data: Organization, WebSite

### SEO Pages
**Routes:** `/divisions`, `/divisions/[slug]`, `/services/[slug]`, `/insights`, `/insights/[slug]`

- Metadata via `createSeoMetadata()`
- Keyword-targeted titles and descriptions
- Rich content with internal linking
- Structured data: Service, BreadcrumbList, FAQPage, Article
- Included in sitemap with high priority (0.9)

### SEM Pages
**Routes:** `/services/[slug]`, `/lp/[slug]`

- Metadata via `createSemMetadata()`
- Conversion-focused titles
- Custom CTAs per campaign
- FAQ schema for ad extensions
- `/lp/` routes excluded from sitemap and robots (noindex option)

## Metadata Helpers

```typescript
// Branding (Home, About, Contact)
createBrandingMetadata({ title, description, path })

// SEO (Divisions, Services, Insights)
createSeoMetadata({ seo, path, type })

// SEM (Google Ads landing pages)
createSemMetadata({ seo, path })
```

## Structured Data

| Page | Schema Types |
|------|-------------|
| Home | Organization, WebSite |
| Division | Service, BreadcrumbList |
| Service | Service, FAQPage, BreadcrumbList |
| Insight | Article, BreadcrumbList |
| Landing | Service, BreadcrumbList |

## Internal Linking Strategy

```
Home → Divisions → Services → Insights
  ↑         ↑          ↑          ↑
  └─────────┴──────────┴──────────┘
         (cross-links between all)
```

- Division pages link to their services
- Service pages link back to parent division
- Insights link to related divisions and services
- Footer links to all divisions

## Sitemap

Auto-generated at `/sitemap.xml`:
- Static pages (priority 0.8–1.0)
- Division pages (priority 0.9)
- Service pages (priority 0.9)
- Excludes: `/api/`, `/lp/`

## Adding SEO Content

### New Service (keyword target)
1. Add to `content/registry/services.registry.ts`
2. Include `seo.title`, `seo.description`, `seo.keywords`
3. Add FAQ for structured data
4. Route and sitemap entry auto-generated

### New Insight (content marketing)
1. Create in `content/locales/es/insights/`
2. Link to related division/service via `divisionId`/`serviceId`
3. Include `seo.keywords` for long-tail targeting

### New SEM Landing Page
1. Create in `content/locales/es/landing-pages/`
2. Set `seo.noIndex: true` for test pages
3. Configure `sem.conversionGoal` and `sem.ctaText`
4. Route: `/lp/[slug]`

## Google Ads Integration (v2)

Service pages include `sem` config:
```typescript
sem: {
  conversionGoal: "consultation",
  ctaText: "Solicitar consultoría de marketing digital",
  campaignId: "campaign-123",
  utmSource: "google",
}
```

Dedicated landing pages at `/lp/[slug]` for campaign-specific pages with:
- Focused copy (no navigation distractions)
- Single CTA
- FAQ schema for ad extensions
- Conversion tracking ready
