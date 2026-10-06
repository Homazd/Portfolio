import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Profile } from "@/lib/types";
import { ContactForm } from "./contact-form";

export function Contact({ profile, lang, dict }: { profile: Profile; lang: Locale; dict: Dictionary }) {
  const t = dict.contact;

  return (
    <section id="contact" className="border-t-3 border-line bg-mint py-24 text-black">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="reveal">
          <h2 className="display text-6xl sm:text-8xl">{t.title}</h2>
          <p className="mt-5 max-w-[45ch] text-lg leading-relaxed">{t.intro}</p>
          <dl className="mt-10 space-y-5 text-lg">
            <div>
              <dt className="font-semibold">{t.email}</dt>
              <dd>
                {/* Email and phone are always left-to-right, even on the Persian page */}
                <a
                  href={`mailto:${profile.email}`}
                  dir="ltr"
                  className="text-2xl font-extrabold break-all underline decoration-plum decoration-4 underline-offset-6 hover:text-plum"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            {profile.phone && (
              <div>
                <dt className="font-semibold">{t.phone}</dt>
                <dd>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} dir="ltr" className="font-bold hover:text-plum">
                    {profile.phone}
                  </a>
                </dd>
              </div>
            )}
            <div>
              <dt className="font-semibold">{t.basedIn}</dt>
              <dd className="font-bold">{profile.location}</dd>
            </div>
          </dl>
        </div>

        <div className="reveal rounded-[18px] border-3 border-black bg-white p-6 shadow-[8px_8px_0_#000] sm:p-8">
          <ContactForm lang={lang} dict={dict.form} />
        </div>
      </div>
    </section>
  );
}
