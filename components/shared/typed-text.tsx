"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TypedTextProps {
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
  start?: boolean;
}

export function TypedText({
  text,
  className,
  speed = 45,
  startDelay = 300,
  start = true,
}: TypedTextProps) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setCount(text.length);
      setDone(true);
      return;
    }

    let i = 0;
    let interval: number | undefined;

    const startTimeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) {
          window.clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(startTimeout);
      if (interval) window.clearInterval(interval);
    };
  }, [text, speed, startDelay, start]);

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span
          className={cn(
            "ml-0.5 inline-block h-[0.9em] w-[2px] translate-y-[0.1em] bg-current align-middle",
            done ? "opacity-0 transition-opacity duration-500" : "animate-pulse opacity-100"
          )}
        />
      </span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
