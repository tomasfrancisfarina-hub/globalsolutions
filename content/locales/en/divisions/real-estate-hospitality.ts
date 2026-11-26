import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const realEstateHospitality: Division = {
  id: "real-estate-hospitality",
  slug: "real-estate-hospitality",
  name: "Real Estate & Hospitality",
  tagline: "Marketing and specific advisory for the real estate and Hospitality sector",
  description:
    "We develop campaigns and content for companies in the real estate and Hospitality sector, also aimed at investor audiences.",
  vision:
    "We help companies in the sector, through marketing and specific advisory, define their positioning and communicate their proposition to the audiences they want to reach.",
  capabilities: [
    {
      id: "real-estate",
      name: "Real Estate",
      description:
        "Marketing, communication and specific advisory for real estate companies.",
    },
    {
      id: "hospitality",
      name: "Hospitality",
      description:
        "Marketing, communication and specific advisory for Hospitality companies.",
    },
  ],
  order: 6,
  featured: true,
  seo: {
    title: "Real Estate & Hospitality — Marketing and advisory",
    description:
      "Marketing, communication and specific advisory for the real estate and Hospitality sector, also aimed at investor audiences.",
    keywords: [
      "real estate marketing",
      "hospitality marketing",
      "real estate campaigns",
      "hospitality communication",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("en"),
  locale: "en",
};
