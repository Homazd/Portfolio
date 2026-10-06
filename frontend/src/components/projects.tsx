import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Project } from "@/lib/types";
import { Heading } from "./heading";

const BLOCKS = ["bg-butter", "bg-mint", "bg-sky"];

export function Projects({ projects, lang, dict }: { projects: Project[]; lang: Locale; dict: Dictionary }) {
  const t = dict.projects;
  const sep = dict.common.listSeparator;
  const [lead, ...rest] = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const href = (slug: string) => `/${lang}/projects/${slug}`;

  return (
    <section id="projects" className="border-t-3 border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Heading title={t.title} intro={t.intro} />

        {lead && (
          <div className="reveal">
            <Link
              href={href(lead.slug)}
              className="group nb-card grid overflow-hidden transition-transform hover:-translate-y-1 md:grid-cols-[1.2fr_1fr]"
            >
              <div className="flex flex-col justify-between gap-10 border-b-3 border-line bg-plum p-8 text-plum-foreground sm:p-10 md:border-e-3 md:border-b-0">
                <span className="nb-chip w-fit border-black bg-butter text-black">{lead.category}</span>
                <h3 className="display text-6xl sm:text-7xl">{lead.title}</h3>
              </div>
              <div className="flex flex-col p-8 sm:p-10">
                <p className="text-lg leading-relaxed">{lead.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {lead.stack.map((tech) => (
                    <li key={tech} className="nb-chip">
                      {tech}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto flex items-center gap-2 pt-8 font-bold underline decoration-plum decoration-3 underline-offset-6">
                  {t.readCaseStudy} <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45 rtl:-scale-x-100" />
                </span>
              </div>
            </Link>
          </div>
        )}

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {rest.map((p, i) => (
            <div key={p.slug} className="reveal">
              <Link
                href={href(p.slug)}
                className="group nb-card flex flex-col overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div className={`border-b-3 border-line p-7 text-black ${BLOCKS[i % BLOCKS.length]}`}>
                  <p className="font-semibold">
                    {p.category}
                    {sep}
                    {p.year}
                  </p>
                  <h3 className="display mt-6 text-5xl">{p.title}</h3>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="leading-relaxed text-muted">{p.summary}</p>
                  <span className="mt-auto flex items-center gap-2 pt-6 font-bold">
                    {t.readCaseStudy} <ArrowUpRight className="size-5 transition-transform group-hover:rotate-45 rtl:-scale-x-100" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {others.length > 0 && (
          <div className="reveal mt-16">
            <h3 className="text-2xl font-extrabold">{t.more}</h3>
            <ul className="mt-4 border-t-3 border-line">
              {others.map((p) => (
                <li key={p.slug} className="border-b-3 border-line">
                  <Link
                    href={href(p.slug)}
                    className="group flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <span className="text-xl font-bold group-hover:text-plum">{p.title}</span>
                    <span className="text-muted">
                      {p.category}
                      {sep}
                      {p.year}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
