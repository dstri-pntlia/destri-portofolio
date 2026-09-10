"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { ListSectionHeading } from "@/components/shared/list-section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { ViewToggle, type ViewMode } from "@/components/shared/view-toggle";
import { projects } from "@/data/projects";
import { EASE_APPLE } from "@/lib/motion";
import { ProjectGridCard } from "@/features/projects/project-grid-card";

export function ProjectsSection() {
  const [view, setView] = useState<ViewMode>("list");

  return (
    <section id="projects" className="py-16">
      <Container className="max-w-2xl">
        <div className="flex items-center justify-between gap-4">
          <ListSectionHeading>projects.</ListSectionHeading>
          <ViewToggle value={view} onChange={setView} />
        </div>

        <AnimatePresence mode="wait">
          {view === "list" ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE_APPLE }}
            >
              <Stagger
                staggerChildren={0.06}
                className="mt-6 divide-y divide-border/60 border-t border-border/60"
              >
                {projects.map((project) => {
                  const content = (
                    <>
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-2">
                          <h3 className="font-medium transition-colors group-hover:text-primary">
                            {project.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-xs text-primary">{project.category}</p>
                        <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                          {project.description}
                        </p>
                        <p className="mt-2.5 font-mono text-xs text-muted-foreground/70">
                          {project.tech.join(" / ")}
                        </p>
                      </div>
                      {project.url ? (
                        <ExternalLink className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                      ) : null}
                    </>
                  );

                  return (
                    <StaggerItem key={project.title}>
                      {project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group flex items-start justify-between gap-4 py-6"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="group flex items-start justify-between gap-4 py-6">
                          {content}
                        </div>
                      )}
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE_APPLE }}
            >
              <Stagger staggerChildren={0.08} className="mt-6 grid gap-4 sm:grid-cols-2">
                {projects.map((project, index) => (
                  <ProjectGridCard key={project.title} project={project} index={index} />
                ))}
              </Stagger>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
