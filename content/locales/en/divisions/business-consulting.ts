import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const businessConsulting: Division = {
  id: "business-consulting",
  slug: "business-consulting",
  name: "Business Consulting",
  tagline: "Strategic consulting for growing companies",
  description:
    "We support executives and leadership teams in strategic decision-making, process optimization, and new business development. Our approach combines rigorous analysis with practical execution.",
  vision:
    "Companies that grow sustainably do so with clear strategy and disciplined execution. We help build both.",
  capabilities: [
    { id: "consultoria-empresarial", name: "Business Consulting", description: "Strategic advisory for executives and leadership teams." },
    { id: "estrategia-comercial", name: "Commercial Strategy", description: "Design and implementation of sales strategies." },
    { id: "optimizacion-procesos", name: "Process Optimization", description: "Operational improvement and business efficiency." },
    { id: "desarrollo-negocio", name: "Business Development", description: "Identification and development of new business opportunities." },
  ],
  order: 3,
  featured: true,
  seo: {
    title: "Business Consulting — Strategy & Business Development",
    description:
      "Business consulting for growth-stage companies. Commercial strategy, process optimization, business development, and executive advisory across international markets.",
    keywords: [
      "business consulting",
      "management consulting",
      "business development consulting",
      "strategic advisory",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("en"),
  locale: "en",
};
