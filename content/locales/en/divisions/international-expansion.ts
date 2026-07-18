import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const internationalExpansion: Division = {
  id: "international-expansion",
  slug: "international-expansion",
  name: "International Expansion",
  tagline: "Global market entry with proven methodology",
  description:
    "We guide companies through international expansion — from target market analysis to operational implementation. We minimize risk and accelerate entry into new territories including the US, Europe, and the UAE.",
  vision:
    "Successful international expansion requires more than ambition — it requires strategy, local knowledge, and flawless execution. We provide all three.",
  capabilities: [
    { id: "expansion-internacional", name: "International Expansion", description: "Planning and execution of international market entry." },
  ],
  order: 4,
  featured: true,
  seo: {
    title: "International Expansion Consulting — Global Market Entry",
    description:
      "International expansion consulting for companies entering US, European, and Middle East markets. Market analysis, entry strategy, and operational implementation.",
    keywords: [
      "international expansion consulting",
      "global market entry",
      "international business consulting",
      "market entry strategy",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("en"),
  locale: "en",
};
