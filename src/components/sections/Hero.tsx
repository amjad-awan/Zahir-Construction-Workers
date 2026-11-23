"use client";
import { motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { waLink } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;
export default function Hero() {
  const h = site.hero;
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <SafeImage id={h.image} alt="Modern luxury residence with architectural lines" sizes="100vw" priority className="-z-10" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/50 to-ink/30" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/70 via-transparent to-transparent" aria-hidden />
      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-44 sm:px-8 sm:pb-28">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }}
          className="max-w-4xl text-[2.75rem] leading-[1.04] text-white sm:text-7xl lg:text-[5.5rem]">
          {h.headline}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{h.text}</motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.45, ease }}
          className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="#services">{h.primaryCta}</Button>
          <Button variant="outlineLight" href={waLink()} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-4 w-4" aria-hidden />{h.secondaryCta}</Button>
        </motion.div>
      </div>
      <a href="#about" aria-label="Scroll to content" className="absolute bottom-6 right-6 hidden flex-col items-center gap-2 text-xs text-white/70 sm:flex">
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}><ChevronDown className="h-4 w-4" /></motion.span>
        <span className="h-10 w-px bg-bronze" />
      </a>
    </section>
  );
}
