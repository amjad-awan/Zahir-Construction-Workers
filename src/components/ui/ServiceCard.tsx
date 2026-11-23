"use client";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import SafeImage from "./SafeImage";
import { waLink } from "@/lib/utils";
import type { Service } from "@/data/services";

export default function ServiceCard({ s, index }: { s: Service; index: number }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Hammer;
  const wide = s.span >= 6;
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative isolate flex min-h-[340px] flex-col justify-end overflow-hidden bg-ink ${wide ? "lg:col-span-6" : "lg:col-span-3"} sm:min-h-[380px]`}>
      <SafeImage id={s.image} alt={s.alt} sizes="(min-width:1024px) 50vw, 100vw" className="-z-10 transition-transform duration-[1200ms] ease-out group-hover:scale-105" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/5" aria-hidden />
      <div className="p-6 sm:p-8">
        <Icon className="mb-4 h-6 w-6 text-bronze" strokeWidth={1.5} aria-hidden />
        <h3 className="text-2xl text-white sm:text-3xl">{s.title}</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/75">{s.description}</p>
        <a href={waLink(`Hello, I would like to inquire about ${s.title}.`)} target="_blank" rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-1.5 border-b border-bronze pb-1 text-sm font-semibold text-white transition-all group-hover:gap-3">
          Inquire about this service <ArrowUpRight className="h-4 w-4" aria-hidden />
        </a>
      </div>
    </motion.article>
  );
}
