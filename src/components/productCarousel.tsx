"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Product } from "@/lib/types";

export default function ProductCarousel({ products }: { products: Product[] }) {
  const [index, setIndex] = useState(0);
  const page = 2; // show 2 cards per view (like the design)
  const pages = useMemo(() => Math.ceil(products.length / page), [products.length]);

  const view = products.slice(index * page, index * page + page);

  const prev = () => setIndex((p) => (p - 1 + pages) % pages);
  const next = () => setIndex((p) => (p + 1) % pages);

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8">
      <div className="relative flex items-center">
        <button
          aria-label="Previous products"
          onClick={prev}
          className="absolute -left-2 top-1/2 -translate-y-1/2 rounded-full border border-stone-400 bg-white/80 px-2 py-1 text-stone-700 hover:bg-white"
        >
          ‹
        </button>

        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
          {view.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl bg-gradient-to-b from-stone-100 to-stone-50 p-6 shadow"
            >
              <div className="relative mx-auto h-36 w-36">
                <Image
                  src={p.imageUrl}
                  alt={p.title}
                  fill
                  className="object-contain"
                  sizes="144px"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-stone-800">{p.title}</h3>
                <p className="text-sm text-stone-500">{p.priceLabel}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="Next products"
          onClick={next}
          className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full border border-stone-400 bg-white/80 px-2 py-1 text-stone-700 hover:bg-white"
        >
          ›
        </button>
      </div>
    </section>
  );
}
