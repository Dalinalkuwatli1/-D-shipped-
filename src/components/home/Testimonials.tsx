"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sophie Marceau",
    title: "Fashion Editor, Paris",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
    quote:
      "DALIN is the only brand that genuinely understands restraint. The linen blazer I purchased is still the most complimented piece in my wardrobe six months later.",
    rating: 5,
    item: "Minimalist Linen Blazer",
  },
  {
    id: 2,
    name: "Isabella Chen",
    title: "Creative Director, London",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&q=80",
    quote:
      "The cashmere sweater arrived beautifully packaged. The quality surpassed every expectation. It's the kind of piece you stop buying cheap alternatives for.",
    rating: 5,
    item: "Oversized Cashmere Sweater",
  },
  {
    id: 3,
    name: "Clara Hoffmann",
    title: "Architect, Berlin",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=120&q=80",
    quote:
      "I placed my first order hesitantly. Now I've ordered five times. The fit is architectural, the materials are honest, and the service is impeccable.",
    rating: 5,
    item: "Tailored Wide-Leg Trousers",
  },
  {
    id: 4,
    name: "Amara Diallo",
    title: "Photographer, New York",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=120&q=80",
    quote:
      "Every shoot I do, people ask me about what I'm wearing. Nine times out of ten it's DALIN. The Silk Slip Dress photographs like a dream.",
    rating: 5,
    item: "Silk Slip Dress",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next: number) => {
    setDir(next > active ? 1 : -1);
    setActive((next + testimonials.length) % testimonials.length);
  };

  const t = testimonials[active];

  return (
    <section className="bg-foreground text-background py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#C59A5A]">
            Client Voices
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-2 text-background">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={t.id}
              custom={dir}
              initial={{ opacity: 0, x: dir * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col items-center text-center px-4 md:px-16"
            >
              {/* Stars */}
              <div className="flex gap-1 text-[#C59A5A] text-lg mb-6">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-light text-background/90 leading-relaxed italic max-w-3xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Item tag */}
              <div className="mt-6 px-4 py-1.5 border border-background/15 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-widest text-background/40">
                  On: {t.item}
                </span>
              </div>

              {/* Author */}
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#C59A5A]/40 shadow-lg">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <p className="text-sm font-bold text-background">{t.name}</p>
                  <p className="text-[11px] text-background/45 mt-0.5">{t.title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav arrows */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => go(active - 1)}
              className="w-10 h-10 rounded-full border border-background/15 flex items-center justify-center hover:bg-background/10 transition-colors text-background"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => go(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === active ? "w-6 h-2 bg-[#C59A5A]" : "w-2 h-2 bg-background/20"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => go(active + 1)}
              className="w-10 h-10 rounded-full border border-background/15 flex items-center justify-center hover:bg-background/10 transition-colors text-background"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
