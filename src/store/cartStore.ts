"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product, ProductColor, ProductSize } from "@/types";

interface CartStore {
  items: CartItem[];
  couponCode: string;
  couponDiscount: number;
  isOpen: boolean;
  addItem: (product: Product, size: ProductSize, color: ProductColor, qty?: number) => void;
  removeItem: (productId: string, size: ProductSize, colorName: string) => void;
  updateQuantity: (productId: string, size: ProductSize, colorName: string, qty: number) => void;
  applyCoupon: (code: string, discount: number) => void;
  removeCoupon: () => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  get subtotal(): number;
  get itemCount(): number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: "",
      couponDiscount: 0,
      isOpen: false,

      addItem: (product, size, color, qty = 1) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.id === product.id && i.selectedSize === size && i.selectedColor.name === color.name
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id && i.selectedSize === size && i.selectedColor.name === color.name
                  ? { ...i, quantity: i.quantity + qty }
                  : i
              ),
            };
          }
          return { items: [...state.items, { product, quantity: qty, selectedSize: size, selectedColor: color }] };
        });
      },

      removeItem: (productId, size, colorName) =>
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.product.id === productId && i.selectedSize === size && i.selectedColor.name === colorName)
          ),
        })),

      updateQuantity: (productId, size, colorName, qty) => {
        if (qty <= 0) { get().removeItem(productId, size, colorName); return; }
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === productId && i.selectedSize === size && i.selectedColor.name === colorName
              ? { ...i, quantity: qty }
              : i
          ),
        }));
      },

      applyCoupon: (code, discount) => set({ couponCode: code, couponDiscount: discount }),
      removeCoupon: () => set({ couponCode: "", couponDiscount: 0 }),
      clearCart: () => set({ items: [], couponCode: "", couponDiscount: 0 }),
      toggleCart: () => set((s) => ({ isOpen: !s.isOpen })),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      get subtotal() {
        return get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
      },
      get itemCount() {
        return get().items.reduce((sum, i) => sum + i.quantity, 0);
      },
    }),
    { name: "shipped-cart" }
  )
);
