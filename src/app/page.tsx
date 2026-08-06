import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedBrands } from "@/components/home/FeaturedBrands";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";



import { TrendingThisWeek } from "@/components/home/TrendingThisWeek";
import { Testimonials } from "@/components/home/Testimonials";
import { PromoBanner } from "@/components/home/PromoBanner";
import { BrandValues } from "@/components/home/BrandValues";
import { InstagramFeed } from "@/components/home/InstagramFeed";

export const metadata: Metadata = {
  title: "DALIN — Premium Fashion Atelier",
  description:
    "Discover curated fashion collections from DALIN Studio and the world's most discerning brands.",
};

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen">
      <HeroSection />
      <FeaturedBrands />
      <FeaturedCategories />



      <TrendingThisWeek />
      <Testimonials />
      <PromoBanner />
      <BrandValues />
      <InstagramFeed />
    </div>
  );
}
