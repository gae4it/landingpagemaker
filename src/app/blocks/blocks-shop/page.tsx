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
      <main className="min-h-screen bg-background py-16">
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
              className="bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-white">
                  Our Products
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-slate-800"
                    >
                      <div className="flex h-48 items-center justify-center bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600">
                        <Package size={48} className="text-slate-400" />
                      </div>
                      <div className="p-4">
                        <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                          Product {i}
                        </h3>
                        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                          High-quality product with great features
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-slate-900 dark:text-white">
                            ${(19.99 + i * 5).toFixed(2)}
                          </span>
                          <button className="rounded-lg bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700">
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
              className="bg-white py-16 dark:bg-slate-800"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-white">
                  Top Rated Products
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-lg bg-slate-50 shadow-md transition-shadow hover:shadow-xl dark:bg-slate-700"
                    >
                      <div className="flex h-56 items-center justify-center bg-linear-to-br from-blue-200 to-purple-200 dark:from-blue-900 dark:to-purple-900">
                        <Package size={64} className="text-slate-400" />
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                          Premium Product {i}
                        </h3>
                        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                          Exceptional quality and outstanding performance
                        </p>
                        <div className="mb-4 flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={16}
                              className={
                                star <= 4 + (i % 2)
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-slate-300 dark:text-slate-500"
                              }
                            />
                          ))}
                          <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">
                            ({100 + i * 12} reviews)
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-slate-900 dark:text-white">
                            ${(29.99 + i * 8).toFixed(2)}
                          </span>
                          <button className="rounded-lg bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700">
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
              className="bg-slate-100 py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-white">
                  Featured Collection
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-slate-800"
                    >
                      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-linear-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-700">
                        <Package size={80} className="text-slate-500" />
                        <button className="bg-opacity-0 group-hover:bg-opacity-40 absolute inset-0 flex items-center justify-center bg-black transition-all">
                          <Eye
                            size={40}
                            className="text-white opacity-0 transition-opacity group-hover:opacity-100"
                          />
                        </button>
                      </div>
                      <div className="p-6">
                        <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                          Showcase Product {i}
                        </h3>
                        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                          Click the eye icon to see details and quick view
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-slate-900 dark:text-white">
                            ${(39.99 + i * 10).toFixed(2)}
                          </span>
                          <div className="flex gap-2">
                            <button className="rounded-lg bg-slate-200 p-2 text-slate-900 transition-colors hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">
                              <Heart size={18} />
                            </button>
                            <button className="rounded-lg bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700">
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
              className="bg-white py-16 dark:bg-slate-800"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-white">
                  Browse Products
                </h2>
                <div className="flex flex-col gap-8 lg:flex-row">
                  {/* Sidebar Filters */}
                  <div className="w-full shrink-0 lg:w-64">
                    <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-700">
                      <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-white">
                        Filters
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label className="mb-3 block text-sm font-medium text-slate-900 dark:text-white">
                            Price Range
                          </label>
                          <input
                            type="range"
                            min="0"
                            max="500"
                            className="w-full"
                          />
                          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                            $0 - $500
                          </p>
                        </div>
                        <div>
                          <label className="mb-3 block text-sm font-medium text-slate-900 dark:text-white">
                            Category
                          </label>
                          <div className="space-y-2">
                            {["Electronics", "Clothing", "Books", "Home"].map(
                              (cat) => (
                                <label
                                  key={cat}
                                  className="flex cursor-pointer items-center gap-2"
                                >
                                  <input type="checkbox" className="rounded" />
                                  <span className="text-slate-700 dark:text-slate-300">
                                    {cat}
                                  </span>
                                </label>
                              ),
                            )}
                          </div>
                        </div>
                        <div>
                          <label className="mb-3 block text-sm font-medium text-slate-900 dark:text-white">
                            Rating
                          </label>
                          <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((rating) => (
                              <label
                                key={rating}
                                className="flex cursor-pointer items-center gap-2"
                              >
                                <input type="checkbox" className="rounded" />
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
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                          key={i}
                          className="overflow-hidden rounded-lg bg-slate-50 shadow-md transition-shadow hover:shadow-lg dark:bg-slate-700"
                        >
                          <div className="flex h-40 items-center justify-center bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700">
                            <Package size={48} className="text-slate-400" />
                          </div>
                          <div className="p-4">
                            <h3 className="mb-2 font-semibold text-slate-900 dark:text-white">
                              Filtered Product {i}
                            </h3>
                            <div className="mb-3 flex items-center gap-1">
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
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-900 dark:text-white">
                                ${(24.99 + i * 6).toFixed(2)}
                              </span>
                              <button className="rounded bg-blue-600 p-1.5 text-white transition-colors hover:bg-blue-700">
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
              className="bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-12 text-3xl font-bold text-slate-900 dark:text-white">
                  Your Shopping Cart
                </h2>
                <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-slate-800">
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4 p-6">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600">
                          <Package size={32} className="text-slate-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Cart Item {i}
                          </h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            Product code: SKU-{1000 + i}
                          </p>
                          <div className="mt-2 flex items-center gap-2">
                            <button className="rounded bg-slate-200 px-2 py-1 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600">
                              -
                            </button>
                            <span className="w-8 text-center text-slate-900 dark:text-white">
                              {i}
                            </span>
                            <button className="rounded bg-slate-200 px-2 py-1 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600">
                              +
                            </button>
                          </div>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-lg font-bold text-slate-900 dark:text-white">
                            ${(49.99 + i * 15).toFixed(2)}
                          </p>
                          <button className="mt-2 text-sm font-medium text-red-600 hover:text-red-700">
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4 bg-slate-50 p-6 dark:bg-slate-700">
                    <div className="flex justify-between text-slate-900 dark:text-white">
                      <span>Subtotal:</span>
                      <span className="font-semibold">$164.97</span>
                    </div>
                    <div className="flex justify-between text-slate-900 dark:text-white">
                      <span>Shipping:</span>
                      <span className="font-semibold">$10.00</span>
                    </div>
                    <div className="flex justify-between border-t border-slate-200 pt-4 text-lg font-bold text-slate-900 dark:border-slate-600 dark:text-white">
                      <span>Total:</span>
                      <span>$174.97</span>
                    </div>
                    <button className="mt-4 w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700">
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
              className="bg-white py-16 dark:bg-slate-800"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                  Customer Reviews
                </h2>
                <p className="mb-12 max-w-2xl text-slate-600 dark:text-slate-300">
                  See what our satisfied customers have to say about our
                  products
                </p>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-slate-50 p-6 dark:bg-slate-700"
                    >
                      <div className="mb-4 flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={18}
                            className={
                              star <= 4 + (i % 2)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-slate-300 dark:text-slate-500"
                            }
                          />
                        ))}
                      </div>
                      <p className="mb-4 text-slate-700 italic dark:text-slate-300">
                        &quot;This product exceeded my expectations. Amazing
                        quality and fantastic customer service. Highly
                        recommended!&quot;
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-blue-400 to-purple-400">
                          <span className="text-sm font-semibold text-white">
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
              className="bg-slate-100 py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                  Customers Also Bought
                </h2>
                <p className="mb-12 text-slate-600 dark:text-slate-300">
                  Complete your purchase with these complementary products
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg dark:bg-slate-800"
                    >
                      <div className="relative flex h-48 items-center justify-center overflow-hidden bg-linear-to-br from-green-200 to-teal-200 dark:from-green-900 dark:to-teal-900">
                        <TrendingUp size={48} className="text-green-600" />
                        {i <= 2 && (
                          <div className="absolute top-3 right-3 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                            Save 20%
                          </div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                          Related Item {i}
                        </h3>
                        <div className="mb-4 flex gap-2">
                          <span className="text-lg font-bold text-slate-900 dark:text-white">
                            ${(34.99 + i * 5).toFixed(2)}
                          </span>
                          {i <= 2 && (
                            <span className="text-sm text-slate-600 line-through dark:text-slate-300">
                              ${(44.99 + i * 5).toFixed(2)}
                            </span>
                          )}
                        </div>
                        <button className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition-colors hover:bg-blue-700">
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
              className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 py-16 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                  <div className="mb-4 inline-block rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white">
                    EXCLUSIVE OFFER
                  </div>
                  <h2 className="mb-4 text-4xl font-bold text-white">
                    Limited Time Sale
                  </h2>
                  <p className="mx-auto mb-8 max-w-2xl text-slate-300">
                    Don&apos;t miss out on these incredible deals on our
                    best-selling products
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Featured Item 1 - Large */}
                  <div className="h-96 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-slate-800">
                    <div className="flex h-full">
                      <div className="flex w-1/2 items-center justify-center bg-linear-to-br from-orange-300 to-red-300 dark:from-orange-700 dark:to-red-700">
                        <Package size={80} className="text-white opacity-50" />
                      </div>
                      <div className="flex w-1/2 flex-col justify-between p-8">
                        <div>
                          <div className="mb-2 text-sm font-semibold text-red-600">
                            HOT DEAL
                          </div>
                          <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                            Premium Product
                          </h3>
                          <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">
                            Limited quantities available
                          </p>
                        </div>
                        <div>
                          <div className="mb-4 flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">
                              $79.99
                            </span>
                            <span className="text-lg text-slate-500 line-through">
                              $129.99
                            </span>
                            <span className="rounded bg-red-500 px-2 py-1 text-sm font-semibold text-white">
                              -38%
                            </span>
                          </div>
                          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 font-semibold text-white transition-colors hover:bg-blue-700">
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
                        className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-slate-800"
                      >
                        <div className="flex items-center gap-4 p-6">
                          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700">
                            <Package
                              size={40}
                              className="text-white opacity-50"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                              Spotlight Product {i}
                            </h3>
                            <div className="mt-2 flex items-baseline gap-2">
                              <span className="font-bold text-slate-900 dark:text-white">
                                ${(59.99 + i * 10).toFixed(2)}
                              </span>
                              <span className="text-sm text-slate-500 line-through">
                                ${(99.99 + i * 10).toFixed(2)}
                              </span>
                            </div>
                          </div>
                          <button className="shrink-0 rounded-lg bg-blue-600 p-3 text-white transition-colors hover:bg-blue-700">
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
