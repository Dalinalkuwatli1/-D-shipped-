"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, RefreshCw } from "lucide-react";

const floatingCards = [
  {
    img: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80",
    name: "Silk Slip Dress",
    price: "$320",
    tag: "New",
    delay: 0.6,
    position: "top-[18%] right-[2%]",
  },
  {
    img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80",
    name: "Linen Blazer",
    price: "$289",
    tag: "Best Seller",
    delay: 0.9,
    position: "top-[48%] right-[8%]",
  },
  {
    img: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&q=80",
    name: "Tailored Coat",
    price: "$445",
    tag: "Limited",
    delay: 1.1,
    position: "bottom-[14%] right-[1%]",
  },
];

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const videoY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const cardsY = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[95vh] flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Video with Parallax */}
      <motion.div
        style={{ y: videoY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <motion.video
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/459389137.hd.mp4?s=87d39a141f022fd3c311f5d2d0b5e28ff0e3c8bc&profile_id=170&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </motion.video>
        {/* Gradient — stronger on left for text, fades to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </motion.div>

      {/* Split Layout: Left text / Right floating model cards */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ── LEFT COLUMN: Text & CTA ── */}
        <motion.div style={{ y: textY }}>
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="inline-block text-[11px] font-bold uppercase text-[#C59A5A] mb-6 tracking-[0.25em]"
          >
            DALIN Studio &nbsp;·&nbsp; Autumn / Winter 2026
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.02] tracking-tight"
          >
            Dress with
            <br />
            <span className="italic font-light text-white/85">intention.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-base text-white/65 leading-relaxed max-w-md font-light"
          >
            Timeless pieces from independent ateliers. Crafted with precision,
            worn with absolute confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/shop"
              className="group flex items-center gap-2.5 px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide rounded-full hover:bg-[#C59A5A] hover:text-white transition-all duration-300 shadow-lg"
            >
              Shop Collection
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/shop?isNew=true"
              className="flex items-center gap-2.5 px-8 py-4 border border-white/25 text-white font-semibold text-sm tracking-wide rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              New Arrivals
            </Link>
          </motion.div>

          {/* Guarantees strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 grid grid-cols-3 gap-5 border-t border-white/10 pt-8 max-w-md"
          >
            {[
              { icon: Truck, title: "Free Shipping", desc: "Over $150" },
              { icon: RefreshCw, title: "30 Day Returns", desc: "Hassle-free" },
              { icon: ShieldCheck, title: "Secure Pay", desc: "SSL encrypted" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <item.icon className="w-4 h-4 text-[#C59A5A]" />
                <div>
                  <p className="text-white text-[11px] font-bold tracking-wide">{item.title}</p>
                  <p className="text-[10px] text-white/45 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT COLUMN: Floating editorial product cards ── */}
        <motion.div
          style={{ y: cardsY }}
          className="relative hidden lg:block h-[580px]"
        >
          {floatingCards.map((card, idx) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -10 - idx * 3, 0],
              }}
              transition={{
                opacity: { duration: 0.9, delay: card.delay },
                x: { duration: 0.9, delay: card.delay },
                y: {
                  duration: 4 + idx * 0.8,
                  delay: card.delay + 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className={`absolute ${card.position} w-[165px]`}
            >
              {/* Glass-morphism card */}
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/8 border border-white/15 shadow-2xl group">
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="165px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Badge */}
                  <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-wider bg-[#C59A5A] text-white px-2 py-0.5 rounded-full">
                    {card.tag}
                  </span>
                </div>
                <div className="px-3 py-3">
                  <p className="text-white text-xs font-semibold leading-tight">{card.name}</p>
                  <p className="text-white/60 text-[11px] mt-0.5">{card.price}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Decorative orbit ring behind the cards */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-full border border-white/5 pointer-events-none"
          />
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] rounded-full border border-white/8 pointer-events-none" />

          {/* Editorial label */}
          <div className="absolute bottom-0 right-0 text-right">
            <p className="text-white/18 text-[9px] tracking-[0.35em] uppercase">Signature Edition</p>
            <p className="text-white/30 text-[11px] font-serif italic mt-0.5">Dalin Studio Paris</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-bounce" />
        <p className="text-white/28 text-[9px] tracking-[0.3em] uppercase">Explore</p>
      </motion.div>
    </section>
  );
}
