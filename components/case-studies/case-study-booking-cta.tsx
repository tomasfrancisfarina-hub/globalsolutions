import { siteConfig } from "@/config/site";
import { getCaseStudyBookingCopy } from "@/content/shared/case-study-booking";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

interface CaseStudyBookingCtaProps {
  locale: Locale;
  variant?: "light" | "dark";
  compact?: boolean;
  className?: string;
}

export function CaseStudyBookingCta({
  locale,
  variant = "light",
  compact = false,
  className,
}: CaseStudyBookingCtaProps) {
  const copy = getCaseStudyBookingCopy(locale);
  const dark = variant === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-6 border-t pt-8 sm:flex-row sm:items-end sm:justify-between",
        dark ? "border-white/15" : "border-border",
        className,
      )}
    >
      <p
        className={cn(
          "max-w-2xl font-medium tracking-tight",
          compact
            ? "text-base leading-relaxed sm:text-lg"
            : "text-[clamp(1.5rem,3vw,2.75rem)] leading-tight",
          dark ? "text-white" : "text-foreground",
        )}
      >
        {copy.description}
      </p>
      <a
        href={siteConfig.contact.calUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm transition-colors sm:w-auto",
          dark
            ? "border-white/35 text-white hover:border-white hover:bg-white hover:text-[#0b0b0b]"
            : "border-border text-foreground hover:border-foreground hover:bg-foreground hover:text-background",
        )}
      >
        {copy.label}
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}
