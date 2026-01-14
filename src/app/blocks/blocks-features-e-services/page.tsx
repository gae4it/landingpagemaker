"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Copy, Zap, Shield, Users, Rocket, TrendingUp, Award, Clock, CheckCircle } from "lucide-react";
import { useRef, type RefObject } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksFeaturesEServicesPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);

  const [showCopied, triggerCopied] = useCopyNotification();
  const handleCopy = (ref: RefObject<HTMLElement | null>) => {
    const el = ref.current;
    if (!el) return;
    void navigator.clipboard.writeText(el.outerHTML);
    triggerCopied();
  };

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with instant loading times",
    },
    {
      icon: Shield,
      title: "Secure by Default",
      description: "Enterprise-grade security built into every layer",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team",
    },
    {
      icon: Rocket,
      title: "Easy Deployment",
      description: "Deploy in seconds with our one-click solution",
    },
  ];

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
        title="Features & Services Sections"
        subtitle="Feature showcase sections built with shadcn/ui and Tailwind CSS 4. Copy and deploy."
      />

      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Features Block 1: Grid with Icons */}
          <div className="relative">
            <SectionDivider title="Features Grid (Icons + Text)">
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
              className="relative bg-white py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    Everything you need
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                    Powerful features to help you grow your business
                  </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="text-center">
                      <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-900">
                        <feature.icon className="h-8 w-8 text-neutral-900 dark:text-neutral-50" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Features Block 2: With Tabs */}
          <div className="relative">
            <SectionDivider title="Features with Tabs">
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
              className="relative bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    Explore our features
                  </h2>
                </div>
                <div className="mt-12 flex flex-wrap justify-center gap-3">
                  {["Development", "Design", "Marketing", "Analytics"].map((tab) => (
                    <button
                      key={tab}
                      className="rounded-lg border border-neutral-300 bg-white px-6 py-2.5 font-medium text-neutral-700 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
                  <div className="rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950">
                    <h3 className="mb-4 text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                      Development Tools
                    </h3>
                    <ul className="space-y-3">
                      {["Code editor integration", "Version control", "CI/CD pipeline", "Testing framework"].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                          <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100 p-8 dark:border-neutral-800 dark:bg-neutral-800">
                    <p className="text-center text-neutral-600 dark:text-neutral-400">
                      Feature preview area
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Features Block 3: Hover Reveal */}
          <div className="relative">
            <SectionDivider title="Features with Hover Reveal">
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
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {features.slice(0, 3).map((feature, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-900 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-50"
                    >
                      <feature.icon className="mb-4 h-10 w-10 text-neutral-900 dark:text-neutral-50" />
                      <h3 className="mb-2 text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {feature.description}
                      </p>
                      <div className="mt-4 h-0 overflow-hidden opacity-0 transition-all group-hover:h-auto group-hover:opacity-100">
                        <a
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-neutral-900 hover:underline dark:text-neutral-50"
                        >
                          Learn more →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Features Block 4: Timeline */}
          <div className="relative">
            <SectionDivider title="Features Timeline">
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
              <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    How it works
                  </h2>
                </div>
                <div className="mt-16 space-y-12">
                  {[
                    { step: "1", title: "Sign up", desc: "Create your account in seconds" },
                    { step: "2", title: "Connect", desc: "Integrate with your favorite tools" },
                    { step: "3", title: "Launch", desc: "Go live and start growing" },
                    { step: "4", title: "Scale", desc: "Expand as your business grows" },
                  ].map((item, idx) => (
                    <div key={idx} className="relative flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900">
                          <span className="text-lg font-bold">{item.step}</span>
                        </div>
                        {idx < 3 && (
                          <div className="mt-2 h-full w-0.5 bg-neutral-300 dark:bg-neutral-700" />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <h3 className="mb-2 text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                          {item.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Features Block 5: Comparison Table */}
          <div className="relative">
            <SectionDivider title="Features Comparison Table">
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
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-neutral-200 dark:border-neutral-800">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-950 dark:text-neutral-50">
                          Feature
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-950 dark:text-neutral-50">
                          Basic
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-950 dark:text-neutral-50">
                          Pro
                        </th>
                        <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-950 dark:text-neutral-50">
                          Enterprise
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Users", basic: "5", pro: "25", enterprise: "Unlimited" },
                        { name: "Storage", basic: "10GB", pro: "100GB", enterprise: "1TB" },
                        { name: "Support", basic: "Email", pro: "Priority", enterprise: "24/7" },
                        { name: "API Access", basic: "—", pro: "✓", enterprise: "✓" },
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-neutral-200 dark:border-neutral-800"
                        >
                          <td className="px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300">
                            {row.name}
                          </td>
                          <td className="px-6 py-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
                            {row.basic}
                          </td>
                          <td className="px-6 py-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
                            {row.pro}
                          </td>
                          <td className="px-6 py-4 text-center text-sm text-neutral-600 dark:text-neutral-400">
                            {row.enterprise}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Features Block 6: With Image Carousel */}
          <div className="relative">
            <SectionDivider title="Features with Image Carousel">
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
              className="relative bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                      Powerful features for modern teams
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                      Everything you need to collaborate effectively
                    </p>
                    <ul className="mt-8 space-y-4">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-50">
                            <CheckCircle className="h-4 w-4 text-white dark:text-neutral-900" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-neutral-950 dark:text-neutral-50">
                              {feature.title}
                            </h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {feature.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-800 dark:bg-neutral-800">
                    <div className="aspect-video rounded bg-neutral-200 dark:bg-neutral-700" />
                    <div className="mt-4 flex justify-center gap-2">
                      {[0, 1, 2].map((dot) => (
                        <button
                          key={dot}
                          className="h-2 w-2 rounded-full bg-neutral-400 dark:bg-neutral-600"
                          aria-label={`Go to slide ${dot + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Features Block 7: Animated Icons */}
          <div className="relative">
            <SectionDivider title="Features with Animated Icons">
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
              className="relative bg-white py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    Why choose us
                  </h2>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { icon: TrendingUp, title: "Fast Growth", color: "text-blue-600" },
                    { icon: Award, title: "Award Winning", color: "text-purple-600" },
                    { icon: Clock, title: "24/7 Support", color: "text-green-600" },
                    { icon: Shield, title: "Secure", color: "text-red-600" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group cursor-pointer rounded-lg border border-neutral-200 bg-white p-8 text-center transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 transition-transform group-hover:scale-110 dark:bg-neutral-800">
                        <item.icon className={`h-8 w-8 ${item.color}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Features Block 8: Numbered Steps */}
          <div className="relative">
            <SectionDivider title="Feature Steps (Numbered Workflow)">
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
              className="relative bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    Get started in 3 easy steps
                  </h2>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
                  {[
                    {
                      num: "01",
                      title: "Create Account",
                      desc: "Sign up and set up your profile in minutes",
                    },
                    {
                      num: "02",
                      title: "Customize",
                      desc: "Tailor the platform to your needs",
                    },
                    {
                      num: "03",
                      title: "Launch",
                      desc: "Go live and start achieving your goals",
                    },
                  ].map((step, idx) => (
                    <div key={idx} className="text-center">
                      <div className="mb-4 text-6xl font-bold text-neutral-200 dark:text-neutral-800">
                        {step.num}
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                        {step.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-400">{step.desc}</p>
                    </div>
                  ))}
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
