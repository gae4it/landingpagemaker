"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  Award,
  CheckCircle,
  Users,
  TrendingUp,
  Star,
} from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksPartnerPage() {
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
        title="Partner Sections"
        subtitle="Beautiful partner blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Partner Logos Grid */}
          <div className="relative">
            <SectionDivider title="Partner Logos Grid">
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
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Our Partners
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Trusted by leading companies around the world
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center p-4 rounded-lg bg-white dark:bg-slate-800 hover:shadow-lg dark:hover:shadow-xl transition-shadow"
                    >
                      <div className="text-slate-400 dark:text-slate-500 text-2xl font-bold">
                        Partner {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 2: Partner Testimonials */}
          <div className="relative">
            <SectionDivider title="Partner Testimonials">
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
              className="bg-white dark:bg-slate-950 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    What Our Partners Say
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Hear from the leaders in our partner network
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800"
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={18}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-6">
                        "This partnership has been transformative for our business. The support and collaboration exceeded our expectations."
                      </p>
                      <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-full bg-blue-200 dark:bg-blue-900"></div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">
                            Partner Name
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Company Title
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 3: Partner Tiers/Levels */}
          <div className="relative">
            <SectionDivider title="Partner Tiers/Levels">
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
              className="bg-slate-900 dark:bg-slate-950 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Partnership Tiers
                  </h2>
                  <p className="text-lg text-slate-400">
                    Choose the right partnership level for your business
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Gold */}
                  <div className="bg-linear-to-b from-amber-50 to-white dark:from-amber-900 dark:to-slate-800 rounded-lg p-8 border-2 border-amber-400 dark:border-amber-600">
                    <div className="flex items-center gap-2 mb-4">
                      <Award size={24} className="text-amber-600 dark:text-amber-400" />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Gold
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      Premium partnership with dedicated support
                    </p>
                    <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
                        Dedicated Account Manager
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
                        Co-marketing opportunities
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-amber-600 dark:text-amber-400 shrink-0" />
                        Priority support
                      </li>
                    </ul>
                  </div>

                  {/* Silver */}
                  <div className="bg-linear-to-b from-gray-100 to-white dark:from-gray-700 dark:to-slate-800 rounded-lg p-8 border-2 border-gray-400 dark:border-gray-600">
                    <div className="flex items-center gap-2 mb-4">
                      <Award size={24} className="text-gray-600 dark:text-gray-400" />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Silver
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      Mid-tier partnership with strong support
                    </p>
                    <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-gray-600 dark:text-gray-400 shrink-0" />
                        Monthly check-ins
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-gray-600 dark:text-gray-400 shrink-0" />
                        Marketing resources
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-gray-600 dark:text-gray-400 shrink-0" />
                        Standard support
                      </li>
                    </ul>
                  </div>

                  {/* Bronze */}
                  <div className="bg-linear-to-b from-orange-50 to-white dark:from-orange-900 dark:to-slate-800 rounded-lg p-8 border-2 border-orange-400 dark:border-orange-600">
                    <div className="flex items-center gap-2 mb-4">
                      <Award size={24} className="text-orange-600 dark:text-orange-400" />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Bronze
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                      Entry-level partnership for growing businesses
                    </p>
                    <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-orange-600 dark:text-orange-400 shrink-0" />
                        Quarterly reviews
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-orange-600 dark:text-orange-400 shrink-0" />
                        Partner portal access
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle size={18} className="text-orange-600 dark:text-orange-400 shrink-0" />
                        Community support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 4: Partner Benefits */}
          <div className="relative">
            <SectionDivider title="Partner Benefits">
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
              className="bg-white dark:bg-slate-950 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Partner Benefits & Advantages
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Everything you need to grow your business with us
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Revenue Growth",
                      description: "Unlock new revenue streams with our partnership programs",
                    },
                    {
                      icon: Users,
                      title: "Access to Network",
                      description: "Connect with thousands of partners in our ecosystem",
                    },
                    {
                      icon: Award,
                      title: "Recognition",
                      description: "Gain visibility and brand recognition in the industry",
                    },
                    {
                      icon: CheckCircle,
                      title: "Training & Resources",
                      description: "Comprehensive training programs and marketing materials",
                    },
                    {
                      icon: Star,
                      title: "Exclusive Benefits",
                      description: "Access special offers and exclusive partnership perks",
                    },
                    {
                      icon: Users,
                      title: "Dedicated Support",
                      description: "Get personalized support from our partnership team",
                    },
                  ].map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={i}
                        className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800 hover:shadow-lg dark:hover:shadow-xl transition-shadow"
                      >
                        <Icon size={32} className="text-blue-600 dark:text-blue-400 mb-4" />
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {benefit.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 5: Partner Comparison */}
          <div className="relative">
            <SectionDivider title="Partner Comparison">
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
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Partner Comparison
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Compare features across partnership tiers
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="text-left py-4 px-4 font-semibold text-slate-900 dark:text-white">
                          Feature
                        </th>
                        <th className="text-center py-4 px-4 font-semibold text-slate-900 dark:text-white">
                          Bronze
                        </th>
                        <th className="text-center py-4 px-4 font-semibold text-slate-900 dark:text-white">
                          Silver
                        </th>
                        <th className="text-center py-4 px-4 font-semibold text-slate-900 dark:text-white">
                          Gold
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: "Partner Portal Access", bronze: true, silver: true, gold: true },
                        { feature: "Marketing Support", bronze: false, silver: true, gold: true },
                        { feature: "Dedicated Account Manager", bronze: false, silver: false, gold: true },
                        { feature: "Co-branding Opportunities", bronze: false, silver: true, gold: true },
                        { feature: "Priority Support", bronze: false, silver: false, gold: true },
                        { feature: "Revenue Share Program", bronze: true, silver: true, gold: true },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-slate-200 dark:border-slate-800"
                        >
                          <td className="py-4 px-4 text-slate-700 dark:text-slate-300">
                            {row.feature}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {row.bronze ? (
                              <CheckCircle size={20} className="mx-auto text-green-600 dark:text-green-400" />
                            ) : (
                              <div className="mx-auto w-5 h-5 border-2 border-slate-300 dark:border-slate-600"></div>
                            )}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {row.silver ? (
                              <CheckCircle size={20} className="mx-auto text-green-600 dark:text-green-400" />
                            ) : (
                              <div className="mx-auto w-5 h-5 border-2 border-slate-300 dark:border-slate-600"></div>
                            )}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {row.gold ? (
                              <CheckCircle size={20} className="mx-auto text-green-600 dark:text-green-400" />
                            ) : (
                              <div className="mx-auto w-5 h-5 border-2 border-slate-300 dark:border-slate-600"></div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 6: Featured Partners */}
          <div className="relative">
            <SectionDivider title="Featured Partners">
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
              className="bg-white dark:bg-slate-950 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    Featured Partners
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Spotlight on our key strategic partners
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[...Array(2)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700"
                    >
                      <div className="h-48 bg-linear-to-r from-blue-400 to-purple-400"></div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          Featured Partner {i + 1}
                        </h3>
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              size={18}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                          Learn how this partner leveraged our platform to achieve remarkable growth and drive innovation in their industry.
                        </p>
                        <a
                          href="#"
                          className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                        >
                          Read their story →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 7: Partner Network */}
          <div className="relative">
            <SectionDivider title="Partner Network">
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
              className="bg-slate-900 dark:bg-slate-950 py-16"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-white mb-4">
                    Our Partner Network
                  </h2>
                  <p className="text-lg text-slate-400">
                    Connected ecosystem of leading technology partners
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Technology Partners */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users size={40} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Technology Partners
                    </h3>
                    <p className="text-slate-400 mb-4">
                      120+ integration partners
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Explore
                    </a>
                  </div>

                  {/* Reseller Partners */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp size={40} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Reseller Partners
                    </h3>
                    <p className="text-slate-400 mb-4">
                      250+ reseller partners
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Explore
                    </a>
                  </div>

                  {/* Channel Partners */}
                  <div className="text-center">
                    <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award size={40} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      Channel Partners
                    </h3>
                    <p className="text-slate-400 mb-4">
                      85+ channel partners
                    </p>
                    <a
                      href="#"
                      className="inline-block bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 8: Partner CTA */}
          <div className="relative">
            <SectionDivider title="Partner CTA (Call-to-Action)">
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
              className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 py-16"
            >
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ready to Become a Partner?
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                  Join our growing partner network and unlock new opportunities for growth and innovation together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                    Start Partnership Application
                  </button>
                  <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">500+</div>
                    <p className="text-blue-100">Active Partners</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">$50M+</div>
                    <p className="text-blue-100">Combined Revenue</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-2">150+</div>
                    <p className="text-blue-100">Countries</p>
                  </div>
                </div>
                <p className="text-sm text-blue-100 mt-8">
                  Have questions? Contact our partnership team at{" "}
                  <a
                    href="mailto:partners@company.com"
                    className="underline hover:text-white"
                  >
                    partners@company.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
