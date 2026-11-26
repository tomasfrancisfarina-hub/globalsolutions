import type { Division } from "@/types";
import { getDefaultConversion } from "@/content/shared/conversion";

export const realEstateHospitality: Division = {
  id: "real-estate-hospitality",
  slug: "real-estate-hospitality",
  name: "Inmobiliario y Hospitality",
  tagline: "Marketing y asesoría específica para el sector inmobiliario y Hospitality",
  description:
    "Desarrollamos campañas y contenidos para empresas del sector inmobiliario y Hospitality, también dirigidos a públicos inversores.",
  vision:
    "Ayudamos a las empresas del sector, con marketing y asesoría específica, a definir su posicionamiento y comunicar su propuesta a las audiencias que quieren alcanzar.",
  capabilities: [
    {
      id: "real-estate",
      name: "Inmobiliario",
      description:
        "Marketing, comunicación y asesoría específica para empresas del sector inmobiliario.",
    },
    {
      id: "hospitality",
      name: "Hospitality",
      description:
        "Marketing, comunicación y asesoría específica para empresas del sector Hospitality.",
    },
  ],
  order: 6,
  featured: true,
  seo: {
    title: "Inmobiliario y Hospitality — Marketing y asesoría",
    description:
      "Marketing, comunicación y asesoría específica para el sector inmobiliario y Hospitality, también dirigido a públicos inversores.",
    keywords: [
      "marketing inmobiliario",
      "hospitality marketing",
      "campañas inmobiliarias",
      "comunicación hospitality",
    ],
    markets: ["us", "eu", "ae"],
  },
  conversion: getDefaultConversion("es"),
  locale: "es",
};
