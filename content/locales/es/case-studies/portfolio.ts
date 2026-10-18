import type { PortfolioProject } from "@/types";

export const portfolioProjectsEs: PortfolioProject[] = [
  {
    id: "nanai-hamburg",
    slug: "nanai-hamburg",
    sectorId: "food-beverage",
    name: "Nanai Hamburg",
    location: "Hamburgo, Alemania",
    locale: "es",
    listed: true,
    summary:
      "Presencia digital y de marca alineada con la propuesta gastronómica de Nanai en Hamburgo, con foco en claridad y crecimiento online.",
    services: ["Posicionamiento", "Desarrollo web", "Marketing digital"],
    links: {
      website: "https://nanai-hamburg.de",
      instagram: "https://www.instagram.com/restaurant_nanai_hamburg/",
    },
    primary: {
      type: "video",
      src: "/case-studies/nanai-hamburg/web-before-after.mp4",
      alt: "Nanai Hamburg — comparativa web antes y después",
    },
    supports: [
      {
        type: "video",
        src: "/case-studies/nanai-hamburg/support-right.mp4",
        alt: "Nanai Hamburg — pieza visual del proyecto",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Contexto y reto",
        body: "Nanai necesitaba una presencia digital y de marca alineada con su propuesta gastronómica en Hamburgo.",
      },
      {
        id: "work",
        title: "Trabajo de GSW",
        body: "Acompañamos el crecimiento digital y la presencia online del restaurante con foco en claridad de marca, web e Instagram.",
      },
      {
        id: "results",
        title: "Resultados medidos",
        body: "Crecimiento de seguidores en Instagram: de 647 a 1.160 (+513, +79,3%). Las cifras corresponden al comparativo documentado del perfil @restaurant_nanai_hamburg.",
      },
      {
        id: "meaning",
        title: "Qué significan",
        body: "El perfil pasó de una base reducida a una audiencia claramente mayor, con crecimiento medible en seguidores.",
      },
      {
        id: "next",
        title: "Lo que importa",
        body: "Nos alegra mucho haber logrado el objetivo más relevante: aumentar las ventas y la facturación. El marketing a veces puede parecer ruidoso, pero cuando ese es el resultado, podemos seguir escalando, expandiendo y reinvirtiendo en mejorar todo.",
      },
    ],
    metricsPeriod: "Instagram · @restaurant_nanai_hamburg",
    metrics: [
      { value: 647, label: "Seguidores antes", display: "647" },
      { value: 1160, label: "Seguidores ahora", display: "1.160" },
      { value: 513, label: "Nuevos seguidores", display: "+513" },
      { value: 79.3, label: "Crecimiento", display: "+79,3%" },
    ],
    caseImages: [
      {
        id: "hero",
        filename: "web-before-after.mp4",
        alt: "Nanai Hamburg — comparativa web",
        src: "/case-studies/nanai-hamburg/web-before-after.mp4",
        aspect: "16/9",
      },
      {
        id: "support-2",
        filename: "support-right.mp4",
        alt: "Nanai Hamburg — pieza visual",
        src: "/case-studies/nanai-hamburg/support-right.mp4",
        aspect: "16/9",
      },
    ],
    seo: {
      title: "Nanai Hamburg — Caso de éxito",
      description:
        "Caso de éxito de Global Solutions con Nanai Hamburg: web, Instagram y crecimiento digital.",
      ogTitle: "Nanai Hamburg",
      ogDescription: "Historias reales. Impacto que se siente.",
    },
  },
  {
    id: "santa-ruta",
    slug: "santa-ruta",
    sectorId: "food-beverage",
    name: "Santa Ruta",
    location: "Santa Ponça, Mallorca",
    locale: "es",
    listed: true,
    summary:
      "Una base visual sólida para una empresa familiar con intención de crecer: campañas, identidad y resultados en Instagram.",
    services: ["Identidad visual", "Contenido", "Marketing digital"],
    mediaLayout: "wide-primary",
    links: {
      instagram: "https://www.instagram.com/santaruta.santaponsa/",
    },
    primary: {
      type: "image",
      src: "/case-studies/santa-ruta/instagram-before-after.jpg",
      alt: "Santa Ruta — Instagram antes y después",
      aspect: "auto",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/santa-ruta/sales-growth.jpg",
        alt: "Santa Ruta — crecimiento de ventas",
        aspect: "auto",
        fit: "contain",
      },
      {
        type: "image",
        src: "/case-studies/santa-ruta/campaign-report.jpg",
        alt: "Santa Ruta — reporte parcial de campaña Meta Ads",
        aspect: "auto",
        fit: "contain",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Contexto y reto",
        body: "Una base visual sólida para una empresa familiar con intención de crecer. Santa Ruta nos contrató para gestionar sus campañas.",
      },
      {
        id: "work",
        title: "Trabajo de GSW",
        body: "Desde Global Solutions vimos que también convenía reforzar la presentación de la marca y aportamos mejoras estéticas más allá del alcance inicial: una imagen coherente que acompañara la comunicación y las campañas.",
      },
      {
        id: "results",
        title: "Resultados medidos",
        body: "Meta Business Suite, 1 may – 20 sep 2026 (Instagram): 85,2 mil visualizaciones, 18,8 mil de alcance, 2,3 mil visitas, 1,1 mil clics en el enlace, 515 interacciones (+730,6%) y 187 seguidores.",
      },
      {
        id: "meaning",
        title: "Qué significan",
        body: "Las campañas llevaron visibilidad, tráfico y conversación al perfil. El crecimiento de ventas frente al año anterior se confirmará a cierre de ejercicio.",
      },
      {
        id: "next",
        title: "Próximo paso",
        body: "Se ha planteado una página web para reforzar su presencia digital y apoyar su futura expansión.",
      },
    ],
    metricsPeriod: "Meta Business Suite · 1 may – 20 sep 2026 · Instagram",
    metrics: [
      { value: 85200, label: "Visualizaciones", display: "85,2 mil" },
      { value: 18800, label: "Alcance", display: "18,8 mil" },
      { value: 2300, label: "Visitas", display: "2,3 mil" },
      { value: 1100, label: "Clics en el enlace", display: "1,1 mil" },
      { value: 515, label: "Interacciones · +730,6%", display: "515" },
      { value: 187, label: "Seguidores", display: "187" },
    ],
    caseImages: [
      {
        id: "meta",
        filename: "meta-business-suite.jpg",
        alt: "Santa Ruta — Meta Business Suite, resultados Instagram",
        src: "/case-studies/santa-ruta/meta-business-suite.jpg",
        aspect: "auto",
      },
      {
        id: "instagram",
        filename: "instagram-before-after.jpg",
        alt: "Santa Ruta — Instagram antes y después",
        src: "/case-studies/santa-ruta/instagram-before-after.jpg",
        aspect: "auto",
      },
      {
        id: "sales",
        filename: "sales-growth.jpg",
        alt: "Santa Ruta — crecimiento de ventas",
        src: "/case-studies/santa-ruta/sales-growth.jpg",
        aspect: "auto",
      },
      {
        id: "campaign",
        filename: "campaign-report.jpg",
        alt: "Santa Ruta — reporte parcial de campaña Meta Ads",
        src: "/case-studies/santa-ruta/campaign-report.jpg",
        aspect: "auto",
      },
    ],
    seo: {
      title: "Santa Ruta — Caso de éxito",
      description:
        "Caso de éxito de Global Solutions con Santa Ruta: identidad visual, contenido, Instagram y resultados en Santa Ponça.",
      ogTitle: "Santa Ruta",
      ogDescription: "Historias reales. Impacto que se siente.",
    },
  },
  {
    id: "merchants",
    slug: "merchants",
    sectorId: "food-beverage",
    name: "Merchants",
    location: "Palma, Mallorca · Colaboración en 2020",
    locale: "es",
    listed: true,
    summary:
      "Campañas y segmentación en los primeros pasos de Merchants. Una colaboración que sumó especialización digital a la visión y experiencia de su propietario y equipo.",
    services: [
      "Campañas publicitarias",
      "Segmentación de audiencias",
      "Ideas de contenido y estrategia",
    ],
    mediaLayout: "wide-primary",
    links: {
      website: "https://merchantspalma.com/",
    },
    primary: {
      type: "image",
      src: "/case-studies/merchants/garden.webp",
      alt: "Merchants — jardín, fotografía actual",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/merchants/facebook.png",
        alt: "Merchants — captura histórica de Facebook",
      },
      {
        type: "image",
        src: "/case-studies/merchants/terrace.webp",
        alt: "Merchants — terraza, fotografía actual",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Contexto y reto",
        body: "Campañas y segmentación en los primeros pasos de Merchants. Una colaboración que sumó especialización digital a la visión y experiencia de su propietario y equipo.",
      },
      {
        id: "work",
        title: "Trabajo de GSW",
        body: "Tras trabajar campañas con el propietario para otra firma, acompañamos el arranque de su nuevo restaurante en 2020, durante los inicios de Global Solutions. El aporte se centró en campañas y segmentación, con propuestas de contenido y estrategia general.",
      },
      {
        id: "meaning",
        title: "Sinergia y conexión",
        body: "El propietario aportaba una amplia experiencia y, según la trayectoria compartida, posteriormente amplió su actividad hasta cuatro restaurantes de distintas marcas. Esa expansión forma parte de su recorrido empresarial; este caso recoge nuestra contribución concreta al proyecto.",
      },
    ],
    caseImages: [
      {
        id: "garden",
        filename: "garden.webp",
        alt: "Merchants — jardín",
        src: "/case-studies/merchants/garden.webp",
        aspect: "auto",
      },
      {
        id: "facebook",
        filename: "facebook.png",
        alt: "Merchants — Facebook histórico",
        src: "/case-studies/merchants/facebook.png",
        aspect: "auto",
      },
      {
        id: "terrace",
        filename: "terrace.webp",
        alt: "Merchants — terraza",
        src: "/case-studies/merchants/terrace.webp",
        aspect: "auto",
      },
    ],
    seo: {
      title: "Merchants — Caso de éxito",
      description:
        "Caso de éxito de Global Solutions con Merchants en Palma: campañas, segmentación y estrategia en el arranque de 2020.",
      ogTitle: "Merchants",
      ogDescription: "Historias reales. Impacto que se siente.",
    },
  },
  {
    id: "beatnik",
    slug: "beatnik",
    sectorId: "food-beverage",
    name: "Beatnik",
    location: "Palma, Mallorca",
    locale: "es",
    listed: true,
    summary: "Palma · Caso completo próximamente.",
    links: {
      website: "https://purogroup.com/es/restaurantes/beatnik-restaurant-bar",
    },
    primary: {
      type: "image",
      alt: "Beatnik",
    },
    supports: [],
    moments: [
      {
        id: "context",
        title: "Contexto",
        body: "Beatnik (Palma). El caso completo se publicará aquí; mientras tanto, la referencia es su web.",
      },
    ],
    seo: {
      title: "Beatnik — Caso de éxito",
      description: "Beatnik, Palma. Caso de Global Solutions, contenido completo próximamente.",
      ogTitle: "Beatnik",
      ogDescription: "Historias reales. Impacto que se siente.",
    },
  },
  {
    id: "polaris",
    slug: "polaris",
    sectorId: "food-beverage",
    name: "Polaris",
    location: "Mallorca",
    locale: "es",
    listed: true,
    summary:
      "Mallorca · Desarrollo web por Global Solutions Worldwide con nuevas tecnologías.",
    services: ["Desarrollo web"],
    links: {
      website: "https://www.polarisworldmallorca.com/",
    },
    primary: {
      type: "image",
      alt: "Polaris",
    },
    supports: [],
    moments: [
      {
        id: "work",
        title: "Trabajo de GSW",
        body: "Desarrollo web por Global Solutions Worldwide con nuevas tecnologías. El caso visual completo se ampliará aquí.",
      },
    ],
    seo: {
      title: "Polaris — Caso de éxito",
      description:
        "Polaris Mallorca: desarrollo web de Global Solutions Worldwide con nuevas tecnologías.",
      ogTitle: "Polaris",
      ogDescription: "Historias reales. Impacto que se siente.",
    },
  },
  {
    id: "m-two-club-mallorca",
    slug: "m-two-club-mallorca",
    sectorId: "nightlife-clubs",
    name: "M‑Two Mallorca",
    location: "Mallorca · Nightclub",
    locale: "es",
    listed: true,
    summary:
      "En 2024, combinamos campañas digitales con eventos y colaboraciones con marcas de eventos para reforzar la identidad del club y conectar con el público local e internacional.",
    services: [
      "Campañas en Meta",
      "Estrategia de eventos",
      "Colaboraciones locales",
    ],
    links: {
      website: "https://m-two.club/",
    },
    primary: {
      type: "image",
      src: "/case-studies/m-two-club-mallorca/meta-ad.png",
      alt: "Anuncio de M TWO Club Mallorca en Facebook con llamada a reservar",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/m-two-club-mallorca/instagram-growth.png",
        alt: "Evolución de Instagram de M TWO Club Mallorca",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Contexto y reto",
        body: "En 2024, combinamos campañas digitales con eventos y colaboraciones con marcas de eventos. Party Animals, Dirty Party y Palma Events formaron parte de una estrategia para reforzar la identidad del club y conectar con el público de la isla e internacional.",
      },
      {
        id: "work",
        title: "Trabajo de GSW",
        body: "Probamos distintas alternativas hasta identificar una de las claves: la asociación con marcas de eventos, reforzada con campañas publicitarias, creatividades y una gestión global de la estrategia.",
      },
      {
        id: "results",
        title: "Resultados medidos",
        body: "Los resultados corresponden a acciones independientes de la colaboración: una campaña de tráfico, una campaña de vídeo y la evolución registrada en Instagram.",
      },
    ],
    metricsPeriod: "Resultados presentados por acción independiente",
    metrics: [
      { value: 989, label: "Clics en el enlace", display: "989" },
      { value: 119.59, label: "Inversión publicitaria", display: "119,59 €" },
      { value: 0.12, label: "Coste por clic", display: "0,12 €" },
      { value: 55450, label: "Reproducciones de vídeo", display: "55.450" },
      { value: 31, label: "Tasa de captura inicial", display: "31 %" },
      { value: 1100, label: "Clics en el enlace · Instagram", display: "1,1 mil" },
      { value: 100, label: "Variación mostrada por Meta", display: "↑ 100 %" },
    ],
    caseImages: [
      {
        id: "hero",
        filename: "meta-ad.png",
        alt: "Anuncio de M TWO Club Mallorca en Facebook",
        src: "/case-studies/m-two-club-mallorca/meta-ad.png",
        aspect: "auto",
      },
      {
        id: "instagram",
        filename: "instagram-growth.png",
        alt: "Evolución de Instagram de M TWO Club Mallorca",
        src: "/case-studies/m-two-club-mallorca/instagram-growth.png",
        aspect: "auto",
      },
    ],
    seo: {
      title: "M‑Two Mallorca — Caso de éxito",
      description:
        "Caso de éxito de Global Solutions con M‑Two Mallorca: campañas en Meta, estrategia de eventos, colaboraciones y resultados digitales.",
      ogTitle: "M‑Two Mallorca",
      ogDescription: "Historias reales. Impacto que se siente.",
    },
  },
  {
    id: "oceans-mallorca",
    slug: "oceans-mallorca",
    sectorId: "nightlife-clubs",
    name: "Oceans Mallorca",
    location: "Magaluf · Mallorca · 2019",
    locale: "es",
    listed: true,
    summary:
      "Promoción de varias fechas con artistas como Javi Bora y Chus & Ceballos para Oceans Night Club Mallorca.",
    services: [
      "Promoción de eventos",
      "Campañas de artistas",
      "Javi Bora · Chus & Ceballos",
    ],
    links: {
      website: "https://oceanscalviabeach.com/en/",
    },
    primary: {
      type: "image",
      src: "/case-studies/oceans-mallorca/campaign-2019.png",
      alt: "Publicación original de Oceans Night Club Mallorca para Chus & Ceballos, evento del 23 de agosto de 2019",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/oceans-mallorca/interior.png",
        alt: "Interior de Oceans Beach Club Mallorca con iluminación violeta y el logotipo de Oceans",
      },
    ],
    moments: [
      {
        id: "context",
        title: "Contexto y reto",
        body: "Promoción de varias fechas con artistas como Javi Bora y Chus & Ceballos para Oceans Night Club Mallorca.",
      },
      {
        id: "work",
        title: "Trabajo de GSW",
        body: "La campaña de Chus & Ceballos destacó como la de mejor respuesta de la colaboración, que también incluyó nuestra asistencia al evento.",
      },
    ],
    caseImages: [
      {
        id: "hero",
        filename: "campaign-2019.png",
        alt: "Archivo de campaña de Oceans para Chus & Ceballos en 2019",
        src: "/case-studies/oceans-mallorca/campaign-2019.png",
        aspect: "auto",
      },
      {
        id: "interior",
        filename: "interior.png",
        alt: "Oceans Beach Club Mallorca, interior del local",
        src: "/case-studies/oceans-mallorca/interior.png",
        aspect: "auto",
      },
    ],
    seo: {
      title: "Oceans Mallorca — Caso de éxito",
      description:
        "Caso de éxito de Global Solutions con Oceans Mallorca: promoción de eventos y campañas con artistas en 2019.",
      ogTitle: "Oceans Mallorca",
      ogDescription: "Historias reales. Impacto que se siente.",
    },
  },
  {
    id: "womens-hair-salon",
    slug: "womens-hair-salon",
    sectorId: "beauty-personal-care",
    name: "Peluquería femenina",
    location: "Peluquería · Colaboración histórica",
    locale: "es",
    listed: true,
    listingOnly: true,
    summary:
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
    mediaLayout: "wide-primary",
    primary: {
      type: "image",
      src: "/case-studies/beauty-personal-care/salon-space.webp",
      alt: "Zona de lavado de Amen: fotografía retocada para presentación, con cuadro añadido",
      caption: "El espacio · fotografía retocada",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/beauty-personal-care/salon-community-22k.webp",
        alt: "Perfil de Amen Peluquería con 22 mil seguidores; captura limpiada para presentación",
        caption: "Comunidad · 22.000 seguidores",
        fit: "contain",
      },
      {
        type: "image",
        src: "/case-studies/beauty-personal-care/salon-campaign-2018.webp",
        alt: "Campaña histórica de balayage del 26 de febrero de 2018: 109 reacciones, 384 comentarios y 12 compartidos; captura limpiada",
        caption: "Campaña · febrero de 2018",
        fit: "contain",
      },
    ],
    seo: {
      title: "Peluquería femenina — Caso de éxito",
      description:
        "Caso de éxito de Global Solutions en peluquería: marca, comunidad y campañas.",
    },
  },
  {
    id: "womens-aesthetics",
    slug: "womens-aesthetics",
    sectorId: "beauty-personal-care",
    name: "Estética femenina",
    location: "Argentina · Estética de belleza",
    locale: "es",
    listed: true,
    listingOnly: true,
    summary:
      "Campañas de marketing para dar visibilidad a sus tratamientos y generar interés e interacción con potenciales clientas.",
    services: ["Campañas publicitarias", "Marketing digital"],
    mediaLayout: "wide-primary",
    primary: {
      type: "image",
      src: "/case-studies/beauty-personal-care/aesthetics-campaign.webp",
      alt: "Ejemplo histórico de campaña de Amen Estética con 244 reacciones, 92 comentarios y 15 compartidos",
      caption: "Campaña · captura histórica",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/beauty-personal-care/aesthetics-projection-simulated.webp",
        alt: "Proyección +50% con datos simulados: 60.996 impresiones, 926 visitas, 45,69 euros de inversión y 600 eventos; no son resultados reales",
        caption: "Proyección +50% · DATOS SIMULADOS",
        fit: "contain",
      },
    ],
    metrics: [
      { value: 244, label: "Reacciones" },
      { value: 92, label: "Comentarios" },
      { value: 15, label: "Compartidos" },
    ],
    metricsPeriod: "Periodo: Publicación histórica del 19 de julio · año no indicado",
    seo: {
      title: "Estética femenina — Caso de éxito",
      description:
        "Caso de éxito de Global Solutions en estética: campañas e interacción.",
    },
  },
  {
    id: "thomas-inmo",
    slug: "thomas-inmo",
    sectorId: "real-estate-investment",
    name: "Thomas Inmo",
    location: "Mallorca · Mercado alemán",
    locale: "es",
    listed: true,
    listingOnly: true,
    summary:
      "Una estrategia integral para acercar Cala Serena a compradores internacionales: campañas segmentadas, creatividades, landing con formulario y prospección de contactos en Alemania. Sumamos investigación de portales y difusión off market para apoyar las visitas de clientes potenciales.",
    services: [
      "Meta Ads",
      "Segmentación y creatividades",
      "Landing y formulario",
      "Prospección en Alemania",
      "Difusión off market",
    ],
    links: {
      website: "https://cala-serena.vercel.app/es",
      websiteLabel: "Ver web",
    },
    story: {
      label: "De la visibilidad a las visitas",
      body: "Tras las campañas se concertaron visitas a la propiedad y la actividad de visitas continúa, según el seguimiento compartido por el cliente.",
    },
    mediaLayout: "wide-primary",
    primary: {
      type: "video",
      src: "/case-studies/real-estate-investment/thomas-inmo-landing.mp4",
      poster: "/case-studies/real-estate-investment/thomas-inmo-01.jpg",
      alt: "Presentación real de la landing de Cala Serena",
      caption: "Landing de Cala Serena",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/real-estate-investment/thomas-inmo-02.png",
        alt: "Captura real de Meta: corte anterior de 264 visitas, 15.661 impresiones y 83,55 € de inversión",
        caption: "Meta Ads · corte anterior",
        fit: "contain",
      },
      {
        type: "slider",
        alt: "Creatividades de Cala Serena para Alemania",
        caption: "Campañas · Alemania",
        sliderLabel: "Campañas / Alemania",
        previousLabel: "Creatividad anterior",
        nextLabel: "Siguiente creatividad",
        slides: [
          {
            kind: "collage",
            sources: [
              {
                src: "/case-studies/real-estate-investment/thomas-inmo-creative-01.png",
                alt: "Creatividad Cala Serena 1",
              },
              {
                src: "/case-studies/real-estate-investment/thomas-inmo-creative-02.png",
                alt: "Creatividad Cala Serena 2",
              },
              {
                src: "/case-studies/real-estate-investment/thomas-inmo-creative-03.png",
                alt: "Creatividad Cala Serena 3",
              },
            ],
          },
          {
            kind: "panel",
            kicker: "EN DESARROLLO",
            title: "Polonia.\nCosta Blanca.",
            body: "Landing para compradores polacos.",
          },
          {
            kind: "image",
            src: "/case-studies/real-estate-investment/thomas-inmo-creative-01.png",
            alt: "Creatividad Cala Serena 1",
          },
          {
            kind: "image",
            src: "/case-studies/real-estate-investment/thomas-inmo-creative-02.png",
            alt: "Creatividad Cala Serena 2",
          },
          {
            kind: "image",
            src: "/case-studies/real-estate-investment/thomas-inmo-creative-03.png",
            alt: "Creatividad Cala Serena 3",
          },
        ],
      },
    ],
    metrics: [
      { value: 416, label: "Visitas a la landing" },
      { value: 19795, display: "19.795", label: "Impresiones" },
      { value: 13088, display: "13.088", label: "Personas alcanzadas" },
      { value: 0.25, display: "0,25 €", label: "Coste por visita a la landing" },
      { value: 105.38, display: "105,38 €", label: "Inversión publicitaria" },
    ],
    metricsPeriod: "Periodo: Ventana activa de 30 días · Informe de campaña de Thomas Inmo",
    metricsNote:
      "Las visitas a la landing no son contactos ni visitas presenciales. Informe final: ventana activa de 30 días. La captura de Meta muestra un corte anterior: 264 visitas y 83,55 € de inversión. Polonia / Costa Blanca: actualmente desarrollamos una landing dirigida a compradores polacos de propiedades en Costa Blanca.",
    seo: {
      title: "Thomas Inmo — Caso de éxito",
      description:
        "Caso de éxito de Global Solutions con Thomas Inmo: campañas, landing y captación para Cala Serena.",
    },
  },
  {
    id: "morales-estates",
    slug: "morales-estates",
    sectorId: "real-estate-investment",
    name: "Morales Estates",
    location: "Inmobiliario e inversión",
    locale: "es",
    listed: true,
    listingOnly: true,
    summary:
      "De una web WordPress inacabada a una presencia inmobiliaria premium. Recuperamos y completamos el proyecto, incorporamos un chatbot, desarrollamos el blog y trabajamos el SEO. Además, captamos tres propiedades para ampliar la cartera del cliente.",
    services: [
      "Desarrollo WordPress",
      "Chatbot",
      "Blog y SEO",
      "3 propiedades captadas",
    ],
    links: {
      website: "https://moralesestates.com/",
      websiteLabel: "Ver web",
    },
    story: {
      label: "Próxima fase",
      body: "La siguiente fase plantea un sistema de colaboraciones y captación de propietarios para ampliar la cartera y generar nuevas oportunidades comerciales.",
    },
    mediaLayout: "wide-primary",
    primary: {
      type: "image",
      src: "/case-studies/real-estate-investment/morales-estates-01.png",
      alt: "Web y chatbot de Morales Estates",
      caption: "Web y chatbot de Morales Estates",
      fit: "contain",
    },
    supports: [
      {
        type: "image",
        src: "/case-studies/real-estate-investment/morales-estates-02.png",
        alt: "Catálogo de propiedades de Morales Estates",
        caption: "Catálogo de propiedades de Morales Estates",
        fit: "contain",
      },
      {
        type: "image",
        src: "/case-studies/real-estate-investment/morales-estates-03.png",
        alt: "Blog de Morales Estates",
        caption: "Blog de Morales Estates",
        fit: "contain",
      },
    ],
    seo: {
      title: "Morales Estates — Caso de éxito",
      description:
        "Caso de éxito de Global Solutions con Morales Estates: WordPress, chatbot, blog, SEO y captación de propiedades.",
    },
  },
];
