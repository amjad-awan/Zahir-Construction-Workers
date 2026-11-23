// ILLUSTRATIVE DEMO CONTENT. Replace with real project photos and titles.
export type Project = {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  featured?: boolean;
};
export const projects: Project[] = [
  {
    id: "p1",
    title: "Contemporary Family Residence",
    category: "Residential",
    image: "photo-1613490493576-7fde63acd811",
    alt: "Contemporary luxury residence at dusk",
    featured: true,
  },
  {
    id: "p2",
    title: "Marble Living Space",
    category: "Marble Flooring",
    image: "photo-1600210492486-724fe5c67fb0",
    alt: "Living room with light stone flooring",
  },
  {
    id: "p3",
    title: "Clean-Lined Facade",
    category: "Exterior",
    image: "photo-1600566753190-17f0baa2a6c3",
    alt: "Modern house facade",
  },
  {
    id: "p4",
    title: "Spa-Style Bathroom",
    category: "Tile Work",
    image: "photo-1600566752355-35792bedcfea",
    alt: "Bathroom with stone and tile finishes",
  },
  {
    id: "p5",
    title: "Open-Plan Kitchen",
    category: "Interior Finishing",
    image: "photo-1600585154526-990dced4db0d",
    alt: "Open plan kitchen and dining",
  },
];
