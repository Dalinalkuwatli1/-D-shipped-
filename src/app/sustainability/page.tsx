import Image from "next/image";
import { Leaf, Recycle, Droplets } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1600&q=80"
          alt="Sustainability Nature"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative text-center space-y-4 px-4 z-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Our Commitment
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Sustainability
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-24 space-y-16">
        <div className="text-center space-y-6">
          <h2 className="font-display text-3xl font-bold">Fashion with a Conscience</h2>
          <p className="text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            At DALIN, we believe that true luxury shouldn't cost the earth. We are deeply committed to reducing our environmental footprint by sourcing ethically, manufacturing responsibly, and creating timeless pieces that outlast seasonal trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#C59A5A]/10 rounded-full flex items-center justify-center mx-auto text-[#C59A5A]">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="font-bold tracking-wide uppercase text-sm">Organic Materials</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              100% of our cotton is GOTS-certified organic, and we exclusively use cruelty-free wool and silk sourced from sustainable farms.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#C59A5A]/10 rounded-full flex items-center justify-center mx-auto text-[#C59A5A]">
              <Droplets className="w-8 h-8" />
            </div>
            <h3 className="font-bold tracking-wide uppercase text-sm">Water Conservation</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              Our partner mills utilize closed-loop water systems, recycling up to 95% of the water used during the fabric dyeing process.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-[#C59A5A]/10 rounded-full flex items-center justify-center mx-auto text-[#C59A5A]">
              <Recycle className="w-8 h-8" />
            </div>
            <h3 className="font-bold tracking-wide uppercase text-sm">Zero Waste Goal</h3>
            <p className="text-xs text-muted-foreground font-light leading-relaxed">
              By 2030, we aim to achieve zero waste to landfill across all our atelier operations and global supply chain.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
