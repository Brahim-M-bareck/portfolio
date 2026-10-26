import { cacheLife } from "next/cache";
import { getTranslations } from "next-intl/server";

import { contactChannels, navItems } from "@/config/content";
import { siteConfig } from "@/config/site";

import {
  ArrowUpIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  WhatsAppIcon,
} from "./icons";
import { Logo } from "./logo";

const channelIcons = {
  email: MailIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  whatsapp: WhatsAppIcon,
} as const;

async function getCurrentYear() {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}

export async function Footer() {
  const t = await getTranslations("Nav");
  const tCommon = await getTranslations("Common");
  const tFooter = await getTranslations("Footer");
  const tContact = await getTranslations("Contact");

  const year = await getCurrentYear();

  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="page-container py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_auto] md:items-start">
          <div className="max-w-sm">
            <Logo label={tCommon("home")} />
            <p className="mt-4 text-pretty text-sm leading-6 text-muted">
              {tFooter("tagline")}
            </p>
          </div>

          <nav aria-label={tFooter("navLabel")}>
            <ul className="flex flex-wrap gap-x-5 gap-y-3 md:grid md:gap-3">
              {navItems.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-sm font-medium text-muted transition-colors hover:text-primary-strong"
                  >
                    {t(id)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="sr-only">{tFooter("socialLabel")}</p>
            <ul className="flex items-center gap-2">
              {contactChannels.map((channel) => {
                const Icon = channelIcons[channel.id];

                return (
                  <li key={channel.id}>
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      aria-label={tContact(`channels.${channel.id}.label`)}
                      className="grid size-10 place-items-center rounded-full border border-border bg-background text-muted transition-colors hover:border-border-strong hover:text-primary-strong"
                    >
                      <Icon className="size-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {tFooter("rights")}
          </p>
          <p>{tFooter("builtWith")}</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-primary-strong"
          >
            {tFooter("backToTop")}
            <ArrowUpIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
