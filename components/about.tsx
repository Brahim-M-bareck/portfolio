import { getTranslations } from "next-intl/server";

import { focusAreas } from "@/config/content";

import { GraduationCapIcon, SparklesIcon } from "./icons";
import { SectionHeading } from "./section-heading";
import { Tag } from "./tag";

export async function About() {
  const t = await getTranslations("About");
  const tFocus = await getTranslations("About.focus");

  return (
    <section
      aria-labelledby="about-title"
      className="border-t border-border py-20 sm:py-28"
    >
      <div className="page-container">
        <SectionHeading
          id="about-title"
          anchorId="about"
          eyebrow={t("eyebrow")}
          eyebrowTone="secondary"
          title={t("title")}
        />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 lg:flex lg:flex-col lg:self-stretch xl:col-span-6">
            <p className="text-pretty font-display text-xl leading-relaxed text-foreground sm:text-2xl sm:leading-normal">
              {t("lead")}
            </p>
            <div className="mt-6 space-y-5 text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
            </div>
            <div className="mt-8 lg:mt-auto lg:pt-8">
              <p className="border-s-2 border-secondary ps-5 text-base italic leading-7 text-foreground">
                {t("availability")}
              </p>
            </div>
          </div>

          <div className="space-y-4 lg:col-span-5 xl:col-span-6">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary rtl:tracking-normal">
                <GraduationCapIcon className="size-4 text-primary" />
                {t("educationLabel")}
              </p>
              <p className="mt-4 font-display text-2xl leading-tight text-foreground">
                {t("educationSchool")}
              </p>
              <p className="mt-1 text-sm text-muted">{t("educationPlace")}</p>
              <div
                aria-hidden="true"
                className="my-4 h-px bg-border"
              />
              <p className="text-sm font-medium leading-6 text-foreground">
                {t("educationDegree")}
              </p>
              <p className="mt-4 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {t("educationStatus")}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-secondary rtl:tracking-normal">
                <SparklesIcon className="size-4 text-primary" />
                {t("focusLabel")}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <li key={area}>
                    <Tag>{tFocus(area)}</Tag>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-panel p-5 text-panel-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-panel-foreground/80 rtl:tracking-normal">
                {t("approachLabel")}
              </p>
              <p className="mt-3 text-sm leading-6 text-panel-foreground/90">
                {t("approach")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
