import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  openGraph: { title: site.seo.title, description: site.seo.description, type: "website", siteName: site.name },
};
export const viewport: Viewport = { themeColor: "#202522", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org", "@type": "GeneralContractor", name: site.name,
  telephone: `+${site.whatsappNumber}`, description: site.seo.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
