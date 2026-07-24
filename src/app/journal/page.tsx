import Image from "next/image";
import Link from "next/link";

export default function JournalPage() {
  const articles = [
    { title: "The Return of Tailoring", category: "Style Notes", img: "https://images.unsplash.com/photo-1550614000-4b95d4ed1ab8?w=800&q=80", link: "/journal/style" },
    { title: "Inside the Paris Atelier", category: "Atelier Diary", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", link: "/journal/atelier" },
    { title: "Autumn/Winter 2026", category: "Lookbooks", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", link: "/journal/lookbooks" },
    { title: "DALIN x Arcs Studio", category: "Collaborations", img: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80", link: "/journal/collab" },
  ];

  return (
    <div className="bg-[#FAF8F5] text-[#1A1A1A] min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C59A5A]">
            Editorial
          </span>
          <h1 className="font-display text-5xl font-extrabold tracking-tight">The Journal</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {articles.map((article) => (
            <Link key={article.title} href={article.link} className="group block">
              <div className="relative h-[400px] mb-6 overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={article.img}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#C59A5A] block mb-2">
                {article.category}
              </span>
              <h2 className="font-display text-2xl font-bold group-hover:text-muted-foreground transition-colors">
                {article.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
