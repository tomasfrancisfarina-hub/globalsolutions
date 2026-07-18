import type { HomeContent } from "@/types";

export const homeContent: HomeContent = {
  hero: {
    eyebrow: "Business growth consulting",
    headline: "We help companies\ngrow with clarity",
    subheadline:
      "We combine strategy, artificial intelligence, automation, and execution to drive sustainable growth for ambitious companies worldwide.",
    cta: {
      primary: { label: "Start a conversation", href: "/contact" },
      secondary: { label: "Explore divisions", href: "/divisions" },
    },
  },
  vision: {
    eyebrow: "Our vision",
    headline: "We simplify complexity\nto accelerate what matters",
    description:
      "We believe sustainable business growth comes from strategic clarity, disciplined execution, and applied intelligence.",
    pillars: [
      {
        title: "Strategy",
        description: "We define direction through rigorous analysis and long-term vision.",
      },
      {
        title: "Execution",
        description: "We turn strategy into results with clear, measurable processes.",
      },
      {
        title: "Intelligence",
        description: "We apply AI and automation where they create real business value.",
      },
    ],
  },
  divisions: {
    eyebrow: "Divisions",
    headline: "Six areas of expertise.\nOne ambition: growth.",
    description:
      "Each division brings specialized perspective within a unified vision of business growth.",
  },
  growth: {
    eyebrow: "How we work",
    headline: "A clear process\nfor concrete results",
    steps: [
      {
        number: "01",
        title: "Diagnosis",
        description: "We analyze the current situation, market, and growth opportunities.",
      },
      {
        number: "02",
        title: "Strategy",
        description: "We design a clear plan with measurable objectives and defined priorities.",
      },
      {
        number: "03",
        title: "Execution",
        description: "We implement with rigor, supporting teams at every stage.",
      },
      {
        number: "04",
        title: "Scale",
        description: "We optimize, measure, and scale what works.",
      },
    ],
  },
  proof: {
    eyebrow: "Results",
    headline: "Measurable impact",
    metrics: [
      { value: "Brand", label: "Strategic positioning" },
      { value: "Markets", label: "International expansion" },
      { value: "Growth", label: "Execution with clarity" },
    ],
    status: "published" as const,
  },
  methodology: {
    eyebrow: "Methodology",
    headline: "A proven framework\nfor growth",
    description:
      "Our methodology combines analytical rigor with execution agility, adapting to each company's reality.",
    steps: [
      { number: "01", title: "Analysis", description: "Deep diagnosis of the current situation." },
      { number: "02", title: "Design", description: "Custom strategy with clear objectives." },
      { number: "03", title: "Implementation", description: "Supported execution with tracking metrics." },
      { number: "04", title: "Optimization", description: "Continuous improvement based on data." },
      { number: "05", title: "Scale", description: "Expansion of what works." },
    ],
  },
  cta: {
    headline: "Let's talk about\ngrowing your business.",
    description: "Schedule a strategic conversation with no obligation.",
    button: { label: "Schedule a conversation", href: "/contact" },
  },
};
