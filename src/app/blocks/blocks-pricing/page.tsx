"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Copy, Check } from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksPricingPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);

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
        title="Pricing Sections"
        subtitle="Pricing tables and plans built with shadcn/ui and Tailwind CSS 4. Copy and customize."
      />
      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Pricing Block 1: Simple 3-Tier */}
          <div className="relative">
            <SectionDivider title="Simple 3-Tier Pricing">
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
                <div className="mx-auto mb-16 max-w-2xl text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    Simple, transparent pricing
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                    Choose the plan that&apos;s right for you
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {[
                    {
                      name: "Starter",
                      price: "$9",
                      features: ["5 Projects", "10GB Storage", "Basic Support"],
                    },
                    {
                      name: "Pro",
                      price: "$29",
                      features: [
                        "Unlimited Projects",
                        "100GB Storage",
                        "Priority Support",
                        "Advanced Analytics",
                      ],
                      popular: true,
                    },
                    {
                      name: "Enterprise",
                      price: "$99",
                      features: [
                        "Unlimited Everything",
                        "1TB Storage",
                        "24/7 Support",
                        "Custom Solutions",
                      ],
                    },
                  ].map((plan, idx) => (
                    <div
                      key={idx}
                      className={`relative rounded-lg border ${plan.popular ? "border-neutral-900 shadow-lg dark:border-neutral-50" : "border-neutral-200 dark:border-neutral-800"} bg-white p-8 dark:bg-neutral-900`}
                    >
                      {plan.popular && (
                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-neutral-900 px-4 py-1 text-sm font-semibold text-white dark:bg-neutral-50 dark:text-neutral-900">
                          Popular
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                        {plan.name}
                      </h3>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-5xl font-bold text-neutral-950 dark:text-neutral-50">
                          {plan.price}
                        </span>
                        <span className="ml-2 text-neutral-600 dark:text-neutral-400">
                          /month
                        </span>
                      </div>
                      <ul className="mt-8 space-y-4">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-neutral-900 dark:text-neutral-50" />
                            <span className="text-neutral-700 dark:text-neutral-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`mt-8 w-full rounded-lg px-4 py-2.5 font-semibold ${plan.popular ? "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200" : "border border-neutral-300 text-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-50 dark:hover:bg-neutral-900"}`}
                      >
                        Get started
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Pricing Block 2: With Toggle */}
          <div className="relative">
            <SectionDivider title="Pricing with Monthly/Yearly Toggle">
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
                <div className="mx-auto mb-8 max-w-2xl text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    Flexible pricing options
                  </h2>
                </div>
                <div className="mb-12 flex justify-center">
                  <div className="inline-flex rounded-lg border border-neutral-200 p-1 dark:border-neutral-800">
                    <button className="rounded-md bg-neutral-900 px-6 py-2 text-sm font-semibold text-white dark:bg-neutral-50 dark:text-neutral-900">
                      Monthly
                    </button>
                    <button className="rounded-md px-6 py-2 text-sm font-semibold text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50">
                      Yearly
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {[
                    {
                      name: "Professional",
                      price: "$49",
                      features: [
                        "10 Team members",
                        "200GB Storage",
                        "Email Support",
                        "Analytics Dashboard",
                      ],
                    },
                    {
                      name: "Business",
                      price: "$99",
                      features: [
                        "Unlimited Team members",
                        "1TB Storage",
                        "Priority Support",
                        "Advanced Analytics",
                        "API Access",
                      ],
                    },
                  ].map((plan, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                        {plan.name}
                      </h3>
                      <div className="mt-6 flex items-baseline">
                        <span className="text-5xl font-bold text-neutral-950 dark:text-neutral-50">
                          {plan.price}
                        </span>
                        <span className="ml-2 text-neutral-600 dark:text-neutral-400">
                          /month
                        </span>
                      </div>
                      <ul className="mt-8 space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-neutral-900 dark:text-neutral-50" />
                            <span className="text-neutral-700 dark:text-neutral-300">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <button className="mt-8 w-full rounded-lg bg-neutral-900 px-4 py-3 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
                        Start free trial
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Pricing Block 3: Comparison Table */}
          <div className="relative">
            <SectionDivider title="Pricing Comparison Table">
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
                <div className="mx-auto mb-16 max-w-2xl text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    Compare plans
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-200 dark:border-neutral-800">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-950 dark:text-neutral-50">
                          Features
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
                        {
                          feature: "Projects",
                          basic: "5",
                          pro: "50",
                          enterprise: "Unlimited",
                        },
                        {
                          feature: "Storage",
                          basic: "10GB",
                          pro: "100GB",
                          enterprise: "1TB",
                        },
                        {
                          feature: "Team Members",
                          basic: "1",
                          pro: "10",
                          enterprise: "Unlimited",
                        },
                        {
                          feature: "Support",
                          basic: "Email",
                          pro: "Priority",
                          enterprise: "24/7",
                        },
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className="border-b border-neutral-100 dark:border-neutral-900"
                        >
                          <td className="px-6 py-4 text-sm text-neutral-700 dark:text-neutral-300">
                            {row.feature}
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

          {/* Pricing Block 4: Centered Single Plan */}
          <div className="relative">
            <SectionDivider title="Single Centered Plan">
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
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-lg border border-neutral-200 bg-white p-12 text-center dark:border-neutral-800 dark:bg-neutral-900">
                  <h2 className="text-3xl font-bold text-neutral-950 dark:text-neutral-50">
                    One simple price
                  </h2>
                  <div className="mt-8 flex items-baseline justify-center">
                    <span className="text-6xl font-bold text-neutral-950 dark:text-neutral-50">
                      $39
                    </span>
                    <span className="ml-2 text-xl text-neutral-600 dark:text-neutral-400">
                      /month
                    </span>
                  </div>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                    Everything you need to get started
                  </p>
                  <ul className="mt-12 space-y-4 text-left">
                    {[
                      "Unlimited projects",
                      "100GB storage",
                      "Priority support",
                      "Advanced analytics",
                      "Team collaboration",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-neutral-900 dark:text-neutral-50" />
                        <span className="text-neutral-700 dark:text-neutral-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-12 w-full rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
                    Get started now
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Pricing Block 5: With Feature Highlights */}
          <div className="relative">
            <SectionDivider title="Pricing with Highlights">
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
              className="relative bg-linear-to-b from-neutral-50 to-white py-16 sm:py-24 dark:from-neutral-950 dark:to-neutral-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {[
                    {
                      name: "Starter",
                      price: "$19",
                      highlight: "Perfect for individuals",
                    },
                    {
                      name: "Team",
                      price: "$49",
                      highlight: "Best for small teams",
                      featured: true,
                    },
                    {
                      name: "Enterprise",
                      price: "Custom",
                      highlight: "For large organizations",
                    },
                  ].map((plan, idx) => (
                    <div
                      key={idx}
                      className={`rounded-lg ${plan.featured ? "bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900" : "border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"} p-8`}
                    >
                      <div className="text-center">
                        <h3
                          className={`text-2xl font-bold ${plan.featured ? "text-white dark:text-neutral-900" : "text-neutral-950 dark:text-neutral-50"}`}
                        >
                          {plan.name}
                        </h3>
                        <p
                          className={`mt-2 text-sm ${plan.featured ? "text-neutral-200 dark:text-neutral-700" : "text-neutral-600 dark:text-neutral-400"}`}
                        >
                          {plan.highlight}
                        </p>
                        <div className="mt-6 flex items-baseline justify-center">
                          <span
                            className={`text-5xl font-bold ${plan.featured ? "text-white dark:text-neutral-900" : "text-neutral-950 dark:text-neutral-50"}`}
                          >
                            {plan.price}
                          </span>
                          {plan.price !== "Custom" && (
                            <span
                              className={`ml-2 ${plan.featured ? "text-neutral-300 dark:text-neutral-600" : "text-neutral-600 dark:text-neutral-400"}`}
                            >
                              /mo
                            </span>
                          )}
                        </div>
                        <button
                          className={`mt-8 w-full rounded-lg px-4 py-2.5 font-semibold ${plan.featured ? "bg-white text-neutral-900 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800" : "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"}`}
                        >
                          Choose plan
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Pricing Block 6: Minimal Cards */}
          <div className="relative">
            <SectionDivider title="Minimal Pricing Cards">
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
              className="relative bg-white py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { name: "Free", price: "$0" },
                    { name: "Starter", price: "$9" },
                    { name: "Pro", price: "$29" },
                    { name: "Enterprise", price: "$99" },
                  ].map((plan, idx) => (
                    <div
                      key={idx}
                      className="group cursor-pointer rounded-lg border border-neutral-200 bg-white p-6 transition-all hover:border-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-50"
                    >
                      <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                        {plan.name}
                      </h3>
                      <div className="mt-4 flex items-baseline">
                        <span className="text-4xl font-bold text-neutral-950 dark:text-neutral-50">
                          {plan.price}
                        </span>
                        <span className="ml-1 text-neutral-600 dark:text-neutral-400">
                          /mo
                        </span>
                      </div>
                      <button className="mt-6 w-full rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-900 group-hover:border-neutral-900 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-50 dark:group-hover:border-neutral-50 dark:hover:bg-neutral-900">
                        Select
                      </button>
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
