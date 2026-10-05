import type { Dictionary } from "@/i18n/dictionaries";
import type { Experience as ExperienceItem } from "@/lib/types";
import { Heading } from "./heading";

export function Experience({ items, dict }: { items: ExperienceItem[]; dict: Dictionary["experience"] }) {
  return (
    <section id="experience" className="border-t-3 border-line bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Heading title={dict.title} intro={dict.intro} />

        {/* A real timeline: a line with one marker per role (mirrors in RTL) */}
        <ol className="relative ms-3 border-s-3 border-line">
          {items.map((job, i) => (
            <li key={job.company + job.start} className="relative pb-12 ps-8 last:pb-0 sm:ps-12">
              <span
                className={`absolute top-1 -inset-s-3.25 size-6 rounded-full border-3 border-line ${
                  i === 0 ? "bg-plum" : "bg-background"
                }`}
                aria-hidden
              />
              <p className="nb-chip bg-butter text-on-color">
                {job.start} – {job.end}
              </p>
              <h3 className="mt-3 text-3xl font-extrabold leading-tight">{job.role}</h3>
              <p className="mt-1 text-lg font-bold text-plum">
                {job.company} <span className="font-medium text-muted">({job.location})</span>
              </p>
              <p className="mt-3 max-w-[65ch] text-muted">{job.summary}</p>
              <ul className="mt-4 max-w-[70ch] list-disc space-y-1.5 ps-5 marker:text-plum">
                {job.achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={dict.technologies}>
                {job.stack.map((t) => (
                  <li key={t} className="nb-chip">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
