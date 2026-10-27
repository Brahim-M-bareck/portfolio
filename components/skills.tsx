import { getTranslations } from "next-intl/server";

import { skillGroups, type SkillGroupId } from "@/config/content";
import { cn } from "@/lib/utils";

import {
  CodeIcon,
  DatabaseIcon,
  ServerIcon,
  SmartphoneIcon,
  WrenchIcon,
} from "./icons";
import { SectionHeading } from "./section-heading";
import { Tag } from "./tag";

const groupIcons = {
  code: CodeIcon,
  server: ServerIcon,
  database: DatabaseIcon,
  smartphone: SmartphoneIcon,
  wrench: WrenchIcon,
} as const;

const spanClasses: Record<SkillGroupId, string> = {
  frontend: "md:col-span-2 lg:col-span-3 xl:col-span-4",
  backend: "lg:col-span-3 xl:col-span-2",
  databases: "lg:col-span-2",
  mobile: "lg:col-span-2",
  tools: "lg:col-span-2",
};

export async function Skills() {
  const t = await getTranslations("Skills");
  const tGroup = await getTranslations("Skills.groups");
  const tTech = await getTranslations("Skills.technologies");

  return (
    <section
      aria-labelledby="skills-title"
      className="border-y border-border bg-surface/50 py-20 sm:py-28"
    >
      <div className="page-container">
        <SectionHeading
          id="skills-title"
          anchorId="skills"
          eyebrow={t("eyebrow")}
          eyebrowTone="secondary"
          title={t("title")}
          intro={t("intro")}
        />

        <ul className="mt-12 grid items-stretch gap-4 md:grid-cols-2 lg:grid-cols-6">
          {skillGroups.map((group, index) => {
            const Icon = groupIcons[group.icon];
            const title = tGroup(`${group.id}.title`);
            const description = tGroup(`${group.id}.description`);

            return (
              <li
                key={group.id}
                className={cn(
                  "group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong/60",
                  spanClasses[group.id],
                )}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-display text-2xl leading-none text-border-strong/80"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl font-medium text-foreground">
                  {title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                  {description}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2 min-[340px]:max-md:gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag className="min-[340px]:max-md:px-2">
                        {tTech(item)}
                      </Tag>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
