"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getBestSellers } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function BestSellers() {
  const products = getBestSellers().slice(0, 4);
  return (
    <section className="bg-muted/50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Most Loved</p>
            <h2 className="font-display text-4xl font-bold">Best Sellers</h2>
          </div>
          <Link href="/shop?sortBy=best-seller" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="transition-all duration-300"
            >
              <ProductCard product={p} priority={i < 2} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
