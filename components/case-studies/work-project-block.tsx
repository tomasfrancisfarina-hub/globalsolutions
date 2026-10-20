"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { localizedPath } from "@/lib/i18n/config";
import { animation } from "@/config/theme";
import { cn } from "@/lib/utils";
import type { Locale, PortfolioProject, PortfolioProjectMedia } from "@/types";
import { CampaignSlider } from "./campaign-slider";
import { CaseImage } from "./case-image";
import { MetricCounter } from "./metric-counter";

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
 * all breakpoints: same 3-column row as desktop; media visible on touch (no hover)
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
  const listingOnly = Boolean(project.listingOnly);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [enlarged, setEnlarged] = useState<PortfolioProjectMedia | null>(null);

  const openImage = (media: PortfolioProjectMedia) => {
    if (media.type !== "image" || !media.src) return;
    setEnlarged(media);
    requestAnimationFrame(() => dialogRef.current?.showModal());
  };

  const heading = (
    <>
      <h2 className="break-words text-[clamp(0.95rem,4.2vw,2.75rem)] font-medium leading-[1.12] tracking-tight">
        {project.name}
      </h2>
      {listingOnly ? null : (
        <span className="mt-1.5 inline-flex min-h-11 items-center gap-1.5 text-[11px] text-current sm:mt-3 sm:text-sm">
          {viewLabel}
          <span aria-hidden>→</span>
        </span>
      )}
    </>
  );

  const mediaItems: PortfolioProjectMedia[] = [project.primary, ...project.supports];

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
        "work-project-row group relative overflow-x-hidden border-t border-white/15",
        "bg-[#0b0b0b] text-white transition-colors duration-500",
        "motion-reduce:transition-none",
      )}
    >
      <div className="mx-auto max-w-[90rem] px-3 py-5 sm:px-8 sm:py-12 md:px-12 md:py-14">
        <div className="grid grid-cols-[0.95fr_1.45fr_0.75fr] items-start gap-2 sm:gap-8 lg:gap-12">
          <div className="min-w-0">
            {listingOnly ? (
              heading
            ) : (
              <Link
                href={href}
                className="inline-block outline-none"
                aria-label={`${project.name} — ${viewLabel}`}
              >
                {heading}
              </Link>
            )}
          </div>

          <div className="min-w-0">
            {summary ? (
              <p className="work-project-copy max-w-xl text-[11px] leading-relaxed text-white/85 sm:text-[14px] md:text-base">
                {summary}
              </p>
            ) : null}
            {project.story ? (
              <details className="work-project-copy mt-3 max-w-xl text-[11px] leading-relaxed text-white/70 sm:text-[13px]">
                <summary className="cursor-pointer underline-offset-4 hover:underline">
                  {project.story.label}
                </summary>
                <p className="mt-2">{project.story.body}</p>
              </details>
            ) : null}
            {hasLinks ? (
              <div className="mt-2 flex flex-wrap items-center gap-x-1 gap-y-1 sm:mt-5">
                {project.links?.website ? (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-ext inline-flex min-h-11 items-center px-1 text-[9px] uppercase tracking-[0.12em] text-white/70 underline-offset-4 hover:underline sm:text-[11px] sm:tracking-[0.14em]"
                  >
                    {project.links.websiteLabel ?? websiteLabel}
                  </a>
                ) : null}
                {project.links?.instagram ? (
                  <a
                    href={project.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-project-ext inline-flex min-h-11 items-center px-1 text-[9px] uppercase tracking-[0.12em] text-white/70 underline-offset-4 hover:underline sm:text-[11px] sm:tracking-[0.14em]"
                  >
                    {instagramLabel}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="min-w-0 text-right">
            {services.length > 0 && (
              <ul className="work-project-meta block space-y-0.5 break-words text-[8px] uppercase leading-snug tracking-[0.1em] text-white/65 sm:space-y-1.5 sm:text-[11px] sm:tracking-[0.14em] [&>li]:block">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            )}
            <p
              className={cn(
                "work-project-meta break-words text-[8px] uppercase leading-snug tracking-[0.1em] text-white/65 sm:text-[11px] sm:tracking-[0.14em]",
                services.length > 0 && "mt-1.5 sm:mt-5",
              )}
            >
              {project.location}
            </p>
          </div>
        </div>

        {project.primary.src ? (
        <div className="work-project-media mt-5 h-fit sm:mt-8">
          <div
            className={cn(
              "grid min-w-0 items-start gap-2 overflow-visible sm:gap-4",
              mediaCount === 1 && "grid-cols-1",
              mediaCount === 2 && "grid-cols-2",
              mediaCount >= 3 &&
                (project.mediaLayout === "wide-primary"
                  ? "grid-cols-[1.45fr_1fr_0.95fr]"
                  : "grid-cols-3"),
            )}
          >
            {mediaItems.map((media, index) => {
              if (media.type === "slider" && media.slides?.length) {
                return (
                  <div key={`${project.id}-media-${index}`} className="min-w-0">
                    <CampaignSlider
                      slides={media.slides}
                      caption={media.caption}
                      label={media.sliderLabel ?? media.caption ?? media.alt}
                      previousLabel={media.previousLabel ?? "Previous"}
                      nextLabel={media.nextLabel ?? "Next"}
                      onImageClick={(src, alt) =>
                        openImage({ type: "image", src, alt })
                      }
                    />
                  </div>
                );
              }

              const image = (
                <CaseImage
                  filename={media.src?.split("/").pop() ?? `media-${index}`}
                  alt={media.alt}
                  src={media.src}
                  type={media.type}
                  poster={media.poster}
                  className="min-w-0 w-full rounded-md"
                  pendingLabel={media.pendingLabel}
                  caption={media.caption}
                  playLabel={
                    locale === "de"
                      ? "Abspielen"
                      : locale === "en"
                        ? "Play"
                        : "Reproducir"
                  }
                  pauseLabel={
                    locale === "de"
                      ? "Pausieren"
                      : locale === "en"
                        ? "Pause"
                        : "Pausar"
                  }
                />
              );

              if (listingOnly && media.type === "image" && media.src) {
                return (
                  <button
                    key={`${project.id}-media-${index}`}
                    type="button"
                    className="min-w-0 cursor-zoom-in text-left"
                    onClick={() => openImage(media)}
                    aria-label={media.alt}
                  >
                    {image}
                  </button>
                );
              }

              if (listingOnly) {
                return (
                  <div key={`${project.id}-media-${index}`} className="min-w-0">
                    {image}
                  </div>
                );
              }

              return (
                <Link
                  key={`${project.id}-media-${index}`}
                  href={href}
                  className="min-w-0 outline-none"
                  tabIndex={-1}
                  aria-hidden
                >
                  {image}
                </Link>
              );
            })}
          </div>

          {listingOnly && project.metrics && project.metrics.length > 0 ? (
            <div className="mt-8 border-t border-white/15 pt-6">
              {project.metricsPeriod ? (
                <p className="work-project-meta text-[11px] uppercase tracking-[0.12em] text-white/55">
                  {project.metricsPeriod}
                </p>
              ) : null}
              <div className="mt-5 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <MetricCounter
                    key={metric.label}
                    value={metric.value}
                    display={metric.display}
                    label={metric.label}
                  />
                ))}
              </div>
              {project.metricsNote ? (
                <p className="work-project-meta mt-5 max-w-3xl whitespace-pre-line text-[12px] leading-relaxed text-white/55">
                  {project.metricsNote}
                </p>
              ) : null}
            </div>
          ) : null}
        </div>
        ) : null}
      </div>

      {listingOnly ? (
        <dialog
          ref={dialogRef}
          className="w-[min(1000px,94vw)] max-w-none border border-white/20 bg-[#090909] p-4 text-white backdrop:bg-black/90"
          onClose={() => setEnlarged(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) event.currentTarget.close();
          }}
        >
          <button
            type="button"
            className="ml-auto block border border-white/30 px-3 py-2 text-xs"
            onClick={() => dialogRef.current?.close()}
          >
            ×
          </button>
          {enlarged?.src ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={enlarged.src}
                alt={enlarged.alt}
                className="mx-auto mt-3 max-h-[80vh] max-w-full object-contain"
              />
              {enlarged.caption ? (
                <p className="mt-3 text-[11px] text-white/70">{enlarged.caption}</p>
              ) : null}
            </>
          ) : null}
        </dialog>
      ) : null}
    </motion.article>
  );
}
