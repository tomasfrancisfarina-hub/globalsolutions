/**
 * Editorial photography — luxury / architecture / global enterprise
 * Replace with owned assets before production launch.
 */

export type DivisionSlug =
  | "growth-marketing"
  | "artificial-intelligence"
  | "business-consulting"
  | "international-expansion"
  | "investment-ventures"
  | "real-estate-hospitality";

function unsplash(photoId: string, width = 2400): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=90`;
}

export const homeVisuals = {
  hero: {
    src: "/images/home/ChatGPT Image Jul 18, 2026, 04_23_05 PM.png",
    alt: {
      es: "Arquitectura corporativa contemporánea — perspectiva ascendente de torres de cristal",
      en: "Contemporary corporate architecture — upward view of glass towers",
    },
  },
  vision: {
    src: "/images/home/2.png",
    alt: {
      es: "Espacio de trabajo minimalista con luz natural — entorno empresarial internacional",
      en: "Minimal workspace with natural light — international business environment",
    },
  },
  growth: {
    src: "/images/home/3a.png",
    alt: {
      es: "Arquitectura angular contemporánea — planificación estratégica",
      en: "Contemporary angular architecture — strategic planning",
    },
  },
  methodology: {
    src: "/images/home/99.png",
    alt: {
      es: "Interior arquitectónico minimalista — rigor metodológico",
      en: "Minimal architectural interior — methodological rigor",
    },
  },
  cta: {
    src: "/images/home/22 (2).png",
    alt: {
      es: "Mesa ejecutiva con estrategia de inversión — crecimiento empresarial",
      en: "Executive desk with investment strategy — business growth",
    },
  },
} as const;

export const divisionVisuals: Record<
  DivisionSlug,
  { src: string; alt: { es: string; en: string } }
> = {
  "growth-marketing": {
    src: "/images/home/4a.png",
    alt: {
      es: "Torre de cristal contemporánea — crecimiento y presencia de mercado",
      en: "Contemporary glass tower — growth and market presence",
    },
  },
  "artificial-intelligence": {
    src: "/images/home/5a.png",
    alt: {
      es: "Visualización global abstracta — innovación e inteligencia aplicada",
      en: "Abstract global visualization — innovation and applied intelligence",
    },
  },
  "business-consulting": {
    src: "/images/home/7b.png",
    alt: {
      es: "Interior corporativo con luz natural — claridad estratégica",
      en: "Corporate interior with natural light — strategic clarity",
    },
  },
  "international-expansion": {
    src: "/images/home/88.png",
    alt: {
      es: "Horizonte urbano internacional — expansión global",
      en: "International city skyline — global expansion",
    },
  },
  "investment-ventures": {
    src: "/images/home/22 (1).png",
    alt: {
      es: "Gráfico financiero abstracto — capital e inversión",
      en: "Abstract financial chart — capital and investment",
    },
  },
  "real-estate-hospitality": {
    src: "/images/home/10.png",
    alt: {
      es: "Arquitectura residencial de lujo — real estate y hospitalidad",
      en: "Luxury residential architecture — real estate and hospitality",
    },
  },
};

export function getDivisionVisual(slug: string) {
  return divisionVisuals[slug as DivisionSlug];
}

export type DivisionCardVariant = "cinematic" | "large" | "standard";

export function getDivisionCardVariant(index: number): DivisionCardVariant {
  if (index === 0) return "cinematic";
  if (index === 3) return "cinematic";
  return "large";
}
