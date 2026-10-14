import type { PortfolioProject } from "@/types";

export const portfolioProjectsEn: PortfolioProject[] = [
  {
    id: "nanai-hamburg",
    slug: "nanai-hamburg",
    sectorId: "food-beverage",
    name: "Nanai Hamburg",
    location: "Hamburg, Germany",
    locale: "en",
    listed: true,
    summary:
      "Digital and brand presence aligned with Nanai’s dining proposition in Hamburg, focused on clarity and online growth.",
    services: ["Positioning", "Web development", "Digital marketing"],
    links: {
      website: "https://nanai-hamburg.de",
      instagram: "https://www.instagram.com/restaurant_nanai_hamburg/",
    },
    primary: {
      type: "video",
      src: "/case-studies/nanai-hamburg/web-before-after.mp4",
      alt: "Nanai Hamburg — website before and after",
    },
    supports: [
      {
        type: "video",
        src: "/case-studies/nanai-hamburg/support-right.mp4",
        alt: "Nanai Hamburg — project visual",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Context and challenge",
        body: "Nanai needed a digital and brand presence aligned with its dining proposition in Hamburg.",
      },
      {
        id: "work",
        title: "GSW’s work",
        body: "We supported the restaurant’s digital growth and online presence with a focus on brand clarity, web, and Instagram.",
      },
      {
        id: "results",
        title: "Measured results",
        body: "Instagram follower growth: from 647 to 1,160 (+513, +79.3%). Figures come from the documented profile comparison for @restaurant_nanai_hamburg.",
      },
      {
        id: "meaning",
        title: "What they mean",
        body: "The profile moved from a smaller base to a clearly larger audience, with measurable follower growth.",
      },
      {
        id: "next",
        title: "What matters",
        body: "We are glad to have reached the goal that matters most: growing sales and revenue. Marketing can often feel noisy, but when that is the outcome, we can keep scaling, expanding and reinvesting in making everything better.",
      },
    ],
    metricsPeriod: "Instagram · @restaurant_nanai_hamburg",
    metrics: [
      { value: 647, label: "Followers before", display: "647" },
      { value: 1160, label: "Followers now", display: "1,160" },
      { value: 513, label: "New followers", display: "+513" },
      { value: 79.3, label: "Growth", display: "+79.3%" },
    ],
    caseImages: [
      {
        id: "hero",
        filename: "web-before-after.mp4",
        alt: "Nanai Hamburg — website comparison",
        src: "/case-studies/nanai-hamburg/web-before-after.mp4",
        aspect: "16/9",
      },
      {
        id: "support-2",
        filename: "support-right.mp4",
        alt: "Nanai Hamburg — project visual",
        src: "/case-studies/nanai-hamburg/support-right.mp4",
        aspect: "16/9",
      },
    ],
    seo: {
      title: "Nanai Hamburg — Case study",
      description:
        "Global Solutions case study with Nanai Hamburg: website, Instagram, and digital growth.",
      ogTitle: "Nanai Hamburg",
      ogDescription: "Real stories. Impact you can feel.",
    },
  },
  {
    id: "santa-ruta",
    slug: "santa-ruta",
    sectorId: "food-beverage",
    name: "Santa Ruta",
    location: "Santa Ponça, Mallorca",
    locale: "en",
    listed: true,
    summary:
      "A solid visual foundation for a family business ready to grow: campaigns, identity, and Instagram results.",
    services: ["Visual identity", "Content", "Digital marketing"],
    mediaLayout: "wide-primary",
    links: {
      instagram: "https://www.instagram.com/santaruta.santaponsa/",
    },
    primary: {
      type: "image",
      src: "/case-studies/santa-ruta/instagram-before-after.jpg",
      alt: "Santa Ruta — Instagram before and after",
      aspect: "auto",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/santa-ruta/sales-growth.jpg",
        alt: "Santa Ruta — sales growth",
        aspect: "auto",
        fit: "contain",
      },
      {
        type: "image",
        src: "/case-studies/santa-ruta/campaign-report.jpg",
        alt: "Santa Ruta — Meta Ads campaign report",
        aspect: "auto",
        fit: "contain",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Context and challenge",
        body: "A solid visual foundation for a family business ready to grow. Santa Ruta hired us to manage their campaigns.",
      },
      {
        id: "work",
        title: "GSW’s work",
        body: "At Global Solutions we also saw the need to strengthen brand presentation and delivered aesthetic improvements beyond the initial scope — a coherent look to support communication and campaigns.",
      },
      {
        id: "results",
        title: "Measured results",
        body: "Meta Business Suite, 1 May – 20 Sep 2026 (Instagram): 85.2K views, 18.8K reach, 2.3K visits, 1.1K link clicks, 515 content interactions (+730.6%) and 187 followers.",
      },
      {
        id: "meaning",
        title: "What they mean",
        body: "Campaigns drove visibility, traffic and conversation to the profile. Sales growth vs. last year will be confirmed at year-end.",
      },
      {
        id: "next",
        title: "Next step",
        body: "A website is planned to strengthen their digital presence and support future expansion.",
      },
    ],
    metricsPeriod: "Meta Business Suite · 1 May – 20 Sep 2026 · Instagram",
    metrics: [
      { value: 85200, label: "Views", display: "85.2K" },
      { value: 18800, label: "Reach", display: "18.8K" },
      { value: 2300, label: "Visits", display: "2.3K" },
      { value: 1100, label: "Link clicks", display: "1.1K" },
      { value: 515, label: "Interactions · +730.6%", display: "515" },
      { value: 187, label: "Followers", display: "187" },
    ],
    caseImages: [
      {
        id: "meta",
        filename: "meta-business-suite.jpg",
        alt: "Santa Ruta — Meta Business Suite, Instagram results",
        src: "/case-studies/santa-ruta/meta-business-suite.jpg",
        aspect: "auto",
      },
      {
        id: "instagram",
        filename: "instagram-before-after.jpg",
        alt: "Santa Ruta — Instagram before and after",
        src: "/case-studies/santa-ruta/instagram-before-after.jpg",
        aspect: "auto",
      },
      {
        id: "sales",
        filename: "sales-growth.jpg",
        alt: "Santa Ruta — sales growth",
        src: "/case-studies/santa-ruta/sales-growth.jpg",
        aspect: "auto",
      },
      {
        id: "campaign",
        filename: "campaign-report.jpg",
        alt: "Santa Ruta — Meta Ads campaign report",
        src: "/case-studies/santa-ruta/campaign-report.jpg",
        aspect: "auto",
      },
    ],
    seo: {
      title: "Santa Ruta — Case study",
      description:
        "Global Solutions case study with Santa Ruta: visual identity, content, Instagram and results in Santa Ponça.",
      ogTitle: "Santa Ruta",
      ogDescription: "Real stories. Impact you can feel.",
    },
  },
  {
    id: "merchants",
    slug: "merchants",
    sectorId: "food-beverage",
    name: "Merchants",
    location: "Palma, Mallorca · Collaboration in 2020",
    locale: "en",
    listed: true,
    summary:
      "Campaigns and audience targeting in Merchants’ first steps. A collaboration that added digital specialism to the owner’s vision and experience.",
    services: [
      "Advertising campaigns",
      "Audience targeting",
      "Content ideas and strategy",
    ],
    mediaLayout: "wide-primary",
    links: {
      website: "https://merchantspalma.com/",
    },
    primary: {
      type: "image",
      src: "/case-studies/merchants/garden.webp",
      alt: "Merchants — garden, current photograph",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/merchants/facebook.png",
        alt: "Merchants — historical Facebook capture",
      },
      {
        type: "image",
        src: "/case-studies/merchants/terrace.webp",
        alt: "Merchants — terrace, current photograph",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Context and challenge",
        body: "Campaigns and audience targeting in Merchants’ first steps. A collaboration that added digital specialism to the owner’s vision and experience.",
      },
      {
        id: "work",
        title: "GSW’s work",
        body: "After running campaigns with the owner for another business, we supported the launch of his new restaurant in 2020, in Global Solutions’ early years. The work focused on campaigns and targeting, with content proposals and overall strategy.",
      },
      {
        id: "meaning",
        title: "Synergy and connection",
        body: "The owner brought extensive experience and later expanded to four restaurants under different brands. That growth is part of his own journey; this case covers our specific contribution to the project.",
      },
    ],
    caseImages: [
      {
        id: "garden",
        filename: "garden.webp",
        alt: "Merchants — garden",
        src: "/case-studies/merchants/garden.webp",
        aspect: "auto",
      },
      {
        id: "facebook",
        filename: "facebook.png",
        alt: "Merchants — historical Facebook",
        src: "/case-studies/merchants/facebook.png",
        aspect: "auto",
      },
      {
        id: "terrace",
        filename: "terrace.webp",
        alt: "Merchants — terrace",
        src: "/case-studies/merchants/terrace.webp",
        aspect: "auto",
      },
    ],
    seo: {
      title: "Merchants — Case study",
      description:
        "Global Solutions case study with Merchants in Palma: campaigns, targeting and strategy at the 2020 launch.",
      ogTitle: "Merchants",
      ogDescription: "Real stories. Impact you can feel.",
    },
  },
  {
    id: "beatnik",
    slug: "beatnik",
    sectorId: "food-beverage",
    name: "Beatnik",
    location: "Palma, Mallorca",
    locale: "en",
    listed: true,
    summary: "Palma · Full case coming soon.",
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
        title: "Context",
        body: "Beatnik (Palma). The full case will be published here; for now the reference is their website.",
      },
    ],
    seo: {
      title: "Beatnik — Case study",
      description: "Beatnik, Palma. Global Solutions case study, full content coming soon.",
      ogTitle: "Beatnik",
      ogDescription: "Real stories. Impact you can feel.",
    },
  },
  {
    id: "polaris",
    slug: "polaris",
    sectorId: "food-beverage",
    name: "Polaris",
    location: "Mallorca",
    locale: "en",
    listed: true,
    summary:
      "Mallorca · Website development by Global Solutions Worldwide with new technologies.",
    services: ["Web development"],
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
        title: "GSW’s work",
        body: "Website development by Global Solutions Worldwide with new technologies. The full visual case will be expanded here.",
      },
    ],
    seo: {
      title: "Polaris — Case study",
      description:
        "Polaris Mallorca: website development by Global Solutions Worldwide with new technologies.",
      ogTitle: "Polaris",
      ogDescription: "Real stories. Impact you can feel.",
    },
  },
  {
    id: "m-two-club-mallorca",
    slug: "m-two-club-mallorca",
    sectorId: "nightlife-clubs",
    name: "M‑Two Mallorca",
    location: "Mallorca · Nightclub",
    locale: "en",
    listed: true,
    summary:
      "In 2024, we combined digital campaigns with events and event-brand collaborations to strengthen the club’s identity and connect with local and international audiences.",
    services: [
      "Meta campaigns",
      "Event strategy",
      "Local collaborations",
    ],
    links: {
      website: "https://m-two.club/",
    },
    primary: {
      type: "image",
      src: "/case-studies/m-two-club-mallorca/meta-ad.png",
      alt: "M TWO Club Mallorca Facebook ad with a booking call to action",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/m-two-club-mallorca/instagram-growth.png",
        alt: "M TWO Club Mallorca Instagram growth",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Context and challenge",
        body: "In 2024, we combined digital campaigns with events and collaborations with event brands. Party Animals, Dirty Party, and Palma Events formed part of a strategy to strengthen the club’s identity and connect with audiences on the island and internationally.",
      },
      {
        id: "work",
        title: "GSW’s work",
        body: "We tested different alternatives until we identified one of the keys: partnerships with event brands, reinforced by advertising campaigns, creative assets, and end-to-end strategy management.",
      },
      {
        id: "results",
        title: "Measured results",
        body: "The results belong to separate actions within the collaboration: a traffic campaign, a video campaign, and the growth recorded on Instagram.",
      },
    ],
    metricsPeriod: "Results shown by separate action",
    metrics: [
      { value: 989, label: "Link clicks", display: "989" },
      { value: 119.59, label: "Advertising spend", display: "€119.59" },
      { value: 0.12, label: "Cost per click", display: "€0.12" },
      { value: 55450, label: "Video plays", display: "55,450" },
      { value: 31, label: "Initial capture rate", display: "31%" },
      { value: 1100, label: "Link clicks · Instagram", display: "1.1K" },
      { value: 100, label: "Change shown by Meta", display: "↑ 100%" },
    ],
    caseImages: [
      {
        id: "hero",
        filename: "meta-ad.png",
        alt: "M TWO Club Mallorca Facebook ad",
        src: "/case-studies/m-two-club-mallorca/meta-ad.png",
        aspect: "auto",
      },
      {
        id: "instagram",
        filename: "instagram-growth.png",
        alt: "M TWO Club Mallorca Instagram growth",
        src: "/case-studies/m-two-club-mallorca/instagram-growth.png",
        aspect: "auto",
      },
    ],
    seo: {
      title: "M‑Two Mallorca — Case study",
      description:
        "Global Solutions case study with M‑Two Mallorca: Meta campaigns, event strategy, collaborations, and digital results.",
      ogTitle: "M‑Two Mallorca",
      ogDescription: "Real stories. Impact you can feel.",
    },
  },
  {
    id: "oceans-mallorca",
    slug: "oceans-mallorca",
    sectorId: "nightlife-clubs",
    name: "Oceans Mallorca",
    location: "Magaluf · Mallorca · 2019",
    locale: "en",
    listed: true,
    summary:
      "Promotion of several dates featuring artists including Javi Bora and Chus & Ceballos for Oceans Night Club Mallorca.",
    services: [
      "Event promotion",
      "Artist campaigns",
      "Javi Bora · Chus & Ceballos",
    ],
    links: {
      website: "https://oceanscalviabeach.com/en/",
    },
    primary: {
      type: "image",
      src: "/case-studies/oceans-mallorca/campaign-2019.png",
      alt: "Original Oceans Night Club Mallorca post for the Chus & Ceballos event on 23 August 2019",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/oceans-mallorca/interior.png",
        alt: "Oceans Beach Club Mallorca interior with violet lighting and the Oceans logo",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Context and challenge",
        body: "Promotion of several dates featuring artists including Javi Bora and Chus & Ceballos for Oceans Night Club Mallorca.",
      },
      {
        id: "work",
        title: "GSW’s work",
        body: "The Chus & Ceballos campaign achieved the strongest response in the collaboration, which also included our attendance at the event.",
      },
    ],
    caseImages: [
      {
        id: "hero",
        filename: "campaign-2019.png",
        alt: "Oceans campaign archive for Chus & Ceballos in 2019",
        src: "/case-studies/oceans-mallorca/campaign-2019.png",
        aspect: "auto",
      },
      {
        id: "interior",
        filename: "interior.png",
        alt: "Oceans Beach Club Mallorca interior",
        src: "/case-studies/oceans-mallorca/interior.png",
        aspect: "auto",
      },
    ],
    seo: {
      title: "Oceans Mallorca — Case study",
      description:
        "Global Solutions case study with Oceans Mallorca: event promotion and artist campaigns in 2019.",
      ogTitle: "Oceans Mallorca",
      ogDescription: "Real stories. Impact you can feel.",
    },
  },
];
