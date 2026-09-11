"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";
import { StaggerItem } from "@/components/shared/reveal";
import { AvatarInitials } from "@/components/shared/avatar-initials";
import { TypedText } from "@/components/shared/typed-text";
import { Magnetic } from "@/components/shared/magnetic-button";
import { GithubIcon, GitlabIcon, LinkedinIcon } from "@/components/shared/icons";
import { AnimatedBackground } from "@/components/shared/animated-background";
import { useIntro } from "@/components/shared/intro-context";
import { siteConfig } from "@/data/site";
import { skills } from "@/data/skills";
import { staggerContainer } from "@/lib/motion";
import { ContactTerminal } from "@/features/contact/contact-terminal";

export function ProfileCard() {
  const { introComplete } = useIntro();

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
      <AnimatedBackground />

      <Container className="relative z-10 max-w-2xl">
        <motion.div
          variants={staggerContainer(0.09)}
          initial="hidden"
          animate={introComplete ? "show" : "hidden"}
        >
          <StaggerItem className="flex items-center gap-4">
            <AvatarInitials initials={siteConfig.avatarInitials} />
            <div>
              <h1 className="text-2xl font-semibold tracking-tight">
                {siteConfig.name}
              </h1>
              <TypedText
                text={siteConfig.role}
                speed={35}
                startDelay={150}
                start={introComplete}
                className="font-mono text-sm text-primary"
              />
            </div>
          </StaggerItem>

          <StaggerItem className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {siteConfig.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </StaggerItem>

          <StaggerItem className="mt-5 flex flex-wrap gap-2">
            {skills.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/70 bg-card/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </StaggerItem>

          <StaggerItem className="mt-8 flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <Magnetic>
                <Button asChild size="sm" className="rounded-md">
                  <a href={siteConfig.resumeUrl} download>
                    Download Resume
                    <Download className="size-3.5" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild size="sm" variant="outline" className="rounded-md border-border/80">
                  <a href={`mailto:${siteConfig.email}`}>Send an email</a>
                </Button>
              </Magnetic>
            </div>

            <div className="flex items-center gap-1">
              <Magnetic>
                <Button asChild size="icon" variant="ghost" className="size-9 rounded-md">
                  <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubIcon className="size-4" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild size="icon" variant="ghost" className="size-9 rounded-md">
                  <a href={siteConfig.gitlab} target="_blank" rel="noreferrer" aria-label="GitLab">
                    <GitlabIcon className="size-4" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button asChild size="icon" variant="ghost" className="size-9 rounded-md">
                  <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <LinkedinIcon className="size-4" />
                  </a>
                </Button>
              </Magnetic>
            </div>
          </StaggerItem>

          <StaggerItem className="mt-5">
            <ContactTerminal />
          </StaggerItem>
        </motion.div>
      </Container>
    </section>
  );
}
