"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, CheckCircle } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    toast.success("You're in.", { description: "Your 10% off code is on its way." });
  };

  return (
    <section className="bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* Small overline */}
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.35em] text-[#C59A5A]">
            Private Access
          </span>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-[1.08] tracking-tight">
            Join our private
            <br />
            <span className="italic font-light text-foreground/60">collection.</span>
          </h2>

          {/* Sub-copy */}
          <p className="text-sm text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
            25,000 members receive early access to drops, private sales, and an exclusive{" "}
            <span className="text-foreground font-semibold">10% off</span> their first order.
          </p>

          {/* Form or Success */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-3 px-6 py-4 border border-border rounded-2xl text-sm text-foreground"
            >
              <CheckCircle className="w-5 h-5 text-[#C59A5A] shrink-0" />
              <span>Welcome to the circle. Check your inbox.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full sm:flex-1 px-5 py-3.5 bg-card border border-border rounded-xl text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#C59A5A]/30 focus:border-[#C59A5A] transition-all"
              />
              <button
                type="submit"
                className="group flex items-center gap-2 px-6 py-3.5 bg-foreground hover:bg-[#C59A5A] text-background text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shrink-0"
              >
                Join
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          )}

          {/* Fine print */}
          <p className="text-[10px] text-muted-foreground/60 max-w-xs mx-auto">
            No spam. Unsubscribe anytime. By joining you agree to our privacy policy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
