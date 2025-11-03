type Props = {
  lat: number;
  lng: number;
  address: string;
};

export default function MapEmbed({ lat, lng, address }: Props) {
  const q = encodeURIComponent(`${lat},${lng}`);
  const mapSrc = `https://maps.google.com/maps?q=${q}&z=14&output=embed`;

  return (
    <section className="mx-auto w-full max-w-6xl px-4">
      <h2 className="flex items-center gap-2 text-lg font-semibold text-stone-800">
        <span className="inline-block h-6 w-6 rounded-full bg-stone-800 text-center text-stone-100 leading-6">
          ⦿
        </span>
        Location
      </h2>

      <div className="mt-3 overflow-hidden rounded-2xl border border-stone-200">
        <iframe
          title="map"
          src={mapSrc}
          className="h-[320px] w-full"
          loading="lazy"
        />
      </div>

      <p className="mt-4 text-sm text-stone-700">{address}</p>
    </section>
  );
}
