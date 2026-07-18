# Adding Placeholder Content

Content marked as `status: "placeholder"` displays a visible badge in the UI.

## To replace placeholder content

1. Edit the relevant file in `content/locales/{locale}/`
2. Change `status: "placeholder"` to `status: "published"`
3. Remove `[Placeholder]` prefixes from copy
4. No component or layout changes required

## Content locations

| Type | Location |
|------|----------|
| Home metrics | `content/locales/{locale}/home.ts` → `proof` |
| Case studies | `content/locales/{locale}/case-studies/index.ts` |
| Testimonials | `content/locales/{locale}/about.ts` → `testimonials` |
| Legal | `content/locales/{locale}/` (privacy/terms pages) |

## Case studies

Add a new case study:
1. Add entry to `content/locales/es/case-studies/index.ts`
2. Mirror in `content/locales/en/case-studies/index.ts`
3. Route `/case-studies/[slug]` generates automatically

## SEO behavior

While `status: "placeholder"`:

- UI shows `PlaceholderBadge` on the page
- Metadata uses `noindex, nofollow`
- URL is **excluded** from `/sitemap.xml`

When content is verified, set `status: "published"` to include in sitemap and allow indexing.
