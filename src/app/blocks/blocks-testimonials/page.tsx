"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Star, Quote, CheckCircle, Play } from "lucide-react";
import { useRef } from "react";
import CopySnippetButtons from "@/components/CopySnippetButtons";
import SectionDivider from "@/components/SectionDivider";

export default function BlocksTestimonialsPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);

  const testimonials = [
    {
      quote:
        "This product has transformed how we work. The team is more productive and our customers are happier than ever.",
      author: "Sarah Mitchell",
      role: "CEO, TechCorp",
      image: "https://i.pravatar.cc/150?img=1",
      company: "TechCorp",
      rating: 5,
    },
    {
      quote:
        "Outstanding support and incredible features. We've seen a 300% increase in efficiency since switching.",
      author: "James Wilson",
      role: "CTO, StartupXYZ",
      image: "https://i.pravatar.cc/150?img=13",
      company: "StartupXYZ",
      rating: 5,
    },
    {
      quote:
        "The best investment we've made this year. Highly recommend to anyone looking to scale their business.",
      author: "Emily Chen",
      role: "Product Manager, InnovateCo",
      image: "https://i.pravatar.cc/150?img=5",
      company: "InnovateCo",
      rating: 5,
    },
    {
      quote:
        "Exceptional quality and attention to detail. The platform exceeded all our expectations.",
      author: "Michael Rodriguez",
      role: "Founder, GrowthHub",
      image: "https://i.pravatar.cc/150?img=14",
      company: "GrowthHub",
      rating: 5,
    },
  ];

  const testimonialGridReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {[1, 2, 3].map((i) => (
      <blockquote key={i} className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
        <p className="text-sm text-slate-600 dark:text-slate-400">\"This platform made our team faster and more aligned.\"</p>
        <footer className="mt-4">
          <p className="font-semibold text-slate-900 dark:text-white">Customer {i}</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Role, Company</p>
        </footer>
      </blockquote>
    ))}
  </div>
</section>`;

  const testimonialCarouselReactSnippet = `<section className="rounded-2xl bg-slate-50 py-16 dark:bg-slate-900">
  <div className="mx-auto max-w-3xl px-6 text-center">
    <p className="text-sm font-medium text-blue-600">Featured Testimonial</p>
    <p className="mt-4 text-xl font-medium text-slate-900 dark:text-white">\"A smooth rollout and immediate impact across our organization.\"</p>
    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Jordan Lee, COO at Horizon Labs</p>
    <div className="mt-6 flex justify-center gap-2">
      {[0, 1, 2].map((dot) => (
        <span key={dot} className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
      ))}
    </div>
  </div>
</section>`;

  const ratingTestimonialsReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
    {["Acme", "Nova", "Pulse", "Orbit"].map((company) => (
      <div key={company} className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
        <div className="mb-3 flex text-amber-400">★★★★★</div>
        <p className="text-sm text-slate-600 dark:text-slate-400">\"Excellent support and performance from day one.\"</p>
        <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">{company} Team</p>
      </div>
    ))}
  </div>
</section>`;

  const logoTestimonialsReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <h3 className="text-center text-2xl font-bold text-slate-900 dark:text-white">Trusted by leading teams</h3>
  <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
    {["Acme", "North", "Vertex", "Nexa", "Mira", "Flux", "Aster", "Mono"].map((logo) => (
      <div key={logo} className="rounded-lg bg-white p-4 text-center text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{logo}</div>
    ))}
  </div>
</section>`;

  const videoTestimonialsReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    <div className="relative h-64 rounded-xl bg-slate-200 dark:bg-slate-700">
      <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium">Play Story</button>
    </div>
    <div>
      <p className="text-sm font-medium text-blue-600">Video Testimonial</p>
      <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">How BrightCo scaled onboarding</h3>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">Watch how the team reduced setup time by 60% and improved activation.</p>
    </div>
  </div>
</section>`;

  const featuredPlusGridReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
    <div className="rounded-xl bg-blue-600 p-8 text-white lg:col-span-2">
      <p className="text-sm text-blue-100">Featured</p>
      <p className="mt-3 text-xl font-semibold">\"The most strategic product decision we made this year.\"</p>
      <p className="mt-4 text-sm text-blue-100">Emma Clark, VP Operations</p>
    </div>
    <div className="space-y-4">
      {[1, 2].map((i) => (
        <div key={i} className="rounded-xl bg-white p-5 dark:bg-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">\"Loved by our team.\"</p>
          <p className="mt-2 text-xs font-medium text-slate-900 dark:text-white">Customer {i}</p>
        </div>
      ))}
    </div>
  </div>
</section>`;

  const verifiedTestimonialsReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
    {["Verified Buyer", "Enterprise Customer", "Startup Founder"].map((tag) => (
      <div key={tag} className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">{tag}</span>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">\"Reliable, fast, and easy to deploy across teams.\"</p>
      </div>
    ))}
  </div>
</section>`;

  const splitTestimonialsReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    <div className="rounded-xl bg-white p-7 dark:bg-slate-800">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Customer Voices</h3>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Read direct feedback from teams using the product every day.</p>
      <button className="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">See all stories</button>
    </div>
    <div className="space-y-4">
      {["Fast setup", "Excellent support", "Great reliability"].map((item) => (
        <div key={item} className="rounded-xl bg-white p-5 dark:bg-slate-800">
          <p className="text-sm font-medium text-slate-900 dark:text-white">{item}</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Customer insight</p>
        </div>
      ))}
    </div>
  </div>
</section>`;

  const companyLogos = [
    "TechCorp",
    "StartupXYZ",
    "InnovateCo",
    "GrowthHub",
    "ScaleCo",
    "BuilderPro",
  ];

  return (
    <>
      <Navigation />
      <Hero
        title="Testimonials Sections"
        subtitle="Customer testimonial sections built with shadcn/ui and Tailwind CSS 4. Copy and deploy."
      />

      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Testimonial Block 1: Grid Layout */}
          <div className="relative">
            <SectionDivider title="Testimonial Grid">
              <CopySnippetButtons
                sectionRef={sectionRef1}
                reactSnippet={testimonialGridReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef1}
              className="relative bg-white py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    What our customers say
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                    Trusted by thousands of companies worldwide
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {testimonials.slice(0, 3).map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <Quote className="mb-4 h-8 w-8 text-neutral-400" />
                      <p className="text-neutral-700 dark:text-neutral-300">
                        {testimonial.quote}
                      </p>
                      <div className="mt-6 flex items-center gap-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-neutral-950 dark:text-neutral-50">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Testimonial Block 2: Centered Carousel */}
          <div className="relative">
            <SectionDivider title="Testimonial Carousel (Centered)">
              <CopySnippetButtons
                sectionRef={sectionRef2}
                reactSnippet={testimonialCarouselReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef2}
              className="relative bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900"
            >
              <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <Quote className="mx-auto mb-6 h-12 w-12 text-neutral-400" />
                <blockquote className="text-2xl font-medium text-neutral-950 sm:text-3xl dark:text-neutral-50">
                  &quot;{testimonials[0]?.quote}&quot;
                </blockquote>
                <div className="mt-8 flex flex-col items-center">
                  <Image
                    src={testimonials[0]!.image}
                    alt={testimonials[0]!.author}
                    width={64}
                    height={64}
                    className="mb-4 h-16 w-16 rounded-full object-cover"
                  />
                  <p className="font-semibold text-neutral-950 dark:text-neutral-50">
                    {testimonials[0]?.author}
                  </p>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {testimonials[0]?.role}
                  </p>
                </div>
                <div className="mt-8 flex justify-center gap-2">
                  {[0, 1, 2].map((dot) => (
                    <button
                      key={dot}
                      className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700"
                      aria-label={`Go to slide ${dot + 1}`}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Testimonial Block 3: With Rating Stars */}
          <div className="relative">
            <SectionDivider title="Testimonials with Rating Stars">
              <CopySnippetButtons
                sectionRef={sectionRef3}
                reactSnippet={ratingTestimonialsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef3}
              className="relative bg-white py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {testimonials.map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="mb-4 flex gap-1">
                        {Array.from({ length: testimonial.rating }).map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                            />
                          ),
                        )}
                      </div>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        {testimonial.quote}
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="text-sm font-semibold text-neutral-950 dark:text-neutral-50">
                            {testimonial.author}
                          </p>
                          <p className="text-xs text-neutral-600 dark:text-neutral-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Testimonial Block 4: With Company Logos */}
          <div className="relative">
            <SectionDivider title="Testimonials with Company Logos">
              <CopySnippetButtons
                sectionRef={sectionRef4}
                reactSnippet={logoTestimonialsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef4}
              className="relative bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    Trusted by leading companies
                  </h2>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
                  {companyLogos.map((company, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950"
                    >
                      <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        {company}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {testimonials.slice(0, 2).map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <p className="text-lg text-neutral-700 dark:text-neutral-300">
                        &quot;{testimonial.quote}&quot;
                      </p>
                      <div className="mt-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={48}
                            height={48}
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-neutral-950 dark:text-neutral-50">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-neutral-500">
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Testimonial Block 5: Video/Media Testimonials */}
          <div className="relative">
            <SectionDivider title="Testimonial Video/Media">
              <CopySnippetButtons
                sectionRef={sectionRef5}
                reactSnippet={videoTestimonialsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef5}
              className="relative bg-white py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {testimonials.slice(0, 2).map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="group relative mb-6 aspect-video overflow-hidden rounded-lg bg-neutral-200 dark:bg-neutral-800">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={500}
                          height={281}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all group-hover:bg-black/50">
                          <button className="rounded-full bg-white p-4 shadow-lg transition-transform hover:scale-110">
                            <Play className="h-6 w-6 text-neutral-900" />
                          </button>
                        </div>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300">
                        {testimonial.quote}
                      </p>
                      <div className="mt-4 flex items-center gap-3">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-neutral-950 dark:text-neutral-50">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Testimonial Block 6: Featured + Grid */}
          <div className="relative">
            <SectionDivider title="Featured Testimonial + Grid">
              <CopySnippetButtons
                sectionRef={sectionRef6}
                reactSnippet={featuredPlusGridReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef6}
              className="relative bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Featured Large Testimonial */}
                <div className="rounded-lg border border-neutral-200 bg-white p-12 dark:border-neutral-800 dark:bg-neutral-950">
                  <Quote className="mb-6 h-12 w-12 text-neutral-400" />
                  <blockquote className="text-2xl font-medium text-neutral-950 dark:text-neutral-50">
                    &quot;{testimonials[0]?.quote}&quot;
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4">
                    <Image
                      src={testimonials[0]!.image}
                      alt={testimonials[0]!.author}
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-neutral-950 dark:text-neutral-50">
                        {testimonials[0]?.author}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {testimonials[0]?.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Smaller Grid */}
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {testimonials.slice(1).map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="mb-3 flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-neutral-700 dark:text-neutral-300">
                        {testimonial.quote.substring(0, 80)}...
                      </p>
                      <p className="mt-3 text-sm font-semibold text-neutral-950 dark:text-neutral-50">
                        {testimonial.author}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Testimonial Block 7: With Verified Badges */}
          <div className="relative">
            <SectionDivider title="Testimonials with Verified Badges">
              <CopySnippetButtons
                sectionRef={sectionRef7}
                reactSnippet={verifiedTestimonialsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef7}
              className="relative bg-white py-16 sm:py-24 dark:bg-neutral-950"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {testimonials.slice(0, 3).map((testimonial, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 dark:bg-green-900">
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                          <span className="text-xs font-medium text-green-600 dark:text-green-400">
                            Verified
                          </span>
                        </div>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300">
                        {testimonial.quote}
                      </p>
                      <div className="mt-6 flex items-center gap-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold text-neutral-950 dark:text-neutral-50">
                            {testimonial.author}
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Testimonial Block 8: Two-Column Split */}
          <div className="relative">
            <SectionDivider title="Testimonials Two-Column Split">
              <CopySnippetButtons
                sectionRef={sectionRef8}
                reactSnippet={splitTestimonialsReactSnippet}
              />
            </SectionDivider>
            <section
              ref={sectionRef8}
              className="relative bg-neutral-50 py-16 sm:py-24 dark:bg-neutral-900"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                      Customer stories
                    </h2>
                    <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                      See how companies are transforming their businesses with
                      our platform.
                    </p>
                    <div className="mt-8 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
                          <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                            4.9/5
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Average rating
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800">
                          <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                            10,000+
                          </p>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">
                            Happy customers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    {testimonials.slice(0, 2).map((testimonial, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950"
                      >
                        <div className="mb-3 flex gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-neutral-700 dark:text-neutral-300">
                          {testimonial.quote}
                        </p>
                        <div className="mt-4 flex items-center gap-3">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-semibold text-neutral-950 dark:text-neutral-50">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                              {testimonial.role}
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
        </div>
      </main>

      <Footer />
    </>
  );
}
