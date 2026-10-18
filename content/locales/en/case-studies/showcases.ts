import type { SectorShowcase } from "@/types";

const assets = "/case-studies/beauty-personal-care";

export const sectorShowcasesEn: SectorShowcase[] = [
  {
    sectorId: "beauty-personal-care",
    locale: "en",
    eyebrow: "GSW / Beauty & personal care",
    heroLines: ["Beauty", "with presence."],
    intro:
      "Hair and aesthetics. Two independent case studies in brand strategy, community growth, and marketing campaigns.",
    projectsLabel: "Case studies · Hair and aesthetics",
    cases: [
      {
        id: "womens-hair-salon",
        name: "Women’s hair salon",
        location: "Hair salon · Long-term collaboration",
        description:
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
        layout: "triptych",
        images: [
          {
            src: `${assets}/salon-space.webp`,
            width: 1534,
            height: 1025,
            alt: "Amen’s washing area: photo retouched for presentation, with an added painting",
            caption: "The space · retouched photo",
          },
          {
            src: `${assets}/salon-community-22k.webp`,
            width: 1681,
            height: 935,
            alt: "Amen Peluquería profile with 22,000 followers; screenshot cleaned up for presentation",
            caption: "Community · 22,000 followers",
          },
          {
            src: `${assets}/salon-campaign-2018.webp`,
            width: 1774,
            height: 887,
            alt: "Historical balayage campaign from 26 February 2018: 109 reactions, 384 comments, and 12 shares; cleaned-up screenshot",
            caption: "Campaign · February 2018",
          },
        ],
      },
      {
        id: "womens-aesthetics",
        name: "Women’s aesthetics",
        location: "Argentina · Beauty aesthetics",
        description:
          "Marketing campaigns to give its treatments visibility and spark interest and interaction among potential clients.",
        services: ["Advertising campaigns", "Digital marketing"],
        layout: "diptych",
        images: [
          {
            src: `${assets}/aesthetics-campaign.webp`,
            width: 808,
            height: 400,
            alt: "Historical Amen Estética campaign example with 244 reactions, 92 comments, and 15 shares",
            caption: "Campaign · historical screenshot",
          },
          {
            src: `${assets}/aesthetics-projection-simulated.webp`,
            width: 1334,
            height: 1179,
            alt: "+50% projection with simulated data: 60,996 impressions, 926 visits, €45.69 spend, and 600 events; not real results",
            caption: "+50% projection · SIMULATED DATA",
          },
        ],
        metrics: [
          { value: 244, label: "Reactions" },
          { value: 92, label: "Comments" },
          { value: 15, label: "Shares" },
        ],
        metricsPeriod: "Period: Historical post from 19 July · year not stated",
      },
    ],
    closing: {
      ctaLabel: "Free analysis and diagnosis",
      title: "Do you want to be the next success story?",
      intro:
        "Book a free 30-minute call with me to analyse your business, diagnose where you stand today, and define the next steps.",
      portrait: {
        src: `${assets}/tomas-farina.webp`,
        alt: "Tomás Fariña, CEO and Marketing Director of Global Solutions Worldwide",
      },
      name: "Tomás Fariña",
      role: "Global Solutions Worldwide · CEO & Marketing Director",
      calendarTitle: "Book a 30-minute call with Tomás Fariña",
      calendarFallback: "Open calendar on Cal.com",
    },
    labels: {
      enlarge: "Enlarge image",
      close: "Close image",
    },
  },
];
