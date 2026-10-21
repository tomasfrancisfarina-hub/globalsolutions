import Link from "next/link";
import { CaseImage } from "@/components/case-studies/case-image";
import { CaseStudyBookingCta } from "@/components/case-studies/case-study-booking-cta";
import { getAllPortfolioProjects } from "@/content/registry/portfolio-projects.registry";
import { localizedPath } from "@/lib/i18n/config";
import type { Locale } from "@/types";

type WebMedia = {
  type: "image" | "video";
  src?: string;
  poster?: string;
};

type WebDevelopment = {
  projectId: string;
  media: WebMedia;
  caseHref: string;
  copy: Record<Locale, { summary: string; services: string[]; alt: string }>;
};

const WEB_DEVELOPMENTS: WebDevelopment[] = [
  {
    projectId: "nanai-hamburg",
    caseHref: "/case-studies/nanai-hamburg",
    media: {
      type: "video",
      src: "/case-studies/nanai-hamburg/web-before-after.mp4",
    },
    copy: {
      es: {
        summary:
          "Web alineada con la propuesta gastronómica de Nanai en Hamburgo, con foco en claridad y crecimiento online.",
        services: ["Desarrollo web", "Posicionamiento"],
        alt: "Nanai Hamburg — comparativa web antes y después",
      },
      en: {
        summary:
          "A website aligned with Nanai’s dining proposition in Hamburg, focused on clarity and online growth.",
        services: ["Web development", "Positioning"],
        alt: "Nanai Hamburg — website before and after",
      },
      de: {
        summary:
          "Website im Einklang mit Nanais gastronomischer Positionierung in Hamburg – mit Fokus auf Klarheit und Online-Wachstum.",
        services: ["Webentwicklung", "Positionierung"],
        alt: "Nanai Hamburg — Website vorher und nachher",
      },
    },
  },
  {
    projectId: "thomas-inmo",
    caseHref: "/case-studies/real-estate-investment",
    media: {
      type: "video",
      src: "/case-studies/real-estate-investment/thomas-inmo-landing.mp4",
      poster: "/case-studies/real-estate-investment/thomas-inmo-01.jpg",
    },
    copy: {
      es: {
        summary:
          "Landing con formulario para acercar Cala Serena a compradores internacionales.",
        services: ["Landing y formulario", "Mercado alemán"],
        alt: "Presentación real de la landing de Cala Serena",
      },
      en: {
        summary:
          "A landing page with form to bring Cala Serena to international buyers.",
        services: ["Landing page and form", "German market"],
        alt: "Real walkthrough of the Cala Serena landing page",
      },
      de: {
        summary:
          "Landingpage mit Formular, um Cala Serena internationalen Käufern näherzubringen.",
        services: ["Landingpage und Formular", "Deutscher Markt"],
        alt: "Echte Präsentation der Cala-Serena-Landingpage",
      },
    },
  },
  {
    projectId: "morales-estates",
    caseHref: "/case-studies/real-estate-investment",
    media: {
      type: "image",
      src: "/case-studies/real-estate-investment/morales-estates-01.png",
    },
    copy: {
      es: {
        summary:
          "De una web WordPress inacabada a una presencia inmobiliaria premium, con chatbot, blog y SEO.",
        services: ["Desarrollo WordPress", "Chatbot", "Blog y SEO"],
        alt: "Web y chatbot de Morales Estates",
      },
      en: {
        summary:
          "From an unfinished WordPress site to a premium real-estate presence, with chatbot, blog and SEO.",
        services: ["WordPress development", "Chatbot", "Blog and SEO"],
        alt: "Morales Estates website and chatbot",
      },
      de: {
        summary:
          "Von einer unfertigen WordPress-Website zu einer premium Immobilienpräsenz – mit Chatbot, Blog und SEO.",
        services: ["WordPress-Entwicklung", "Chatbot", "Blog und SEO"],
        alt: "Website und Chatbot von Morales Estates",
      },
    },
  },
  {
    projectId: "polaris",
    caseHref: "/case-studies/polaris",
    media: { type: "video" },
    copy: {
      es: {
        summary:
          "Desarrollo web por Global Solutions Worldwide con nuevas tecnologías.",
        services: ["Desarrollo web"],
        alt: "Polaris — web",
      },
      en: {
        summary:
          "Website development by Global Solutions Worldwide with new technologies.",
        services: ["Web development"],
        alt: "Polaris — website",
      },
      de: {
        summary:
          "Webentwicklung von Global Solutions Worldwide mit neuen Technologien.",
        services: ["Webentwicklung"],
        alt: "Polaris — Website",
      },
    },
  },
];

const LABELS: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    back: string;
    seoTitle: string;
    seoDescription: string;
    visit: string;
    viewCase: string;
    pending: string;
    play: string;
    pause: string;
  }
> = {
  es: {
    eyebrow: "Diseño web · Portfolio",
    title: "Webs que hemos\nconstruido",
    back: "Inteligencia Artificial",
    seoTitle: "Portfolio de diseño web",
    seoDescription:
      "Desarrollos web de Global Solutions Worldwide: Nanai Hamburg, Thomas Inmo, Morales Estates y Polaris.",
    visit: "Visitar web",
    viewCase: "Ver caso",
    pending: "Vídeo próximamente",
    play: "Reproducir",
    pause: "Pausar",
  },
  en: {
    eyebrow: "Web design · Portfolio",
    title: "Websites we\nhave built",
    back: "Artificial Intelligence",
    seoTitle: "Web design portfolio",
    seoDescription:
      "Websites built by Global Solutions Worldwide: Nanai Hamburg, Thomas Inmo, Morales Estates and Polaris.",
    visit: "Visit website",
    viewCase: "View case",
    pending: "Video coming soon",
    play: "Play",
    pause: "Pause",
  },
  de: {
    eyebrow: "Webdesign · Portfolio",
    title: "Websites, die wir\ngebaut haben",
    back: "Künstliche Intelligenz",
    seoTitle: "Webdesign-Portfolio",
    seoDescription:
      "Websites von Global Solutions Worldwide: Nanai Hamburg, Thomas Inmo, Morales Estates und Polaris.",
    visit: "Website besuchen",
    viewCase: "Fall ansehen",
    pending: "Video folgt in Kürze",
    play: "Abspielen",
    pause: "Pausieren",
  },
};

export function getWebPortfolioSeo(locale: Locale) {
  const labels = LABELS[locale];
  return { title: labels.seoTitle, description: labels.seoDescription };
}

interface WebPortfolioProps {
  locale: Locale;
}

export function WebPortfolio({ locale }: WebPortfolioProps) {
  const labels = LABELS[locale];
  const projects = getAllPortfolioProjects(locale);
  const items = WEB_DEVELOPMENTS.flatMap((item) => {
    const project = projects.find((entry) => entry.id === item.projectId);
    return project ? [{ ...item, project }] : [];
  });

  return (
    <div className="bg-[#0b0b0b] text-white">
      <section className="px-4 pt-8 sm:px-8 sm:pt-14 md:px-12 md:pt-16">
        <div className="mx-auto max-w-[90rem]">
          <Link
            href={localizedPath("/divisions/artificial-intelligence", locale)}
            className="inline-block text-[11px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white"
          >
            ← {labels.back}
          </Link>

          <div className="mt-14 max-w-5xl sm:mt-20">
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              {labels.eyebrow}
            </p>
            <h1 className="mt-6 break-words text-[clamp(1.85rem,5.5vw,5rem)] font-medium leading-[1.02] tracking-tight text-white">
              {labels.title.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </div>

          <CaseStudyBookingCta
            locale={locale}
            variant="dark"
            compact
            className="mt-12 sm:mt-16"
          />
        </div>
      </section>

      <section className="work-project-row group mt-10 border-y border-white/15 bg-[#0b0b0b] text-white transition-colors duration-500 motion-reduce:transition-none sm:mt-24">
        <div className="mx-auto grid max-w-[90rem] grid-cols-1 gap-x-8 gap-y-12 px-4 py-8 sm:grid-cols-2 sm:px-8 sm:py-12 md:px-12 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-0">
          {items.map(({ project, copy, media, caseHref }) => {
            const text = copy[locale];
            const website = project.links?.website;
            return (
              <article
                key={project.id}
                className="flex min-w-0 flex-col lg:row-span-5 lg:grid lg:grid-rows-subgrid"
              >
                <div>
                  <h3 className="break-words text-[clamp(1.25rem,2vw,1.75rem)] font-medium leading-[1.12] tracking-tight">
                    {project.name}
                  </h3>
                  <p className="work-project-meta mt-2 text-[10px] uppercase tracking-[0.14em] text-white/55 sm:text-[11px]">
                    {project.location}
                  </p>
                </div>
                <p className="work-project-copy mt-4 text-[13px] leading-relaxed text-white/85 sm:text-[14px]">
                  {text.summary}
                </p>
                <ul className="work-project-meta mt-4 space-y-1 text-[10px] uppercase tracking-[0.14em] text-white/65 sm:text-[11px]">
                  {text.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
                <div className="mt-3 flex flex-wrap items-start gap-x-4">
                  {website ? (
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-project-ext inline-flex min-h-11 items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-white/80 underline-offset-4 hover:underline"
                    >
                      {labels.visit}
                      <span aria-hidden>↗</span>
                    </a>
                  ) : null}
                  <Link
                    href={localizedPath(caseHref, locale)}
                    className="work-project-ext inline-flex min-h-11 items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-white/60 underline-offset-4 hover:underline"
                  >
                    {labels.viewCase}
                    <span aria-hidden>→</span>
                  </Link>
                </div>

                <div className="work-project-media mt-5">
                  {media.src ? (
                    <CaseImage
                      filename={media.src.split("/").pop() ?? project.id}
                      alt={text.alt}
                      src={media.src}
                      type={media.type}
                      poster={media.poster}
                      className="rounded-md"
                      playLabel={labels.play}
                      pauseLabel={labels.pause}
                    />
                  ) : (
                    <div className="flex aspect-video items-end rounded-md border border-dashed border-white/25 p-4 group-hover:border-black/20">
                      <p className="text-[10px] uppercase tracking-[0.16em] opacity-60">
                        {labels.pending}
                      </p>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 sm:py-28 md:px-12">
        <div className="mx-auto max-w-[90rem]">
          <CaseStudyBookingCta locale={locale} variant="dark" />
        </div>
      </section>
    </div>
  );
}
