"use client";

import Link from "next/link";
import { Heart, Trash2, ShoppingBag } from "lucide-react";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { toast } from "sonner";

export default function WishlistPage() {
  const { products, removeItem } = useWishlistStore();
  const { addItem, openCart } = useCartStore();

  const handleMoveToCart = (p: any) => {
    const defaultSize = p.sizes[Math.floor(p.sizes.length / 2)] || "M";
    const defaultColor = p.colors[0];
    addItem(p, defaultSize, defaultColor);
    removeItem(p.id);
    openCart();
    toast.success("Moved to cart", { description: p.name });
  };

  if (products.length === 0) {
    return (
      <div className="min-h-[70vh] bg-background flex flex-col items-center justify-center text-center p-4">
        <Heart className="w-16 h-16 text-muted-foreground/30 mb-4 animate-pulse" />
        <h1 className="font-display text-3xl font-bold">Your wishlist is empty</h1>
        <p className="text-muted-foreground mt-2 max-w-sm">
          Save your favorite products here to buy them later. Explore our shop to add items.
        </p>
        <Link
          href="/shop"
          className="mt-8 px-8 py-3.5 bg-foreground text-background font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl font-bold tracking-tight mb-8">Wishlist</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group relative bg-card border border-border rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              {/* Product Image */}
              <div className="relative aspect-[3/4] bg-muted w-full overflow-hidden">
                <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
                <button
                  onClick={() => {
                    removeItem(p.id);
                    toast.info("Removed from wishlist");
                  }}
                  className="absolute right-3 top-3 p-2 bg-card rounded-full shadow-md text-muted-foreground hover:text-destructive transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Info */}
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <span className="text-xs text-muted-foreground">{p.brand}</span>
                  <Link href={`/product/${p.slug}`} className="block font-semibold text-sm hover:text-primary transition-colors truncate">
                    {p.name}
                  </Link>
                  <span className="block font-bold text-sm mt-1">{formatPrice(p.price)}</span>
                </div>

                <button
                  onClick={() => handleMoveToCart(p)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-foreground text-background text-xs font-bold rounded-xl hover:opacity-90 transition-opacity"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Move to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
