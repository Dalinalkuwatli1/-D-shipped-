"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Star, Share2, ShieldCheck, Truck, RotateCcw, Plus, Minus, ArrowLeft, Check, Ruler, Info, Calendar, MapPin, X } from "lucide-react";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { ProductCard } from "@/components/product/ProductCard";
import { ProductSize, ProductColor, Product } from "@/types";
import { toast } from "sonner";

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const product = useMemo(() => getProductBySlug(slug), [slug]);

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<ProductSize | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [zoomStyle, setZoomStyle] = useState({ display: "none", backgroundPosition: "0% 0%" });
  const [activeTab, setActiveTab] = useState<"desc" | "material" | "shipping">("desc");

  // Size Guide Modal State
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  // Shipping Calculator State
  const [zipCode, setZipCode] = useState("");
  const [shippingCost, setShippingCost] = useState<string | null>(null);

  // Frequently Bought Together Selection State
  const [bundleChecked, setBundleChecked] = useState<{ [key: string]: boolean }>({});

  // Recently Viewed State
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);

  const { addItem, openCart } = useCartStore();
  const { toggle, isWishlisted } = useWishlistStore();

  // Initialize and save to recently viewed
  useEffect(() => {
    if (product) {
      if (product.colors.length > 0) setSelectedColor(product.colors[0]);
      if (product.sizes.length > 0) setSelectedSize(product.sizes[Math.floor(product.sizes.length / 2)]);
      setActiveImage(0);
      setQuantity(1);

      // Save to localStorage recently viewed
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("recently_viewed_products");
        let list: string[] = stored ? JSON.parse(stored) : [];
        list = list.filter((id) => id !== product.id);
        list.unshift(product.id);
        list = list.slice(0, 4); // Keep top 4
        localStorage.setItem("recently_viewed_products", JSON.stringify(list));

        // Fetch product objects
        const resolved = list
          .map((id) => products.find((p) => p.id === id))
          .filter(Boolean) as Product[];
        setRecentlyViewed(resolved.filter((p) => p.id !== product.id));
      }
    }
  }, [product?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // Set default bundle checkboxes
  const bundleProducts = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.id !== product.id).slice(0, 2);
  }, [product]);

  useEffect(() => {
    if (bundleProducts.length > 0) {
      const initial: { [key: string]: boolean } = {};
      bundleProducts.forEach((p) => {
        initial[p.id] = true;
      });
      setBundleChecked(initial);
    }
  }, [bundleProducts]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-4">
        <h2 className="font-display text-3xl font-bold">Product Not Found</h2>
        <p className="text-muted-foreground mt-2">The product you are looking for does not exist.</p>
        <Link href="/shop" className="mt-6 px-6 py-2.5 bg-foreground text-background rounded-xl font-semibold text-sm">
          Back to Shop
        </Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);
  const relatedProducts = getRelatedProducts(product, 4);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color");
      return;
    }
    addItem(product, selectedSize, selectedColor, quantity);
    openCart();
    toast.success("Added to cart", { description: `${product.name} (${selectedSize}, ${selectedColor.name})` });
  };

  const handleWishlist = () => {
    toggle(product);
    toast[wishlisted ? "info" : "success"](
      wishlisted ? "Removed from wishlist" : "Added to wishlist",
      { description: product.name }
    );
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomStyle({ display: "block", backgroundPosition: `${x}% ${y}%` });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none", backgroundPosition: "0% 0%" });
  };

  const calculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipCode) return;
    // Mock shipping cost calculation
    const numericCode = parseInt(zipCode, 10);
    if (isNaN(numericCode)) {
      toast.error("Please enter a valid numeric ZIP code");
      return;
    }
    if (product.price >= 150) {
      setShippingCost("FREE Express Shipping");
    } else {
      setShippingCost(numericCode % 2 === 0 ? "$8.99 Standard Shipping" : "$14.99 Priority Express");
    }
    toast.success("Shipping estimated successfully.");
  };

  // Bundle pricing logic
  const bundleTotal = product.price + bundleProducts.reduce((sum, p) => sum + (bundleChecked[p.id] ? p.price : 0), 0);

  const handleAddBundleToCart = () => {
    // Add current product
    if (selectedSize && selectedColor) {
      addItem(product, selectedSize, selectedColor, 1);
    }
    // Add checked bundle items
    bundleProducts.forEach((p) => {
      if (bundleChecked[p.id]) {
        addItem(p, p.sizes[Math.floor(p.sizes.length / 2)] || "M", p.colors[0], 1);
      }
    });
    openCart();
    toast.success("Bundle items added to your cart!");
  };

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Collection
          </button>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            SKU: {product.sku}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Product Gallery */}
          <div className="lg:col-span-7 flex flex-col md:flex-row-reverse gap-4">
            <div
              className="relative w-full aspect-[3/4] bg-[#FDFAF5] rounded-3xl overflow-hidden cursor-zoom-in border border-border/40"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-150"
                style={{
                  ...zoomStyle,
                  backgroundImage: `url(${product.images[activeImage]})`,
                  backgroundSize: "200%",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>

            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 shrink-0 overflow-x-auto scrollbar-hide md:w-20">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative w-20 h-24 md:w-full rounded-2xl overflow-hidden bg-muted border-2 transition-all shrink-0 ${
                    activeImage === idx ? "border-[#C59A5A] scale-95" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details & Configuration */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-b border-border pb-6 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59A5A]">
                {product.brand}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {product.name}
              </h1>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-sm">
                      {i < Math.round(product.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-muted-foreground">
                  {product.rating} / 5.0 ({product.reviewCount} Reviews)
                </span>
              </div>

              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-3xl font-extrabold text-foreground">{formatPrice(product.price)}</span>
                {product.originalPrice && product.originalPrice !== product.price && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="text-xs font-bold text-red-600 bg-red-500/10 px-2 py-0.5 rounded">
                      -{product.discount}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Config System */}
            <div className="space-y-6">
              {/* Color Swatch */}
              {product.colors.length > 0 && (
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <span>Selected Color</span>
                    <span className="text-foreground">{selectedColor?.name}</span>
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color) => {
                      const isSelected = selectedColor?.name === color.name;
                      return (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color)}
                          className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected ? "border-foreground scale-105" : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        >
                          {isSelected && (
                            <Check className="w-4 h-4 text-white mix-blend-difference" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Sizes Selector */}
              {product.sizes.length > 0 && (
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    <span>Select Size</span>
                    <button
                      onClick={() => setSizeGuideOpen(true)}
                      className="text-xs text-[#C59A5A] hover:underline flex items-center gap-1 normal-case"
                    >
                      <Ruler className="w-3.5 h-3.5" /> Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => {
                      const isSelected = selectedSize === size;
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`h-11 px-5 border text-xs font-semibold rounded-xl transition-all ${
                            isSelected
                              ? "bg-black text-white border-black"
                              : "border-border hover:border-foreground/50 text-muted-foreground hover:text-foreground bg-card"
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
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Quantity</span>
                <div className="flex items-center border border-border rounded-xl w-32 justify-between bg-card">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 hover:bg-muted transition-colors rounded-l-xl"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-sm font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 hover:bg-muted transition-colors rounded-r-xl"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Delivery Estimator */}
            <div className="p-4 bg-[#FDFAF5] border border-border/60 rounded-2xl space-y-3 text-xs">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <Calendar className="w-4 h-4 text-[#C59A5A]" />
                <span>Estimated Delivery</span>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed">
                Order in the next <span className="font-semibold text-foreground">3h 42m</span> to receive your items between{" "}
                <span className="font-semibold text-foreground">Oct 20 - Oct 23</span>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-[#C59A5A] text-white py-4 rounded-xl font-bold transition-all duration-300 shadow-md text-sm uppercase tracking-wider"
              >
                <ShoppingBag className="w-5 h-5" /> Add to Cart
              </button>

              <button
                onClick={handleWishlist}
                className={`p-4 border rounded-xl flex items-center justify-center transition-colors bg-card ${
                  wishlisted ? "bg-red-50 border-red-200 text-red-500" : "border-border hover:bg-muted"
                }`}
              >
                <Heart className={`w-5 h-5 ${wishlisted ? "fill-current" : ""}`} />
              </button>

              <button
                onClick={handleShare}
                className="p-4 border border-border rounded-xl flex items-center justify-center hover:bg-muted transition-colors bg-card"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Interactive Shipping Calculator */}
            <div className="border border-border/60 rounded-2xl p-5 bg-card space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                <MapPin className="w-4 h-4 text-[#C59A5A]" />
                <span>Shipping Calculator</span>
              </div>
              <form onSubmit={calculateShipping} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Zip/Postal Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="flex-1 px-4 py-2 text-xs border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-[#C59A5A] bg-background"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-black hover:bg-[#C59A5A] text-white text-xs font-bold rounded-xl transition-colors shrink-0"
                >
                  Estimate
                </button>
              </form>
              {shippingCost && (
                <div className="p-3 bg-muted/50 rounded-xl text-xs font-semibold text-foreground flex items-center gap-1.5 animate-fade-in">
                  <Info className="w-3.5 h-3.5 text-[#C59A5A]" />
                  {shippingCost}
                </div>
              )}
            </div>

            {/* Product Tabs Accordion */}
            <div className="border-t border-border pt-6">
              <div className="flex gap-6 border-b border-border pb-3 text-sm font-semibold">
                {[
                  { id: "desc", label: "Description" },
                  { id: "material", label: "Materials & Care" },
                  { id: "shipping", label: "Shipping & Returns" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`relative pb-3 ${
                      activeTab === tab.id ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTabUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C59A5A]"
                      />
                    )}
                  </button>
                ))}
              </div>
              <div className="py-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {activeTab === "desc" && <p>{product.description}</p>}
                {activeTab === "material" && (
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground">Composition: {product.material}</p>
                    <ul className="list-disc list-inside space-y-1">
                      {product.careInstructions.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {activeTab === "shipping" && (
                  <div className="space-y-2">
                    <p>{product.shippingInfo}</p>
                    <p>{product.returnPolicy}</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Section: Frequently Bought Together */}
        {bundleProducts.length > 0 && (
          <section className="mt-24 border-t border-border pt-16">
            <h3 className="font-display text-2xl font-bold mb-8 text-foreground">Frequently Bought Together</h3>
            <div className="bg-[#FDFAF5] border border-border/50 rounded-[2rem] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-wrap items-center gap-6">
                {/* Main Product */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-muted border border-border/40 shrink-0">
                    <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs max-w-[150px] line-clamp-1">{product.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{formatPrice(product.price)}</p>
                  </div>
                </div>

                {bundleProducts.map((p) => (
                  <div key={p.id} className="flex items-center gap-4">
                    <span className="text-lg text-muted-foreground/60 font-light">+</span>
                    <label className="flex items-center gap-4 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!bundleChecked[p.id]}
                        onChange={(e) =>
                          setBundleChecked((prev) => ({ ...prev, [p.id]: e.target.checked }))
                        }
                        className="rounded border-border text-[#C59A5A] focus:ring-[#C59A5A] w-4 h-4 cursor-pointer"
                      />
                      <div className="relative w-20 h-24 rounded-xl overflow-hidden bg-muted border border-border/40 shrink-0">
                        <Image src={p.images[0]} alt={p.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xs max-w-[150px] line-clamp-1">{p.name}</h4>
                        <p className="text-xs text-muted-foreground mt-0.5">{formatPrice(p.price)}</p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>

              {/* Total & Action */}
              <div className="border-t lg:border-t-0 lg:border-l border-border/60 pt-6 lg:pt-0 lg:pl-8 flex flex-col items-center lg:items-start gap-3 shrink-0 text-center lg:text-left">
                <div>
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider block">Bundle Total</span>
                  <span className="text-2xl font-extrabold text-foreground">{formatPrice(bundleTotal)}</span>
                </div>
                <button
                  onClick={handleAddBundleToCart}
                  className="px-6 py-3 bg-black hover:bg-[#C59A5A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300"
                >
                  Add Bundle to Bag
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Section: Customer styling photos (UGC Grid) */}
        <section className="mt-24 border-t border-border pt-16">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-10">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C59A5A]">Shared by you</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-foreground">Styled on Instagram</h3>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm mt-2 md:mt-0 font-light">
              Tag <span className="font-semibold text-foreground">@dalin.store</span> to be featured.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
              "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80",
              "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
              "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=400&q=80",
            ].map((img, idx) => (
              <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-muted group">
                <Image src={img} alt="Styling review photo" fill className="object-cover transition-transform group-hover:scale-105 duration-500" />
              </div>
            ))}
          </div>
        </section>

        {/* Section: Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 border-t border-border pt-16">
            <h3 className="font-display text-2xl font-bold mb-10 text-foreground">You May Also Like</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* Section: Recently Viewed */}
        {recentlyViewed.length > 0 && (
          <section className="mt-24 border-t border-border pt-16">
            <h3 className="font-display text-2xl font-bold mb-10 text-foreground">Recently Viewed</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {recentlyViewed.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

      </div>

      {/* Size Guide Modal */}
      <AnimatePresence>
        {sizeGuideOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white text-black rounded-3xl p-6 md:p-8 shadow-xl"
            >
              <button
                onClick={() => setSizeGuideOpen(false)}
                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 border-b border-border pb-4 mb-6">
                <Ruler className="w-5 h-5 text-[#C59A5A]" />
                <h3 className="font-display text-xl font-bold">Standard Size Guide</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground uppercase font-bold text-[10px]">
                      <th className="py-2">Size</th>
                      <th className="py-2">Bust (in)</th>
                      <th className="py-2">Waist (in)</th>
                      <th className="py-2">Hips (in)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {[
                      { size: "XS", bust: "31 - 32", waist: "24 - 25", hips: "34 - 35" },
                      { size: "S", bust: "33 - 34", waist: "26 - 27", hips: "36 - 37" },
                      { size: "M", bust: "35 - 36", waist: "28 - 29", hips: "38 - 39" },
                      { size: "L", bust: "37 - 39", waist: "30 - 32", hips: "40 - 42" },
                      { size: "XL", bust: "40 - 42", waist: "33 - 36", hips: "43 - 45" },
                    ].map((row) => (
                      <tr key={row.size}>
                        <td className="py-3 font-bold">{row.size}</td>
                        <td className="py-3 text-muted-foreground">{row.bust}</td>
                        <td className="py-3 text-muted-foreground">{row.waist}</td>
                        <td className="py-3 text-muted-foreground">{row.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[10px] text-muted-foreground mt-6 leading-relaxed">
                * Measurements refer to body size, not garments. If your body measurements are between two sizes, choose the larger size for a relaxed drape.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
