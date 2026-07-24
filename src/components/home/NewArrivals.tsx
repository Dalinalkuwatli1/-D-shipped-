"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { getNewArrivals } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export function NewArrivals() {
  const products = getNewArrivals().slice(0, 4);
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Just In</p>
          <h2 className="font-display text-4xl font-bold">New Arrivals</h2>
        </div>
        <Link href="/shop?sort=newest" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <ProductCard product={p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
