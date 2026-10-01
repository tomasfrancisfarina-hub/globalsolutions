import type { HomeContent } from "@/types";

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "Unternehmensberatung für Wachstum",
    headline: "Wir helfen Unternehmen,\nmit Klarheit zu wachsen",
    subheadline:
      "Wir verbinden Strategie, künstliche Intelligenz, Automatisierung und Umsetzung, um nachhaltiges Wachstum für ambitionierte Unternehmen weltweit zu fördern.",
    cta: {
      primary: { label: "Gespräch starten", href: "/contact" },
      secondary: { label: "Divisionen entdecken", href: "/divisions" },
    },
  },
  vision: {
    eyebrow: "Unsere Vision",
    headline: "Wir vereinfachen Komplexität,\num das Wesentliche zu beschleunigen",
    description:
      "Wir sind überzeugt: Nachhaltiges Unternehmenswachstum entsteht aus strategischer Klarheit, disziplinierter Umsetzung und angewandter Intelligenz.",
    pillars: [
      {
        title: "Strategie",
        description: "Wir definieren die Richtung durch fundierte Analyse und langfristige Vision.",
      },
      {
        title: "Umsetzung",
        description: "Wir machen aus Strategie Ergebnisse – mit klaren, messbaren Prozessen.",
      },
      {
        title: "Intelligenz",
        description: "Wir setzen KI und Automatisierung dort ein, wo sie echten Geschäftswert schaffen.",
      },
    ],
  },
  divisions: {
    eyebrow: "Divisionen",
    headline: "Sechs Kompetenzfelder.\nEin Anspruch: Wachstum.",
    description:
      "Jede Division bringt eine spezialisierte Perspektive in eine gemeinsame Vision des Unternehmenswachstums ein.",
  },
  growth: {
    eyebrow: "So arbeiten wir",
    headline: "Ein klarer Prozess\nfür konkrete Ergebnisse",
    steps: [
      {
        number: "01",
        title: "Diagnose",
        description: "Wir analysieren die Ausgangslage, den Markt und die Wachstumschancen.",
      },
      {
        number: "02",
        title: "Strategie",
        description: "Wir entwickeln einen klaren Plan mit messbaren Zielen und definierten Prioritäten.",
      },
      {
        number: "03",
        title: "Umsetzung",
        description: "Wir setzen mit Präzision um und begleiten Teams in jeder Phase.",
      },
      {
        number: "04",
        title: "Skalierung",
        description: "Wir optimieren, messen und skalieren, was funktioniert.",
      },
    ],
  },
  proof: {
    eyebrow: "Ergebnisse",
    headline: "Messbarer Impact",
    metrics: [
      { value: "Marke", label: "Strategische Positionierung" },
      { value: "Märkte", label: "Internationale Expansion" },
      { value: "Wachstum", label: "Umsetzung mit Klarheit" },
    ],
    status: "published" as const,
  },
  methodology: {
    eyebrow: "Methodik",
    headline: "Ein bewährtes Framework\nfür Wachstum",
    description:
      "Unsere Methodik verbindet analytische Strenge mit Umsetzungsagilität und passt sich der Realität jedes Unternehmens an.",
    steps: [
      { number: "01", title: "Analyse", description: "Tiefgehende Diagnose der aktuellen Situation." },
      { number: "02", title: "Design", description: "Individuelle Strategie mit klaren Zielen." },
      { number: "03", title: "Implementierung", description: "Begleitete Umsetzung mit Steuerungskennzahlen." },
      { number: "04", title: "Optimierung", description: "Kontinuierliche Verbesserung auf Basis von Daten." },
      { number: "05", title: "Skalierung", description: "Ausweitung dessen, was funktioniert." },
    ],
  },
  cta: {
    headline: "Sprechen wir darüber,\nIhr Unternehmen wachsen zu lassen.",
    description: "Vereinbaren Sie ein strategisches Gespräch – unverbindlich.",
    button: { label: "Gespräch vereinbaren", href: "/contact" },
  },
};
