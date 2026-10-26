import { getLocale, getTranslations } from "next-intl/server";

import { navItems } from "@/config/content";

import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

export async function Header() {
  const t = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");
  const locale = await getLocale();

  const items = navItems.map((id) => ({ id, label: t(id) }));

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="page-container flex h-16 items-center justify-between gap-4 sm:h-20">
        <Logo label={tCommon("home")} />

        <nav aria-label={tCommon("primaryNav")} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitcher
              currentLocale={locale}
              label={tCommon("language")}
            />
          </div>
          <ThemeToggle label={tCommon("toggleTheme")} />
          <MobileMenu
            items={items}
            currentLocale={locale}
            labels={{
              open: tCommon("openMenu"),
              close: tCommon("closeMenu"),
              menu: tCommon("menu"),
              language: tCommon("language"),
            }}
          />
        </div>
      </div>
    </header>
  );
}
