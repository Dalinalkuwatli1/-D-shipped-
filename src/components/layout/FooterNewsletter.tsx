"use client";

import { useState } from "react";
import { toast } from "sonner";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Welcome aboard!", {
      description: "Your 10% discount code is on its way.",
    });
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 bg-background/10 border border-background/20 rounded-xl px-4 py-3 text-sm placeholder:text-background/40 focus:outline-none focus:ring-1 focus:ring-background/40"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-background text-foreground text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-background/90 transition-colors shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
