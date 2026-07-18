/**
 * Global Solutions — Design Tokens
 *
 * Luminous, authoritative, calm.
 * White background. Black text. Generous whitespace.
 * See docs/DESIGN-SYSTEM.md for full guidelines.
 */

export const colors = {
  background: "#FFFFFF",
  surface: "#FFFFFF",
  foreground: "#111111",
  muted: "#6B6B6B",
  subtle: "#999999",
  border: "#E8E8E8",
  borderHover: "#D4D4D4",
  accent: "#111111",
  accentSoft: "#F5F5F5",
  success: "#2D6A4F",
} as const;

export const typography = {
  font: "var(--font-geist-sans)",
  fontMono: "var(--font-geist-mono)",
  scale: {
    hero: "text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]",
    h2: "text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]",
    h3: "text-xl md:text-2xl font-medium tracking-tight",
    body: "text-base md:text-lg font-normal leading-relaxed text-muted",
    lead: "text-lg md:text-xl font-normal leading-relaxed text-muted",
    caption: "text-sm font-normal text-subtle",
    eyebrow: "text-xs uppercase font-medium tracking-widest text-subtle",
  },
} as const;

export const spacing = {
  sectionY: "py-32 md:py-48",
  sectionGap: "gap-16 md:gap-24",
  container: "max-w-5xl",
  containerWide: "max-w-6xl",
  cardPadding: "p-8 md:p-10",
  stackGap: "space-y-6",
} as const;

export const surfaces = {
  card: "border border-border rounded-2xl bg-background",
  cardHover: "border-border-hover transition-colors duration-300",
} as const;

export const animation = {
  duration: {
    fast: 200,
    normal: 400,
    slow: 700,
  },
  /** Framer Motion cubic-bezier — premium ease-out */
  easing: [0.22, 1, 0.36, 1] as const,
  viewport: { once: true, margin: "-100px" as const },
} as const;

export const theme = {
  colors,
  typography,
  spacing,
  surfaces,
  animation,
} as const;

export type Theme = typeof theme;
