// Central site configuration. Edit here; no component files need to change.
export const site = {
  name: "Zahir Construction Workers",
  shortName: "Zahir Construction",
  tagline: "Construction, marble and finishing",
  phone: "03327803273",
  phoneDisplay: "0332 7803273",
  whatsappNumber: "923327803273", // international format, no "+"
  email: "", // optional: add when available
  address: "", // intentionally empty: not verified
  socials: [] as { label: string; href: string }[],
  url: "https://example.com",
  topBarText: "Construction and renovation services",
  seo: {
    title: "Zahir Construction Workers | Construction, Marble & Tile Finishing",
    description:
      "Building construction, marble and tile installation, flooring, renovation and finishing services. Call or WhatsApp Zahir Construction Workers to discuss your project.",
  },
  hero: {
    headline: "Building Your Vision. Crafting Lasting Excellence.",
    text: "From structural construction to premium marble and tile finishing, we bring quality craftsmanship and attention to detail to every project.",
    image: "photo-1600596542815-ffad4c1539a9",
    primaryCta: "Explore Our Services",
    secondaryCta: "Contact Us on WhatsApp",
  },
  about: {
    eyebrow: "Who we are",
    heading: "Built on Craftsmanship. Defined by Quality.",
    paragraphs: [
      "Good construction is decided in the details: how a wall is set, how a marble slab is laid, how a joint meets the floor. We approach every project with that in mind, from the first foundation line to the final polish.",
      "Whether you are building new, renovating, or finishing a space with marble and tile, we work to your requirements and treat your property with care.",
    ],
    cta: "Discover More",
    image: "photo-1503387762-592deb58ef4e",
    imageAlt: "Architectural detail of a modern building under construction",
  },
  cta: {
    heading: "Let's Build Something Exceptional.",
    text: "Have a construction, renovation, or finishing project in mind? Get in touch to discuss your requirements.",
  },
  footerText:
    "Construction, marble installation, tiling and finishing, delivered with care for materials and detail.",
  materials: {
    eyebrow: "Materials & craftsmanship",
    heading: "The surface is where quality is seen.",
    text: "Material choice and installation shape how a space looks and ages. We work with natural and engineered finishes, laid with attention to alignment, joints and edges.",
  },
  projects: {
    eyebrow: "Our work",
    heading: "A look at the standard we build toward.",
    notice:
      "Illustrative demo imagery. These photos are stock references for the style of work, not completed projects by Zahir Construction Workers. Replace them with real project photos.",
  },
  currentYear: new Date().getFullYear(),
};

export const phoneHref = `tel:+${site.whatsappNumber}`;
export const whatsappBase = `https://wa.me/${site.whatsappNumber}`;
