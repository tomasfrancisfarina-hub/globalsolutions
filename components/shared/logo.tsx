import Link from "next/link";
import { localizedPath } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

interface LogoProps {
  locale: Locale;
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ locale, className, variant = "default" }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link
      href={localizedPath("/", locale)}
      className={cn("group inline-flex items-center gap-3.5", className)}
    >
      <span
        className={cn(
          "flex h-7 w-7 items-center justify-center text-[9px] font-semibold tracking-[0.08em]",
          isLight ? "bg-white text-ink" : "bg-foreground text-background",
        )}
        aria-hidden
      >
        GS
      </span>
      <span
        className={cn(
          "text-[13px] font-medium tracking-[-0.01em]",
          isLight ? "text-white" : "text-foreground",
        )}
      >
        Global Solutions
      </span>
    </Link>
  );
}
