"use client";

import { motion } from "framer-motion";
import { animation } from "@/config/theme";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface StaggerContainerProps {
  className?: string;
  staggerDelay?: number;
  children: ReactNode;
}

export function StaggerContainer({
  className,
  staggerDelay = 0.06,
  children,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={animation.viewport}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 8 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: animation.duration.slow / 1000, ease: animation.easing },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
