import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { hasLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getPortfolio, getProject } from "@/lib/api";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: PageProps<"/[lang]/projects/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const project = await getProject(slug, lang);
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}/projects/${slug}`]));
  return project
    ? { title: project.title, description: project.summary, alternates: { canonical: `/${lang}/projects/${slug}`, languages } }
    : { title: getDictionary(lang).projects.notFoundTitle };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/projects/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const [project, data] = await Promise.all([getProject(slug, lang), getPortfolio(lang)]);
  if (!project) notFound();

  const dict = getDictionary(lang);
  const t = dict.projects;
  const index = data.projects.findIndex((p) => p.slug === project.slug);
  const next = data.projects[(index + 1) % data.projects.length];

  return (
    <>
      <Header name={data.profile.name} lang={lang} dict={dict.nav} />
      <main>
        <section className="pt-32 pb-16">
          <div className="mx-auto max-w-5xl px-6">
            <Link href={`/${lang}#projects`} className="nb-btn bg-surface">
              <ArrowLeft className="size-4 rtl:-scale-x-100" /> {t.all}
            </Link>

            <div className="mt-10 rounded-[28px] border-3 border-line bg-plum p-8 text-plum-foreground shadow-[10px_10px_0_#000] sm:p-12">
              <p className="font-semibold opacity-90">
                {project.category}
                {dict.common.listSeparator}
                {project.year}
              </p>
              <h1 className="display mt-4 text-6xl sm:text-8xl">{project.title}</h1>
              <p className="mt-6 max-w-[55ch] text-xl leading-relaxed">{project.summary}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.links.live && (
                <a href={project.links.live} target="_blank" rel="noreferrer" className="nb-btn bg-butter text-on-color">
                  {t.visitLive} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                </a>
              )}
              {project.links.source && (
                <a href={project.links.source} target="_blank" rel="noreferrer" className="nb-btn bg-surface">
                  {t.viewSource} <ArrowUpRight className="size-4 rtl:-scale-x-100" />
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="border-t-3 border-line py-16">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 md:grid-cols-[1fr_280px]">
            <div className="space-y-12">
              <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed">
                {project.description.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-xl font-semibold" : "text-muted"}>
                    {p}
                  </p>
                ))}
              </div>
              {project.outcomes.length > 0 && (
                <div>
                  <h2 className="display text-5xl">{t.results}</h2>
                  <ul className="mt-6 space-y-4">
                    {project.outcomes.map((o) => (
                      <li key={o} className="nb-card flex items-start gap-4 p-5 text-lg font-semibold">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full border-3 border-black bg-mint text-black">
                          <Check className="size-4" strokeWidth={3} />
                        </span>
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <aside className="nb-card h-fit p-6 md:sticky md:top-28">
              <h3 className="font-extrabold text-plum">{t.myRole}</h3>
              <p className="mt-2">{project.role}</p>
              <h3 className="mt-6 border-t-3 border-dashed border-line pt-6 font-extrabold text-plum">{t.builtWith}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="nb-chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {next && next.slug !== project.slug && (
          <section className="border-t-3 border-line bg-butter text-black">
            <Link
              href={`/${lang}/projects/${next.slug}`}
              className="group mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-14"
            >
              <div>
                <p className="font-semibold">{t.next}</p>
                <p className="display mt-2 text-5xl sm:text-6xl">{next.title}</p>
              </div>
              <span className="flex size-16 shrink-0 items-center justify-center rounded-full border-3 border-black bg-white shadow-[4px_4px_0_#000] transition-transform group-hover:rotate-45">
                <ArrowUpRight className="size-7 rtl:-scale-x-100" strokeWidth={2.5} />
              </span>
            </Link>
          </section>
        )}
      </main>
      <Footer profile={data.profile} dict={dict.footer} />
    </>
  );
}
