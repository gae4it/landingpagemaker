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
      <main className="bg-background min-h-screen py-16">
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
              className="bg-slate-50 dark:bg-slate-900 py-12"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Share This Article
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Share this content with your network
                  </p>
                </div>
                <div className="flex justify-center gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    <Facebook size={20} />
                    Share on Facebook
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-medium transition-colors">
                    <Twitter size={20} />
                    Share on Twitter
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-medium transition-colors">
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
              className="bg-slate-50 dark:bg-slate-900 py-12"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Follow States
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Different button states for follow interactions
                  </p>
                </div>
                <div className="flex justify-center gap-4 flex-wrap">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                    Follow
                  </button>
                  <button className="px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white rounded-lg font-medium transition-colors hover:bg-slate-300 dark:hover:bg-slate-600">
                    Following
                  </button>
                  <button className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
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
              className="bg-slate-50 dark:bg-slate-900 py-12"
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Social Feed
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Latest posts from the community
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((post) => (
                    <div
                      key={post}
                      className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            @user{post}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            2 hours ago
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Just launched our new product! Excited to share it with
                        everyone.
                      </p>
                      <div className="flex items-center gap-6 text-slate-600 dark:text-slate-400 pt-4 border-t border-slate-200 dark:border-slate-700">
                        <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
                          <Heart size={18} />
                          <span className="text-sm">234</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
                          <MessageCircle size={18} />
                          <span className="text-sm">45</span>
                        </button>
                        <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
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
              className="bg-linear-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Our Community
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Join thousands of satisfied users
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      125K
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                      Followers
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      89K
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                      Engagement
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
                      45K
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">
                      Likes
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      12K
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 font-medium">
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
              className="bg-slate-50 dark:bg-slate-900 py-12"
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    User Reviews
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    What our community says about us
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2].map((review) => (
                    <div
                      key={review}
                      className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            Sarah Johnson
                          </p>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-yellow-400">
                                ★
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 italic">
                        "This product has completely transformed how I work. The
                        interface is intuitive and the support team is amazing!"
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
              className="bg-slate-50 dark:bg-slate-900 py-12"
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Featured Creators
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Follow our top influencers and content creators
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((influencer) => (
                    <div
                      key={influencer}
                      className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 text-center"
                    >
                      <div className="w-20 h-20 bg-slate-300 dark:bg-slate-600 rounded-full mx-auto mb-4"></div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        Creator {influencer}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        Content Creator
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 font-semibold mb-4">
                        {125 + influencer * 10}K Followers
                      </p>
                      <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
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
              className="bg-linear-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12"
            >
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Engagement Metrics
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Track your social media performance
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Heart className="text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Likes
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      2,458
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      +12% from last week
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <MessageCircle className="text-purple-600 dark:text-purple-400" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Comments
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      856
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      +8% from last week
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                        <Share2 className="text-green-600 dark:text-green-400" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Shares
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      432
                    </p>
                    <p className="text-sm text-green-600 dark:text-green-400">
                      +5% from last week
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-lg">
                        <TrendingUp className="text-pink-600 dark:text-pink-400" />
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        Reach
                      </h4>
                    </div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
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
              className="bg-linear-to-r from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white py-12"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-slate-600 rounded-full"></div>
                </div>
                <h3 className="text-3xl font-bold mb-3">Stay Connected</h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Follow us on social media and subscribe to our newsletter for
                  the latest updates, tips, and exclusive content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                    <Users size={20} />
                    Follow Us
                  </button>
                  <button className="flex items-center justify-center gap-2 px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-colors">
                    <Award size={20} />
                    Join Newsletter
                  </button>
                </div>
                <div className="flex justify-center gap-6 text-slate-400">
                  <a href="#" className="hover:text-white transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
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
