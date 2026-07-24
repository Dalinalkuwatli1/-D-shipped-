import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AtelierDiaryPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/journal" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-black mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
        </Link>
        <div className="space-y-4 mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Atelier Diary
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Inside the Paris Atelier</h1>
        </div>
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden mb-12">
          <Image src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80" alt="Atelier" fill className="object-cover" />
        </div>
        <div className="prose prose-neutral max-w-none font-light leading-relaxed text-muted-foreground">
          <p>
            A look behind the doors of our Paris atelier, where each DALIN piece begins its journey from a raw sketch to a finished garment.
          </p>
          <p>
            Our master artisans spend upwards of 40 hours constructing a single tailored blazer, ensuring every stitch is placed with precision. True luxury takes time, and we refuse to rush the process.
          </p>
        </div>
      </div>
    </div>
  );
}
