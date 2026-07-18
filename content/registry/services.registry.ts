/**
 * Services Registry — locale-aware, SEO + conversion
 */

import type { Service, ServiceSummary, Locale } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

const servicesEs: Service[] = [
  {
    id: "marketing-digital",
    slug: "marketing-digital",
    name: "Marketing Digital",
    shortDescription: "Estrategias integrales de marketing digital orientadas al crecimiento empresarial.",
    fullDescription:
      "Desarrollamos estrategias de marketing digital que conectan la visión de negocio con resultados medibles. Diseñamos campañas multicanal que generan crecimiento sostenible y confianza en el mercado.",
    divisionId: "growth-marketing",
    features: [
      "Estrategia de marketing digital integral",
      "Planificación multicanal",
      "Análisis de mercado y competencia",
      "Optimización continua basada en datos",
      "Reporting y seguimiento de KPIs",
    ],
    faq: [
      {
        question: "¿Qué incluye una estrategia de marketing digital?",
        answer: "Incluye análisis de mercado, definición de objetivos, planificación de canales, ejecución de campañas y optimización continua basada en datos.",
      },
    ],
    order: 1,
    seo: {
      title: "Marketing Digital para Empresas — Consultoría Estratégica",
      description:
        "Consultoría de marketing digital para empresas en crecimiento. Estrategias multicanal, campañas optimizadas y resultados medibles.",
      keywords: ["marketing digital empresas", "consultoría marketing digital"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Solicitar consultoría de marketing digital", markets: ["us", "eu", "ae"] },
    conversion: getDefaultConversion("es"),
    locale: "es",
  },
  {
    id: "google-ads",
    slug: "google-ads",
    name: "Google Ads",
    shortDescription: "Campañas de Google Ads optimizadas para conversión y retorno de inversión.",
    fullDescription:
      "Gestionamos campañas de Google Ads con enfoque en conversión y ROI. Maximizamos el retorno de cada inversión publicitaria con landing pages optimizadas para generar reuniones cualificadas.",
    divisionId: "growth-marketing",
    features: [
      "Auditoría y estructura de cuenta",
      "Investigación de keywords",
      "Landing pages optimizadas para conversión",
      "Reporting y análisis de rendimiento",
    ],
    faq: [
      {
        question: "¿Cuál es el presupuesto mínimo recomendado?",
        answer: "Recomendamos un presupuesto mínimo de 1.500€/mes para obtener datos significativos y optimizar campañas de forma efectiva.",
      },
    ],
    order: 2,
    seo: {
      title: "Google Ads para Empresas — Gestión de Campañas Publicitarias",
      description: "Gestión profesional de Google Ads para empresas. Campañas optimizadas para conversión, ROI medible y crecimiento sostenible.",
      keywords: ["google ads empresas", "gestión google ads"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Solicitar gestión de Google Ads", markets: ["us", "eu"] },
    conversion: getDefaultConversion("es"),
    locale: "es",
  },
  {
    id: "seo",
    slug: "seo",
    name: "SEO",
    shortDescription: "Posicionamiento orgánico en buscadores para crecimiento sostenible.",
    fullDescription:
      "Desarrollamos estrategias de SEO que posicionan a las empresas en los primeros resultados de búsqueda, generando tráfico cualificado y oportunidades comerciales.",
    divisionId: "growth-marketing",
    features: ["Auditoría SEO técnica", "Investigación de keywords", "Estrategia de contenidos", "Link building"],
    order: 3,
    seo: {
      title: "SEO para Empresas — Posicionamiento Web",
      description: "Consultoría SEO para empresas. Posicionamiento orgánico en Google y crecimiento sostenible en buscadores.",
      keywords: ["seo empresas", "consultoría seo"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Solicitar auditoría SEO" },
    conversion: getDefaultConversion("es"),
    locale: "es",
  },
  {
    id: "inteligencia-artificial",
    slug: "inteligencia-artificial",
    name: "Inteligencia Artificial",
    shortDescription: "IA aplicada a procesos y decisiones de negocio.",
    fullDescription:
      "Integramos inteligencia artificial en procesos empresariales para optimizar operaciones y descubrir oportunidades. Enfoque práctico orientado a resultados.",
    divisionId: "artificial-intelligence",
    features: ["Diagnóstico de oportunidades de IA", "Implementación de soluciones", "Automatización de procesos"],
    order: 4,
    seo: {
      title: "Inteligencia Artificial para Empresas — Consultoría IA",
      description: "Consultoría de IA para empresas. Implementación, automatización y optimización con enfoque estratégico.",
      keywords: ["inteligencia artificial empresas", "consultoría IA"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Solicitar consultoría de IA", markets: ["us", "ae"] },
    conversion: getDefaultConversion("es"),
    locale: "es",
  },
  {
    id: "consultoria-empresarial",
    slug: "consultoria-empresarial",
    name: "Consultoría Empresarial",
    shortDescription: "Asesoramiento estratégico para directivos.",
    fullDescription:
      "Acompañamos a directivos en decisiones estratégicas y planes de crecimiento. Consultoría orientada a resultados, no a informes.",
    divisionId: "business-consulting",
    features: ["Diagnóstico empresarial", "Planificación estratégica", "Acompañamiento en la ejecución"],
    order: 5,
    seo: {
      title: "Consultoría Empresarial — Asesoramiento Estratégico",
      description: "Consultoría empresarial para directivos. Estrategia, planificación y crecimiento empresarial.",
      keywords: ["consultoría empresarial", "consultoría estratégica"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Agendar consultoría empresarial" },
    conversion: getDefaultConversion("es"),
    locale: "es",
  },
  {
    id: "expansion-internacional",
    slug: "expansion-internacional",
    name: "Expansión Internacional",
    shortDescription: "Entrada en mercados internacionales.",
    fullDescription:
      "Guiamos la expansión internacional con metodología probada. Análisis, estrategia de entrada e implementación operativa.",
    divisionId: "international-expansion",
    features: ["Análisis de mercados", "Estrategia de entrada", "Implementación operativa"],
    order: 6,
    seo: {
      title: "Expansión Internacional — Consultoría Global",
      description: "Consultoría de expansión internacional para mercados globales.",
      keywords: ["expansión internacional", "internacionalización empresas"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Consultar expansión internacional", markets: ["us", "ae"] },
    conversion: getDefaultConversion("es"),
    locale: "es",
  },
];

const servicesEn: Service[] = [
  {
    id: "marketing-digital",
    slug: "digital-marketing",
    name: "Digital Marketing",
    shortDescription: "Integrated digital marketing strategies focused on business growth.",
    fullDescription:
      "We develop digital marketing strategies that connect business vision with measurable results — building market presence and generating qualified meetings with decision-makers.",
    divisionId: "growth-marketing",
    features: [
      "Integrated digital marketing strategy",
      "Multichannel planning",
      "Market and competitive analysis",
      "Data-driven optimization",
      "KPI tracking and reporting",
    ],
    faq: [
      {
        question: "What does a digital marketing strategy include?",
        answer: "Market analysis, objective setting, channel planning, campaign execution, and continuous data-driven optimization.",
      },
    ],
    order: 1,
    seo: {
      title: "Digital Marketing Consulting for Businesses",
      description:
        "Digital marketing consulting for growth-stage companies. Multichannel strategies, optimized campaigns, and measurable results in US, European, and UAE markets.",
      keywords: ["digital marketing consulting", "business marketing strategy", "growth marketing agency"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Request digital marketing consultation", markets: ["us", "eu"] },
    conversion: getDefaultConversion("en"),
    locale: "en",
  },
  {
    id: "google-ads",
    slug: "google-ads",
    name: "Google Ads",
    shortDescription: "Google Ads campaigns optimized for conversion and ROI.",
    fullDescription:
      "We manage Google Ads campaigns focused on conversion and ROI — with landing pages designed to turn clicks into qualified strategic meetings.",
    divisionId: "growth-marketing",
    features: [
      "Account audit and structure",
      "Keyword research",
      "Conversion-optimized landing pages",
      "Performance reporting",
    ],
    faq: [
      {
        question: "What is the recommended minimum budget?",
        answer: "We recommend a minimum ad spend of $2,000/month to gather meaningful data and optimize campaigns effectively.",
      },
    ],
    order: 2,
    seo: {
      title: "Google Ads Management for Businesses",
      description:
        "Professional Google Ads management for companies. Conversion-optimized campaigns with measurable ROI for US and European markets.",
      keywords: ["google ads management", "google ads agency", "ppc consulting"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Request Google Ads consultation", markets: ["us", "eu"] },
    conversion: getDefaultConversion("en"),
    locale: "en",
  },
  {
    id: "seo",
    slug: "seo",
    name: "SEO",
    shortDescription: "Organic search positioning for sustainable growth.",
    fullDescription:
      "We build SEO strategies that position companies in top search results — driving qualified traffic and commercial opportunities.",
    divisionId: "growth-marketing",
    features: ["Technical SEO audit", "Keyword research", "Content strategy", "Link building"],
    order: 3,
    seo: {
      title: "SEO Consulting for Businesses",
      description: "Business SEO consulting. Organic Google positioning and sustainable search growth.",
      keywords: ["seo consulting", "business seo", "search engine optimization"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Request SEO audit" },
    conversion: getDefaultConversion("en"),
    locale: "en",
  },
  {
    id: "inteligencia-artificial",
    slug: "artificial-intelligence",
    name: "Artificial Intelligence",
    shortDescription: "AI applied to business processes and decisions.",
    fullDescription:
      "We integrate AI into business processes to optimize operations and uncover opportunities — practical, results-oriented, never experimental for its own sake.",
    divisionId: "artificial-intelligence",
    features: ["AI opportunity assessment", "Solution implementation", "Process automation"],
    order: 4,
    seo: {
      title: "AI Consulting for Business",
      description: "Enterprise AI consulting. Implementation, automation, and strategic optimization.",
      keywords: ["AI consulting", "artificial intelligence business", "enterprise AI"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Request AI consultation", markets: ["us", "ae"] },
    conversion: getDefaultConversion("en"),
    locale: "en",
  },
  {
    id: "consultoria-empresarial",
    slug: "business-consulting",
    name: "Business Consulting",
    shortDescription: "Strategic advisory for executives.",
    fullDescription:
      "We support executives in strategic decisions and growth plans. Consulting focused on results, not reports.",
    divisionId: "business-consulting",
    features: ["Business diagnosis", "Strategic planning", "Execution support"],
    order: 5,
    seo: {
      title: "Business Consulting — Strategic Advisory",
      description: "Business consulting for executives. Strategy, planning, and growth advisory.",
      keywords: ["business consulting", "management consulting", "strategic advisory"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Schedule business consultation" },
    conversion: getDefaultConversion("en"),
    locale: "en",
  },
  {
    id: "expansion-internacional",
    slug: "international-expansion",
    name: "International Expansion",
    shortDescription: "International market entry consulting.",
    fullDescription:
      "We guide international expansion with proven methodology — analysis, entry strategy, and operational implementation.",
    divisionId: "international-expansion",
    features: ["Market analysis", "Entry strategy", "Operational implementation"],
    order: 6,
    seo: {
      title: "International Expansion Consulting",
      description: "International expansion consulting for global markets including US, Europe, and UAE.",
      keywords: ["international expansion consulting", "global market entry"],
      markets: ["us", "eu", "ae"],
    },
    sem: { conversionGoal: "consultation", ctaText: "Discuss international expansion", markets: ["us", "ae"] },
    conversion: getDefaultConversion("en"),
    locale: "en",
  },
];

const servicesByLocale: Record<Locale, Service[]> = { es: servicesEs, en: servicesEn };

export function getAllServices(locale: Locale): Service[] {
  return [...(servicesByLocale[locale] ?? servicesByLocale.en)].sort((a, b) => a.order - b.order);
}

export function getServiceBySlug(slugOrId: string, locale: Locale): Service | undefined {
  return getAllServices(locale).find((s) => s.slug === slugOrId || s.id === slugOrId);
}

export function getServicesByDivision(divisionId: string, locale: Locale): Service[] {
  return getAllServices(locale).filter((s) => s.divisionId === divisionId);
}

export function getServiceSummaries(locale: Locale): ServiceSummary[] {
  return getAllServices(locale).map(({ id, slug, name, shortDescription, divisionId, order }) => ({
    id, slug, name, shortDescription, divisionId, order,
  }));
}

export function getAllServiceSlugs(locale: Locale): string[] {
  return getAllServices(locale).map((s) => s.slug);
}

export function getAllServiceParams(): { locale: Locale; slug: string }[] {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of ["es", "en"] as Locale[]) {
    for (const slug of getAllServiceSlugs(locale)) {
      params.push({ locale, slug });
    }
  }
  return params;
}
