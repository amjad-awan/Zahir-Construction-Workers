import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Projects() {
  const [main, ...rest] = projects;
  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal><SectionHeading eyebrow={site.projects.eyebrow} title={site.projects.heading} /></Reveal>
        <Reveal delay={0.1}>
          <div className="mt-14 grid gap-4 md:grid-cols-12 lg:gap-5">
            <ProjectCard p={main} sizes="(min-width:768px) 60vw, 100vw" className="aspect-[4/3] md:col-span-7 md:row-span-2 md:aspect-auto md:min-h-[640px]" />
            {rest.slice(0, 2).map((p) => <ProjectCard key={p.id} p={p} sizes="(min-width:768px) 40vw, 100vw" className="aspect-[16/10] md:col-span-5" />)}
            {rest.slice(2).map((p) => <ProjectCard key={p.id} p={p} sizes="(min-width:768px) 50vw, 100vw" className="aspect-[16/10] md:col-span-6" />)}
          </div>
        </Reveal>
        <p className="mt-8 max-w-3xl border-l-2 border-bronze pl-4 text-sm leading-relaxed text-muted">{site.projects.notice}</p>
      </div>
    </section>
  );
}
