export const locales = ["en", "fr", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

type LocaleConfig = {
  label: string;
  shortLabel: string;
  dir: "ltr" | "rtl";
  ogLocale: string;
};

export const localeConfig: Record<Locale, LocaleConfig> = {
  en: {
    label: "English",
    shortLabel: "EN",
    dir: "ltr",
    ogLocale: "en_US",
  },
  fr: {
    label: "Français",
    shortLabel: "FR",
    dir: "ltr",
    ogLocale: "fr_FR",
  },
  ar: {
    label: "العربية",
    shortLabel: "AR",
    dir: "rtl",
    ogLocale: "ar_MR",
  },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return localeConfig[locale].dir;
}
