import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import * as rootParams from "next/root-params";

import type { Locale } from "@/config/locales";

import { routing } from "./routing";

const loadMessages: Record<Locale, () => Promise<Record<string, unknown>>> = {
  en: () => import("../messages/en.json").then((module) => module.default),
  fr: () => import("../messages/fr.json").then((module) => module.default),
  ar: () => import("../messages/ar.json").then((module) => module.default),
};

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    const paramValue = await rootParams.locale();

    if (!hasLocale(routing.locales, paramValue)) {
      notFound();
    }

    locale = paramValue;
  }

  return {
    locale,
    messages: await loadMessages[locale](),
  };
});
