import type { Variants } from "framer-motion";

/**
 * Expo-out easing — the "premium decelerate" curve used across
 * Linear, Vercel, and Apple's own marketing sites. Fast start, long soft landing.
 */
export const EASE_APPLE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_APPLE },
  },
};

/**
 * Same motion as fadeUp with a soft blur-to-sharp finish. Reserved for
 * low-frequency reveals (section headings, prose blocks) — filter animations
 * are pricier than opacity/transform, so this is intentionally not used
 * on high-count lists (badges, stagger items).
 */
export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE_APPLE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_APPLE },
  },
};

export const staggerContainer = (
  staggerChildren = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_APPLE },
  },
};

export const viewportOnce = { once: true, margin: "-80px" };
