"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  ShoppingCart,
  Star,
  Eye,
  Heart,
  TrendingUp,
  Package,
} from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksShopPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);
  const [showCopied, triggerCopied] = useCopyNotification();

  const handleCopy = (ref: React.RefObject<HTMLElement | null>) => {
    const el = ref.current;
    if (el) {
      void navigator.clipboard.writeText(el.outerHTML);
      triggerCopied();
    }
  };

  return (
    <>
      {showCopied && (
        <div
          style={{ position: "fixed", top: 24, right: 24, zIndex: 1000 }}
          className="animate-fade-in rounded bg-black px-4 py-2 text-white shadow-lg"
        >
          Section copied
        </div>
      )}
      <Navigation />
      <Hero
        title="Shop Blocks"
        subtitle="Beautiful ecommerce sections ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Product Grid */}
          <div className="relative">
            <SectionDivider title="Product Grid (3-4 Column)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef1)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef1}
              className="bg-slate-50 dark:bg-slate-900 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
                  Our Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 h-48 flex items-center justify-center">
                        <Package size={48} className="text-slate-400" />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          Product {i}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                          High-quality product with great features
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-slate-900 dark:text-white">
                            ${(19.99 + i * 5).toFixed(2)}
                          </span>
                          <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            <ShoppingCart size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 2: Product Card with Review Stars */}
          <div className="relative">
            <SectionDivider title="Product Card with Review Stars">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef2)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef2}
              className="bg-white dark:bg-slate-800 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
                  Top Rated Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <div className="bg-linear-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900 h-56 flex items-center justify-center">
                        <Package size={64} className="text-slate-400" />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                          Premium Product {i}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                          Exceptional quality and outstanding performance
                        </p>
                        <div className="flex items-center gap-1 mb-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={16}
                              className={
                                star <= (4 + (i % 2))
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-slate-300 dark:text-slate-500"
                              }
                            />
                          ))}
                          <span className="text-sm text-slate-600 dark:text-slate-300 ml-2">
                            ({100 + i * 12} reviews)
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-slate-900 dark:text-white">
                            ${(29.99 + i * 8).toFixed(2)}
                          </span>
                          <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                            <ShoppingCart size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 3: Product with Quick View */}
          <div className="relative">
            <SectionDivider title="Product with Quick View Modal">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef3)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef3}
              className="bg-slate-100 dark:bg-slate-950 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
                  Featured Collection
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
                    >
                      <div className="relative bg-linear-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700 h-64 flex items-center justify-center overflow-hidden">
                        <Package size={80} className="text-slate-500" />
                        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all">
                          <Eye
                            size={40}
                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </button>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          Showcase Product {i}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                          Click the eye icon to see details and quick view
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-slate-900 dark:text-white">
                            ${(39.99 + i * 10).toFixed(2)}
                          </span>
                          <div className="flex gap-2">
                            <button className="p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg transition-colors">
                              <Heart size={18} />
                            </button>
                            <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                              <ShoppingCart size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 4: Product Filter Section */}
          <div className="relative">
            <SectionDivider title="Product Filter Section">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef4)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef4}
              className="bg-white dark:bg-slate-800 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
                  Browse Products
                </h2>
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Sidebar Filters */}
                  <div className="w-full lg:w-64 shrink-0">
                    <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                        Filters
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-3">
                            Price Range
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="500"
                            className="w-full"
                          />
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                            $0 - $500
                          </p>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-3">
                            Category
                          </label>
                          <div className="space-y-2">
                            {["Electronics", "Clothing", "Books", "Home"].map(
                              (cat) => (
                                <label
                                  key={cat}
                                  className="flex items-center gap-2 cursor-pointer"
                                >
                                  <input
                                    type="checkbox"
                                    className="rounded"
                                  />
                                  <span className="text-slate-700 dark:text-slate-300">
                                    {cat}
                                  </span>
                                </label>
                              )
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 dark:text-white mb-3">
                            Rating
                          </label>
                          <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((rating) => (
                              <label
                                key={rating}
                                className="flex items-center gap-2 cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="rounded"
                                />
                                <div className="flex gap-1">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                      key={star}
                                      size={14}
                                      className={
                                        star <= rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-slate-300 dark:text-slate-500"
                                      }
                                    />
                                  ))}
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className="bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 h-40 flex items-center justify-center">
                            <Package size={48} className="text-slate-400" />
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                              Filtered Product {i}
                            </h3>
                            <div className="flex items-center gap-1 mb-3">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  size={14}
                                  className={
                                    star <= 4
                                      ? "fill-yellow-400 text-yellow-400"
                                      : "text-slate-300 dark:text-slate-500"
                                  }
                                />
                              ))}
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-slate-900 dark:text-white">
                                ${(24.99 + i * 6).toFixed(2)}
                              </span>
                              <button className="p-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
                                <ShoppingCart size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 5: Cart Preview */}
          <div className="relative">
            <SectionDivider title="Cart Preview (Mini Cart)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef5)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef5}
              className="bg-slate-50 dark:bg-slate-900 py-16"
            >
              <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
                  Your Shopping Cart
                </h2>
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-6"
                      >
                        <div className="w-24 h-24 bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg flex items-center justify-center shrink-0">
                          <Package size={32} className="text-slate-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Cart Item {i}
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 text-sm">
                            Product code: SKU-{1000 + i}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button className="px-2 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded">
                              -
                            </button>
                            <span className="w-8 text-center text-slate-900 dark:text-white">
                              {i}
                            </span>
                            <button className="px-2 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded">
                              +
                            </button>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-lg font-bold text-slate-900 dark:text-white">
                            ${(49.99 + i * 15).toFixed(2)}
                          </p>
                          <button className="mt-2 text-red-600 hover:text-red-700 text-sm font-medium">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-700 p-6 space-y-4">
                    <div className="flex justify-between text-slate-900 dark:text-white">
                      <span>Subtotal:</span>
                      <span className="font-semibold">$164.97</span>
                    </div>
                    <div className="flex justify-between text-slate-900 dark:text-white">
                      <span>Shipping:</span>
                      <span className="font-semibold">$10.00</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-600 pt-4">
                      <span>Total:</span>
                      <span>$174.97</span>
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors mt-4">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 6: Product Testimonials */}
          <div className="relative">
            <SectionDivider title="Product Testimonials">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef6)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef6}
              className="bg-white dark:bg-slate-800 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Customer Reviews
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-12 max-w-2xl">
                  See what our satisfied customers have to say about our products
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-slate-50 dark:bg-slate-700 rounded-lg p-6"
                    >
                      <div className="flex items-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={18}
                            className={
                              star <= (4 + (i % 2))
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-slate-300 dark:text-slate-500"
                            }
                          />
                        ))}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                        "This product exceeded my expectations. Amazing quality
                        and fantastic customer service. Highly recommended!"
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center shrink-0">
                          <span className="text-white font-semibold text-sm">
                            {String.fromCharCode(64 + i)}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            Customer {i}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Verified Buyer
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 7: Upsell Section */}
          <div className="relative">
            <SectionDivider title="Upsell Section (Related Products)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef7)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef7}
              className="bg-slate-100 dark:bg-slate-950 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Customers Also Bought
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-12">
                  Complete your purchase with these complementary products
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all group"
                    >
                      <div className="relative bg-linear-to-br from-green-200 to-teal-200 dark:from-green-900 dark:to-teal-900 h-48 flex items-center justify-center overflow-hidden">
                        <TrendingUp size={48} className="text-green-600" />
                        {i <= 2 && (
                          <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Save 20%
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                          Related Item {i}
                        </h3>
                        <div className="flex gap-2 mb-4">
                          <span className="text-lg font-bold text-slate-900 dark:text-white">
                            ${(34.99 + i * 5).toFixed(2)}
                          </span>
                          {i <= 2 && (
                            <span className="text-sm text-slate-600 dark:text-slate-300 line-through">
                              ${(44.99 + i * 5).toFixed(2)}
                            </span>
                          )}
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 8: Featured Products Spotlight */}
          <div className="relative">
            <SectionDivider title="Featured Products (Sale/Spotlight)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef8)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef8}
              className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <div className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    EXCLUSIVE OFFER
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Limited Time Sale
                  </h2>
                  <p className="text-slate-300 max-w-2xl mx-auto mb-8">
                    Don't miss out on these incredible deals on our best-selling
                    products
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Featured Item 1 - Large */}
                  <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-xl h-96">
                    <div className="flex h-full">
                      <div className="bg-linear-to-br from-orange-300 to-red-300 dark:from-orange-700 dark:to-red-700 w-1/2 flex items-center justify-center">
                        <Package size={80} className="text-white opacity-50" />
                      </div>
                      <div className="w-1/2 flex flex-col justify-between p-8">
                        <div>
                          <div className="text-red-600 font-semibold text-sm mb-2">
                            HOT DEAL
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Premium Product
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                            Limited quantities available
                          </p>
                        </div>
                        <div>
                          <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">
                              $79.99
                            </span>
                            <span className="text-lg text-slate-500 line-through">
                              $129.99
                            </span>
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                              -38%
                            </span>
                          </div>
                          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2">
                            <ShoppingCart size={20} />
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Featured Item 2 & 3 - Stacked */}
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg"
                      >
                        <div className="flex items-center gap-4 p-6">
                          <div className="w-24 h-24 bg-linear-to-br from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700 rounded-lg flex items-center justify-center shrink-0">
                            <Package size={40} className="text-white opacity-50" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                              Spotlight Product {i}
                            </h3>
                            <div className="flex items-baseline gap-2 mt-2">
                              <span className="font-bold text-slate-900 dark:text-white">
                                ${(59.99 + i * 10).toFixed(2)}
                              </span>
                              <span className="text-sm text-slate-500 line-through">
                                ${(99.99 + i * 10).toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shrink-0">
                            <ShoppingCart size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
