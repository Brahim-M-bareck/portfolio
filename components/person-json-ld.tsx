import { getTranslations } from "next-intl/server";

import { focusAreas } from "@/config/content";
import { siteConfig } from "@/config/site";

export async function PersonJsonLd() {
  const tMetadata = await getTranslations("Metadata");
  const tFocus = await getTranslations("About.focus");

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/brahim.jpeg`,
    jobTitle: siteConfig.role,
    description: tMetadata("description"),
    address: {
      "@type": "PostalAddress",
      addressCountry: "MR",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SupNum",
    },
    knowsAbout: focusAreas.map((area) => tFocus(area)),
    knowsLanguage: ["en", "fr", "ar"],
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
