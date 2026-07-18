# Adding a New Division

> Guide to add a division in ~5 minutes without modifying core architecture.

## Steps

### 1. Create the content file

Create `content/locales/es/divisions/your-division.ts`:

```typescript
import type { Division } from "@/types";

export const yourDivision: Division = {
  id: "your-division",
  slug: "your-division",
  name: "Your Division Name",
  tagline: "One-line aspirational statement",
  description: "Full narrative — 2-3 paragraphs about this division.",
  vision: "Why this division exists.",
  capabilities: [
    {
      id: "capability-id",
      name: "Capability Name",
      description: "Brief description.",
    },
  ],
  order: 7, // Display order
  featured: true, // Show on homepage
  seo: {
    title: "SEO Title — Keyword Target",
    description: "Meta description optimized for search (150-160 chars).",
    keywords: ["keyword 1", "keyword 2"],
  },
  locale: "es",
};
```

### 2. Register in the divisions registry

Add to `content/registry/divisions.registry.ts`:

```typescript
import { yourDivision } from "@/content/locales/es/divisions/your-division";

export const divisions: Division[] = [
  // ... existing divisions
  yourDivision,
].sort((a, b) => a.order - b.order);
```

### 3. Update navigation (optional)

Add to `content/locales/es/navigation.ts` footer links if needed.

### 4. Done

The following are generated automatically:
- Route: `/divisions/your-division`
- Sitemap entry
- Static params for build
- SEO metadata + structured data
- Division card on homepage (if `featured: true`)

## Adding Services to a Division

Create a service in `content/registry/services.registry.ts`:

```typescript
{
  id: "service-id",
  slug: "service-slug",
  name: "Service Name",
  shortDescription: "...",
  fullDescription: "...",
  divisionId: "your-division", // Links to division
  features: ["Feature 1", "Feature 2"],
  faq: [{ question: "...", answer: "..." }],
  order: 1,
  seo: {
    title: "Service Name — Keyword Target",
    description: "...",
    keywords: ["..."],
  },
  sem: {
    conversionGoal: "consultation",
    ctaText: "Custom CTA for Google Ads",
  },
  locale: "es",
}
```

Route `/services/service-slug` is generated automatically.

## Checklist

- [ ] Content file created with all required fields
- [ ] Registered in `divisions.registry.ts`
- [ ] SEO title and description optimized
- [ ] Capabilities defined
- [ ] Navigation updated (if needed)
- [ ] `featured: true` if should appear on homepage
