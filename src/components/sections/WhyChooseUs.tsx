import * as Icons from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { features } from "@/data/features";

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading light eyebrow="Why choose us" title="The details are the work." text="What we aim to bring to every project, large or small." className="lg:sticky lg:top-32" />
        </Reveal>
        <ul className="lg:col-span-7">
          {features.map((f, i) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[f.icon] ?? Icons.Ruler;
            return (
              <Reveal key={f.title} delay={i * 0.05}>
                <li className="flex gap-6 border-t border-white/15 py-8 first:border-t-0 first:pt-0">
                  <Icon className="mt-1 h-7 w-7 shrink-0 text-bronze" strokeWidth={1.4} aria-hidden />
                  <div><h3 className="text-2xl text-white sm:text-3xl">{f.title}</h3><p className="mt-2 max-w-lg leading-relaxed text-white/70">{f.text}</p></div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
