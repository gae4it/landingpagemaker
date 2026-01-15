"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Copy } from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksDividersPage() {
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
        title="Dividers Sections"
        subtitle="Beautiful divider and separator blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Simple Horizontal Line Divider */}
          <div className="relative">
            <SectionDivider title="Simple Horizontal Line">
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
              className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-slate-600 dark:text-slate-400">
                  A clean and minimal horizontal line divider for separating
                  content sections.
                </p>
                <div className="h-px bg-slate-300 dark:bg-slate-700"></div>
              </div>
            </section>
          </div>

          {/* Variant 2: Dotted Line Divider */}
          <div className="relative">
            <SectionDivider title="Dotted Line Divider">
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
              className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-slate-600 dark:text-slate-400">
                  A dotted line divider adds visual interest while maintaining
                  clarity.
                </p>
                <div className="border-t border-dotted border-slate-300 dark:border-slate-700"></div>
              </div>
            </section>
          </div>

          {/* Variant 3: Dashed Line Divider */}
          <div className="relative">
            <SectionDivider title="Dashed Line Divider">
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
              className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-slate-600 dark:text-slate-400">
                  A dashed line divider provides a contemporary, tech-forward
                  aesthetic.
                </p>
                <div className="border-t-2 border-dashed border-slate-400 dark:border-slate-600"></div>
              </div>
            </section>
          </div>

          {/* Variant 4: Icon-Centered Divider */}
          <div className="relative">
            <SectionDivider title="Icon-Centered Divider">
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
              className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-slate-600 dark:text-slate-400">
                  A decorative icon enhances the visual separation between
                  sections.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700"></div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 dark:bg-slate-100">
                    <svg
                      className="h-4 w-4 text-white dark:text-slate-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700"></div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 5: Text-Centered Divider */}
          <div className="relative">
            <SectionDivider title="Text-Centered Divider">
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
              className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-slate-600 dark:text-slate-400">
                  Text dividers break up content with meaningful labels or
                  section markers.
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700"></div>
                  <span className="shrink-0 px-4 text-sm font-semibold tracking-wide text-slate-700 uppercase dark:text-slate-300">
                    or
                  </span>
                  <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700"></div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 6: Gradient Divider */}
          <div className="relative">
            <SectionDivider title="Gradient Divider">
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
              className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-slate-600 dark:text-slate-400">
                  A gradient divider adds elegance and visual depth to section
                  breaks.
                </p>
                <div className="h-1 rounded-full bg-linear-to-r from-slate-100 via-slate-400 to-slate-100 dark:from-slate-900 dark:via-slate-600 dark:to-slate-900"></div>
              </div>
            </section>
          </div>

          {/* Variant 7: Thick Divider with Spacing */}
          <div className="relative">
            <SectionDivider title="Thick Divider with Spacing">
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
              className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-slate-600 dark:text-slate-400">
                  A bolder divider with generous spacing creates strong visual
                  separation.
                </p>
                <div className="space-y-4">
                  <div className="h-1.5 rounded-full bg-slate-900 dark:bg-slate-100"></div>
                  <div className="h-1.5 w-2/3 rounded-full bg-slate-400 dark:bg-slate-600"></div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 8: Animated Divider */}
          <div className="relative">
            <SectionDivider title="Animated Divider">
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
              className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-3xl">
                <p className="mb-8 text-slate-600 dark:text-slate-400">
                  An animated divider brings motion and energy to your layout.
                </p>
                <div className="relative h-px overflow-hidden rounded-full bg-linear-to-r from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-700">
                  <style>{`
                    @keyframes slide {
                      0% { transform: translateX(-100%); }
                      100% { transform: translateX(100%); }
                    }
                    .animate-slide {
                      animation: slide 2s infinite;
                    }
                  `}</style>
                  <div className="animate-slide absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-slate-600 to-transparent dark:via-slate-400"></div>
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
