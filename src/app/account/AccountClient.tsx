"use client";

import { useState } from "react";
import { User, Settings, Package, MapPin, Shield, LogOut, Check } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { toast } from "sonner";
import { products } from "@/data/products";
import Image from "next/image";

type TabOption = "dashboard" | "orders" | "addresses" | "profile" | "security";

export default function AccountClient() {
  const [activeTab, setActiveTab] = useState<TabOption>("dashboard");

  // Mock static user data
  const [profile, setProfile] = useState({
    firstName: "Sarah",
    lastName: "Connor",
    email: "sarah.connor@example.com",
    phone: "+1 (555) 019-2834",
    dob: "1994-11-12",
  });

  const [addresses, setAddresses] = useState([
    {
      id: "addr-1",
      label: "Home",
      fullName: "Sarah Connor",
      line1: "742 Evergreen Terrace",
      city: "Springfield",
      state: "IL",
      postalCode: "62704",
      country: "United States",
      phone: "+1 (555) 019-2834",
      isDefault: true,
    },
    {
      id: "addr-2",
      label: "Office",
      fullName: "Sarah Connor",
      line1: "100 Cyberdyne Systems Blvd",
      city: "Los Angeles",
      state: "CA",
      postalCode: "90001",
      country: "United States",
      phone: "+1 (555) 019-9999",
      isDefault: false,
    },
  ]);

  const mockOrders = [
    {
      id: "ord-1",
      orderNumber: "SHP-983742",
      status: "delivered",
      createdAt: "2025-02-14",
      total: 480.0,
      estimatedDelivery: "Delivered Feb 18",
      items: [
        {
          product: products[0],
          quantity: 1,
          size: "M",
          color: products[0].colors[0],
          priceAtPurchase: 289.0,
        },
        {
          product: products[2],
          quantity: 1,
          size: "S",
          color: products[2].colors[0],
          priceAtPurchase: 195.0,
        },
      ],
    },
    {
      id: "ord-2",
      orderNumber: "SHP-128475",
      status: "shipped",
      createdAt: "2025-03-08",
      total: 95.0,
      estimatedDelivery: "Est. Arrival March 12",
      items: [
        {
          product: products[4],
          quantity: 1,
          size: "L",
          color: products[4].colors[0],
          priceAtPurchase: 95.0,
        },
      ],
    },
  ];

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profile details updated successfully!");
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Password updated successfully!");
  };

  const handleSetDefaultAddress = (id: string) => {
    setAddresses(prev =>
      prev.map(addr => ({ ...addr, isDefault: addr.id === id }))
    );
    toast.success("Default address updated.");
  };

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display text-4xl font-bold tracking-tight mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Navigation Sidebar */}
          <nav className="lg:col-span-3 bg-card border border-border rounded-2xl p-4 shadow-sm space-y-1">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === "dashboard" ? "bg-foreground text-background" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-4 h-4" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === "orders" ? "bg-foreground text-background" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <Package className="w-4 h-4" />
              Orders ({mockOrders.length})
            </button>
            <button
              onClick={() => setActiveTab("addresses")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === "addresses" ? "bg-foreground text-background" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <MapPin className="w-4 h-4" />
              Addresses
            </button>
            <button
              onClick={() => setActiveTab("profile")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === "profile" ? "bg-foreground text-background" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <Settings className="w-4 h-4" />
              Profile Details
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                activeTab === "security" ? "bg-foreground text-background" : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <Shield className="w-4 h-4" />
              Security
            </button>
            <hr className="border-border my-2" />
            <button
              onClick={() => toast.success("Successfully logged out.")}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-500/10 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Log Out
            </button>
          </nav>

          {/* Account Detail Sections */}
          <div className="lg:col-span-9 bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm min-h-[500px]">
            {/* Tab: Dashboard */}
            {activeTab === "dashboard" && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold font-display">Hello, {profile.firstName}!</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    Welcome to your dashboard. Here you can track recent orders, manage addresses, and update security settings.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="border border-border rounded-xl p-5 bg-muted/20">
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Total Orders</span>
                    <span className="block text-3xl font-extrabold mt-2">{mockOrders.length}</span>
                  </div>
                  <div className="border border-border rounded-xl p-5 bg-muted/20">
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Active Wishlist</span>
                    <span className="block text-3xl font-extrabold mt-2">4 items</span>
                  </div>
                  <div className="border border-border rounded-xl p-5 bg-muted/20">
                    <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">Default Address</span>
                    <span className="block text-sm font-bold mt-3.5 truncate">{addresses.find(a => a.isDefault)?.line1}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Orders */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold font-display border-b border-border pb-3">My Orders</h2>
                <div className="space-y-6">
                  {mockOrders.map((order) => (
                    <div key={order.id} className="border border-border rounded-2xl p-5 md:p-6 space-y-4">
                      {/* Order Header */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-border pb-4">
                        <div>
                          <p className="text-sm font-bold">{order.orderNumber}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">Placed on {order.createdAt}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wide rounded-full ${
                            order.status === "delivered" ? "bg-green-500/10 text-green-600" : "bg-blue-500/10 text-blue-600"
                          }`}>
                            {order.status}
                          </span>
                          <span className="text-sm font-extrabold">{formatPrice(order.total)}</span>
                        </div>
                      </div>

                      {/* Order Items */}
                      <div className="space-y-4">
                        {order.items.map((item, idx) => (
                          <div key={idx} className="flex gap-4 items-center">
                            <div className="relative w-12 h-16 bg-muted rounded-lg overflow-hidden shrink-0">
                              <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-bold truncate">{item.product.name}</p>
                              <p className="text-xs text-muted-foreground">
                                Size: {item.size} · Color: {item.color.name} · Qty: {item.quantity}
                              </p>
                            </div>
                            <span className="text-sm font-bold">{formatPrice(item.priceAtPurchase * item.quantity)}</span>
                          </div>
                        ))}
                      </div>

                      {/* Delivery/Action */}
                      <div className="bg-muted/40 p-3.5 rounded-xl flex items-center justify-between text-xs font-semibold">
                        <span className="text-muted-foreground">{order.estimatedDelivery}</span>
                        <button className="text-primary hover:underline">Track Shipment</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Addresses */}
            {activeTab === "addresses" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-border pb-3">
                  <h2 className="text-xl font-bold font-display">Addresses</h2>
                  <button className="text-xs font-bold bg-foreground text-background px-3 py-1.5 rounded-lg">Add New Address</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {addresses.map((addr) => (
                    <div key={addr.id} className={`border rounded-2xl p-5 space-y-3 relative ${
                      addr.isDefault ? "border-foreground" : "border-border"
                    }`}>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold uppercase tracking-wider bg-muted px-2.5 py-0.5 rounded">{addr.label}</span>
                        {addr.isDefault && (
                          <span className="text-[11px] font-bold text-green-600 bg-green-500/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Check className="w-3 h-3" /> Default
                          </span>
                        )}
                      </div>

                      <div className="text-sm space-y-1">
                        <p className="font-bold">{addr.fullName}</p>
                        <p className="text-muted-foreground">{addr.line1}</p>
                        <p className="text-muted-foreground">{addr.city}, {addr.state} {addr.postalCode}</p>
                        <p className="text-muted-foreground">{addr.country}</p>
                        <p className="text-xs text-muted-foreground pt-1.5">Phone: {addr.phone}</p>
                      </div>

                      {!addr.isDefault && (
                        <button
                          onClick={() => handleSetDefaultAddress(addr.id)}
                          className="text-xs font-bold text-primary hover:underline mt-4 block"
                        >
                          Set as Default
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: Profile */}
            {activeTab === "profile" && (
              <form onSubmit={handleUpdateProfile} className="space-y-6">
                <h2 className="text-xl font-bold font-display border-b border-border pb-3">Profile Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">First Name</label>
                    <input
                      value={profile.firstName}
                      onChange={(e) => setProfile(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Last Name</label>
                    <input
                      value={profile.lastName}
                      onChange={(e) => setProfile(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Email Address</label>
                  <input
                    value={profile.email}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-sm text-muted-foreground cursor-not-allowed"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Phone Number</label>
                    <input
                      value={profile.phone}
                      onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Date of Birth</label>
                    <input
                      type="date"
                      value={profile.dob}
                      onChange={(e) => setProfile(prev => ({ ...prev, dob: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-foreground text-background font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
                >
                  Save Changes
                </button>
              </form>
            )}

            {/* Tab: Security */}
            {activeTab === "security" && (
              <form onSubmit={handleUpdatePassword} className="space-y-6">
                <h2 className="text-xl font-bold font-display border-b border-border pb-3">Security & Password</h2>

                <div className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Current Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-sm focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-muted/20 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-foreground text-background font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
                >
                  Update Password
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
