"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { localeConfig, locales, type Locale } from "@/config/locales";
import { cn } from "@/lib/utils";

import { CloseIcon, MenuIcon } from "./icons";

type MobileMenuProps = {
  items: ReadonlyArray<{ id: string; label: string }>;
  currentLocale: Locale;
  labels: {
    open: string;
    close: string;
    menu: string;
    language: string;
  };
};

export function MobileMenu({
  items,
  currentLocale,
  labels,
}: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => buttonRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const panel = panelRef.current;
    if (!panel) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ),
      );

    getFocusable()[0]?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = getFocusable();
      if (focusable.length === 0) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [closeMenu, open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? labels.close : labels.open}
        onClick={() => (open ? closeMenu() : setOpen(true))}
        className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-border-strong hover:text-primary md:hidden"
      >
        {open ? (
          <CloseIcon className="size-[18px]" />
        ) : (
          <MenuIcon className="size-[18px]" />
        )}
      </button>

      {open
        ? createPortal(
            <div
              id="mobile-menu"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label={labels.menu}
              className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-border bg-background sm:top-20 md:hidden"
            >
              <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col px-5 pb-10 pt-6 sm:px-8">
                <div className="flex items-center justify-between">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-strong rtl:tracking-normal">
                    {labels.menu}
                  </p>
                  <button
                    type="button"
                    onClick={closeMenu}
                    aria-label={labels.close}
                    className="grid size-10 place-items-center rounded-full border border-border bg-surface text-foreground transition-colors hover:border-border-strong hover:text-primary"
                  >
                    <CloseIcon className="size-[18px]" />
                  </button>
                </div>

                <nav aria-label={labels.menu} className="mt-6">
                  <ul>
                    {items.map((item, index) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={closeMenu}
                          className="flex items-center justify-between gap-4 border-b border-border py-4 font-display text-2xl font-medium text-foreground transition-colors hover:text-primary"
                        >
                          <span>{item.label}</span>
                          <span
                            aria-hidden="true"
                            className="font-sans text-xs font-medium tracking-widest text-muted"
                          >
                            0{index + 1}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-strong rtl:tracking-normal">
                    {labels.language}
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {locales.map((locale) => {
                      const isCurrent = locale === currentLocale;

                      return (
                        <a
                          key={locale}
                          href={`/${locale}`}
                          hrefLang={locale}
                          lang={locale}
                          aria-current={isCurrent ? "page" : undefined}
                          className={cn(
                            "rounded-xl border px-3 py-3 text-center text-sm font-medium transition-colors",
                            isCurrent
                              ? "border-foreground bg-foreground text-background"
                              : "border-border bg-surface text-muted hover:border-border-strong hover:text-foreground",
                          )}
                        >
                          {localeConfig[locale].label}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
