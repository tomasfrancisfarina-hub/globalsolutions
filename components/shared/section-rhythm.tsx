import { cn } from "@/lib/utils";

/** Thin editorial rule — BCG / Stripe section rhythm */
export function SectionRule({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-border/60", className)} aria-hidden />;
}

/** Consistent luxury section vertical rhythm */
export const sectionPad = "py-16 sm:py-24 md:py-36 lg:py-48 xl:py-56";
