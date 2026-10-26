/**
 * Colour values used outside of CSS (viewport metadata and the generated
 * social image). Keep these aligned with the tokens in `app/globals.css`.
 */
export const palette = {
  background: "#F2F2F2",
  foreground: "#593F39",
  surface: "#FFFFFF",
  primary: "#3F76A6",
  accent: "#C4DDF2",
  secondary: "#8C5F4F",
  darkBackground: "#2A1F1C",
  darkSurface: "#342724",
  darkMuted: "#D9CCC7",
} as const;

export const viewportTheme = {
  light: palette.background,
  dark: palette.darkBackground,
} as const;
