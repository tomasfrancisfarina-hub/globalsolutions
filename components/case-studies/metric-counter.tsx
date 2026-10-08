"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface MetricCounterProps {
  value: number;
  display?: string;
  label: string;
}

/** Counts up once when entering view; ends on the exact display value. */
export function MetricCounter({ value, display, label }: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduceMotion = useReducedMotion();
  const [done, setDone] = useState(Boolean(reduceMotion));
  const [shown, setShown] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setShown(value);
      setDone(true);
      return;
    }

    const duration = 900;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setShown(Math.round(value * eased));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setShown(value);
        setDone(true);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  const text =
    display && done
      ? display
      : String(shown).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <div ref={ref} className="min-w-0">
      <p className="text-[1.55rem] font-medium leading-none tracking-normal text-foreground sm:text-4xl lg:text-5xl">
        {text}
      </p>
      <p className="mt-2 text-[12px] leading-snug text-muted sm:mt-3 sm:text-sm">
        {label}
      </p>
    </div>
  );
}
