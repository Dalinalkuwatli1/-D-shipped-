import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function StyleNotesPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/journal" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-black mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
        </Link>
        <div className="space-y-4 mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Style Notes
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">The Return of Tailoring</h1>
        </div>
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden mb-12">
          <Image src="https://images.unsplash.com/photo-1550614000-4b95d4ed1ab8?w=1200&q=80" alt="Tailoring" fill className="object-cover" />
        </div>
        <div className="prose prose-neutral max-w-none font-light leading-relaxed text-muted-foreground">
          <p className="text-xl sm:text-2xl leading-normal text-foreground mb-12">
            This season, we witness a definitive shift away from extreme casual wear towards a softer, more fluid interpretation of traditional tailoring.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1594938298596-70f56fb3ce9b?w=800&q=80" alt="Detail tailoring" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center space-y-6 md:px-8">
              <h2 className="font-display text-2xl font-bold text-foreground">The Unstructured Silhouette</h2>
              <p>
                The emphasis is on unstructured blazers, wide-leg trousers that pool effortlessly at the shoe, and an overarching sense of relaxed elegance. It's about looking put-together without looking rigid.
              </p>
              <p>
                Padding has been stripped away. The canvas is lighter. The result is a garment that moves with the body rather than armor that restricts it.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden mb-12">
            <Image src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80" alt="Suiting collection" fill className="object-cover" />
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-center mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground">Fabric is Everything</h2>
            <p>
              When structure is removed, the fabric must do the heavy lifting. This is why we have focused entirely on heavy silks, crisp organic cottons, and worsted wools that possess a natural drape.
            </p>
            <p>
              Pair a tailored trouser with a simple ribbed tank, or throw an oversized blazer over a slip dress. The new rules of tailoring are defined by contrast.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-8">
            <div className="relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80" alt="Editorial fashion" fill className="object-cover" />
            </div>
            <div className="relative h-[300px] sm:h-[450px] rounded-2xl overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=800&q=80" alt="Editorial details" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
