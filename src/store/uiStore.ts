"use client";
import { create } from "zustand";

interface UIStore {
  commandPaletteOpen: boolean;
  searchOpen: boolean;
  mobileMenuOpen: boolean;
  quickViewProduct: string | null;
  openCommandPalette: () => void;
  closeCommandPalette: () => void;
  toggleSearch: () => void;
  openSearch: () => void;
  closeSearch: () => void;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
  openQuickView: (productId: string) => void;
  closeQuickView: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  commandPaletteOpen: false,
  searchOpen: false,
  mobileMenuOpen: false,
  quickViewProduct: null,
  openCommandPalette: () => set({ commandPaletteOpen: true }),
  closeCommandPalette: () => set({ commandPaletteOpen: false }),
  toggleSearch: () => set((s) => ({ searchOpen: !s.searchOpen })),
  openSearch: () => set({ searchOpen: true }),
  closeSearch: () => set({ searchOpen: false }),
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
  openQuickView: (productId) => set({ quickViewProduct: productId }),
  closeQuickView: () => set({ quickViewProduct: null }),
}));
