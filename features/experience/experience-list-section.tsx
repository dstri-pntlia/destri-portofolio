import { Container } from "@/components/shared/container";
import { ListSectionHeading } from "@/components/shared/list-section-heading";
import { Stagger, StaggerItem } from "@/components/shared/reveal";
import { experience } from "@/data/experience";

export function ExperienceListSection() {
  return (
    <section id="experience" className="py-16">
      <Container className="max-w-2xl">
        <ListSectionHeading>experience.</ListSectionHeading>

        <Stagger
          staggerChildren={0.06}
          className="mt-6 divide-y divide-border/60 border-t border-border/60"
        >
          {experience.map((job) => (
            <StaggerItem key={job.company} className="py-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-medium">{job.role}</h3>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {job.duration}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                at,{" "}
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="text-foreground">{job.company}</span>
                )}
                {job.location ? ` · ${job.location}` : null}
              </p>
              {job.achievements.length > 0 ? (
                <ul className="mt-3 space-y-1.5">
                  {job.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="relative pl-3.5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-muted-foreground/50"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              ) : null}
              {job.tech.length > 0 ? (
                <p className="mt-3 font-mono text-xs text-muted-foreground/70">
                  {job.tech.join(" / ")}
                </p>
              ) : null}
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
