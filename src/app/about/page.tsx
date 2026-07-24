"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { ShieldCheck, Sparkles, Heart } from "lucide-react";

export default function AboutPage() {
  // Showcase selected premium pieces for the Studio profile
  const studioProducts = products.filter(p => p.isFeatured).slice(0, 3);

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen">
      {/* Editorial Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
          alt="DALIN Studio Atelier"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent" />
        <div className="relative text-center space-y-4 px-4 z-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            The Heritage
          </span>
          <h1 className="font-display text-5xl sm:text-7xl font-extrabold text-white tracking-tight">
            Our Story & Studio
          </h1>
          <p className="text-sm sm:text-base text-white/80 max-w-xl mx-auto font-light">
            Founded with intention. Crafted for global citizens who seek beauty in restraint and luxury in details.
          </p>
        </div>
      </section>

      {/* Main Narrative Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C59A5A]">
            The Philosophy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            A Response to Excess.
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            In an era of fleeting trends and mass production, DALIN was conceived as an oasis of slowness. We believe that what we wear is an extension of our values. Every seam, button, and fabric choice is chosen with an obsessive commitment to quality and longevity.
          </p>
          <p className="text-muted-foreground font-light leading-relaxed">
            Our collections are developed in partnership with family-run ateliers across Italy, France, and Japan. By keeping production runs limited, we reduce waste and elevate the craftsmanship of each single garment.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border">
            <div className="flex gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C59A5A] shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider">Uncompromising Materials</h4>
                <p className="text-[10px] text-muted-foreground mt-0.5">Belgian linen, Mongolian cashmere, Mulberry silk.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Heart className="w-5 h-5 text-[#C59A5A] shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider">Ethical Ateliers</h4>
                <p className="text-[10px] text-muted-foreground mt-0.5">Fair wages, safe spaces, artisanal heritage.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
            alt="Atelier workspace sewing"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Curated Products Showcase */}
      <section id="studio" className="bg-card border-y border-border py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C59A5A]">
              The Core Capsule
            </span>
            <h3 className="font-display text-3xl font-bold tracking-tight">
              Featured Studio Pieces
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm mx-auto font-light">
              Explore the hallmark designs that define the DALIN silhouette.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studioProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-24 text-center max-w-3xl mx-auto px-4">
        <Sparkles className="w-8 h-8 text-[#C59A5A] mx-auto mb-6 opacity-80" />
        <blockquote className="font-display text-2xl sm:text-3xl font-light italic leading-relaxed text-foreground/95">
          &ldquo;Luxury is not about being noticed, it is about being remembered for holding onto things that endure.&rdquo;
        </blockquote>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground mt-4">
          — Dalin Alkuwatli, Founder
        </p>
      </section>
    </div>
  );
}
