import { MessageCircle, Phone } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site, phoneHref } from "@/data/site";
import { waLink } from "@/lib/utils";

export default function CTA() {
  return (
    <section className="bg-bronze py-24 sm:py-28">
      <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-4xl leading-[1.1] text-ink sm:text-6xl">{site.cta.heading}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink/80">{site.cta.text}</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button variant="dark" href={phoneHref}><Phone className="h-4 w-4" aria-hidden />Call Now</Button>
          <Button variant="outline" href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden />WhatsApp Us</Button>
        </div>
      </Reveal>
    </section>
  );
}
