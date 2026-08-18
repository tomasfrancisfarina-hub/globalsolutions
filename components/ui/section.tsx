import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "default" | "compact" | "hero";
}

const spacings = {
  compact: "py-14 sm:py-20 md:py-32",
  default: "py-16 sm:py-24 md:py-40 lg:py-48",
  hero: "py-16 sm:py-24 md:py-40 lg:py-56",
};

export function Section({ className, spacing = "default", children, ...props }: SectionProps) {
  return (
    <section className={cn(spacings[spacing], className)} {...props}>
      {children}
    </section>
  );
}
