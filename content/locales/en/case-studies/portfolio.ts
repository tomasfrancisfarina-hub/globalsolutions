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
  {
    id: "womens-hair-salon",
    slug: "womens-hair-salon",
    sectorId: "beauty-personal-care",
    name: "Women’s hair salon",
    location: "Hair salon · Long-term collaboration",
    locale: "en",
    listed: true,
    listingOnly: true,
    summary:
      "From zero to 22,000 followers. End-to-end marketing leadership alongside the owner, from the salon’s early days and over several years, to build the brand and consolidate its position in the city.",
    services: [
      "Marketing leadership",
      "Logo & brand identity",
      "3D salon design",
      "Campaigns & social media",
      "Human resources",
    ],
    story: {
      label: "The collaboration · From the start",
      body: "In a professional chapter before today’s GSW, Tomás Fariña took on the salon’s marketing leadership alongside its owner. The work covered overall strategy, logo and brand identity design, the 3D design of the salon, and support with human resources. Over several years, campaigns and the digital community were managed, growing from zero to 22,000 followers on Facebook and helping position the salon as a reference in its city.",
    },
    mediaLayout: "wide-primary",
    primary: {
      type: "image",
      src: "/case-studies/beauty-personal-care/salon-space.webp",
      alt: "Amen’s washing area: photo retouched for presentation, with an added painting",
      caption: "The space · retouched photo",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/beauty-personal-care/salon-community-22k.webp",
        alt: "Amen Peluquería profile with 22,000 followers; screenshot cleaned up for presentation",
        caption: "Community · 22,000 followers",
        fit: "contain",
      },
      {
        type: "image",
        src: "/case-studies/beauty-personal-care/salon-campaign-2018.webp",
        alt: "Historical balayage campaign from 26 February 2018: 109 reactions, 384 comments, and 12 shares; cleaned-up screenshot",
        caption: "Campaign · February 2018",
        fit: "contain",
      },
    ],
    seo: {
      title: "Women’s hair salon — Case study",
      description:
        "Global Solutions case study in hair: brand, community and campaigns.",
    },
  },
  {
    id: "womens-aesthetics",
    slug: "womens-aesthetics",
    sectorId: "beauty-personal-care",
    name: "Women’s aesthetics",
    location: "Argentina · Beauty aesthetics",
    locale: "en",
    listed: true,
    listingOnly: true,
    summary:
      "Marketing campaigns to give its treatments visibility and spark interest and interaction among potential clients.",
    services: ["Advertising campaigns", "Digital marketing"],
    mediaLayout: "wide-primary",
    primary: {
      type: "image",
      src: "/case-studies/beauty-personal-care/aesthetics-campaign.webp",
      alt: "Historical Amen Estética campaign example with 244 reactions, 92 comments, and 15 shares",
      caption: "Campaign · historical screenshot",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/beauty-personal-care/aesthetics-projection-simulated.webp",
        alt: "+50% projection with simulated data: 60,996 impressions, 926 visits, €45.69 spend, and 600 events; not real results",
        caption: "+50% projection · SIMULATED DATA",
        fit: "contain",
      },
    ],
    metrics: [
      { value: 244, label: "Reactions" },
      { value: 92, label: "Comments" },
      { value: 15, label: "Shares" },
    ],
    metricsPeriod: "Period: Historical post from 19 July · year not stated",
    seo: {
      title: "Women’s aesthetics — Case study",
      description:
        "Global Solutions case study in aesthetics: campaigns and engagement.",
    },
  },
  {
    id: "thomas-inmo",
    slug: "thomas-inmo",
    sectorId: "real-estate-investment",
    name: "Thomas Inmo",
    location: "Mallorca · German market",
    locale: "en",
    listed: true,
    listingOnly: true,
    summary:
      "An integrated strategy to bring Cala Serena to international buyers: segmented campaigns, creatives, a landing page with form, and prospecting in Germany. We also added portal research and off-market outreach to support visits from potential clients.",
    services: [
      "Meta Ads",
      "Targeting and creatives",
      "Landing page and form",
      "Prospecting in Germany",
      "Off-market outreach",
    ],
    links: {
      website: "https://cala-serena.vercel.app/es",
      websiteLabel: "View website",
    },
    story: {
      label: "From visibility to visits",
      body: "After the campaigns, property viewings were arranged and viewing activity continues, according to the follow-up shared by the client.",
    },
    mediaLayout: "wide-primary",
    primary: {
      type: "video",
      src: "/case-studies/real-estate-investment/thomas-inmo-landing.mp4",
      poster: "/case-studies/real-estate-investment/thomas-inmo-01.jpg",
      alt: "Real walkthrough of the Cala Serena landing page",
      caption: "Cala Serena landing page",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/real-estate-investment/thomas-inmo-02.png",
        alt: "Real Meta screenshot: earlier cut of 264 visits, 15,661 impressions and €83.55 spend",
        caption: "Meta Ads · earlier cut",
        fit: "contain",
      },
      {
        type: "slider",
        alt: "Cala Serena creatives for Germany",
        caption: "Campaigns · Germany",
        sliderLabel: "Campaigns / Germany",
        previousLabel: "Previous creative",
        nextLabel: "Next creative",
        slides: [
          {
            kind: "collage",
            sources: [
              {
                src: "/case-studies/real-estate-investment/thomas-inmo-creative-01.png",
                alt: "Cala Serena creative 1",
              },
              {
                src: "/case-studies/real-estate-investment/thomas-inmo-creative-02.png",
                alt: "Cala Serena creative 2",
              },
              {
                src: "/case-studies/real-estate-investment/thomas-inmo-creative-03.png",
                alt: "Cala Serena creative 3",
              },
            ],
          },
          {
            kind: "panel",
            kicker: "IN DEVELOPMENT",
            title: "Poland.\nCosta Blanca.",
            body: "Landing page for Polish buyers.",
          },
          {
            kind: "image",
            src: "/case-studies/real-estate-investment/thomas-inmo-creative-01.png",
            alt: "Cala Serena creative 1",
          },
          {
            kind: "image",
            src: "/case-studies/real-estate-investment/thomas-inmo-creative-02.png",
            alt: "Cala Serena creative 2",
          },
          {
            kind: "image",
            src: "/case-studies/real-estate-investment/thomas-inmo-creative-03.png",
            alt: "Cala Serena creative 3",
          },
        ],
      },
    ],
    metrics: [
      { value: 416, label: "Landing page visits" },
      { value: 19795, display: "19,795", label: "Impressions" },
      { value: 13088, display: "13,088", label: "People reached" },
      { value: 0.25, display: "€0.25", label: "Cost per landing page visit" },
      { value: 105.38, display: "€105.38", label: "Ad spend" },
    ],
    metricsPeriod: "Period: 30-day active window · Thomas Inmo campaign report",
    metricsNote:
      "Landing page visits are not leads or in-person viewings. Final report: 30-day active window. The Meta screenshot shows an earlier cut: 264 visits and €83.55 spend. Poland / Costa Blanca: we are currently developing a landing page for Polish buyers of properties on the Costa Blanca.",
    seo: {
      title: "Thomas Inmo — Case study",
      description:
        "Global Solutions case study with Thomas Inmo: campaigns, landing page and acquisition for Cala Serena.",
    },
  },
  {
    id: "morales-estates",
    slug: "morales-estates",
    sectorId: "real-estate-investment",
    name: "Morales Estates",
    location: "Real estate and investment",
    locale: "en",
    listed: true,
    listingOnly: true,
    summary:
      "From an unfinished WordPress site to a premium real-estate presence. We recovered and completed the project, added a chatbot, built the blog and worked on SEO. We also sourced three properties to expand the client’s portfolio.",
    services: [
      "WordPress development",
      "Chatbot",
      "Blog and SEO",
      "3 properties sourced",
    ],
    links: {
      website: "https://moralesestates.com/",
      websiteLabel: "View website",
    },
    story: {
      label: "Next phase",
      body: "The next phase outlines a system of collaborations and owner acquisition to expand the portfolio and generate new commercial opportunities.",
    },
    mediaLayout: "wide-primary",
    primary: {
      type: "image",
      src: "/case-studies/real-estate-investment/morales-estates-01.png",
      alt: "Morales Estates website and chatbot",
      caption: "Morales Estates website and chatbot",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/real-estate-investment/morales-estates-02.png",
        alt: "Morales Estates property catalogue",
        caption: "Morales Estates property catalogue",
        fit: "contain",
      },
      {
        type: "image",
        src: "/case-studies/real-estate-investment/morales-estates-03.png",
        alt: "Morales Estates blog",
        caption: "Morales Estates blog",
        fit: "contain",
      },
    ],
    seo: {
      title: "Morales Estates — Case study",
      description:
        "Global Solutions case study with Morales Estates: WordPress, chatbot, blog, SEO and property sourcing.",
    },
  },
];
