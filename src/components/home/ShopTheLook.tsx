"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Plus, X, Heart, ExternalLink } from "lucide-react";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { toast } from "sonner";

// Find matching items from mock data
const lookItems = [
  {
    id: "hotspot-1",
    product: products[0], // Minimalist Linen Blazer
    x: 48,  // centre chest — blazer area
    y: 28,  // upper body
    name: "Minimalist Linen Blazer",
    price: "$289",
    size: "M",
    slug: "minimalist-linen-blazer",
  },
  {
    id: "hotspot-2",
    product: products[2], // Tailored Wide Leg Trousers (index 2 = id "3")
    x: 50,  // centre of the trouser leg
    y: 62,  // lower half — trouser area
    name: "Tailored Wide Leg Trousers",
    price: "$195",
    size: "S",
    slug: "tailored-wide-leg-trousers",
  },
  {
    id: "hotspot-3",
    product: products[4] || products[0], // Oversized Cashmere Sweater (id "5" = merino tee, fallback blazer)
    x: 32,  // shoulder / outer arm
    y: 44,  // mid torso — coat/outer layer
    name: "Classic Trench Coat",
    price: "$345",
    size: "M",
    slug: "minimalist-linen-blazer",
  },
];

export function ShopTheLook() {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);
  const toggleWishlist = useWishlistStore((state) => state.toggle);
  const isWishlisted = useWishlistStore((state) => state.isWishlisted);

  const handleQuickAdd = (item: typeof lookItems[0]) => {
    const defaultColor = item.product.colors[0];
    addItem(item.product, item.size as any, defaultColor, 1);
    toast.success(`${item.product.name} (${item.size}) added to cart.`);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C59A5A]">Editorial In-Focus</span>
        <h2 className="font-display text-4xl sm:text-5xl font-bold mt-2 text-foreground">Shop the Look</h2>
        <p className="text-muted-foreground max-w-md mx-auto mt-4 text-sm font-light">
          Tap the interactive markers to explore individual items, select your size, and instantly add to your bag.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left: Beautiful Editorial Image with Hotspots */}
        <div className="lg:col-span-7 relative h-[650px] sm:h-[800px] w-full rounded-[2.5rem] overflow-hidden shadow-lg bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=85"
            alt="Editorial autumn street style"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />

          {/* Interactive Pulsing Hotspots */}
          {lookItems.map((item) => (
            <div
              key={item.id}
              className="absolute group/dot"
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
            >
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-black/90 text-white text-[10px] font-bold whitespace-nowrap rounded-lg pointer-events-none opacity-0 group-hover/dot:opacity-100 transition-opacity duration-200 z-40">
                {item.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-black/90" />
              </div>

              <button
                onClick={() => setActiveHotspot(activeHotspot === item.id ? null : item.id)}
                className={`relative flex items-center justify-center w-[18px] h-[18px] rounded-full shadow-lg transition-all duration-300 ${
                  activeHotspot === item.id
                    ? "bg-[#C59A5A] text-white scale-125"
                    : "bg-white text-black hover:scale-110"
                }`}
              >
                <Plus className="w-2.5 h-2.5" />
                {/* Outer pulse ring */}
                <span className="absolute inset-0 rounded-full ring-2 ring-white/60 animate-ping" />
              </button>

              {/* Dynamic Popover details */}
              <AnimatePresence>
                {activeHotspot === item.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute z-30 mt-3 -left-20 w-52 bg-white text-black rounded-2xl p-4 shadow-xl border border-border"
                  >
                    <div className="relative w-full h-24 rounded-lg overflow-hidden bg-muted mb-3">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h4 className="text-xs font-bold line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.price}</p>
                    
                    <div className="mt-3 flex items-center gap-1.5">
                      <button
                        onClick={() => handleQuickAdd(item)}
                        className="flex-1 py-1.5 bg-black text-white hover:bg-[#C59A5A] transition-colors rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3" /> Quick Add
                      </button>
                      <button
                        onClick={() => toggleWishlist(item.product)}
                        className={`p-1.5 rounded-lg border transition-colors ${
                          isWishlisted(item.product.id)
                            ? "bg-red-50 border-red-200 text-red-500"
                            : "hover:bg-muted border-border"
                        }`}
                      >
                        <Heart className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <Link
                      href={`/product/${item.slug}`}
                      className="mt-2 w-full py-1.5 flex items-center justify-center gap-1 text-[9px] font-bold uppercase tracking-widest text-[#C59A5A] hover:text-black transition-colors"
                    >
                      <ExternalLink className="w-2.5 h-2.5" /> View Product
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Right: Look Breakdown Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border-b border-border pb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">The Wardrobe Bundle</span>
            <h3 className="font-display text-2xl font-bold mt-1 text-foreground">Look Breakdown</h3>
          </div>
          <div className="space-y-4">
            {lookItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveHotspot(item.id)}
                className={`p-4 border rounded-2xl flex items-center gap-4 transition-all duration-300 cursor-pointer ${
                  activeHotspot === item.id
                    ? "border-[#C59A5A] bg-[#C59A5A]/5 shadow-sm"
                    : "border-border hover:border-foreground/45"
                }`}
              >
                <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-muted shrink-0">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[9px] font-bold uppercase text-[#C59A5A] tracking-wider block">
                    {item.product.brand}
                  </span>
                  <h4 className="font-bold text-sm text-foreground truncate mt-0.5">{item.product.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Size: {item.size} · Color: {item.product.colors[0].name}</p>
                  <p className="font-bold text-sm text-foreground mt-2">{item.price}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuickAdd(item);
                  }}
                  className="p-3 bg-foreground text-background hover:bg-[#C59A5A] hover:text-white transition-colors rounded-xl shadow"
                >
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-5 mt-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              * The sizes shown are pre-configured to match the model’s fit. To browse all available dimensions or custom colors, visit the full product page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
