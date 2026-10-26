import { getTranslations } from "next-intl/server";

import { contactChannels } from "@/config/content";

import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "./icons";
import { SectionHeading } from "./section-heading";

const channelIcons = {
  email: MailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
} as const;

export async function Contact() {
  const t = await getTranslations("Contact");
  const tChannel = await getTranslations("Contact.channels");
  const tCommon = await getTranslations("Common");

  return (
    <section
      aria-labelledby="contact-title"
      className="py-20 sm:py-28"
    >
      <div className="page-container">
        <div
          id="contact"
          className="relative scroll-mt-20 overflow-hidden rounded-[2rem] bg-panel px-6 py-12 text-panel-foreground sm:scroll-mt-24 sm:px-10 sm:py-16 lg:px-14"
        >
          <div
            aria-hidden="true"
            className="absolute -end-24 -top-24 size-72 rounded-full border border-panel-foreground/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -start-20 size-80 rounded-full border border-panel-foreground/10"
          />

          <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <SectionHeading
                id="contact-title"
                eyebrow={t("eyebrow")}
                title={t("title")}
                intro={t("intro")}
                tone="inverse"
              />
            </div>

            <ul className="grid content-start gap-3 sm:grid-cols-2">
              {contactChannels.map((channel) => {
                const Icon = channelIcons[channel.id];
                const label = tChannel(`${channel.id}.label`);
                const description = tChannel(`${channel.id}.description`);
                const value = channel.value;

                return (
                  <li key={channel.id}>
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={
                        channel.external ? "noopener noreferrer" : undefined
                      }
                      className="group flex h-full flex-col rounded-2xl border border-panel-foreground/15 bg-panel-foreground/5 p-5 transition-colors hover:border-panel-foreground/35 hover:bg-panel-foreground/10"
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className="grid size-10 place-items-center rounded-full bg-panel-foreground/10 transition-colors group-hover:bg-panel-foreground/15">
                          <Icon className="size-[18px]" />
                        </span>
                        <ArrowUpRightIcon className="size-4 opacity-60 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                      </span>

                      <span className="mt-6 flex flex-1 flex-col">
                        <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-panel-foreground/80 rtl:tracking-normal">
                            {label}
                          </span>
                          {value ? (
                            <bdi
                              dir={channel.ltrValue ? "ltr" : undefined}
                              className="break-words text-sm font-semibold text-panel-foreground"
                            >
                              {value}
                            </bdi>
                          ) : null}
                        </span>
                        <span className="mt-2 text-xs leading-5 text-panel-foreground/80">
                          {description}
                        </span>
                      </span>
                      {channel.external ? (
                        <span className="sr-only">
                          {tCommon("externalLink")}
                        </span>
                      ) : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative mt-10 flex flex-col gap-3 border-t border-panel-foreground/15 pt-6 text-sm text-panel-foreground/85 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
            <p className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="size-2 shrink-0 rounded-full bg-panel-foreground"
              />
              {t("availability")}
            </p>
            <p className="flex items-center gap-2.5">
              <MapPinIcon className="size-4 shrink-0" />
              {t("locationNote")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
