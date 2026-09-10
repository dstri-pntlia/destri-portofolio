import Link from "next/link";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70svh] flex-col items-center justify-center py-32 text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        This route doesn&apos;t exist.
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for was moved, renamed, or never built.
      </p>
      <Button asChild className="mt-8 rounded-full">
        <Link href="/">Back to home</Link>
      </Button>
    </Container>
  );
}
