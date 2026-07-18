/**
 * Editorial photography — luxury / architecture / global enterprise.
 * Asset paths must match git-tracked files under public/Images/Home/ exactly.
 */

export const HOME_IMAGES = "/Images/Home";

export type DivisionSlug =
  | "growth-marketing"
  | "artificial-intelligence"
  | "business-consulting"
  | "international-expansion"
  | "investment-ventures"
  | "real-estate-hospitality";

function homeImage(filename: string): string {
  return `${HOME_IMAGES}/${filename}`;
}

export const homeVisuals = {
  hero: {
    src: homeImage("hero.png"),
    alt: {
      es: "Arquitectura corporativa contemporánea — perspectiva ascendente de torres de cristal",
      en: "Contemporary corporate architecture — upward view of glass towers",
    },
  },
  vision: {
    src: homeImage("vision.png"),
    alt: {
      es: "Espacio de trabajo minimalista con luz natural — entorno empresarial internacional",
      en: "Minimal workspace with natural light — international business environment",
    },
  },
  growth: {
    src: homeImage("growth.png"),
    alt: {
      es: "Arquitectura angular contemporánea — planificación estratégica",
      en: "Contemporary angular architecture — strategic planning",
    },
  },
  methodology: {
    src: homeImage("methodology.png"),
    alt: {
      es: "Interior arquitectónico minimalista — rigor metodológico",
      en: "Minimal architectural interior — methodological rigor",
    },
  },
  cta: {
    src: homeImage("cta.png"),
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
    src: homeImage("marketing.png"),
    alt: {
      es: "Torre de cristal contemporánea — crecimiento y presencia de mercado",
      en: "Contemporary glass tower — growth and market presence",
    },
  },
  "artificial-intelligence": {
    src: homeImage("ai.png"),
    alt: {
      es: "Visualización global abstracta — innovación e inteligencia aplicada",
      en: "Abstract global visualization — innovation and applied intelligence",
    },
  },
  "business-consulting": {
    src: homeImage("consulting.png"),
    alt: {
      es: "Interior corporativo con luz natural — claridad estratégica",
      en: "Corporate interior with natural light — strategic clarity",
    },
  },
  "international-expansion": {
    src: homeImage("expansion.png"),
    alt: {
      es: "Horizonte urbano internacional — expansión global",
      en: "International city skyline — global expansion",
    },
  },
  "investment-ventures": {
    src: homeImage("investment.png"),
    alt: {
      es: "Gráfico financiero abstracto — capital e inversión",
      en: "Abstract financial chart — capital and investment",
    },
  },
  "real-estate-hospitality": {
    src: homeImage("real-estate.png"),
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
