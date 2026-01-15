"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUp,
  Globe,
  Youtube,
  Github,
} from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksFooterPage() {
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
        title="Footer Sections"
        subtitle="Beautiful footer blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Links Grid + Copyright */}
          <div className="relative">
            <SectionDivider title="Links Grid + Copyright">
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
            <footer
              ref={sectionRef1}
              className="bg-slate-900 py-16 text-slate-200 dark:bg-slate-950 dark:text-slate-300"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
                  <div>
                    <h3 className="mb-4 font-bold text-white dark:text-white">
                      About
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 font-bold text-white dark:text-white">
                      Product
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Security
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 font-bold text-white dark:text-white">
                      Resources
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Docs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          API Reference
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 font-bold text-white dark:text-white">
                      Legal
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Terms of Service
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Cookie Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between border-t border-slate-700 pt-8 sm:flex-row">
                  <p className="text-sm">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                  <div className="mt-4 flex gap-4 sm:mt-0">
                    <a
                      href="#"
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 transition-colors hover:text-white"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>

          {/* Variant 2: Newsletter Focus */}
          <div className="relative">
            <SectionDivider title="Newsletter Focus">
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
            <footer
              ref={sectionRef2}
              className="bg-linear-to-r from-slate-50 to-slate-100 py-16 dark:from-slate-900 dark:to-slate-800"
            >
              <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h3 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
                  Stay Updated
                </h3>
                <p className="mx-auto mb-8 max-w-2xl text-slate-600 dark:text-slate-300">
                  Subscribe to our newsletter and get the latest updates
                  delivered to your inbox.
                </p>
                <form className="mx-auto mb-8 flex max-w-md gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder-slate-400"
                  />
                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    <Send size={18} />
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
                <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-700">
                  <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 dark:text-slate-300">
                    <a
                      href="#"
                      className="hover:text-slate-900 dark:hover:text-white"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="hover:text-slate-900 dark:hover:text-white"
                    >
                      Terms of Service
                    </a>
                    <a
                      href="#"
                      className="hover:text-slate-900 dark:hover:text-white"
                    >
                      Contact
                    </a>
                  </div>
                  <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>

          {/* Variant 3: Social Icons */}
          <div className="relative">
            <SectionDivider title="Social Icons">
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
            <footer
              ref={sectionRef3}
              className="bg-slate-900 py-12 text-white dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
                  <div>
                    <h3 className="text-2xl font-bold">YourBrand</h3>
                    <p className="mt-2 text-slate-400">
                      Building amazing products together
                    </p>
                  </div>
                  <div className="mt-6 flex gap-6 md:mt-0">
                    <a
                      href="#"
                      className="rounded-lg p-2 transition-colors hover:bg-slate-800"
                      aria-label="Twitter"
                    >
                      <Twitter size={24} />
                    </a>
                    <a
                      href="#"
                      className="rounded-lg p-2 transition-colors hover:bg-slate-800"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="rounded-lg p-2 transition-colors hover:bg-slate-800"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="rounded-lg p-2 transition-colors hover:bg-slate-800"
                      aria-label="Linkedin"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="#"
                      className="rounded-lg p-2 transition-colors hover:bg-slate-800"
                      aria-label="YouTube"
                    >
                      <Youtube size={24} />
                    </a>
                    <a
                      href="#"
                      className="rounded-lg p-2 transition-colors hover:bg-slate-800"
                      aria-label="Github"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-slate-700 pt-8 text-sm text-slate-400 md:grid-cols-3">
                  <div>
                    <p className="mb-2 font-semibold text-white">Product</p>
                    <ul className="space-y-1">
                      <li>
                        <a href="#" className="hover:text-white">
                          Features
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-white">Company</p>
                    <ul className="space-y-1">
                      <li>
                        <a href="#" className="hover:text-white">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold text-white">Legal</p>
                    <ul className="space-y-1">
                      <li>
                        <a href="#" className="hover:text-white">
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white">
                          Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>

          {/* Variant 4: Company Info + Contact */}
          <div className="relative">
            <SectionDivider title="Company Info + Contact">
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
            <footer
              ref={sectionRef4}
              className="border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
                  <div>
                    <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
                      Contact Us
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <Mail
                          size={20}
                          className="mt-1 shrink-0 text-blue-600"
                        />
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Email
                          </p>
                          <a
                            href="mailto:hello@company.com"
                            className="text-slate-900 hover:text-blue-600 dark:text-white"
                          >
                            hello@company.com
                          </a>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Phone
                          size={20}
                          className="mt-1 shrink-0 text-blue-600"
                        />
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Phone
                          </p>
                          <a
                            href="tel:+1234567890"
                            className="text-slate-900 hover:text-blue-600 dark:text-white"
                          >
                            +1 (234) 567-890
                          </a>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <MapPin
                          size={20}
                          className="mt-1 shrink-0 text-blue-600"
                        />
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Address
                          </p>
                          <p className="text-slate-900 dark:text-white">
                            123 Main St, City, Country
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
                      Quick Links
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
                      Support
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                          Contact Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                          Status Page
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between border-t border-slate-200 pt-8 md:flex-row dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                  <div className="mt-4 flex gap-4 md:mt-0">
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      Terms
                    </a>
                    <a
                      href="#"
                      className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                    >
                      Cookies
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>

          {/* Variant 5: Logo + Columns */}
          <div className="relative">
            <SectionDivider title="Logo + Columns">
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
            <footer
              ref={sectionRef5}
              className="bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-5">
                  <div className="md:col-span-1">
                    <div className="mb-4 text-2xl font-bold text-blue-600">
                      Brand
                    </div>
                    <p className="mb-4 text-sm text-slate-600 dark:text-slate-400">
                      Creating exceptional digital experiences.
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="text-slate-400 transition-colors hover:text-blue-600"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href="#"
                        className="text-slate-400 transition-colors hover:text-blue-600"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="#"
                        className="text-slate-400 transition-colors hover:text-blue-600"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h5 className="mb-4 font-semibold text-slate-900 dark:text-white">
                      Product
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          Updates
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-4 font-semibold text-slate-900 dark:text-white">
                      Company
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-4 font-semibold text-slate-900 dark:text-white">
                      Resources
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          API
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          Community
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="mb-4 font-semibold text-slate-900 dark:text-white">
                      Legal
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          Terms
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-slate-200 pt-8 dark:border-slate-700">
                  <p className="text-center text-sm text-slate-600 dark:text-slate-400">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                </div>
              </div>
            </footer>
          </div>

          {/* Variant 6: Dark Minimal */}
          <div className="relative">
            <SectionDivider title="Dark Minimal">
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
            <footer
              ref={sectionRef6}
              className="bg-black py-12 text-white dark:bg-black"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-bold">YourBrand</h3>
                    <p className="text-gray-400">
                      Elegant footer for your modern website
                    </p>
                  </div>
                  <div className="flex gap-8 text-sm">
                    <a href="#" className="text-gray-400 hover:text-white">
                      Privacy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Terms
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Contact
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                      Support
                    </a>
                  </div>
                </div>
                <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-800 pt-8 text-xs text-gray-400 md:flex-row">
                  <p>&copy; 2024 Your Company. All rights reserved.</p>
                  <div className="mt-4 flex gap-4 md:mt-0">
                    <a href="#" className="hover:text-white">
                      <Twitter size={16} />
                    </a>
                    <a href="#" className="hover:text-white">
                      <Facebook size={16} />
                    </a>
                    <a href="#" className="hover:text-white">
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>

          {/* Variant 7: Back to Top Button */}
          <div className="relative">
            <SectionDivider title="Back to Top Button">
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
            <footer
              ref={sectionRef7}
              className="bg-slate-900 py-16 text-slate-200 dark:bg-slate-950 dark:text-slate-300"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
                  <div>
                    <h4 className="mb-4 font-bold text-white dark:text-white">
                      Solutions
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Platform
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Security
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-bold text-white dark:text-white">
                      Developers
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          API Reference
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Status
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-bold text-white dark:text-white">
                      Company
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                        >
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between border-t border-slate-700 pt-8 md:flex-row">
                  <p className="text-sm">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                  <button
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="mt-4 flex items-center gap-2 rounded-lg bg-slate-800 p-2 transition-colors hover:bg-slate-700 md:mt-0"
                  >
                    <span className="text-sm">Back to top</span>
                    <ArrowUp size={18} />
                  </button>
                </div>
              </div>
            </footer>
          </div>

          {/* Variant 8: Language Switcher */}
          <div className="relative">
            <SectionDivider title="Language Switcher">
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
            <footer
              ref={sectionRef8}
              className="border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-4">
                  <div>
                    <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
                      Product
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Overview
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Features
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
                      Developers
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Docs
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          API
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          SDK
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
                      Company
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Careers
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          About
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
                      Legal
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          Terms
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-600">
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row dark:border-slate-700">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Globe size={18} className="text-slate-400" />
                      <select className="rounded border border-slate-200 bg-transparent px-2 py-1 text-sm text-slate-600 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-700 dark:text-slate-400">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                        <option>Italian</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
