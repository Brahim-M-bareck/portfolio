import Image from "next/image";
import { getTranslations } from "next-intl/server";

import {
  ArrowDownIcon,
  ArrowRightIcon,
  CodeIcon,
  GraduationCapIcon,
  MapPinIcon,
} from "./icons";
import { LinkButton } from "./link-button";

export async function Hero() {
  const t = await getTranslations("Hero");

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      <div aria-hidden="true" className="hero-wash absolute inset-0 -z-10" />

      <div className="page-container grid items-center gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:gap-20">
        <div className="reveal min-w-0">
          <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-strong rtl:tracking-normal">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-primary"
            />
            {t("eyebrow")}
          </p>

          <h1
            id="hero-title"
            className="mt-6 font-display text-[2.45rem] font-medium leading-[1.02] tracking-tight text-foreground rtl:leading-[1.24] sm:text-6xl lg:text-7xl"
          >
            <span className="block">{t("titleLine1")}</span>
            <span className="block">{t("titleLine2")}</span>
            <span className="block italic text-primary">{t("titleLine3")}</span>
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {t("description")}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LinkButton href="#contact">
              {t("primaryCta")}
              <ArrowRightIcon className="size-4 rtl:-scale-x-100" />
            </LinkButton>
            <LinkButton href="#skills" variant="secondary">
              {t("secondaryCta")}
            </LinkButton>
          </div>

          <ul className="mt-10 grid gap-4 border-t border-border pt-6 text-sm text-muted sm:grid-cols-3">
            <li className="flex items-center gap-2.5">
              <MapPinIcon className="size-4 shrink-0 text-primary" />
              <span>{t("basedIn")}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <GraduationCapIcon className="size-4 shrink-0 text-primary" />
              <span>{t("role")}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <CodeIcon className="size-4 shrink-0 text-primary" />
              <span>{t("stack")}</span>
            </li>
          </ul>

          <a
            href="#about"
            className="mt-10 hidden w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted transition-colors hover:text-primary-strong lg:inline-flex rtl:tracking-normal"
          >
            {t("scroll")}
            <ArrowDownIcon className="size-4" />
          </a>
        </div>

        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-sm lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-3 rounded-[2rem] border border-border sm:-inset-4"
          />
          <div
            aria-hidden="true"
            className="absolute -end-6 -top-8 size-28 rounded-full bg-accent/80 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-accent">
            <Image
              src="/images/brahim.jpeg"
              alt={t("portraitAlt")}
              width={1024}
              height={1024}
              priority
              sizes="(max-width: 1023px) 90vw, 42vw"
              className="aspect-[4/5] w-full object-cover object-center"
            />

            <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-panel-foreground/15 bg-panel/95 p-4 text-panel-foreground backdrop-blur">
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="size-2.5 shrink-0 rounded-full bg-panel-foreground ring-4 ring-panel-foreground/15"
                />
                <p className="text-sm font-semibold">{t("availability")}</p>
              </div>
              <p className="mt-1.5 text-xs leading-5 text-panel-foreground/80">
                {t("role")} · {t("basedIn")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
