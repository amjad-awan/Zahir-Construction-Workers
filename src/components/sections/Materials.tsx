import SafeImage from "@/components/ui/SafeImage";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { materials } from "@/data/features";
import { site } from "@/data/site";

export default function Materials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal><SectionHeading eyebrow={site.materials.eyebrow} title={site.materials.heading} text={site.materials.text} /></Reveal>
        <div className="mt-14 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {materials.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08} className={i % 2 ? "lg:mt-14" : ""}>
              <div className="group relative aspect-[3/4] overflow-hidden bg-sand">
                <SafeImage id={m.image} alt={m.alt} sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="transition-transform duration-[1200ms] group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-2xl text-ink">{m.name}</h3>
              <p className="mt-1 text-muted">{m.note}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
