"use client";

import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

export type ViewMode = "list" | "grid";

export function ViewToggle({
  value,
  onChange,
}: {
  value: ViewMode;
  onChange: (value: ViewMode) => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-md border border-border/70 p-1">
      <button
        type="button"
        onClick={() => onChange("list")}
        aria-label="List view"
        aria-pressed={value === "list"}
        className={cn(
          "flex size-7 items-center justify-center rounded transition-colors duration-200 ease-apple",
          value === "list"
            ? "bg-accent text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <List className="size-4" />
      </button>
      <button
        type="button"
        onClick={() => onChange("grid")}
        aria-label="Grid view"
        aria-pressed={value === "grid"}
        className={cn(
          "flex size-7 items-center justify-center rounded transition-colors duration-200 ease-apple",
          value === "grid"
            ? "bg-accent text-foreground"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        <LayoutGrid className="size-4" />
      </button>
    </div>
  );
}
