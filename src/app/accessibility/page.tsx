import { Accessibility as Icon } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-16">
          <div className="w-16 h-16 bg-[#C59A5A]/10 rounded-full flex items-center justify-center text-[#C59A5A] mb-8">
            <Icon className="w-8 h-8" />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Inclusion
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">Accessibility Statement</h1>
        </div>
        
        <div className="space-y-8 text-muted-foreground font-light leading-relaxed">
          <section className="space-y-4">
            <p>DALIN Studio is committed to making our website's content accessible and user-friendly to everyone. We believe that digital experiences should be inclusive, regardless of ability.</p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">Our Commitment</h2>
            <p>We are continuously working to improve the accessibility of our website to ensure we provide equal access to all of our users. Our ongoing accessibility efforts work toward conforming to the Web Content Accessibility Guidelines (WCAG) version 2.1, level AA criteria.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-display font-bold text-foreground">Feedback</h2>
            <p>If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please call our Customer Service team or email us at <strong>accessibility@dalin.studio</strong> with "Disabled Access" in the subject line.</p>
            <p>We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
