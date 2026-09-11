"use client";

import { useState, type FormEvent, type KeyboardEvent } from "react";
import { Container } from "@/components/shared/container";
import { ListSectionHeading } from "@/components/shared/list-section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic-button";
import { siteConfig } from "@/data/site";

const fieldClassName =
  "w-full rounded-md border border-border/70 bg-card/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors duration-200 ease-apple focus:border-primary/50 focus:outline-none";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const subject = `Portfolio message from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage();
  }

  function handleMessageKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <section id="contact" className="py-16">
      <Container className="max-w-2xl">
        <ListSectionHeading>contact.</ListSectionHeading>
        <Reveal delay={0.05} className="mt-2 text-sm text-muted-foreground">
          Have a project in mind or just want to say hi? Send me a message below.
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="John Doe"
                value={name}
                onChange={(event) => setName(event.target.value)}
                aria-label="Your name"
                className={fieldClassName}
              />
              <input
                type="email"
                required
                placeholder="john@doe.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                aria-label="Your email"
                className={fieldClassName}
              />
            </div>
            <textarea
              required
              rows={4}
              placeholder="Enter your message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={handleMessageKeyDown}
              aria-label="Your message"
              className={`${fieldClassName} resize-none`}
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Magnetic>
                <Button type="submit" size="sm" className="rounded-md">
                  Send message
                </Button>
              </Magnetic>
              <span className="text-xs text-muted-foreground">
                or{" "}
                <kbd className="rounded border border-border/70 bg-card/60 px-1.5 py-0.5 font-mono text-[10px]">
                  ⏎ Enter
                </kbd>{" "}
                to send
              </span>
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
