"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { LanguageSwitch } from "./language-switch";
import { ThemeToggle } from "./theme-toggle";

export function Header({ name, lang, dict }: { name: string; lang: Locale; dict: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: `/${lang}#about`, label: dict.about },
    { href: `/${lang}#experience`, label: dict.experience },
    { href: `/${lang}#projects`, label: dict.projects },
    { href: `/${lang}#skills`, label: dict.skills },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-3 border-line bg-background">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-3 px-6">
        <Link href={`/${lang}`} className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="display flex size-11 shrink-0 items-center justify-center rounded-full border-3 border-line bg-plum pt-0.5 text-2xl text-plum-foreground">
            {name.charAt(0)}
          </span>
          <span className="hidden truncate text-lg font-extrabold sm:inline">{name}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-semibold decoration-plum decoration-3 underline-offset-6 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch lang={lang} label={dict.switchLanguage} />
          <ThemeToggle label={dict.toggleTheme} />
          <Link href={`/${lang}#contact`} className="nb-btn hidden bg-butter text-on-color lg:inline-flex">
            {dict.contact}
          </Link>
          <button
            type="button"
            className="nb-btn size-11 bg-surface p-0! lg:hidden"
            aria-label={open ? dict.closeMenu : dict.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-3 border-line px-6 py-4 lg:hidden" aria-label="Mobile">
          {[...nav, { href: `/${lang}#contact`, label: dict.contact }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="display block py-2 text-4xl hover:text-plum"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
