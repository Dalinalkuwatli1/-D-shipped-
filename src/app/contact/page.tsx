"use client";
import { useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Curate mixed signature classics
  const signatureProducts = products.filter(p => p.isFeatured).slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    toast.success("Message sent", {
      description: "Our concierge team will respond within 12 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59A5A]">Private Concierge</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto">
            Get in touch with our design studio or concierge support desk. We respond within 12 hours.
          </p>
        </div>

        {/* Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          {/* Info */}
          <div className="lg:col-span-5 space-y-8 bg-card border border-border/80 p-8 rounded-3xl">
            <h3 className="font-display text-2xl font-bold">Atelier Contact</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              If you have any questions regarding sizing, custom tailoring, or shipping coordinates, please do not hesitate to contact our concierge.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-[#C59A5A]/10 flex items-center justify-center text-[#C59A5A]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block font-bold uppercase">General Inquiries</span>
                  <span className="text-xs font-semibold">concierge@dalin.store</span>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-[#C59A5A]/10 flex items-center justify-center text-[#C59A5A]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block font-bold uppercase">Phone Assistance</span>
                  <span className="text-xs font-semibold">+33 (0) 1 42 22 22 22</span>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-[#C59A5A]/10 flex items-center justify-center text-[#C59A5A]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-muted-foreground block font-bold uppercase">Main Atelier Office</span>
                  <span className="text-xs font-semibold">12 Rue du Faubourg Saint-Honoré, Paris, FR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6 bg-card border border-border/80 p-8 rounded-3xl">
            <h3 className="font-display text-2xl font-bold">Direct Message</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Sophie Marceau"
                  required
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#C59A5A]/30 focus:border-[#C59A5A] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sophie@example.com"
                  required
                  className="w-full px-4 py-3 bg-[#FAF8F5] border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#C59A5A]/30 focus:border-[#C59A5A] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your detailed inquiry here..."
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#FAF8F5] border border-border rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#C59A5A]/30 focus:border-[#C59A5A] transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 bg-foreground hover:bg-[#C59A5A] text-background text-xs font-bold uppercase tracking-widest rounded-xl transition-all"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        </div>

        {/* Curated Products */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C59A5A]">Signature Pieces</span>
            <h3 className="font-display text-2xl font-bold">Featured Best Sellers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
