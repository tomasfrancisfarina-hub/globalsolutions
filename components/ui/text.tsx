import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "lead" | "caption";
}

const variants = {
  body: "text-base md:text-[17px] font-normal leading-[1.75] text-muted",
  lead: "text-base sm:text-lg md:text-xl font-normal leading-[1.7] tracking-[-0.01em] text-muted",
  caption: "text-[13px] font-normal leading-relaxed text-subtle",
};

export function Text({ variant = "body", className, children, ...props }: TextProps) {
  return (
    <p className={cn(variants[variant], className)} {...props}>
      {children}
    </p>
  );
}
