"use client";
import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { site, phoneHref } from "@/data/site";
import { services } from "@/data/services";
import { waLink } from "@/lib/utils";

const field = "mt-2 w-full border border-ink/20 bg-white px-4 py-3.5 text-base text-ink placeholder:text-muted/70 focus:border-bronze focus:outline-none";

export default function Contact() {
  const [f, setF] = useState({ name: "", phone: "", service: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello ${site.name}, my name is ${f.name}.\nPhone: ${f.phone}\nService: ${f.service || "Not specified"}\n${f.message}`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };
  return (
    <section id="contact" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <SectionHeading eyebrow="Contact" title="Tell us about your project." text="Call, message on WhatsApp, or send the form and we will take it from there." />
          <dl className="mt-10 space-y-6">
            <div><dt className="text-sm font-semibold text-ink2">Business</dt><dd className="mt-1 font-serif text-2xl text-ink">{site.name}</dd></div>
            <div><dt className="text-sm font-semibold text-ink2">Phone</dt><dd className="mt-1"><a href={phoneHref} className="inline-flex items-center gap-2 font-serif text-2xl text-ink hover:text-ink2"><Phone className="h-5 w-5 text-bronze" aria-hidden />{site.phoneDisplay}</a></dd></div>
            <div><dt className="text-sm font-semibold text-ink2">WhatsApp</dt><dd className="mt-1"><a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-serif text-2xl text-ink hover:text-ink2"><MessageCircle className="h-5 w-5 text-bronze" aria-hidden />Chat now</a></dd></div>
            {site.email && <div><dt className="text-sm font-semibold text-ink2">Email</dt><dd className="mt-1 text-xl text-ink"><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>}
          </dl>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <form onSubmit={submit} className="bg-stone p-6 shadow-[0_20px_50px_-30px_rgba(32,37,34,0.35)] sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm font-semibold text-ink">Your name<input required value={f.name} onChange={set("name")} className={field} autoComplete="name" /></label>
              <label className="block text-sm font-semibold text-ink">Phone number<input required type="tel" value={f.phone} onChange={set("phone")} className={field} autoComplete="tel" /></label>
            </div>
            <label className="mt-6 block text-sm font-semibold text-ink">Service
              <select value={f.service} onChange={set("service")} className={field}>
                <option value="">Select a service</option>
                {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
              </select>
            </label>
            <label className="mt-6 block text-sm font-semibold text-ink">Message<textarea required rows={5} value={f.message} onChange={set("message")} className={field} placeholder="Describe your project" /></label>
            <button type="submit" className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 bg-ink px-7 py-3 font-semibold text-white transition-colors hover:bg-bronze hover:text-ink sm:w-auto">
              <MessageCircle className="h-4 w-4" aria-hidden />Send on WhatsApp
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
