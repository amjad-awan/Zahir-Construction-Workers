import { whatsappBase } from "@/data/site";
export const cn = (...c: (string | false | null | undefined)[]) =>
  c.filter(Boolean).join(" ");
export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
export const waLink = (msg?: string) =>
  msg ? `${whatsappBase}?text=${encodeURIComponent(msg)}` : whatsappBase;
