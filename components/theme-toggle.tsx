"use client";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "./icons";

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  function handleToggle() {
    const isDark = resolvedTheme
      ? resolvedTheme === "dark"
      : document.documentElement.classList.contains("dark");

    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      title={label}
      className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-border-strong hover:text-primary-strong"
    >
      <SunIcon className="size-[18px] dark:hidden" />
      <MoonIcon className="hidden size-[18px] dark:block" />
    </button>
  );
}
