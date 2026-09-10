import Link from "next/link";
import { siteConfig, socialLinks } from "@/data/site";
import { Container } from "@/components/shared/container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {year} {siteConfig.name}. Built with Next.js.
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <link.icon className="size-4" />
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
