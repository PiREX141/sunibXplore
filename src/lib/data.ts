import { Business, Suggestion } from "./types";

export const mockBusiness: Business = {
  id: "abc-umkm",
  name: "ABC UMKM",
  category: "Category",
  rating: 0,
  totalReviews: 0,
  isFavorite: false,
  gallery: [
    "/images/market-1.jpg",
    "/images/market-2.jpg",
    "/images/market-3.jpg",
  ],
  descriptionShort:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo tortor, dignissim at pulvinar eu, posuere in felis.",
  descriptionLong:
    "Vivamus vel aliquam nunc, sit amet dapibus erat. Praesent tincidunt pellentesque turpis, nec eleifend lacus ullamcorper ut. Nam a risus consectetur eros dignissim sodales et ut tortor. Phasellus bibendum, neque vitae feugiat commodo, risus purus dignissim dolor, at consequat nibh tellus vestibulum mauris. In nec pulvinar enim. Nulla placerat enim eu sem pharetra pellentesque.",
  location: {
    lat: -6.200000,
    lng: 106.816666,
    address:
      "Jl. Raya Kb. Jeruk No.27, RT.1/RW.9, Kemanggisan, Kec. Palmerah, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
  },
  products: [
    { id: "p1", title: "Product 1", priceLabel: "Price", imageUrl: "/images/donut-1.png" },
    { id: "p2", title: "Product 2", priceLabel: "Price", imageUrl: "/images/donut-1.png" },
    { id: "p3", title: "Product 3", priceLabel: "Price", imageUrl: "/images/donut-1.png" },
  ],
};

export const mockSuggestions: Suggestion[] = [
  {
    id: "s1",
    name: "ABC UMKM",
    category: "Category",
    rating: 0,
    imageUrl: "/images/donut-1.png",
  },
  {
    id: "s2",
    name: "ABC UMKM",
    category: "Category",
    rating: 0,
    imageUrl: "/images/donut-1.png",
  },
];
