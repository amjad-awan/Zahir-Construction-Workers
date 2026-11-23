import { cn } from "@/lib/utils";
export default function SectionHeading({ eyebrow, title, text, light, className }: { eyebrow?: string; title: string; text?: string; light?: boolean; className?: string }) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className={cn("mb-5 flex items-center gap-3 text-sm font-semibold", light ? "text-bronze" : "text-ink2")}>
          <span className="h-px w-10 bg-bronze" aria-hidden />{eyebrow}
        </p>
      )}
      <h2 className={cn("text-4xl leading-[1.1] sm:text-5xl lg:text-6xl", light ? "text-white" : "text-ink")}>{title}</h2>
      {text && <p className={cn("mt-6 text-lg leading-relaxed", light ? "text-white/75" : "text-muted")}>{text}</p>}
    </div>
  );
}
