"use client";
import { motion } from "framer-motion";

const brands = [
  { name: "DALIN STUDIO", type: "Signature" },
  { name: "MILANO ATELIER", type: "Ready-To-Wear" },
  { name: "LUMIÈRE", type: "Haute Couture" },
  { name: "MAISON NOIRE", type: "Atelier" },
  { name: "ATELIER ONE", type: "Studio Edition" },
  { name: "SIGNATURE LINE", type: "Bespoke" },
];

export function FeaturedBrands() {
  return (
    <section className="bg-card border-y border-border py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">Discerning Curation</span>
          <p className="text-xs text-muted-foreground mt-1">Available atelier collections and featured design houses</p>
        </div>

        {/* Marquee effect or flex grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
          {brands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="flex flex-col items-center justify-center group"
            >
              <span className="font-display text-lg sm:text-xl font-black tracking-[0.15em] text-foreground/80 group-hover:text-[#C59A5A] transition-colors duration-300 cursor-default">
                {brand.name}
              </span>
              <span className="text-[8px] font-bold tracking-[0.2em] text-muted-foreground uppercase mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity">
                {brand.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
