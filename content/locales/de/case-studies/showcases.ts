import type { SectorShowcase } from "@/types";

const assets = "/case-studies/beauty-personal-care";

export const sectorShowcasesDe: SectorShowcase[] = [
  {
    sectorId: "beauty-personal-care",
    locale: "de",
    eyebrow: "GSW / Beauty & Körperpflege",
    heroLines: ["Beauty", "mit Präsenz."],
    intro:
      "Friseur und Kosmetik. Zwei eigenständige Fallstudien zu Markenstrategie, Community-Wachstum und Marketingkampagnen.",
    projectsLabel: "Fallstudien · Friseur und Kosmetik",
    cases: [
      {
        id: "womens-hair-salon",
        name: "Damenfriseur",
        location: "Friseursalon · Langjährige Zusammenarbeit",
        description:
          "Von null auf 22.000 Follower. Ganzheitliche Marketingleitung gemeinsam mit der Inhaberin – von den Anfängen des Salons an und über mehrere Jahre –, um die Marke aufzubauen und ihre Position in der Stadt zu festigen.",
        services: [
          "Marketingleitung",
          "Logo & Markenidentität",
          "3D-Design des Salons",
          "Kampagnen & Social Media",
          "Personalwesen",
        ],
        story: {
          label: "Die Zusammenarbeit · Von Anfang an",
          body: "In einer beruflichen Phase vor der heutigen GSW übernahm Tomás Fariña gemeinsam mit der Inhaberin die Marketingleitung des Salons. Die Arbeit umfasste die Gesamtstrategie, das Design von Logo und Markenidentität, das 3D-Design des Salons sowie Unterstützung im Personalbereich. Über mehrere Jahre wurden Kampagnen und die digitale Community betreut, die auf Facebook von null auf 22.000 Follower wuchs und dazu beitrug, den Salon als Referenz in seiner Stadt zu positionieren.",
        },
        layout: "triptych",
        images: [
          {
            src: `${assets}/salon-space.webp`,
            width: 1534,
            height: 1025,
            alt: "Waschbereich von Amen: für die Präsentation retuschiertes Foto mit hinzugefügtem Bild",
            caption: "Der Raum · retuschiertes Foto",
          },
          {
            src: `${assets}/salon-community-22k.webp`,
            width: 1681,
            height: 935,
            alt: "Profil von Amen Peluquería mit 22.000 Followern; für die Präsentation bereinigter Screenshot",
            caption: "Community · 22.000 Follower",
          },
          {
            src: `${assets}/salon-campaign-2018.webp`,
            width: 1774,
            height: 887,
            alt: "Historische Balayage-Kampagne vom 26. Februar 2018: 109 Reaktionen, 384 Kommentare und 12-mal geteilt; bereinigter Screenshot",
            caption: "Kampagne · Februar 2018",
          },
        ],
      },
      {
        id: "womens-aesthetics",
        name: "Damenkosmetik",
        location: "Argentinien · Kosmetikstudio",
        description:
          "Marketingkampagnen, um ihre Behandlungen sichtbar zu machen und bei potenziellen Kundinnen Interesse und Interaktion zu wecken.",
        services: ["Werbekampagnen", "Digitales Marketing"],
        layout: "diptych",
        images: [
          {
            src: `${assets}/aesthetics-campaign.webp`,
            width: 808,
            height: 400,
            alt: "Historisches Kampagnenbeispiel von Amen Estética mit 244 Reaktionen, 92 Kommentaren und 15-mal geteilt",
            caption: "Kampagne · historischer Screenshot",
          },
          {
            src: `${assets}/aesthetics-projection-simulated.webp`,
            width: 1334,
            height: 1179,
            alt: "Projektion +50 % mit simulierten Daten: 60.996 Impressionen, 926 Besuche, 45,69 Euro Budget und 600 Events; keine realen Ergebnisse",
            caption: "Projektion +50 % · SIMULIERTE DATEN",
          },
        ],
        metrics: [
          { value: 244, label: "Reaktionen" },
          { value: 92, label: "Kommentare" },
          { value: 15, label: "Geteilt" },
        ],
        metricsPeriod:
          "Zeitraum: Historischer Beitrag vom 19. Juli · Jahr nicht angegeben",
      },
    ],
    closing: {
      ctaLabel: "Kostenlose Analyse und Diagnose",
      title: "Möchten Sie die nächste Erfolgsgeschichte sein?",
      intro:
        "Buchen Sie ein kostenloses 30-minütiges Gespräch mit mir, um Ihr Unternehmen zu analysieren, Ihre aktuelle Situation zu diagnostizieren und die nächsten Schritte festzulegen.",
      portrait: {
        src: `${assets}/tomas-farina.webp`,
        alt: "Tomás Fariña, CEO und Marketing Director von Global Solutions Worldwide",
      },
      name: "Tomás Fariña",
      role: "Global Solutions Worldwide · CEO & Marketing Director",
      calendarTitle: "30-minütiges Gespräch mit Tomás Fariña buchen",
      calendarFallback: "Kalender auf Cal.com öffnen",
    },
    labels: {
      enlarge: "Bild vergrößern",
      close: "Bild schließen",
    },
  },
];
