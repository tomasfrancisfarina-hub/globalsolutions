import type { AboutContent } from "@/types";

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: "Empresa",
    headline: "Una firma de consultoría\npara empresas que piensan en grande",
    description:
      "Global Solutions es una firma internacional de consultoría especializada en crecimiento empresarial. Ayudamos a directivos y equipos de dirección a diseñar e implementar estrategias de crecimiento sostenible.",
  },
  mission: {
    headline: "Nuestra misión",
    description:
      "Ayudar a las empresas a crecer mediante estrategia, inteligencia artificial, automatización y ejecución. Simplificamos problemas complejos para acelerar lo que realmente importa.",
  },
  values: [
    {
      title: "Claridad",
      description: "La complejidad vive detrás del sistema. Delante del cliente, solo claridad.",
    },
    {
      title: "Rigor",
      description: "Decisiones basadas en análisis, no en suposiciones.",
    },
    {
      title: "Compromiso",
      description: "Acompañamos hasta el resultado, no entregamos informes y desaparecemos.",
    },
  ],
  testimonials: [
    {
      id: "testimonial-edgar-l",
      quote:
        "Global Solutions nos ayudó a definir una identidad de marca más sólida y una dirección de crecimiento más clara para nuestro proyecto de hospitalidad.",
      author: "Edgar L.",
      role: "Emprendedor en hospitalidad",
      company: "Desarrollo de marca",
      status: "published",
    },
    {
      id: "testimonial-dominic-m",
      quote:
        "El enfoque estratégico de Global Solutions elevó nuestro concepto, fortaleció nuestra presencia en el mercado y aportó una visión clara de valor a largo plazo.",
      author: "Dominic M.",
      role: "Emprendedor en hospitalidad y lifestyle",
      company: "Posicionamiento premium",
      status: "published",
    },
  ],
};
