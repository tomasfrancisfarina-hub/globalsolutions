import type { PortfolioProject } from "@/types";

export const portfolioProjectsDe: PortfolioProject[] = [
  {
    id: "nanai-hamburg",
    slug: "nanai-hamburg",
    sectorId: "food-beverage",
    name: "Nanai Hamburg",
    location: "Hamburg, Deutschland",
    locale: "de",
    listed: true,
    summary:
      "Digitale und Markenpräsenz im Einklang mit Nanais gastronomischer Positionierung in Hamburg – mit Fokus auf Klarheit und Online-Wachstum.",
    services: ["Positionierung", "Webentwicklung", "Digitales Marketing"],
    links: {
      website: "https://nanai-hamburg.de",
      instagram: "https://www.instagram.com/restaurant_nanai_hamburg/",
    },
    primary: {
      type: "video",
      src: "/case-studies/nanai-hamburg/web-before-after.mp4",
      alt: "Nanai Hamburg — Website vorher und nachher",
    },
    supports: [
      {
        type: "video",
        src: "/case-studies/nanai-hamburg/support-right.mp4",
        alt: "Nanai Hamburg — Projektvisual",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Kontext und Herausforderung",
        body: "Nanai brauchte eine digitale und Markenpräsenz, die zur gastronomischen Positionierung in Hamburg passt.",
      },
      {
        id: "work",
        title: "Arbeit von GSW",
        body: "Wir begleiteten das digitale Wachstum und die Online-Präsenz des Restaurants mit Fokus auf Markenklarheit, Website und Instagram.",
      },
      {
        id: "results",
        title: "Gemessene Ergebnisse",
        body: "Instagram-Follower-Wachstum: von 647 auf 1.160 (+513, +79,3%). Die Zahlen stammen aus dem dokumentierten Profilvergleich von @restaurant_nanai_hamburg.",
      },
      {
        id: "meaning",
        title: "Was sie bedeuten",
        body: "Das Profil wuchs von einer kleineren Basis zu einer klar größeren Audience – mit messbarem Follower-Wachstum.",
      },
      {
        id: "next",
        title: "Worauf es ankommt",
        body: "Wir freuen uns, das wichtigste Ziel erreicht zu haben: Umsatz und Erlöse zu steigern. Marketing kann oft laut wirken — aber wenn das das Ergebnis ist, können wir weiter skalieren, expandieren und in die Verbesserung des Ganzen reinvestieren.",
      },
    ],
    metricsPeriod: "Instagram · @restaurant_nanai_hamburg",
    metrics: [
      { value: 647, label: "Follower vorher", display: "647" },
      { value: 1160, label: "Follower jetzt", display: "1.160" },
      { value: 513, label: "Neue Follower", display: "+513" },
      { value: 79.3, label: "Wachstum", display: "+79,3%" },
    ],
    caseImages: [
      {
        id: "hero",
        filename: "web-before-after.mp4",
        alt: "Nanai Hamburg — Website-Vergleich",
        src: "/case-studies/nanai-hamburg/web-before-after.mp4",
        aspect: "16/9",
      },
      {
        id: "support-2",
        filename: "support-right.mp4",
        alt: "Nanai Hamburg — Projektvisual",
        src: "/case-studies/nanai-hamburg/support-right.mp4",
        aspect: "16/9",
      },
    ],
    seo: {
      title: "Nanai Hamburg — Fallstudie",
      description:
        "Fallstudie von Global Solutions mit Nanai Hamburg: Website, Instagram und digitales Wachstum.",
      ogTitle: "Nanai Hamburg",
      ogDescription: "Echte Geschichten. Wirkung, die man spürt.",
    },
  },
  {
    id: "santa-ruta",
    slug: "santa-ruta",
    sectorId: "food-beverage",
    name: "Santa Ruta",
    location: "Santa Ponça, Mallorca",
    locale: "de",
    listed: true,
    summary:
      "Eine solide visuelle Basis für ein Familienunternehmen mit Wachstumsabsicht: Kampagnen, Identität und Instagram-Ergebnisse.",
    services: ["Visuelle Identität", "Content", "Digitales Marketing"],
    mediaLayout: "wide-primary",
    links: {
      instagram: "https://www.instagram.com/santaruta.santaponsa/",
    },
    primary: {
      type: "image",
      src: "/case-studies/santa-ruta/instagram-before-after.jpg",
      alt: "Santa Ruta — Instagram vorher und nachher",
      aspect: "auto",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/santa-ruta/sales-growth.jpg",
        alt: "Santa Ruta — Umsatzwachstum",
        aspect: "auto",
        fit: "contain",
      },
      {
        type: "image",
        src: "/case-studies/santa-ruta/campaign-report.jpg",
        alt: "Santa Ruta — Meta-Ads-Kampagnenreport",
        aspect: "auto",
        fit: "contain",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Kontext und Herausforderung",
        body: "Eine solide visuelle Basis für ein Familienunternehmen mit Wachstumsabsicht. Santa Ruta beauftragte uns mit dem Management der Kampagnen.",
      },
      {
        id: "work",
        title: "Arbeit von GSW",
        body: "Bei Global Solutions sahen wir auch die Notwendigkeit, die Markenpräsentation zu stärken und lieferten ästhetische Verbesserungen über den ursprünglichen Scope hinaus — ein stimmiges Bild für Kommunikation und Kampagnen.",
      },
      {
        id: "results",
        title: "Gemessene Ergebnisse",
        body: "Meta Business Suite, 1. Mai – 20. Sep. 2026 (Instagram): 85,2 Tsd. Aufrufe, 18,8 Tsd. Reichweite, 2,3 Tsd. Besuche, 1,1 Tsd. Linkklicks, 515 Interaktionen (+730,6 %) und 187 Follower.",
      },
      {
        id: "meaning",
        title: "Was sie bedeuten",
        body: "Die Kampagnen brachten Sichtbarkeit, Traffic und Gespräch auf das Profil. Das Umsatzwachstum vs. Vorjahr wird zum Jahresende bestätigt.",
      },
      {
        id: "next",
        title: "Nächster Schritt",
        body: "Eine Website ist geplant, um die digitale Präsenz zu stärken und die künftige Expansion zu unterstützen.",
      },
    ],
    metricsPeriod: "Meta Business Suite · 1. Mai – 20. Sep. 2026 · Instagram",
    metrics: [
      { value: 85200, label: "Aufrufe", display: "85,2 Tsd." },
      { value: 18800, label: "Reichweite", display: "18,8 Tsd." },
      { value: 2300, label: "Besuche", display: "2,3 Tsd." },
      { value: 1100, label: "Linkklicks", display: "1,1 Tsd." },
      { value: 515, label: "Interaktionen · +730,6 %", display: "515" },
      { value: 187, label: "Follower", display: "187" },
    ],
    caseImages: [
      {
        id: "meta",
        filename: "meta-business-suite.jpg",
        alt: "Santa Ruta — Meta Business Suite, Instagram-Ergebnisse",
        src: "/case-studies/santa-ruta/meta-business-suite.jpg",
        aspect: "auto",
      },
      {
        id: "instagram",
        filename: "instagram-before-after.jpg",
        alt: "Santa Ruta — Instagram vorher und nachher",
        src: "/case-studies/santa-ruta/instagram-before-after.jpg",
        aspect: "auto",
      },
      {
        id: "sales",
        filename: "sales-growth.jpg",
        alt: "Santa Ruta — Umsatzwachstum",
        src: "/case-studies/santa-ruta/sales-growth.jpg",
        aspect: "auto",
      },
      {
        id: "campaign",
        filename: "campaign-report.jpg",
        alt: "Santa Ruta — Meta-Ads-Kampagnenreport",
        src: "/case-studies/santa-ruta/campaign-report.jpg",
        aspect: "auto",
      },
    ],
    seo: {
      title: "Santa Ruta — Fallstudie",
      description:
        "Fallstudie von Global Solutions mit Santa Ruta: visuelle Identität, Content, Instagram und Ergebnisse in Santa Ponça.",
      ogTitle: "Santa Ruta",
      ogDescription: "Echte Geschichten. Wirkung, die man spürt.",
    },
  },
  {
    id: "merchants",
    slug: "merchants",
    sectorId: "food-beverage",
    name: "Merchants",
    location: "Palma, Mallorca · Zusammenarbeit 2020",
    locale: "de",
    listed: true,
    summary:
      "Kampagnen und Targeting in den ersten Schritten von Merchants. Eine Zusammenarbeit, die digitale Spezialisierung zur Erfahrung des Inhabers und seines Teams hinzufügte.",
    services: [
      "Werbekampagnen",
      "Audience-Targeting",
      "Content-Ideen und Strategie",
    ],
    mediaLayout: "wide-primary",
    links: {
      website: "https://merchantspalma.com/",
    },
    primary: {
      type: "image",
      src: "/case-studies/merchants/garden.webp",
      alt: "Merchants — Garten, aktuelle Fotografie",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/merchants/facebook.png",
        alt: "Merchants — historischer Facebook-Screenshot",
      },
      {
        type: "image",
        src: "/case-studies/merchants/terrace.webp",
        alt: "Merchants — Terrasse, aktuelle Fotografie",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Kontext und Herausforderung",
        body: "Kampagnen und Targeting in den ersten Schritten von Merchants. Eine Zusammenarbeit, die digitale Spezialisierung zur Erfahrung des Inhabers und seines Teams hinzufügte.",
      },
      {
        id: "work",
        title: "Arbeit von GSW",
        body: "Nach Kampagnen mit dem Inhaber für ein anderes Unternehmen begleiteten wir 2020 den Start seines neuen Restaurants — in den Anfängen von Global Solutions. Der Fokus lag auf Kampagnen und Targeting sowie Content- und Strategie-Vorschlägen.",
      },
      {
        id: "meaning",
        title: "Synergie und Verbindung",
        body: "Der Inhaber brachte umfangreiche Erfahrung mit und erweiterte später auf vier Restaurants unter verschiedenen Marken. Dieses Wachstum gehört zu seinem unternehmerischen Weg; dieser Fall beschreibt unseren konkreten Beitrag zum Projekt.",
      },
    ],
    caseImages: [
      {
        id: "garden",
        filename: "garden.webp",
        alt: "Merchants — Garten",
        src: "/case-studies/merchants/garden.webp",
        aspect: "auto",
      },
      {
        id: "facebook",
        filename: "facebook.png",
        alt: "Merchants — historisches Facebook",
        src: "/case-studies/merchants/facebook.png",
        aspect: "auto",
      },
      {
        id: "terrace",
        filename: "terrace.webp",
        alt: "Merchants — Terrasse",
        src: "/case-studies/merchants/terrace.webp",
        aspect: "auto",
      },
    ],
    seo: {
      title: "Merchants — Fallstudie",
      description:
        "Fallstudie von Global Solutions mit Merchants in Palma: Kampagnen, Targeting und Strategie zum Start 2020.",
      ogTitle: "Merchants",
      ogDescription: "Echte Geschichten. Wirkung, die man spürt.",
    },
  },
  {
    id: "beatnik",
    slug: "beatnik",
    sectorId: "food-beverage",
    name: "Beatnik",
    location: "Palma, Mallorca",
    locale: "de",
    listed: true,
    summary: "Palma · Vollständige Fallstudie folgt in Kürze.",
    links: {
      website: "https://purogroup.com/es/restaurantes/beatnik-restaurant-bar",
    },
    primary: {
      type: "image",
      alt: "Beatnik",
    },
    supports: [],
    moments: [
      {
        id: "context",
        title: "Kontext",
        body: "Beatnik (Palma). Die vollständige Fallstudie folgt hier; bis dahin ist die Website die Referenz.",
      },
    ],
    seo: {
      title: "Beatnik — Fallstudie",
      description: "Beatnik, Palma. Fallstudie von Global Solutions, vollständiger Inhalt folgt.",
      ogTitle: "Beatnik",
      ogDescription: "Echte Geschichten. Wirkung, die man spürt.",
    },
  },
  {
    id: "polaris",
    slug: "polaris",
    sectorId: "food-beverage",
    name: "Polaris",
    location: "Mallorca",
    locale: "de",
    listed: true,
    summary:
      "Mallorca · Webentwicklung von Global Solutions Worldwide mit neuen Technologien.",
    services: ["Webentwicklung"],
    links: {
      website: "https://www.polarisworldmallorca.com/",
    },
    primary: {
      type: "image",
      alt: "Polaris",
    },
    supports: [],
    moments: [
      {
        id: "work",
        title: "Arbeit von GSW",
        body: "Webentwicklung von Global Solutions Worldwide mit neuen Technologien. Der visuelle Fall wird hier noch erweitert.",
      },
    ],
    seo: {
      title: "Polaris — Fallstudie",
      description:
        "Polaris Mallorca: Webentwicklung von Global Solutions Worldwide mit neuen Technologien.",
      ogTitle: "Polaris",
      ogDescription: "Echte Geschichten. Wirkung, die man spürt.",
    },
  },
];
