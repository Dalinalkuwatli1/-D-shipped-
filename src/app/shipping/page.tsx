"use client";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { Truck, RotateCcw, ShieldCheck } from "lucide-react";

export default function ShippingPage() {
  // Best sellers recommendation
  const featuredProducts = products.filter(p => p.isBestSeller).slice(0, 3);

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59A5A]">Global Delivery</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Shipping & Returns</h1>
          <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto">
            Comprehensive details on our delivery channels, customs processing, and complimentary return steps.
          </p>
        </div>

        {/* Narrative */}
        <div className="space-y-12 mb-24">
          <div className="flex gap-4 p-6 bg-card border border-border/80 rounded-2xl">
            <Truck className="w-6 h-6 text-[#C59A5A] shrink-0" />
            <div className="space-y-2">
              <h3 className="font-bold text-base">Delivery Options & Rates</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                We offer free worldwide express delivery on all orders over $150. For orders under this threshold, a flat rate of $15 applies. All packages are fully tracked and require a signature upon delivery to ensure safety.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-card border border-border/80 rounded-2xl">
            <RotateCcw className="w-6 h-6 text-[#C59A5A] shrink-0" />
            <div className="space-y-2">
              <h3 className="font-bold text-base">30-Day Complimentary Returns</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                If you are not completely satisfied with your purchase, you may request a return within 30 days of shipment receipt. Return shipping is fully paid for by DALIN. Items must remain in their original unworn state with tags attached.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-6 bg-card border border-border/80 rounded-2xl">
            <ShieldCheck className="w-6 h-6 text-[#C59A5A] shrink-0" />
            <div className="space-y-2">
              <h3 className="font-bold text-base">Duties & Custom Taxes</h3>
              <p className="text-xs text-muted-foreground font-light leading-relaxed">
                All duties and taxes are calculated directly at checkout, meaning no additional cash on delivery (COD) fees will be requested by customs. Delivery is fully DDP (Delivered Duty Paid) for major shipping regions.
              </p>
            </div>
          </div>
        </div>

        {/* Curated Products */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C59A5A]">Popular Pickups</span>
            <h3 className="font-display text-2xl font-bold">Client Favorites</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
