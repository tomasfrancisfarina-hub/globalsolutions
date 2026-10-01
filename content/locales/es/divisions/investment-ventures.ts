import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const investmentVentures: Division = {
  id: "investment-ventures",
  slug: "investment-ventures",
  name: "Inversión y Ventures",
  tagline: "Captación de inversión y apoyo a startups en crecimiento",
  description:
    "Conectamos empresas en crecimiento con capital e inversores estratégicos. Desde la preparación de startups para rondas de inversión hasta la estructuración de operaciones de capital, facilitamos el acceso a financiación.",
  vision:
    "El capital es un acelerador de crecimiento, no un objetivo. Ayudamos a las empresas a prepararse, conectar y cerrar las operaciones que impulsan su siguiente fase.",
  capabilities: [
    { id: "apoyo-startups", name: "Apoyo a Startups", description: "Acompañamiento integral a startups en fase de crecimiento." },
    { id: "captacion-inversores", name: "Captación de Inversores", description: "Preparación y gestión de procesos de captación de capital." },
  ],
  order: 5,
  featured: true,
  seo: {
    title: "Investment & Ventures — Captación de Inversión y Startups",
    description:
      "Consultoría para captación de inversión, apoyo a startups y operaciones de capital. Preparamos empresas para rondas de financiación e inversión estratégica.",
    keywords: ["captación inversión", "consultoría startups", "rondas inversión", "venture capital consultoría"],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("es"),
  locale: "es",
};
