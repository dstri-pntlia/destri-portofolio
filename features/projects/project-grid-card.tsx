import type { ReactNode } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { StaggerItem } from "@/components/shared/reveal";
import type { Project } from "@/types";

const cardClassName =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/40 transition-colors duration-300 ease-apple hover:border-primary/40";

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

export function ProjectGridCard({ project }: { project: Project }) {
  const CoverIcon = project.coverIcon;

  return (
    <StaggerItem>
      <CardShell url={project.url}>
        <div className="relative aspect-video w-full overflow-hidden border-b border-border/70 bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 ease-apple group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/15 via-card to-background">
              {CoverIcon ? <CoverIcon className="size-10 text-primary/70" /> : null}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <p className="font-mono text-xs tracking-wide text-primary">
              {project.category}
            </p>
            {project.url ? (
              <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-colors duration-300 ease-apple group-hover:text-primary" />
            ) : null}
          </div>
          <h3 className="mt-2 text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border/70 px-2 py-0.5 text-[11px] text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </CardShell>
    </StaggerItem>
  );
}
