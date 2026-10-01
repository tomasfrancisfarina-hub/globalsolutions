import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const growthMarketing: Division = {
  id: "growth-marketing",
  slug: "growth-marketing",
  name: "Wachstum & Marketing",
  tagline: "Beschleunigte Wachstumsstrategien und Marktpräsenz",
  description:
    "Wir entwickeln und implementieren Wachstumsstrategien, die Unternehmensvision mit messbaren Ergebnissen verbinden. Von der Positionierung bis zur Multichannel-Umsetzung helfen wir Unternehmen, ihre Präsenz auszubauen und neue Märkte in den USA, Europa und dem Nahen Osten zu erschließen.",
  vision:
    "Wir sind überzeugt: Marketing ist kein Kostenfaktor – es ist eine strategische Investition in Wachstum. Unser Ansatz verbindet Marktanalyse, Kreativität und präzise Umsetzung, um echten Impact zu erzeugen.",
  capabilities: [
    { id: "marketing-digital", name: "Digitales Marketing", description: "Integrierte Online-Marketing-Strategien mit Fokus auf Wachstum." },
    { id: "google-ads", name: "Google Ads", description: "Google-Werbekampagnen, optimiert auf Conversion und ROI." },
    { id: "meta-ads", name: "Meta Ads", description: "Facebook- und Instagram-Werbung mit präzisem Targeting." },
    { id: "seo", name: "SEO", description: "Nachhaltiges organisches Suchmaschinen-Ranking." },
    { id: "branding", name: "Branding", description: "Zweckorientierter Aufbau und Weiterentwicklung von Marken." },
  ],
  order: 1,
  featured: true,
  seo: {
    title: "Wachstum & Marketing — Beratung für Unternehmenswachstum",
    description:
      "Growth-Marketing-Beratung für Unternehmen, die Expansion beschleunigen wollen. Google Ads, SEO, Meta Ads, Branding und strategisches Digital Marketing für Märkte in den USA, Europa und den VAE.",
    keywords: [
      "Growth-Marketing-Beratung",
      "Wachstumsstrategie Unternehmen",
      "Digital-Marketing-Beratung",
      "Google Ads Management",
      "Internationales Marketing",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("de"),
  locale: "de",
};
