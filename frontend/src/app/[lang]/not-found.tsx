"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { defaultLocale, hasLocale } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";

export default function NotFound() {
  const params = useParams<{ lang: string }>();
  const lang = hasLocale(params.lang) ? params.lang : defaultLocale;
  const t = dictionaries[lang].notFound;

  return (
    <main className="flex min-h-screen flex-col items-start justify-center px-6 sm:px-16">
      <p className="display text-[clamp(7rem,28vw,16rem)] text-plum">{lang === "fa" ? "۴۰۴" : "404"}</p>
      <h1 className="mt-2 text-3xl font-extrabold">{t.title}</h1>
      <p className="mt-3 max-w-[50ch] text-lg text-muted">{t.body}</p>
      <Link href={`/${lang}`} className="nb-btn mt-8 bg-butter text-on-color">
        {t.home}
      </Link>
    </main>
  );
}
