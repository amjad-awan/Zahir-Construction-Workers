import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal><SectionHeading eyebrow="What we do" title="Construction and finishing, under one roof." text="From the structure to the surface, choose what your project needs." /></Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {services.map((s, i) => <ServiceCard key={s.id} s={s} index={i} />)}
        </div>
      </div>
    </section>
  );
}
