import { cn } from "@/lib/utils";

export function AvatarInitials({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex size-14 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-mono text-lg font-medium text-primary",
        className
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
