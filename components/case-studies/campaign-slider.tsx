"use client";

import { useRef } from "react";
import { useReducedMotion } from "framer-motion";
import type { PortfolioSliderSlide } from "@/types";

interface CampaignSliderProps {
  slides: PortfolioSliderSlide[];
  caption?: string;
  label: string;
  previousLabel: string;
  nextLabel: string;
  onImageClick?: (src: string, alt: string) => void;
}

export function CampaignSlider({
  slides,
  caption,
  label,
  previousLabel,
  nextLabel,
  onImageClick,
}: CampaignSliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const scrollBySlide = (direction: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * track.clientWidth,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <figure className="campaign-slider min-w-0">
      <div
        ref={trackRef}
        className="campaign-track flex snap-x snap-mandatory overflow-x-auto"
      >
        {slides.map((slide, index) => (
          <div
            key={`${slide.kind ?? "image"}-${index}`}
            className="campaign-slide flex w-full min-w-full shrink-0 snap-start items-center justify-center p-0 sm:p-2"
          >
            {slide.kind === "collage" && slide.sources ? (
              <div className="campaign-panels grid w-full grid-cols-3 gap-1">
                {slide.sources.map((source) => (
                  <button
                    key={source.src}
                    type="button"
                    className="min-w-0 cursor-zoom-in"
                    onClick={() => onImageClick?.(source.src, source.alt)}
                    aria-label={source.alt}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={source.src}
                      alt={source.alt}
                      className="h-auto w-full max-w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            ) : null}

            {slide.kind === "panel" ? (
              <div className="flex h-full min-h-40 w-full flex-col justify-center px-3 py-4 text-left">
                {slide.kicker ? (
                  <p className="text-[10px] uppercase tracking-[0.14em] text-current/55">
                    {slide.kicker}
                  </p>
                ) : null}
                {slide.title ? (
                  <h3 className="mt-2 text-[clamp(1.15rem,2vw,1.85rem)] font-medium leading-tight tracking-tight">
                    {slide.title.split("\n").map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                ) : null}
                {slide.body ? (
                  <p className="mt-3 text-[11px] leading-relaxed text-current/65">
                    {slide.body}
                  </p>
                ) : null}
              </div>
            ) : null}

            {(!slide.kind || slide.kind === "image") && slide.src ? (
              <button
                type="button"
                className="w-full cursor-zoom-in"
                onClick={() => onImageClick?.(slide.src as string, slide.alt ?? "")}
                aria-label={slide.alt}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.src}
                  alt={slide.alt ?? ""}
                  className="h-auto w-full max-w-full object-contain"
                />
              </button>
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between gap-1 border-t border-current/20 pt-2 text-[8px] uppercase leading-tight tracking-[0.08em] sm:text-[10px] sm:tracking-[0.12em]">
        <button
          type="button"
          className="inline-flex h-11 w-8 shrink-0 items-center justify-center sm:w-11"
          aria-label={previousLabel}
          onClick={() => scrollBySlide(-1)}
        >
          ←
        </button>
        <span className="min-w-0 flex-1 text-center break-words">{label}</span>
        <button
          type="button"
          className="inline-flex h-11 w-8 shrink-0 items-center justify-center sm:w-11"
          aria-label={nextLabel}
          onClick={() => scrollBySlide(1)}
        >
          →
        </button>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-[11px] leading-snug text-white/70">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
