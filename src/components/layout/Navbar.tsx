"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag, Heart, Search, Menu, X, Sun, Moon, ChevronDown, Command,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useUIStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

// ─── Mega-menu data ────────────────────────────────────────────────────────────
const megaMenus: Record<string, {
  columns: { heading: string; links: { label: string; href: string }[] }[];
  featured?: { img: string; label: string; tag: string; href: string };
}> = {
  Women: {
    columns: [
      {
        heading: "Clothing",
        links: [
          { label: "New Arrivals", href: "/shop?category=women&sort=newest" },
          { label: "Dresses", href: "/shop?category=women&sub=dresses" },
          { label: "Blazers & Suits", href: "/shop?category=women&sub=blazers" },
          { label: "Knitwear", href: "/shop?category=women&sub=knitwear" },
          { label: "Trousers", href: "/shop?category=women&sub=trousers" },

        ],
      },
      {
        heading: "Accessories",
        links: [
          { label: "Bags", href: "/shop?category=bags" },
          { label: "Shoes", href: "/shop?category=shoes" },
          { label: "Jewellery", href: "/shop?category=accessories&sub=jewellery" },
          { label: "Scarves", href: "/shop?category=accessories&sub=scarves" },
          { label: "Belts", href: "/shop?category=accessories&sub=belts" },
        ],
      },
      {
        heading: "Collections",
        links: [
          { label: "Wedding Atelier", href: "/shop?occasion=wedding" },
          { label: "Evening Gala", href: "/shop?occasion=evening" },
          { label: "Office Editorial", href: "/shop?occasion=office" },
          { label: "Casual Luxury", href: "/shop?occasion=casual" },
          { label: "Sale", href: "/shop?onSale=true" },
        ],
      },
    ],
    featured: {
      img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&q=80",
      label: "Autumn Studio",
      tag: "New Collection",
      href: "/shop?category=women",
    },
  },
  Men: {
    columns: [
      {
        heading: "Clothing",
        links: [
          { label: "New Arrivals", href: "/shop?category=men&sort=newest" },
          { label: "T-Shirts", href: "/shop?category=men&sub=t-shirts" },
          { label: "Jackets", href: "/shop?category=men&sub=jackets" },
          { label: "Trousers", href: "/shop?category=men&sub=trousers" },
          { label: "Shirts", href: "/shop?category=men&sub=shirts" },
          { label: "Knitwear", href: "/shop?category=men&sub=knitwear" },
        ],
      },
      {
        heading: "Accessories",
        links: [
          { label: "Bags", href: "/shop?category=bags" },
          { label: "Shoes", href: "/shop?category=shoes" },
          { label: "Belts", href: "/shop?category=accessories&sub=belts" },
          { label: "Watches", href: "/shop?category=accessories&sub=watches" },
        ],
      },
      {
        heading: "Collections",
        links: [
          { label: "Signature Line", href: "/shop?occasion=luxury" },
          { label: "Office Edit", href: "/shop?occasion=office" },
          { label: "Weekend Casual", href: "/shop?occasion=casual" },
          { label: "Sale", href: "/shop?onSale=true" },
        ],
      },
    ],
    featured: {
      img: "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?w=500&q=80",
      label: "Minimal Menswear",
      tag: "AW 2026",
      href: "/shop?category=men",
    },
  },
};

const simpleLinks = [
  { label: "Bags", href: "/shop?category=bags" },
  { label: "Shoes", href: "/shop?category=shoes" },
  { label: "Sale", href: "/shop?onSale=true" },
];

const allNavItems = [
  { label: "Women", href: "/shop?category=women", hasMega: true },
  { label: "Men", href: "/shop?category=men", hasMega: true },
  ...simpleLinks.map((l) => ({ ...l, hasMega: false })),
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { resolvedTheme, setTheme } = useTheme();
  const { items, openCart } = useCartStore();
  const { ids: wishlistIds } = useWishlistStore();
  const { mobileMenuOpen, toggleMobileMenu, closeMobileMenu, openCommandPalette, openSearch } = useUIStore();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const itemCount = items.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { closeMobileMenu(); }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (megaMenus[label]) setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };

  const megaData = activeMenu ? megaMenus[activeMenu] : null;

  return (
    <>
      {/* ── Announcement bar ── */}
      <div className="bg-[#111111] text-white text-center text-[10px] py-2 px-4 tracking-[0.2em] uppercase font-semibold border-b border-white/5">
        Free worldwide shipping on orders over $150
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-card border-b border-border"
        )}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex flex-col items-start leading-none">
            <span className="font-display text-2xl font-extrabold tracking-tight text-foreground">DALIN</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-muted-foreground -mt-0.5">by Alkuwatli</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {allNavItems.map((item) => (
              <li
                key={item.label}
                className="relative h-16 flex items-center"
                onMouseEnter={() => handleMouseEnter(item.label)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                    pathname.includes(item.href.split("?")[0]) ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {item.label}
                  {item.hasMega && <ChevronDown className={cn("w-3.5 h-3.5 opacity-50 transition-transform duration-200", activeMenu === item.label && "rotate-180")} />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button onClick={openSearch} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openCommandPalette}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground border border-border rounded-lg hover:bg-muted transition-colors"
              aria-label="Command palette"
            >
              <Command className="w-3.5 h-3.5" />
              <span>⌘K</span>
            </button>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link href="/wishlist" className="relative p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
              {wishlistIds.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistIds.length}
                </span>
              )}
            </Link>
            <button onClick={openCart} className="relative p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <Link href="/account" className="hidden md:flex items-center gap-2 ml-1 px-3 py-1.5 text-sm font-medium bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity">
              Account
            </Link>
            <button onClick={toggleMobileMenu} className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors ml-1" aria-label="Menu">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* ── Full-width Mega Menu Panel ── */}
        <AnimatePresence>
          {megaData && activeMenu && (
            <motion.div
              key={activeMenu}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full bg-card border-b border-border shadow-2xl z-40"
              onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-4 gap-10">
                {/* Link columns */}
                {megaData.columns.map((col) => (
                  <div key={col.heading}>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C59A5A] mb-4">
                      {col.heading}
                    </h4>
                    <ul className="space-y-2.5">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            onClick={() => setActiveMenu(null)}
                            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors hover:pl-1 duration-150 block"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Featured card */}
                {megaData.featured && (
                  <Link
                    href={megaData.featured.href}
                    onClick={() => setActiveMenu(null)}
                    className="relative rounded-2xl overflow-hidden group block"
                  >
                    <div className="relative w-full h-52">
                      <Image
                        src={megaData.featured.img}
                        alt={megaData.featured.label}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="250px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4 text-white">
                        <span className="text-[9px] font-bold uppercase tracking-widest text-[#C59A5A] block mb-1">
                          {megaData.featured.tag}
                        </span>
                        <h5 className="font-display text-base font-bold">{megaData.featured.label}</h5>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden lg:hidden border-t border-border bg-card"
            >
              <div className="px-4 py-4 flex flex-col gap-1">
                {allNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                {/* Mega-menu sub-links on mobile */}
                {Object.entries(megaMenus).map(([key, data]) =>
                  data.columns.flatMap((col) =>
                    col.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block pl-8 pr-3 py-1.5 text-xs text-muted-foreground rounded-lg hover:bg-muted transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))
                  )
                )}
                <div className="border-t border-border mt-2 pt-2 flex gap-2">
                  <Link href="/account" className="flex-1 text-center py-2 text-sm font-medium bg-foreground text-background rounded-lg">
                    Account
                  </Link>
                  <Link href="/wishlist" className="flex-1 text-center py-2 text-sm font-medium border border-border rounded-lg">
                    Wishlist ({wishlistIds.length})
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
