import { cn } from "@/lib/utils";
type Variant = "bronze" | "dark" | "outline" | "outlineLight";
const styles: Record<Variant, string> = {
  bronze: "bg-bronze text-ink hover:bg-ink hover:text-white",
  dark: "bg-ink text-white hover:bg-bronze hover:text-ink",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  outlineLight: "border border-white/60 text-white hover:bg-white hover:text-ink",
};
type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant };
export default function Button({ variant = "bronze", className, children, ...rest }: Props) {
  return (
    <a {...rest} className={cn("inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3 text-[15px] font-semibold transition-colors duration-300", styles[variant], className)}>
      {children}
    </a>
  );
}
