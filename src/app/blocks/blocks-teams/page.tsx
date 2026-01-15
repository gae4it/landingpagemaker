"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
} from "lucide-react";
import { useRef, type RefObject } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksTeamsPage() {
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

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/150?img=1",
      bio: "10+ years of experience in tech leadership and product development.",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://i.pravatar.cc/150?img=13",
      bio: "Former engineering lead at Fortune 500 companies.",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "https://i.pravatar.cc/150?img=5",
      bio: "Award-winning designer with a passion for user experience.",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/150?img=14",
      bio: "Full-stack expert specializing in scalable architectures.",
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
        title="Teams Sections"
        subtitle="Team member showcase sections built with shadcn/ui and Tailwind CSS 4. Copy and deploy."
      />

      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Team Block 1: Grid Layout */}
          <div className="relative">
            <SectionDivider title="Team Grid">
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
                    Meet our team
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                    The talented people behind our success
                  </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.map((member, idx) => (
                    <div key={idx} className="group text-center">
                      <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={160}
                          height={160}
                          className="h-full w-full object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Team Block 2: Card Layout with Hover */}
          <div className="relative">
            <SectionDivider title="Team Cards with Hover">
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
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
                    >
                      <div className="aspect-square overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                          {member.name}
                        </h3>
                        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Team Block 3: With Social Links */}
          <div className="relative">
            <SectionDivider title="Team with Social Links">
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
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {member.role}
                      </p>
                      <div className="mt-4 flex justify-center gap-3">
                        <a
                          href="#"
                          className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                        >
                          <Twitter size={18} />
                        </a>
                        <a
                          href="#"
                          className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                        >
                          <Linkedin size={18} />
                        </a>
                        <a
                          href="#"
                          className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                        >
                          <Github size={18} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Team Block 4: Two Column Layout */}
          <div className="relative">
            <SectionDivider title="Two-Column Team Layout">
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
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="space-y-12">
                  {teamMembers.slice(0, 2).map((member, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2"
                    >
                      <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={500}
                          height={256}
                          className="h-64 w-full rounded-lg object-cover"
                        />
                      </div>
                      <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                        <h3 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                          {member.name}
                        </h3>
                        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
                          {member.role}
                        </p>
                        <p className="mt-4 text-neutral-700 dark:text-neutral-300">
                          {member.bio}
                        </p>
                        <div className="mt-6 flex gap-4">
                          <a
                            href="#"
                            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                          >
                            <Twitter size={20} />
                          </a>
                          <a
                            href="#"
                            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                          >
                            <Linkedin size={20} />
                          </a>
                          <a
                            href="#"
                            className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                          >
                            <Mail size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Team Block 5: With Bio Modal Preview */}
          <div className="relative">
            <SectionDivider title="Team with Bio Expandable">
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
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="group cursor-pointer rounded-lg border border-neutral-200 bg-white p-6 text-center transition-all hover:border-neutral-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
                    >
                      <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {member.role}
                      </p>
                      <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">
                        {member.bio}
                      </p>
                      <button className="mt-4 inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 dark:text-neutral-50 dark:hover:text-neutral-400">
                        View profile
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Team Block 6: Hover Reveal Social */}
          <div className="relative">
            <SectionDivider title="Team with Hover Reveal">
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
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-lg"
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={500}
                        height={320}
                        className="h-80 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                      <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                        <h3 className="text-lg font-semibold">{member.name}</h3>
                        <p className="mt-1 text-sm text-neutral-300">
                          {member.role}
                        </p>
                        <div className="mt-4 flex gap-3 opacity-0 transition-opacity group-hover:opacity-100">
                          <a
                            href="#"
                            className="text-white hover:text-neutral-300"
                          >
                            <Twitter size={18} />
                          </a>
                          <a
                            href="#"
                            className="text-white hover:text-neutral-300"
                          >
                            <Linkedin size={18} />
                          </a>
                          <a
                            href="#"
                            className="text-white hover:text-neutral-300"
                          >
                            <Github size={18} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Team Block 7: Spotlight Leadership */}
          <div className="relative">
            <SectionDivider title="Team Spotlight (Leadership)">
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
                {/* Featured Leader */}
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                  <div>
                    <Image
                      src={teamMembers[0]!.image}
                      alt={teamMembers[0]!.name}
                      width={500}
                      height={384}
                      className="h-96 w-full rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-900 dark:bg-neutral-800 dark:text-neutral-50">
                      Leadership
                    </span>
                    <h2 className="mt-4 text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                      {teamMembers[0]?.name}
                    </h2>
                    <p className="mt-2 text-xl text-neutral-600 dark:text-neutral-400">
                      {teamMembers[0]?.role}
                    </p>
                    <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300">
                      {teamMembers[0]?.bio}
                    </p>
                    <div className="mt-8 flex gap-4">
                      <a
                        href="#"
                        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                      >
                        <Twitter size={24} />
                      </a>
                      <a
                        href="#"
                        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                      >
                        <Linkedin size={24} />
                      </a>
                      <a
                        href="#"
                        className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                      >
                        <Mail size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Rest of Team */}
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                  {teamMembers.slice(1).map((member, idx) => (
                    <div key={idx} className="text-center">
                      <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Team Block 8: With Role Filters */}
          <div className="relative">
            <SectionDivider title="Team with Role Filters">
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
                    Our team
                  </h2>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {[
                      "All",
                      "Leadership",
                      "Engineering",
                      "Design",
                      "Marketing",
                    ].map((role) => (
                      <button
                        key={role}
                        className="rounded-full border border-neutral-300 bg-white px-6 py-2 text-sm font-medium text-neutral-700 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-50 dark:hover:bg-neutral-50 dark:hover:text-neutral-900"
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg border border-neutral-200 bg-white p-6 text-center dark:border-neutral-800 dark:bg-neutral-950"
                    >
                      <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-950 dark:text-neutral-50">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                        {member.role}
                      </p>
                      <div className="mt-4 flex justify-center gap-3">
                        <a
                          href="#"
                          className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                        >
                          <Twitter size={16} />
                        </a>
                        <a
                          href="#"
                          className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-50"
                        >
                          <Linkedin size={16} />
                        </a>
                      </div>
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
