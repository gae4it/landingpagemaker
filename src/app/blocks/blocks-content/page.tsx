"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  BookOpen,
  Lightbulb,
  Quote,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useRef } from "react";
import CopySnippetButtons from "@/components/CopySnippetButtons";
import SectionDivider from "@/components/SectionDivider";

export default function BlocksContentPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);

  const textImageLeftReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
    <div className="rounded-xl bg-slate-100 dark:bg-slate-800" style={{ height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span className="text-slate-400">Image placeholder</span>
    </div>
    <div>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Content with image left</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Pair your written content with an image on the left for visual balance. Great for product showcases and feature explanations.
      </p>
      <a href="#" className="mt-6 inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-400">
        Learn more <ArrowRight size={16} />
      </a>
    </div>
  </div>
</section>`;

  const textImageRightReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
    <div>
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Content with image right</h2>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        Place the image on the right side for a different reading flow. Mix and match left/right layouts to create visual rhythm.
      </p>
      <ul className="mt-6 space-y-2 text-slate-600 dark:text-slate-400">
        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Feature one</li>
        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Feature two</li>
        <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Feature three</li>
      </ul>
    </div>
    <div className="rounded-xl bg-slate-200 dark:bg-slate-700" style={{ height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span className="text-slate-400">Image placeholder</span>
    </div>
  </div>
</section>`;

  const fullWidthContentReactSnippet = `<section className="bg-white py-20 dark:bg-slate-950">
  <div className="mx-auto max-w-3xl px-4 text-center">
    <BookOpen className="mx-auto mb-6 text-blue-600" size={40} />
    <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Full-Width Content</h2>
    <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
      Use full-width layouts for focused reading experiences. Ideal for blog posts, articles, and long-form content. Keep the max-width constrained for readability.
    </p>
    <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
      Great typography and spacing make content easy to consume. Use generous line-height and comfortable font sizes for the best reading experience.
    </p>
    <button className="mt-8 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
      Read more
    </button>
  </div>
</section>`;

  const blockquoteReactSnippet = `<section className="bg-slate-50 py-20 dark:bg-slate-900">
  <div className="mx-auto max-w-3xl px-4">
    <div className="rounded-xl border-l-4 border-blue-600 bg-white p-8 shadow dark:bg-slate-800">
      <Quote className="mb-4 text-blue-600" size={32} />
      <blockquote className="text-xl font-medium italic text-slate-700 dark:text-slate-200">
        "Great design is not just what it looks like; it is how it works. Every element should serve a purpose and deliver clear value to the user."
      </blockquote>
      <footer className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-600" />
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">Jane Smith</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">CEO at Company Inc.</p>
        </div>
      </footer>
    </div>
  </div>
</section>`;

  const multiColTextReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="mx-auto max-w-5xl px-4">
    <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">Multi-Column Text</h2>
    <div className="columns-1 gap-10 text-slate-600 md:columns-2 lg:columns-3 dark:text-slate-400">
      <p className="mb-4 break-inside-avoid">
        The first column contains introductory text. Multi-column layouts work great for magazine-style content, articles, and text-heavy sections.
      </p>
      <p className="mb-4 break-inside-avoid">
        The second column continues the flow. CSS Columns automatically balance text across all columns for a polished, professional look.
      </p>
      <p className="mb-4 break-inside-avoid">
        The third column completes the layout. Adjust the number of columns based on your content and screen size requirements.
      </p>
    </div>
  </div>
</section>`;

  const calloutBoxReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="mx-auto max-w-3xl px-4">
    <div className="rounded-xl bg-blue-50 p-8 dark:bg-blue-900/20">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <Lightbulb size={20} />
        </div>
        <div>
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">Pro Tip</h3>
          <p className="mt-2 text-blue-800 dark:text-blue-200">
            Use callout boxes to highlight important information, warnings, or tips. They catch the reader's eye and break up long blocks of body text.
          </p>
          <a href="#" className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
            Learn more →
          </a>
        </div>
      </div>
    </div>
  </div>
</section>`;

  const textHighlightReactSnippet = `<section className="bg-white py-20 dark:bg-slate-950">
  <div className="mx-auto max-w-3xl px-4">
    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Highlighted Content</h2>
    <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
      Use{" "}
      <mark className="rounded bg-yellow-200 px-1 text-slate-900 dark:bg-yellow-700 dark:text-white">
        highlighted text
      </mark>{" "}
      to draw attention to key phrases. You can also use{" "}
      <strong className="text-slate-900 dark:text-white">bold text</strong> or{" "}
      <em className="text-blue-600 dark:text-blue-400">emphasized italic</em> for variety.
    </p>
    <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
      Combine different text treatments to create visual hierarchy and guide the reader toward the most important information in your content.
    </p>
  </div>
</section>`;

  const sideBySideReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
    <div className="rounded-xl bg-white p-8 shadow dark:bg-slate-800">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Before</h3>
      <p className="mt-3 text-slate-600 dark:text-slate-400">
        Old approach: manual processes, scattered tools, and slow workflows that drain your team's productivity.
      </p>
      <ul className="mt-4 space-y-1 text-sm text-red-500">
        <li>✗ Time-consuming manual tasks</li>
        <li>✗ Disconnected tools</li>
        <li>✗ Hard to track progress</li>
      </ul>
    </div>
    <div className="rounded-xl bg-blue-600 p-8 text-white shadow">
      <h3 className="text-xl font-bold">After</h3>
      <p className="mt-3 text-blue-100">
        New approach: automated workflows, integrated tools, and streamlined processes that save hours every week.
      </p>
      <ul className="mt-4 space-y-1 text-sm text-blue-200">
        <li>✓ Automated workflows</li>
        <li>✓ Unified platform</li>
        <li>✓ Real-time visibility</li>
      </ul>
    </div>
  </div>
</section>`;

  return (
    <>
      <Navigation />
      <Hero
        title="Content Sections"
        subtitle="Beautiful content blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Text + Image Left */}
          <div className="relative">
            <SectionDivider title="Text + Image Left">
              <CopySnippetButtons
                sectionRef={sectionRef1}
                reactSnippet={textImageLeftReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef2}
                reactSnippet={textImageRightReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef3}
                reactSnippet={fullWidthContentReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef4}
                reactSnippet={blockquoteReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef5}
                reactSnippet={multiColTextReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef6}
                reactSnippet={calloutBoxReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef7}
                reactSnippet={textHighlightReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef8}
                reactSnippet={sideBySideReactSnippet}
              />
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
