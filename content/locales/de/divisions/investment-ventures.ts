import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const investmentVentures: Division = {
  id: "investment-ventures",
  slug: "investment-ventures",
  name: "Investments & Ventures",
  tagline: "Kapitalaufnahme und Unterstützung für Startup-Wachstum",
  description:
    "Wir verbinden wachsende Unternehmen mit Kapital und strategischen Investoren. Von der Vorbereitung von Startups auf Finanzierungsrunden bis zur Strukturierung von Kapitaltransaktionen erleichtern wir den Zugang zu dem Investment, das für die nächste Wachstumsphase nötig ist.",
  vision:
    "Kapital ist ein Wachstumsbeschleuniger, kein Selbstzweck. Wir helfen Unternehmen, sich vorzubereiten, Kontakte zu knüpfen und die Transaktionen abzuschließen, die ihre nächste Phase vorantreiben.",
  capabilities: [
    { id: "apoyo-startups", name: "Startup-Unterstützung", description: "Umfassende Begleitung für Startups in der Wachstumsphase." },
    { id: "captacion-inversores", name: "Investor Relations", description: "Vorbereitung und Steuerung von Prozessen zur Kapitalaufnahme." },
  ],
  order: 5,
  featured: true,
  seo: {
    title: "Investments & Ventures — Kapitalaufnahme & Startup-Beratung",
    description:
      "Investmentberatung für Kapitalaufnahme, Startup-Unterstützung und Venture-Operationen. Wir bereiten Unternehmen auf Finanzierungsrunden und strategische Investments vor.",
    keywords: [
      "Investmentberatung",
      "Startup-Beratung",
      "Kapitalaufnahme",
      "Venture-Capital-Advisory",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("de"),
  locale: "de",
};
