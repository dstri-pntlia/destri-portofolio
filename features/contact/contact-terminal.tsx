"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { siteConfig } from "@/data/site";

const COMMAND = "npx contact-destri";

export function ContactTerminal() {
  const [status, setStatus] = useState<"idle" | "running" | "done">("idle");
  const [copied, setCopied] = useState(false);

  function runCommand() {
    if (status !== "idle") return;
    setStatus("running");
    window.setTimeout(() => setStatus("done"), 900);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — no-op.
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border/70 bg-[#0a0a0a] font-mono text-sm shadow-2xl shadow-black/40">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f56]" />
        <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="size-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-xs text-white/40">zsh — contact</span>
      </div>

      <button
        type="button"
        onClick={runCommand}
        className="block w-full px-5 py-6 text-left"
        aria-label="Run contact command"
      >
        <div className="flex items-center gap-2 text-white/80">
          <span className="text-[#27c93f]">destri@dev</span>
          <span className="text-white/40">~</span>
          <span className="text-white/40">$</span>
          <span>
            {status === "idle" ? (
              <>
                {COMMAND}
                <motion.span
                  className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-white/70"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />
              </>
            ) : (
              COMMAND
            )}
          </span>
        </div>

        <AnimatePresence>
          {status !== "idle" ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-3 space-y-2 text-white/60"
            >
              <p>Resolving contact package...</p>
              {status === "done" ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-wrap items-center gap-3 pt-1"
                >
                  <span className="text-white">
                    <span className="text-primary">email:</span> {siteConfig.email}
                  </span>
                  <span
                    role="button"
                    tabIndex={0}
                    onClick={(e) => {
                      e.stopPropagation();
                      copyEmail();
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.stopPropagation();
                        copyEmail();
                      }
                    }}
                    className="inline-flex items-center gap-1.5 rounded-md border border-white/15 px-2.5 py-1 text-xs text-white/70 transition-colors hover:border-primary/50 hover:text-white"
                  >
                    {copied ? (
                      <Check className="size-3" />
                    ) : (
                      <Copy className="size-3" />
                    )}
                    {copied ? "Copied" : "Copy"}
                  </span>
                </motion.div>
              ) : null}
            </motion.div>
          ) : (
            <p className="mt-3 text-xs text-white/30">
              Click to run — reveals my email.
            </p>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
