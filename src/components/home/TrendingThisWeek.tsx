"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function TrendingThisWeek() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Show best sellers or featured items
  const trendingItems = products.filter(p => p.isBestSeller || p.isFeatured || p.isNew).slice(0, 6);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C59A5A]">Most Coveted</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">Trending This Week</h2>
        </div>
        
        {/* Navigation Slider buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Snap Scrollable Horizontal Container */}
      <div
        ref={scrollRef}
        className="flex gap-7 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6"
        style={{ scrollbarWidth: "none" }}
      >
        {trendingItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="w-[280px] sm:w-[320px] shrink-0 snap-start snap-always transition-transform duration-300 hover:-translate-y-2"
            style={{
              filter: "drop-shadow(0 0 0 transparent)",
            }}
            whileHover={{
              y: -8,
              filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.12))",
            }}
          >
            <ProductCard product={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
