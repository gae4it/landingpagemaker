"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  BookOpen,
  Lightbulb,
  Quote,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksContentPage() {
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
        title="Content Sections"
        subtitle="Beautiful content blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Text + Image Left */}
          <div className="relative">
            <SectionDivider title="Text + Image Left">
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
              className="bg-white dark:bg-slate-950 py-16 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="bg-slate-200 dark:bg-slate-800 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400">Image</span>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Unlock Your Potential
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium flex items-center gap-2">
                    Learn More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 2: Text + Image Right */}
          <div className="relative">
            <SectionDivider title="Text + Image Right">
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
              className="bg-slate-50 dark:bg-slate-900 py-16 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                    Build Faster Together
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                    Collaborate with your team and ship products faster than ever.
                    Real-time updates keep everyone on the same page.
                  </p>
                  <ul className="space-y-3">
                    {["Real-time collaboration", "Version control", "Team analytics"].map(
                      (item) => (
                        <li key={item} className="flex gap-3 items-center">
                          <CheckCircle
                            className="text-green-600 shrink-0"
                            size={20}
                          />
                          <span className="text-slate-700 dark:text-slate-300">
                            {item}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                <div className="order-1 md:order-2 bg-slate-200 dark:bg-slate-800 h-80 rounded-lg flex items-center justify-center">
                  <span className="text-slate-400">Image</span>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 3: Full Width Content */}
          <div className="relative">
            <SectionDivider title="Full Width Content">
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
              className="bg-white dark:bg-slate-950 py-16 rounded-lg"
            >
              <div className="max-w-4xl mx-auto">
                <div className="bg-slate-200 dark:bg-slate-800 h-96 rounded-lg mb-8 flex items-center justify-center">
                  <span className="text-slate-400">Hero Image</span>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                  <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
                    The Future of Digital Creation
                  </h1>
                  <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-12 mb-4">
                    Key Points
                  </h2>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                    <li>✓ First benefit of the service</li>
                    <li>✓ Second benefit of the service</li>
                    <li>✓ Third benefit of the service</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 4: Blockquote with Attribution */}
          <div className="relative">
            <SectionDivider title="Blockquote">
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
              className="bg-blue-50 dark:bg-blue-900/20 py-16 rounded-lg border-l-4 border-blue-600"
            >
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Quote className="text-blue-600 mb-4" size={40} />
                <blockquote className="text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-relaxed">
                  "The best time to plant a tree was 20 years ago. The second
                  best time is now. This is the philosophy we live by when
                  building our products."
                </blockquote>
                <footer className="border-t border-blue-200 dark:border-blue-800 pt-4">
                  <p className="font-semibold text-slate-900 dark:text-white">
                    John Doe
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">
                    CEO of Company Inc.
                  </p>
                </footer>
              </div>
            </section>
          </div>

          {/* Variant 5: Multi Column Text */}
          <div className="relative">
            <SectionDivider title="Multi Column Text">
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
              className="bg-slate-50 dark:bg-slate-900 py-16 rounded-lg"
            >
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                  How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-800 p-8 rounded-lg"
                    >
                      <div className="text-4xl font-bold text-blue-600 mb-4">
                        {i}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Step {i}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 6: Callout Box */}
          <div className="relative">
            <SectionDivider title="Callout Box">
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
              className="bg-white dark:bg-slate-950 py-16 rounded-lg"
            >
              <div className="max-w-3xl mx-auto">
                <div className="bg-linear-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-300 dark:border-purple-700 rounded-lg p-8">
                  <div className="flex gap-4 items-start">
                    <Lightbulb
                      className="text-purple-600 shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                        Pro Tip
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Did you know that you can save up to 70% of your time by
                        using our advanced features? Explore our documentation to
                        learn more about all capabilities.
                      </p>
                      <button className="mt-4 text-purple-600 dark:text-purple-400 font-medium hover:underline flex items-center gap-2">
                        Learn more
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 7: Text with Highlight */}
          <div className="relative">
            <SectionDivider title="Text with Highlight">
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
              className="bg-slate-50 dark:bg-slate-900 py-16 rounded-lg"
            >
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                  Why Choose Us?
                </h2>
                <div className="prose dark:prose-invert max-w-none text-lg text-slate-700 dark:text-slate-300 space-y-6">
                  <p>
                    We provide <span className="bg-yellow-200 dark:bg-yellow-600 px-2 py-1 rounded">
                      world-class solutions
                    </span> that help businesses scale faster and more efficiently.
                  </p>
                  <p>
                    Our team has over <span className="bg-green-200 dark:bg-green-600 px-2 py-1 rounded font-semibold">
                      20 years of experience
                    </span> in the industry, delivering results to Fortune 500 companies.
                  </p>
                  <p>
                    With <span className="bg-blue-200 dark:bg-blue-600 px-2 py-1 rounded">
                      24/7 customer support
                    </span>, we're here to help you succeed.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 8: Side by Side Content */}
          <div className="relative">
            <SectionDivider title="Side by Side Content">
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
              className="bg-white dark:bg-slate-950 py-16 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-lg">
                  <BookOpen className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Documentation
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Comprehensive guides to help you get started with our platform.
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                    Read docs →
                  </button>
                </div>
                <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-lg">
                  <Lightbulb className="text-yellow-600 mb-4" size={32} />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Best Practices
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Learn from industry experts on how to maximize your results.
                  </p>
                  <button className="text-yellow-600 dark:text-yellow-400 font-medium hover:underline">
                    View guides →
                  </button>
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
