import type { Navigation } from "@/types";

export const navigation: Navigation = {
  main: [
    { label: "Divisiones", href: "/divisions" },
    { label: "Metodología", href: "/methodology" },
    { label: "Casos de éxito", href: "/case-studies" },
    { label: "Contacto", href: "/contact" },
  ],
  footer: [
    {
      title: "Divisiones",
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
      title: "Empresa",
      links: [
        { label: "Sobre nosotros", href: "/about" },
        { label: "Metodología", href: "/methodology" },
        { label: "Casos de éxito", href: "/case-studies" },
        { label: "Contacto", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Política de privacidad", href: "/privacy" },
        { label: "Términos de uso", href: "/terms" },
      ],
    },
  ],
};
