"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const occasions = [
  {
    name: "Wedding Atelier",
    tag: "Exclusive Gowns & Suits",
    image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=800&q=80",
    href: "/shop?occasion=wedding",
    size: "md:col-span-3 h-[450px]",
  },
  {
    name: "Evening Gala",
    tag: "Chic Cocktail & Nightwear",
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
    href: "/shop?occasion=evening",
    size: "md:col-span-2 h-[450px]",
  },
  {
    name: "Casual Luxury",
    tag: "Refined Streetwear & Knits",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    href: "/shop?occasion=casual",
    size: "md:col-span-2 h-[400px]",
  },
  {
    name: "Office Editorial",
    tag: "Sharp Blazers & Trousers",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80",
    href: "/shop?occasion=office",
    size: "md:col-span-2 h-[400px]",
  },
  {
    name: "Signature Luxury",
    tag: "Atelier Handcrafted Pieces",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    href: "/shop?occasion=luxury",
    size: "md:col-span-1 h-[400px]",
  },
];

export function ShopByOccasion() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C59A5A]">Curated Wardrobe</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">Shop by Occasion</h2>
        </div>
        <p className="text-muted-foreground max-w-sm mt-4 md:mt-0 text-sm font-light">
          Tailored styling guides for every calendar event. Elevate your presence wherever you go.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {occasions.map((occ, idx) => (
          <motion.div
            key={occ.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`relative rounded-3xl overflow-hidden group shadow-sm cursor-pointer ${occ.size}`}
          >
            {/* Background Image with scale on hover */}
            <Image
              src={occ.image}
              alt={occ.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
            />

            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover blur overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 backdrop-blur-[1px] transition-all duration-500" />

            {/* Content overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59A5A] mb-1.5">
                {occ.tag}
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight">{occ.name}</h3>

              {/* Explore button — slides up on hover */}
              <div className="mt-5 overflow-hidden">
                <Link
                  href={occ.href}
                  className="flex items-center gap-2 w-fit px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 hover:bg-[#C59A5A] hover:text-white"
                >
                  Explore <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
