import { siteConfig } from "./site";

export const navItems = ["about", "skills", "services", "contact"] as const;

export type NavItemId = (typeof navItems)[number];

type IconName =
  | "code"
  | "server"
  | "database"
  | "smartphone"
  | "wrench"
  | "mail"
  | "github"
  | "linkedin"
  | "whatsapp";

export const skillGroups = [
  {
    id: "frontend",
    icon: "code",
    items: [
      "html",
      "css",
      "javascript",
      "typescript",
      "angular",
      "nextjs",
      "tailwind",
    ],
  },
  {
    id: "backend",
    icon: "server",
    items: ["java", "springBoot", "python"],
  },
  {
    id: "databases",
    icon: "database",
    items: ["postgresql"],
  },
  {
    id: "mobile",
    icon: "smartphone",
    items: ["flutter"],
  },
  {
    id: "tools",
    icon: "wrench",
    items: ["git", "github", "docker"],
  },
] as const satisfies ReadonlyArray<{
  id: string;
  icon: IconName;
  items: readonly string[];
}>;

export type SkillGroup = (typeof skillGroups)[number];
export type SkillGroupId = SkillGroup["id"];

export const services = [
  "web",
  "mobile",
  "backend",
  "database",
  "engineering",
] as const;

export type ServiceId = (typeof services)[number];

export const contactChannels = [
  {
    id: "email",
    href: siteConfig.links.email,
    value: null,
    icon: "mail",
    external: false,
    ltrValue: true,
  },
  {
    id: "github",
    href: siteConfig.links.github,
    value: null,
    icon: "github",
    external: true,
    ltrValue: true,
  },
  {
    id: "linkedin",
    href: siteConfig.links.linkedin,
    value: null,
    icon: "linkedin",
    external: true,
    ltrValue: true,
  },
  {
    id: "whatsapp",
    href: siteConfig.links.whatsapp,
    value: "+222 31662683",
    icon: "whatsapp",
    external: true,
    ltrValue: true,
  },
] as const satisfies ReadonlyArray<{
  id: string;
  href: string;
  value: string | null;
  icon: IconName;
  external: boolean;
  ltrValue: boolean;
}>;

export type ContactChannel = (typeof contactChannels)[number];
export type ContactChannelId = ContactChannel["id"];

export const focusAreas = [
  "web",
  "mobile",
  "backend",
  "databases",
  "software",
] as const;

export type FocusArea = (typeof focusAreas)[number];
