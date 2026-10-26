import { localeConfig, locales, type Locale } from "@/config/locales";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  return (
    <nav
      aria-label={label}
      className="flex items-center gap-0.5 rounded-full border border-border bg-surface p-1"
    >
      {locales.map((locale) => {
        const isCurrent = locale === currentLocale;

        return (
          <a
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            lang={locale}
            aria-current={isCurrent ? "page" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1 text-[0.68rem] font-semibold tracking-wide transition-colors",
              isCurrent
                ? "bg-foreground text-background"
                : "text-muted hover:text-foreground",
            )}
          >
            {localeConfig[locale].shortLabel}
            <span className="sr-only"> — {localeConfig[locale].label}</span>
          </a>
        );
      })}
    </nav>
  );
}
