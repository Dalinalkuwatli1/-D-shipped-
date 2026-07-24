export default function AffiliatesPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Partnerships
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Affiliate Program</h1>
        </div>
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-black/5 text-center space-y-8">
          <h2 className="text-2xl font-display font-bold">Partner with DALIN Studio</h2>
          <p className="text-muted-foreground font-light leading-relaxed max-w-xl mx-auto">
            Are you a digital publisher, content creator, or fashion tastemaker? Join our global affiliate program and earn competitive commissions on every successful referral.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#C59A5A]">10%</div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Commission</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#C59A5A]">30 Days</div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Cookie Window</p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-[#C59A5A]">$450</div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Average Order</p>
            </div>
          </div>

          <div className="pt-8">
            <button className="bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#C59A5A] hover:text-white transition-colors">
              Apply via Rakuten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
