"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useRef } from "react";
import CopySnippetButtons from "@/components/CopySnippetButtons";
import SectionDivider from "@/components/SectionDivider";

export default function BlocksDividersPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);

  const simpleHorizontalLineReactSnippet = `<section className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-950">
  <div className="mx-auto max-w-3xl">
    <p className="mb-8 text-slate-600 dark:text-slate-400">
      A clean and minimal horizontal line divider for separating content sections.
    </p>
    <div className="h-px bg-slate-300 dark:bg-slate-700" />
  </div>
</section>`;

  const dottedDividerReactSnippet = `<section className="rounded-lg bg-white px-6 py-16 sm:px-8 dark:bg-slate-950">
  <div className="mx-auto max-w-3xl">
    <p className="mb-8 text-slate-600 dark:text-slate-400">Use dotted separators for softer visual boundaries.</p>
    <div className="border-t-2 border-dotted border-slate-300 dark:border-slate-700" />
  </div>
</section>`;

  const dashedDividerReactSnippet = `<section className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-900">
  <div className="mx-auto max-w-3xl">
    <p className="mb-8 text-slate-600 dark:text-slate-400">Dashed dividers provide a subtle decorative touch.</p>
    <div className="border-t-2 border-dashed border-slate-400 dark:border-slate-600" />
  </div>
</section>`;

  const iconCenteredDividerReactSnippet = `<section className="rounded-lg bg-white px-6 py-16 sm:px-8 dark:bg-slate-950">
  <div className="mx-auto max-w-3xl">
    <p className="mb-8 text-slate-600 dark:text-slate-400">Center an icon in the divider to call attention to section breaks.</p>
    <div className="flex items-center">
      <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
      <div className="mx-4 rounded-full border border-slate-300 px-3 py-1 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-300">*</div>
      <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
    </div>
  </div>
</section>`;

  const textCenteredDividerReactSnippet = `<section className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-900">
  <div className="mx-auto max-w-3xl">
    <p className="mb-8 text-slate-600 dark:text-slate-400">Place a short label in the center for contextual separation.</p>
    <div className="flex items-center">
      <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
      <span className="mx-4 text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">Next Section</span>
      <div className="h-px flex-1 bg-slate-300 dark:bg-slate-700" />
    </div>
  </div>
</section>`;

  const gradientDividerReactSnippet = `<section className="rounded-lg bg-white px-6 py-16 sm:px-8 dark:bg-slate-950">
  <div className="mx-auto max-w-3xl">
    <p className="mb-8 text-slate-600 dark:text-slate-400">Gradient lines add color and emphasis to transitions.</p>
    <div className="h-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600" />
  </div>
</section>`;

  const thickDividerReactSnippet = `<section className="rounded-lg bg-slate-50 px-6 py-16 sm:px-8 dark:bg-slate-900">
  <div className="mx-auto max-w-3xl">
    <p className="mb-8 text-slate-600 dark:text-slate-400">Thick dividers create strong content boundaries.</p>
    <div className="h-2 rounded-full bg-slate-800 dark:bg-slate-200" />
  </div>
</section>`;

  const animatedDividerReactSnippet = `<section className="rounded-lg bg-white px-6 py-16 sm:px-8 dark:bg-slate-950">
  <div className="mx-auto max-w-3xl">
    <p className="mb-8 text-slate-600 dark:text-slate-400">Animated-style bars can suggest movement and progression.</p>
    <div className="relative h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
      <div className="absolute left-0 top-0 h-1 w-1/2 rounded-full bg-blue-600" />
    </div>
  </div>
</section>`;

  return (
    <>
      <Navigation />
      <Hero
        title="Dividers Sections"
        subtitle="Beautiful divider and separator blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Simple Horizontal Line Divider */}
          <div className="relative">
            <SectionDivider title="Simple Horizontal Line">
              <CopySnippetButtons
                sectionRef={sectionRef1}
                reactSnippet={simpleHorizontalLineReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef2}
                reactSnippet={dottedDividerReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef3}
                reactSnippet={dashedDividerReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef4}
                reactSnippet={iconCenteredDividerReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef5}
                reactSnippet={textCenteredDividerReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef6}
                reactSnippet={gradientDividerReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef7}
                reactSnippet={thickDividerReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef8}
                reactSnippet={animatedDividerReactSnippet}
              />
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
