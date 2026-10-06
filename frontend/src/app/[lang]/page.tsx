import { notFound } from "next/navigation";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getPortfolio } from "@/lib/api";

// Render on request (so builds don't depend on the API); data itself is cached for 60s.
export const dynamic = "force-dynamic";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const data = await getPortfolio(lang);
  const dict = getDictionary(lang);

  return (
    <>
      <Header name={data.profile.name} lang={lang} dict={dict.nav} />
      <main>
        <Hero profile={data.profile} lang={lang} dict={dict.hero} />
        <About profile={data.profile} education={data.education} certifications={data.certifications} dict={dict.about} separator={dict.common.listSeparator} />
        <Experience items={data.experience} dict={dict.experience} />
        <Projects projects={data.projects} lang={lang} dict={dict} />
        <Skills groups={data.skills} dict={dict.skills} />
        <Contact profile={data.profile} lang={lang} dict={dict} />
      </main>
      <Footer profile={data.profile} dict={dict.footer} />
    </>
  );
}
