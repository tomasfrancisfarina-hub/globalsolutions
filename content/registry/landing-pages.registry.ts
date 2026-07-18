/**
 * SEM Landing Pages Registry
 *
 * Google Ads optimized pages for divisions, services, and industries.
 * Route: /[locale]/lp/[slug]
 */

import type { LandingPage, Locale } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const landingPages: LandingPage[] = [
  // Division landing — Growth & Marketing
  {
    id: "lp-growth-marketing-en",
    slug: "growth-marketing",
    type: "division",
    targetId: "growth-marketing",
    locale: "en",
    headline: "Accelerate your business growth",
    subheadline:
      "Strategic growth consulting for companies in the US, Europe, and the Middle East. We turn ambition into measurable results.",
    benefits: [
      "Senior consultants on every engagement",
      "Data-driven growth strategies",
      "Proven track record across 12 markets",
    ],
    socialProof: "Trusted by companies managing $50M+ in capital",
    conversion: {
      ...getDefaultConversion("en"),
      cta: { label: "Book a strategic consultation", href: "/contact" },
    },
    seo: {
      title: "Business Growth Consulting — Global Solutions",
      description: "Growth consulting for ambitious companies. Strategy, execution, and measurable results.",
      keywords: ["business growth consulting", "growth strategy consulting"],
      markets: ["us", "eu", "ae"],
      noIndex: false,
    },
    sem: {
      campaignId: "division-growth-en",
      conversionGoal: "consultation",
      ctaText: "Book a strategic consultation",
      markets: ["us", "eu"],
    },
  },
  // Service landing — Google Ads
  {
    id: "lp-google-ads-en",
    slug: "google-ads",
    type: "service",
    targetId: "google-ads",
    locale: "en",
    headline: "Google Ads that generate qualified meetings",
    subheadline:
      "Professional Google Ads management focused on conversion — not clicks. We build campaigns that bring decision-makers to your calendar.",
    benefits: [
      "Conversion-optimized landing pages",
      "Senior account management",
      "Transparent ROI reporting",
    ],
    socialProof: "+340% average client growth",
    conversion: {
      headline: "Get a free Google Ads audit",
      description: "30-minute review of your account with actionable recommendations. No obligation.",
      cta: { label: "Request free audit", href: "/contact" },
      proofPoints: ["Response within 24 hours", "Senior strategist review", "No commitment required"],
    },
    seo: {
      title: "Google Ads Management — Global Solutions",
      description: "Professional Google Ads management for businesses. Conversion-focused campaigns with measurable ROI.",
      keywords: ["google ads management", "google ads agency", "ppc management"],
      markets: ["us", "eu"],
    },
    sem: {
      campaignId: "service-google-ads-en",
      conversionGoal: "consultation",
      ctaText: "Request free Google Ads audit",
      utmSource: "google",
      markets: ["us"],
    },
  },
  // Industry landing — SaaS
  {
    id: "lp-saas-en",
    slug: "saas",
    type: "industry",
    targetId: "saas",
    locale: "en",
    headline: "Growth consulting for SaaS companies",
    subheadline:
      "We help SaaS companies scale revenue, enter new markets, and optimize go-to-market strategy with clarity and precision.",
    benefits: [
      "SaaS-specific growth frameworks",
      "International expansion expertise",
      "AI-powered operational optimization",
    ],
    socialProof: "Supporting SaaS companies from Series A to scale",
    conversion: getDefaultConversion("en"),
    seo: {
      title: "SaaS Growth Consulting — Global Solutions",
      description: "Growth consulting for SaaS companies. Strategy, expansion, and revenue optimization.",
      keywords: ["saas consulting", "saas growth strategy", "b2b saas consulting"],
      markets: ["us", "eu"],
    },
    sem: {
      campaignId: "industry-saas-en",
      conversionGoal: "consultation",
      markets: ["us"],
    },
  },
  // Industry landing — Real Estate (UAE focus)
  {
    id: "lp-real-estate-ae",
    slug: "real-estate",
    type: "industry",
    targetId: "real-estate",
    locale: "en",
    headline: "Real estate consulting in the UAE and beyond",
    subheadline:
      "Strategic advisory for real estate development, acquisition, and asset management in the UAE, Europe, and international markets.",
    benefits: [
      "Market analysis and feasibility studies",
      "Investment structuring advisory",
      "Operational strategy for hospitality assets",
    ],
    conversion: getDefaultConversion("en"),
    seo: {
      title: "Real Estate Consulting UAE — Global Solutions",
      description: "Real estate consulting for UAE and international markets. Development, acquisition, and asset strategy.",
      keywords: ["real estate consulting uae", "property consulting dubai", "real estate advisory"],
      markets: ["ae", "eu"],
    },
    sem: {
      campaignId: "industry-realestate-ae",
      conversionGoal: "consultation",
      markets: ["ae"],
    },
  },
  // Spanish — Google Ads
  {
    id: "lp-google-ads-es",
    slug: "google-ads",
    type: "service",
    targetId: "google-ads",
    locale: "es",
    headline: "Google Ads que generan reuniones cualificadas",
    subheadline:
      "Gestión profesional de Google Ads orientada a conversión. Campañas diseñadas para llevar decision-makers a tu agenda.",
    benefits: [
      "Landing pages optimizadas para conversión",
      "Gestión senior de cuentas",
      "Reporting transparente de ROI",
    ],
    socialProof: "+340% de crecimiento medio en clientes",
    conversion: {
      headline: "Auditoría gratuita de Google Ads",
      description: "Revisión de 30 minutos con recomendaciones accionables. Sin compromiso.",
      cta: { label: "Solicitar auditoría gratuita", href: "/contact" },
      proofPoints: ["Respuesta en 24 horas", "Revisión por estratega senior", "Sin compromiso"],
    },
    seo: {
      title: "Gestión de Google Ads — Global Solutions",
      description: "Gestión profesional de Google Ads para empresas. Campañas orientadas a conversión con ROI medible.",
      keywords: ["google ads empresas", "gestión google ads", "agencia google ads"],
      markets: ["eu"],
    },
    sem: {
      campaignId: "service-google-ads-es",
      conversionGoal: "consultation",
      markets: ["eu"],
    },
  },
];

export function getAllLandingPages(locale: Locale): LandingPage[] {
  return landingPages.filter((lp) => lp.locale === locale);
}

export function getLandingPageBySlug(slug: string, locale: Locale): LandingPage | undefined {
  return landingPages.find((lp) => lp.slug === slug && lp.locale === locale);
}

export function getAllLandingPageParams(): { locale: Locale; slug: string }[] {
  const seen = new Set<string>();
  const params: { locale: Locale; slug: string }[] = [];
  for (const lp of landingPages) {
    const key = `${lp.locale}-${lp.slug}`;
    if (!seen.has(key)) {
      seen.add(key);
      params.push({ locale: lp.locale, slug: lp.slug });
    }
  }
  return params;
}
