import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type TagProps = {
  children: ReactNode;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium leading-5 text-muted transition-colors group-hover:border-border-strong/60 group-hover:text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
