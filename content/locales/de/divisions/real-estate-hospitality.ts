import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const realEstateHospitality: Division = {
  id: "real-estate-hospitality",
  slug: "real-estate-hospitality",
  name: "Immobilien & Hospitality",
  tagline: "Immobilienassets und Hospitality-Entwicklung",
  description:
    "Wir beraten bei Entwicklung, Erwerb und Management von Immobilienassets und Hospitality-Projekten. Wir verbinden Marktanalyse, finanzielle Tragfähigkeit und operative Strategie, um den Wert jedes Assets zu maximieren.",
  vision:
    "Immobilien- und Hospitality-Assets brauchen langfristige Vision und präzise Umsetzung. Wir liefern die Strategie und Begleitung, damit jedes Projekt sein volles Potenzial entfaltet.",
  capabilities: [
    { id: "real-estate", name: "Immobilien", description: "Strategische Immobilienberatung und Asset-Entwicklung." },
    { id: "hospitality", name: "Hospitality", description: "Strategie und Management für Hospitality-Projekte." },
  ],
  order: 6,
  featured: true,
  seo: {
    title: "Beratung Immobilien & Hospitality",
    description:
      "Beratung für Immobilien und Hospitality. Asset-Entwicklung, finanzielle Tragfähigkeit, operative Strategie und Projektmanagement für internationale Märkte.",
    keywords: [
      "Immobilienberatung",
      "Hospitality-Beratung",
      "Beratung Immobilienentwicklung",
      "Immobilienstrategie",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("de"),
  locale: "de",
};
