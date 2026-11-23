import SafeImage from "@/components/ui/SafeImage";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function About() {
  const a = site.about;
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand"><SafeImage id={a.image} alt={a.imageAlt} sizes="(min-width:1024px) 50vw, 100vw" /></div>
          <div className="absolute -bottom-5 -right-5 -z-10 hidden h-2/3 w-2/3 border border-bronze sm:block" aria-hidden />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6">
          <SectionHeading eyebrow={a.eyebrow} title={a.heading} />
          <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-muted">{a.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
          <Button variant="dark" href="#contact" className="mt-10">{a.cta}</Button>
        </Reveal>
      </div>
    </section>
  );
}
