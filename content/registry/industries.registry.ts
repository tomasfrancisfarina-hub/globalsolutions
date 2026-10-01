/**
 * Industries Registry — vertical SEM/SEO targeting
 */

import type { Industry, Locale } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

const industriesEn: Industry[] = [
  {
    id: "saas",
    slug: "saas",
    name: "SaaS",
    description: "Growth consulting for SaaS companies scaling revenue and entering new markets.",
    locale: "en",
    relatedDivisions: ["growth-marketing", "business-consulting", "international-expansion"],
    seo: {
      title: "SaaS Growth Consulting",
      description: "Consulting for SaaS companies. Growth strategy, expansion, and revenue optimization.",
      keywords: ["saas consulting", "saas growth strategy"],
      markets: ["us", "eu"],
    },
    conversion: getDefaultConversion("en"),
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate",
    description: "Strategic advisory for real estate development and asset management.",
    locale: "en",
    relatedDivisions: ["real-estate-hospitality", "investment-ventures"],
    seo: {
      title: "Real Estate Consulting",
      description: "Real estate consulting for development, acquisition, and asset strategy.",
      keywords: ["real estate consulting", "property advisory"],
      markets: ["ae", "eu", "us"],
    },
    conversion: getDefaultConversion("en"),
  },
  {
    id: "hospitality",
    slug: "hospitality",
    name: "Hospitality",
    description: "Consulting for hospitality projects and operational strategy.",
    locale: "en",
    relatedDivisions: ["real-estate-hospitality"],
    seo: {
      title: "Hospitality Consulting",
      description: "Hospitality consulting for hotels, resorts, and F&B operations.",
      keywords: ["hospitality consulting", "hotel consulting"],
      markets: ["ae", "eu"],
    },
    conversion: getDefaultConversion("en"),
  },
  {
    id: "startups",
    slug: "startups",
    name: "Startups & Ventures",
    description: "Support for startups raising capital and scaling operations.",
    locale: "en",
    relatedDivisions: ["investment-ventures", "business-consulting"],
    seo: {
      title: "Startup Consulting",
      description: "Startup consulting for fundraising, growth, and operational scaling.",
      keywords: ["startup consulting", "venture consulting"],
      markets: ["us", "eu", "ae"],
    },
    conversion: getDefaultConversion("en"),
  },
];

const industriesEs: Industry[] = [
  {
    id: "saas",
    slug: "saas",
    name: "SaaS",
    description: "Consultoría de crecimiento para empresas SaaS.",
    locale: "es",
    relatedDivisions: ["growth-marketing", "business-consulting"],
    seo: {
      title: "Consultoría SaaS — Crecimiento",
      description: "Consultoría para empresas SaaS. Estrategia de crecimiento y expansión.",
      keywords: ["consultoría saas", "crecimiento saas"],
      markets: ["eu"],
    },
    conversion: getDefaultConversion("es"),
  },
  {
    id: "real-estate",
    slug: "real-estate",
    name: "Real Estate",
    description: "Consultoría inmobiliaria estratégica.",
    locale: "es",
    relatedDivisions: ["real-estate-hospitality"],
    seo: {
      title: "Consultoría Inmobiliaria",
      description: "Consultoría inmobiliaria para desarrollo y gestión de activos.",
      keywords: ["consultoría inmobiliaria"],
      markets: ["ae", "eu"],
    },
    conversion: getDefaultConversion("es"),
  },
];

const byLocale: Record<Locale, Industry[]> = {
  es: industriesEs,
  en: industriesEn,
  /** DE uses EN industry targeting copy until dedicated DE industry pages are authored */
  de: industriesEn.map((industry) => ({
    ...industry,
    locale: "de" as const,
    conversion: getDefaultConversion("de"),
  })),
};

export function getAllIndustries(locale: Locale): Industry[] {
  return byLocale[locale] ?? byLocale.en;
}

export function getIndustryBySlug(slug: string, locale: Locale): Industry | undefined {
  return getAllIndustries(locale).find((i) => i.slug === slug);
}
