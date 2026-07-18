import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type EyebrowProps = HTMLAttributes<HTMLParagraphElement>;

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[11px] font-medium uppercase tracking-[0.22em] text-subtle",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
