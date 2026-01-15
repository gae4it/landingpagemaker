"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Copy, ArrowRight, Mail, Zap, Shield, Users } from "lucide-react";
import { useRef, type RefObject } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksCallToActionPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);

  const [showCopied, triggerCopied] = useCopyNotification();
  const handleCopy = (ref: RefObject<HTMLElement | null>) => {
    const el = ref.current;
    if (!el) return;
    void navigator.clipboard.writeText(el.outerHTML);
    triggerCopied();
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
        title="Call To Action Sections"
        subtitle="Conversion-focused CTA sections built with shadcn/ui and Tailwind CSS 4. Copy and deploy."
      />

      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* CTA Block 1: Full Width Banner */}
          <div className="relative">
            <SectionDivider title="Full Width CTA Banner">
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
              className="relative bg-neutral-900 py-12 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-white">
                      Ready to get started?
                    </h3>
                    <p className="mt-2 text-neutral-300">
                      Join thousands of developers building with our platform.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-neutral-900 hover:bg-neutral-100">
                      Get started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Block 2: Cards with Icons */}
          <div className="relative">
            <SectionDivider title="CTA Cards Grid">
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
              className="relative bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      icon: Zap,
                      title: "Fast Setup",
                      desc: "Get started in minutes",
                    },
                    {
                      icon: Shield,
                      title: "Secure",
                      desc: "Enterprise-grade security",
                    },
                    {
                      icon: Users,
                      title: "Team Ready",
                      desc: "Built for collaboration",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
                    >
                      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-neutral-100 p-3 dark:bg-neutral-800">
                        <item.icon className="h-6 w-6 text-neutral-900 dark:text-neutral-50" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                        {item.title}
                      </h3>
                      <p className="mb-4 text-neutral-600 dark:text-neutral-400">
                        {item.desc}
                      </p>
                      <button className="inline-flex items-center text-sm font-semibold text-neutral-900 hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-400">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* CTA Block 3: Newsletter Signup */}
          <div className="relative">
            <SectionDivider title="Newsletter CTA">
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
              className="relative bg-white py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
                <Mail className="mx-auto mb-4 h-12 w-12 text-neutral-900 dark:text-neutral-50" />
                <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                  Subscribe to our newsletter
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                  Get the latest updates, articles, and resources delivered
                  weekly to your inbox.
                </p>
                <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-md flex-1 rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-50"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                  We care about your data. Read our{" "}
                  <a
                    href="#"
                    className="underline hover:text-neutral-900 dark:hover:text-neutral-50"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>

          {/* CTA Block 4: Split CTA with Form */}
          <div className="relative">
            <SectionDivider title="Split CTA Section">
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
              className="relative bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                      Start your free trial today
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                      No credit card required. Cancel anytime. Get full access
                      to all features for 14 days.
                    </p>
                    <ul className="mt-8 space-y-4">
                      {[
                        "Unlimited projects",
                        "24/7 support",
                        "Advanced analytics",
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-sm text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50">
                            ✓
                          </span>
                          <span className="text-neutral-700 dark:text-neutral-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950">
                    <h3 className="mb-6 text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                      Create your account
                    </h3>
                    <form className="space-y-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:ring-neutral-50"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Password
                        </label>
                        <input
                          type="password"
                          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:ring-neutral-50"
                          placeholder="••••••••"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-lg bg-neutral-900 px-4 py-2.5 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
                      >
                        Get started free
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Block 5: Gradient Background CTA */}
          <div className="relative">
            <SectionDivider title="Gradient CTA">
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
              className="relative overflow-hidden bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-900 py-20 sm:py-28 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
            >
              <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-white sm:text-5xl">
                  Transform your workflow today
                </h2>
                <p className="mt-6 text-lg text-neutral-300">
                  Join 10,000+ teams already building better products with our
                  platform.
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <button className="rounded-lg bg-white px-8 py-3 font-semibold text-neutral-900 hover:bg-neutral-100">
                    Start free trial
                  </button>
                  <button className="hover:bg-opacity-10 rounded-lg border border-white px-8 py-3 font-semibold text-white hover:bg-white">
                    Schedule demo
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* CTA Block 6: Minimal Text CTA */}
          <div className="relative">
            <SectionDivider title="Minimal CTA">
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
            <section ref={sectionRef6} className="relative py-20 sm:py-28">
              <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-neutral-950 sm:text-5xl dark:text-neutral-50">
                  Ready when you are
                </h2>
                <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400">
                  Start building today. No credit card required.
                </p>
                <div className="mt-10">
                  <button className="inline-flex items-center text-lg font-semibold text-neutral-900 hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-400">
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5" />
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
