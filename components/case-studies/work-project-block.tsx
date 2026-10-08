"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { localizedPath } from "@/lib/i18n/config";
import { animation } from "@/config/theme";
import { cn } from "@/lib/utils";
import type { Locale, PortfolioProject } from "@/types";
import { CaseImage } from "./case-image";

interface WorkProjectBlockProps {
  project: PortfolioProject;
  locale: Locale;
  viewLabel: string;
  websiteLabel: string;
  instagramLabel: string;
}

/**
 * Refokus-style work row:
 * desktop: collapsed → hover unfolds media
 * mobile: compact snap carousel, no sticky hover invert
 */
export function WorkProjectBlock({
  project,
  locale,
  viewLabel,
  websiteLabel,
  instagramLabel,
}: WorkProjectBlockProps) {
  const reduceMotion = useReducedMotion();
  const href = localizedPath(`/case-studies/${project.slug}`, locale);
  const services =
    project.servicesPending || !project.services ? [] : project.services;
  const summary =
    project.summaryPending || !project.summary ? null : project.summary;
  const mediaCount = 1 + project.supports.length;
  const hasLinks = Boolean(project.links?.website || project.links?.instagram);

  return (
    <motion.article
      initial={reduceMotion ? false : { y: 10 }}
      whileInView={reduceMotion ? undefined : { y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: reduceMotion ? 0 : animation.duration.slow / 1000,
        ease: animation.easing,
      }}
      className={cn(
        "work-project-row group relative border-t border-white/15",
        "bg-[#0b0b0b] text-white transition-colors duration-500",
        "motion-reduce:transition-none",
      )}
    >
      <div className="mx-auto max-w-[90rem] px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-14">
        <div className="grid grid-cols-1 gap-4 sm:gap-8 lg:grid-cols-[0.95fr_1.45fr_0.75fr] lg:gap-12">
          <div className="min-w-0">
            <Link
              href={href}
              className="inline-block outline-none"
              aria-label={`${project.name} — ${viewLabel}`}
            >
              <h2 className="text-[clamp(1.45rem,6vw,2.75rem)] font-medium leading-[1.12] tracking-tight">
                {project.name}
              </h2>
              <span className="mt-3 inline-flex items-center gap-2 text-sm text-current">
                {viewLabel}
                <span aria-hidden>→</span>
              </span>
            </Link>
          </div>

          <div className="min-w-0">
            {summary ? (
              <p className="work-project-copy max-w-xl text-[14px] leading-relaxed text-white/85 sm:text-base">
                {summary}
              </p>
            ) : null}
            {hasLinks ? (
              <div className="mt-4 flex flex-wrap items-center gap-x-1 gap-y-1 sm:mt-5">
                {project.links?.website ? (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-ext inline-flex min-h-11 items-center px-1 text-[11px] uppercase tracking-[0.14em] text-white/70 underline-offset-4 hover:underline"
                  >
                    {websiteLabel}
                  </a>
                ) : null}
                {project.links?.instagram ? (
                  <a
                    href={project.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-ext inline-flex min-h-11 items-center px-1 text-[11px] uppercase tracking-[0.14em] text-white/70 underline-offset-4 hover:underline"
                  >
                    {instagramLabel}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="min-w-0 lg:text-right">
            {services.length > 0 && (
              <ul className="work-project-meta flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.14em] text-white/65 lg:block lg:space-y-1.5 lg:[&>li]:block">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            )}
            <p
              className={cn(
                "work-project-meta text-[11px] uppercase tracking-[0.14em] text-white/65",
                services.length > 0 && "mt-3 lg:mt-5",
              )}
            >
              {project.location}
            </p>
          </div>
        </div>

        {project.primary.src ? (
        <div className="work-project-media mt-6 opacity-100 sm:mt-8">
          <Link
            href={href}
            className="block outline-none"
            tabIndex={-1}
            aria-hidden
          >
            <div
              className={cn(
                "flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-1",
                "[-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                "md:grid md:items-start md:overflow-visible md:pb-0 md:gap-4",
                mediaCount === 1 && "md:grid-cols-1",
                mediaCount === 2 && "md:grid-cols-2",
                mediaCount >= 3 &&
                  (project.mediaLayout === "wide-primary"
                    ? "md:grid-cols-[1.45fr_1fr_0.95fr]"
                    : "md:grid-cols-3"),
              )}
            >
              <CaseImage
                filename={project.primary.src?.split("/").pop() ?? "primary"}
                alt={project.primary.alt}
                src={project.primary.src}
                type={project.primary.type}
                className="w-[min(84vw,22rem)] shrink-0 snap-center rounded-md md:w-auto"
                pendingLabel={project.primary.pendingLabel}
              />
              {project.supports.map((support, index) => (
                <CaseImage
                  key={`${project.id}-support-${index}`}
                  filename={
                    support.src?.split("/").pop() ?? `support-${index + 1}`
                  }
                  alt={support.alt}
                  src={support.src}
                  type={support.type}
                  className="w-[min(84vw,22rem)] shrink-0 snap-center rounded-md md:w-auto"
                  pendingLabel={support.pendingLabel}
                />
              ))}
            </div>
          </Link>
        </div>
        ) : null}
      </div>
    </motion.article>
  );
}
