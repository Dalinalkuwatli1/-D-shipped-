import Image from "next/image";

export default function PressPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen">
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80"
          alt="Press and Media"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative text-center space-y-4 px-4 z-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Media Inquiries
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Press & Media
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold">Press Office</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              For all press inquiries, sample requests, and lookbook materials, please contact our global communications team. We aim to respond to all media requests within 24 hours.
            </p>
            <div className="space-y-4 pt-4 border-t border-border">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#C59A5A]">Email</h4>
                <a href="mailto:press@dalin.studio" className="text-sm hover:underline">press@dalin.studio</a>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#C59A5A]">Global Headquarters</h4>
                <p className="text-sm text-muted-foreground">12 Avenue Montaigne<br/>75008 Paris, France</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-display text-3xl font-bold">Featured In</h2>
            <div className="grid grid-cols-2 gap-8">
              {['Vogue', 'GQ', 'Harper\'s Bazaar', 'Elle', 'Monocle', 'Kinfolk'].map((mag) => (
                <div key={mag} className="h-20 bg-white border border-black/5 flex items-center justify-center rounded-xl shadow-sm text-lg font-display font-bold text-black/40">
                  {mag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
