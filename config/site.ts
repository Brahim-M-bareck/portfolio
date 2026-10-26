const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://your-domain.com";

export const siteConfig = {
  name: "Brahim",
  role: "Junior Full Stack Developer",
  location: "Mauritania",
  url: rawSiteUrl.replace(/\/+$/, ""),
  email: "brahim.talebahmed.mbareck@gmail.com",
  links: {
    email: "mailto:brahim.talebahmed.mbareck@gmail.com",
    github: "https://github.com/Brahim-M-bareck",
    linkedin: "https://www.linkedin.com/in/brahim-m-bareck-71b101377",
    whatsapp: "https://wa.me/22231662683",
  },
} as const;

export type SiteConfig = typeof siteConfig;
