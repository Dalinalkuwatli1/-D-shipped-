"use client";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

export default function PrivacyPage() {
  // Recommend footwear classics
  const shoeProducts = products.filter(p => p.category === "shoes").slice(0, 2);

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59A5A]">Legal Department</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto">
            Last Updated: March 2026. How we protect, collect, and handle your global data.
          </p>
        </div>

        {/* Narrative text block */}
        <div className="bg-card border border-border/80 p-8 rounded-3xl space-y-6 text-xs text-muted-foreground leading-relaxed mb-20">
          <section className="space-y-2">
            <h3 className="font-bold text-foreground text-sm">1. Data We Collect</h3>
            <p>
              We collect information to provide better services to all our users. This includes account details, email newsletter opt-ins, purchase history, delivery addresses, and browser cookie identifiers to optimize our custom shop dashboard experience.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-foreground text-sm">2. Data Security</h3>
            <p>
              Your security is our highest priority. All transaction pathways use 256-bit SSL encryption. Payment processing is completely handled securely by certified Stripe gateways; we never store your credit or debit card details on our local database.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="font-bold text-foreground text-sm">3. Your Rights</h3>
            <p>
              You hold full authority to request deletion, exports, or modification of your personal data at any time. To make a query, please email our security officer at privacy@dalin.store.
            </p>
          </section>
        </div>

        {/* Footwear recommendation */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-10 space-y-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C59A5A]">Atelier Footwear</span>
            <h3 className="font-display text-2xl font-bold">Explore Hand-Crafted Shoes</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {shoeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
