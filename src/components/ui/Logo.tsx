import { site } from "@/data/site";

export default function Logo({ light = false, className = "" }: { light?: boolean; className?: string }) {
  const tone = light ? "text-white" : "text-ink";
  const [first, ...rest] = site.name.split(" ");
  return (
    <span className={`inline-flex items-center gap-3 ${tone} ${className}`}>
      <svg viewBox="0 0 48 48" className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" fill="none" aria-hidden>
        {/* frame */}
        <rect x="1.5" y="1.5" width="45" height="45" stroke="currentColor" strokeWidth="1.5" />
        {/* bronze corner block */}
        <rect x="31" y="31" width="15.5" height="15.5" fill="var(--accent)" />
        {/* Z built like a steel beam */}
        <path d="M12 13h22L12 35h14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.55rem] font-extrabold tracking-[0.08em] sm:text-[1.75rem]">
          {first.toUpperCase()}
        </span>
        <span className="mt-1.5 flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.28em] sm:text-[0.65rem]">
          <span className="h-px w-4 bg-bronze" />
          {rest.join(" ").toUpperCase()}
        </span>
      </span>
    </span>
  );
}