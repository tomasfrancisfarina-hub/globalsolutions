/**
 * Global Solutions — Site Configuration
 *
 * Central source for site-wide constants.
 * Extend with regional configs when multi-country is enabled.
 */

/** Canonical public origin used by metadata, sitemap, robots and JSON-LD. */
export const SITE_URL = "https://www.globalsolutionsworldwide.com";

export const siteConfig = {
  name: "Global Solutions",
  legalName: "Global Solutions Worldwide",
  tagline: "Consultoría de crecimiento empresarial",
  description:
    "Firma internacional de consultoría especializada en crecimiento empresarial. Estrategia, inteligencia artificial, automatización y ejecución.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL,
  locale: "es",
  defaultLocale: "en" as const,
  locales: ["es", "en", "de"] as const,
  contact: {
    email: "info@globalsolutionsworldwide.com",
    phone: "+4917641265629",
    phoneDisplay: "+49 176 41265629",
    whatsappUrl: "https://wa.me/4917641265629",
    /** Canonical 30-minute booking URL used by every case-study CTA. */
    calUrl: "https://cal.com/tomas-farina-vmou0z/30min",
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
