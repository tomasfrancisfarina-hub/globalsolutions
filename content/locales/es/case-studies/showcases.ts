import type { SectorShowcase } from "@/types";

const assets = "/case-studies/beauty-personal-care";

export const sectorShowcasesEs: SectorShowcase[] = [
  {
    sectorId: "beauty-personal-care",
    locale: "es",
    eyebrow: "GSW / Belleza y cuidado personal",
    heroLines: ["Belleza", "con presencia."],
    intro:
      "Peluquería y estética. Dos casos independientes de estrategia de marca, crecimiento de comunidad y campañas de marketing.",
    projectsLabel: "Casos de éxito · Peluquería y estética",
    cases: [
      {
        id: "womens-hair-salon",
        name: "Peluquería femenina",
        location: "Peluquería · Colaboración histórica",
        description:
          "De cero a 22.000 seguidores. Dirección integral de marketing junto a su propietaria, desde los inicios del salón y durante varios años, para construir su marca y consolidar su posicionamiento en la ciudad.",
        services: [
          "Dirección de marketing",
          "Logo e identidad de marca",
          "Diseño 3D del local",
          "Campañas y redes sociales",
          "Recursos humanos",
        ],
        story: {
          label: "La colaboración · Desde los inicios",
          body: "En una etapa profesional anterior a la actual GSW, Tomás Fariña asumió la dirección de marketing del salón junto a su propietaria. El trabajo abarcó la estrategia integral, el diseño del logo y la identidad de marca, el diseño 3D del local y el apoyo en recursos humanos. Durante varios años se gestionaron campañas y la comunidad digital, que pasó de cero a 22.000 seguidores en Facebook, contribuyendo a posicionar el salón como un referente en su ciudad.",
        },
        layout: "triptych",
        images: [
          {
            src: `${assets}/salon-space.webp`,
            width: 1534,
            height: 1025,
            alt: "Zona de lavado de Amen: fotografía retocada para presentación, con cuadro añadido",
            caption: "El espacio · fotografía retocada",
          },
          {
            src: `${assets}/salon-community-22k.webp`,
            width: 1681,
            height: 935,
            alt: "Perfil de Amen Peluquería con 22 mil seguidores; captura limpiada para presentación",
            caption: "Comunidad · 22.000 seguidores",
          },
          {
            src: `${assets}/salon-campaign-2018.webp`,
            width: 1774,
            height: 887,
            alt: "Campaña histórica de balayage del 26 de febrero de 2018: 109 reacciones, 384 comentarios y 12 compartidos; captura limpiada",
            caption: "Campaña · febrero de 2018",
          },
        ],
      },
      {
        id: "womens-aesthetics",
        name: "Estética femenina",
        location: "Argentina · Estética de belleza",
        description:
          "Campañas de marketing para dar visibilidad a sus tratamientos y generar interés e interacción con potenciales clientas.",
        services: ["Campañas publicitarias", "Marketing digital"],
        layout: "diptych",
        images: [
          {
            src: `${assets}/aesthetics-campaign.webp`,
            width: 808,
            height: 400,
            alt: "Ejemplo histórico de campaña de Amen Estética con 244 reacciones, 92 comentarios y 15 compartidos",
            caption: "Campaña · captura histórica",
          },
          {
            src: `${assets}/aesthetics-projection-simulated.webp`,
            width: 1334,
            height: 1179,
            alt: "Proyección +50% con datos simulados: 60.996 impresiones, 926 visitas, 45,69 euros de inversión y 600 eventos; no son resultados reales",
            caption: "Proyección +50% · DATOS SIMULADOS",
          },
        ],
        metrics: [
          { value: 244, label: "Reacciones" },
          { value: 92, label: "Comentarios" },
          { value: 15, label: "Compartidos" },
        ],
        metricsPeriod: "Periodo: Publicación histórica del 19 de julio · año no indicado",
      },
    ],
    closing: {
      ctaLabel: "Análisis y diagnóstico gratuito",
      title: "¿Quieres ser tú el próximo caso de éxito?",
      intro:
        "Reserva una llamada gratuita de 30 minutos conmigo para analizar tu negocio, diagnosticar tu situación actual y definir los próximos pasos.",
      portrait: {
        src: `${assets}/tomas-farina.webp`,
        alt: "Tomás Fariña, CEO y Marketing Director de Global Solutions Worldwide",
      },
      name: "Tomás Fariña",
      role: "Global Solutions Worldwide · CEO & Marketing Director",
      calendarTitle: "Agendar una llamada de 30 minutos con Tomás Fariña",
      calendarFallback: "Abrir calendario en Cal.com",
    },
    labels: {
      enlarge: "Ampliar imagen",
      close: "Cerrar imagen",
    },
  },
];
