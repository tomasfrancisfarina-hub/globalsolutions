import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary:
    "rounded-none bg-foreground text-background hover:bg-foreground/88 active:scale-[0.99]",
  secondary:
    "rounded-none border-0 bg-transparent px-0 text-foreground underline-offset-[6px] hover:underline",
  ghost: "rounded-none hover:opacity-60",
  link: "rounded-none underline-offset-[6px] hover:underline",
};

const sizes = {
  sm: "px-5 py-2.5 text-[13px] tracking-wide",
  md: "px-7 py-3.5 text-sm tracking-wide",
  lg: "px-9 py-4 text-sm tracking-wide",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-500 ease-out",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground",
          "disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
