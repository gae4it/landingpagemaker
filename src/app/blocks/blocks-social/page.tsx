"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  Heart,
  Share2,
  MessageCircle,
  Users,
  TrendingUp,
  Award,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksSocialPage() {
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
        title="Social Blocks"
        subtitle="Beautiful social engagement blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Share Buttons */}
          <div className="relative">
            <SectionDivider title="Share Buttons (Facebook, Twitter, LinkedIn)">
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
              className="bg-slate-50 py-12 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Share This Article
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Share this content with your network
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                    <Facebook size={20} />
                    Share on Facebook
                  </button>
                  <button className="flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 font-medium text-white transition-colors hover:bg-sky-600">
                    <Twitter size={20} />
                    Share on Twitter
                  </button>
                  <button className="flex items-center gap-2 rounded-lg bg-blue-700 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-800">
                    <Linkedin size={20} />
                    Share on LinkedIn
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 2: Follow Button States */}
          <div className="relative">
            <SectionDivider title="Follow Button (Follow/Following/Unfollow States)">
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
              className="bg-slate-50 py-12 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Follow States
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Different button states for follow interactions
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700">
                    Follow
                  </button>
                  <button className="rounded-lg bg-slate-200 px-6 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">
                    Following
                  </button>
                  <button className="rounded-lg border-2 border-slate-300 px-6 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800">
                    Unfollow
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 3: Social Feed Grid */}
          <div className="relative">
            <SectionDivider title="Social Feed Grid (Post Cards with Likes)">
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
              className="bg-slate-50 py-12 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Social Feed
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Latest posts from the community
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[1, 2, 3].map((post) => (
                    <div
                      key={post}
                      className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            @user{post}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            2 hours ago
                          </p>
                        </div>
                      </div>
                      <p className="mb-4 text-slate-700 dark:text-slate-300">
                        Just launched our new product! Excited to share it with
                        everyone.
                      </p>
                      <div className="flex items-center gap-6 border-t border-slate-200 pt-4 text-slate-600 dark:border-slate-700 dark:text-slate-400">
                        <button className="flex items-center gap-2 transition-colors hover:text-red-500">
                          <Heart size={18} />
                          <span className="text-sm">234</span>
                        </button>
                        <button className="flex items-center gap-2 transition-colors hover:text-blue-500">
                          <MessageCircle size={18} />
                          <span className="text-sm">45</span>
                        </button>
                        <button className="flex items-center gap-2 transition-colors hover:text-green-500">
                          <Share2 size={18} />
                          <span className="text-sm">12</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 4: Social Proof Numbers */}
          <div className="relative">
            <SectionDivider title="Social Proof Numbers (Followers Counter)">
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
              className="bg-linear-to-r from-slate-50 to-slate-100 py-12 dark:from-slate-900 dark:to-slate-800"
            >
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Our Community
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Join thousands of satisfied users
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  <div className="rounded-lg bg-white p-6 text-center dark:bg-slate-800">
                    <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">
                      125K
                    </div>
                    <p className="font-medium text-slate-600 dark:text-slate-300">
                      Followers
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 text-center dark:bg-slate-800">
                    <div className="mb-2 text-3xl font-bold text-purple-600 dark:text-purple-400">
                      89K
                    </div>
                    <p className="font-medium text-slate-600 dark:text-slate-300">
                      Engagement
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 text-center dark:bg-slate-800">
                    <div className="mb-2 text-3xl font-bold text-pink-600 dark:text-pink-400">
                      45K
                    </div>
                    <p className="font-medium text-slate-600 dark:text-slate-300">
                      Likes
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 text-center dark:bg-slate-800">
                    <div className="mb-2 text-3xl font-bold text-green-600 dark:text-green-400">
                      12K
                    </div>
                    <p className="font-medium text-slate-600 dark:text-slate-300">
                      Shares
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 5: Social Reviews/Testimonials */}
          <div className="relative">
            <SectionDivider title="Social Reviews/Testimonials (Avatar + Stars + Quote)">
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
              className="bg-slate-50 py-12 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                    User Reviews
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    What our community says about us
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[1, 2].map((review) => (
                    <div
                      key={review}
                      className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            Sarah Johnson
                          </p>
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i} className="text-yellow-400">
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-700 italic dark:text-slate-300">
                        &quot;This product has completely transformed how I
                        work. The interface is intuitive and the support team is
                        amazing!&quot;
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 6: Influencer Showcase */}
          <div className="relative">
            <SectionDivider title="Influencer Showcase (Avatar, Name, Followers, Follow Btn)">
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
              className="bg-slate-50 py-12 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Featured Creators
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Follow our top influencers and content creators
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                  {[1, 2, 3].map((influencer) => (
                    <div
                      key={influencer}
                      className="rounded-lg bg-white p-8 text-center shadow-md dark:bg-slate-800"
                    >
                      <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                      <h4 className="mb-1 text-lg font-bold text-slate-900 dark:text-white">
                        Creator {influencer}
                      </h4>
                      <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">
                        Content Creator
                      </p>
                      <p className="mb-4 font-semibold text-slate-600 dark:text-slate-300">
                        {125 + influencer * 10}K Followers
                      </p>
                      <button className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 7: Social Stats */}
          <div className="relative">
            <SectionDivider title="Social Stats (Engagement Metrics Grid)">
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
              className="bg-linear-to-r from-slate-50 to-slate-100 py-12 dark:from-slate-900 dark:to-slate-800"
            >
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                  <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                    Engagement Metrics
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Track your social media performance
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
                        <Heart className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Likes
                      </h4>
                    </div>
                    <p className="mb-1 text-2xl font-bold text-slate-900 dark:text-white">
                      2,458
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      +12% from last week
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-lg bg-purple-100 p-3 dark:bg-purple-900">
                        <MessageCircle className="text-purple-600 dark:text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Comments
                      </h4>
                    </div>
                    <p className="mb-1 text-2xl font-bold text-slate-900 dark:text-white">
                      856
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      +8% from last week
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-lg bg-green-100 p-3 dark:bg-green-900">
                        <Share2 className="text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Shares
                      </h4>
                    </div>
                    <p className="mb-1 text-2xl font-bold text-slate-900 dark:text-white">
                      432
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      +5% from last week
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="rounded-lg bg-pink-100 p-3 dark:bg-pink-900">
                        <TrendingUp className="text-pink-600 dark:text-pink-400" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Reach
                      </h4>
                    </div>
                    <p className="mb-1 text-2xl font-bold text-slate-900 dark:text-white">
                      45.2K
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      +23% from last week
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 8: Social CTA */}
          <div className="relative">
            <SectionDivider title="Social CTA (Follow + Newsletter)">
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
              className="bg-linear-to-r from-slate-900 to-slate-800 py-12 text-white dark:from-slate-950 dark:to-slate-900"
            >
              <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <div className="mb-6 flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-slate-600"></div>
                </div>
                <h3 className="mb-3 text-3xl font-bold">Stay Connected</h3>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
                  Follow us on social media and subscribe to our newsletter for
                  the latest updates, tips, and exclusive content.
                </p>
                <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 font-medium transition-colors hover:bg-blue-700">
                    <Users size={20} />
                    Follow Us
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-lg bg-slate-700 px-8 py-3 font-medium transition-colors hover:bg-slate-600">
                    <Award size={20} />
                    Join Newsletter
                  </button>
                </div>
                <div className="flex justify-center gap-6 text-slate-400">
                  <a href="#" className="transition-colors hover:text-white">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="transition-colors hover:text-white">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="transition-colors hover:text-white">
                    <Linkedin size={24} />
                  </a>
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
