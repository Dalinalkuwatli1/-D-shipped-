"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

const posts = [
  { id: 1, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80", likes: "1,204", comments: "48" },
  { id: 2, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80", likes: "984", comments: "31" },
  { id: 3, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80", likes: "2,130", comments: "112" },
  { id: 4, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80", likes: "1,452", comments: "67" },
  { id: 5, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80", likes: "3,091", comments: "154" },
  { id: 6, image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&q=80", likes: "812", comments: "29" },
];

export function InstagramFeed() {
  return (
    <section className="bg-card border-t border-border py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Custom Instagram SVG */}
          <svg 
            className="w-6 h-6 mx-auto text-[#C59A5A] fill-current" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 text-foreground">Stories From The Grid</h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase hover:text-[#C59A5A] transition-colors mt-2 inline-block"
          >
            @dalin.store
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {posts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm bg-muted"
            >
              <Image
                src={post.image}
                alt="Instagram post"
                fill
                className="object-cover transition-transform duration-750 group-hover:scale-105"
              />
              
              {/* Instagram overlay on hover */}
              <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white text-xs font-bold">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 fill-white" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 fill-white" /> {post.comments}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
