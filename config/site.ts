/**
 * Global Solutions — Site Configuration
 *
 * Central source for site-wide constants.
 * Extend with regional configs when multi-country is enabled.
 */

export const siteConfig = {
  name: "Global Solutions",
  legalName: "Global Solutions",
  tagline: "Consultoría de crecimiento empresarial",
  description:
    "Firma internacional de consultoría especializada en crecimiento empresarial. Estrategia, inteligencia artificial, automatización y ejecución.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://globalsolutions.com",
  locale: "es",
  defaultLocale: "en" as const,
  locales: ["es", "en"] as const,
  contact: {
    email: "hello@globalsolutions.com",
    phone: "",
  },
  social: {
    linkedin: "https://linkedin.com/company/global-solutions",
    twitter: "",
    instagram: "",
  },
  /** Organization schema data */
  organization: {
    foundingDate: "2024",
    areaServed: "Worldwide",
    knowsAbout: [
      "Business Growth",
      "Strategic Consulting",
      "Artificial Intelligence",
      "International Expansion",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
