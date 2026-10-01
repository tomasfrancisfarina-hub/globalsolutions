import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const businessConsulting: Division = {
  id: "business-consulting",
  slug: "business-consulting",
  name: "Unternehmensberatung",
  tagline: "Strategische Beratung für wachsende Unternehmen",
  description:
    "Wir unterstützen Führungskräfte und Leitungsteams bei strategischen Entscheidungen, Prozessoptimierung und der Entwicklung neuer Geschäfte. Unser Ansatz verbindet fundierte Analyse mit praktischer Umsetzung.",
  vision:
    "Unternehmen, die nachhaltig wachsen, tun dies mit klarer Strategie und disziplinierter Umsetzung. Wir helfen, beides aufzubauen.",
  capabilities: [
    { id: "consultoria-empresarial", name: "Unternehmensberatung", description: "Strategische Beratung für Führungskräfte und Leitungsteams." },
    { id: "estrategia-comercial", name: "Vertriebsstrategie", description: "Konzeption und Umsetzung von Vertriebsstrategien." },
    { id: "optimizacion-procesos", name: "Prozessoptimierung", description: "Operative Verbesserung und Unternehmenseffizienz." },
    { id: "desarrollo-negocio", name: "Geschäftsentwicklung", description: "Identifikation und Entwicklung neuer Geschäftschancen." },
  ],
  order: 3,
  featured: true,
  seo: {
    title: "Unternehmensberatung — Strategie & Geschäftsentwicklung",
    description:
      "Unternehmensberatung für wachstumsorientierte Unternehmen. Vertriebsstrategie, Prozessoptimierung, Geschäftsentwicklung und Executive Advisory in internationalen Märkten.",
    keywords: [
      "Unternehmensberatung",
      "Managementberatung",
      "Beratung Geschäftsentwicklung",
      "Strategische Beratung",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("de"),
  locale: "de",
};
