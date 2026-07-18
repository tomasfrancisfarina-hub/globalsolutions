# Design System

> Luminous, authoritative, calm. White background. Black text. Generous whitespace.

## Philosophy

> The complexity lives behind the system. In front of the user, only clarity.

Every design decision is evaluated with one question: *Does this transmit authority and calm, or does it try to impress?*

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#FFFFFF` | Page background — pure white |
| `foreground` | `#111111` | Primary text, buttons |
| `muted` | `#6B6B6B` | Body text, descriptions |
| `subtle` | `#999999` | Eyebrows, labels, metadata |
| `border` | `#E8E8E8` | Card borders, dividers |
| `border-hover` | `#D4D4D4` | Hover state on cards |
| `accent-soft` | `#F5F5F5` | Hover backgrounds, tags |
| `success` | `#2D6A4F` | Positive metrics only |

**Rule:** The page is white + black + grays. Color only appears in data (metrics) and never as decoration.

## Typography

- **Font:** Geist Sans (single family for coherence)
- **Mono:** Geist Mono (metrics, numbers)

| Scale | Classes | Usage |
|-------|---------|-------|
| Hero | `text-5xl md:text-7xl font-medium tracking-tight` | Homepage headline |
| H2 | `text-3xl md:text-5xl font-medium tracking-tight` | Section titles |
| H3 | `text-xl md:text-2xl font-medium tracking-tight` | Card titles |
| Body | `text-base md:text-lg leading-relaxed text-muted` | Paragraphs |
| Lead | `text-lg md:text-xl leading-relaxed text-muted` | Intro paragraphs |
| Caption | `text-sm text-subtle` | Small text |
| Eyebrow | `text-xs uppercase tracking-widest text-subtle` | Section labels |

**Rules:**
- Headlines in medium (500), never bold
- Max 2 visible sizes per section
- No gradient text
- No word-by-word reveal animations

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| Section Y | `py-32 md:py-48` | Vertical section padding |
| Hero Y | `py-32 md:py-48 lg:py-56` | Hero section |
| Container | `max-w-5xl` (1024px) | Default content width |
| Container Wide | `max-w-6xl` (1152px) | Division grids |
| Card Padding | `p-8 md:p-10` | Internal card spacing |

**Rule:** If a section feels "full", remove content or increase padding.

## Surfaces

- **No shadows** — separation by space and typography, not layers
- **No glass/blur** — except header border on scroll
- **Cards:** `border border-border rounded-2xl` — hover changes border color only
- **Buttons:** solid black (primary) or bordered (secondary)

## Animation

| Animation | Behavior | Duration |
|-----------|----------|----------|
| Fade in | opacity 0→1 on viewport enter | 500ms |
| Slide up | translateY(12px)→0 + fade | 500ms |
| Stagger | 60ms between grid items | — |
| Hover (cards) | border color change | 200ms |
| Hover (links) | opacity change | 150ms |

**Never use:** text reveal, parallax, magnetic hover, scale transforms, gradients, particles, scroll hijacking.

Always respect `prefers-reduced-motion`.

## Component Validation Checklist

Before implementing any component:

1. Can something visual be removed without losing meaning? → Remove it
2. Are more than 2 colors visible? → Reduce
3. Is the animation consciously noticeable? → Soften or remove
4. Does it look like a tech agency/startup website? → Redesign
5. Would a CEO of a €50M company feel confident? → If not, adjust

## References

Apple · Notion · OpenAI · McKinsey · Framer · Vercel (light mode)
