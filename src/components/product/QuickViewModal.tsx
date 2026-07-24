"use client";

import { useUIStore } from "@/store/uiStore";
import { products } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { formatPrice } from "@/lib/utils";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { X, ShoppingBag, Heart, Star, Minus, Plus, Check } from "lucide-react";
import { ProductSize, ProductColor } from "@/types";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export function QuickViewModal() {
  const { quickViewProduct, closeQuickView } = useUIStore();
  const { addItem, openCart } = useCartStore();
  const { toggle, isWishlisted } = useWishlistStore();

  const product = useMemo(() => {
    return products.find((p) => p.id === quickViewProduct) || null;
  }, [quickViewProduct]);

  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState(1);

  // Initialize defaults when product changes — useEffect avoids render-phase setState
  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0] ?? null);
      setSelectedSize(product.sizes[Math.floor(product.sizes.length / 2)] ?? null);
      setQuantity(1);
    }
  }, [product?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const wishlisted = product ? isWishlisted(product.id) : false;

  const handleAddToCart = () => {
    if (!product || !selectedSize || !selectedColor) {
      toast.error("Please select a size and color");
      return;
    }
    addItem(product, selectedSize, selectedColor, quantity);
    closeQuickView();
    openCart();
    toast.success("Added to cart", { description: `${product.name} (${selectedSize})` });
  };

  const handleWishlist = () => {
    if (!product) return;
    toggle(product);
    toast[wishlisted ? "info" : "success"](
      wishlisted ? "Removed from wishlist" : "Added to wishlist",
      { description: product.name }
    );
  };

  return (
    <AnimatePresence>
      {quickViewProduct && product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuickView}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-card border border-border rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]"
          >
            {/* Gallery */}
            <div className="relative md:w-1/2 aspect-[4/5] md:aspect-auto bg-muted">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
              />
              <button
                onClick={closeQuickView}
                className="absolute left-4 top-4 p-2 bg-card rounded-full shadow-md text-foreground md:hidden"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Info and Configuration */}
            <div className="p-6 md:p-8 md:w-1/2 overflow-y-auto flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">{product.brand}</span>
                    <h2 className="font-display text-2xl font-bold mt-1">{product.name}</h2>
                  </div>
                  <button
                    onClick={closeQuickView}
                    className="p-2 hover:bg-muted rounded-full transition-colors hidden md:block"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mt-3">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviewCount} Reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mt-4">
                  <span className="text-xl font-bold">{formatPrice(product.price)}</span>
                  {product.originalPrice && product.originalPrice !== product.price && (
                    <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mt-4 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Color swatches */}
                {product.colors.length > 0 && (
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Color</span>
                      <span className="text-xs text-muted-foreground">{selectedColor?.name}</span>
                    </div>
                    <div className="flex gap-2">
                      {product.colors.map((color) => {
                        const isSelected = selectedColor?.name === color.name;
                        return (
                          <button
                            key={color.name}
                            onClick={() => setSelectedColor(color)}
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-105 ${
                              isSelected ? "border-foreground" : "border-transparent"
                            }`}
                            style={{ backgroundColor: color.hex }}
                            title={color.name}
                          >
                            {isSelected && (
                              <Check className={`w-3.5 h-3.5 ${color.name === "White" || color.name === "Ivory" || color.name === "Cream" ? "text-black" : "text-white"}`} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Size selections */}
                {product.sizes.length > 0 && (
                  <div className="mt-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">Size</span>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => {
                        const isSelected = selectedSize === size;
                        return (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`h-9 px-4 border text-xs font-semibold rounded-lg transition-all ${
                              isSelected
                                ? "bg-foreground text-background border-foreground"
                                : "border-border hover:border-foreground/50"
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="mt-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">Quantity</span>
                  <div className="flex items-center border border-border rounded-lg w-28 justify-between">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="p-2 hover:bg-muted transition-colors rounded-l-lg"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      className="p-2 hover:bg-muted transition-colors rounded-r-lg"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-8 pt-4 border-t border-border">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-2 bg-foreground text-background py-3 rounded-xl font-bold hover:opacity-90 transition-opacity text-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
                <button
                  onClick={handleWishlist}
                  className={`p-3 border rounded-xl hover:bg-muted transition-colors ${
                    wishlisted ? "bg-red-50 text-red-500 border-red-200 dark:bg-red-950/20" : "border-border"
                  }`}
                >
                  <Heart className={`w-4 h-4 ${wishlisted ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
