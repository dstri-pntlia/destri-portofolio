"use client";

import { useEffect, useRef } from "react";

const SIZE = 560;

export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const el = ref.current;
    if (!el || !supportsFinePointer || prefersReducedMotion) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    function apply() {
      frame = 0;
      if (!el) return;
      el.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;
    }

    function onMove(event: MouseEvent) {
      x = event.clientX;
      y = event.clientY;
      if (el && el.style.opacity !== "1") el.style.opacity = "1";
      if (!frame) frame = requestAnimationFrame(apply);
    }

    function onLeave() {
      if (el) el.style.opacity = "0";
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 opacity-0 transition-opacity duration-700 will-change-transform"
      style={{
        width: SIZE,
        height: SIZE,
        background:
          "radial-gradient(circle, color-mix(in oklch, var(--primary) 12%, transparent) 0%, color-mix(in oklch, var(--primary) 4%, transparent) 45%, transparent 70%)",
        transform: "translate3d(-9999px, -9999px, 0)",
      }}
    />
  );
}
