import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface CustomLinkProps extends ComponentProps<typeof Link> {
  external?: boolean;
}

export function CustomLink({ className, external, children, ...props }: CustomLinkProps) {
  const classes = cn("transition-opacity duration-150 hover:opacity-60", className);

  if (external) {
    return (
      <a className={classes} target="_blank" rel="noopener noreferrer" {...(props as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  );
}
