"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { animation } from "@/config/theme";
import { cn } from "@/lib/utils";

interface SlideUpProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

export function SlideUp({ className, delay = 0, children, ...props }: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={animation.viewport}
      transition={{ duration: animation.duration.slow / 1000, delay, ease: animation.easing }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
