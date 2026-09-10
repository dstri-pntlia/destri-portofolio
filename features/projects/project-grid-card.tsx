import type { ReactNode } from "react";
import { ExternalLink } from "lucide-react";
import { StaggerItem } from "@/components/shared/reveal";
import type { Project } from "@/types";

const cardClassName =
  "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/40 p-6 transition-colors duration-300 ease-apple hover:border-primary/40";

function CardShell({ url, children }: { url?: string; children: ReactNode }) {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className={cardClassName}>
        {children}
      </a>
    );
  }
  return <div className={cardClassName}>{children}</div>;
}

export function ProjectGridCard({ project, index }: { project: Project; index: number }) {
  return (
    <StaggerItem>
      <CardShell url={project.url}>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-2 -top-4 select-none font-mono text-[5rem] font-semibold leading-none text-foreground/[0.04] transition-colors duration-300 ease-apple group-hover:text-primary/[0.08]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary/70 to-transparent transition-transform duration-500 ease-apple group-hover:scale-x-100" />

        <div className="relative flex items-start justify-between gap-3">
          <p className="font-mono text-xs tracking-wide text-primary">
            {project.category}
          </p>
          {project.url ? (
            <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors duration-300 ease-apple group-hover:text-primary" />
          ) : null}
        </div>
        <h3 className="relative mt-2 text-lg font-semibold tracking-tight">
          {project.title}
        </h3>
        <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="relative mt-4 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border/70 px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardShell>
    </StaggerItem>
  );
}
