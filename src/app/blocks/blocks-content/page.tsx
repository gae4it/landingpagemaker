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
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="flex h-80 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800">
                  <span className="text-slate-400">Image</span>
                </div>
                <div>
                  <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">
                    Unlock Your Potential
                  </h2>
                  <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700">
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
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <h2 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">
                    Build Faster Together
                  </h2>
                  <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                    Collaborate with your team and ship products faster than
                    ever. Real-time updates keep everyone on the same page.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Real-time collaboration",
                      "Version control",
                      "Team analytics",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle
                          className="shrink-0 text-green-600"
                          size={20}
                        />
                        <span className="text-slate-700 dark:text-slate-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="order-1 flex h-80 items-center justify-center rounded-lg bg-slate-200 md:order-2 dark:bg-slate-800">
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
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-4xl">
                <div className="mb-8 flex h-96 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-800">
                  <span className="text-slate-400">Hero Image</span>
                </div>
                <div className="prose dark:prose-invert max-w-none">
                  <h1 className="mb-6 text-5xl font-bold text-slate-900 dark:text-white">
                    The Future of Digital Creation
                  </h1>
                  <p className="mb-8 text-xl leading-relaxed text-slate-600 dark:text-slate-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris.
                  </p>
                  <h2 className="mt-12 mb-4 text-3xl font-bold text-slate-900 dark:text-white">
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
              className="rounded-lg border-l-4 border-blue-600 bg-blue-50 py-16 dark:bg-blue-900/20"
            >
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <Quote className="mb-4 text-blue-600" size={40} />
                <blockquote className="mb-6 text-3xl leading-relaxed font-bold text-slate-900 dark:text-white">
                  &quot;The best time to plant a tree was 20 years ago. The
                  second best time is now. This is the philosophy we live by
                  when building our products.&quot;
                </blockquote>
                <footer className="border-t border-blue-200 pt-4 dark:border-blue-800">
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
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-6xl">
                <h2 className="mb-12 text-center text-4xl font-bold text-slate-900 dark:text-white">
                  How It Works
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-white p-8 dark:bg-slate-800"
                    >
                      <div className="mb-4 text-4xl font-bold text-blue-600">
                        {i}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
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
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-3xl">
                <div className="rounded-lg border border-purple-300 bg-linear-to-r from-purple-100 to-pink-100 p-8 dark:border-purple-700 dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="flex items-start gap-4">
                    <Lightbulb
                      className="mt-1 shrink-0 text-purple-600"
                      size={24}
                    />
                    <div>
                      <h3 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
                        Pro Tip
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300">
                        Did you know that you can save up to 70% of your time by
                        using our advanced features? Explore our documentation
                        to learn more about all capabilities.
                      </p>
                      <button className="mt-4 flex items-center gap-2 font-medium text-purple-600 hover:underline dark:text-purple-400">
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
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-4xl px-4">
                <h2 className="mb-8 text-center text-4xl font-bold text-slate-900 dark:text-white">
                  Why Choose Us?
                </h2>
                <div className="prose dark:prose-invert max-w-none space-y-6 text-lg text-slate-700 dark:text-slate-300">
                  <p>
                    We provide{" "}
                    <span className="rounded bg-yellow-200 px-2 py-1 dark:bg-yellow-600">
                      world-class solutions
                    </span>{" "}
                    that help businesses scale faster and more efficiently.
                  </p>
                  <p>
                    Our team has over{" "}
                    <span className="rounded bg-green-200 px-2 py-1 font-semibold dark:bg-green-600">
                      20 years of experience
                    </span>{" "}
                    in the industry, delivering results to Fortune 500
                    companies.
                  </p>
                  <p>
                    With{" "}
                    <span className="rounded bg-blue-200 px-2 py-1 dark:bg-blue-600">
                      24/7 customer support
                    </span>
                    , we&apos;re here to help you succeed.
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
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="rounded-lg bg-slate-100 p-8 dark:bg-slate-900">
                  <BookOpen className="mb-4 text-blue-600" size={32} />
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                    Documentation
                  </h3>
                  <p className="mb-6 text-slate-600 dark:text-slate-400">
                    Comprehensive guides to help you get started with our
                    platform.
                  </p>
                  <button className="font-medium text-blue-600 hover:underline dark:text-blue-400">
                    Read docs →
                  </button>
                </div>
                <div className="rounded-lg bg-slate-100 p-8 dark:bg-slate-900">
                  <Lightbulb className="mb-4 text-yellow-600" size={32} />
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                    Best Practices
                  </h3>
                  <p className="mb-6 text-slate-600 dark:text-slate-400">
                    Learn from industry experts on how to maximize your results.
                  </p>
                  <button className="font-medium text-yellow-600 hover:underline dark:text-yellow-400">
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
