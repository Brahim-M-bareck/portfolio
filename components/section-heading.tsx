import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  anchorId?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "default" | "inverse";
  eyebrowTone?: "primary" | "secondary";
  className?: string;
};

export function SectionHeading({
  id,
  anchorId,
  eyebrow,
  title,
  intro,
  tone = "default",
  eyebrowTone = "primary",
  className,
}: SectionHeadingProps) {
  const isInverse = tone === "inverse";
  const isSecondaryEyebrow = eyebrowTone === "secondary";

  return (
    <div
      id={anchorId}
      className={cn("max-w-3xl scroll-mt-20 sm:scroll-mt-24", className)}
    >
      <p
        className={cn(
          "mb-4 flex items-center gap-3 font-semibold uppercase tracking-[0.22em] rtl:tracking-normal",
          isSecondaryEyebrow ? "text-xs" : "text-[0.7rem]",
          isInverse
            ? "text-panel-foreground/80"
            : isSecondaryEyebrow
              ? "text-secondary"
              : "text-primary-strong",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "h-px w-8",
            isInverse
              ? "bg-panel-foreground/40"
              : isSecondaryEyebrow
                ? "bg-secondary/50"
                : "bg-primary/50",
          )}
        />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "font-display text-balance text-3xl font-medium leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl",
          isInverse ? "text-panel-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-pretty text-base leading-7 sm:text-lg sm:leading-8",
            isInverse ? "text-panel-foreground/80" : "text-muted",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
