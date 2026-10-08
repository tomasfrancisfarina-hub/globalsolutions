"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { localizedPath } from "@/lib/i18n/config";
import { animation } from "@/config/theme";
import type { Locale, PortfolioProject } from "@/types";
import { CaseImage } from "./case-image";
import { MetricCounter } from "./metric-counter";

interface PortfolioProjectCanvasProps {
  project: PortfolioProject;
  locale: Locale;
  sectorSlug: string;
  labels: {
    back: string;
    websiteLink: string;
    instagramLink: string;
  };
}

export function PortfolioProjectCanvas({
  project,
  locale,
  sectorSlug,
  labels,
}: PortfolioProjectCanvasProps) {
  const reduceMotion = useReducedMotion();
  const moments = (project.moments ?? []).filter((m) => !m.pending);
  const hasLinks = Boolean(project.links?.website || project.links?.instagram);

  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-[90rem] px-4 py-8 sm:px-8 sm:py-10 md:px-12">
        <Link
          href={localizedPath(`/case-studies/${sectorSlug}`, locale)}
          className="inline-block text-[11px] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-foreground"
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
          className="mt-10 max-w-3xl sm:mt-14"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-subtle">
            {project.location}
          </p>
          <h1 className="mt-3 text-[clamp(1.85rem,8vw,4.5rem)] font-medium tracking-tight">
            {project.name}
          </h1>
          {hasLinks ? (
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
              {project.links?.website ? (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-[11px] uppercase tracking-[0.14em] text-subtle underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {labels.websiteLink}
                </a>
              ) : null}
              {project.links?.instagram ? (
                <a
                  href={project.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-[11px] uppercase tracking-[0.14em] text-subtle underline-offset-4 transition-colors hover:text-foreground hover:underline"
                >
                  {labels.instagramLink}
                </a>
              ) : null}
            </div>
          ) : null}
        </motion.div>
      </div>

      {project.primary.src ? (
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8 md:px-12">
        <CaseImage
          filename={project.primary.src.split("/").pop() ?? "primary"}
          alt={project.primary.alt}
          src={project.primary.src}
          type={project.primary.type}
          priority
          className="rounded-md"
          pendingLabel={project.primary.pendingLabel}
        />
      </div>
      ) : null}

      <div className="mx-auto max-w-[90rem] space-y-14 px-4 py-12 sm:space-y-28 sm:px-8 sm:py-24 md:px-12">
        {moments.map((moment, index) => (
          <motion.section
            key={moment.id}
            initial={reduceMotion ? false : { y: 18 }}
            whileInView={reduceMotion ? undefined : { y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : animation.duration.slow / 1000,
              ease: animation.easing,
            }}
            className="max-w-3xl border-t border-border pt-8 sm:pt-10"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-subtle">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-4 text-2xl font-medium tracking-tight sm:text-3xl">
              {moment.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:mt-5 sm:text-lg">
              {moment.body}
            </p>

            {moment.id === "results" && project.metrics && (
              <div className="mt-12">
                {project.metricsPeriod && (
                  <p className="text-[11px] uppercase leading-relaxed tracking-[0.12em] text-subtle sm:text-xs sm:tracking-[0.16em]">
                    {project.metricsPeriod}
                  </p>
                )}
                <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-7 sm:mt-8 sm:grid-cols-3 sm:gap-8">
                  {project.metrics.map((metric) => (
                    <MetricCounter
                      key={metric.label}
                      value={metric.value}
                      display={metric.display}
                      label={metric.label}
                    />
                  ))}
                </div>

                {/* Decorative ascending line — no axes or invented series */}
                <svg
                  className="mt-10 h-16 w-full text-border"
                  viewBox="0 0 320 64"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M0 52 C60 50 90 40 140 34 C190 28 230 18 320 8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
            )}
          </motion.section>
        ))}

        {project.caseImages && project.caseImages.length > 0 && (
          <section className="border-t border-border pt-10">
            <div className="grid items-start gap-4 sm:grid-cols-2 sm:gap-6 [&>*]:h-fit">
              {project.caseImages
                .filter((img) => img.id !== "hero")
                .map((img) => (
                  <CaseImage
                    key={img.id}
                    filename={img.filename}
                    alt={img.alt}
                    src={img.src}
                    type={
                      img.filename.match(/\.(mp4|webm|mov)$/i)
                        ? "video"
                        : "image"
                    }
                    className="rounded-md"
                    pendingLabel={`[dev] ${img.filename}`}
                  />
                ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
