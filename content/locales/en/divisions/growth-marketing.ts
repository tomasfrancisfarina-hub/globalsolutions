import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const growthMarketing: Division = {
  id: "growth-marketing",
  slug: "growth-marketing",
  name: "Growth & Marketing",
  tagline: "Accelerated growth strategies and market presence",
  description:
    "We design and implement growth strategies that connect business vision with measurable results. From positioning to multichannel execution, we help companies expand their presence and capture new markets across the US, Europe, and the Middle East.",
  vision:
    "We believe marketing is not a cost — it is a strategic investment in growth. Our approach combines market analysis, creativity, and precise execution to generate real impact.",
  capabilities: [
    { id: "marketing-digital", name: "Digital Marketing", description: "Integrated online marketing strategies focused on growth." },
    { id: "google-ads", name: "Google Ads", description: "Google advertising campaigns optimized for conversion and ROI." },
    { id: "meta-ads", name: "Meta Ads", description: "Facebook and Instagram advertising with advanced targeting." },
    { id: "seo", name: "SEO", description: "Sustainable organic search positioning." },
    { id: "branding", name: "Branding", description: "Purpose-driven brand building and evolution." },
  ],
  order: 1,
  featured: true,
  seo: {
    title: "Growth & Marketing — Business Growth Consulting",
    description:
      "Growth marketing consulting for companies seeking to accelerate expansion. Google Ads, SEO, Meta Ads, branding, and strategic digital marketing for US, European, and UAE markets.",
    keywords: [
      "growth marketing consulting",
      "business growth strategy",
      "digital marketing consulting",
      "google ads management",
      "international marketing",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("en"),
  locale: "en",
};
