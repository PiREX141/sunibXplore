// src/components/RatingStars.tsx
"use client";

interface RatingStarsProps {
  value: number;
  outOf?: number;
}

export default function RatingStars({ value, outOf = 5 }: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${value}`}>
      {Array.from({ length: outOf }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-5 w-5 ${
            i < value ? "fill-yellow-400" : "fill-gray-300"
          }`}
        >
          <path d="M10 1.5 12.9 7l6.1.9-4.4 4.3 1 6.1L10 15.8 4.4 18.3l1-6.1L1 7.9 7.1 7 10 1.5z" />
        </svg>
      ))}
    </div>
  );
}
