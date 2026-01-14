"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Copy, Grid3X3, Columns3, Layout, BarChart3 } from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksColumnsPage() {
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
        title="Columns Sections"
        subtitle="Columns blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: 2 Columns Equal */}
          <div className="relative">
            <SectionDivider title="2 Columns Equal">
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
              className="bg-slate-50 dark:bg-slate-900 py-16 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Column One
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                    <li>✓ Feature one</li>
                    <li>✓ Feature two</li>
                    <li>✓ Feature three</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Column Two
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                    <li>✓ Benefit one</li>
                    <li>✓ Benefit two</li>
                    <li>✓ Benefit three</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 2: 3 Columns Equal */}
          <div className="relative">
            <SectionDivider title="3 Columns Equal">
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
              className="bg-white dark:bg-slate-950 py-16 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg text-center"
                  >
                    <Grid3X3
                      className="mx-auto mb-4 text-blue-600"
                      size={32}
                    />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      Column {i}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Add your content here. Each column is equal width and
                      responsive.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 3: 4 Columns Grid */}
          <div className="relative">
            <SectionDivider title="4 Columns Grid">
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
              className="bg-slate-50 dark:bg-slate-900 py-16 rounded-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
                  >
                    <h4 className="font-bold text-slate-900 dark:text-white mb-3">
                      Item {i}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Perfect for showcasing products, team members, or services.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 4: Sidebar + Main */}
          <div className="relative">
            <SectionDivider title="Sidebar + Main">
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
              className="bg-white dark:bg-slate-950 py-16 rounded-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <aside className="md:col-span-1">
                  <div className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg sticky top-20">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                      Navigation
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white">
                          Section 1
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white">
                          Section 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-slate-900 dark:hover:text-white">
                          Section 3
                        </a>
                      </li>
                    </ul>
                  </div>
                </aside>
                <main className="md:col-span-3">
                  <div className="prose dark:prose-invert max-w-none">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                      Main Content
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300">
                      This is the main content area. The sidebar on the left
                      remains sticky as you scroll. Perfect for documentation,
                      blogs, or help pages.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">
                      Add as much content as you need here. The layout will
                      automatically adjust on mobile devices.
                    </p>
                  </div>
                </main>
              </div>
            </section>
          </div>

          {/* Variant 5: Uneven Columns (1:2) */}
          <div className="relative">
            <SectionDivider title="Uneven Columns (1:2)">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-8 rounded-lg text-center">
                  <Columns3
                    className="mx-auto mb-4 text-blue-600"
                    size={40}
                  />
                  <p className="text-slate-600 dark:text-slate-300">
                    Narrow Column
                  </p>
                </div>
                <div className="md:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Wide Column
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    This column takes up twice as much space. Perfect for
                    featuring main content with a supporting sidebar.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300">
                    You can use the 1:2 or 2:1 ratio for different layouts.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 6: Overlapping Columns */}
          <div className="relative">
            <SectionDivider title="Overlapping Columns">
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
              className="bg-slate-100 dark:bg-slate-900 py-16 rounded-lg relative"
            >
              <div className="max-w-6xl mx-auto px-4">
                <div className="relative">
                  <div className="bg-blue-600 text-white p-12 rounded-lg mb-8">
                    <h3 className="text-3xl font-bold">Featured Section</h3>
                    <p className="mt-2 text-blue-100">
                      Highlight your most important content here
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-6 relative z-10">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg"
                      >
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                          Card {i}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          These cards overlap the section above for visual
                          interest.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 7: Masonry Layout */}
          <div className="relative">
            <SectionDivider title="Masonry Layout">
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
              className="bg-white dark:bg-slate-950 py-16 rounded-lg"
            >
              <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-slate-100 dark:bg-slate-900 p-6 rounded-lg mb-6 break-inside-avoid"
                  >
                    <div className="bg-blue-200 dark:bg-blue-900 h-32 mb-4 rounded flex items-center justify-center">
                      <span className="text-slate-500">Image {i}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                      Item {i}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {i % 2 === 0
                        ? "Longer description for this item"
                        : "Short description"}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 8: Auto Columns */}
          <div className="relative">
            <SectionDivider title="Auto Columns (Responsive)">
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
              className="bg-slate-50 dark:bg-slate-900 py-16 rounded-lg"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-max">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow text-center"
                  >
                    <BarChart3
                      className="mx-auto mb-3 text-blue-600"
                      size={24}
                    />
                    <h5 className="font-semibold text-slate-900 dark:text-white text-sm">
                      Item {i}
                    </h5>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
