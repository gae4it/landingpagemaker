"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useRef } from "react";
import { Copy } from "lucide-react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksHeroPage() {
  // Refs for each hero section
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);

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
        title="Hero Sections"
        subtitle="Beautiful hero sections built with shadcn/ui and Tailwind CSS 4. Copy, customize, and deploy."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Hero Block 1: Centered Hero with Large Heading */}
          <div className="relative">
            <SectionDivider title="Centered Hero with CTA">
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
              className="relative overflow-hidden bg-linear-to-b from-neutral-50 to-neutral-100 py-24 sm:py-32 dark:from-neutral-950 dark:to-neutral-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <span className="inline-block rounded-full bg-neutral-200 px-4 py-1.5 text-sm font-semibold text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50">
                    Welcome to our platform
                  </span>
                  <h1 className="mt-8 text-4xl font-bold tracking-tight text-neutral-950 sm:text-6xl dark:text-neutral-50">
                    Build something amazing
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                    Create stunning websites with our collection of pre-built,
                    fully customizable sections. All built with Tailwind CSS and
                    shadcn/ui components.
                  </p>
                  <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-8 py-3 text-base font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
                      Get started
                    </button>
                    <button className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-8 py-3 text-base font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-900">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 2: Hero with Image on Right */}
          <div className="relative">
            <SectionDivider title="Hero with Image">
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
              className="relative bg-white py-16 sm:py-24 lg:py-32 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
                  <div>
                    <h2 className="text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl dark:text-neutral-50">
                      The complete solution for modern teams
                    </h2>
                    <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
                      Streamline your workflow and boost productivity with our
                      comprehensive platform. Designed for teams of all sizes.
                    </p>
                    <div className="mt-10 flex gap-4">
                      <button className="rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
                        Start free trial
                      </button>
                      <button className="rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-900">
                        Watch demo
                      </button>
                    </div>
                  </div>
                  <div className="relative h-96 rounded-lg bg-linear-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-700">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-neutral-500 dark:text-neutral-400">
                        Product image
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 3: Hero with Gradient Background */}
          <div className="relative">
            <SectionDivider title="Gradient Hero">
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
              className="relative overflow-hidden bg-linear-to-r from-neutral-900 via-neutral-800 to-neutral-900 py-24 text-white sm:py-32 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <p className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">
                    Introducing features
                  </p>
                  <h1 className="mt-4 text-5xl font-bold sm:text-6xl">
                    Powerful tools for everyone
                  </h1>
                  <p className="mt-6 text-lg text-neutral-300">
                    Everything you need to succeed, from day one to scale.
                  </p>
                  <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <button className="rounded-lg bg-white px-8 py-3 font-semibold text-neutral-900 hover:bg-neutral-100">
                      Start building
                    </button>
                    <button className="rounded-lg border border-neutral-700 px-8 py-3 font-semibold text-white hover:bg-neutral-800">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 4: Hero with Features Grid Below */}
          <div className="relative">
            <SectionDivider title="Hero with Features">
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
              className="relative bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                  <h1 className="text-4xl font-bold text-neutral-950 sm:text-5xl dark:text-neutral-50">
                    Everything you need to get started
                  </h1>
                  <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
                    Powerful features designed to help you succeed
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((feature) => (
                    <div
                      key={feature}
                      className="rounded-lg border border-neutral-200 p-8 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-neutral-800">
                        ✓
                      </div>
                      <h3 className="mt-4 font-semibold text-neutral-950 dark:text-neutral-50">
                        Feature {feature}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 5: Split Layout Hero */}
          <div className="relative">
            <SectionDivider title="Split Layout Hero">
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
              className="relative bg-white py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2 lg:gap-16">
                  <div className="flex flex-col justify-center">
                    <span className="inline-block w-fit rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50">
                      New Release
                    </span>
                    <h2 className="mt-6 text-4xl font-bold text-neutral-950 dark:text-neutral-50">
                      Transform your business
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                      Discover how thousands of companies are already using our
                      platform to drive growth.
                    </p>
                    <ul className="mt-8 space-y-4">
                      {[
                        "Seamless integration",
                        "Real-time analytics",
                        "Enterprise security",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-sm text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50">
                            ✓
                          </span>
                          <span className="text-neutral-700 dark:text-neutral-300">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-10 w-fit rounded-lg bg-neutral-900 px-8 py-3 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
                      Get started now
                    </button>
                  </div>
                  <div className="relative rounded-lg bg-linear-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-neutral-500 dark:text-neutral-400">
                        Feature image
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 6: Minimal Hero */}
          <div className="relative">
            <SectionDivider title="Minimal Hero">
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
            <section ref={sectionRef6} className="relative py-32 sm:py-48">
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                  <p className="text-base font-semibold tracking-wider text-neutral-600 uppercase dark:text-neutral-400">
                    Welcome
                  </p>
                  <h1 className="text-5xl font-bold tracking-tight text-neutral-950 sm:text-7xl dark:text-neutral-50">
                    Less is more
                  </h1>
                  <p className="max-w-2xl text-xl text-neutral-600 dark:text-neutral-400">
                    Clean, minimal design with maximum impact. Perfect for
                    showcasing your work or presenting your vision.
                  </p>
                  <div className="pt-6">
                    <button className="inline-flex items-center gap-2 text-base font-semibold text-neutral-900 hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-400">
                      Explore more →
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 7: Hero with Video/Media Background */}
          <div className="relative">
            <SectionDivider title="Hero with Media Background">
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
              className="relative h-screen min-h-96 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-neutral-900/80 to-neutral-900/50">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22rgba(255,255,255,0.1)%22/%3E%3C/svg%3E")',
                  }}
                ></div>
              </div>
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center text-white">
                  <h1 className="text-5xl font-bold sm:text-6xl">
                    Bold visual presence
                  </h1>
                  <p className="mt-6 text-xl text-neutral-100">
                    Create impactful landing pages with stunning full-screen
                    heroes.
                  </p>
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <button className="rounded-lg bg-white px-8 py-3 font-semibold text-neutral-900 hover:bg-neutral-100">
                      Get started
                    </button>
                    <button className="rounded-lg border border-white px-8 py-3 font-semibold text-white hover:bg-white/10">
                      Learn more
                    </button>
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
