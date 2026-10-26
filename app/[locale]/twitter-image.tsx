import { routing } from "@/i18n/routing";
import { renderOgImage } from "@/lib/og-image";

export const alt = "Brahim — Junior Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function TwitterImage() {
  return renderOgImage();
}
