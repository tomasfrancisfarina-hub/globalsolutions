import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const investmentVentures: Division = {
  id: "investment-ventures",
  slug: "investment-ventures",
  name: "Investment & Ventures",
  tagline: "Capital raising and startup growth support",
  description:
    "We connect growing companies with capital and strategic investors. From preparing startups for funding rounds to structuring capital operations, we facilitate access to the investment needed for the next phase of growth.",
  vision:
    "Capital is a growth accelerator, not a goal. We help companies prepare, connect, and close the transactions that drive their next phase.",
  capabilities: [
    { id: "apoyo-startups", name: "Startup Support", description: "Comprehensive support for growth-stage startups." },
    { id: "captacion-inversores", name: "Investor Relations", description: "Preparation and management of capital raising processes." },
  ],
  order: 5,
  featured: true,
  seo: {
    title: "Investment & Ventures — Capital Raising & Startup Consulting",
    description:
      "Investment consulting for capital raising, startup support, and venture operations. We prepare companies for funding rounds and strategic investment.",
    keywords: [
      "investment consulting",
      "startup consulting",
      "capital raising",
      "venture capital advisory",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("en"),
  locale: "en",
};
