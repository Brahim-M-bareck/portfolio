import type { AnchorHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
};

const variantClasses = {
  primary:
    "border border-primary bg-primary text-primary-foreground hover:border-primary-hover hover:bg-primary-hover",
  secondary:
    "border border-border-strong text-foreground hover:bg-surface",
} as const;

export function LinkButton({
  variant = "primary",
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
