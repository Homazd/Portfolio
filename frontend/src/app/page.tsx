import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { getPortfolio } from "@/lib/api";

// Render on request (so builds don't depend on the API); data itself is cached for 60s.
export const dynamic = "force-dynamic";

export default async function Home() {
  const data = await getPortfolio();

  return (
    <>
      <Header name={data.profile.name} />
      <main>
        <Hero profile={data.profile} />
        <About profile={data.profile} education={data.education} certifications={data.certifications} />
        <Experience items={data.experience} />
        <Projects projects={data.projects} />
        <Skills groups={data.skills} />
        <Contact profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
