"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Copy, TrendingUp, Users, Award, Zap } from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksCounterPage() {
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
        title="Counter Sections"
        subtitle="Counter blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Simple 4 Column Counters */}
          <div className="relative">
            <SectionDivider title="4 Column Counters">
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
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { number: "10M+", label: "Users", icon: Users },
                  { number: "500+", label: "Companies", icon: TrendingUp },
                  { number: "50+", label: "Awards", icon: Award },
                  { number: "99.9%", label: "Uptime", icon: Zap },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-lg bg-white p-8 text-center dark:bg-slate-800"
                    >
                      <Icon className="mx-auto mb-4 text-blue-600" size={32} />
                      <div className="mb-2 text-4xl font-bold text-slate-900 dark:text-white">
                        {item.number}
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Variant 2: Counters with Background */}
          <div className="relative">
            <SectionDivider title="Counters with Background">
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
              className="rounded-lg bg-blue-600 py-16 text-white dark:bg-blue-900"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  { number: "25K", label: "Happy Customers" },
                  { number: "1M+", label: "Downloads" },
                  { number: "15+", label: "Years Active" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="mb-2 text-5xl font-bold">{item.number}</div>
                    <p className="text-lg text-blue-100">{item.label}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 3: Counters with Descriptions */}
          <div className="relative">
            <SectionDivider title="Counters with Descriptions">
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
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                {[
                  {
                    number: "98%",
                    label: "Satisfaction",
                    desc: "Our customers are extremely happy",
                  },
                  {
                    number: "3.2K",
                    label: "5-Star Reviews",
                    desc: "Trusted by thousands worldwide",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-600 pl-6">
                    <div className="mb-2 text-5xl font-bold text-slate-900 dark:text-white">
                      {item.number}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                      {item.label}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 4: Animated Counters */}
          <div className="relative">
            <SectionDivider title="Counters with Indicators">
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
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-4xl space-y-8">
                {[
                  { label: "Growth Rate", value: 85 },
                  { label: "Customer Trust", value: 92 },
                  { label: "Product Quality", value: 95 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="mb-2 flex justify-between">
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {item.label}
                      </span>
                      <span className="font-bold text-blue-600">
                        {item.value}%
                      </span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        className="h-3 rounded-full bg-blue-600 transition-all duration-500"
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 5: Large Counters */}
          <div className="relative">
            <SectionDivider title="Large Prominent Counters">
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
              className="rounded-lg bg-linear-to-r from-slate-50 to-slate-100 py-20 dark:from-slate-900 dark:to-slate-800"
            >
              <div className="mb-16 text-center">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                  Our Impact
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                {[
                  { number: "$100M", label: "Revenue Generated" },
                  { number: "50K+", label: "Projects Delivered" },
                  { number: "24/7", label: "Support Available" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="mb-4 text-6xl font-black text-blue-600">
                      {item.number}
                    </div>
                    <p className="text-xl text-slate-700 dark:text-slate-300">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 6: Counters with Icons */}
          <div className="relative">
            <SectionDivider title="Counters with Large Icons">
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
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {[
                  { icon: Users, number: "2.5K", label: "Team Members" },
                  { icon: TrendingUp, number: "450%", label: "Growth" },
                  { icon: Award, number: "45", label: "Global Awards" },
                  { icon: Zap, number: "10x", label: "Faster" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="mb-4 rounded-lg bg-blue-100 p-4 dark:bg-blue-900/20">
                        <Icon className="text-blue-600" size={48} />
                      </div>
                      <div className="mb-1 text-3xl font-bold text-slate-900 dark:text-white">
                        {item.number}
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          {/* Variant 7: Timeline Style Counters */}
          <div className="relative">
            <SectionDivider title="Timeline Counters">
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
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-4xl">
                <div className="space-y-8">
                  {[
                    { year: "2019", milestone: "Founded" },
                    { year: "2021", milestone: "1M Users" },
                    { year: "2023", milestone: "Global Expansion" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{item.year}</div>
                        </div>
                      </div>
                      <div className="flex-1 rounded-lg bg-white p-6 dark:bg-slate-800">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                          {item.milestone}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 8: Compact Counters */}
          <div className="relative">
            <SectionDivider title="Compact Counters">
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
              className="rounded-lg bg-white py-12 dark:bg-slate-950"
            >
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
                {[
                  { number: "300+", label: "Clients" },
                  { number: "500K+", label: "Hours" },
                  { number: "99.8%", label: "Uptime" },
                  { number: "24/7", label: "Support" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="border-r border-slate-200 pr-8 text-center last:border-r-0 dark:border-slate-700"
                  >
                    <div className="text-3xl font-bold text-slate-900 dark:text-white">
                      {item.number}
                    </div>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      {item.label}
                    </p>
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
