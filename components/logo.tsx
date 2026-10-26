import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  label: string;
  className?: string;
};

export function Logo({ label, className }: LogoProps) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="grid size-10 shrink-0 place-items-center rounded-xl bg-foreground font-display text-xl font-semibold leading-none text-background transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
      >
        B
      </span>
      <span
        aria-hidden="true"
        className="hidden font-display text-xl font-semibold tracking-tight text-foreground sm:inline"
      >
        {siteConfig.name}
        <span className="text-primary">.</span>
      </span>
      <span className="sr-only">{label}</span>
    </a>
  );
}
