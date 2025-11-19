"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Call to Action", slug: "call-to-action-blocks" },
  { name: "Columns", slug: "columns" },
  { name: "Contact", slug: "contact-blocks" },
  { name: "Content", slug: "content-blocks" },
  { name: "Counter", slug: "counter-blocks" },
  { name: "Dividers", slug: "dividers" },
  { name: "Features & Services", slug: "features-e-services-blocks" },
  { name: "Footer", slug: "footer-blocks" },
  { name: "Forms", slug: "forms-blocks" },
  { name: "Headers", slug: "headers" },
  { name: "Hero", slug: "hero-blocks" },
  { name: "Interactions", slug: "interactions" },
  { name: "Partner", slug: "partner-blocks" },
  { name: "Post", slug: "post-blocks" },
  { name: "Pricing", slug: "pricing-blocks" },
  { name: "Shop", slug: "shop-blocks" },
  { name: "Social", slug: "social-blocks" },
  { name: "Teams", slug: "teams-blocks" },
  { name: "Testimonials", slug: "testimonials-blocks" },
  { name: "UI", slug: "ui-blocks" },
];

export default function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex shrink-0 items-center">
              <Link href="/" className="text-xl font-bold text-gray-900">
                LandingPageMaker
              </Link>
            </div>
            <div className="ml-6 flex space-x-8">
              <Link
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300"
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300">
                  Blocks
                  <svg
                    className="ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="ring-opacity-5 absolute left-0 z-10 mt-2 w-96 rounded-md bg-white shadow-lg ring-1 ring-black">
                    <div className="grid grid-cols-2 gap-2 p-4">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/blocks/${category.slug}`}
                          className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-900 hover:border-gray-300"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
