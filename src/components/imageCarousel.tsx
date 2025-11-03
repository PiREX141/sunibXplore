"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = { images: string[] };

export default function ImageCarousel({ images }: Props) {
  const [idx, setIdx] = useState(0);
  const n = images.length;
  const wrap = (i: number) => (i + n) % n;

  const prev = () => setIdx((p) => wrap(p - 1));
  const next = () => setIdx((p) => wrap(p + 1));
  const goTo = (i: number) => setIdx(wrap(i));

  // keyboard
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!rootRef.current?.contains(document.activeElement)) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // map each slide to a relative position … -2, -1, 0, 1, 2 (for peeking)
  const relPos = (i: number) => {
    let d = i - idx;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  return (
    <div ref={rootRef} className="mx-auto mt-3 w-full max-w-6xl px-4 outline-none" tabIndex={0}>
      {/* VIEWPORT */}
      <div className="relative h-[340px] md:h-[420px]">
        {/* we need overflow visible so neighbors can peek */}
        <div className="relative h-full overflow-visible">
          {images.map((src, i) => {
            const d = relPos(i); // -2..2
            const isActive = d === 0;

            // where each card sits; tweak 58% to control the amount of peek
            const translate = `translateX(calc(-50% + ${d * 58}%))`;
            const scale = isActive ? 1 : 0.9;
            const z = 30 - Math.abs(d);
            const opacity = isActive ? 1 : 0.55;

            return (
              <div
                key={src}
                className="absolute top-0 left-1/2 h-full w-[78%] md:w-[82%] rounded-3xl shadow-lg transition-all duration-500"
                style={{
                  transform: `${translate} scale(${scale})`,
                  zIndex: z,
                  opacity,
                  filter: isActive ? "none" : "grayscale(8%) brightness(0.9)",
                }}
                aria-hidden={!isActive}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  priority={i === 0}
                  className="rounded-3xl object-cover"
                  sizes="(min-width: 1024px) 75vw, 90vw"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* CONTROL BAR (below the images) */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="rounded-full border border-stone-300/70 bg-white/70 px-3 py-2 text-stone-700 shadow-sm backdrop-blur hover:bg-white"
          aria-label="Previous"
        >
          ←
        </button>

        {/* dots */}
        <div className="flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === idx ? "w-6 bg-stone-800" : "bg-stone-400/70 hover:bg-stone-600/80"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="rounded-full border border-stone-300/70 bg-white/70 px-3 py-2 text-stone-700 shadow-sm backdrop-blur hover:bg-white"
          aria-label="Next"
        >
          →
        </button>
      </div>
    </div>
  );
}
