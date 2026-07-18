import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
}

export function Card({ className, interactive = false, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background p-8 md:p-10",
        interactive && "transition-colors duration-300 hover:border-border-hover",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
