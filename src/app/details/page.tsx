"use client";

import NavBar from "@/components/navbar"
import ImageCarousel from "@/components/imageCarousel";
import DetailHeaderCard from "@/components/detailHeaderCard";
import ProductCarousel from "@/components/productCarousel";
import MapEmbedded from "@/components/mapEmbedded";
import OtherUmkm from "@/components/otherUmkm";
import { mockBusiness, mockSuggestions } from "@/lib/data";

export default function Details() {
    const business = mockBusiness;
    const suggestions = mockSuggestions;
    
    return (
        <main className="min-h-screen bg-[#b99682]/30 overflow-hidden">
            <NavBar />
            <ImageCarousel images={business.gallery} />

            <DetailHeaderCard
                name={business.name}
                category={business.category}
                rating={business.rating}
                totalReviews={business.totalReviews}
                shortDesc={business.descriptionShort}
                longDesc={business.descriptionLong}
                isFavorite={business.isFavorite}
            />

            <ProductCarousel products={business.products} />

            <MapEmbedded
                lat={business.location.lat}
                lng={business.location.lng}
                address={business.location.address}
            />

            <OtherUmkm items={suggestions} />
        </main>
  );
}
