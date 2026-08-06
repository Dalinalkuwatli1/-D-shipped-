import { Product } from "@/types";

// Core 12 hand-curated products with perfectly matched, verified working Unsplash image links
const coreProducts: Product[] = [

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
    id: "7",
    slug: "floral-ball-gown",
    name: "Floral Ball Gown",
    brand: "Maison Lumière",
    category: "women",
    subcategory: "Dresses",
    description: "An off-the-shoulder voluminous ball gown adorned with delicate floral appliqués. The dramatic silhouette and feminine detailing make this a breathtaking statement piece for gala evenings and special celebrations.",
    price: 320,
    originalPrice: 320,
    images: [
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/76.jpg",
      "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/Sharla-1.webp"
    ],
    colors: [
      { name: "Blush Pink", hex: "#F7C5CE", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/76.jpg" },
      { name: "Ivory", hex: "#F8F4EF", image: "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/Sharla-1.webp" }
    ],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviewCount: 156,
    reviews: [
      { id: "r8", userId: "u8", userName: "Natalie V.", rating: 5, title: "Absolutely stunning", body: "I wore this to a gala and received compliments all evening. The floral details are exquisite.", date: "2025-03-14", verified: true, helpful: 78 }
    ],
    tags: ["gown", "ball gown", "floral", "evening", "formal", "luxury"],
    isNew: true,
    isTrending: true,
    isFeatured: true,
    inStock: true,
    stockCount: 14,
    sku: "WDR-007-FBG",
    material: "Layered Chiffon & Floral Appliqué",
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


];

// Helper database of verified matching Unsplash photos for each category to ensure 100% matched, accurate image rendering
const womenImagesPool = [
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/1_org_zoom%20(1).webp", "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80"],   // 0
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/images%20(4).jpeg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/ninepine-asana-relaxed-comfortable-work-trousers-dark-grey.webp"],   // 1
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/76.jpg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/Sharla-1.webp"],   // 2
  ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80", "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"],   // 3 — A-Line Summer Dress (elegant, editorial)
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/s7-5462_alternate1.avif", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/Men-Leather-Jackets-1582970628214_d6c2af3e-cd7e-44b8-88cb-94527f33218d_2048x.webp"],   // 4
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/E13974s.webp", "https://6a5ca0bf53cbb51f4784d637.imgix.net/19896678102-a1.webp"],   // 5
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/91QA9fGlvfL._AC_UY1000_.jpg", "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80"],   // 6
  ["https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=800&q=80", "https://images.unsplash.com/photo-1550614000-4b95d4ed1ab8?w=800&q=80"],   // 7
  ["https://images.unsplash.com/photo-1515347619362-f67b54abcc9b?w=800&q=80", "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&q=80"],   // 8
  ["https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80", "https://images.unsplash.com/photo-1502716115624-b565e0990d9b?w=800&q=80"],   // 9
  ["https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"],   // 10
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/3_DSC01816.webp", "https://6a5ca0bf53cbb51f4784d637.imgix.net/wool-poncho-front-view.avif"],   // 11
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/SS26_SIGN-UP_POPUP.webp", "https://6a5ca0bf53cbb51f4784d637.imgix.net/sandbox/71yFIpu0i3L._AC_UY1000_.jpg"],   // 12
  ["https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80", "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=800&q=80"],   // 13 Suede Wrap Skirt
  ["https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800&q=80", "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=800&q=80"],   // 14 Double-Breasted Overcoat
  ["https://images.unsplash.com/photo-1548549557-dbe9946621da?w=800&q=80", "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=800&q=80"],   // 15 Classic Tailored Blazer
  ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80", "https://images.unsplash.com/photo-1515347619362-f67b54abcc9b?w=800&q=80"],   // 16 High-Rise Tailored Shorts
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/1744684769b1a67efa1653d9e41a71406f58098035_thumbnail_750x999.webp", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80"],   // 17 Chiffon Evening Gown
  ["https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80", "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80"],   // 18
];

const menImagesPool = [
  ["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=80", "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"],   // 0 — Oxford Shirt
  ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80", "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80"],   // 1 — Wool Trousers
  ["https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?w=800&q=80", "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&q=80"],   // 2 — Boxy Tee
  ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80", "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80"],   // 3 — Bomber Jacket
  ["https://images.unsplash.com/photo-1598032895392-ce0b6764838d?w=800&q=80", "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=800&q=80"],   // 4 — Grandad Shirt
  ["https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80", "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800&q=80"],   // 5 — Overcoat
  ["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80", "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=800&q=80"],   // 6 — Chino
  ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80", "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"],   // 7 — Henley
  ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80", "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=800&q=80"],   // 8 — Puffer Vest
  ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80", "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80"],   // 9 — Crew Neck Tee
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
  { name: "Tailored Wide-Leg Trousers", subcategory: "Trousers", price: 165, imagesIdx: 1, brand: "ARCS Studio", tags: ["trousers", "wide-leg", "tailored", "office"] },
  { name: "A-Line Summer Dress", subcategory: "Dresses", price: 230, imagesIdx: 3, brand: "Maison Lumière", tags: ["dress", "summer", "aline", "casual"], description: "A breezy A-line summer dress crafted from lightweight, breathable fabric. Its elegant silhouette flows beautifully with every step, featuring delicate shoulder straps and a subtle sweetheart neckline. Perfect for warm-weather garden parties or a chic weekend getaway, this dress perfectly balances casual comfort with effortless sophistication." },
  { name: "Suede Wrap Skirt", subcategory: "Skirts", price: 245, imagesIdx: 13, brand: "Maison Lumière", tags: ["skirt", "suede", "wrap", "luxury"] },
  { name: "Classic Tailored Blazer", subcategory: "Blazers", price: 285, imagesIdx: 15, brand: "Maison Lumière", tags: ["blazer", "suit", "office", "tailored"] },
];

const menSeed = [
  { name: "Premium Cotton Oxford Shirt", subcategory: "Shirts", price: 110, imagesIdx: 0, brand: "ARCS Studio", tags: ["shirt", "oxford", "cotton", "office"] },
  { name: "Heavyweight Boxy Tee", subcategory: "T-Shirts", price: 65, imagesIdx: 2, brand: "Nomad Atelier", tags: ["tee", "boxy", "tshirt", "casual"] },
  { name: "Shearling Suede Bomber", subcategory: "Jackets", price: 580, imagesIdx: 3, brand: "Maison Lumière", tags: ["bomber", "shearling", "suede", "luxury"] },
  { name: "Wool Blend Overcoat", subcategory: "Coats", price: 425, imagesIdx: 5, brand: "ARCS Studio", tags: ["overcoat", "wool", "coat", "luxury"] },
  { name: "Relaxed Fit Chino", subcategory: "Trousers", price: 140, imagesIdx: 6, brand: "ARCS Studio", tags: ["chino", "trousers", "relaxed", "casual"] },
  { name: "Waffle Knit Henley", subcategory: "T-Shirts", price: 78, imagesIdx: 7, brand: "Nomad Atelier", tags: ["henley", "waffle", "knit", "casual"] },
  { name: "Quilted Puffer Vest", subcategory: "Jackets", price: 195, imagesIdx: 8, brand: "ARCS Studio", tags: ["vest", "puffer", "quilted", "casual"] },
  { name: "Essential Crew Neck Tee", subcategory: "T-Shirts", price: 55, imagesIdx: 9, brand: "Nomad Atelier", tags: ["tee", "crewneck", "essential", "casual"] }
];

// Seed arrays to populate bags (12 pieces in total)
const bagsSeed = [
  { name: "Zippered Leather Wallet", subcategory: "Wallets", price: 110, imagesIdx: 2, brand: "ARCS Studio", tags: ["wallet", "leather", "zipper"] }
];

// Seed arrays to populate shoes (15 pieces in total)
const shoesSeed = [
  { name: "Running Knit Trainers", subcategory: "Running Shoes", price: 165, imagesIdx: 3, brand: "ARCS Studio", tags: ["trainers", "knit", "running"] },
];

const accessoriesImagesPool = [
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/PYPC122455_1.avif", "https://6a5ca0bf53cbb51f4784d637.imgix.net/images%20(12).jpeg"],   // 0 Silk Scarf
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/8d2aea2c-1312-4925-a0bd-front.jpg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/51502263.webp"],   // 1 Earrings
  ["https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80", "https://6a5ca0bf53cbb51f4784d637.imgix.net/AM24-Q3C-N-SNAKE-S_2.webp"],   // 2 Necklace
  ["https://6a5ca0bf53cbb51f4784d637.imgix.net/images%20(14).jpeg", "https://6a5ca0bf53cbb51f4784d637.imgix.net/A15823_AU25_423_P_1%20(1).webp"],   // 3 Cashmere Scarf
  ["https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?w=800&q=80", "https://images.unsplash.com/photo-1622434641406-a158123450f9?w=800&q=80"],
  ["https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80", "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=800&q=80"],   // 5 Solar Watch
];

const accessoriesSeed = [
  { name: "Solar Sport Watch", subcategory: "Watches", price: 180, imagesIdx: 5, brand: "Nomad Atelier", tags: ["watch", "solar", "sport", "casual"] },
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
    const images = accessoriesImagesPool[seed.imagesIdx % accessoriesImagesPool.length];
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
