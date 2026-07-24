"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types";

interface WishlistStore {
  ids: string[];
  products: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggle: (product: Product) => void;
  isWishlisted: (productId: string) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      ids: [],
      products: [],
      addItem: (product) =>
        set((s) =>
          s.ids.includes(product.id)
            ? s
            : { ids: [...s.ids, product.id], products: [...s.products, product] }
        ),
      removeItem: (productId) =>
        set((s) => ({
          ids: s.ids.filter((id) => id !== productId),
          products: s.products.filter((p) => p.id !== productId),
        })),
      toggle: (product) => {
        if (get().ids.includes(product.id)) get().removeItem(product.id);
        else get().addItem(product);
      },
      isWishlisted: (productId) => get().ids.includes(productId),
    }),
    { name: "shipped-wishlist" }
  )
);
