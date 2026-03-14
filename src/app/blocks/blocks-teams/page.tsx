"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { useRef } from "react";
import CopySnippetButtons from "@/components/CopySnippetButtons";
import SectionDivider from "@/components/SectionDivider";

export default function BlocksTeamsPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);

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

  const teamGridReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {[
      ["Sarah Johnson", "CEO"],
      ["Michael Chen", "CTO"],
      ["Emily Rodriguez", "Design Lead"],
      ["David Kim", "Engineering Manager"],
    ].map(([name, role], i) => (
      <div key={name} className="rounded-xl border border-slate-200 p-6 text-center dark:border-slate-800">
        <div className="mx-auto h-20 w-20 rounded-full bg-slate-200 dark:bg-slate-700" />
        <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{name}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
      </div>
    ))}
  </div>
</section>`;

  const teamHoverCardsReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {["Product", "Engineering", "Growth"].map((dept) => (
      <div key={dept} className="group rounded-xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800">
        <p className="text-sm text-blue-600">{dept}</p>
        <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">Team {dept}</h3>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Collaborative specialists focused on high-impact outcomes.</p>
        <p className="mt-4 text-sm font-medium text-blue-600 opacity-0 transition group-hover:opacity-100">View members</p>
      </div>
    ))}
  </div>
</section>`;

  const teamSocialLinksReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {["Ava", "Noah", "Liam", "Mia"].map((name) => (
      <div key={name} className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
        <div className="h-16 w-16 rounded-full bg-slate-200 dark:bg-slate-700" />
        <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{name}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Team Member</p>
        <div className="mt-4 flex gap-2 text-slate-500">
          <button className="rounded-md border px-2 py-1 text-xs">Tw</button>
          <button className="rounded-md border px-2 py-1 text-xs">Ln</button>
          <button className="rounded-md border px-2 py-1 text-xs">Gh</button>
        </div>
      </div>
    ))}
  </div>
</section>`;

  const twoColumnTeamReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    {["Leadership", "Core Team"].map((group) => (
      <div key={group} className="rounded-xl bg-white p-7 shadow-sm dark:bg-slate-800">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{group}</h3>
        <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
          <li>Sarah Johnson - CEO</li>
          <li>Michael Chen - CTO</li>
          <li>Emily Rodriguez - Design Lead</li>
        </ul>
      </div>
    ))}
  </div>
</section>`;

  const expandableBioReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="space-y-4">
    {[
      ["Sarah Johnson", "Founder"],
      ["Michael Chen", "CTO"],
      ["Emily Rodriguez", "Design Lead"],
    ].map(([name, role]) => (
      <details key={name} className="rounded-xl border border-slate-200 p-5 dark:border-slate-800">
        <summary className="cursor-pointer list-none">
          <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
        </summary>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Experienced leader focused on product excellence and team growth.</p>
      </details>
    ))}
  </div>
</section>`;

  const hoverRevealTeamReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="group relative overflow-hidden rounded-xl bg-slate-800 p-6 text-white">
        <div className="h-40 rounded-lg bg-slate-700" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition group-hover:opacity-100" />
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-semibold">Member {i}</p>
          <p className="text-sm text-slate-200">Short bio and role summary</p>
        </div>
      </div>
    ))}
  </div>
</section>`;

  const teamSpotlightReactSnippet = `<section className="bg-white py-16 dark:bg-slate-950">
  <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
    <div className="h-72 rounded-2xl bg-slate-200 dark:bg-slate-700" />
    <div>
      <p className="text-sm font-medium text-blue-600">Team Spotlight</p>
      <h3 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Meet Sarah Johnson</h3>
      <p className="mt-4 text-slate-600 dark:text-slate-400">Sarah leads product strategy and helps teams ship meaningful experiences quickly.</p>
      <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">Read Story</button>
    </div>
  </div>
</section>`;

  const roleFilterReactSnippet = `<section className="bg-slate-50 py-16 dark:bg-slate-900">
  <div className="mb-6 flex flex-wrap gap-2">
    {[
      "All",
      "Leadership",
      "Engineering",
      "Design",
      "Marketing",
    ].map((role, i) => (
      <button key={role} className="rounded-full bg-white px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300">
        {role}
      </button>
    ))}
  </div>
  <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
    {["Alex", "Priya", "Noah", "Sofia", "Iris", "Mateo"].map((name) => (
      <div key={name} className="rounded-xl bg-white p-5 shadow-sm dark:bg-slate-800">
        <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">Role</p>
      </div>
    ))}
  </div>
</section>`;

  return (
    <>
      <Navigation />
      <Hero
        title="Teams Sections"
        subtitle="Team member showcase sections built with shadcn/ui and Tailwind CSS 4. Copy and deploy."
      />

      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Team Block 1: Grid Layout */}
          <div className="relative">
            <SectionDivider title="Team Grid">
              <CopySnippetButtons
                sectionRef={sectionRef1}
                reactSnippet={teamGridReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef2}
                reactSnippet={teamHoverCardsReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef3}
                reactSnippet={teamSocialLinksReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef4}
                reactSnippet={twoColumnTeamReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef5}
                reactSnippet={expandableBioReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef6}
                reactSnippet={hoverRevealTeamReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef7}
                reactSnippet={teamSpotlightReactSnippet}
              />
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
              <CopySnippetButtons
                sectionRef={sectionRef8}
                reactSnippet={roleFilterReactSnippet}
              />
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
