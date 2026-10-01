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
        { label: "Crecimiento y Marketing", href: "/divisions/growth-marketing" },
        { label: "Inteligencia Artificial", href: "/divisions/artificial-intelligence" },
        { label: "Consultoría de Negocio", href: "/divisions/business-consulting" },
        { label: "Expansión Internacional", href: "/divisions/international-expansion" },
        { label: "Inversión y Ventures", href: "/divisions/investment-ventures" },
        { label: "Inmobiliario y Hospitalidad", href: "/divisions/real-estate-hospitality" },
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
        { label: "Aviso legal (Impressum)", href: "/impressum" },
        { label: "Protección de datos (Datenschutz)", href: "/datenschutz" },
        { label: "Política de privacidad", href: "/privacy" },
        { label: "Términos de uso", href: "/terms" },
      ],
    },
  ],
};
