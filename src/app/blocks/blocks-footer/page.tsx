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
      <main className="bg-background min-h-screen py-16">
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
              className="bg-slate-900 dark:bg-slate-950 text-slate-200 dark:text-slate-300 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  <div>
                    <h3 className="text-white dark:text-white font-bold mb-4">
                      About
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white dark:text-white font-bold mb-4">
                      Product
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Security
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white dark:text-white font-bold mb-4">
                      Resources
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Docs
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          API Reference
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Support
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white dark:text-white font-bold mb-4">
                      Legal
                    </h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Terms of Service
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          Cookie Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row justify-between items-center">
                  <p className="text-sm">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                  <div className="flex gap-4 mt-4 sm:mt-0">
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors"
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
              className="bg-linear-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-16"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Stay Updated
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter and get the latest updates delivered
                  to your inbox.
                </p>
                <form className="flex gap-2 mb-8 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
                  >
                    <Send size={18} />
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
                <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8">
                  <div className="flex flex-wrap justify-center gap-6 text-slate-600 dark:text-slate-300 text-sm">
                    <a href="#" className="hover:text-slate-900 dark:hover:text-white">
                      Privacy Policy
                    </a>
                    <a href="#" className="hover:text-slate-900 dark:hover:text-white">
                      Terms of Service
                    </a>
                    <a href="#" className="hover:text-slate-900 dark:hover:text-white">
                      Contact
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
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
              className="bg-slate-900 dark:bg-slate-950 text-white py-12"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold">YourBrand</h3>
                    <p className="text-slate-400 mt-2">
                      Building amazing products together
                    </p>
                  </div>
                  <div className="flex gap-6 mt-6 md:mt-0">
                    <a
                      href="#"
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={24} />
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                      aria-label="Linkedin"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube size={24} />
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
                      aria-label="Github"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-slate-400">
                  <div>
                    <p className="font-semibold text-white mb-2">Product</p>
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
                    <p className="font-semibold text-white mb-2">Company</p>
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
                    <p className="font-semibold text-white mb-2">Legal</p>
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
              className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                      Contact Us
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <Mail
                          size={20}
                          className="text-blue-600 shrink-0 mt-1"
                        />
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Email
                          </p>
                          <a
                            href="mailto:hello@company.com"
                            className="text-slate-900 dark:text-white hover:text-blue-600"
                          >
                            hello@company.com
                          </a>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <Phone
                          size={20}
                          className="text-blue-600 shrink-0 mt-1"
                        />
                        <div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Phone
                          </p>
                          <a
                            href="tel:+1234567890"
                            className="text-slate-900 dark:text-white hover:text-blue-600"
                          >
                            +1 (234) 567-890
                          </a>
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <MapPin
                          size={20}
                          className="text-blue-600 shrink-0 mt-1"
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
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                      Quick Links
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          Products
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                      Support
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          Help Center
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          Contact Support
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                        >
                          Status Page
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                  <div className="flex gap-4 mt-4 md:mt-0">
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm"
                    >
                      Terms
                    </a>
                    <a
                      href="#"
                      className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm"
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
              className="bg-slate-50 dark:bg-slate-900 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
                  <div className="md:col-span-1">
                    <div className="text-2xl font-bold text-blue-600 mb-4">
                      Brand
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Creating exceptional digital experiences.
                    </p>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-blue-600 transition-colors"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-4">
                      Product
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          Updates
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-4">
                      Company
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-4">
                      Resources
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          API
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          Community
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white mb-4">
                      Legal
                    </h5>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          Privacy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          Terms
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                        >
                          License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
                  <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
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
              className="bg-black dark:bg-black text-white py-12"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">YourBrand</h3>
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
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
                  <p>&copy; 2024 Your Company. All rights reserved.</p>
                  <div className="flex gap-4 mt-4 md:mt-0">
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
              className="bg-slate-900 dark:bg-slate-950 text-slate-200 dark:text-slate-300 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                  <div>
                    <h4 className="text-white dark:text-white font-bold mb-4">
                      Solutions
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="hover:text-white transition-colors">
                          Platform
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition-colors">
                          Features
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition-colors">
                          Security
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white dark:text-white font-bold mb-4">
                      Developers
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="hover:text-white transition-colors">
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition-colors">
                          API Reference
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition-colors">
                          Status
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white dark:text-white font-bold mb-4">
                      Company
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="hover:text-white transition-colors">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition-colors">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-white transition-colors">
                          Careers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="mt-4 md:mt-0 p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-2"
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
              className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">
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
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">
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
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">
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
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">
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
                <div className="border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    &copy; 2024 Your Company. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <Globe size={18} className="text-slate-400" />
                      <select className="bg-transparent text-sm text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
