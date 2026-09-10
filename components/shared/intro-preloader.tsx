"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { greetings } from "@/data/greetings";
import { siteConfig } from "@/data/site";
import { EASE_APPLE } from "@/lib/motion";
import { useIntro } from "@/components/shared/intro-context";

const WORD_DURATION = 480;
const CROSSFADE_DURATION = 0.4;
const NAME_HOLD_DURATION = 650;
const EXIT_DURATION = 0.7;
const SESSION_KEY = "intro-shown";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function IntroPreloader() {
  const { setIntroComplete } = useIntro();
  const [visible, setVisible] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [showName, setShowName] = useState(false);

  useIsomorphicLayoutEffect(() => {
    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      // Storage unavailable (private mode, etc.) — treat as not shown yet.
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (alreadyShown || prefersReducedMotion) {
      setVisible(false);
      setIntroComplete(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // Ignore — nothing to persist if storage is unavailable.
      }
    }
  }, [setIntroComplete]);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let index = 0;
    const wordTimer = window.setInterval(() => {
      index += 1;
      if (index >= greetings.length) {
        window.clearInterval(wordTimer);
        setShowName(true);
        return;
      }
      setWordIndex(index);
    }, WORD_DURATION);

    const dismissTimer = window.setTimeout(() => {
      setVisible(false);
      setIntroComplete(true);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        // Ignore — nothing to persist if storage is unavailable.
      }
    }, greetings.length * WORD_DURATION + NAME_HOLD_DURATION);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearInterval(wordTimer);
      window.clearTimeout(dismissTimer);
    };
  }, [visible, setIntroComplete]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          id="intro-preloader"
          aria-hidden="true"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: EXIT_DURATION, ease: EASE_APPLE }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative flex min-h-14 items-center justify-center sm:min-h-16">
            <AnimatePresence>
              {showName ? (
                <motion.div
                  key="name"
                  initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: CROSSFADE_DURATION, ease: EASE_APPLE }}
                  className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 text-center"
                >
                  <span className="text-2xl text-muted-foreground sm:text-3xl">
                    Hi, I&apos;m
                  </span>
                  <span className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {siteConfig.name}
                  </span>
                </motion.div>
              ) : (
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 6, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -6, filter: "blur(6px)" }}
                  transition={{ duration: CROSSFADE_DURATION, ease: EASE_APPLE }}
                  className="absolute inset-0 flex items-center justify-center whitespace-nowrap text-4xl font-medium tracking-tight text-foreground sm:text-5xl"
                >
                  {greetings[wordIndex]}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
