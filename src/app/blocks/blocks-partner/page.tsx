"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Award, CheckCircle, Users, TrendingUp, Star } from "lucide-react";
import { useRef } from "react";
import CopySnippetButtons from "@/components/CopySnippetButtons";
import SectionDivider from "@/components/SectionDivider";

export default function BlocksPartnerPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);

  const partnerLogosReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Trusted by Partners</h3>
  <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
    {["Acme", "Nova", "Horizon", "Pulse", "Vertex", "Mira", "Flux", "Nexa"].map((name) => (
      <div key={name} className="rounded-lg border border-slate-200 p-4 text-center text-sm font-semibold text-slate-600 dark:border-slate-800 dark:text-slate-300">{name}</div>
    ))}
  </div>
</section>`;

  const partnerTestimonialsReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {[1, 2, 3].map((i) => (
      <blockquote key={i} className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
        <p className="text-sm text-slate-600 dark:text-slate-400">\"Partnership with this platform accelerated our growth.\"</p>
        <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">Partner {i}</p>
      </blockquote>
    ))}
  </div>
</section>`;

  const partnerTiersReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {[
      ["Silver", "Entry tier", "5% rev share"],
      ["Gold", "Growth tier", "10% rev share"],
      ["Platinum", "Top tier", "15% rev share"],
    ].map(([tier, desc, benefit]) => (
      <div key={tier} className="rounded-xl border border-slate-200 p-7 dark:border-slate-800">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tier}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{desc}</p>
        <p className="mt-4 text-sm font-medium text-blue-600">{benefit}</p>
      </div>
    ))}
  </div>
</section>`;

  const partnerBenefitsReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {[
      "Dedicated partner manager",
      "Co-marketing campaigns",
      "Technical enablement",
      "Early feature access",
    ].map((item) => (
      <div key={item} className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">
        <p className="text-sm font-medium text-slate-900 dark:text-white">{item}</p>
      </div>
    ))}
  </div>
</section>`;

  const partnerComparisonReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
    <table className="w-full min-w-[680px] text-left text-sm">
      <thead className="bg-slate-100 dark:bg-slate-900">
        <tr>
          <th className="px-4 py-3">Feature</th>
          <th className="px-4 py-3">Silver</th>
          <th className="px-4 py-3">Gold</th>
          <th className="px-4 py-3">Platinum</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Dedicated manager", "-", "Yes", "Yes"],
          ["Lead sharing", "Limited", "Standard", "Priority"],
          ["Co-marketing", "-", "Quarterly", "Monthly"],
        ].map((row) => (
          <tr key={row[0]} className="border-t border-slate-200 dark:border-slate-800">
            <td className="px-4 py-3">{row[0]}</td>
            <td className="px-4 py-3">{row[1]}</td>
            <td className="px-4 py-3">{row[2]}</td>
            <td className="px-4 py-3">{row[3]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>`;

  const featuredPartnerReactSnippet = `<section className="rounded-2xl bg-blue-600 py-16 text-white">
  <div className="grid grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
    <div>
      <p className="text-sm text-blue-100">Featured Partner</p>
      <h3 className="mt-2 text-3xl font-bold">Horizon Ventures</h3>
      <p className="mt-4 text-sm text-blue-100">Scaling joint customer success through strategic collaboration.</p>
      <button className="mt-6 rounded-lg bg-white px-5 py-2 text-sm font-medium text-blue-700">Read Case Study</button>
    </div>
    <div className="h-56 rounded-xl bg-blue-500/40" />
  </div>
</section>`;

  const partnerCtaReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 text-center shadow-sm dark:bg-slate-800">
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Become a partner</h3>
    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Join our ecosystem and unlock growth opportunities.</p>
    <div className="mt-6 flex justify-center gap-3">
      <button className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">Apply Now</button>
      <button className="rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium dark:border-slate-700">Partner Guide</button>
    </div>
  </div>
</section>`;

  const partnerStatsReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
    {[
      ["120+", "Active partners"],
      ["42", "Countries"],
      ["$18M", "Partner revenue"],
      ["96%", "Satisfaction"],
    ].map(([value, label]) => (
      <div key={label} className="rounded-xl border border-slate-200 p-6 text-center dark:border-slate-800">
        <p className="text-3xl font-bold text-slate-900 dark:text-white">{value}</p>
        <p className="mt-1 text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
      </div>
    ))}
  </div>
</section>`;

  return (
    <>
      <Navigation />
      <Hero
        title="Partner Sections"
        subtitle="Beautiful partner blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Partner Logos Grid */}
          <div className="relative">
            <SectionDivider title="Partner Logos Grid">
              <CopySnippetButtons
                sectionRef={sectionRef1}
                reactSnippet={partnerLogosReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef1}
              className="bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
                    Our Partners
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Trusted by leading companies around the world
                  </p>
                </div>
                <div className="grid grid-cols-2 items-center gap-8 md:grid-cols-4 lg:grid-cols-6">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center rounded-lg bg-white p-4 transition-shadow hover:shadow-lg dark:bg-slate-800 dark:hover:shadow-xl"
                    >
                      <div className="text-2xl font-bold text-slate-400 dark:text-slate-500">
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
              <CopySnippetButtons
                sectionRef={sectionRef2}
                reactSnippet={partnerTestimonialsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef2}
              className="bg-white py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
                    What Our Partners Say
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Hear from the leaders in our partner network
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900"
                    >
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star
                            key={j}
                            size={18}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="mb-6 text-slate-700 dark:text-slate-300">
                        &quot;This partnership has been transformative for our
                        business. The support and collaboration exceeded our
                        expectations.&quot;
                      </p>
                      <div className="flex gap-3">
                        <div className="h-12 w-12 rounded-full bg-blue-200 dark:bg-blue-900"></div>
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
              <CopySnippetButtons
                sectionRef={sectionRef3}
                reactSnippet={partnerTiersReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef3}
              className="bg-slate-900 py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold text-white">
                    Partnership Tiers
                  </h2>
                  <p className="text-lg text-slate-400">
                    Choose the right partnership level for your business
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {/* Gold */}
                  <div className="rounded-lg border-2 border-amber-400 bg-linear-to-b from-amber-50 to-white p-8 dark:border-amber-600 dark:from-amber-900 dark:to-slate-800">
                    <div className="mb-4 flex items-center gap-2">
                      <Award
                        size={24}
                        className="text-amber-600 dark:text-amber-400"
                      />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Gold
                      </h3>
                    </div>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                      Premium partnership with dedicated support
                    </p>
                    <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex gap-2">
                        <CheckCircle
                          size={18}
                          className="shrink-0 text-amber-600 dark:text-amber-400"
                        />
                        Dedicated Account Manager
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle
                          size={18}
                          className="shrink-0 text-amber-600 dark:text-amber-400"
                        />
                        Co-marketing opportunities
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle
                          size={18}
                          className="shrink-0 text-amber-600 dark:text-amber-400"
                        />
                        Priority support
                      </li>
                    </ul>
                  </div>

                  {/* Silver */}
                  <div className="rounded-lg border-2 border-gray-400 bg-linear-to-b from-gray-100 to-white p-8 dark:border-gray-600 dark:from-gray-700 dark:to-slate-800">
                    <div className="mb-4 flex items-center gap-2">
                      <Award
                        size={24}
                        className="text-gray-600 dark:text-gray-400"
                      />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Silver
                      </h3>
                    </div>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                      Mid-tier partnership with strong support
                    </p>
                    <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex gap-2">
                        <CheckCircle
                          size={18}
                          className="shrink-0 text-gray-600 dark:text-gray-400"
                        />
                        Monthly check-ins
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle
                          size={18}
                          className="shrink-0 text-gray-600 dark:text-gray-400"
                        />
                        Marketing resources
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle
                          size={18}
                          className="shrink-0 text-gray-600 dark:text-gray-400"
                        />
                        Standard support
                      </li>
                    </ul>
                  </div>

                  {/* Bronze */}
                  <div className="rounded-lg border-2 border-orange-400 bg-linear-to-b from-orange-50 to-white p-8 dark:border-orange-600 dark:from-orange-900 dark:to-slate-800">
                    <div className="mb-4 flex items-center gap-2">
                      <Award
                        size={24}
                        className="text-orange-600 dark:text-orange-400"
                      />
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Bronze
                      </h3>
                    </div>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                      Entry-level partnership for growing businesses
                    </p>
                    <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex gap-2">
                        <CheckCircle
                          size={18}
                          className="shrink-0 text-orange-600 dark:text-orange-400"
                        />
                        Quarterly reviews
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle
                          size={18}
                          className="shrink-0 text-orange-600 dark:text-orange-400"
                        />
                        Partner portal access
                      </li>
                      <li className="flex gap-2">
                        <CheckCircle
                          size={18}
                          className="shrink-0 text-orange-600 dark:text-orange-400"
                        />
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
              <CopySnippetButtons
                sectionRef={sectionRef4}
                reactSnippet={partnerBenefitsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef4}
              className="bg-white py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
                    Partner Benefits & Advantages
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Everything you need to grow your business with us
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      icon: TrendingUp,
                      title: "Revenue Growth",
                      description:
                        "Unlock new revenue streams with our partnership programs",
                    },
                    {
                      icon: Users,
                      title: "Access to Network",
                      description:
                        "Connect with thousands of partners in our ecosystem",
                    },
                    {
                      icon: Award,
                      title: "Recognition",
                      description:
                        "Gain visibility and brand recognition in the industry",
                    },
                    {
                      icon: CheckCircle,
                      title: "Training & Resources",
                      description:
                        "Comprehensive training programs and marketing materials",
                    },
                    {
                      icon: Star,
                      title: "Exclusive Benefits",
                      description:
                        "Access special offers and exclusive partnership perks",
                    },
                    {
                      icon: Users,
                      title: "Dedicated Support",
                      description:
                        "Get personalized support from our partnership team",
                    },
                  ].map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={i}
                        className="rounded-lg border border-slate-200 bg-slate-50 p-8 transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-xl"
                      >
                        <Icon
                          size={32}
                          className="mb-4 text-blue-600 dark:text-blue-400"
                        />
                        <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
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
              <CopySnippetButtons
                sectionRef={sectionRef5}
                reactSnippet={partnerComparisonReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef5}
              className="bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
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
                        <th className="px-4 py-4 text-left font-semibold text-slate-900 dark:text-white">
                          Feature
                        </th>
                        <th className="px-4 py-4 text-center font-semibold text-slate-900 dark:text-white">
                          Bronze
                        </th>
                        <th className="px-4 py-4 text-center font-semibold text-slate-900 dark:text-white">
                          Silver
                        </th>
                        <th className="px-4 py-4 text-center font-semibold text-slate-900 dark:text-white">
                          Gold
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          feature: "Partner Portal Access",
                          bronze: true,
                          silver: true,
                          gold: true,
                        },
                        {
                          feature: "Marketing Support",
                          bronze: false,
                          silver: true,
                          gold: true,
                        },
                        {
                          feature: "Dedicated Account Manager",
                          bronze: false,
                          silver: false,
                          gold: true,
                        },
                        {
                          feature: "Co-branding Opportunities",
                          bronze: false,
                          silver: true,
                          gold: true,
                        },
                        {
                          feature: "Priority Support",
                          bronze: false,
                          silver: false,
                          gold: true,
                        },
                        {
                          feature: "Revenue Share Program",
                          bronze: true,
                          silver: true,
                          gold: true,
                        },
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-slate-200 dark:border-slate-800"
                        >
                          <td className="px-4 py-4 text-slate-700 dark:text-slate-300">
                            {row.feature}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {row.bronze ? (
                              <CheckCircle
                                size={20}
                                className="mx-auto text-green-600 dark:text-green-400"
                              />
                            ) : (
                              <div className="mx-auto h-5 w-5 border-2 border-slate-300 dark:border-slate-600"></div>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {row.silver ? (
                              <CheckCircle
                                size={20}
                                className="mx-auto text-green-600 dark:text-green-400"
                              />
                            ) : (
                              <div className="mx-auto h-5 w-5 border-2 border-slate-300 dark:border-slate-600"></div>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {row.gold ? (
                              <CheckCircle
                                size={20}
                                className="mx-auto text-green-600 dark:text-green-400"
                              />
                            ) : (
                              <div className="mx-auto h-5 w-5 border-2 border-slate-300 dark:border-slate-600"></div>
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
              <CopySnippetButtons
                sectionRef={sectionRef6}
                reactSnippet={featuredPartnerReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef6}
              className="bg-white py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">
                    Featured Partners
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400">
                    Spotlight on our key strategic partners
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-lg border border-slate-200 bg-linear-to-br from-slate-50 to-slate-100 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800"
                    >
                      <div className="h-48 bg-linear-to-r from-blue-400 to-purple-400"></div>
                      <div className="p-8">
                        <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                          Featured Partner {i + 1}
                        </h3>
                        <div className="mb-4 flex gap-1">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star
                              key={j}
                              size={18}
                              className="fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="mb-6 text-slate-600 dark:text-slate-400">
                          Learn how this partner leveraged our platform to
                          achieve remarkable growth and drive innovation in
                          their industry.
                        </p>
                        <a
                          href="#"
                          className="inline-block font-semibold text-blue-600 hover:underline dark:text-blue-400"
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
              <CopySnippetButtons
                sectionRef={sectionRef7}
                reactSnippet={partnerCtaReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef7}
              className="bg-slate-900 py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-4xl font-bold text-white">
                    Our Partner Network
                  </h2>
                  <p className="text-lg text-slate-400">
                    Connected ecosystem of leading technology partners
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {/* Technology Partners */}
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
                      <Users size={40} className="text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      Technology Partners
                    </h3>
                    <p className="mb-4 text-slate-400">
                      120+ integration partners
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                    >
                      Explore
                    </a>
                  </div>

                  {/* Reseller Partners */}
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-purple-600">
                      <TrendingUp size={40} className="text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      Reseller Partners
                    </h3>
                    <p className="mb-4 text-slate-400">
                      250+ reseller partners
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
                    >
                      Explore
                    </a>
                  </div>

                  {/* Channel Partners */}
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-pink-600">
                      <Award size={40} className="text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      Channel Partners
                    </h3>
                    <p className="mb-4 text-slate-400">85+ channel partners</p>
                    <a
                      href="#"
                      className="inline-block rounded-lg bg-pink-600 px-4 py-2 text-white transition-colors hover:bg-pink-700"
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
              <CopySnippetButtons
                sectionRef={sectionRef8}
                reactSnippet={partnerStatsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef8}
              className="bg-linear-to-r from-blue-600 to-purple-600 py-16 dark:from-blue-700 dark:to-purple-700"
            >
              <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="mb-4 text-4xl font-bold text-white">
                  Ready to Become a Partner?
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
                  Join our growing partner network and unlock new opportunities
                  for growth and innovation together.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <button className="rounded-lg bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50">
                    Start Partnership Application
                  </button>
                  <button className="hover:bg-opacity-10 rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white">
                    Learn More
                  </button>
                </div>
                <div className="mt-12 grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="mb-2 text-4xl font-bold text-white">
                      500+
                    </div>
                    <p className="text-blue-100">Active Partners</p>
                  </div>
                  <div>
                    <div className="mb-2 text-4xl font-bold text-white">
                      $50M+
                    </div>
                    <p className="text-blue-100">Combined Revenue</p>
                  </div>
                  <div>
                    <div className="mb-2 text-4xl font-bold text-white">
                      150+
                    </div>
                    <p className="text-blue-100">Countries</p>
                  </div>
                </div>
                <p className="mt-8 text-sm text-blue-100">
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
