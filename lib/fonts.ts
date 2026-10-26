import { Amiri, Fraunces, Manrope, Noto_Sans_Arabic } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
  preload: false,
});

export const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
  preload: false,
});

export const fontVariables = [
  manrope.variable,
  fraunces.variable,
  notoArabic.variable,
  amiri.variable,
].join(" ");
