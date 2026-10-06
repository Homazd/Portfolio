"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { localeMeta, localizePath, type Locale } from "@/i18n/config";

/** Links to the same page in the other language. */
export function LanguageSwitch({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const target: Locale = lang === "fa" ? "en" : "fa";

  return (
    <Link
      href={localizePath(pathname, target)}
      // Same page in the other language: keep the reader where they are. (Next's automatic
      // scroll misplaces the page when <html> changes, e.g. jumping to the bottom.)
      scroll={false}
      hrefLang={target}
      lang={target}
      aria-label={label}
      title={label}
      className="nb-btn h-11 bg-surface px-3! sm:px-4!"
    >
      <Languages className="size-4" />
      <span className="hidden sm:inline">{localeMeta[target].name}</span>
      <span className="sm:hidden">{target === "fa" ? "فا" : "EN"}</span>
    </Link>
  );
}
