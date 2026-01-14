"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  Menu,
  X,
  Search,
  LogIn,
  Sun,
  Moon,
  ChevronDown,
  Phone,
  MapPin,
  Mail,
  Bell,
} from "lucide-react";
import { useRef, useState } from "react";
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
  const sectionRef8 = useRef<HTMLElement>(null);
  const [showCopied, triggerCopied] = useCopyNotification();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <main className="bg-background min-h-screen py-16">
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
              className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-blue-600">Brand</div>
                  </div>
                  <nav className="hidden md:flex gap-8">
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium"
                    >
                      Docs
                    </a>
                  </nav>
                  <button className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                    Get Started
                  </button>
                  <button className="md:hidden text-slate-600 dark:text-slate-300">
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
              className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <nav className="hidden lg:flex gap-6">
                    <div className="group relative">
                      <button className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium py-8">
                        Products
                        <ChevronDown size={16} />
                      </button>
                      <div className="absolute left-0 mt-0 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                        <a
                          href="#"
                          className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 first:rounded-t-lg"
                        >
                          Product 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                          Product 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 last:rounded-b-lg"
                        >
                          Product 3
                        </a>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium py-8"
                    >
                      Solutions
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium py-8"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium py-8"
                    >
                      Docs
                    </a>
                  </nav>
                  <button className="hidden lg:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
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
              className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <nav className="hidden md:flex gap-8">
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      About
                    </a>
                  </nav>
                  <div className="flex items-center gap-4">
                    <button
                      className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                      aria-label="Toggle dark mode"
                    >
                      <Sun size={20} className="block dark:hidden" />
                      <Moon size={20} className="hidden dark:block" />
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hidden md:block">
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
              className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <div className="flex-1 mx-8 hidden md:flex">
                    <div className="relative w-full max-w-md">
                      <Search
                        size={20}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                      />
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <nav className="hidden md:flex gap-8">
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
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
              className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <nav className="hidden md:flex gap-8">
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      Features
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      Pricing
                    </a>
                  </nav>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-600 rounded-lg">
                      <LogIn size={18} />
                      Login
                    </button>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
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
              className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 mb-4">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <nav className="hidden md:flex gap-8">
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      Products
                    </a>
                  </nav>
                </div>
                <nav className="text-sm text-slate-600 dark:text-slate-400 pb-4">
                  <ol className="flex gap-2">
                    <li>
                      <a href="#" className="hover:text-slate-900 dark:hover:text-white">
                        Home
                      </a>
                    </li>
                    <li>/</li>
                    <li>
                      <a href="#" className="hover:text-slate-900 dark:hover:text-white">
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
            <header ref={sectionRef7} className="bg-blue-600 text-white py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center text-sm font-medium">
                  🎉 Exciting announcement: New features coming soon!{" "}
                  <a href="#" className="underline hover:opacity-80">
                    Learn more →
                  </a>
                </div>
              </div>
            </header>
            <header className="bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <div className="text-2xl font-bold text-blue-600">Brand</div>
                  <nav className="hidden md:flex gap-8">
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
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
              className="relative h-96 bg-linear-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden"
            >
              <header className="absolute top-0 left-0 right-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold text-white">Brand</div>
                    <nav className="hidden md:flex gap-8">
                      <a
                        href="#"
                        className="text-white hover:text-blue-100 font-medium"
                      >
                        Home
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-blue-100 font-medium"
                      >
                        Features
                      </a>
                      <a
                        href="#"
                        className="text-white hover:text-blue-100 font-medium"
                      >
                        Pricing
                      </a>
                    </nav>
                    <button className="hidden md:block px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-medium">
                      Get Started
                    </button>
                  </div>
                </div>
              </header>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl font-bold mb-4">Welcome</h1>
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
