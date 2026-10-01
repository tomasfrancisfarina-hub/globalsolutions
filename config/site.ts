/**
 * Global Solutions — Site Configuration
 *
 * Central source for site-wide constants.
 * Extend with regional configs when multi-country is enabled.
 */

export const siteConfig = {
  name: "Global Solutions",
  legalName: "Global Solutions Worldwide",
  tagline: "Consultoría de crecimiento empresarial",
  description:
    "Firma internacional de consultoría especializada en crecimiento empresarial. Estrategia, inteligencia artificial, automatización y ejecución.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://globalsolutions.com",
  locale: "es",
  defaultLocale: "en" as const,
  locales: ["es", "en", "de"] as const,
  contact: {
    email: "info@globalsolutionsworldwide.com",
    phone: "",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/109008349",
    twitter: "",
    instagram: "",
  },
  /** German legal entity details (Impressum / Datenschutz) */
  legal: {
    tradeName: "Global Solutions Worldwide",
    owner: "Tomás Francisco Fariña",
    legalForm: "Einzelunternehmen",
    address: {
      street: "Bachstraße 145",
      postalCode: "22083",
      city: "Hamburg",
      country: "Deutschland",
    },
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
