// Add, remove or reorder services here. `span` is the desktop width out of 12 columns.
export type Service = { id: string; title: string; description: string; icon: string; image: string; alt: string; span: number };
export const services: Service[] = [
  { id: "building", title: "Building Construction", description: "Structural construction planned and built with care, from foundations through to the finished shell.", icon: "Building2", image: "photo-1541888946425-d81bb19240f5", alt: "Building under construction with steel and concrete", span: 6 },
  { id: "residential", title: "Residential Construction", description: "Homes built around how you live.", icon: "Home", image: "photo-1600585154340-be6161a56a0c", alt: "Modern residential house exterior", span: 3 },
  { id: "commercial", title: "Commercial Construction", description: "Shops, offices and commercial spaces built to function well.", icon: "Store", image: "photo-1486406146926-c627a92ad1ab", alt: "Modern commercial building facade", span: 3 },
  { id: "marble", title: "Marble Installation", description: "Careful cutting, laying and finishing of marble floors and surfaces.", icon: "Gem", image: "photo-1600607687939-ce8a6c25118c", alt: "Elegant interior with polished stone flooring", span: 3 },
  { id: "tiles", title: "Tiles & Flooring", description: "Tile and flooring installation with clean lines and even joints.", icon: "LayoutGrid", image: "photo-1584622650111-993a426fbf0a", alt: "Bathroom with finished tile work", span: 3 },
  { id: "renovation", title: "Renovation & Remodeling", description: "Update kitchens, bathrooms and living areas, or reshape an entire property, with minimal fuss.", icon: "Hammer", image: "photo-1556911220-bff31c812dba", alt: "Renovated modern kitchen", span: 6 },
  { id: "interior", title: "Interior Finishing", description: "The final layers that make a space feel complete: surfaces, edges and details.", icon: "Paintbrush", image: "photo-1618221195710-dd6b41faaea6", alt: "Finished contemporary interior", span: 6 },
  { id: "masonry", title: "Masonry & General Construction", description: "Brickwork, block work and general construction tasks handled to your requirements.", icon: "Layers", image: "photo-1504307651254-35680f356dfd", alt: "Construction workers on site", span: 6 },
];
