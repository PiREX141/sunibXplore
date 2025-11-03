export type Product = {
  id: string;
  title: string;
  priceLabel: string;
  imageUrl: string;
};

export type Business = {
  id: string;
  name: string;
  category: string;
  rating: number;
  totalReviews: number;
  isFavorite?: boolean;
  gallery: string[];
  descriptionShort: string;
  descriptionLong: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  products: Product[];
};

export type Suggestion = {
  id: string;
  name: string;
  category: string;
  rating: number;
  imageUrl: string;
};
