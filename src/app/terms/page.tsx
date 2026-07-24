export default function TermsPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Legal
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="text-sm text-muted-foreground font-light">Last updated: August 1, 2026</p>
        </div>
        
        <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">1. Introduction</h2>
            <p>Welcome to DALIN Studio. These Terms of Service govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">2. Purchases & Payments</h2>
            <p>All purchases made through our platform are subject to product availability. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at any time without notice, at our sole discretion.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">3. Intellectual Property</h2>
            <p>The Site and its original content, features, and functionality are owned by DALIN Studio and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">4. Contact Information</h2>
            <p>Questions about the Terms of Service should be sent to us at legal@dalin.studio.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
