import type { Navigation } from "@/types";

export const navigation: Navigation = {
  main: [
    { label: "Divisionen", href: "/divisions" },
    { label: "Methodik", href: "/methodology" },
    { label: "Fallstudien", href: "/case-studies" },
    { label: "Kontakt", href: "/contact" },
  ],
  footer: [
    {
      title: "Divisionen",
      links: [
        { label: "Wachstum & Marketing", href: "/divisions/growth-marketing" },
        { label: "Künstliche Intelligenz", href: "/divisions/artificial-intelligence" },
        { label: "Unternehmensberatung", href: "/divisions/business-consulting" },
        { label: "Internationale Expansion", href: "/divisions/international-expansion" },
        { label: "Investments & Ventures", href: "/divisions/investment-ventures" },
        { label: "Immobilien & Hospitality", href: "/divisions/real-estate-hospitality" },
      ],
    },
    {
      title: "Unternehmen",
      links: [
        { label: "Über uns", href: "/about" },
        { label: "Methodik", href: "/methodology" },
        { label: "Fallstudien", href: "/case-studies" },
        { label: "Kontakt", href: "/contact" },
      ],
    },
    {
      title: "Rechtliches",
      links: [
        { label: "Impressum", href: "/impressum" },
        { label: "Datenschutz", href: "/datenschutz" },
      ],
    },
  ],
};
