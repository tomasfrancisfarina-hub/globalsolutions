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
    src: unsplash("photo-1486406146926-c627a92ad1ab", 2800),
    alt: {
      es: "Arquitectura corporativa contemporánea — perspectiva ascendente de torres de cristal",
      en: "Contemporary corporate architecture — upward view of glass towers",
    },
  },
  vision: {
    src: unsplash("photo-1497366216548-37526070297c", 2400),
    alt: {
      es: "Espacio de trabajo minimalista con luz natural — entorno empresarial internacional",
      en: "Minimal workspace with natural light — international business environment",
    },
  },
  growth: {
    src: unsplash("photo-1545324418-cc1a3fa10c00", 2400),
    alt: {
      es: "Arquitectura angular contemporánea — planificación estratégica",
      en: "Contemporary angular architecture — strategic planning",
    },
  },
  methodology: {
    src: unsplash("photo-1497366754035-f200968a6e72", 2400),
    alt: {
      es: "Interior arquitectónico minimalista — rigor metodológico",
      en: "Minimal architectural interior — methodological rigor",
    },
  },
  cta: {
    src: unsplash("photo-1472851294608-062f824d29cc", 2800),
    alt: {
      es: "Metrópoli global desde altura — consultoría internacional",
      en: "Global metropolis from above — international consulting",
    },
  },
} as const;

export const divisionVisuals: Record<
  DivisionSlug,
  { src: string; alt: { es: string; en: string } }
> = {
  "growth-marketing": {
    src: unsplash("photo-1545324418-cc1a3fa10c00", 2000),
    alt: {
      es: "Torre de cristal contemporánea — crecimiento y presencia de mercado",
      en: "Contemporary glass tower — growth and market presence",
    },
  },
  "artificial-intelligence": {
    src: unsplash("photo-1451187580459-43490279c0fa", 2000),
    alt: {
      es: "Visualización global abstracta — innovación e inteligencia aplicada",
      en: "Abstract global visualization — innovation and applied intelligence",
    },
  },
  "business-consulting": {
    src: unsplash("photo-1497366754035-f200968a6e72", 2000),
    alt: {
      es: "Interior corporativo con luz natural — claridad estratégica",
      en: "Corporate interior with natural light — strategic clarity",
    },
  },
  "international-expansion": {
    src: unsplash("photo-1472851294608-062f824d29cc", 2000),
    alt: {
      es: "Horizonte urbano internacional — expansión global",
      en: "International city skyline — global expansion",
    },
  },
  "investment-ventures": {
    src: unsplash("photo-1611974789855-9c2a0a7236a3", 2000),
    alt: {
      es: "Gráfico financiero abstracto — capital e inversión",
      en: "Abstract financial chart — capital and investment",
    },
  },
  "real-estate-hospitality": {
    src: unsplash("photo-1512917774080-9991f1c4c750", 2000),
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
