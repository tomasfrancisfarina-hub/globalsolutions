import { cn } from "@/lib/utils";

/** Thin editorial rule — BCG / Stripe section rhythm */
export function SectionRule({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-border/60", className)} aria-hidden />;
}

/** Consistent luxury section vertical rhythm */
export const sectionPad = "py-28 md:py-40 lg:py-48 xl:py-56";
