"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Grid3X3, Columns3, BarChart3 } from "lucide-react";
import { useRef } from "react";
import CopySnippetButtons from "@/components/CopySnippetButtons";
import SectionDivider from "@/components/SectionDivider";

export default function BlocksColumnsPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);

  const twoColEqualReactSnippet = `<section className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    <div className="rounded-lg bg-white p-8 shadow dark:bg-slate-800">
      <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Column One</h3>
      <p className="mb-4 text-slate-600 dark:text-slate-300">
        Your content here. Each column is equal width and fully responsive.
      </p>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <li>✓ Feature one</li>
        <li>✓ Feature two</li>
        <li>✓ Feature three</li>
      </ul>
    </div>
    <div className="rounded-lg bg-white p-8 shadow dark:bg-slate-800">
      <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Column Two</h3>
      <p className="mb-4 text-slate-600 dark:text-slate-300">
        Add your content here. The layout adapts seamlessly on all screen sizes.
      </p>
      <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <li>✓ Benefit one</li>
        <li>✓ Benefit two</li>
        <li>✓ Benefit three</li>
      </ul>
    </div>
  </div>
</section>`;

  const threeColEqualReactSnippet = `<section className="rounded-lg bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {[1, 2, 3].map((i) => (
      <div key={i} className="rounded-lg bg-slate-50 p-6 text-center dark:bg-slate-900">
        <Grid3X3 className="mx-auto mb-4 text-blue-600" size={32} />
        <h3 className="mb-2 font-bold text-slate-900 dark:text-white">Column {i}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Add your content here. Each column is equal width and responsive.
        </p>
      </div>
    ))}
  </div>
</section>`;

  const fourColGridReactSnippet = `<section className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-lg dark:bg-slate-800">
        <h4 className="mb-3 font-bold text-slate-900 dark:text-white">Item {i}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Perfect for showcasing products, team members, or services.
        </p>
      </div>
    ))}
  </div>
</section>`;

  const sidebarMainReactSnippet = `<section className="rounded-lg bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
    <aside className="md:col-span-1">
      <div className="sticky top-20 rounded-lg bg-slate-100 p-6 dark:bg-slate-900">
        <h4 className="mb-4 font-bold text-slate-900 dark:text-white">Navigation</h4>
        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Section 1</a></li>
          <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Section 2</a></li>
          <li><a href="#" className="hover:text-slate-900 dark:hover:text-white">Section 3</a></li>
        </ul>
      </div>
    </aside>
    <main className="md:col-span-3">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Main Content</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-300">
        This is the main content area. The sidebar on the left remains sticky as you scroll.
        Perfect for documentation, blogs, or help pages.
      </p>
    </main>
  </div>
</section>`;

  const unevenColumnsReactSnippet = `<section className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
    <div className="rounded-lg bg-blue-100 p-8 text-center dark:bg-blue-900/20">
      <Columns3 className="mx-auto mb-4 text-blue-600" size={40} />
      <p className="text-slate-600 dark:text-slate-300">Narrow Column</p>
    </div>
    <div className="rounded-lg bg-white p-8 md:col-span-2 dark:bg-slate-800">
      <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Wide Column</h3>
      <p className="mb-4 text-slate-600 dark:text-slate-300">
        This column takes up twice as much space. Perfect for featuring main content with a supporting sidebar.
      </p>
      <p className="text-slate-600 dark:text-slate-300">
        Use the 1:2 or 2:1 ratio for different layouts.
      </p>
    </div>
  </div>
</section>`;

  const overlappingColumnsReactSnippet = `<section className="relative rounded-lg bg-slate-100 py-16 dark:bg-slate-900">
  <div className="mx-auto max-w-6xl px-4">
    <div className="relative">
      <div className="mb-8 rounded-lg bg-blue-600 p-12 text-white">
        <h3 className="text-3xl font-bold">Featured Section</h3>
        <p className="mt-2 text-blue-100">Highlight your most important content here</p>
      </div>
      <div className="relative z-10 -mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800">
            <h4 className="mb-2 font-bold text-slate-900 dark:text-white">Card {i}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              These cards overlap the section above for visual interest.
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>`;

  const masonryReactSnippet = `<section className="rounded-lg bg-white py-16 dark:bg-slate-950">
  <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div key={i} className="mb-6 break-inside-avoid rounded-lg bg-slate-100 p-6 dark:bg-slate-900">
        <div className="mb-4 flex h-32 items-center justify-center rounded bg-blue-200 dark:bg-blue-900">
          <span className="text-slate-500">Image {i}</span>
        </div>
        <h4 className="mb-2 font-bold text-slate-900 dark:text-white">Item {i}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          {i % 2 === 0 ? "Longer description for this item" : "Short description"}
        </p>
      </div>
    ))}
  </div>
</section>`;

  const autoColumnsReactSnippet = `<section className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid auto-rows-max grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <div key={i} className="rounded-lg bg-white p-6 text-center shadow dark:bg-slate-800">
        <BarChart3 className="mx-auto mb-3 text-blue-600" size={24} />
        <h5 className="text-sm font-semibold text-slate-900 dark:text-white">Item {i}</h5>
      </div>
    ))}
  </div>
</section>`;

  return (
    <>
      <Navigation />
      <Hero
        title="Columns Sections"
        subtitle="Columns blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: 2 Columns Equal */}
          <div className="relative">
            <SectionDivider title="2 Columns Equal">
              <CopySnippetButtons
                sectionRef={sectionRef1}
                reactSnippet={twoColEqualReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef1}
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-lg bg-white p-8 shadow dark:bg-slate-800">
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                    Column One
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    <li>✓ Feature one</li>
                    <li>✓ Feature two</li>
                    <li>✓ Feature three</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white p-8 shadow dark:bg-slate-800">
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                    Column Two
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-300">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
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
              <CopySnippetButtons
                sectionRef={sectionRef2}
                reactSnippet={threeColEqualReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef2}
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-slate-50 p-6 text-center dark:bg-slate-900"
                  >
                    <Grid3X3 className="mx-auto mb-4 text-blue-600" size={32} />
                    <h3 className="mb-2 font-bold text-slate-900 dark:text-white">
                      Column {i}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
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
              <CopySnippetButtons
                sectionRef={sectionRef3}
                reactSnippet={fourColGridReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef3}
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-white p-6 shadow transition-shadow hover:shadow-lg dark:bg-slate-800"
                  >
                    <h4 className="mb-3 font-bold text-slate-900 dark:text-white">
                      Item {i}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Perfect for showcasing products, team members, or
                      services.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 4: Sidebar + Main */}
          <div className="relative">
            <SectionDivider title="Sidebar + Main">
              <CopySnippetButtons
                sectionRef={sectionRef4}
                reactSnippet={sidebarMainReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef4}
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <aside className="md:col-span-1">
                  <div className="sticky top-20 rounded-lg bg-slate-100 p-6 dark:bg-slate-900">
                    <h4 className="mb-4 font-bold text-slate-900 dark:text-white">
                      Navigation
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                      <li>
                        <a
                          href="#"
                          className="hover:text-slate-900 dark:hover:text-white"
                        >
                          Section 1
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-slate-900 dark:hover:text-white"
                        >
                          Section 2
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-slate-900 dark:hover:text-white"
                        >
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
              <CopySnippetButtons
                sectionRef={sectionRef5}
                reactSnippet={unevenColumnsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef5}
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-3">
                <div className="rounded-lg bg-blue-100 p-8 text-center dark:bg-blue-900/20">
                  <Columns3 className="mx-auto mb-4 text-blue-600" size={40} />
                  <p className="text-slate-600 dark:text-slate-300">
                    Narrow Column
                  </p>
                </div>
                <div className="rounded-lg bg-white p-8 md:col-span-2 dark:bg-slate-800">
                  <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                    Wide Column
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-300">
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
              <CopySnippetButtons
                sectionRef={sectionRef6}
                reactSnippet={overlappingColumnsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef6}
              className="relative rounded-lg bg-slate-100 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-6xl px-4">
                <div className="relative">
                  <div className="mb-8 rounded-lg bg-blue-600 p-12 text-white">
                    <h3 className="text-3xl font-bold">Featured Section</h3>
                    <p className="mt-2 text-blue-100">
                      Highlight your most important content here
                    </p>
                  </div>
                  <div className="relative z-10 -mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-lg bg-white p-6 shadow-lg dark:bg-slate-800"
                      >
                        <h4 className="mb-2 font-bold text-slate-900 dark:text-white">
                          Card {i}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
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
              <CopySnippetButtons
                sectionRef={sectionRef7}
                reactSnippet={masonryReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef7}
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="columns-1 gap-6 md:columns-2 lg:columns-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="mb-6 break-inside-avoid rounded-lg bg-slate-100 p-6 dark:bg-slate-900"
                  >
                    <div className="mb-4 flex h-32 items-center justify-center rounded bg-blue-200 dark:bg-blue-900">
                      <span className="text-slate-500">Image {i}</span>
                    </div>
                    <h4 className="mb-2 font-bold text-slate-900 dark:text-white">
                      Item {i}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
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
              <CopySnippetButtons
                sectionRef={sectionRef8}
                reactSnippet={autoColumnsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef8}
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="grid auto-rows-max grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-white p-6 text-center shadow dark:bg-slate-800"
                  >
                    <BarChart3
                      className="mx-auto mb-3 text-blue-600"
                      size={24}
                    />
                    <h5 className="text-sm font-semibold text-slate-900 dark:text-white">
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
