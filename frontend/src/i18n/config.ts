export const locales = ["en", "fa"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const localeMeta: Record<Locale, { dir: "ltr" | "rtl"; name: string; ogLocale: string }> = {
  en: { dir: "ltr", name: "English", ogLocale: "en_US" },
  fa: { dir: "rtl", name: "فارسی", ogLocale: "fa_IR" },
};

export function hasLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

/** Swap the locale prefix of a path, e.g. /en/projects/x -> /fa/projects/x */
export function localizePath(pathname: string, locale: Locale): string {
  const [, first, ...rest] = pathname.split("/");
  const tail = hasLocale(first) ? rest : [first, ...rest].filter(Boolean);
  return `/${[locale, ...tail].join("/")}`.replace(/\/$/, "") || `/${locale}`;
}
