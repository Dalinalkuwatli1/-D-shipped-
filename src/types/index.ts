export type ProductCategory = "women" | "men" | "accessories" | "shoes" | "bags" | "kids";
export type ProductSize = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "One Size";

export interface ProductColor { name: string; hex: string; image?: string; }

export interface ProductReview {
  id: string; userId: string; userName: string; userAvatar?: string;
  rating: number; title: string; body: string; date: string;
  verified: boolean; helpful: number;
}

export interface Product {
  id: string; slug: string; name: string; brand: string;
  category: ProductCategory; subcategory: string; description: string;
  price: number; originalPrice?: number; discount?: number;
  images: string[]; colors: ProductColor[]; sizes: ProductSize[];
  rating: number; reviewCount: number; reviews: ProductReview[];
  tags: string[];
  isBestSeller?: boolean; isNew?: boolean; isTrending?: boolean; isFeatured?: boolean;
  inStock: boolean; stockCount: number; sku: string;
  material: string; careInstructions: string[];
  shippingInfo: string; returnPolicy: string; createdAt: string;
}

export interface CartItem {
  product: Product; quantity: number;
  selectedSize: ProductSize; selectedColor: ProductColor;
}

export interface Address {
  id: string; label: string; fullName: string; line1: string; line2?: string;
  city: string; state: string; postalCode: string; country: string;
  phone: string; isDefault: boolean;
}

export interface User {
  id: string; email: string; firstName: string; lastName: string;
  avatar?: string; phone?: string; dateOfBirth?: string;
  addresses: Address[]; wishlist: string[];
  createdAt: string;
}

export type OrderStatus = "pending" | "processing" | "shipped" | "delivered" | "cancelled" | "refunded";

export interface OrderItem {
  product: Product; quantity: number; size: ProductSize;
  color: ProductColor; priceAtPurchase: number;
}

export interface Order {
  id: string; orderNumber: string; status: OrderStatus;
  items: OrderItem[]; shippingAddress: Address;
  paymentMethod: string; subtotal: number; shippingCost: number;
  tax: number; discount: number; total: number;
  createdAt: string; estimatedDelivery: string; trackingNumber?: string;
}

export interface ProductFilters {
  category?: ProductCategory[]; brands?: string[];
  minPrice?: number; maxPrice?: number;
  sizes?: ProductSize[]; colors?: string[];
  rating?: number; inStock?: boolean; isNew?: boolean; onSale?: boolean;
  sortBy?: SortOption; search?: string; page?: number; perPage?: number;
}

export type SortOption = "featured" | "newest" | "price-asc" | "price-desc" | "rating" | "best-seller";

export interface CheckoutFormData {
  email: string; firstName: string; lastName: string; phone: string;
  address: string; address2?: string; city: string; state: string;
  postalCode: string; country: string;
  paymentMethod: "card" | "paypal" | "apple-pay";
  cardNumber?: string; cardExpiry?: string; cardCVC?: string; cardName?: string;
}

export interface Testimonial {
  id: string; name: string; avatar: string; location: string;
  rating: number; text: string; product: string;
}
