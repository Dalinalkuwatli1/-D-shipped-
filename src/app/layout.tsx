import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CommandPalette } from "@/components/ui/CommandPalette";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  title: { default: "SHIPPED — Premium Fashion", template: "%s | SHIPPED" },
  description: "Discover curated fashion collections from the world's most discerning brands. Premium clothing, accessories, and shoes.",
  keywords: ["fashion", "clothing", "luxury", "premium", "style"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shipped.fashion",
    siteName: "SHIPPED",
    title: "SHIPPED — Premium Fashion",
    description: "Discover curated fashion collections from the world's most discerning brands.",
  },
  twitter: { card: "summary_large_image", title: "SHIPPED — Premium Fashion" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <CommandPalette />
          <Toaster position="bottom-right" richColors closeButton />
        </Providers>
      </body>
    </html>
  );
}
