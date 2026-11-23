"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { site } from "@/data/site";

const ease = [0.76, 0, 0.24, 1] as const;

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => setShow(false), 2300);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
          {/* Curtain halves */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-ink"
            exit={{ y: "-100%", transition: { duration: 0.9, delay: 0.2, ease } }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-ink"
            exit={{ y: "100%", transition: { duration: 0.9, delay: 0.2, ease } }}
          />

          {/* Centre content */}
          <motion.div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
            exit={{ opacity: 0, y: -12, transition: { duration: 0.35 } }}
          >
            <motion.span
              className="mb-9 block h-px w-24 origin-center bg-bronze"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, ease }}
            />

            {/* Logo: wipe reveal from left to right */}
           {/* Logo: scale on the outer wrapper, wipe reveal on the inner one */}
<div className="origin-center scale-110 sm:scale-150">
  <motion.div
    initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0.4 }}
    animate={{ clipPath: "inset(-10% -10% -10% -10%)", opacity: 1 }}
    transition={{ duration: 1, delay: 0.35, ease }}
  >
    <Logo light />
  </motion.div>
</div>

            <motion.p
              className="mt-10 text-sm text-bronze sm:mt-12"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              {site.tagline}
            </motion.p>
          </motion.div>

          {/* Progress line */}
          <motion.span
            className="absolute inset-x-0 bottom-0 z-10 h-[3px] origin-left bg-bronze"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}