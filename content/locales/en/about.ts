import type { AboutContent } from "@/types";

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "Company",
    headline: "A consulting firm\nfor companies that think big",
    description:
      "Global Solutions is an international consulting firm specialized in business growth. We help executives and leadership teams design and implement sustainable growth strategies.",
  },
  mission: {
    headline: "Our mission",
    description:
      "Help companies grow through strategy, artificial intelligence, automation, and execution. We simplify complex problems to accelerate what truly matters.",
  },
  values: [
    {
      title: "Clarity",
      description: "Complexity lives behind the system. In front of the client, only clarity.",
    },
    {
      title: "Rigor",
      description: "Decisions grounded in analysis, not assumptions.",
    },
    {
      title: "Commitment",
      description: "We support through to results — we don't deliver reports and disappear.",
    },
  ],
  testimonials: [
    {
      id: "testimonial-edgar-l",
      quote:
        "Global Solutions helped us define a stronger brand identity and a clearer growth direction for our hospitality project.",
      author: "Edgar L.",
      role: "Hospitality Entrepreneur",
      company: "Brand development",
      status: "published",
    },
    {
      id: "testimonial-dominic-m",
      quote:
        "Global Solutions' strategic approach elevated our concept, strengthened our market presence, and brought a clear long-term value perspective.",
      author: "Dominic M.",
      role: "Hospitality & Lifestyle Entrepreneur",
      company: "Premium positioning",
      status: "published",
    },
  ],
};
