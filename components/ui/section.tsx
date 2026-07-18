import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "default" | "compact" | "hero";
}

const spacings = {
  compact: "py-24 md:py-32",
  default: "py-32 md:py-48",
  hero: "py-32 md:py-48 lg:py-56",
};

export function Section({ className, spacing = "default", children, ...props }: SectionProps) {
  return (
    <section className={cn(spacings[spacing], className)} {...props}>
      {children}
    </section>
  );
}
