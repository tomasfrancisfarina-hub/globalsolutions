import { cn } from "@/lib/utils";
import { getUiCopy } from "@/lib/i18n/ui-copy";
import type { ContentStatus, Locale } from "@/types";

interface PlaceholderBadgeProps {
  status?: ContentStatus;
  className?: string;
  locale?: Locale;
}

/** Visible marker for temporary content — remove when status is 'published' */
export function PlaceholderBadge({ status, className, locale = "en" }: PlaceholderBadgeProps) {
  if (status !== "placeholder") return null;

  const label = getUiCopy(locale).placeholderBadge;

  return (
    <span
      className={cn(
        "inline-block rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-subtle",
        className,
      )}
    >
      {label}
    </span>
  );
}
