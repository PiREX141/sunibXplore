"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function ImageCarousel({ images }: Props) {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((p) => (p - 1 + images.length) % images.length);
  const next = () => setIdx((p) => (p + 1) % images.length);

  return (
    <div className="mx-auto mt-3 w-full max-w-6xl px-4">
      <div className="relative overflow-hidden rounded-2xl bg-stone-200">
        {/* Slides */}
        <div className="relative aspect-[16/6] md:aspect-[16/6]">
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Gallery ${i + 1}`}
              fill
              priority={i === 0}
              className={`object-cover transition-opacity duration-500 ${
                i === idx ? "opacity-100" : "opacity-0"
              }`}
              sizes="100vw"
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-white hover:bg-black/60"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-2 py-1 text-white hover:bg-black/60"
          aria-label="Next"
        >
          ›
        </button>

        {/* Dots */}
        <div className="pointer-events-none absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === idx ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
