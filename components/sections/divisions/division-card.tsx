import Link from "next/link";
import Image from "next/image";
import {
  getDivisionVisual,
  type DivisionCardVariant,
} from "@/config/visual-assets";
import { localizedPath } from "@/lib/i18n/config";
import type { DivisionSummary, Locale } from "@/types";
import { cn } from "@/lib/utils";

interface DivisionCardProps {
  division: DivisionSummary;
  locale: Locale;
  index?: number;
  variant?: DivisionCardVariant;
  className?: string;
}

const heights: Record<DivisionCardVariant, string> = {
  cinematic: "min-h-[min(52vh,440px)] sm:min-h-[min(60vh,560px)] lg:min-h-[min(82vh,760px)]",
  large: "min-h-[340px] sm:min-h-[420px] lg:min-h-[560px]",
  standard: "min-h-[300px] sm:min-h-[360px] lg:min-h-[480px]",
};

export function DivisionCard({
  division,
  locale,
  index = 0,
  variant = "large",
  className,
}: DivisionCardProps) {
  const viewLabel = locale === "es" ? "Ver división" : "View division";
  const visual = getDivisionVisual(division.slug);
  const number = String(index + 1).padStart(2, "0");
  const isAiVideoCard = division.slug === "artificial-intelligence";

  if (!visual) return null;

  const mediaClassName =
    "absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]";

  return (
    <Link
      href={localizedPath(`/divisions/${division.slug}`, locale)}
      className={cn("group block min-w-0", className)}
    >
      <article className={cn("relative overflow-hidden bg-ink", heights[variant])}>
        {isAiVideoCard ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={visual.alt[locale]}
            className={mediaClassName}
          >
            <source src="/videos/77a.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src={visual.src}
            alt={visual.alt[locale]}
            fill
            sizes={
              variant === "cinematic"
                ? "100vw"
                : "(max-width: 768px) 100vw, 50vw"
            }
            className={mediaClassName}
          />
        )}

        <div
          className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-transparent"
          aria-hidden
        />

        <span className="absolute left-6 top-6 font-mono text-[11px] tracking-[0.35em] text-white/35 md:left-10 md:top-10">
          {number}
        </span>

        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-12 lg:p-14">
          <h3
            className={cn(
              "max-w-2xl font-normal tracking-[-0.025em] text-white",
              variant === "cinematic"
                ? "text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
                : "text-xl sm:text-2xl md:text-3xl",
            )}
          >
            {division.name}
          </h3>
          <p
            className={cn(
              "mt-3 max-w-lg leading-relaxed text-white/55 sm:mt-4",
              variant === "cinematic" ? "text-[15px] sm:text-base md:text-lg" : "text-sm sm:text-[15px] md:text-base",
            )}
          >
            {division.tagline}
          </p>
          <span className="mt-6 inline-flex items-center gap-3 text-[13px] font-medium tracking-wide text-white/70 transition-colors duration-500 group-hover:text-white sm:mt-8">
            {viewLabel}
            <span
              className="transition-transform duration-500 group-hover:translate-x-1.5"
              aria-hidden
            >
              →
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
}
