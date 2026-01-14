"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  Calendar,
  User,
  Tag,
  ArrowRight,
  Heart,
  MessageCircle,
} from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksPostPage() {
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
        title="Post/Blog Sections"
        subtitle="Beautiful blog and post blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Blog Card Grid */}
          <div className="relative">
            <SectionDivider title="Blog Card Grid">
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
              className="bg-slate-50 dark:bg-slate-900 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
                  Latest Articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <article
                      key={i}
                      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="h-48 bg-linear-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600" />
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          Blog Post Title {i}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                          Discover insights about web development and design trends...
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-500 dark:text-slate-400">
                            5 min read
                          </span>
                          <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-1 font-medium">
                            Read More
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 2: Featured Post */}
          <div className="relative">
            <SectionDivider title="Featured Post">
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
              className="bg-white dark:bg-slate-800 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="h-96 bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg" />
                  <div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-bold mb-2">
                      Featured Article
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                      The Future of Web Design
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg mb-6">
                      Explore the emerging trends and technologies shaping the future of web design. From AI-powered interfaces to sustainable web practices, discover what's next.
                    </p>
                    <div className="flex items-center gap-6 mb-8 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>Jan 14, 2026</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span>John Doe</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag size={16} />
                        <span>Design</span>
                      </div>
                    </div>
                    <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium flex items-center gap-2 transition-colors">
                      Read Full Article
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 3: Post Grid with Metadata */}
          <div className="relative">
            <SectionDivider title="Post Grid with Metadata">
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
              className="bg-slate-50 dark:bg-slate-900 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
                  All Posts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <article
                      key={i}
                      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="h-56 bg-linear-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600" />
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>Jan {10 + i}, 2026</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User size={14} />
                            <span>Sarah Smith</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          Understanding React Hooks
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="inline-flex items-center gap-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full">
                            <Tag size={12} />
                            React
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full">
                            <Tag size={12} />
                            JavaScript
                          </span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                          A comprehensive guide to mastering React Hooks and building efficient functional components...
                        </p>
                        <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
                          Read More →
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 4: Post with Excerpt */}
          <div className="relative">
            <SectionDivider title="Post with Excerpt">
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
              className="bg-white dark:bg-slate-800 py-16"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
                  Recent Blog Posts
                </h2>
                <div className="space-y-8">
                  {[1, 2, 3].map((i) => (
                    <article
                      key={i}
                      className="pb-8 border-b border-slate-200 dark:border-slate-700 last:border-b-0"
                    >
                      <div className="flex items-start gap-6">
                        <div className="h-40 w-40 shrink-0 bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-lg" />
                        <div className="flex-1">
                          <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            <Calendar size={14} className="inline mr-2" />
                            Feb {i}, 2026
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                            Mastering CSS Grid Layout
                          </h3>
                          <p className="text-slate-600 dark:text-slate-300 mb-4">
                            Learn how to create responsive layouts using CSS Grid. This comprehensive guide covers everything from basic concepts to advanced techniques for building modern, flexible web designs.
                          </p>
                          <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg font-medium text-sm flex items-center gap-2 transition-colors">
                            Read Full Article
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 5: Post Timeline */}
          <div className="relative">
            <SectionDivider title="Post Timeline">
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
              className="bg-slate-50 dark:bg-slate-900 py-16"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                  Publication Timeline
                </h2>
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-600 to-slate-300 dark:to-slate-600" />
                  <div className="space-y-12">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`flex ${i % 2 === 0 ? "flex-row-reverse" : ""}`}
                      >
                        <div className="w-1/2" />
                        <div className="w-1/2 px-8">
                          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
                            <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-bold mb-2">
                              <Calendar size={14} />
                              {`0${i}/15/2026`}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                              Timeline Post {i}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 text-sm">
                              Explore key milestones and important updates in our blog journey.
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 6: Post Carousel */}
          <div className="relative">
            <SectionDivider title="Post Carousel">
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
              className="bg-white dark:bg-slate-800 py-16 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
                  Latest Posts
                </h2>
                <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <article
                      key={i}
                      className="shrink-0 w-80 bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow snap-start"
                    >
                      <div className="h-48 bg-linear-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600" />
                      <div className="p-6">
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-2">
                          Featured
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                          Post Title {i}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                          Brief description of the blog post content and topic.
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-slate-500 dark:text-slate-400">
                            3 min read
                          </span>
                          <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400">
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 7: Post Categories */}
          <div className="relative">
            <SectionDivider title="Post Categories">
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
              className="bg-slate-50 dark:bg-slate-900 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                  Explore by Category
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  {["Design", "Development", "Business", "Technology"].map(
                    (category) => (
                      <button
                        key={category}
                        className="p-4 bg-white dark:bg-slate-800 rounded-lg text-center hover:shadow-lg transition-shadow cursor-pointer"
                      >
                        <Tag className="mx-auto mb-2" size={24} />
                        <h3 className="font-bold text-slate-900 dark:text-white">
                          {category}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          12 articles
                        </p>
                      </button>
                    )
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <article
                      key={i}
                      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="h-40 bg-linear-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600" />
                      <div className="p-4">
                        <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                          DESIGN
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-2 mb-2">
                          Category Post {i}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          Posts filtered by category...
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 8: Post Subscription */}
          <div className="relative">
            <SectionDivider title="Post Subscription">
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
              className="bg-linear-to-r from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-800 py-16"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Recommended Read
                    </h2>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      The Art of Modern Web Development
                    </h3>
                    <p className="text-blue-100 mb-6">
                      Discover the latest techniques and best practices in modern web development. From responsive design to performance optimization.
                    </p>
                    <div className="flex items-center gap-4 text-blue-100 text-sm mb-6">
                      <div className="flex items-center gap-1">
                        <User size={16} />
                        <span>Alex Johnson</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart size={16} />
                        <span>2.5k likes</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={16} />
                        <span>120 comments</span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-bold transition-colors flex items-center gap-2">
                      Read Article
                      <ArrowRight size={18} />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-6">
                      Subscribe to our newsletter
                    </h3>
                    <form className="space-y-4">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border-0 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-lg border-0 bg-white text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-bold transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="text-blue-100 text-xs mt-4">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </div>
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
