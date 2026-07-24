"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl min-h-[380px] flex items-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400&q=85"
          alt="Summer sale"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative px-10 md:px-16 py-14 max-w-xl">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-amber-400 mb-4">
            Limited Time
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            End of Season
            <br />
            <em className="font-light">Sale.</em>
          </h2>
          <p className="mt-4 text-white/65 text-base leading-relaxed">
            Up to 40% off selected styles. Free shipping included. No minimum order.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
            <span className="text-red-400 text-sm font-semibold">Use code: NEWSEASON</span>
          </div>
          <div className="mt-8">
            <Link
              href="/shop?onSale=true"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-white text-black font-semibold text-sm rounded-full hover:bg-white/90 transition-colors"
            >
              Shop the Sale
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
