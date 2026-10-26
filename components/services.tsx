import { getTranslations } from "next-intl/server";

import { services } from "@/config/content";

import {
  ArrowRightIcon,
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  SmartphoneIcon,
  WrenchIcon,
} from "./icons";
import { SectionHeading } from "./section-heading";

const serviceIcons = {
  web: CodeIcon,
  mobile: SmartphoneIcon,
  backend: ServerIcon,
  database: DatabaseIcon,
  engineering: WrenchIcon,
} as const;

export async function Services() {
  const t = await getTranslations("Services");
  const tItem = await getTranslations("Services.items");

  return (
    <section
      aria-labelledby="services-title"
      className="py-20 sm:py-28"
    >
      <div className="page-container">
        <SectionHeading
          id="services-title"
          anchorId="services"
          eyebrow={t("eyebrow")}
          title={t("title")}
          intro={t("intro")}
        />

        <ol className="mt-12 grid gap-x-14 md:grid-cols-2">
          {services.map((id, index) => {
            const Icon = serviceIcons[id];

            return (
              <li
                key={id}
                className="group border-t border-border py-7 first:border-t sm:py-8"
              >
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 font-display text-sm text-muted"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-medium leading-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                      {tItem(`${id}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {tItem(`${id}.description`)}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-10 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>{t("note")}</span>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 font-semibold text-primary-strong transition-colors hover:text-primary-hover"
          >
            {t("cta")}
            <ArrowRightIcon className="size-4 rtl:-scale-x-100" />
          </a>
        </p>
      </div>
    </section>
  );
}
