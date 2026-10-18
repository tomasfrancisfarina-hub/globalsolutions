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
  {
    id: "m-two-club-mallorca",
    slug: "m-two-club-mallorca",
    sectorId: "nightlife-clubs",
    name: "M‑Two Mallorca",
    location: "Mallorca · Nightclub",
    locale: "de",
    listed: true,
    summary:
      "2024 verbanden wir digitale Kampagnen mit Events und Kooperationen mit Eventmarken, um die Identität des Clubs zu stärken und lokales sowie internationales Publikum zu erreichen.",
    services: [
      "Meta-Kampagnen",
      "Eventstrategie",
      "Lokale Kooperationen",
    ],
    links: {
      website: "https://m-two.club/",
    },
    primary: {
      type: "image",
      src: "/case-studies/m-two-club-mallorca/meta-ad.png",
      alt: "Facebook-Anzeige von M TWO Club Mallorca mit Reservierungsaufruf",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/m-two-club-mallorca/instagram-growth.png",
        alt: "Instagram-Entwicklung von M TWO Club Mallorca",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Kontext und Herausforderung",
        body: "2024 verbanden wir digitale Kampagnen mit Events und Kooperationen mit Eventmarken. Party Animals, Dirty Party und Palma Events waren Teil einer Strategie, die Identität des Clubs zu stärken und das Publikum auf der Insel sowie international zu erreichen.",
      },
      {
        id: "work",
        title: "Arbeit von GSW",
        body: "Wir testeten verschiedene Ansätze, bis wir einen der Schlüssel identifizierten: Partnerschaften mit Eventmarken, verstärkt durch Werbekampagnen, Creatives und ein ganzheitliches Management der Strategie.",
      },
      {
        id: "results",
        title: "Gemessene Ergebnisse",
        body: "Die Ergebnisse stammen aus getrennten Maßnahmen der Zusammenarbeit: einer Traffic-Kampagne, einer Video-Kampagne und der auf Instagram verzeichneten Entwicklung.",
      },
    ],
    metricsPeriod: "Ergebnisse nach separater Maßnahme",
    metrics: [
      { value: 989, label: "Linkklicks", display: "989" },
      { value: 119.59, label: "Werbeausgaben", display: "119,59 €" },
      { value: 0.12, label: "Kosten pro Klick", display: "0,12 €" },
      { value: 55450, label: "Videoaufrufe", display: "55.450" },
      { value: 31, label: "Initiale Capture-Rate", display: "31 %" },
      { value: 1100, label: "Linkklicks · Instagram", display: "1,1 Tsd." },
      { value: 100, label: "Von Meta angezeigte Veränderung", display: "↑ 100 %" },
    ],
    caseImages: [
      {
        id: "hero",
        filename: "meta-ad.png",
        alt: "Facebook-Anzeige von M TWO Club Mallorca",
        src: "/case-studies/m-two-club-mallorca/meta-ad.png",
        aspect: "auto",
      },
      {
        id: "instagram",
        filename: "instagram-growth.png",
        alt: "Instagram-Entwicklung von M TWO Club Mallorca",
        src: "/case-studies/m-two-club-mallorca/instagram-growth.png",
        aspect: "auto",
      },
    ],
    seo: {
      title: "M‑Two Mallorca — Fallstudie",
      description:
        "Fallstudie von Global Solutions mit M‑Two Mallorca: Meta-Kampagnen, Eventstrategie, Kooperationen und digitale Ergebnisse.",
      ogTitle: "M‑Two Mallorca",
      ogDescription: "Echte Geschichten. Wirkung, die man spürt.",
    },
  },
  {
    id: "oceans-mallorca",
    slug: "oceans-mallorca",
    sectorId: "nightlife-clubs",
    name: "Oceans Mallorca",
    location: "Magaluf · Mallorca · 2019",
    locale: "de",
    listed: true,
    summary:
      "Bewerbung mehrerer Termine mit Künstlern wie Javi Bora und Chus & Ceballos für Oceans Night Club Mallorca.",
    services: [
      "Eventpromotion",
      "Künstlerkampagnen",
      "Javi Bora · Chus & Ceballos",
    ],
    links: {
      website: "https://oceanscalviabeach.com/en/",
    },
    primary: {
      type: "image",
      src: "/case-studies/oceans-mallorca/campaign-2019.png",
      alt: "Originalbeitrag von Oceans Night Club Mallorca für Chus & Ceballos am 23. August 2019",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/oceans-mallorca/interior.png",
        alt: "Innenraum des Oceans Beach Club Mallorca mit violetter Beleuchtung und Oceans-Logo",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Kontext und Herausforderung",
        body: "Bewerbung mehrerer Termine mit Künstlern wie Javi Bora und Chus & Ceballos für Oceans Night Club Mallorca.",
      },
      {
        id: "work",
        title: "Arbeit von GSW",
        body: "Die Kampagne für Chus & Ceballos erzielte die stärkste Resonanz der Zusammenarbeit, zu der auch unsere Teilnahme am Event gehörte.",
      },
    ],
    caseImages: [
      {
        id: "hero",
        filename: "campaign-2019.png",
        alt: "Oceans-Kampagnenarchiv für Chus & Ceballos 2019",
        src: "/case-studies/oceans-mallorca/campaign-2019.png",
        aspect: "auto",
      },
      {
        id: "interior",
        filename: "interior.png",
        alt: "Innenraum des Oceans Beach Club Mallorca",
        src: "/case-studies/oceans-mallorca/interior.png",
        aspect: "auto",
      },
    ],
    seo: {
      title: "Oceans Mallorca — Fallstudie",
      description:
        "Fallstudie von Global Solutions mit Oceans Mallorca: Eventpromotion und Künstlerkampagnen im Jahr 2019.",
      ogTitle: "Oceans Mallorca",
      ogDescription: "Echte Geschichten. Wirkung, die man spürt.",
    },
  },
  {
    id: "womens-hair-salon",
    slug: "womens-hair-salon",
    sectorId: "beauty-personal-care",
    name: "Damenfriseur",
    location: "Friseursalon · Langjährige Zusammenarbeit",
    locale: "de",
    listed: true,
    listingOnly: true,
    summary:
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
    mediaLayout: "wide-primary",
    primary: {
      type: "image",
      src: "/case-studies/beauty-personal-care/salon-space.webp",
      alt: "Waschbereich von Amen: für die Präsentation retuschiertes Foto mit hinzugefügtem Bild",
      caption: "Der Raum · retuschiertes Foto",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/beauty-personal-care/salon-community-22k.webp",
        alt: "Profil von Amen Peluquería mit 22.000 Followern; für die Präsentation bereinigter Screenshot",
        caption: "Community · 22.000 Follower",
        fit: "contain",
      },
      {
        type: "image",
        src: "/case-studies/beauty-personal-care/salon-campaign-2018.webp",
        alt: "Historische Balayage-Kampagne vom 26. Februar 2018: 109 Reaktionen, 384 Kommentare und 12-mal geteilt; bereinigter Screenshot",
        caption: "Kampagne · Februar 2018",
        fit: "contain",
      },
    ],
    seo: {
      title: "Damenfriseur — Fallstudie",
      description:
        "Fallstudie von Global Solutions im Friseurhandwerk: Marke, Community und Kampagnen.",
    },
  },
  {
    id: "womens-aesthetics",
    slug: "womens-aesthetics",
    sectorId: "beauty-personal-care",
    name: "Damenkosmetik",
    location: "Argentinien · Kosmetikstudio",
    locale: "de",
    listed: true,
    listingOnly: true,
    summary:
      "Marketingkampagnen, um ihre Behandlungen sichtbar zu machen und bei potenziellen Kundinnen Interesse und Interaktion zu wecken.",
    services: ["Werbekampagnen", "Digitales Marketing"],
    mediaLayout: "wide-primary",
    primary: {
      type: "image",
      src: "/case-studies/beauty-personal-care/aesthetics-campaign.webp",
      alt: "Historisches Kampagnenbeispiel von Amen Estética mit 244 Reaktionen, 92 Kommentaren und 15-mal geteilt",
      caption: "Kampagne · historischer Screenshot",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/beauty-personal-care/aesthetics-projection-simulated.webp",
        alt: "Projektion +50 % mit simulierten Daten: 60.996 Impressionen, 926 Besuche, 45,69 Euro Budget und 600 Events; keine realen Ergebnisse",
        caption: "Projektion +50 % · SIMULIERTE DATEN",
        fit: "contain",
      },
    ],
    metrics: [
      { value: 244, label: "Reaktionen" },
      { value: 92, label: "Kommentare" },
      { value: 15, label: "Geteilt" },
    ],
    metricsPeriod:
      "Zeitraum: Historischer Beitrag vom 19. Juli · Jahr nicht angegeben",
    seo: {
      title: "Damenkosmetik — Fallstudie",
      description:
        "Fallstudie von Global Solutions in der Kosmetik: Kampagnen und Interaktion.",
    },
  },
  {
    id: "thomas-inmo",
    slug: "thomas-inmo",
    sectorId: "real-estate-investment",
    name: "Thomas Inmo",
    location: "Mallorca · Deutscher Markt",
    locale: "de",
    listed: true,
    listingOnly: true,
    summary:
      "Eine ganzheitliche Strategie, um Cala Serena internationalen Käufern näherzubringen: segmentierte Kampagnen, Creatives, Landingpage mit Formular und Kontaktaufnahme in Deutschland. Ergänzend kamen Portalrecherche und Off-Market-Verbreitung hinzu, um Besichtigungen potenzieller Kunden zu unterstützen.",
    services: [
      "Meta Ads",
      "Segmentierung und Creatives",
      "Landingpage und Formular",
      "Ansprache in Deutschland",
      "Off-Market-Verbreitung",
    ],
    links: {
      website: "https://cala-serena.vercel.app/es",
      websiteLabel: "Website ansehen",
    },
    story: {
      label: "Von Sichtbarkeit zu Besichtigungen",
      body: "Nach den Kampagnen wurden Besichtigungen der Immobilie vereinbart; die Besichtigungstätigkeit läuft laut der vom Kunden geteilten Nachverfolgung weiter.",
    },
    mediaLayout: "wide-primary",
    primary: {
      type: "video",
      src: "/case-studies/real-estate-investment/thomas-inmo-landing.mp4",
      poster: "/case-studies/real-estate-investment/thomas-inmo-01.jpg",
      alt: "Echte Präsentation der Landingpage von Cala Serena",
      caption: "Landingpage Cala Serena",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/real-estate-investment/thomas-inmo-02.png",
        alt: "Echter Meta-Screenshot: früherer Schnitt mit 264 Besuchen, 15.661 Impressionen und 83,55 € Investition",
        caption: "Meta Ads · früherer Schnitt",
        fit: "contain",
      },
      {
        type: "slider",
        alt: "Cala-Serena-Creatives für Deutschland",
        caption: "Kampagnen · Deutschland",
        sliderLabel: "Kampagnen / Deutschland",
        previousLabel: "Vorheriges Creative",
        nextLabel: "Nächstes Creative",
        slides: [
          {
            kind: "collage",
            sources: [
              {
                src: "/case-studies/real-estate-investment/thomas-inmo-creative-01.png",
                alt: "Cala-Serena-Creative 1",
              },
              {
                src: "/case-studies/real-estate-investment/thomas-inmo-creative-02.png",
                alt: "Cala-Serena-Creative 2",
              },
              {
                src: "/case-studies/real-estate-investment/thomas-inmo-creative-03.png",
                alt: "Cala-Serena-Creative 3",
              },
            ],
          },
          {
            kind: "panel",
            kicker: "IN ENTWICKLUNG",
            title: "Polen.\nCosta Blanca.",
            body: "Landingpage für polnische Käufer.",
          },
          {
            kind: "image",
            src: "/case-studies/real-estate-investment/thomas-inmo-creative-01.png",
            alt: "Cala-Serena-Creative 1",
          },
          {
            kind: "image",
            src: "/case-studies/real-estate-investment/thomas-inmo-creative-02.png",
            alt: "Cala-Serena-Creative 2",
          },
          {
            kind: "image",
            src: "/case-studies/real-estate-investment/thomas-inmo-creative-03.png",
            alt: "Cala-Serena-Creative 3",
          },
        ],
      },
    ],
    metrics: [
      { value: 416, label: "Besuche der Landingpage" },
      { value: 19795, display: "19.795", label: "Impressionen" },
      { value: 13088, display: "13.088", label: "Erreichte Personen" },
      { value: 0.25, display: "0,25 €", label: "Kosten pro Landingpage-Besuch" },
      { value: 105.38, display: "105,38 €", label: "Werbeinvestition" },
    ],
    metricsPeriod:
      "Zeitraum: Aktives 30-Tage-Fenster · Kampagnenbericht Thomas Inmo",
    metricsNote:
      "Besuche der Landingpage sind weder Kontakte noch Vor-Ort-Besichtigungen. Abschlussbericht: aktives 30-Tage-Fenster. Der Meta-Screenshot zeigt einen früheren Schnitt: 264 Besuche und 83,55 € Investition. Polen / Costa Blanca: derzeit entwickeln wir eine Landingpage für polnische Käufer von Immobilien an der Costa Blanca.",
    seo: {
      title: "Thomas Inmo — Fallstudie",
      description:
        "Fallstudie von Global Solutions mit Thomas Inmo: Kampagnen, Landingpage und Ansprache für Cala Serena.",
    },
  },
  {
    id: "morales-estates",
    slug: "morales-estates",
    sectorId: "real-estate-investment",
    name: "Morales Estates",
    location: "Immobilien und Investment",
    locale: "de",
    listed: true,
    listingOnly: true,
    summary:
      "Von einer unfertigen WordPress-Website zu einer premium Immobilienpräsenz. Wir haben das Projekt übernommen und fertiggestellt, einen Chatbot integriert, den Blog aufgebaut und am SEO gearbeitet. Außerdem haben wir drei Immobilien akquiriert, um das Portfolio des Kunden zu erweitern.",
    services: [
      "WordPress-Entwicklung",
      "Chatbot",
      "Blog und SEO",
      "3 akquirierte Immobilien",
    ],
    links: {
      website: "https://moralesestates.com/",
      websiteLabel: "Website ansehen",
    },
    story: {
      label: "Nächste Phase",
      body: "Die nächste Phase sieht ein System aus Kooperationen und Eigentümergewinnung vor, um das Portfolio zu erweitern und neue Geschäftschancen zu schaffen.",
    },
    mediaLayout: "wide-primary",
    primary: {
      type: "image",
      src: "/case-studies/real-estate-investment/morales-estates-01.png",
      alt: "Website und Chatbot von Morales Estates",
      caption: "Website und Chatbot von Morales Estates",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/real-estate-investment/morales-estates-02.png",
        alt: "Immobilienkatalog von Morales Estates",
        caption: "Immobilienkatalog von Morales Estates",
        fit: "contain",
      },
      {
        type: "image",
        src: "/case-studies/real-estate-investment/morales-estates-03.png",
        alt: "Blog von Morales Estates",
        caption: "Blog von Morales Estates",
        fit: "contain",
      },
    ],
    seo: {
      title: "Morales Estates — Fallstudie",
      description:
        "Fallstudie von Global Solutions mit Morales Estates: WordPress, Chatbot, Blog, SEO und Immobilienakquise.",
    },
  },
];
