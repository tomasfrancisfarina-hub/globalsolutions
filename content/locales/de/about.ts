import type { AboutContent } from "@/types";

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "Unternehmen",
    headline: "Eine Beratungsfirma\nfür Unternehmen mit großem Anspruch",
    description:
      "Global Solutions ist eine internationale Unternehmensberatung mit Fokus auf Wachstum. Wir unterstützen Führungskräfte und Leitungsteams dabei, nachhaltige Wachstumsstrategien zu entwickeln und umzusetzen.",
  },
  mission: {
    headline: "Unsere Mission",
    description:
      "Unternehmen beim Wachstum unterstützen – durch Strategie, künstliche Intelligenz, Automatisierung und Umsetzung. Wir vereinfachen komplexe Probleme, um das Wesentliche zu beschleunigen.",
  },
  values: [
    {
      title: "Klarheit",
      description: "Komplexität bleibt hinter dem System. Gegenüber dem Kunden zählt nur Klarheit.",
    },
    {
      title: "Rigorosität",
      description: "Entscheidungen auf Basis von Analyse – nicht von Annahmen.",
    },
    {
      title: "Verbindlichkeit",
      description: "Wir begleiten bis zum Ergebnis – wir liefern keine Berichte und verschwinden.",
    },
  ],
  testimonials: [
    {
      id: "testimonial-edgar-l",
      quote:
        "Global Solutions hat uns geholfen, eine stärkere Markenidentität und eine klarere Wachstumsrichtung für unser Hospitality-Projekt zu definieren.",
      author: "Edgar L.",
      role: "Unternehmer im Hospitality-Bereich",
      company: "Markenentwicklung",
      status: "published",
    },
    {
      id: "testimonial-dominic-m",
      quote:
        "Der strategische Ansatz von Global Solutions hat unser Konzept gestärkt, unsere Marktpräsenz ausgebaut und eine klare langfristige Wertperspektive geschaffen.",
      author: "Dominic M.",
      role: "Unternehmer für Hospitality & Lifestyle",
      company: "Premium-Positionierung",
      status: "published",
    },
  ],
};
