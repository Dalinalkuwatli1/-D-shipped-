"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye, Star, ImageOff, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react";
import { Product, ProductColor } from "@/types";
import { cn, formatPrice } from "@/lib/utils";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  className?: string;
  priority?: boolean;
}

export function ProductCard({ product, className, priority }: ProductCardProps) {
  const { toggle, isWishlisted } = useWishlistStore();
  const { addItem, openCart } = useCartStore();
  const { openQuickView } = useUIStore();
  const wishlisted = isWishlisted(product.id);

  const [activeImage, setActiveImage] = useState<string>(product.images[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);

  const [primaryLoading, setPrimaryLoading] = useState(true);
  const [primaryError, setPrimaryError] = useState(false);
  const [secondaryLoading, setSecondaryLoading] = useState(true);

  useEffect(() => {
    setActiveImage(product.images[0]);
    setImageIndex(0);
    setPrimaryLoading(true);
    setPrimaryError(false);
  }, [product.id, product.images]);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[Math.floor(product.sizes.length / 2)] || "M";
    const defaultColor = selectedColor || product.colors[0];
    addItem(product, defaultSize, defaultColor);
    openCart();
    toast.success(`Added to cart!`, { description: `${product.name} (${defaultSize})` });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(product);
    toast[wishlisted ? "info" : "success"](
      wishlisted ? "Removed from wishlist" : "Added to wishlist",
      { description: product.name }
    );
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product.id);
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toast.info("Added to comparison list", { description: `${product.name} will be compared.` });
  };

  const handleColorInteraction = (color: ProductColor) => {
    setSelectedColor(color);
    if (color.image) {
      setActiveImage(color.image);
      setImageIndex(0);
      setPrimaryLoading(true);
      setPrimaryError(false);
    }
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.images.length <= 1) return;
    const newIdx = (imageIndex - 1 + product.images.length) % product.images.length;
    setImageIndex(newIdx);
    setActiveImage(product.images[newIdx]);
    setPrimaryLoading(true);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.images.length <= 1) return;
    const newIdx = (imageIndex + 1) % product.images.length;
    setImageIndex(newIdx);
    setActiveImage(product.images[newIdx]);
    setPrimaryLoading(true);
  };

  // Generate stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.round(rating);
    return (
      <div className="flex items-center gap-0.5 text-amber-500">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-[11px]">
            {i < fullStars ? "★" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={cn(
        "group relative flex flex-col h-full bg-card border border-border/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5",
        className
      )}
    >
      <Link href={`/product/${product.slug}`} className="block relative aspect-[3/4] overflow-hidden bg-muted">
        {/* Main image / active color image */}
        {!primaryError ? (
          <Image
            src={activeImage}
            alt=""
            fill
            priority={priority}
            onLoad={() => setPrimaryLoading(false)}
            onError={() => {
              setPrimaryError(true);
              setPrimaryLoading(false);
            }}
            className={cn(
              "object-cover transition-transform duration-700 ease-out group-hover:scale-105",
              primaryLoading ? "scale-95 blur-sm" : "scale-100 blur-0"
            )}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/60 text-muted-foreground/60 p-4 gap-2">
            <ImageOff className="w-8 h-8 stroke-[1.25]" />
            <span className="text-xs font-medium tracking-wide">Image unavailable</span>
          </div>
        )}

        {/* Hover second image */}
        {!primaryError && activeImage === product.images[0] && product.images[1] && (
          <Image
            src={product.images[1]}
            alt=""
            fill
            onLoad={() => setSecondaryLoading(false)}
            className={cn(
              "object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105",
              secondaryLoading ? "blur-sm" : "blur-0"
            )}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          />
        )}

        {primaryLoading && !primaryError && (
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        )}

        {/* Prev/Next image navigation arrows — only when multiple images exist */}
        {product.images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 -translate-x-2 group-hover:translate-x-0"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={handleNextImage}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 translate-x-2 group-hover:translate-x-0"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
            {/* Dot indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {product.images.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                    i === imageIndex ? "bg-white w-3" : "bg-white/50"
                  )}
                />
              ))}
            </div>
          </>
        )}

        {/* Badges / Urgency labels */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.stockCount && product.stockCount <= 5 && (
            <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-red-600 text-white rounded-md shadow-sm">
              Only {product.stockCount} Left
            </span>
          )}
          {product.rating && product.rating >= 4.9 && (
            <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-[#B88B4A] text-white rounded-md shadow-sm">
              Selling Fast
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-black text-white rounded-md shadow-sm">
              New Arrival
            </span>
          )}
          {product.isFeatured && (
            <span className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-[#B88B4A] text-white rounded-md shadow-sm">
              Exclusive
            </span>
          )}
        </div>

        {/* Hover corner menu actions — 48×48, backdrop-blur, shadow */}
        <div className="absolute right-3 top-3 flex flex-col gap-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className={cn(
              "w-11 h-11 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110",
              wishlisted ? "bg-white text-red-500" : "bg-white/90 text-foreground hover:bg-white"
            )}
          >
            <Heart className={cn("w-4 h-4", wishlisted && "fill-current")} />
          </button>

          {/* Quick View */}
          <button
            onClick={handleQuickView}
            aria-label="Quick view"
            className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-foreground"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Compare */}
          <button
            onClick={handleCompare}
            aria-label="Compare product"
            className="w-11 h-11 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-foreground"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        {/* Slide up add to bag button */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-10">
          <button
            onClick={handleQuickAdd}
            className="w-full flex items-center justify-center gap-2 py-3 bg-black hover:bg-[#C59A5A] text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </Link>

      {/* Info details */}
      <div className="p-4 flex-1 flex flex-col justify-between gap-2.5">
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59A5A]">{product.brand}</span>
            <div className="flex items-center gap-1">
              {renderStars(product.rating)}
              <span className="text-[10px] font-semibold text-muted-foreground ml-0.5">({product.reviewCount || 42})</span>
            </div>
          </div>

          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="font-display text-sm font-bold tracking-tight text-foreground hover:text-primary transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-sm text-foreground">{formatPrice(product.price)}</span>
            {product.originalPrice && product.originalPrice !== product.price && (
              <span className="text-xs text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          {/* Color Swatches */}
          {product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 pt-1 border-t border-border/30">
              {product.colors.slice(0, 5).map((color) => {
                const isSelected = selectedColor?.name === color.name || (!selectedColor && product.colors[0].name === color.name);
                return (
                  <button
                    key={color.name}
                    title={color.name}
                    onClick={(e) => {
                      e.preventDefault();
                      handleColorInteraction(color);
                    }}
                    className={cn(
                      "w-4 h-4 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-115",
                      isSelected ? "border-foreground ring-1 ring-foreground/20" : "border-border/60"
                    )}
                    style={{ backgroundColor: color.hex }}
                  />
                );
              })}
              {product.colors.length > 5 && (
                <span className="text-[10px] font-bold text-muted-foreground ml-0.5">+{product.colors.length - 5}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
