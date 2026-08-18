import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type EyebrowProps = HTMLAttributes<HTMLParagraphElement>;

export function Eyebrow({ className, children, ...props }: EyebrowProps) {
  return (
    <p
      className={cn(
        "max-w-full text-[11px] font-medium uppercase tracking-[0.14em] text-subtle sm:tracking-[0.22em]",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
