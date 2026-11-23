import { site, phoneHref } from "@/data/site";
import { navigation } from "@/data/navigation";
import { services } from "@/data/services";
import { waLink } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl text-white">{site.name}</p>
          <p className="mt-4 max-w-sm leading-relaxed">{site.footerText}</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-2">
          <p className="mb-4 font-semibold text-white">Navigate</p>
          <ul className="space-y-2.5">{navigation.map((n) => <li key={n.href}><a href={n.href} className="hover:text-bronze">{n.label}</a></li>)}</ul>
        </nav>
        <div className="md:col-span-3">
          <p className="mb-4 font-semibold text-white">Services</p>
          <ul className="space-y-2.5">{services.slice(0, 6).map((s) => <li key={s.id}><a href="#services" className="hover:text-bronze">{s.title}</a></li>)}</ul>
        </div>
        <div className="md:col-span-2">
          <p className="mb-4 font-semibold text-white">Contact</p>
          <ul className="space-y-2.5">
            <li><a href={phoneHref} className="hover:text-bronze">{site.phoneDisplay}</a></li>
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-bronze">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-sm">© {site.currentYear} {site.name}. All rights reserved.</div>
    </footer>
  );
}
