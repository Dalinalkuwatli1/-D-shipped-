"use client";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

const sizeChart = [
  { size: "XS", bust: "80-84 cm", waist: "62-66 cm", hips: "88-92 cm" },
  { size: "S", bust: "84-88 cm", waist: "66-70 cm", hips: "92-96 cm" },
  { size: "M", bust: "88-92 cm", waist: "70-74 cm", hips: "96-100 cm" },
  { size: "L", bust: "92-96 cm", waist: "74-78 cm", hips: "100-104 cm" },
  { size: "XL", bust: "96-100 cm", waist: "78-82 cm", hips: "104-108 cm" },
];

export default function SizeGuidePage() {
  // Recommend tailored dress/suit pieces that need exact sizing
  const tailorProducts = products.filter(
    p => p.slug === "minimalist-linen-blazer" || p.slug === "silk-midi-slip-dress" || p.slug === "tailored-wide-leg-trousers"
  );

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59A5A]">Perfect Fit</span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Size Guide</h1>
          <p className="text-sm text-muted-foreground font-light max-w-sm mx-auto">
            Use our detailed measurements table to find your optimal size fit for all tailored items.
          </p>
        </div>

        {/* Size chart table */}
        <div className="overflow-x-auto border border-border/85 rounded-2xl bg-card shadow-sm mb-20">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-muted/40 border-b border-border/60">
                <th className="p-4 font-bold uppercase tracking-wider text-muted-foreground">Size</th>
                <th className="p-4 font-bold uppercase tracking-wider text-muted-foreground">Bust Measurements</th>
                <th className="p-4 font-bold uppercase tracking-wider text-muted-foreground">Waist Measurements</th>
                <th className="p-4 font-bold uppercase tracking-wider text-muted-foreground">Hips Measurements</th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row) => (
                <tr key={row.size} className="border-b border-border/40 last:border-b-0 hover:bg-muted/10 transition-colors">
                  <td className="p-4 font-bold">{row.size}</td>
                  <td className="p-4 font-medium text-muted-foreground">{row.bust}</td>
                  <td className="p-4 font-medium text-muted-foreground">{row.waist}</td>
                  <td className="p-4 font-medium text-muted-foreground">{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Product Grid */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-12 space-y-2">
            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#C59A5A]">Tailored Fit</span>
            <h3 className="font-display text-2xl font-bold">Featured Tailored Classics</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tailorProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
