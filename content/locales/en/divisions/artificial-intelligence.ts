import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const artificialIntelligence: Division = {
  id: "artificial-intelligence",
  slug: "artificial-intelligence",
  name: "Artificial Intelligence",
  tagline: "AI applied to business decisions",
  description:
    "We integrate artificial intelligence into business processes to optimize decisions, automate operations, and uncover growth opportunities. We don't sell technology — we apply AI where it generates real value.",
  vision:
    "Artificial intelligence is a growth tool, not an end in itself. We implement it with strategic judgment, prioritizing business impact over innovation for its own sake.",
  capabilities: [
    { id: "inteligencia-artificial", name: "Artificial Intelligence", description: "AI implementation for process optimization and decision-making." },
    { id: "automatizaciones", name: "Automation", description: "Business process automation for operational efficiency." },
    { id: "diseno-web", name: "Web Design", description: "Premium digital experiences focused on conversion." },
  ],
  order: 2,
  featured: true,
  seo: {
    title: "AI Consulting for Business — Enterprise Artificial Intelligence",
    description:
      "AI consulting for enterprises. Business automation, applied artificial intelligence, and digital transformation with a strategic focus for US, European, and Middle East markets.",
    keywords: [
      "AI consulting",
      "artificial intelligence for business",
      "enterprise AI",
      "business automation consulting",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("en"),
  locale: "en",
};
