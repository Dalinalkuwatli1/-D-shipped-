"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, Grid, List, ChevronDown, SlidersHorizontal, Check, RefreshCw, Sparkles, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { products, BRANDS, CATEGORIES } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { filterProducts } from "@/data/products";
import { formatPrice, cn } from "@/lib/utils";
import { ProductCategory, ProductSize, SortOption } from "@/types";
import Link from "next/link";
import Image from "next/image";

const SIZES: ProductSize[] = ["XS", "S", "M", "L", "XL", "XXL", "One Size"];
const COLORS = [
  { name: "Sand", hex: "#C4A882" },
  { name: "Ivory", hex: "#F5F0E8" },
  { name: "Slate", hex: "#6B7280" },
  { name: "Oatmeal", hex: "#D4C5A9" },
  { name: "Dusty Rose", hex: "#C4A0A0" },
  { name: "Midnight", hex: "#1a1a2e" },
  { name: "Ecru", hex: "#F2EDE4" },
  { name: "Charcoal", hex: "#374151" },
  { name: "Camel", hex: "#C19A6B" },
  { name: "Cognac", hex: "#8B5A2B" },
  { name: "Black", hex: "#111111" },
  { name: "Cream", hex: "#FFFDD0" },
  { name: "Navy", hex: "#1B3A5C" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Olive", hex: "#6B7C48" },
  { name: "Khaki", hex: "#C3B091" },
  { name: "Champagne", hex: "#F7E7CE" },
  { name: "Onyx", hex: "#353839" },
  { name: "Blush", hex: "#E8A0A0" },
  { name: "Tan", hex: "#A0785A" },
  { name: "Forest", hex: "#2D6A4F" },
  { name: "Terracotta", hex: "#C4703A" },
  { name: "Burgundy", hex: "#800020" },
  { name: "Indigo", hex: "#3B4A7C" },
  { name: "Light Wash", hex: "#A8C1D8" },
  { name: "Bordeaux", hex: "#7C0902" }
];

export function ShopContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Search/Filter states from URL params or local
  const [selectedCategories, setSelectedCategories] = useState<ProductCategory[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 600]);
  const [selectedSizes, setSelectedSizes] = useState<ProductSize[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [onSale, setOnSale] = useState<boolean>(false);
  const [isNew, setIsNew] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sync state from URL search params on load
  useEffect(() => {
    const cat = searchParams.get("category");
    setSelectedCategories(cat ? [cat as ProductCategory] : []);
    
    const sale = searchParams.get("onSale");
    setOnSale(sale === "true");
    
    const newArrival = searchParams.get("isNew");
    setIsNew(newArrival === "true");
    
    const search = searchParams.get("search");
    setSearchQuery(search || "");
    
    const sub = searchParams.get("sub");
    setSelectedSubcategory(sub || null);
    
    const occasion = searchParams.get("occasion");
    setSelectedOccasion(occasion || null);
    
    // Reset other local filters when navigating via mega menu
    setPriceRange([0, 600]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setMinRating(null);
    setCurrentPage(1);
  }, [searchParams]);

  // Dynamic filter count calculator based on current database array (products)
  const filterCounts = useMemo(() => {
    const counts = {
      categories: {} as Record<string, number>,
      brands: {} as Record<string, number>,
      sizes: {} as Record<string, number>,
      colors: {} as Record<string, number>,
    };

    products.forEach((p) => {
      // Category count
      counts.categories[p.category] = (counts.categories[p.category] || 0) + 1;
      // Brand count
      counts.brands[p.brand] = (counts.brands[p.brand] || 0) + 1;
      // Size count
      p.sizes.forEach((s) => {
        counts.sizes[s] = (counts.sizes[s] || 0) + 1;
      });
      // Color count
      p.colors.forEach((c) => {
        counts.colors[c.name] = (counts.colors[c.name] || 0) + 1;
      });
    });

    return counts;
  }, []);

  // Compute filtered items
  const filteredProducts = useMemo(() => {
    return filterProducts(products, {
      category: selectedCategories.length ? selectedCategories : undefined,
      brands: selectedBrands.length ? selectedBrands : undefined,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      sizes: selectedSizes.length ? selectedSizes : undefined,
      colors: selectedColors.length ? selectedColors : undefined,
      rating: minRating || undefined,
      onSale: onSale || undefined,
      isNew: isNew || undefined,
      search: searchQuery || undefined,
      sortBy: sortBy,
      subcategory: selectedSubcategory || undefined,
      occasion: selectedOccasion || undefined,
    });
  }, [selectedCategories, selectedBrands, priceRange, selectedSizes, selectedColors, minRating, onSale, isNew, searchQuery, sortBy, selectedSubcategory, selectedOccasion]);

  // Pagination constants
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const toggleCategory = (cat: ProductCategory) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
    setCurrentPage(1);
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const toggleSize = (size: ProductSize) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
    setCurrentPage(1);
  };

  const toggleColor = (colorName: string) => {
    setSelectedColors(prev =>
      prev.includes(colorName) ? prev.filter(c => c !== colorName) : [...prev, colorName]
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange([0, 600]);
    setSelectedSizes([]);
    setSelectedColors([]);
    setMinRating(null);
    setOnSale(false);
    setIsNew(false);
    setSearchQuery("");
    setSelectedSubcategory(null);
    setSelectedOccasion(null);
    setCurrentPage(1);
    router.push("/shop");
  };

  const hasActiveFilters = useMemo(() => {
    return (
      selectedCategories.length > 0 ||
      selectedBrands.length > 0 ||
      priceRange[1] < 600 ||
      selectedSizes.length > 0 ||
      selectedColors.length > 0 ||
      onSale ||
      isNew ||
      searchQuery !== "" ||
      selectedSubcategory !== null ||
      selectedOccasion !== null
    );
  }, [selectedCategories, selectedBrands, priceRange, selectedSizes, selectedColors, onSale, isNew, searchQuery, selectedSubcategory, selectedOccasion]);

  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb path */}
        <nav className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-foreground">All Products</span>
        </nav>

        {/* Header content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-border/40">
          <div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight">Catalog</h1>
            <p className="text-sm text-muted-foreground mt-2 font-medium">
              Showing {filteredProducts.length > 0 ? `${(currentPage - 1) * itemsPerPage + 1}–${Math.min(currentPage * itemsPerPage, filteredProducts.length)}` : "0"} of {filteredProducts.length} pieces
            </p>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
            {/* View Mode controls */}
            <div className="flex items-center border border-border/80 rounded-xl overflow-hidden bg-card shadow-sm">
              <button
                onClick={() => setViewMode("grid")}
                className={cn("p-2.5 transition-colors", viewMode === "grid" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground")}
                aria-label="Grid view"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={cn("p-2.5 transition-colors", viewMode === "list" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground")}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* Premium Custom Dropdown styling */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none bg-card border border-border rounded-xl px-4 py-2.5 pr-10 text-sm font-semibold focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer shadow-sm min-w-[160px]"
                >
                  <option value="featured">Featured</option>
                  <option value="best-seller">Best Selling</option>
                  <option value="newest">Newest</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="w-4 h-4 absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              </div>

              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-foreground text-background rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-10 items-start">
          {/* Desktop Sidebar (Sticky placement) */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-28 max-h-[calc(100vh-140px)] overflow-y-auto pr-4 scrollbar-thin space-y-8">
            {/* Categories filter */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-muted-foreground">Categories</h3>
              <div className="space-y-3">
                {CATEGORIES.map((cat) => {
                  const count = filterCounts.categories[cat] || 0;
                  return (
                    <label key={cat} className="flex items-center justify-between text-sm font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors group">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat as ProductCategory)}
                          onChange={() => toggleCategory(cat as ProductCategory)}
                          className="w-4 h-4 rounded border-border/80 text-primary focus:ring-primary cursor-pointer"
                        />
                        <span className="capitalize group-hover:translate-x-0.5 transition-transform duration-200">{cat}</span>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground/50">({count})</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Brands filter */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-muted-foreground">Brands</h3>
              <div className="space-y-3">
                {BRANDS.map((brand) => {
                  const count = filterCounts.brands[brand] || 0;
                  return (
                    <label key={brand} className="flex items-center justify-between text-sm font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors group">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="w-4 h-4 rounded border-border/80 text-primary focus:ring-primary cursor-pointer"
                        />
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">{brand}</span>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground/50">({count})</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price slider */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-muted-foreground">Max Price</h3>
              <div className="space-y-3.5">
                <input
                  type="range"
                  min="0"
                  max="600"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex items-center justify-between text-xs font-bold text-foreground">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
              </div>
            </div>

            {/* Sizes selector grid */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-muted-foreground">Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => {
                  const isSelected = selectedSizes.includes(size);
                  const count = filterCounts.sizes[size] || 0;
                  return (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={cn(
                        "h-10 px-3 border text-xs font-bold rounded-xl transition-all flex items-center justify-between gap-1 shadow-sm",
                        isSelected
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground/50 text-muted-foreground hover:text-foreground bg-card"
                      )}
                    >
                      <span>{size}</span>
                      <span className={cn("text-[9px] font-semibold opacity-60", isSelected ? "text-background" : "text-muted-foreground")}>({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Colors picker palette */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest mb-4 text-muted-foreground">Colors</h3>
              <div className="grid grid-cols-5 gap-2">
                {COLORS.slice(0, 15).map((color) => {
                  const isSelected = selectedColors.includes(color.name);
                  const count = filterCounts.colors[color.name] || 0;
                  return (
                    <button
                      key={color.name}
                      onClick={() => toggleColor(color.name)}
                      className={cn(
                        "w-9 h-9 rounded-full border flex items-center justify-center relative transition-transform hover:scale-105 shadow-sm",
                        isSelected ? "border-foreground scale-105 ring-2 ring-foreground/10" : "border-border/60"
                      )}
                      style={{ backgroundColor: color.hex }}
                      title={`${color.name} (${count})`}
                    >
                      {isSelected ? (
                        <Check className={cn("w-4 h-4", color.name === "White" || color.name === "Ivory" || color.name === "Cream" ? "text-black" : "text-white")} />
                      ) : (
                        <span className={cn("absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full text-[7px] font-bold flex items-center justify-center translate-x-0.5 translate-y-0.5", color.name === "White" || color.name === "Ivory" || color.name === "Cream" ? "bg-black text-white" : "bg-white text-black")}>
                          {count}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Offerings toggle */}
            <div className="space-y-3.5 pt-4 border-t border-border/40">
              <label className="flex items-center justify-between text-sm font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors group">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={onSale}
                    onChange={(e) => setOnSale(e.target.checked)}
                    className="w-4 h-4 rounded border-border/80 text-primary cursor-pointer"
                  />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">On Sale</span>
                </div>
              </label>
              <label className="flex items-center justify-between text-sm font-semibold text-muted-foreground hover:text-foreground cursor-pointer transition-colors group">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={isNew}
                    onChange={(e) => setIsNew(e.target.checked)}
                    className="w-4 h-4 rounded border-border/80 text-primary cursor-pointer"
                  />
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">New Arrivals</span>
                </div>
              </label>
            </div>

            {/* Clear filters button */}
            <button
              onClick={clearAllFilters}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider border border-border/80 rounded-xl hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset Filters
            </button>
          </aside>

          {/* Right Main Panel */}
          <div className="flex-1">
            
            {/* Active Filter Chips bar */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-6 p-4 bg-muted/20 border border-border/30 rounded-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mr-1.5 flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5" /> Active:
                </span>
                
                {selectedCategories.map((cat) => (
                  <span key={cat} className="inline-flex items-center gap-1 px-3 py-1 bg-card border border-border text-xs font-semibold capitalize rounded-full">
                    {cat}
                    <button onClick={() => toggleCategory(cat)} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                  </span>
                ))}

                {selectedBrands.map((brand) => (
                  <span key={brand} className="inline-flex items-center gap-1 px-3 py-1 bg-card border border-border text-xs font-semibold rounded-full">
                    {brand}
                    <button onClick={() => toggleBrand(brand)} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                  </span>
                ))}

                {priceRange[1] < 600 && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-card border border-border text-xs font-semibold rounded-full">
                    Under {formatPrice(priceRange[1])}
                    <button onClick={() => setPriceRange([0, 600])} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                  </span>
                )}

                {selectedSizes.map((size) => (
                  <span key={size} className="inline-flex items-center gap-1 px-3 py-1 bg-card border border-border text-xs font-semibold rounded-full">
                    Size {size}
                    <button onClick={() => toggleSize(size)} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                  </span>
                ))}

                {selectedColors.map((color) => (
                  <span key={color} className="inline-flex items-center gap-1 px-3 py-1 bg-card border border-border text-xs font-semibold rounded-full">
                    {color}
                    <button onClick={() => toggleColor(color)} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                  </span>
                ))}

                {onSale && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-card border border-border text-xs font-semibold rounded-full">
                    Sale Items
                    <button onClick={() => setOnSale(false)} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                  </span>
                )}

                {isNew && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-card border border-border text-xs font-semibold rounded-full">
                    New Arrivals
                    <button onClick={() => setIsNew(false)} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                  </span>
                )}

                {searchQuery && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-card border border-border text-xs font-semibold rounded-full">
                    Query: {searchQuery}
                    <button onClick={() => setSearchQuery("")} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                  </span>
                )}

                {selectedSubcategory && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-card border border-border text-xs font-semibold capitalize rounded-full">
                    {selectedSubcategory.replace("-", " ")}
                    <button onClick={() => {
                      setSelectedSubcategory(null);
                      const params = new URLSearchParams(searchParams);
                      params.delete("sub");
                      router.push(`/shop?${params.toString()}`);
                    }} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                  </span>
                )}

                {selectedOccasion && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-card border border-border text-xs font-semibold capitalize rounded-full">
                    Collection: {selectedOccasion}
                    <button onClick={() => {
                      setSelectedOccasion(null);
                      const params = new URLSearchParams(searchParams);
                      params.delete("occasion");
                      router.push(`/shop?${params.toString()}`);
                    }} className="hover:text-red-500"><X className="w-3 h-3" /></button>
                  </span>
                )}

                <button
                  onClick={clearAllFilters}
                  className="text-xs font-bold text-primary hover:underline ml-auto pl-2"
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Results Grid / List view */}
            {paginatedProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center bg-card border border-border/40 rounded-3xl p-8">
                <SlidersHorizontal className="w-12 h-12 text-muted-foreground/30 mb-4 stroke-[1.25]" />
                <h3 className="font-display text-2xl font-bold">No results found</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-sm">
                  We couldn&apos;t find any items matching your selected criteria. Try adjusting your parameters.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="mt-6 px-6 py-3 bg-foreground text-background font-bold rounded-xl text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                >
                  Reset parameters
                </button>
              </div>
            ) : (
              <>
                {viewMode === "grid" ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-8">
                    {paginatedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-5">
                    {paginatedProducts.map((product) => (
                      <div key={product.id} className="flex flex-col sm:flex-row bg-card border border-border/40 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-4 gap-6 group">
                        {/* List Image */}
                        <div className="relative w-full sm:w-48 aspect-[3/4] shrink-0 bg-muted rounded-xl overflow-hidden">
                          <Image src={product.images[0]} alt={product.name} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                        </div>
                        {/* List Info */}
                        <div className="flex-1 flex flex-col justify-between py-2">
                          <div className="space-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{product.brand}</span>
                            <h3 className="font-display text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">{product.name}</h3>
                            <p className="text-sm text-muted-foreground line-clamp-2 max-w-xl">{product.description}</p>
                          </div>
                          
                          <div className="flex items-center gap-3 mt-4">
                            <span className="font-bold text-lg text-foreground">{formatPrice(product.price)}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
                            )}
                            {product.discount && (
                              <span className="px-2 py-0.5 text-[9px] font-bold bg-red-600 text-white rounded uppercase tracking-wider">
                                SAVE {product.discount}%
                              </span>
                            )}
                          </div>
                        </div>
                        {/* List Actions */}
                        <div className="sm:w-40 flex sm:flex-col items-stretch justify-center gap-3 border-t sm:border-t-0 sm:border-l border-border/40 pt-4 sm:pt-0 sm:pl-6 shrink-0">
                          <Link href={`/product/${product.slug}`} className="flex-1 sm:flex-initial text-center py-2.5 border border-border hover:bg-muted text-xs font-bold uppercase tracking-wider rounded-xl transition-colors">
                            View details
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-16 border-t border-border/40 pt-8">
                    {Array.from({ length: totalPages }).map((_, i) => {
                      const page = i + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          className={cn(
                            "w-10 h-10 rounded-xl text-sm font-semibold transition-colors shadow-sm",
                            currentPage === page
                              ? "bg-foreground text-background"
                              : "border border-border bg-card hover:bg-muted text-foreground"
                          )}
                        >
                          {page}
                        </button>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {/* Trust Indicators row below product list */}
            <div className="mt-20 border-t border-border/40 pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 p-5 bg-card border border-border/30 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-muted/60 flex items-center justify-center text-foreground shrink-0">
                  <Truck className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">Free shipping over $150</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Express shipping options available at checkout.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 p-5 bg-card border border-border/30 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-muted/60 flex items-center justify-center text-foreground shrink-0">
                  <RotateCcw className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">30-day returns</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Free and simple returns within 30 days of purchase.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4 p-5 bg-card border border-border/30 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-full bg-muted/60 flex items-center justify-center text-foreground shrink-0">
                  <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight">Secure checkout</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">256-bit SSL encrypted transactions protected securely.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileFiltersOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-card p-6 flex flex-col gap-6 shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h2 className="font-semibold text-lg">Filters</h2>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Filter Sections */}
              <div className="space-y-6 flex-1">
                {/* Categories */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-3">Categories</h3>
                  <div className="space-y-2">
                    {CATEGORIES.map((cat) => (
                      <label key={cat} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(cat as ProductCategory)}
                            onChange={() => toggleCategory(cat as ProductCategory)}
                            className="w-4 h-4 rounded border-border text-primary"
                          />
                          <span className="capitalize">{cat}</span>
                        </div>
                        <span className="text-xs text-muted-foreground/60">({filterCounts.categories[cat] || 0})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Brands */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-3">Brands</h3>
                  <div className="space-y-2">
                    {BRANDS.map((brand) => (
                      <label key={brand} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => toggleBrand(brand)}
                            className="w-4 h-4 rounded border-border text-primary"
                          />
                          <span>{brand}</span>
                        </div>
                        <span className="text-xs text-muted-foreground/60">({filterCounts.brands[brand] || 0})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-3">Price Range</h3>
                  <input
                    type="range"
                    min="0"
                    max="600"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs mt-2 font-semibold">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider mb-3">Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {SIZES.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={cn(
                          "h-9 px-3 border text-xs font-semibold rounded-lg",
                          selectedSizes.includes(size)
                            ? "bg-foreground text-background border-foreground"
                            : "border-border"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Badges */}
                <div className="space-y-2.5">
                  <label className="flex items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={onSale}
                      onChange={(e) => setOnSale(e.target.checked)}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span>On Sale</span>
                  </label>
                  <label className="flex items-center gap-3 text-sm">
                    <input
                      type="checkbox"
                      checked={isNew}
                      onChange={(e) => setIsNew(e.target.checked)}
                      className="w-4 h-4 rounded border-border"
                    />
                    <span>New Arrivals</span>
                  </label>
                </div>
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <button
                  onClick={clearAllFilters}
                  className="w-full py-2.5 text-sm font-semibold border border-border rounded-xl"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full py-2.5 bg-foreground text-background text-sm font-semibold rounded-xl"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
