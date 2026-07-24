"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, ChevronRight, CreditCard, ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import { toast } from "sonner";
import { motion } from "framer-motion";

const checkoutSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  address: z.string().min(5, "Please enter a valid street address"),
  address2: z.string().optional(),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State/Region is required"),
  postalCode: z.string().min(4, "Postal code must be at least 4 digits"),
  country: z.string().min(2, "Country is required"),
  paymentMethod: z.enum(["card", "paypal", "apple-pay"]),
  cardNumber: z.string().min(16, "Card number must be 16 digits").optional().or(z.literal("")),
  cardExpiry: z.string().min(5, "Expiry date format MM/YY is required").optional().or(z.literal("")),
  cardCVC: z.string().min(3, "CVC must be at least 3 digits").optional().or(z.literal("")),
  cardName: z.string().min(4, "Cardholder name is required").optional().or(z.literal("")),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, subtotal, couponDiscount, clearCart } = useCartStore();
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNum, setOrderNum] = useState("");

  const shippingCost = subtotal >= 150 ? 0 : 12;
  const discountAmount = subtotal * (couponDiscount / 100);
  const total = subtotal + shippingCost - discountAmount;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "card",
      country: "United States",
    },
  });

  const paymentMethod = watch("paymentMethod");

  const onSubmit = async (data: CheckoutFormValues) => {
    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const randomOrderNumber = `SHP-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNum(randomOrderNumber);
    setIsSuccess(true);
    clearCart();
    toast.success("Order Placed Successfully!");
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] bg-background flex flex-col items-center justify-center text-center p-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md bg-card border border-border rounded-3xl p-8 shadow-sm flex flex-col items-center"
        >
          <CheckCircle2 className="w-16 h-16 text-green-500 mb-6" />
          <h1 className="font-display text-3xl font-bold">Thank You for Your Order!</h1>
          <p className="text-sm text-muted-foreground mt-2">
            Your payment was processed and your order has been received.
          </p>
          <div className="bg-muted/50 rounded-2xl p-4 w-full my-6 text-sm space-y-1.5 text-left">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order Number:</span>
              <span className="font-bold">{orderNum}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Est. Delivery:</span>
              <span className="font-semibold">3-5 Business Days</span>
            </div>
          </div>
          <Link
            href="/shop"
            className="w-full py-3.5 bg-foreground text-background font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] bg-background flex flex-col items-center justify-center text-center p-4">
        <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mb-4" />
        <h1 className="font-display text-2xl font-bold">Checkout is empty</h1>
        <p className="text-muted-foreground mt-1.5">Add items to your cart first.</p>
        <Link href="/shop" className="mt-6 px-6 py-2.5 bg-foreground text-background rounded-xl font-semibold text-sm">
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl font-bold tracking-tight mb-8">Checkout</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Billing / Shipping Info Form */}
          <div className="lg:col-span-7 space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold border-b border-border pb-3">1. Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Email</label>
                  <input
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Phone Number</label>
                  <input
                    {...register("phone")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    placeholder="123-456-7890"
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold border-b border-border pb-3">2. Shipping Address</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">First Name</label>
                  <input
                    {...register("firstName")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  {errors.firstName && <p className="text-xs text-red-500 mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Last Name</label>
                  <input
                    {...register("lastName")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  {errors.lastName && <p className="text-xs text-red-500 mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Street Address</label>
                <input
                  {...register("address")}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring mb-2"
                  placeholder="Street address, P.O. box"
                />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address.message}</p>}
                <input
                  {...register("address2")}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  placeholder="Apartment, suite, unit, building (optional)"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="col-span-2 sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">City</label>
                  <input
                    {...register("city")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">State</label>
                  <input
                    {...register("state")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">ZIP Code</label>
                  <input
                    {...register("postalCode")}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                  {errors.postalCode && <p className="text-xs text-red-500 mt-1">{errors.postalCode.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Country</label>
                <input
                  {...register("country")}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                />
                {errors.country && <p className="text-xs text-red-500 mt-1">{errors.country.message}</p>}
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-4">
              <h2 className="text-lg font-bold border-b border-border pb-3">3. Payment Method</h2>
              <div className="flex gap-4">
                <label className="flex-1 flex items-center justify-between p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <input
                      type="radio"
                      value="card"
                      {...register("paymentMethod")}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    Credit Card
                  </span>
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                </label>
                <label className="flex-1 flex items-center justify-between p-4 border border-border rounded-xl cursor-pointer hover:bg-muted/50 transition-colors">
                  <span className="flex items-center gap-2 text-sm font-semibold">
                    <input
                      type="radio"
                      value="paypal"
                      {...register("paymentMethod")}
                      className="w-4 h-4 text-primary"
                    />
                    PayPal
                  </span>
                </label>
              </div>

              {paymentMethod === "card" && (
                <div className="space-y-4 bg-muted/20 border border-border p-5 rounded-2xl">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Cardholder Name</label>
                    <input
                      {...register("cardName")}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Card Number</label>
                    <input
                      {...register("cardNumber")}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                      placeholder="0000 0000 0000 0000"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Expiry Date</label>
                      <input
                        {...register("cardExpiry")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">CVC</label>
                      <input
                        {...register("cardCVC")}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Checkout Items Summary Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6 shadow-sm space-y-6">
              <h2 className="font-display text-xl font-bold">Order Summary</h2>

              {/* Items Preview */}
              <div className="divide-y divide-border max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.selectedSize}`} className="py-3 flex gap-3 items-center">
                    <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-muted shrink-0">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">
                        Size: {item.selectedSize} · Qty: {item.quantity}
                      </p>
                    </div>
                    <span className="text-sm font-bold shrink-0">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              {/* pricing */}
              <div className="space-y-3 text-sm border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shippingCost === 0 ? "Free" : formatPrice(shippingCost)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-border font-bold text-lg">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? "Processing Order..." : "Place Order"}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
