"use client";
import Image from "next/image";
import { useState } from "react";
import { img } from "@/lib/utils";

type Props = { id: string; alt: string; sizes: string; className?: string; priority?: boolean };
export default function SafeImage({ id, alt, sizes, className = "", priority }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed)
    return <div role="img" aria-label={alt} className="absolute inset-0 bg-gradient-to-br from-sand to-bronze/60" />;
  return (
    <Image src={img(id)} alt={alt} fill sizes={sizes} priority={priority} onError={() => setFailed(true)}
      className={`object-cover ${className}`} />
  );
}
