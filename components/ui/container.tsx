import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-5xl",
  wide: "max-w-7xl",
};

export function Container({ className, size = "default", children, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full min-w-0 px-5 sm:px-8 lg:px-12", sizes[size], className)} {...props}>
      {children}
    </div>
  );
}
