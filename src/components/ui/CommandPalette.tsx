"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, X, Tag, ShoppingBag, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUIStore } from "@/store/uiStore";
import { products } from "@/data/products";
import Image from "next/image";
import { formatPrice } from "@/lib/utils";

const quickLinks = [
  { label: "New Arrivals", icon: Sparkles, href: "/shop?sort=newest" },
  { label: "Sale", icon: Tag, href: "/shop?onSale=true" },
  { label: "Women", icon: ShoppingBag, href: "/shop?category=women" },
  { label: "Men", icon: ShoppingBag, href: "/shop?category=men" },
];

export function CommandPalette() {
  const { commandPaletteOpen, closeCommandPalette } = useUIStore();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = query.trim().length > 1
    ? products.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.brand.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some((t) => t.includes(query.toLowerCase()))
      ).slice(0, 5)
    : [];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        commandPaletteOpen ? closeCommandPalette() : useUIStore.getState().openCommandPalette();
      }
      if (e.key === "Escape") closeCommandPalette();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [commandPaletteOpen, closeCommandPalette]);

  useEffect(() => {
    if (commandPaletteOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
    }
  }, [commandPaletteOpen]);

  const navigate = (href: string) => {
    closeCommandPalette();
    router.push(href);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  return (
    <AnimatePresence>
      {commandPaletteOpen && (
        <>
          <motion.div
            key="cp-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={closeCommandPalette}
          />
          <motion.div
            key="cp-box"
            initial={{ opacity: 0, scale: 0.97, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[15%] left-1/2 -translate-x-1/2 z-50 w-full max-w-xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Search input */}
            <form onSubmit={handleSearch} className="flex items-center gap-3 px-4 py-3.5 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products, brands, categories…"
                className="flex-1 bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none"
              />
              {query && (
                <button type="button" onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 text-xs bg-muted border border-border rounded text-muted-foreground">
                <span>⌘</span>K
              </kbd>
            </form>

            {/* Results or quick links */}
            <div className="max-h-80 overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-2">
                  <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Products</p>
                  {results.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => navigate(`/product/${product.slug}`)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-left"
                    >
                      <div className="relative w-10 h-12 rounded-md overflow-hidden shrink-0 bg-muted">
                        <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.brand}</p>
                      </div>
                      <span className="text-sm font-semibold shrink-0">{formatPrice(product.price)}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                    </button>
                  ))}
                  <button
                    onClick={() => navigate(`/shop?search=${encodeURIComponent(query)}`)}
                    className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-primary text-sm font-medium"
                  >
                    <Search className="w-4 h-4" />
                    Search all results for &quot;{query}&quot;
                  </button>
                </div>
              ) : (
                <div className="p-2">
                  <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Quick Links</p>
                  {quickLinks.map(({ label, icon: Icon, href }) => (
                    <button
                      key={label}
                      onClick={() => navigate(href)}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-left"
                    >
                      <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <span className="text-sm font-medium">{label}</span>
                      <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="px-4 py-2.5 border-t border-border flex items-center gap-4 text-xs text-muted-foreground">
              <span><kbd className="bg-muted border border-border rounded px-1.5 py-0.5">↵</kbd> to select</span>
              <span><kbd className="bg-muted border border-border rounded px-1.5 py-0.5">ESC</kbd> to close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
