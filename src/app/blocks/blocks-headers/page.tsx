"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  Menu,
  Search,
  LogIn,
  Sun,
  Moon,
  ChevronDown,
} from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksHeadersPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLDivElement>(null);
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
        title="Header Sections"
        subtitle="Beautiful header blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Sticky Navigation Bar */}
          <div className="relative">
            <SectionDivider title="Sticky Navigation Bar">
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
            <header
              ref={sectionRef1}
              className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-blue-600">
                      Brand
                    </div>
                  </div>
                  <nav className="hidden gap-8 md:flex">
                    <a
                      href="#"
                      className="font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Docs
                    </a>
                  </nav>
                  <button className="hidden rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 md:block">
                    Get Started
                  </button>
                  <button className="text-slate-600 md:hidden dark:text-slate-300">
                    <Menu size={24} />
                  </button>
                </div>
              </div>
            </header>
          </div>

          {/* Variant 2: Mega Menu */}
          <div className="relative">
            <SectionDivider title="Mega Menu">
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
            <header
              ref={sectionRef2}
              className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <nav className="hidden gap-6 lg:flex">
                    <div className="group relative">
                      <button className="flex items-center gap-1 py-8 font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                        Products
                        <ChevronDown size={16} />
                      </button>
                      <div className="invisible absolute left-0 mt-0 w-48 rounded-lg bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 dark:bg-slate-900">
                        <a
                          href="#"
                          className="block px-4 py-2 text-slate-600 first:rounded-t-lg hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          Product 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          Product 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-slate-600 last:rounded-b-lg hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        >
                          Product 3
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="py-8 font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Solutions
                    </a>
                    <a
                      href="#"
                      className="py-8 font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="py-8 font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Docs
                    </a>
                  </nav>
                  <button className="hidden rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 lg:block">
                    Sign In
                  </button>
                </div>
              </div>
            </header>
          </div>

          {/* Variant 3: Dark Toggle */}
          <div className="relative">
            <SectionDivider title="Dark/Light Toggle">
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
            <header
              ref={sectionRef3}
              className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <nav className="hidden gap-8 md:flex">
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      About
                    </a>
                  </nav>
                  <div className="flex items-center gap-4">
                    <button
                      className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                      aria-label="Toggle dark mode"
                    >
                      <Sun size={20} className="block dark:hidden" />
                      <Moon size={20} className="hidden dark:block" />
                    </button>
                    <button className="hidden rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 md:block">
                      Sign In
                    </button>
                  </div>
                </div>
              </div>
            </header>
          </div>

          {/* Variant 4: Search Bar */}
          <div className="relative">
            <SectionDivider title="Search Bar">
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
            <header
              ref={sectionRef4}
              className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <div className="mx-8 hidden flex-1 md:flex">
                    <div className="relative w-full max-w-md">
                      <Search
                        size={20}
                        className="absolute top-1/2 left-3 -translate-y-1/2 transform text-slate-400"
                      />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full rounded-lg border border-slate-300 bg-white py-2 pr-4 pl-10 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <nav className="hidden gap-8 md:flex">
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Blog
                    </a>
                  </nav>
                </div>
              </div>
            </header>
          </div>

          {/* Variant 5: Auth Buttons */}
          <div className="relative">
            <SectionDivider title="Auth Buttons">
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
            <header
              ref={sectionRef5}
              className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <nav className="hidden gap-8 md:flex">
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Pricing
                    </a>
                  </nav>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-slate-600 hover:text-slate-900 dark:border-slate-600 dark:text-slate-300 dark:hover:text-white">
                      <LogIn size={18} />
                      Login
                    </button>
                    <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </header>
          </div>

          {/* Variant 6: Breadcrumb */}
          <div className="relative">
            <SectionDivider title="Breadcrumb Navigation">
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
            <header
              ref={sectionRef6}
              className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-4 flex h-16 items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <nav className="hidden gap-8 md:flex">
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Products
                    </a>
                  </nav>
                </div>
                <nav className="pb-4 text-sm text-slate-600 dark:text-slate-400">
                  <ol className="flex gap-2">
                    <li>
                      <a
                        href="#"
                        className="hover:text-slate-900 dark:hover:text-white"
                      >
                        Home
                      </a>
                    </li>
                    <li>/</li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-slate-900 dark:hover:text-white"
                      >
                        Products
                      </a>
                    </li>
                    <li>/</li>
                    <li className="text-slate-900 dark:text-white">Details</li>
                  </ol>
                </nav>
              </div>
            </header>
          </div>

          {/* Variant 7: Announcement Bar */}
          <div className="relative">
            <SectionDivider title="Announcement Bar">
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
            <header ref={sectionRef7} className="bg-blue-600 py-3 text-white">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center text-sm font-medium">
                  🎉 Exciting announcement: New features coming soon!{" "}
                  <a href="#" className="underline hover:opacity-80">
                    Learn more →
                  </a>
                </div>
              </div>
            </header>
            <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <nav className="hidden gap-8 md:flex">
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                    >
                      Blog
                    </a>
                  </nav>
                </div>
              </div>
            </header>
          </div>

          {/* Variant 8: Transparent Over Hero */}
          <div className="relative">
            <SectionDivider title="Transparent Over Hero">
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
            <div
              ref={sectionRef8}
              className="relative h-96 overflow-hidden rounded-lg bg-linear-to-r from-blue-600 to-purple-600"
            >
              <header className="absolute top-0 right-0 left-0 z-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="flex h-16 items-center justify-between">
                    <div className="text-2xl font-bold text-white">Brand</div>
                    <nav className="hidden gap-8 md:flex">
                      <a
                        href="#"
                        className="font-medium text-white hover:text-blue-100"
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="font-medium text-white hover:text-blue-100"
                      >
                        Features
                      </a>
                      <a
                        href="#"
                        className="font-medium text-white hover:text-blue-100"
                      >
                        Pricing
                      </a>
                    </nav>
                    <button className="hidden rounded-lg bg-white px-6 py-2 font-medium text-blue-600 hover:bg-blue-50 md:block">
                      Get Started
                    </button>
                  </div>
                </div>
              </header>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="mb-4 text-5xl font-bold">Welcome</h1>
                  <p className="text-xl text-blue-100">
                    Header overlaid on hero section
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
