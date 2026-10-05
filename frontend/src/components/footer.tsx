import Link from "next/link";
import { ArrowUp } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Profile } from "@/lib/types";
import { SocialIcon } from "./social-icon";

export function Footer({ profile, lang, dict }: { profile: Profile; lang: Locale; dict: Dictionary["footer"] }) {
  return (
    <footer className="mt-auto border-t-3 border-line bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="display text-4xl">{profile.name}</p>
          <p className="mt-1 text-sm text-white/70">{dict.rights(new Date().getFullYear(), profile.name)}</p>
        </div>
        <div className="flex gap-3">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target={s.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="flex size-11 items-center justify-center rounded-full border-3 border-white transition-colors hover:bg-butter hover:text-black"
            >
              <SocialIcon icon={s.icon} />
            </a>
          ))}
          <Link
            href={`/${lang}`}
            aria-label={dict.backToTop}
            className="flex size-11 items-center justify-center rounded-full border-3 border-white bg-plum transition-colors hover:bg-butter hover:text-black"
          >
            <ArrowUp className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
