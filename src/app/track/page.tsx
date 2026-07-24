"use client";
import { useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { toast } from "sonner";
import { Search, Package, MapPin, Truck } from "lucide-react";

export default function TrackPage() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState<any>(null);
  const [searched, setSearched] = useState(false);

  // Focus products: men's casual basics
  const travelProducts = products.filter(p => p.category === "men").slice(0, 2);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) return;

    setSearched(true);
    // Simulate real tracking lookup
    if (orderId.toUpperCase().includes("DL-")) {
      setStatus({
        orderNumber: orderId.toUpperCase(),
        carrier: "DHL Express",
        status: "In Transit",
        location: "Paris Sort Facility, FR",
        eta: "In 3 Business Days",
      });
      toast.success("Order status retrieved successfully.");
    } else {
      setStatus(null);
      toast.error("Order not found", {
        description: "Make sure you include the prefix 'DL-' followed by your digits.",
      });
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59A5A]">Real-Time Logistics</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Track Your Order</h1>
          <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto">
            Input your purchase order number (formatted as DL-XXXX) to get the latest delivery coordinates.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleTrack} className="flex gap-3 max-w-md mx-auto mb-16">
          <input
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="e.g. DL-4029"
            required
            className="flex-1 px-5 py-3.5 bg-card border border-border/80 rounded-xl text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#C59A5A]/30 focus:border-[#C59A5A] transition-all"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#C59A5A] text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors shrink-0"
          >
            <Search className="w-4 h-4" /> Track
          </button>
        </form>

        {/* Result */}
        {searched && (
          <div className="max-w-md mx-auto p-6 bg-card border border-border rounded-2xl mb-20 space-y-4 shadow-sm">
            {status ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 border-b border-border/40 pb-4">
                  <Package className="w-5 h-5 text-[#C59A5A]" />
                  <span className="text-sm font-bold">Order: {status.orderNumber}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs font-medium">
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Carrier</span>
                    <span className="text-foreground">{status.carrier}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Current Status</span>
                    <span className="px-2 py-0.5 bg-green-50 text-green-600 rounded font-bold">{status.status}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Last Location</span>
                    <span className="text-foreground flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      {status.location}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[10px] uppercase">Estimated Arrival</span>
                    <span className="text-foreground font-bold flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-blue-400" />
                      {status.eta}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-center text-xs text-muted-foreground font-medium py-4">
                No tracking status available for this order number. Try formatted like <strong className="text-foreground">DL-4029</strong>.
              </p>
            )}
          </div>
        )}

        {/* Curator */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C59A5A]">Travel Capsule</span>
            <h3 className="font-display text-2xl font-bold">Men&apos;s Smart Casuals</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {travelProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
