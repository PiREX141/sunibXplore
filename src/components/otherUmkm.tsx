import Image from "next/image";
import Link from "next/link";
import RatingStars from "./ratingStar";
import { Suggestion } from "@/lib/types";

export default function OtherBusinesses({ items }: { items: Suggestion[] }) {
  return (
    <section className="mt-12 bg-stone-900 py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h3 className="text-center text-lg font-semibold text-stone-100">
          Other businesses you may like
        </h3>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl bg-stone-800 p-6 text-stone-100 shadow"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20">
                  <Image
                    src={s.imageUrl}
                    alt={s.name}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-stone-50">{s.name}</div>
                      <div className="text-xs text-stone-300">{s.category}</div>
                    </div>
                    <button
                      aria-label="Favorite"
                      className="h-7 w-7 rounded-full border border-stone-400 text-center leading-7"
                    >
                      ♥
                    </button>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <RatingStars value={s.rating} />
                    <Link
                      href={`/umkm/${s.id}`}
                      className="ml-auto inline-block rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-900 hover:bg-white"
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
