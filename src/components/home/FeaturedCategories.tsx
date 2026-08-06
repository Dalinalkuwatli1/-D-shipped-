"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

// Men's-focused categories with unique, accurately matched images
const categories = [
  {
    name: "New Arrivals",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    href: "/shop?category=men&sort=newest",
    filter: (p: typeof products[0]) => p.category === "men",
    span: "col-span-2 row-span-2",
  },
  {
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    href: "/shop?category=men&sub=t-shirts",
    filter: (p: typeof products[0]) => p.category === "men" && p.subcategory === "T-Shirts",
  },
  {
    name: "Jackets",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    href: "/shop?category=men&sub=jackets",
    filter: (p: typeof products[0]) => p.category === "men" && (p.subcategory === "Jackets" || p.subcategory === "Coats"),
  },
  {
    name: "Trousers",
    image: "https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=600&q=80",
    href: "/shop?category=men&sub=trousers",
    filter: (p: typeof products[0]) => p.category === "men" && p.subcategory === "Trousers",
  },
  {
    name: "Shirts",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80",
    href: "/shop?category=men&sub=shirts",
    filter: (p: typeof products[0]) => p.category === "men" && p.subcategory === "Shirts",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&q=80",
    href: "/shop?category=accessories",
    filter: (p: typeof products[0]) => p.category === "accessories",
  },
  {
    name: "Bags",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    href: "/shop?category=bags",
    filter: (p: typeof products[0]) => p.category === "bags",
  },
  {
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    href: "/shop?category=shoes",
    filter: (p: typeof products[0]) => p.category === "shoes",
  },
  {
    name: "Watches",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
    href: "/shop?category=accessories&sub=watches",
    filter: (p: typeof products[0]) => p.category === "accessories" && p.subcategory === "Watches",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function FeaturedCategories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Men&apos;s Collection</p>
          <h2 className="font-display text-4xl font-bold">Shop by Category</h2>
        </div>
        <Link href="/shop?category=men" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          View all →
        </Link>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]"
      >
        {categories.map((cat, idx) => {
          const count = products.filter(cat.filter).length;
          const isHero = idx === 0;
          return (
            <motion.div
              key={cat.name}
              variants={item}
              className={isHero ? "col-span-2 row-span-2" : ""}
            >
              <Link
                href={cat.href}
                className="group block relative overflow-hidden rounded-2xl h-full"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  sizes={isHero ? "600px" : "300px"}
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* Hover tint */}
                <div className="absolute inset-0 bg-[#C59A5A]/0 group-hover:bg-[#C59A5A]/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className={`text-white font-display font-bold ${isHero ? "text-3xl" : "text-xl"}`}>
                    {cat.name}
                  </h3>
                  <p className="text-white/65 text-sm mt-0.5 font-light">
                    {count} piece{count !== 1 ? "s" : ""}
                  </p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
