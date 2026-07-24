"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice, validateCoupon } from "@/lib/utils";
import { toast } from "sonner";

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
    applyCoupon,
    removeCoupon,
    couponCode,
    couponDiscount,
  } = useCartStore();

  const [couponInput, setCouponInput] = useState("");

  const shippingCost = subtotal >= 150 ? 0 : 12;
  const discountAmount = subtotal * (couponDiscount / 100);
  const total = subtotal + shippingCost - discountAmount;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateCoupon(couponInput);
    if (result.valid) {
      applyCoupon(couponInput.toUpperCase(), result.discount);
      toast.success(`Coupon applied! ${result.discount}% off`);
    } else {
      toast.error("Invalid coupon code.");
    }
    setCouponInput("");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] bg-background flex flex-col items-center justify-center text-center p-4">
        <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4 animate-bounce" />
        <h1 className="font-display text-3xl font-bold">Your cart is empty</h1>
        <p className="text-muted-foreground mt-2 max-w-sm">
          Looks like you haven&apos;t added anything to your cart yet. Explore our latest arrivals.
        </p>
        <Link
          href="/shop"
          className="mt-8 px-8 py-3.5 bg-foreground text-background font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl font-bold tracking-tight mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
              <div className="divide-y divide-border">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor.name}`}
                    className="p-6 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between"
                  >
                    {/* Item Details */}
                    <div className="flex gap-4 items-center">
                      <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-muted shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <Link
                          href={`/product/${item.product.slug}`}
                          className="font-semibold text-base hover:text-primary transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.product.brand}</p>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-xs bg-muted px-2 py-0.5 rounded font-medium">{item.selectedSize}</span>
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-border inline-block"
                            style={{ backgroundColor: item.selectedColor.hex }}
                            title={item.selectedColor.name}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Controls & Price */}
                    <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto">
                      <div className="flex items-center border border-border rounded-xl">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor.name,
                              item.quantity - 1
                            )
                          }
                          className="p-2.5 hover:bg-muted transition-colors rounded-l-xl"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-4 py-2 text-sm font-bold">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.selectedSize,
                              item.selectedColor.name,
                              item.quantity + 1
                            )
                          }
                          className="p-2.5 hover:bg-muted transition-colors rounded-r-xl"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="font-bold text-base">{formatPrice(item.product.price * item.quantity)}</span>
                        <button
                          onClick={() =>
                            removeItem(item.product.id, item.selectedSize, item.selectedColor.name)
                          }
                          className="p-2 text-muted-foreground hover:text-destructive transition-colors rounded-xl hover:bg-destructive/5"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6">
              <h2 className="font-display text-xl font-bold">Order Summary</h2>

              {/* Coupon Form */}
              {couponCode ? (
                <div className="flex items-center justify-between p-3.5 bg-green-500/10 border border-green-500/20 rounded-xl text-sm">
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    ✓ Applied: {couponCode} ({couponDiscount}% Off)
                  </span>
                  <button onClick={removeCoupon} className="text-muted-foreground hover:text-foreground text-xs underline font-medium">
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Enter Coupon Code"
                    className="flex-1 px-4 py-3 text-sm border border-border rounded-xl bg-muted/40 focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-foreground text-background font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
                  >
                    Apply
                  </button>
                </form>
              )}

              {/* Price Breakdown */}
              <div className="space-y-3.5 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Coupon Discount</span>
                    <span className="font-semibold">-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Shipping</span>
                  <span className="font-semibold">
                    {shippingCost === 0 ? "Free" : formatPrice(shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between pt-4 border-t border-border font-bold text-lg">
                  <span>Estimated Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <Link
                href="/checkout"
                className="flex items-center justify-center gap-2 w-full py-4 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-opacity shadow-sm"
              >
                Proceed to Checkout
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
