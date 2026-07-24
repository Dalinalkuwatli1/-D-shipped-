"use client";
import { useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "How long does shipping take?",
    a: "Orders over $150 qualify for free express shipping. Domestic orders typically arrive in 3-5 business days, while international shipping can take 5-10 business days depending on customs processing times.",
  },
  {
    q: "What is your return policy?",
    a: "We offer complimentary returns and exchanges within 30 days of purchase. Items must be returned in their original condition, unworn, unwashed, and with all designer tags attached.",
  },
  {
    q: "How can I track my package?",
    a: "Once your order ships, you will receive a tracking link via email. You can also track your order directly on our platform using the Track Your Order tool by inputting your order number.",
  },
  {
    q: "Where are the clothes manufactured?",
    a: "Our collections are handcrafted by family-run ateliers in Italy, France, and Japan. You can view the precise origin of each garment directly on its product detail page.",
  },
];

export default function HelpPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Focus products: Bags & Accessories capsule
  const helpProducts = products.filter(p => p.category === "bags").slice(0, 2);

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59A5A]">Customer Care</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Help Center</h1>
          <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto">
            Find answers to frequently asked questions or contact our dedicated support desk.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4 mb-20">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={faq.q} className="border border-border/80 rounded-2xl bg-card overflow-hidden">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left font-bold text-sm flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#C59A5A]" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-muted-foreground font-light leading-relaxed border-t border-border/40 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Curator */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C59A5A]">Atelier Accessories</span>
            <h3 className="font-display text-2xl font-bold">Featured Leather Goods</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {helpProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
