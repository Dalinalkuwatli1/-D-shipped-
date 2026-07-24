import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LookbooksPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/journal" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-black mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
        </Link>
        <div className="space-y-4 mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Lookbooks
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Autumn/Winter 2026</h1>
        </div>
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden mb-12">
          <Image src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80" alt="Lookbook" fill className="object-cover" />
        </div>
        <div className="prose prose-neutral max-w-none font-light leading-relaxed text-muted-foreground">
          <p>
            Explore our latest campaign, shot on the rugged coastlines of Normandy.
          </p>
          <p>
            This collection embraces the elements, featuring heavy boiled wools, water-resistant technical gabardine, and chunky cashmere knits designed to protect and comfort.
          </p>
        </div>
      </div>
    </div>
  );
}
