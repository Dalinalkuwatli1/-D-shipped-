"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

// Real counts computed from the product catalogue
const categories = [
  {
    name: "Women",
    // Fashion model — woman in elegant outfit
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    href: "/shop?category=women",
    key: "women",
  },
  {
    name: "Men",
    // Man in smart casual clothing — correct gender
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    href: "/shop?category=men",
    key: "men",
  },
  {
    name: "Bags",
    // Curated leather handbag flat-lay
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
    href: "/shop?category=bags",
    key: "bags",
  },
  {
    name: "Shoes",
    // Premium footwear editorial
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    href: "/shop?category=shoes",
    key: "shoes",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Shop by Category</p>
          <h2 className="font-display text-4xl font-bold">Our Collections</h2>
        </div>
        <Link href="/shop" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          View all →
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {categories.map((cat) => {
          const count = products.filter((p) => p.category === cat.key).length;
          return (
            <motion.div key={cat.name} variants={item}>
              <Link href={cat.href} className="group block relative overflow-hidden rounded-2xl aspect-[3/4]">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Hover tint */}
                <div className="absolute inset-0 bg-[#C59A5A]/0 group-hover:bg-[#C59A5A]/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white font-display text-2xl font-bold">{cat.name}</h3>
                  <p className="text-white/65 text-sm mt-0.5 font-light">{count} piece{count !== 1 ? "s" : ""}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
