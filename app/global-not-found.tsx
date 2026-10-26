import type { Metadata, Viewport } from "next";
import { cacheLife } from "next/cache";
import { headers } from "next/headers";

import "./globals.css";

import { LinkButton } from "@/components/link-button";
import { getDirection, isLocale, localeConfig, type Locale } from "@/config/locales";
import { siteConfig } from "@/config/site";
import { viewportTheme } from "@/config/theme";
import { routing } from "@/i18n/routing";
import { fontVariables } from "@/lib/fonts";

import ar from "@/messages/ar.json";
import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

export const instant = false;

const messages = { en, fr, ar } as const;

const themeScript = `(function(){try{var t=localStorage.getItem("theme")||"system";var d=t==="dark"||(t==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.add(d?"dark":"light");r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

async function getRequestLocale(): Promise<Locale> {
  const headersList = await headers();
  const value = headersList.get("x-next-intl-locale") ?? "";

  return isLocale(value) ? value : routing.defaultLocale;
}

async function getCurrentYear() {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const t = messages[locale].NotFound;

  return {
    metadataBase: new URL(siteConfig.url),
    title: t.metaTitle,
    description: t.description,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      type: "website",
      title: t.metaTitle,
      description: t.description,
      locale: localeConfig[locale].ogLocale,
    },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: viewportTheme.light },
    { media: "(prefers-color-scheme: dark)", color: viewportTheme.dark },
  ],
};

export default async function GlobalNotFound() {
  const locale = await getRequestLocale();
  const t = messages[locale].NotFound;
  const common = messages[locale].Common;
  const footer = messages[locale].Footer;
  const year = await getCurrentYear();

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      suppressHydrationWarning
      className={`${fontVariables} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-background"
        >
          {common.skipToContent}
        </a>

        <header className="page-container flex h-16 items-center sm:h-20">
          <a
            href={`/${locale}`}
            className="group inline-flex items-center gap-3"
          >
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
            <span className="sr-only">{common.home}</span>
          </a>
        </header>

        <main id="main-content" className="hero-wash flex flex-1 items-center">
          <section className="page-container w-full py-16 sm:py-24">
            <div className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-strong rtl:tracking-normal">
                {t.code}
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
                {t.title}
              </h1>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted">
                {t.description}
              </p>
              <LinkButton href={`/${locale}`} className="mt-8">
                {t.backHome}
              </LinkButton>
            </div>
          </section>
        </main>

        <footer className="border-t border-border bg-surface/60">
          <div className="page-container flex flex-col gap-2 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {siteConfig.name}. {footer.rights}
            </p>
            <p>{footer.builtWith}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
