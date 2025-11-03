import RatingStars from "./ratingStar";

type Props = {
  name: string;
  category: string;
  rating: number;
  totalReviews: number;
  shortDesc: string;
  longDesc: string;
  isFavorite?: boolean;
};

export default function BusinessHeaderCard({
  name,
  category,
  rating,
  totalReviews,
  shortDesc,
  longDesc,
  isFavorite,
}: Props) {
  return (
    <section className="mx-auto mt-6 w-full max-w-6xl px-4">
      <div className="rounded-2xl bg-gradient-to-br from-stone-700 to-stone-600 p-6 text-stone-100 shadow-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <button
            aria-label="Favorite"
            className={`h-8 w-8 rounded-full border border-stone-300 text-center leading-8 ${
              isFavorite ? "bg-rose-500" : "bg-transparent"
            }`}
            title="Favorite"
          >
            ♥
          </button>
        </div>

        <div className="mt-2 inline-flex items-center gap-3">
          <span className="rounded-full bg-stone-500/50 px-3 py-1 text-xs">{category}</span>
          <RatingStars value={rating} />
          <span className="text-xs opacity-80">({totalReviews} Review)</span>
        </div>

        <p className="mt-4 text-sm opacity-90">{shortDesc}</p>
        <p className="mt-3 text-sm leading-6 opacity-90">{longDesc}</p>
      </div>
    </section>
  );
}
