import { getLocale, getTranslations } from "next-intl/server";

import { LinkButton } from "@/components/link-button";

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  const locale = await getLocale();

  return (
    <section className="page-container flex min-h-[60vh] flex-col items-start justify-center py-20 sm:py-28">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-strong rtl:tracking-normal">
        {t("code")}
      </p>
      <h1 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl">
        {t("title")}
      </h1>
      <p className="mt-5 max-w-lg text-base leading-7 text-muted">
        {t("description")}
      </p>
      <LinkButton href={`/${locale}`} className="mt-8">
        {t("backHome")}
      </LinkButton>
    </section>
  );
}
