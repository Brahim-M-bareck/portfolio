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
          title={t("title")}
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="text-pretty font-display text-2xl leading-snug text-foreground sm:text-[1.75rem]">
              {t("lead")}
            </p>
            <div className="mt-6 space-y-5 text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
            </div>
            <p className="mt-8 border-s-2 border-secondary ps-5 text-base italic leading-7 text-foreground/90">
              {t("availability")}
            </p>
          </div>

          <div className="space-y-5 lg:col-span-5">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-strong rtl:tracking-normal">
                <GraduationCapIcon className="size-4" />
                {t("educationLabel")}
              </p>
              <p className="mt-5 font-display text-2xl leading-tight text-foreground">
                {t("educationSchool")}
              </p>
              <p className="mt-1 text-sm text-muted">{t("educationPlace")}</p>
              <div
                aria-hidden="true"
                className="my-5 h-px bg-border"
              />
              <p className="text-sm font-medium leading-6 text-foreground">
                {t("educationDegree")}
              </p>
              <p className="mt-3 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {t("educationStatus")}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <p className="flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary-strong rtl:tracking-normal">
                <SparklesIcon className="size-4" />
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

            <div className="rounded-2xl bg-panel p-6 text-panel-foreground">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-panel-foreground/80 rtl:tracking-normal">
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
