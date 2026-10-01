import type { Navigation } from "@/types";

export const navigation: Navigation = {
  main: [
    { label: "Divisions", href: "/divisions" },
    { label: "Methodology", href: "/methodology" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  footer: [
    {
      title: "Divisions",
      links: [
        { label: "Growth & Marketing", href: "/divisions/growth-marketing" },
        { label: "Artificial Intelligence", href: "/divisions/artificial-intelligence" },
        { label: "Business Consulting", href: "/divisions/business-consulting" },
        { label: "International Expansion", href: "/divisions/international-expansion" },
        { label: "Investment & Ventures", href: "/divisions/investment-ventures" },
        { label: "Real Estate & Hospitality", href: "/divisions/real-estate-hospitality" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Methodology", href: "/methodology" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Legal notice (Impressum)", href: "/impressum" },
        { label: "Data protection (Datenschutz)", href: "/datenschutz" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
      ],
    },
  ],
};
