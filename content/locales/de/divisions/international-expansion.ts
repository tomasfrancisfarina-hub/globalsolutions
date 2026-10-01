import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const internationalExpansion: Division = {
  id: "international-expansion",
  slug: "international-expansion",
  name: "Internationale Expansion",
  tagline: "Markteintritt weltweit mit bewährter Methodik",
  description:
    "Wir begleiten Unternehmen bei der internationalen Expansion – von der Analyse der Zielmärkte bis zur operativen Umsetzung. Wir minimieren Risiken und beschleunigen den Eintritt in neue Märkte, darunter die USA, Europa und die VAE.",
  vision:
    "Erfolgreiche internationale Expansion braucht mehr als Ambition – sie braucht Strategie, lokales Wissen und präzise Umsetzung. Wir liefern alle drei.",
  capabilities: [
    { id: "expansion-internacional", name: "Internationale Expansion", description: "Planung und Umsetzung des Eintritts in internationale Märkte." },
  ],
  order: 4,
  featured: true,
  seo: {
    title: "Beratung Internationale Expansion — Globaler Markteintritt",
    description:
      "Beratung zur internationalen Expansion für Unternehmen, die in Märkte in den USA, Europa und dem Nahen Osten eintreten. Marktanalyse, Eintrittsstrategie und operative Umsetzung.",
    keywords: [
      "Beratung Internationale Expansion",
      "Globaler Markteintritt",
      "Internationale Unternehmensberatung",
      "Markteintrittsstrategie",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("de"),
  locale: "de",
};
