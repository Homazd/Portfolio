import type { Certification, Education, Profile } from "@/lib/types";
import { Heading } from "./heading";

export function About({
  profile,
  education,
  certifications,
}: {
  profile: Profile;
  education: Education[];
  certifications: Certification[];
}) {
  return (
    <section id="about" className="border-t-3 border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Heading title="About me" />
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="max-w-[62ch] space-y-6 text-lg leading-relaxed">
            {profile.about.map((p, i) => (
              <p key={i} className={i === 0 ? "text-2xl font-semibold leading-snug" : "text-muted"}>
                {p}
              </p>
            ))}
          </div>

          <aside className="nb-card h-fit p-6">
            <h3 className="text-xl font-extrabold text-plum">Education</h3>
            <ul className="mt-3 space-y-4">
              {education.map((e) => (
                <li key={e.institution + e.degree}>
                  <p className="font-bold">{e.degree}</p>
                  <p className="text-muted">
                    {e.institution}, {e.start}–{e.end}
                  </p>
                  {e.details && <p className="mt-1 text-sm text-muted">{e.details}</p>}
                </li>
              ))}
            </ul>
            {certifications.length > 0 && (
              <>
                <h3 className="mt-8 border-t-3 border-dashed border-line pt-6 text-xl font-extrabold text-plum">
                  Certifications
                </h3>
                <ul className="mt-3 space-y-3">
                  {certifications.map((c) => (
                    <li key={c.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-bold">{c.name}</p>
                        <p className="text-sm text-muted">{c.issuer}</p>
                      </div>
                      <span className="nb-chip bg-butter text-on-color">{c.year}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
