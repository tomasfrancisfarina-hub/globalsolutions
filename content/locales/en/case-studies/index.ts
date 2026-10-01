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

export const moralesEstates: CaseStudy = {
  id: "morales-estates",
  slug: "morales-estates",
  client: "Morales Estates",
  industry: "Real Estate / Positioning",
  divisionId: "real-estate-hospitality",
  challenge:
    "A new real estate proposition needed to build a solid, professional digital presence capable of positioning itself in the premium segment and generating trust among both property owners and international buyers.",
  approach:
    "We developed a web platform focused on positioning, presenting high-value properties, and capturing new real estate opportunities. The strategy connected web development, premium branding, and a commercial focus to turn digital presence into a real growth tool.",
  results: [
    {
      value: "High-value property acquisition",
      label: "Incorporation of properties valued at several million euros",
    },
    {
      value: "Positioning",
      label: "Digital presence aligned with the premium real estate market",
    },
    {
      value: "Web development",
      label: "Platform ready to present assets and generate new opportunities",
    },
  ],
  teaser: {
    value: "High-value properties",
    label:
      "Web development and positioning to capture properties worth several million euros",
  },
  featured: true,
  locale: "en",
  status: "published",
  seo: {
    title: "Case Study — Morales Estates · Real Estate and Positioning",
    description:
      "Web development and positioning strategy focused on capturing and presenting real estate properties worth several million euros.",
    ogTitle: "Morales Estates — Real Estate and Positioning",
    ogDescription:
      "A premium digital presence designed to capture high-value properties and generate new real estate opportunities.",
  },
};
