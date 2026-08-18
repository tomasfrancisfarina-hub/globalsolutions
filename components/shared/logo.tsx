import Image from "next/image";
import Link from "next/link";
import { localizedPath } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import type { Locale } from "@/types";

interface LogoProps {
  locale: Locale;
  className?: string;
  /** Kept for API compatibility; logo asset is identical on all backgrounds. */
  variant?: "default" | "light";
  /** Use priority only for the primary header mark. */
  priority?: boolean;
}

/** Tight-cropped logo ratio ≈ 2.67:1 (928×347). */
const LOGO_WIDTH = 160;
const LOGO_HEIGHT = 60;

export function Logo({ locale, className, priority = false }: LogoProps) {
  return (
    <Link
      href={localizedPath("/", locale)}
      className={cn("inline-flex shrink-0 items-center self-center", className)}
      aria-label="Global Solutions"
    >
      <Image
        src="/global-solutions-logo.png"
        alt="Global Solutions"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        className="h-auto w-[118px] object-contain object-left sm:w-[135px] md:w-[155px] lg:w-[160px]"
        sizes="(max-width: 640px) 118px, (max-width: 768px) 135px, (max-width: 1024px) 155px, 160px"
      />
    </Link>
  );
}
