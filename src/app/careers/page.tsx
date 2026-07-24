import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80"
          alt="Careers at DALIN"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative text-center space-y-4 px-4 z-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Join the Atelier
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Careers
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-6">
          <h2 className="font-display text-3xl font-bold">Shape the Future of Luxury</h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            We are always looking for visionary designers, meticulous artisans, and innovative thinkers who share our passion for enduring style and sustainable practices.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-[#C59A5A] mb-8 border-b border-border pb-4">
            Open Positions
          </h3>

          {[
            { title: "Senior Menswear Designer", location: "Paris, France", type: "Full-Time" },
            { title: "E-Commerce Manager", location: "Remote / London", type: "Full-Time" },
            { title: "Atelier Pattern Maker", location: "Milan, Italy", type: "Full-Time" },
            { title: "Sustainable Sourcing Specialist", location: "Remote", type: "Contract" },
          ].map((job) => (
            <div key={job.title} className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-black/5 hover:border-[#C59A5A]/30 transition-all cursor-pointer">
              <div className="space-y-1">
                <h4 className="font-bold text-lg">{job.title}</h4>
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                  <span>{job.location}</span>
                  <span className="w-1 h-1 rounded-full bg-black/20" />
                  <span>{job.type}</span>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center text-xs font-bold uppercase tracking-widest text-[#C59A5A] group-hover:text-black transition-colors">
                Apply Now <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-black text-white rounded-3xl p-12">
          <h3 className="font-display text-2xl font-bold mb-4">Don't see a fit?</h3>
          <p className="text-white/70 font-light text-sm max-w-md mx-auto mb-8">
            Send us your portfolio and resume. We're always eager to meet exceptional talent.
          </p>
          <Link href="/contact" className="inline-block bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#C59A5A] hover:text-white transition-colors">
            Submit General Application
          </Link>
        </div>
      </section>
    </div>
  );
}
