# Pre-launch checklist — Global Solutions

Use this list before enabling public indexing and external audit.

## Content & placeholders

- [ ] Replace `[Placeholder]` copy in legal pages (`/privacy`, `/terms`)
- [ ] Replace placeholder case studies or set `status: "published"` only when verified
- [ ] Replace placeholder testimonials on `/about`
- [ ] Replace placeholder metrics on Home Proof section (or keep badge if still illustrative)
- [ ] Confirm all placeholder badges visible where `status: "placeholder"`
- [ ] Confirm placeholder case studies **not** in `/sitemap.xml`
- [ ] Confirm placeholder case study pages return `noindex` (view page source / SEO tools)

## Technical

- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] No console errors on key routes: `/es`, `/en`, divisions, services, contact
- [ ] Mobile menu opens/closes; body scroll locked when open
- [ ] Locale switcher works ES ↔ EN
- [ ] 404 page shows correct language from URL
- [ ] Contact form success and error states work

## SEO & metadata

- [ ] `NEXT_PUBLIC_SITE_URL` set to production domain
- [ ] `NEXT_PUBLIC_ALLOW_INDEXING=true` on production only
- [ ] hreflang alternates on main pages (ES, EN, x-default)
- [ ] `/robots.txt` allows crawling (production)
- [ ] `/sitemap.xml` lists indexable pages only
- [ ] OG images render (`/opengraph-image`, `/es/opengraph-image`)
- [ ] Favicon visible (`/icon`, `/apple-icon`)

## Analytics & Search Console

- [ ] GA4 property created (real ID, not placeholder)
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` configured
- [ ] `NEXT_PUBLIC_ENABLE_ANALYTICS=true`
- [ ] Search Console property added
- [ ] `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` configured
- [ ] Sitemap submitted in Search Console

## Performance & accessibility (Lighthouse)

Run Lighthouse in Chrome Incognito on production URL (or local `npm run build && npm run start`):

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| `/en` | | | | |
| `/en/divisions/growth-marketing` | | | | |
| `/en/contact` | | | | |

Target: **90+** on all categories where reasonable without real assets/CDN tuning.

- [ ] Document scores in this file or team wiki
- [ ] Fix any critical a11y issues (contrast, labels, focus)

## Legal & contact

- [ ] Real contact email in `config/site.ts`
- [ ] Privacy policy reviewed by legal
- [ ] Terms of service reviewed by legal
- [ ] Contact form delivery configured (webhook/email — currently logs only)

## Deploy

- [ ] Vercel project connected
- [ ] Production env vars set (see `docs/DEPLOY.md`)
- [ ] Preview env: `NEXT_PUBLIC_ALLOW_INDEXING=false`
- [ ] Custom domain + SSL active
- [ ] Smoke test production URLs

## Out of scope (pre-launch)

- [ ] Blog / Insights (`features.blog` remains `false`)
- [ ] External Claude audit (after this checklist is complete)
- [ ] Client / investor portals

---

**Sign-off**

| Role | Name | Date |
|------|------|------|
| Product | | |
| Engineering | | |
| Content | | |
