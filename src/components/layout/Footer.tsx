"use client";
import Link from "next/link";
import { FooterNewsletter } from "./FooterNewsletter";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  Shop: [
    { label: "New Arrivals", href: "/shop?sort=newest" },
    { label: "Women", href: "/shop?category=women" },
    { label: "Men", href: "/shop?category=men" },
    { label: "Bags", href: "/shop?category=bags" },
    { label: "Shoes", href: "/shop?category=shoes" },
    { label: "Sale", href: "/shop?onSale=true" },
  ],
  "Customer Care": [
    { label: "Help Center", href: "/help" },
    { label: "Shipping & Returns", href: "/shipping" },
    { label: "Size Guide", href: "/size-guide" },
    { label: "Track Your Order", href: "/track" },
    { label: "Contact Us", href: "/contact" },
  ],
  About: [
    { label: "Our Story", href: "/about" },
    { label: "DALIN Studio", href: "/about#studio" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Careers", href: "/careers" },
    { label: "Press & Media", href: "/press" },
  ],
  Journal: [
    { label: "Editorial", href: "/journal" },
    { label: "Style Notes", href: "/journal/style" },
    { label: "Atelier Diary", href: "/journal/atelier" },
    { label: "Lookbooks", href: "/journal/lookbooks" },
    { label: "Collaborations", href: "/journal/collab" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Affiliates", href: "/affiliates" },
  ],
};

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/yourphonenumber",
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const [country, setCountry] = useState("US");
  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("USD");

  return (
    <footer className="bg-foreground text-background">

      {/* ── Trust Badges ── */}
      <div className="border-b border-background/10 bg-black/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { Icon: ShieldCheck, title: "SSL Secure Checkout", desc: "256-bit encrypted payment" },
            { Icon: Truck, title: "Sustainable Packaging", desc: "100% biodegradable linen bags" },
            { Icon: RotateCcw, title: "Authenticity Guaranteed", desc: "Directly sourced verified pieces" },
          ].map(({ Icon, title, desc }) => (
            <div key={title} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
              <Icon className="w-5 h-5 text-[#C59A5A] shrink-0" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">{title}</h4>
                <p className="text-[10px] text-background/50 mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Newsletter strip ── */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-xl font-bold">Join our private collection.</h3>
            <p className="text-background/50 mt-1 text-sm font-light">
              Get <span className="text-[#C59A5A] font-semibold">10% off</span> your first order.
            </p>
          </div>
          <FooterNewsletter />
        </div>
      </div>

      {/* ── Main 6-column link grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

        {/* Brand block */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-5">
          <Link href="/" className="flex flex-col items-start leading-none">
            <span className="font-display text-2xl font-extrabold tracking-tight">DALIN</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-background/35 -mt-0.5">by Alkuwatli</span>
          </Link>
          <p className="text-sm text-background/50 leading-relaxed font-light">
            Premium clothing curated for the modern minimalist. High-end tailoring meets everyday luxury.
          </p>

          {/* Global shipping flags */}
          <div>
            <span className="text-[9px] font-bold uppercase tracking-widest text-background/35 block mb-2">Global Delivery</span>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-background/55 font-semibold">
              <span>🇺🇸 US</span><span>·</span><span>🇨🇦 CA</span><span>·</span>
              <span>🇬🇧 UK</span><span>·</span><span>🇪🇺 EU</span><span>·</span>
              <span>🇦🇪 AE</span><span>·</span><span>🇯🇵 JP</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2.5 pt-1">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-xl bg-background/8 hover:bg-background/18 border border-background/10 hover:border-background/20 transition-colors flex items-center justify-center text-background/70 hover:text-background"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category}>
            <h4 className="text-[10px] font-bold tracking-[0.22em] uppercase text-background/35 mb-5">{category}</h4>
            <ul className="space-y-3">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-background/60 hover:text-background transition-colors font-medium">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Bottom bar: copyright, selectors, payment icons ── */}
      <div className="border-t border-background/10 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-background/45">

          {/* Copyright */}
          <div className="text-center lg:text-left space-y-0.5">
            <p>© {new Date().getFullYear()} DALIN. All rights reserved. Made for global citizens.</p>
            <p className="text-background/30 text-[10px]">
              Crafted by <span className="text-background/50 font-semibold">Dalin Alkuwatli</span>
            </p>
          </div>

          {/* Locale selectors + payment */}
          <div className="flex flex-wrap items-center justify-center gap-4">

            {/* Country / Language / Currency */}
            <div className="flex items-center gap-2">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bg-background/8 border border-background/12 rounded-lg px-2.5 py-1.5 text-[11px] text-background/70 hover:bg-background/15 focus:outline-none cursor-pointer"
              >
                <option value="US" className="text-black">🇺🇸 United States</option>
                <option value="CA" className="text-black">🇨🇦 Canada</option>
                <option value="UK" className="text-black">🇬🇧 United Kingdom</option>
                <option value="EU" className="text-black">🇪🇺 Europe</option>
                <option value="AE" className="text-black">🇦🇪 UAE</option>
              </select>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-background/8 border border-background/12 rounded-lg px-2.5 py-1.5 text-[11px] text-background/70 hover:bg-background/15 focus:outline-none cursor-pointer"
              >
                <option value="EN" className="text-black">English</option>
                <option value="FR" className="text-black">Français</option>
                <option value="AR" className="text-black">العربية</option>
              </select>

              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-background/8 border border-background/12 rounded-lg px-2.5 py-1.5 text-[11px] text-background/70 hover:bg-background/15 focus:outline-none cursor-pointer"
              >
                <option value="USD" className="text-black">USD ($)</option>
                <option value="EUR" className="text-black">EUR (€)</option>
                <option value="GBP" className="text-black">GBP (£)</option>
                <option value="AED" className="text-black">AED (د.إ)</option>
              </select>
            </div>

            {/* Payment icons */}
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase tracking-widest text-background/25 mr-0.5">Pay with:</span>

              {/* Visa */}
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 750 471" className="w-8 h-auto"><rect width="750" height="471" rx="40" fill="#1A1F71"/><path d="M278 334L311 137h50L328 334h-50zm189-194c-20-7-51-14-90-14-99 0-169 50-170 120-1 52 48 81 85 99 38 18 51 30 51 46-1 25-30 36-58 36-39 0-60-5-92-19l-13-6-14 82c23 10 65 19 109 20 105 0 174-49 175-125 1-42-26-74-83-100-35-17-56-28-55-45 0-15 18-31 57-31 33-1 56 7 75 14l9 4 13-81zm261 0h-77c-24 0-42 7-52 31l-150 357h106s17-46 21-56h130l12 56h94L728 140zm-125 225c8-21 40-103 40-103s8-21 13-35l6 32 21 106h-80zm-348-225l-98 132-10-51c-18-57-73-119-135-150l89 282h106L357 140h-102z" fill="white"/></svg>
              </div>

              {/* Mastercard */}
              <div className="w-10 h-6 bg-white rounded flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 38 24" className="w-8 h-auto"><rect width="38" height="24" rx="4" fill="white"/><circle cx="15" cy="12" r="7" fill="#EB001B"/><circle cx="23" cy="12" r="7" fill="#F79E1B"/><path d="M19 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 19 6.8z" fill="#FF5F00"/></svg>
              </div>

              {/* Amex */}
              <div className="w-10 h-6 bg-[#2557D6] rounded flex items-center justify-center shadow-sm">
                <svg viewBox="0 0 750 471" className="w-8 h-auto"><rect width="750" height="471" rx="40" fill="#2557D6"/><text x="375" y="295" textAnchor="middle" fill="white" fontSize="190" fontWeight="900" fontFamily="Arial">AMEX</text></svg>
              </div>

              {/* Apple Pay */}
              <div className="w-11 h-6 bg-black rounded flex items-center justify-center shadow-sm px-1">
                <span className="text-white text-[9px] font-bold tracking-tight"> Pay</span>
              </div>

              {/* Google Pay */}
              <div className="w-11 h-6 bg-white rounded flex items-center justify-center shadow-sm border border-gray-100">
                <svg viewBox="0 0 41 17" className="w-9 h-auto">
                  <text x="0" y="13" fontSize="12" fontWeight="700" fontFamily="Arial" fill="#4285F4">G</text>
                  <text x="8" y="13" fontSize="12" fontWeight="700" fontFamily="Arial" fill="#EA4335">o</text>
                  <text x="15" y="13" fontSize="12" fontWeight="700" fontFamily="Arial" fill="#FBBC04">o</text>
                  <text x="22" y="13" fontSize="12" fontWeight="500" fontFamily="Arial" fill="#666">gle</text>
                </svg>
              </div>
            </div>

            {/* Trustpilot rating */}
            <div className="flex items-center gap-2 border-l border-background/15 pl-4 ml-2">
              <div className="flex flex-col items-start gap-0.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#00B67A]">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[9px] text-background/50 font-semibold tracking-wider">4.9/5 · Trustpilot</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
