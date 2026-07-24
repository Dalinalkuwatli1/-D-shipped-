import { Product } from "@/types";

// Core 12 hand-curated products with perfectly matched, verified working Unsplash image links
const coreProducts: Product[] = [
  {
    id: "1",
    slug: "minimalist-linen-blazer",
    name: "Minimalist Linen Blazer",
    brand: "ARCS Studio",
    category: "women",
    subcategory: "Blazers",
    description: "A perfectly tailored linen blazer for the modern wardrobe. Crafted from premium Belgian linen with a relaxed yet structured silhouette. Features notched lapels, a single-button closure, and two flap pockets.",
    price: 289,
    originalPrice: 420,
    discount: 31,
    images: [
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/28512e1999412f9508728822edf4350b.jpg",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/01_12062939-R36_KAS_SU26_6-30_ED_060.webp",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/m6.jpg"
    ],
    colors: [
      { name: "Sand", hex: "#140c4eff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/01_12062939-R36_KAS_SU26_6-30_ED_060.webp" },
      { name: "Ivory", hex: "#070606ff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/m6.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviewCount: 124,
    reviews: [
      { id: "r1", userId: "u1", userName: "Sophie M.", rating: 5, title: "Absolutely stunning", body: "The quality of this blazer is exceptional. Fits perfectly and the linen is incredibly soft.", date: "2025-03-10", verified: true, helpful: 42 }
    ],
    tags: ["blazer", "linen", "minimalist", "workwear"],
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    stockCount: 18,
    sku: "WBL-001-SND",
    material: "100% Belgian Linen",
    careInstructions: ["Dry clean only", "Do not bleach", "Iron on low heat"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2025-01-15T00:00:00Z",
  },
  {
    id: "2",
    slug: "oversized-cashmere-sweater",
    name: "Oversized Cashmere Sweater",
    brand: "Nomad Atelier",
    category: "women",
    subcategory: "Knitwear",
    description: "Wrapped in pure Mongolian cashmere, this oversized sweater redefines luxury comfort. The relaxed drop-shoulder silhouette creates an effortlessly chic look.",
    price: 345,
    originalPrice: 345,
    images: [
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/yildiz-desen-kazak-siyah-abaf.webp",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/images%20(3).jpeg",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/05028411250-a15.webp"
    ],
    colors: [
      { name: "Oatmeal", hex: "#12110fff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/yildiz-desen-kazak-siyah-abaf.webp" },
      { name: "Dusty Rose", hex: "#573110ff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/images%20(3).jpeg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.9,
    reviewCount: 89,
    reviews: [
      { id: "r3", userId: "u3", userName: "Clara B.", rating: 5, title: "The softest thing I own", body: "I splurged on this and it was 100% worth it. Incredibly soft and warm.", date: "2025-03-01", verified: true, helpful: 56 }
    ],
    tags: ["cashmere", "sweater", "luxury", "knitwear"],
    isNew: true,
    isFeatured: true,
    inStock: true,
    stockCount: 24,
    sku: "WKN-002-OAT",
    material: "100% Mongolian Cashmere",
    careInstructions: ["Hand wash cold", "Lay flat to dry", "Do not tumble dry"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2025-02-20T00:00:00Z",
  },
  {
    id: "3",
    slug: "tailored-wide-leg-trousers",
    name: "Tailored Wide Leg Trousers",
    brand: "ARCS Studio",
    category: "women",
    subcategory: "Trousers",
    description: "These wide-leg trousers are the cornerstone of a refined wardrobe. Cut from a luxurious wool-blend fabric with a high-rise waist and fluid silhouette.",
    price: 195,
    originalPrice: 260,
    discount: 25,
    images: [
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/ninepine-asana-relaxed-comfortable-work-trousers-dark-grey.webp",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/wide-leg-simple-women-trousers-light-greygz-trousers-klaudio-fashion-bs-7639-98391-69-B.jpg",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/images%20(4).jpeg"
    ],
    colors: [
      { name: "Ecru", hex: "#F2EDE4", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/ninepine-asana-relaxed-comfortable-work-trousers-dark-grey.webp" },
      { name: "Charcoal", hex: "#374151", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/wide-leg-simple-women-trousers-light-greygz-trousers-klaudio-fashion-bs-7639-98391-69-B.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.7,
    reviewCount: 67,
    reviews: [
      { id: "r4", userId: "u4", userName: "Maya T.", rating: 5, title: "Perfect fit", body: "These are everything I wanted. The fabric is beautiful and they iron perfectly.", date: "2025-02-15", verified: true, helpful: 28 }
    ],
    tags: ["trousers", "wide-leg", "tailored", "workwear"],
    isBestSeller: true,
    inStock: true,
    stockCount: 31,
    sku: "WTR-003-ECR",
    material: "70% Wool, 30% Polyester",
    careInstructions: ["Dry clean preferred", "Iron on medium heat", "Do not bleach"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2025-01-08T00:00:00Z",
  },
  {
    id: "4",
    slug: "structured-leather-tote",
    name: "Structured Leather Tote",
    brand: "Maison Lumière",
    category: "bags",
    subcategory: "Totes",
    description: "An architectural tote in full-grain Italian leather. The rigid base and structured panels give this bag an unmistakably refined presence.",
    price: 525,
    originalPrice: 525,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"
    ],
    colors: [
      { name: "Cognac", hex: "#14110dff", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80" },
      { name: "Black", hex: "#9e6413ff", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80" }
    ],
    sizes: ["One Size"],
    rating: 4.9,
    reviewCount: 213,
    reviews: [
      { id: "r5", userId: "u5", userName: "Priya S.", rating: 5, title: "A forever bag", body: "This is the most beautiful bag I have ever owned. The leather is incredible.", date: "2025-03-12", verified: true, helpful: 89 }
    ],
    tags: ["leather", "tote", "luxury", "bag"],
    isBestSeller: true,
    isTrending: true,
    inStock: true,
    stockCount: 9,
    sku: "BAG-004-CGN",
    material: "Full-grain Italian Leather",
    careInstructions: ["Clean with dry cloth", "Store in dust bag", "Condition regularly"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2024-12-01T00:00:00Z",
  },
  {
    id: "5",
    slug: "merino-crew-neck-tee",
    name: "Merino Crew-Neck Tee",
    brand: "Nomad Atelier",
    category: "men",
    subcategory: "T-Shirts",
    description: "A classic crew-neck cut from superfine 18.5-micron merino wool. Temperature-regulating, odour-resistant, and machine washable.",
    price: 95,
    originalPrice: 95,
    images: [
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/images%20(2).jpeg",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/4100-erkek-t-shirt-erkek-52396-28-B.jpg",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/polo-yaka-dugmeli-ribanali-erkek-t-shirt-mavi-yeni-erkek-giyim-hit-time-780286-19-B.jpg"
    ],
    colors: [
      { name: "Navy", hex: "#1B3A5C", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/images%20(2).jpeg" },
      { name: "White", hex: "#FFFFFF", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/1_org_zoom.webp" },
      { name: "Navy Alt", hex: "#1B3A5C", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/4100-erkek-t-shirt-erkek-52396-28-B.jpg" },
      { name: "White Alt", hex: "#FFFFFF", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/polo-yaka-dugmeli-ribanali-erkek-t-shirt-mavi-yeni-erkek-giyim-hit-time-780286-19-B.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.8,
    reviewCount: 342,
    reviews: [
      { id: "r6", userId: "u6", userName: "James H.", rating: 5, title: "Best t-shirt I own", body: "Lightweight, breathable and looks sharp. I bought 3 colours.", date: "2025-03-05", verified: true, helpful: 121 }
    ],
    tags: ["merino", "t-shirt", "basics", "men"],
    isBestSeller: true,
    inStock: true,
    stockCount: 87,
    sku: "MTT-005-NVY",
    material: "100% Superfine Merino Wool",
    careInstructions: ["Machine wash cold", "Lay flat to dry"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2024-11-15T00:00:00Z",
  },
  {
    id: "6",
    slug: "slim-chino-trousers",
    name: "Slim Chino Trousers",
    brand: "ARCS Studio",
    category: "men",
    subcategory: "Trousers",
    description: "A modern slim-fit chino in a premium cotton-stretch fabric. Versatile enough for the office and refined enough for evening wear.",
    price: 145,
    originalPrice: 195,
    discount: 26,
    images: [
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/cdb548a8509425626cef0132798401bb.jpg",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/f08a2b82283d243d49e2d18ab67700da.jpg",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/fb475a085d5f23ee00adc9c7b43ef99f.jpg",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/5a95ff20ed946b640d17e8a75bec013f.jpg"
    ],
    colors: [
      { name: "Khaki", hex: "#65625dff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/cdb548a8509425626cef0132798401bb.jpg" },
      { name: "Navy", hex: "#111416ff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/f08a2b82283d243d49e2d18ab67700da.jpg" },
      { name: "Khaki Alt", hex: "#65625dff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/fb475a085d5f23ee00adc9c7b43ef99f.jpg" },
      { name: "Navy Alt", hex: "#111416ff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/5a95ff20ed946b640d17e8a75bec013f.jpg" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.6,
    reviewCount: 178,
    reviews: [
      { id: "r7", userId: "u7", userName: "Alex R.", rating: 4, title: "Great quality", body: "Good fit and excellent fabric. Very pleased.", date: "2025-02-20", verified: true, helpful: 45 }
    ],
    tags: ["chino", "slim", "men", "trousers"],
    isTrending: true,
    inStock: true,
    stockCount: 52,
    sku: "MCH-006-KHK",
    material: "97% Cotton, 3% Elastane",
    careInstructions: ["Machine wash cold", "Tumble dry low"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2025-01-20T00:00:00Z",
  },
  {
    id: "7",
    slug: "silk-midi-slip-dress",
    name: "Silk Midi Slip Dress",
    brand: "Maison Lumière",
    category: "women",
    subcategory: "Dresses",
    description: "A bias-cut silk slip dress that moves like water. The adjustable spaghetti straps and lace trim detail elevate this piece from effortless to ethereal.",
    price: 320,
    originalPrice: 320,
    images: [
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/76.jpg",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/Sharla-1.webp"
    ],
    colors: [
      { name: "Champagne", hex: "#F7E7CE", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/76.jpg" },
      { name: "Onyx", hex: "#353839", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/Sharla-1.webp" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviewCount: 156,
    reviews: [
      { id: "r8", userId: "u8", userName: "Natalie V.", rating: 5, title: "Absolutely gorgeous", body: "I wore this to a wedding and felt like the most elegant person in the room.", date: "2025-03-14", verified: true, helpful: 78 }
    ],
    tags: ["silk", "dress", "midi", "elegant"],
    isNew: true,
    isTrending: true,
    isFeatured: true,
    inStock: true,
    stockCount: 14,
    sku: "WDR-007-CHP",
    material: "100% Mulberry Silk",
    careInstructions: ["Dry clean only", "Do not wring"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2025-03-01T00:00:00Z",
  },
  {
    id: "8",
    slug: "leather-derby-shoes",
    name: "Leather Derby Shoes",
    brand: "Maison Lumière",
    category: "shoes",
    subcategory: "Formal",
    description: "Hand-crafted derby shoes in smooth calf leather with a Goodyear-welted construction for longevity and repairability.",
    price: 395,
    originalPrice: 395,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80"
    ],
    colors: [
      { name: "Tan", hex: "#A0785A", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" },
      { name: "Black", hex: "#111111", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewCount: 94,
    reviews: [
      { id: "r9", userId: "u9", userName: "Daniel F.", rating: 5, title: "Exceptional craftsmanship", body: "These shoes are worth every cent. Beautiful leather and incredibly comfortable.", date: "2025-02-10", verified: true, helpful: 37 }
    ],
    tags: ["shoes", "leather", "derby", "formal"],
    isBestSeller: true,
    inStock: true,
    stockCount: 22,
    sku: "SHO-008-TAN",
    material: "Full-grain Calf Leather upper, Leather sole",
    careInstructions: ["Polish regularly", "Use shoe trees"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2024-10-15T00:00:00Z",
  },
  {
    id: "9",
    slug: "pleated-midi-skirt",
    name: "Pleated Midi Skirt",
    brand: "Nomad Atelier",
    category: "women",
    subcategory: "Skirts",
    description: "A sculptural pleated skirt in heavy silk-charmeuse. The knife pleats are stitched at the waistband and release into a fluid movement below.",
    price: 215,
    originalPrice: 280,
    discount: 23,
    images: [
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/91QA9fGlvfL._AC_UY1000_.jpg",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/61Xl7BwYWlL._AC_SY879_.jpg"
    ],
    colors: [
      { name: "Ivory", hex: "#15120cff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/91QA9fGlvfL._AC_UY1000_.jpg" },
      { name: "Forest", hex: "#c1652bff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/61Xl7BwYWlL._AC_SY879_.jpg" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.6,
    reviewCount: 82,
    reviews: [
      { id: "r10", userId: "u10", userName: "Amelia C.", rating: 5, title: "Stunning movement", body: "The way this skirt moves is just beautiful. Very high quality.", date: "2025-01-28", verified: true, helpful: 29 }
    ],
    tags: ["skirt", "pleated", "midi", "silk"],
    isNew: true,
    inStock: true,
    stockCount: 19,
    sku: "WSK-009-IVY",
    material: "100% Silk Charmeuse",
    careInstructions: ["Dry clean only", "Do not tumble dry"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2025-02-10T00:00:00Z",
  },
  {
    id: "10",
    slug: "quilted-crossbody-bag",
    name: "Quilted Crossbody Bag",
    brand: "ARCS Studio",
    category: "bags",
    subcategory: "Crossbody",
    description: "A compact quilted crossbody bag with gold-tone chain strap. The lambskin leather and precise stitching make this a timeless everyday essential.",
    price: 285,
    originalPrice: 285,
    images: [
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/IMG_0911.webp",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/71yFIpu0i3L._AC_UY1000_.jpg"
    ],
    colors: [
      { name: "Black", hex: "#111111", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/IMG_0911.webp" },
      { name: "Cream", hex: "#FFFDD0", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/71yFIpu0i3L._AC_UY1000_.jpg" }
    ],
    sizes: ["One Size"],
    rating: 4.8,
    reviewCount: 167,
    reviews: [
      { id: "r11", userId: "u11", userName: "Luna P.", rating: 5, title: "Perfect everyday bag", body: "Fits everything I need and looks incredibly chic. So happy with this.", date: "2025-03-08", verified: true, helpful: 61 }
    ],
    tags: ["crossbody", "quilted", "bag", "gold chain"],
    isTrending: true,
    isBestSeller: true,
    inStock: true,
    stockCount: 28,
    sku: "BAG-010-BLK",
    material: "Lambskin Leather, Gold Hardware",
    careInstructions: ["Clean with soft cloth", "Store in dust bag"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2025-01-25T00:00:00Z",
  },
  {
    id: "11",
    slug: "relaxed-fit-denim-jacket",
    name: "Relaxed Fit Denim Jacket",
    brand: "Nomad Atelier",
    category: "men",
    subcategory: "Jackets",
    description: "A relaxed denim jacket in premium selvedge denim. The slightly oversized cut and raw-edge details give it a considered, modern appeal.",
    price: 185,
    originalPrice: 220,
    discount: 16,
    images: [
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/s7-5462_alternate1.avif",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/Men-Leather-Jackets-1582970628214_d6c2af3e-cd7e-44b8-88cb-94527f33218d_2048x.webp"
    ],
    colors: [
      { name: "Indigo", hex: "#dac775ff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/s7-5462_alternate1.avif" },
      { name: "Light Wash", hex: "#060604ff", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/Men-Leather-Jackets-1582970628214_d6c2af3e-cd7e-44b8-88cb-94527f33218d_2048x.webp" }
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.7,
    reviewCount: 201,
    reviews: [
      { id: "r12", userId: "u12", userName: "Tom W.", rating: 5, title: "A staple piece", body: "This jacket goes with everything. Excellent construction and great denim.", date: "2025-02-25", verified: true, helpful: 73 }
    ],
    tags: ["denim", "jacket", "men", "selvedge"],
    isTrending: true,
    inStock: true,
    stockCount: 34,
    sku: "MJK-011-IND",
    material: "100% Selvedge Denim",
    careInstructions: ["Machine wash cold", "Tumble dry low"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2025-02-01T00:00:00Z",
  },
  {
    id: "12",
    slug: "suede-ankle-boots",
    name: "Suede Ankle Boots",
    brand: "Maison Lumière",
    category: "shoes",
    subcategory: "Boots",
    description: "Sleek ankle boots crafted from premium suede with a pointed toe and block heel. The cushioned insole ensures all-day comfort without compromising style.",
    price: 345,
    originalPrice: 430,
    discount: 20,
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/E13974s.webp"
    ],
    colors: [
      { name: "Camel", hex: "#181375ff", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80" },
      { name: "Black", hex: "#111111", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/E13974s.webp" }
    ],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviewCount: 143,
    reviews: [
      { id: "r13", userId: "u13", userName: "Rosa M.", rating: 5, title: "Incredibly comfortable", body: "I wore these all day and my feet never hurt. The suede is gorgeous.", date: "2025-03-01", verified: true, helpful: 52 }
    ],
    tags: ["suede", "boots", "ankle", "women"],
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    stockCount: 16,
    sku: "SHO-012-CML",
    material: "Premium Suede upper, Leather sole",
    careInstructions: ["Use suede protector", "Brush with suede brush"],
    shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
    returnPolicy: "Free returns within 30 days of purchase.",
    createdAt: "2024-11-01T00:00:00Z",
  },
];

// Helper database of verified matching Unsplash photos for each category to ensure 100% matched, accurate image rendering
const womenImagesPool = [
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/1_org_zoom%20(1).webp", "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80"],   // 0
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/images%20(4).jpeg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/ninepine-asana-relaxed-comfortable-work-trousers-dark-grey.webp"],   // 1
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/76.jpg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/Sharla-1.webp"],   // 2
  ["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80", "https://6a5ca0bf53cbb51f4784d637.imgix.net/s-l1200.jpg"],   // 3
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/s7-5462_alternate1.avif", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/Men-Leather-Jackets-1582970628214_d6c2af3e-cd7e-44b8-88cb-94527f33218d_2048x.webp"],   // 4
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/E13974s.webp", "https://6a5ca0bf53cbb51f4784d637.imgix.net/19896678102-a1.webp"],   // 5
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/91QA9fGlvfL._AC_UY1000_.jpg", "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80"],   // 6
  ["https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80", "https://images.unsplash.com/photo-1550614000-4b95d4ed1ab8?w=800&q=80"],   // 7
  ["https://images.unsplash.com/photo-1515347619362-f67b54abcc9b?w=800&q=80", "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&q=80"],   // 8
  ["https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", "https://images.unsplash.com/photo-1502716115624-b565e0990d9b?w=800&q=80"],   // 9
  ["https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"],   // 10
  ["https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=800&q=80", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/28512e1999412f9508728822edf4350b.jpg"],   // 11
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/SS26_SIGN-UP_POPUP.webp", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/71yFIpu0i3L._AC_UY1000_.jpg"],   // 12
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/AZALIA-SU_TAUPE_0.webp", "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"],   // 13
  ["https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80", "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&q=80"],   // 14
  ["https://images.unsplash.com/photo-1548549557-dbe9946621da?w=800&q=80", "https://6a5ca0bf53cbb51f4784d637.imgix.net/m6.jpg"],   // 15
  ["https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=800&q=80", "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"],   // 16
  ["https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80", "https://6a5ca0bf53cbb51f4784d637.imgix.net/images%20(1).jpeg"],   // 17
  ["https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80", "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80"],   // 18
];

const menImagesPool = [
  ["https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&q=80", "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80"],
  ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80", "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80"],
  ["https://images.unsplash.com/photo-1488161628813-04466f87258a?w=800&q=80", "https://images.unsplash.com/photo-1506152983158-b4a16552c864?w=800&q=80"],
  ["https://images.unsplash.com/photo-1504593811411-9b174e74d520?w=800&q=80", "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80"],
  ["https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80", "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=800&q=80"],
  ["https://images.unsplash.com/photo-1512224583110-3a1ec472bfa0?w=800&q=80", "https://images.unsplash.com/photo-1618886614638-80e3c103d31a?w=800&q=80"],
  ["https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=800&q=80", "https://images.unsplash.com/photo-1506634572416-48cdfe530110?w=800&q=80"],
  ["https://images.unsplash.com/photo-1550246140-5119ae4790b8?w=800&q=80", "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80"],
  ["https://images.unsplash.com/photo-1517511620798-cec17d428bc0?w=800&q=80", "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80"],
  ["https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=800&q=80", "https://images.unsplash.com/photo-1503341455253-b2e723bb3db8?w=800&q=80"],
];

const bagImagesPool = [
  ["https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80", "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80"],
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/images%20(5).jpeg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/1_org_zoom%20(1).webp"],
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/71yFIpu0i3L._AC_UY1000_.jpg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/IMG_0911.webp"],
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/images%20(4).jpeg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/ninepine-asana-relaxed-comfortable-work-trousers-dark-grey.webp"],
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/28512e1999412f9508728822edf4350b.jpg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/01_12062939-R36_KAS_SU26_6-30_ED_060.webp"]
];

const shoeImagesPool = [
  ["https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80"],
  ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&q=80", "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&q=80"],
  ["https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80", "https://images.unsplash.com/photo-1520256862855-398228c41684?w=800&q=80"],
  ["https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80", "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80"],
  ["https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80", "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"],
  ["https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&q=80", "https://images.unsplash.com/photo-1514989946937-be1e0892011d?w=800&q=80"],
  ["https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80", "https://images.unsplash.com/photo-1508609349936-c6eb3d1598f3?w=800&q=80"],
  ["https://images.unsplash.com/photo-1525828024213-9af56763fb4e?w=800&q=80", "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80"],
  ["https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800&q=80", "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80"],
  ["https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80", "https://images.unsplash.com/photo-1552346154-21d32810baa3?w=800&q=80"],
  ["https://images.unsplash.com/photo-1588099768523-f4e6a5679d88?w=800&q=80", "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80"],
  ["https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80", "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=800&q=80"],
  ["https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80", "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=80"],
  ["https://images.unsplash.com/photo-1515347619362-f67b54abcc9b?w=800&q=80", "https://images.unsplash.com/photo-1524010349062-860def6649c3?w=800&q=80"],
  ["https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=800&q=80", "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"]
];

// Seed arrays to populate women products (24 pieces in total)
const womenSeed = [
  { name: "High-Waist Straight Jeans", subcategory: "Jeans", price: 145, imagesIdx: 1, brand: "ARCS Studio", tags: ["jeans", "denim", "high-waist", "casual"] },
  { name: "Satin Slip Midi Skirt", subcategory: "Skirts", price: 180, imagesIdx: 2, brand: "Maison Lumière", tags: ["skirt", "satin", "midi", "luxury"] },
  { name: "Cropped Wool Jacket", subcategory: "Jackets", price: 295, imagesIdx: 0, brand: "ARCS Studio", tags: ["jacket", "wool", "cropped", "office"] },
  { name: "A-Line Summer Dress", subcategory: "Dresses", price: 230, imagesIdx: 3, brand: "Maison Lumière", tags: ["dress", "summer", "aline", "casual"] },
  { name: "Crepe Tailored Blazer", subcategory: "Blazers", price: 290, imagesIdx: 4, brand: "ARCS Studio", tags: ["blazer", "tailored", "crepe", "office"] },
  { name: "Merino Wool Poncho", subcategory: "Knitwear", price: 210, imagesIdx: 11, brand: "Nomad Atelier", tags: ["poncho", "merino", "knitwear", "casual"] },
  { name: "Suede Wrap Skirt", subcategory: "Skirts", price: 245, imagesIdx: 13, brand: "Maison Lumière", tags: ["skirt", "suede", "wrap", "luxury"] },
  { name: "Double-Breasted Overcoat", subcategory: "Coats", price: 490, imagesIdx: 14, brand: "ARCS Studio", tags: ["overcoat", "wool", "double-breasted", "luxury"] },
  { name: "High-Rise Tailored Shorts", subcategory: "Shorts", price: 95, imagesIdx: 16, brand: "ARCS Studio", tags: ["shorts", "tailored", "summer", "casual"] },
  { name: "Chiffon Evening Gown", subcategory: "Dresses", price: 450, imagesIdx: 17, brand: "Maison Lumière", tags: ["gown", "chiffon", "evening", "luxury", "wedding"] }
];

// Seed arrays to populate men products (22 pieces in total)
const menSeed = [
  { name: "Premium Cotton Oxford Shirt", subcategory: "Shirts", price: 110, imagesIdx: 0, brand: "ARCS Studio", tags: ["shirt", "oxford", "cotton", "office"] },
  { name: "Tailored Wool Trousers", subcategory: "Trousers", price: 220, imagesIdx: 1, brand: "ARCS Studio", tags: ["trousers", "wool", "tailored", "office"] },
  { name: "French Terry Hoodie", subcategory: "Hoodies", price: 135, imagesIdx: 2, brand: "Nomad Atelier", tags: ["hoodie", "terry", "casual"], discount: 15, originalPrice: 160 },
  { name: "Structured Linen Blazer", subcategory: "Blazers", price: 310, imagesIdx: 3, brand: "Maison Lumière", tags: ["blazer", "linen", "structured", "office", "luxury"] },
  { name: "Classic Polo Shirt", subcategory: "Polo Shirts", price: 85, imagesIdx: 4, brand: "Nomad Atelier", tags: ["polo", "shirt", "cotton", "casual"] },
  { name: "Lightweight Summer Shorts", subcategory: "Shorts", price: 75, imagesIdx: 5, brand: "ARCS Studio", tags: ["shorts", "summer", "lightweight", "casual"] },
  { name: "Heavyweight Boxy Tee", subcategory: "T-Shirts", price: 65, imagesIdx: 6, brand: "Nomad Atelier", tags: ["tee", "boxy", "tshirt", "casual"] },
  { name: "Technical Shell Jacket", subcategory: "Jackets", price: 245, imagesIdx: 7, brand: "ARCS Studio", tags: ["jacket", "technical", "shell", "casual"] },
  { name: "Raw Selvedge Jeans", subcategory: "Jeans", price: 180, imagesIdx: 8, brand: "Nomad Atelier", tags: ["jeans", "denim", "selvedge", "casual"] },
  { name: "Fine Knit Crewneck", subcategory: "Knitwear", price: 130, imagesIdx: 9, brand: "Maison Lumière", tags: ["crewneck", "knit", "wool", "office"] },
  { name: "Shearling Suede Bomber", subcategory: "Jackets", price: 580, imagesIdx: 0, brand: "Maison Lumière", tags: ["bomber", "shearling", "suede", "luxury"] },
  { name: "Linen Grandad Collar Shirt", subcategory: "Shirts", price: 115, imagesIdx: 1, brand: "Nomad Atelier", tags: ["shirt", "linen", "grandad", "casual"] },
  { name: "Cotton Pleated Trousers", subcategory: "Trousers", price: 160, imagesIdx: 2, brand: "ARCS Studio", tags: ["trousers", "pleated", "cotton", "office"] },
  { name: "Zip-Up Knit Cardigan", subcategory: "Knitwear", price: 175, imagesIdx: 3, brand: "Nomad Atelier", tags: ["cardigan", "knit", "zipup", "casual"] },
  { name: "Wool Blend Overcoat", subcategory: "Coats", price: 425, imagesIdx: 4, brand: "ARCS Studio", tags: ["overcoat", "wool", "coat", "luxury"] },
  { name: "Pique Cotton Polo", subcategory: "Polo Shirts", price: 90, imagesIdx: 5, brand: "Nomad Atelier", tags: ["polo", "pique", "cotton", "casual"], discount: 20, originalPrice: 112 },
  { name: "Relaxed Fit Chino", subcategory: "Trousers", price: 140, imagesIdx: 6, brand: "ARCS Studio", tags: ["chino", "trousers", "relaxed", "casual"] },
  { name: "Graphic Logo Sweater", subcategory: "Knitwear", price: 120, imagesIdx: 7, brand: "Nomad Atelier", tags: ["sweater", "knit", "logo", "casual"] },
  { name: "Nylon Windbreaker", subcategory: "Jackets", price: 165, imagesIdx: 8, brand: "ARCS Studio", tags: ["windbreaker", "nylon", "jacket", "casual"] }
];

// Seed arrays to populate bags (12 pieces in total)
const bagsSeed = [
  { name: "Saddle Shoulder Bag", subcategory: "Shoulder Bags", price: 245, imagesIdx: 2, brand: "Maison Lumière", tags: ["shoulder", "saddle", "leather"] },
  { name: "Zippered Leather Wallet", subcategory: "Wallets", price: 110, imagesIdx: 2, brand: "ARCS Studio", tags: ["wallet", "leather", "zipper"] },
  { name: "Croc-Effect Shoulder Bag", subcategory: "Shoulder Bags", price: 275, imagesIdx: 4, brand: "Maison Lumière", tags: ["shoulder", "croc", "bag"] },
  { name: "Woven Beach Tote", subcategory: "Tote Bags", price: 145, imagesIdx: 2, brand: "Nomad Atelier", tags: ["tote", "beach", "woven"] },
  { name: "Slim Document Case", subcategory: "Tote Bags", price: 320, imagesIdx: 4, brand: "Maison Lumière", tags: ["document", "briefcase", "leather"] }
];

// Seed arrays to populate shoes (15 pieces in total)
const shoesSeed = [
  { name: "Pointed High Heels", subcategory: "High Heels", price: 285, imagesIdx: 2, brand: "Maison Lumière", tags: ["heels", "pointed", "formal"] },
  { name: "Running Knit Trainers", subcategory: "Running Shoes", price: 165, imagesIdx: 3, brand: "ARCS Studio", tags: ["trainers", "knit", "running"] },
  { name: "Knee-High Leather Boots", subcategory: "Boots", price: 380, imagesIdx: 1, brand: "Maison Lumière", tags: ["boots", "kneehigh", "leather", "women"] }
];

const accessoriesImagesPool = [
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/images%20(7).jpeg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/19c706c3-d16f-4dfa-8331-7bd5be2c9016-1000x1000-4w90PEDs8KYiqtvgCN4JPTpgWnoWSGF6fNjAjQms.webp"],
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/images%20(8).jpeg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/Akdpn-Men-S-Watches-New-Stylish-Black-Watches-Hommes-Outdoor-Sport-Waterproof-Brand-Watches-with-Three-Dial-Quartz-Wristwatch.avif"],
  ["https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80", "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=80"],
  ["https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80", "https://6a5ca0bf53cbb51f4784d637.imgix.net/images%20(9).jpeg"],
  ["https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80", "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80"],
];

const accessoriesSeed = [
  { name: "Classic Leather Belt", subcategory: "Belts", price: 65, imagesIdx: 0, brand: "ARCS Studio", tags: ["belt", "leather", "classic", "casual"] },
  { name: "Suede Brass Belt", subcategory: "Belts", price: 85, imagesIdx: 1, brand: "Nomad Atelier", tags: ["belt", "suede", "brass", "casual"] },
  { name: "Slim Waist Belt", subcategory: "Belts", price: 55, imagesIdx: 2, brand: "Maison Lumière", tags: ["belt", "slim", "leather", "office"] },
  { name: "Woven Linen Belt", subcategory: "Belts", price: 45, imagesIdx: 0, brand: "Nomad Atelier", tags: ["belt", "woven", "linen", "casual"] },
  { name: "Minimalist Steel Watch", subcategory: "Watches", price: 220, imagesIdx: 3, brand: "ARCS Studio", tags: ["watch", "steel", "minimalist", "office", "luxury"] },
  { name: "Classic Leather Chronograph", subcategory: "Watches", price: 290, imagesIdx: 4, brand: "Maison Lumière", tags: ["watch", "leather", "chronograph", "luxury"] },
  { name: "Solar Sport Watch", subcategory: "Watches", price: 180, imagesIdx: 3, brand: "Nomad Atelier", tags: ["watch", "solar", "sport", "casual"] },
  { name: "Automatic Leather Watch", subcategory: "Watches", price: 450, imagesIdx: 4, brand: "Maison Lumière", tags: ["watch", "automatic", "leather", "luxury"] },
  { name: "Gold Plated Hoop Earrings", subcategory: "Jewellery", price: 95, imagesIdx: 1, brand: "Maison Lumière", tags: ["jewellery", "gold", "earrings", "luxury"] },
  { name: "Silver Chain Necklace", subcategory: "Jewellery", price: 125, imagesIdx: 2, brand: "ARCS Studio", tags: ["jewellery", "silver", "necklace", "casual"] },
  { name: "Silk Print Scarf", subcategory: "Scarves", price: 75, imagesIdx: 0, brand: "Nomad Atelier", tags: ["scarf", "silk", "print", "casual"] },
  { name: "Cashmere Blanket Scarf", subcategory: "Scarves", price: 140, imagesIdx: 3, brand: "Maison Lumière", tags: ["scarf", "cashmere", "winter", "luxury"] }
];

// Helper to generate a slug from a product name
function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

// Generate the fully expanded products database
function generateFullCatalogue(): Product[] {
  const list = [...coreProducts];
  let currentId = 13;

  // Women Category Expansion (24 in total. Core has 5, we need 19 more)
  womenSeed.forEach((seed) => {
    const images = womenImagesPool[seed.imagesIdx % womenImagesPool.length];
    list.push({
      id: String(currentId++),
      slug: slugify(seed.name),
      name: seed.name,
      brand: seed.brand,
      category: "women",
      subcategory: seed.subcategory,
      description: `A beautifully curated ${seed.name.toLowerCase()} that defines the premium aesthetic of the signature DALIN collection. Hand-crafted from elite materials with exquisite tailoring details for everyday luxury.`,
      price: seed.price,
      originalPrice: seed.price,
      images: images,
      colors: [
        { name: "Beige", hex: "#E5D3B3", image: images[0] },
        { name: "Onyx Black", hex: "#1C1C1C", image: images[1] || images[0] }
      ],
      sizes: ["XS", "S", "M", "L", "XL"],
      rating: +(4.5 + Math.random() * 0.4).toFixed(1),
      reviewCount: Math.floor(10 + Math.random() * 80),
      reviews: [
        { id: `r_${currentId}_1`, userId: "gen", userName: "Anya K.", rating: 5, title: "Beautiful drape", body: "The cut is absolutely gorgeous and the quality is obvious from the first touch.", date: "2025-02-18", verified: true, helpful: 14 }
      ],
      tags: [...seed.tags, "women", "editorial"],
      inStock: true,
      stockCount: 15 + Math.floor(Math.random() * 30),
      sku: `W-${seed.subcategory.slice(0, 3).toUpperCase()}-${currentId}`,
      material: "Premium Wool & Silk blend",
      careInstructions: ["Dry clean only", "Iron on low setting"],
      shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
      returnPolicy: "Free returns within 30 days of purchase.",
      createdAt: "2025-01-20T00:00:00Z"
    });
  });

  // Men Category Expansion (22 in total. Core has 3, we need 19 more)
  menSeed.forEach((seed) => {
    const images = menImagesPool[seed.imagesIdx % menImagesPool.length];
    list.push({
      id: String(currentId++),
      slug: slugify(seed.name),
      name: seed.name,
      brand: seed.brand,
      category: "men",
      subcategory: seed.subcategory,
      description: `A masterfully designed ${seed.name.toLowerCase()} crafted from premium grade materials. Tailored with a modern profile to suit the contemporary gentleman's refined wardrobe.`,
      price: seed.price,
      originalPrice: seed.price,
      images: images,
      colors: [
        { name: "Heather Grey", hex: "#8A9A9A", image: images[0] },
        { name: "Deep Navy", hex: "#141D3B", image: images[1] || images[0] }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      rating: +(4.4 + Math.random() * 0.5).toFixed(1),
      reviewCount: Math.floor(15 + Math.random() * 90),
      reviews: [
        { id: `r_${currentId}_1`, userId: "gen", userName: "Marc L.", rating: 5, title: "Excellent fit", body: "Very comfortable material and clean silhouette. Extremely satisfied.", date: "2025-03-01", verified: true, helpful: 22 }
      ],
      tags: [...seed.tags, "men", "premium"],
      inStock: true,
      stockCount: 20 + Math.floor(Math.random() * 40),
      sku: `M-${seed.subcategory.slice(0, 3).toUpperCase()}-${currentId}`,
      material: "100% Organic Pima Cotton",
      careInstructions: ["Machine wash cold", "Tumble dry low"],
      shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
      returnPolicy: "Free returns within 30 days of purchase.",
      createdAt: "2025-02-05T00:00:00Z"
    });
  });

  // Bags Category Expansion (12 in total. Core has 2, we need 10 more)
  bagsSeed.forEach((seed) => {
    const images = bagImagesPool[seed.imagesIdx % bagImagesPool.length];
    list.push({
      id: String(currentId++),
      slug: slugify(seed.name),
      name: seed.name,
      brand: seed.brand,
      category: "bags",
      subcategory: seed.subcategory,
      description: `Elevate your accessories rotation with the ${seed.name}. Expertly crafted from genuine full-grain leather with tailored interior compartments for modern functionality.`,
      price: seed.price,
      originalPrice: seed.price,
      images: images,
      colors: [
        { name: "Cognac Tan", hex: "#9C623C", image: images[0] },
        { name: "Matte Black", hex: "#262626", image: images[1] || images[0] }
      ],
      sizes: ["One Size"],
      rating: +(4.6 + Math.random() * 0.4).toFixed(1),
      reviewCount: Math.floor(8 + Math.random() * 60),
      reviews: [
        { id: `r_${currentId}_1`, userId: "gen", userName: "Elena D.", rating: 5, title: "Superb leather quality", body: "Exactly as described. The stitching is flawless and it holds shape perfectly.", date: "2025-01-25", verified: true, helpful: 9 }
      ],
      tags: [...seed.tags, "bag", "leather"],
      inStock: true,
      stockCount: 8 + Math.floor(Math.random() * 15),
      sku: `B-${seed.subcategory.slice(0, 3).toUpperCase()}-${currentId}`,
      material: "Full-Grain Calfskin Leather",
      careInstructions: ["Avoid contact with water", "Clean with leather balm"],
      shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
      returnPolicy: "Free returns within 30 days of purchase.",
      createdAt: "2025-01-10T00:00:00Z"
    });
  });

  // Shoes Category Expansion (15 in total. Core has 2, we need 13 more)
  shoesSeed.forEach((seed) => {
    const images = shoeImagesPool[seed.imagesIdx % shoeImagesPool.length];
    list.push({
      id: String(currentId++),
      slug: slugify(seed.name),
      name: seed.name,
      brand: seed.brand,
      category: "shoes",
      subcategory: seed.subcategory,
      description: `Step out in considered style with the ${seed.name}. Featuring premium Goodyear welted construction or hand-crafted details to promise supreme comfort and classic luxury.`,
      price: seed.price,
      originalPrice: seed.price,
      images: images,
      colors: [
        { name: "Tan", hex: "#B38F6B", image: images[0] },
        { name: "Classic Black", hex: "#1A1A1A", image: images[1] || images[0] }
      ],
      sizes: ["S", "M", "L", "XL"],
      rating: +(4.5 + Math.random() * 0.4).toFixed(1),
      reviewCount: Math.floor(12 + Math.random() * 70),
      reviews: [
        { id: `r_${currentId}_1`, userId: "gen", userName: "Marcus O.", rating: 5, title: "Incredibly stylish", body: "Matches perfectly with smart trousers as well as denim. Leather is super supple.", date: "2025-02-12", verified: true, helpful: 18 }
      ],
      tags: [...seed.tags, "shoes", "leather"],
      inStock: true,
      stockCount: 10 + Math.floor(Math.random() * 20),
      sku: `S-${seed.subcategory.slice(0, 3).toUpperCase()}-${currentId}`,
      material: "Goodyear-welted Premium Calfskin Leather",
      careInstructions: ["Polish with high-grade cream", "Use cedar shoe trees"],
      shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
      returnPolicy: "Free returns within 30 days of purchase.",
      createdAt: "2024-12-15T00:00:00Z"
    });
  });

  // Accessories Category Expansion
  accessoriesSeed.forEach((seed, idx) => {
    // Offset slightly by idx to avoid identical mapping if seeds repeat indices
    const images = accessoriesImagesPool[(seed.imagesIdx + idx) % accessoriesImagesPool.length];
    list.push({
      id: String(currentId++),
      slug: slugify(seed.name),
      name: seed.name,
      brand: seed.brand,
      category: "accessories",
      subcategory: seed.subcategory,
      description: `A stunning ${seed.name.toLowerCase()} that blends elegant utility with superior craftsmanship. The perfect finishing touch to any curated look.`,
      price: seed.price,
      originalPrice: seed.price,
      images: images,
      colors: [
        { name: "Default", hex: "#7B6E66", image: images[0] },
      ],
      sizes: ["One Size"],
      rating: +(4.6 + Math.random() * 0.4).toFixed(1),
      reviewCount: Math.floor(10 + Math.random() * 40),
      reviews: [
        { id: `r_${currentId}_1`, userId: "gen", userName: "Elena M.", rating: 5, title: "Exceptional quality", body: "The detailing is simply perfect. An incredible accessory that I wear daily.", date: "2025-01-22", verified: true, helpful: 29 }
      ],
      tags: [...seed.tags, "accessories", "premium"],
      inStock: true,
      stockCount: 5 + Math.floor(Math.random() * 15),
      sku: `A-${seed.subcategory.slice(0, 3).toUpperCase()}-${currentId}`,
      material: "Premium mixed materials",
      careInstructions: ["Handle with care", "Avoid moisture"],
      shippingInfo: "Free shipping on orders over $150. Estimated delivery 3-5 business days.",
      returnPolicy: "Free returns within 30 days of purchase.",
      createdAt: "2024-11-20T00:00:00Z"
    });
  });

  return list;
}

export const products = generateFullCatalogue();

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getBestSellers(): Product[] {
  return products.filter((p) => p.isBestSeller);
}

export function getTrendingProducts(): Product[] {
  return products.filter((p) => p.isTrending);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, limit);
}

export function filterProducts(
  items: Product[],
  filters: {
    category?: string[];
    brands?: string[];
    minPrice?: number;
    maxPrice?: number;
    sizes?: string[];
    colors?: string[];
    rating?: number;
    inStock?: boolean;
    isNew?: boolean;
    onSale?: boolean;
    search?: string;
    sortBy?: string;
    subcategory?: string;
    occasion?: string;
  }
): Product[] {
  let result = [...items];
  if (filters.category?.length) result = result.filter((p) => filters.category!.includes(p.category));
  if (filters.brands?.length) result = result.filter((p) => filters.brands!.includes(p.brand));
  if (filters.minPrice !== undefined) result = result.filter((p) => p.price >= filters.minPrice!);
  if (filters.maxPrice !== undefined) result = result.filter((p) => p.price <= filters.maxPrice!);
  if (filters.sizes?.length) result = result.filter((p) => p.sizes.some((s) => filters.sizes!.includes(s)));
  if (filters.colors?.length) result = result.filter((p) => p.colors.some((c) => filters.colors!.includes(c.name)));
  if (filters.rating) result = result.filter((p) => p.rating >= filters.rating!);
  if (filters.inStock) result = result.filter((p) => p.inStock);
  if (filters.isNew) result = result.filter((p) => p.isNew);
  if (filters.onSale) result = result.filter((p) => !!p.discount);
  if (filters.subcategory) {
    const sub = filters.subcategory.toLowerCase();
    result = result.filter((p) => p.subcategory.toLowerCase() === sub || p.tags.some(t => t.toLowerCase() === sub));
  }
  if (filters.occasion) {
    const occ = filters.occasion.toLowerCase();
    result = result.filter((p) =>
      p.tags.some(t => {
        const tag = t.toLowerCase();
        if (occ === "luxury") return tag === "luxury" || tag === "signature";
        if (occ === "office") return tag === "office" || tag === "workwear" || tag === "formal";
        if (occ === "casual") return tag === "casual" || tag === "weekend";
        return tag === occ;
      })
    );
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q)));
  }
  switch (filters.sortBy) {
    case "price-asc": result.sort((a, b) => a.price - b.price); break;
    case "price-desc": result.sort((a, b) => b.price - a.price); break;
    case "rating": result.sort((a, b) => b.rating - a.rating); break;
    case "newest": result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()); break;
    case "best-seller": result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0)); break;
    default: result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
  }
  return result;
}

export const BRANDS = ["ARCS Studio", "Nomad Atelier", "Maison Lumière"];
export const CATEGORIES = ["women", "men", "accessories", "shoes", "bags", "kids"];
