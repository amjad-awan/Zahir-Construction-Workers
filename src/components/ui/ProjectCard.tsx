import SafeImage from "./SafeImage";
import type { Project } from "@/data/projects";
export default function ProjectCard({ p, className = "", sizes }: { p: Project; className?: string; sizes: string }) {
  return (
    <figure className={`group relative isolate overflow-hidden bg-ink ${className}`}>
      <SafeImage id={p.image} alt={p.alt} sizes={sizes} className="-z-10 transition-transform duration-[1400ms] ease-out group-hover:scale-105" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" aria-hidden />
      <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <span className="mb-2 inline-block bg-bronze px-3 py-1 text-xs font-semibold text-ink">{p.category}</span>
        <h3 className="text-xl text-white sm:text-2xl">{p.title}</h3>
      </figcaption>
    </figure>
  );
}
