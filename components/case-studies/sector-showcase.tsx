"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent, MouseEvent } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type {
  Locale,
  SectorShowcase as SectorShowcaseData,
  SectorShowcaseImage,
} from "@/types";
import styles from "./sector-showcase.module.css";

interface SectorShowcaseProps {
  showcase: SectorShowcaseData;
  locale: Locale;
}

const numberLocale: Record<Locale, string> = {
  es: "es-ES",
  en: "en-GB",
  de: "de-DE",
};

export function SectorShowcase({ showcase, locale }: SectorShowcaseProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [enlarged, setEnlarged] = useState<SectorShowcaseImage | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const format = useCallback(
    (value: number) => new Intl.NumberFormat(numberLocale[locale]).format(value),
    [locale],
  );
  const { closing, labels } = showcase;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches || !("IntersectionObserver" in window)) {
      root
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((el) => el.classList.add(styles.visible));
      return;
    }

    const frames = new Set<number>();
    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count);
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / 1000);
        el.textContent = format(Math.round(target * (1 - Math.pow(1 - progress, 3))));
        if (progress < 1) frames.add(requestAnimationFrame(tick));
      };
      frames.add(requestAnimationFrame(tick));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add(styles.visible);
          if (el.dataset.count) countUp(el);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 },
    );

    root
      .querySelectorAll<HTMLElement>("[data-reveal], [data-count]")
      .forEach((el) => {
        if (el.dataset.count) el.textContent = format(0);
        observer.observe(el);
      });

    return () => {
      observer.disconnect();
      frames.forEach((id) => cancelAnimationFrame(id));
      root
        .querySelectorAll<HTMLElement>("[data-count]")
        .forEach((el) => (el.textContent = format(Number(el.dataset.count))));
    };
  }, [format]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (enlarged && dialog && !dialog.open) dialog.showModal();
  }, [enlarged]);

  const openImage = (image: SectorShowcaseImage) => {
    setZoomed(false);
    setEnlarged(image);
  };

  const toggleZoom = (event: MouseEvent<HTMLImageElement>) => {
    const stage = stageRef.current;
    if (!stage) return;
    if (zoomed) {
      setZoomed(false);
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setZoomed(true);
    requestAnimationFrame(() => {
      stage.scrollLeft = x * stage.scrollWidth - stage.clientWidth / 2;
      stage.scrollTop = y * stage.scrollHeight - stage.clientHeight / 2;
    });
  };
  const onMediaKey = (event: KeyboardEvent, image: SectorShowcaseImage) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImage(image);
    }
  };

  return (
    <div ref={rootRef} className={cn(styles.root, styles.motion)}>
      <noscript>
        <style>
          {"[data-reveal],[data-reveal]>span{opacity:1!important;transform:none!important;clip-path:none!important}"}
        </style>
      </noscript>
      <section className={styles.hero} aria-labelledby="showcase-title">
        <p className={cn(styles.small, styles.eyebrow, styles.reveal)} data-reveal>
          {showcase.eyebrow}
        </p>
        <h1 id="showcase-title" className={styles.title}>
          {showcase.heroLines.map((line, index) => (
            <span
              key={line}
              className={cn(styles.line, styles.reveal)}
              style={{ "--delay": `${index * 100}ms` } as CSSProperties}
              data-reveal
            >
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <p className={cn(styles.intro, styles.reveal)} data-reveal>
          {showcase.intro}
        </p>
      </section>

      <section className={styles.projects} aria-labelledby="showcase-projects">
        <div className={styles.sectionLabel}>
          <h2 id="showcase-projects" className={styles.small}>
            {showcase.projectsLabel}
          </h2>
          <span className={styles.small}>
            {String(showcase.cases.length).padStart(2, "0")}
          </span>
        </div>

        {showcase.cases.map((item) => (
          <article
            key={item.id}
            className={styles.project}
            aria-labelledby={`case-${item.id}`}
          >
            <div className={styles.projectTop}>
              <div className={styles.reveal} data-reveal>
                <h2 id={`case-${item.id}`} className={styles.projectName}>
                  {item.name}
                </h2>
              </div>
              <div className={cn(styles.projectInfo, styles.reveal)} data-reveal>
                <div>
                  <p className={styles.description}>{item.description}</p>
                  {item.story ? (
                    <details className={styles.story}>
                      <summary>{item.story.label}</summary>
                      <p>{item.story.body}</p>
                    </details>
                  ) : null}
                </div>
                <div className={styles.meta}>
                  <div className={cn(styles.tags, styles.small)}>
                    {item.services.map((service) => (
                      <span key={service}>{service}</span>
                    ))}
                  </div>
                  <span className={styles.small}>{item.location}</span>
                </div>
              </div>
            </div>

            <div
              className={cn(
                styles.grid,
                item.layout === "diptych" ? styles.diptych : styles.triptych,
              )}
            >
              {item.images.map((image, index) => (
                <figure
                  key={image.src}
                  className={cn(styles.media, styles.reveal)}
                  data-reveal
                  role="button"
                  tabIndex={0}
                  aria-label={`${labels.enlarge}: ${image.alt}`}
                  onClick={() => openImage(image)}
                  onKeyDown={(event) => onMediaKey(event, image)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>

            {item.metrics && item.metrics.length > 0 ? (
              <div className={cn(styles.metrics, styles.reveal)} data-reveal>
                {item.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span className={styles.metricValue} data-count={metric.value}>
                      {metric.display ?? format(metric.value)}
                    </span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>
                ))}
                {item.metricsPeriod ? (
                  <p className={styles.period}>{item.metricsPeriod}</p>
                ) : null}
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className={styles.closing} aria-labelledby="showcase-closing">
        <div className={styles.callLayout}>
          <div>
            <p className={cn(styles.small, styles.eyebrow)}>{closing.ctaLabel}</p>
            <h2
              id="showcase-closing"
              className={cn(styles.callTitle, styles.reveal)}
              data-reveal
            >
              {closing.title}
            </h2>
            <p className={cn(styles.callIntro, styles.reveal)} data-reveal>
              {closing.intro}
            </p>
          </div>
          <figure className={cn(styles.portrait, styles.reveal)} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={closing.portrait.src}
              alt={closing.portrait.alt}
              width={640}
              height={640}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className={styles.person}>
          <div>
            <strong>{closing.name}</strong>
            <p>{closing.role}</p>
          </div>
          <a
            href={siteConfig.contact.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pill}
          >
            {closing.ctaLabel}
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className={styles.calendar}>
          <iframe
            title={closing.calendarTitle}
            src={siteConfig.contact.calUrl}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
        <p className={styles.fallback}>
          <a href={siteConfig.contact.calUrl} target="_blank" rel="noopener noreferrer">
            {closing.calendarFallback} ↗
          </a>
        </p>
      </section>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label={labels.enlarge}
        onClose={() => setEnlarged(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <button type="button" onClick={() => dialogRef.current?.close()}>
          {labels.close}
        </button>
        {enlarged ? (
          <>
            <div
              ref={stageRef}
              className={cn(styles.stage, zoomed && styles.zoomed)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={enlarged.src}
                alt={enlarged.alt}
                width={enlarged.width}
                height={enlarged.height}
                style={zoomed ? { width: enlarged.width } : undefined}
                onClick={toggleZoom}
              />
            </div>
            <p>{enlarged.caption}</p>
          </>
        ) : null}
      </dialog>
    </div>
  );
}
