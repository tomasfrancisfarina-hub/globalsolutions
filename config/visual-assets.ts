/**
 * Editorial photography — luxury / architecture / global enterprise.
 * Asset paths must match git-tracked files under public/Images/Home/ exactly.
 */

import type { Locale } from "@/types/locale";

export const HOME_IMAGES = "/Images/Home";

export type DivisionSlug =
  | "growth-marketing"
  | "artificial-intelligence"
  | "business-consulting"
  | "international-expansion"
  | "investment-ventures"
  | "real-estate-hospitality";

export type LocalizedAlt = Record<Locale, string>;

function homeImage(filename: string): string {
  return `${HOME_IMAGES}/${filename}`;
}

export const homeVisuals = {
  hero: {
    src: homeImage("hero.png"),
    alt: {
      es: "Arquitectura corporativa contemporánea — perspectiva ascendente de torres de cristal",
      en: "Contemporary corporate architecture — upward view of glass towers",
      de: "Zeitgenössische Unternehmensarchitektur — Blick nach oben auf Glastürme",
    } satisfies LocalizedAlt,
  },
  vision: {
    src: homeImage("vision.png"),
    alt: {
      es: "Espacio de trabajo minimalista con luz natural — entorno empresarial internacional",
      en: "Minimal workspace with natural light — international business environment",
      de: "Minimalistischer Arbeitsraum mit Tageslicht — internationales Geschäftsumfeld",
    } satisfies LocalizedAlt,
  },
  growth: {
    src: homeImage("growth.png"),
    alt: {
      es: "Arquitectura angular contemporánea — planificación estratégica",
      en: "Contemporary angular architecture — strategic planning",
      de: "Zeitgenössische Winkelarchitektur — strategische Planung",
    } satisfies LocalizedAlt,
  },
  methodology: {
    src: homeImage("methodology.png"),
    alt: {
      es: "Interior arquitectónico minimalista — rigor metodológico",
      en: "Minimal architectural interior — methodological rigor",
      de: "Minimalistisches Architekturinterieur — methodische Präzision",
    } satisfies LocalizedAlt,
  },
  cta: {
    src: homeImage("cta.png"),
    alt: {
      es: "Mesa ejecutiva con estrategia de inversión — crecimiento empresarial",
      en: "Executive desk with investment strategy — business growth",
      de: "Führungsschreibtisch mit Investitionsstrategie — Unternehmenswachstum",
    } satisfies LocalizedAlt,
  },
} as const;

export const divisionVisuals: Record<
  DivisionSlug,
  { src: string; alt: LocalizedAlt }
> = {
  "growth-marketing": {
    src: homeImage("marketing.png"),
    alt: {
      es: "Torre de cristal contemporánea — crecimiento y presencia de mercado",
      en: "Contemporary glass tower — growth and market presence",
      de: "Zeitgenössischer Glasturm — Wachstum und Marktpräsenz",
    },
  },
  "artificial-intelligence": {
    src: homeImage("ai.png"),
    alt: {
      es: "Visualización global abstracta — innovación e inteligencia aplicada",
      en: "Abstract global visualization — innovation and applied intelligence",
      de: "Abstrakte globale Visualisierung — Innovation und angewandte Intelligenz",
    },
  },
  "business-consulting": {
    src: homeImage("consulting.png"),
    alt: {
      es: "Interior corporativo con luz natural — claridad estratégica",
      en: "Corporate interior with natural light — strategic clarity",
      de: "Unternehmensinterieur mit Tageslicht — strategische Klarheit",
    },
  },
  "international-expansion": {
    src: homeImage("expansion.png"),
    alt: {
      es: "Horizonte urbano internacional — expansión global",
      en: "International city skyline — global expansion",
      de: "Internationale Skyline — globale Expansion",
    },
  },
  "investment-ventures": {
    src: homeImage("investment.png"),
    alt: {
      es: "Gráfico financiero abstracto — capital e inversión",
      en: "Abstract financial chart — capital and investment",
      de: "Abstraktes Finanzdiagramm — Kapital und Investition",
    },
  },
  "real-estate-hospitality": {
    src: homeImage("real-estate.png"),
    alt: {
      es: "Arquitectura residencial de lujo — real estate y hospitalidad",
      en: "Luxury residential architecture — real estate and hospitality",
      de: "Luxuriöse Wohnarchitektur — Immobilien und Hospitality",
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
