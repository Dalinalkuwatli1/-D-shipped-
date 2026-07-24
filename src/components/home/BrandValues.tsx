"use client";
import { motion } from "framer-motion";
import { Truck, RotateCcw, Shield, CreditCard } from "lucide-react";

const values = [
  { icon: Truck, title: "Free Shipping", description: "On all orders over $150. Express options available." },
  { icon: RotateCcw, title: "Free Returns", description: "Hassle-free returns within 30 days." },
  { icon: Shield, title: "Authenticated", description: "Every item is verified for authenticity." },
  { icon: CreditCard, title: "Secure Payments", description: "256-bit SSL encrypted checkout." },
];

export function BrandValues() {
  return (
    <section className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {values.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-start gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{title}</h3>
                <p className="text-background/55 text-sm mt-1 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
