"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { localizedPath } from "@/lib/i18n/config";
import { animation } from "@/config/theme";
import { siteConfig } from "@/config/site";
import type { CaseStudySector, Locale, PortfolioProject } from "@/types";
import { WorkProjectBlock } from "./work-project-block";
import { PortfolioFilters } from "./portfolio-filters";

interface SectorPortfolioProps {
  sector: CaseStudySector;
  locale: Locale;
  projects: PortfolioProject[];
  labels: {
    eyebrow: string;
    title: string;
    viewCase: string;
    closeHeadline: string;
    closeCta: string;
    back: string;
    websiteLink: string;
    instagramLink: string;
    showFilters: boolean;
  };
}

/**
 * Work index matching Refokus /work list interaction:
 * text rows → hover unfolds images → click opens case.
 */
export function SectorPortfolio({
  sector,
  locale,
  projects,
  labels,
}: SectorPortfolioProps) {
  const reduceMotion = useReducedMotion();
  const calHref = siteConfig.contact.calUrl.startsWith("http")
    ? siteConfig.contact.calUrl
    : localizedPath(siteConfig.contact.calUrl, locale);
  const titleLines = labels.title.split("\n");

  return (
    <div className="bg-[#0b0b0b] text-white">
      <section className="px-4 pt-8 sm:px-8 sm:pt-14 md:px-12 md:pt-16">
        <div className="mx-auto max-w-[90rem]">
          <Link
            href={localizedPath("/case-studies", locale)}
            className="inline-block text-[11px] uppercase tracking-[0.18em] text-white/50 transition-colors hover:text-white"
          >
            ← {labels.back}
          </Link>

          <motion.div
            initial={reduceMotion ? false : { y: 12 }}
            animate={reduceMotion ? undefined : { y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : animation.duration.slow / 1000,
              ease: animation.easing,
            }}
            className="mt-14 max-w-5xl sm:mt-20"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
              {labels.eyebrow}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/40">
              {sector.name}
            </p>
            <h1 className="mt-6 break-words text-[clamp(1.85rem,5.5vw,5rem)] font-medium leading-[1.02] tracking-tight text-white">
              {titleLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </motion.div>
        </div>
      </section>

      {labels.showFilters ? <PortfolioFilters labels={[]} /> : null}

      <section className="mt-10 border-b border-white/15 sm:mt-24">
        {projects.map((project) => (
          <WorkProjectBlock
            key={project.id}
            project={project}
            locale={locale}
            viewLabel={labels.viewCase}
            websiteLabel={labels.websiteLink}
            instagramLabel={labels.instagramLink}
          />
        ))}
      </section>

      <section className="px-4 py-16 sm:px-8 sm:py-28 md:px-12">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-[clamp(1.75rem,3.5vw,3rem)] font-medium tracking-tight text-white">
            {labels.closeHeadline}
          </h2>
          <Link
            href={calHref}
            {...(calHref.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center gap-2 text-sm text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            {labels.closeCta}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
