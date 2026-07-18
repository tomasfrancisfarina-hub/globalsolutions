import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const realEstateHospitality: Division = {
  id: "real-estate-hospitality",
  slug: "real-estate-hospitality",
  name: "Real Estate & Hospitality",
  tagline: "Real estate assets and hospitality development",
  description:
    "We advise on the development, acquisition, and management of real estate assets and hospitality projects. We combine market analysis, financial viability, and operational strategy to maximize the value of every asset.",
  vision:
    "Real estate and hospitality assets require long-term vision and precise execution. We provide the strategy and support needed for every project to reach its full potential.",
  capabilities: [
    { id: "real-estate", name: "Real Estate", description: "Strategic real estate consulting and asset development." },
    { id: "hospitality", name: "Hospitality", description: "Hospitality project strategy and management." },
  ],
  order: 6,
  featured: true,
  seo: {
    title: "Real Estate & Hospitality Consulting",
    description:
      "Real estate and hospitality consulting. Asset development, financial viability, operational strategy, and project management for international markets.",
    keywords: [
      "real estate consulting",
      "hospitality consulting",
      "property development advisory",
      "real estate strategy",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("en"),
  locale: "en",
};
