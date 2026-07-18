# Home — Image audit (2026-07-18)

Audit scope: `config/visual-assets.ts` + all Home sections that consume it.

**Do not replace images until this plan is approved.**

---

## Summary

| Status | Count |
|--------|------:|
| Working (HTTP 200) | 9 |
| **Broken (HTTP 404)** | **2** |
| Duplicated across sections | 1 photo ID used twice |
| Visual consistency flags | 4 |

---

## Broken — must fix before public preview

~~These URLs return **404** from Unsplash~~ **Fixed 2026-07-18:**

| ID | Used in | Replacement |
|----|---------|-------------|
| ~~`photo-1511818963809-9ae386419662`~~ | `homeVisuals.growth` | `photo-1545324418-cc1a3fa10c00` (200 OK) |
| ~~`photo-1548199973-03cce0bbc874`~~ | `homeVisuals.methodology` | `photo-1497366754035-f200968a6e72` (200 OK) |

---

## Duplicated

| Photo ID | Used in | Notes |
|----------|---------|-------|
| `photo-1472851294608-062f824d29cc` | `homeVisuals.cta` **and** `divisionVisuals.international-expansion` | Same skyline appears in CTA background and International Expansion card — reduces editorial variety |

---

## Working (verified HTTP 200)

| Asset key | Photo ID | Home section |
|-----------|----------|--------------|
| `home.hero` | `photo-1486406146926-c627a92ad1ab` | Hero (cinematic, architecture) |
| `home.vision` | `photo-1497366216548-37526070297c` | Vision (minimal workspace) |
| `home.cta` | `photo-1472851294608-062f824d29cc` | CTA (city aerial) |
| `div.growth-marketing` | `photo-1545324418-cc1a3fa10c00` | Divisions card 01 |
| `div.artificial-intelligence` | `photo-1451187580459-43490279c0fa` | Divisions card 02 |
| `div.business-consulting` | `photo-1497366754035-f200968a6e72` | Divisions card 03 |
| `div.international-expansion` | `photo-1472851294608-062f824d29cc` | Divisions card 04 (duplicate) |
| `div.investment-ventures` | `photo-1611974789855-9c2a0a7236a3` | Divisions card 05 |
| `div.real-estate-hospitality` | `photo-1512917774080-9991f1c4c750` | Divisions card 06 |

---

## Visual consistency flags (not broken, but weak for premium positioning)

| Issue | Asset | Recommendation in plan |
|-------|-------|------------------------|
| Abstract “tech globe” | `div.artificial-intelligence` | Replace with architectural or abstract **non-SaaS** editorial frame |
| Stock chart / dashboard feel | `div.investment-ventures` | Replace with luxury architecture, abstract gold/minimal, or capital-city skyline |
| Same interior language | `home.vision` + `div.business-consulting` | Both corporate-interior — acceptable but consider distinct treatment |
| CTA + division duplicate | `home.cta` + `div.international-expansion` | Assign unique photo to one of the two |

---

## Proposed replacement plan (pending approval)

**Principle:** architecture, global cities, minimal interiors, abstract light — no handshakes, no dashboards, no people-at-screens.

| Slot | Direction | Suggested search keywords (Unsplash) |
|------|-----------|--------------------------------------|
| `home.growth` | Angular modern architecture / strategy | “minimal architecture facade”, “concrete building light” |
| `home.methodology` | Calm editorial interior or geometric architecture | “white interior architecture”, “museum minimal” |
| `div.international-expansion` | **New** distinct global city aerial (not same as CTA) | “city aerial night”, “dubai skyline architecture” |
| `div.artificial-intelligence` | Abstract light / structure (not globe UI) | “abstract technology light”, “glass architecture detail” |
| `div.investment-ventures` | Luxury material or city finance district | “marble architecture”, “financial district aerial” |

**Process after approval:**

1. Select 5 replacement URLs; verify each with HTTP 200 before merge.
2. Update only `config/visual-assets.ts` (single source of truth).
3. Smoke-test `/es` and `/en` Home scroll.
4. Redeploy Vercel Preview.

---

## Homepage image map (reference)

```
Hero          → homeVisuals.hero
Vision        → homeVisuals.vision
Divisions ×6  → divisionVisuals[slug] via division-card.tsx
Growth        → homeVisuals.growth
Proof         → (no images)
Methodology   → homeVisuals.methodology
CTA           → homeVisuals.cta
```
