"use client";

import { RefreshCw } from "lucide-react";
import { useParams } from "next/navigation";
import { defaultLocale, hasLocale } from "@/i18n/config";
import { dictionaries } from "@/i18n/dictionaries";

export default function Error({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  const { lang } = useParams<{ lang: string }>();
  const t = dictionaries[hasLocale(lang) ? lang : defaultLocale].error;

  return (
    <main className="flex min-h-screen flex-col items-start justify-center px-6 sm:px-16">
      <h1 className="display text-6xl sm:text-8xl">{t.title}</h1>
      <p className="mt-5 max-w-[50ch] text-lg text-muted">{t.body}</p>
      <button onClick={() => retry()} className="nb-btn mt-8 bg-plum text-plum-foreground">
        <RefreshCw className="size-4" /> {t.retry}
      </button>
    </main>
  );
}
