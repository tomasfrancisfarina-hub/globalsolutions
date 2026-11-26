import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const realEstateHospitality: Division = {
  id: "real-estate-hospitality",
  slug: "real-estate-hospitality",
  name: "Immobilien und Hospitality",
  tagline: "Marketing und spezifische Beratung für den Immobiliensektor und Hospitality",
  description:
    "Wir entwickeln Kampagnen und Inhalte für Unternehmen aus Immobilien und Hospitality, auch auf Investorengruppen ausgerichtet.",
  vision:
    "Wir helfen Unternehmen der Branche mit Marketing und spezifischer Beratung, ihre Positionierung zu definieren und ihr Angebot an die Zielgruppen zu kommunizieren, die sie erreichen wollen.",
  capabilities: [
    {
      id: "real-estate",
      name: "Immobilien",
      description:
        "Marketing, Kommunikation und spezifische Beratung für Unternehmen der Immobilienbranche.",
    },
    {
      id: "hospitality",
      name: "Hospitality",
      description:
        "Marketing, Kommunikation und spezifische Beratung für Unternehmen im Hospitality-Sektor.",
    },
  ],
  order: 6,
  featured: true,
  seo: {
    title: "Immobilien und Hospitality — Marketing und Beratung",
    description:
      "Marketing, Kommunikation und spezifische Beratung für den Immobiliensektor und Hospitality, auch auf Investorengruppen ausgerichtet.",
    keywords: [
      "Immobilienmarketing",
      "Hospitality-Marketing",
      "Immobilienkampagnen",
      "Hospitality-Kommunikation",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("de"),
  locale: "de",
};
