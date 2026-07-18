"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { animation } from "@/config/theme";
import { cn } from "@/lib/utils";

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function FadeIn({ className, delay = 0, children, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={animation.viewport}
      transition={{ duration: animation.duration.slow / 1000, delay, ease: animation.easing }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
