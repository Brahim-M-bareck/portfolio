import type { Metadata, Viewport } from "next";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import "../globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { getDirection, isLocale, localeConfig } from "@/config/locales";
import { siteConfig } from "@/config/site";
import { viewportTheme } from "@/config/theme";
import { routing } from "@/i18n/routing";
import { fontVariables } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Metadata" });

  const languages: Record<string, string> = {
    ...Object.fromEntries(routing.locales.map((item) => [item, `/${item}`])),
    "x-default": `/${routing.defaultLocale}`,
  };

  return {
    metadataBase: new URL(siteConfig.url),
    title: t("title"),
    description: t("description"),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    alternates: {
      canonical: `/${locale}`,
      languages,
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: siteConfig.name,
      title: t("title"),
      description: t("description"),
      locale: localeConfig[locale].ogLocale,
      alternateLocale: routing.locales
        .filter((item) => item !== locale)
        .map((item) => localeConfig[item].ogLocale),
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: t("imageAlt"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`/${locale}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
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

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const tCommon = await getTranslations({ locale, namespace: "Common" });

  return (
    <html
      lang={locale}
      dir={getDirection(locale)}
      suppressHydrationWarning
      className={cn(
        fontVariables,
        "h-full",
      )}
    >
      <body
        id="top"
        className="flex min-h-full flex-col bg-background text-foreground antialiased"
      >
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-background"
          >
            {tCommon("skipToContent")}
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
