import type { CaseStudy } from "@/types";

export const edgarL: CaseStudy = {
  id: "edgar-l",
  slug: "edgar-l",
  client: "Edgar L.",
  industry: "Hospitality / Brand Development",
  divisionId: "real-estate-hospitality",
  challenge:
    "A hospitality project needed a stronger brand identity and a clearer growth direction in a competitive market.",
  approach:
    "Strategic positioning and digital transformation for a hospitality project, creating a stronger brand identity and a clearer growth direction.",
  results: [
    { value: "Brand Growth", label: "Hospitality Entrepreneur" },
    { value: "Identity", label: "Stronger, differentiated brand" },
    { value: "Direction", label: "Defined growth strategy" },
  ],
  featured: true,
  locale: "en",
  status: "published",
  seo: {
    title: "Case Study — Edgar L. · Hospitality",
    description:
      "Strategic positioning and digital transformation for a hospitality project.",
  },
};

export const dominicM: CaseStudy = {
  id: "dominic-m",
  slug: "dominic-m",
  client: "Dominic M.",
  industry: "Hospitality / Lifestyle",
  divisionId: "real-estate-hospitality",
  challenge:
    "A hospitality and lifestyle concept needed to elevate its proposition, strengthen market presence, and build long-term value.",
  approach:
    "Strategic consulting and brand development focused on elevating the concept, strengthening its market presence and building long-term value.",
  results: [
    { value: "Premium Positioning", label: "Hospitality & Lifestyle Entrepreneur" },
    { value: "Concept", label: "Elevated proposition with greater clarity" },
    { value: "Value", label: "Strengthened market presence" },
  ],
  featured: true,
  locale: "en",
  status: "published",
  seo: {
    title: "Case Study — Dominic M. · Hospitality & Lifestyle",
    description:
      "Strategic consulting and brand development for premium hospitality positioning.",
  },
};

export const franciscoSanchez: CaseStudy = {
  id: "francisco-sanchez",
  slug: "francisco-sanchez",
  client: "Francisco Sánchez",
  industry: "International / Expansion",
  divisionId: "international-expansion",
  challenge:
    "An international expansion project needed to prepare entry into new markets with solid foundations and clear positioning.",
  approach:
    "Growth strategy and execution support designed to prepare international expansion, improve positioning and create scalable business foundations.",
  results: [
    { value: "New Markets", label: "Founder / International Expansion Project" },
    { value: "Positioning", label: "Clearer focus in target markets" },
    { value: "Scale", label: "Scalable business foundations" },
  ],
  featured: true,
  locale: "en",
  status: "published",
  seo: {
    title: "Case Study — Francisco Sánchez · International Expansion",
    description:
      "Growth strategy and execution support to prepare international expansion.",
  },
};
