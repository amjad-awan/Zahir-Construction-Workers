"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { site, phoneHref } from "@/data/site";
import { navigation } from "@/data/navigation";
import { waLink } from "@/lib/utils";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`bg-ink text-xs text-white/80 transition-all duration-300 sm:text-[13px] ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-9 opacity-100"}`}>
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 sm:px-8">
          <span className="truncate">{site.topBarText}</span>
          <a href={phoneHref} className="flex shrink-0 items-center gap-2 font-medium text-white hover:text-bronze">
            <Phone className="h-3.5 w-3.5" aria-hidden /> {site.phoneDisplay}
          </a>
        </div>
      </div>
      <nav aria-label="Primary" className={`transition-all duration-300 ${solid ? "bg-stone/95 shadow-[0_1px_0_rgba(32,37,34,0.1)] backdrop-blur" : "bg-transparent"}`}>
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
         <a href="#home" aria-label={`${site.name} home`}>
  <Logo light={!solid} />
</a>
          <ul className="hidden items-center gap-9 lg:flex">
            {navigation.map((n) => (
              <li key={n.href}>
                <a href={n.href} className={`group relative text-[15px] font-medium ${solid ? "text-ink" : "text-white"}`}>
                  {n.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-bronze transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a href={waLink()} target="_blank" rel="noopener noreferrer"
              className="hidden items-center gap-2 bg-bronze px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white sm:inline-flex">
              <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
            </a>
            <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}
              className={`grid h-11 w-11 place-items-center lg:hidden ${solid ? "text-ink" : "text-white"}`}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden bg-stone lg:hidden">
              <ul className="mx-auto max-w-7xl px-5 pb-6 sm:px-8">
                {navigation.map((n) => (
                  <li key={n.href} className="border-b border-ink/10">
                    <a href={n.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-2xl text-ink">{n.label}</a>
                  </li>
                ))}
                <li className="pt-5">
                  <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 bg-bronze font-semibold text-ink">
                    <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp Us
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
