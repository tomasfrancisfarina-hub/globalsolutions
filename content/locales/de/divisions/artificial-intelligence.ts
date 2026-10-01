import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const artificialIntelligence: Division = {
  id: "artificial-intelligence",
  slug: "artificial-intelligence",
  name: "Künstliche Intelligenz",
  tagline: "KI für unternehmerische Entscheidungen",
  description:
    "Wir integrieren künstliche Intelligenz in Geschäftsprozesse, um Entscheidungen zu optimieren, Abläufe zu automatisieren und Wachstumschancen sichtbar zu machen. Wir verkaufen keine Technologie – wir setzen KI dort ein, wo sie echten Wert schafft.",
  vision:
    "Künstliche Intelligenz ist ein Wachstumswerkzeug, kein Selbstzweck. Wir implementieren sie mit strategischem Urteil und priorisieren Geschäftsimpact vor Innovation um ihrer selbst willen.",
  capabilities: [
    { id: "inteligencia-artificial", name: "Künstliche Intelligenz", description: "KI-Implementierung zur Prozessoptimierung und Entscheidungsunterstützung." },
    { id: "automatizaciones", name: "Automatisierung", description: "Automatisierung von Geschäftsprozessen für operative Effizienz." },
    { id: "diseno-web", name: "Webdesign", description: "Digitale Premium-Erlebnisse mit Fokus auf Conversion." },
  ],
  order: 2,
  featured: true,
  seo: {
    title: "KI-Beratung für Unternehmen — Künstliche Intelligenz im Enterprise-Umfeld",
    description:
      "KI-Beratung für Unternehmen. Geschäftsautomatisierung, angewandte künstliche Intelligenz und digitale Transformation mit strategischem Fokus für Märkte in den USA, Europa und dem Nahen Osten.",
    keywords: [
      "KI-Beratung",
      "Künstliche Intelligenz für Unternehmen",
      "Enterprise AI",
      "Beratung Geschäftsautomatisierung",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("de"),
  locale: "de",
};
