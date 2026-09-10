import { Reveal } from "@/components/shared/reveal";

export function ListSectionHeading({ children }: { children: string }) {
  return (
    <Reveal>
      <h2 className="font-serif text-2xl italic text-foreground">{children}</h2>
    </Reveal>
  );
}
