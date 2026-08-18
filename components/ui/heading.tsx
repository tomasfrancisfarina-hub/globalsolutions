import { cn } from "@/lib/utils";
import { createElement, type HTMLAttributes } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "hero" | "h2" | "h3";
}

const sizes = {
  hero: "text-display font-normal",
  h2: "text-display-sm font-normal",
  h3: "text-lg sm:text-xl md:text-2xl font-normal tracking-[-0.02em]",
};

export function Heading({ as = "h2", size = "h2", className, children, ...props }: HeadingProps) {
  return createElement(
    as,
    { className: cn(sizes[size], className), ...props },
    children,
  );
}
