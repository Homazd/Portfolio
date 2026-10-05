import Link from "next/link";
import { Download, MapPin } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Profile } from "@/lib/types";
import { SocialIcon } from "./social-icon";
import { Sticker } from "./sticker";

const STAT_STICKERS = [
  { color: "butter", rotate: -5 },
  { color: "white", rotate: 3 },
  { color: "sky", rotate: -2 },
  { color: "mint", rotate: 5 },
] as const;

export function Hero({ profile, lang, dict }: { profile: Profile; lang: Locale; dict: Dictionary["hero"] }) {
  return (
    <section className="pt-32 pb-24 sm:pt-36">
      <div className="mx-auto max-w-6xl px-6">
        {/* Name plate */}
        <div className="relative rounded-[28px] border-3 border-line bg-plum px-6 pt-16 pb-24 text-plum-foreground shadow-[10px_10px_0_#000] sm:px-12 sm:pt-20 sm:pb-20">
          <Sticker color="mint" rotate={4} index={0} className="absolute -top-5 inset-e-4 text-sm sm:inset-e-10">
            <span className="size-2.5 rounded-full bg-emerald-600" />
            {profile.availability}
          </Sticker>

          <h1 className="display text-[clamp(4.5rem,17vw,12rem)] wrap-break-word">{profile.name}</h1>
          <p className="mt-6 inline-block -rotate-1 rounded-xl border-3 border-black bg-butter px-4 py-1.5 text-xl font-extrabold text-black sm:text-3xl">
            {profile.title}
          </p>
          <p className="mt-6 flex items-center gap-2 font-semibold opacity-90">
            <MapPin className="size-4" /> {profile.location}
          </p>

          <ul className="absolute inset-e-4 -bottom-8 flex flex-wrap justify-end gap-3 sm:inset-e-10 sm:-bottom-7">
            {profile.highlights.slice(0, 4).map((h, i) => (
              <li key={h.label} className={i > 1 ? "hidden md:block" : undefined}>
                <Sticker color={STAT_STICKERS[i].color} rotate={STAT_STICKERS[i].rotate} index={i + 1}>
                  {/* dir="auto": "4+" / "۴۰٪" stay in reading order, words like "۵۰ هزار" stay RTL */}
                  <span dir="auto" className="display text-3xl">
                    {h.value}
                  </span>
                  <span className="max-w-[9ch] text-sm leading-tight font-semibold">{h.label}</span>
                </Sticker>
              </li>
            ))}
          </ul>
        </div>

        {/* Intro + actions */}
        <div className="mt-20 grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
          <p className="max-w-[58ch] text-xl leading-relaxed sm:text-2xl">{profile.summary}</p>
          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-4">
              <Link href={`/${lang}#projects`} className="nb-btn bg-plum text-plum-foreground">
                {dict.seeProjects}
              </Link>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} className="nb-btn bg-surface">
                  <Download className="size-4" /> {dict.downloadResume}
                </a>
              )}
            </div>
            <div className="flex gap-3">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="nb-btn size-11 bg-surface p-0!"
                >
                  <SocialIcon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
