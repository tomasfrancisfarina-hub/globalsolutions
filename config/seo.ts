/**
 * Global Solutions — SEO Configuration
 *
 * Home = branding + conversion (minimal SEO optimization).
 * Divisions, Services, Insights = primary SEO/SEM targets.
 */

export const seoConfig = {
  /** Pages that prioritize branding over keyword optimization */
  brandingPages: ["/", "/about", "/contact", "/methodology"],

  /** Pages optimized for organic search */
  seoPages: ["/divisions", "/divisions/[slug]", "/services/[slug]", "/insights", "/insights/[slug]"],

  /** Pages designed for Google Ads landing */
  semPages: ["/services/[slug]", "/divisions/[slug]", "/lp/[slug]"],

  /** Default metadata for branding pages */
  defaultBranding: {
    es: {
      titleTemplate: "%s | Global Solutions",
      defaultTitle: "Global Solutions — Consultoría Estratégica para el Crecimiento Internacional",
      defaultDescription:
        "Ayudamos a empresas ambiciosas a crecer mediante estrategia, inteligencia artificial, automatización y ejecución.",
    },
    en: {
      titleTemplate: "%s | Global Solutions",
      defaultTitle: "Global Solutions — Strategic Consulting for International Growth",
      defaultDescription:
        "We help ambitious companies grow through strategy, artificial intelligence, automation, and execution.",
    },
  },

  /** Metadata template for SEO pages */
  seoTitleTemplate: "%s | Global Solutions",
  semTitleTemplate: "%s — Global Solutions",

  /** Structured data types per page category */
  structuredData: {
    home: ["Organization", "WebSite"],
    division: ["Organization", "Service", "BreadcrumbList"],
    service: ["Organization", "Service", "BreadcrumbList", "FAQPage"],
    insight: ["Organization", "Article", "BreadcrumbList"],
    landing: ["Organization", "Service", "BreadcrumbList"],
  },
} as const;

export type SeoConfig = typeof seoConfig;
