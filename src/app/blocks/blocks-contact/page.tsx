"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  MessageCircle,
  Globe as GlobeIcon,
} from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksContactPage() {
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
        title="Contact Sections"
        subtitle="Contact blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Contact Form + Info (2 Columns) */}
          <div className="relative">
            <SectionDivider title="Contact Form + Info">
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
              <div className="mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  <div>
                    <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
                      Get in Touch
                    </h2>
                    <p className="mb-8 text-slate-600 dark:text-slate-300">
                      Have questions? We&apos;d love to hear from you. Send us a
                      message and we&apos;ll get back to you as soon as
                      possible.
                    </p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <Mail
                          className="mt-1 shrink-0 text-blue-600"
                          size={20}
                        />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            Email
                          </p>
                          <a
                            href="mailto:hello@company.com"
                            className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                          >
                            hello@company.com
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Phone
                          className="mt-1 shrink-0 text-blue-600"
                          size={20}
                        />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            Phone
                          </p>
                          <a
                            href="tel:+1234567890"
                            className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                          >
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <MapPin
                          className="mt-1 shrink-0 text-blue-600"
                          size={20}
                        />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            Address
                          </p>
                          <p className="text-slate-600 dark:text-slate-400">
                            123 Main Street
                            <br />
                            City, State 12345
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <form className="rounded-lg bg-white p-8 shadow-lg dark:bg-slate-800">
                      <div className="mb-4">
                        <label className="mb-2 block font-medium text-slate-900 dark:text-white">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="mb-2 block font-medium text-slate-900 dark:text-white">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="mb-2 block font-medium text-slate-900 dark:text-white">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Your message..."
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-white"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
                      >
                        <Send size={18} />
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 2: Contact with Map Placeholder */}
          <div className="relative">
            <SectionDivider title="Contact with Map">
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
              className="overflow-hidden rounded-lg bg-white dark:bg-slate-950"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="col-span-1 p-8">
                  <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                    Contact Us
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        EMAIL
                      </p>
                      <a
                        href="mailto:contact@company.com"
                        className="font-medium text-slate-900 hover:text-blue-600 dark:text-white"
                      >
                        contact@company.com
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        PHONE
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="font-medium text-slate-900 hover:text-blue-600 dark:text-white"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        ADDRESS
                      </p>
                      <p className="font-medium text-slate-900 dark:text-white">
                        123 Business Ave
                        <br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 flex h-96 items-center justify-center bg-slate-200 dark:bg-slate-800">
                  <div className="flex items-center gap-2 text-slate-400">
                    <GlobeIcon size={24} />
                    <span>Map Integration Here</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 3: Office Locations Grid */}
          <div className="relative">
            <SectionDivider title="Office Locations">
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
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Our Offices
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-300">
                  Visit us at any of our global locations
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-white p-6 dark:bg-slate-800"
                  >
                    <h3 className="mb-4 font-bold text-slate-900 dark:text-white">
                      {["New York", "London", "Tokyo"][i - 1]}
                    </h3>
                    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                      <p>
                        123 Business Street
                        <br />
                        {["New York, NY 10001", "London, UK W1"][i - 1]}
                      </p>
                      <p>
                        Phone: <a href="tel:+1234567890">+1 (234) 567-890</a>
                      </p>
                      <p>
                        Email:{" "}
                        <a href="mailto:office@company.com">
                          office@company.com
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 4: Contact Info Cards */}
          <div className="relative">
            <SectionDivider title="Contact Info Cards">
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
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
                  How to Reach Us
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                  <div className="rounded-lg bg-blue-50 p-6 text-center dark:bg-blue-900/20">
                    <Phone className="mx-auto mb-4 text-blue-600" size={32} />
                    <h3 className="mb-2 font-bold text-slate-900 dark:text-white">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-slate-600 hover:text-blue-600 dark:text-slate-400"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div className="rounded-lg bg-green-50 p-6 text-center dark:bg-green-900/20">
                    <Mail className="mx-auto mb-4 text-green-600" size={32} />
                    <h3 className="mb-2 font-bold text-slate-900 dark:text-white">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@company.com"
                      className="text-sm text-slate-600 hover:text-green-600 dark:text-slate-400"
                    >
                      hello@company.com
                    </a>
                  </div>
                  <div className="rounded-lg bg-purple-50 p-6 text-center dark:bg-purple-900/20">
                    <MapPin
                      className="mx-auto mb-4 text-purple-600"
                      size={32}
                    />
                    <h3 className="mb-2 font-bold text-slate-900 dark:text-white">
                      Address
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      123 Main St, City
                    </p>
                  </div>
                  <div className="rounded-lg bg-orange-50 p-6 text-center dark:bg-orange-900/20">
                    <MessageCircle
                      className="mx-auto mb-4 text-orange-600"
                      size={32}
                    />
                    <h3 className="mb-2 font-bold text-slate-900 dark:text-white">
                      Chat
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Live support
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 5: Contact + Calendar Booking */}
          <div className="relative">
            <SectionDivider title="Contact + Calendar Booking">
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
              className="rounded-lg bg-slate-50 py-16 dark:bg-slate-900"
            >
              <div className="mx-auto max-w-4xl px-4">
                <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
                  Schedule a Meeting
                </h2>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                  <div>
                    <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
                      Quick Contact
                    </h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      />
                      <textarea
                        placeholder="Tell us about your project..."
                        rows={3}
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white hover:bg-blue-700"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className="rounded-lg bg-white p-8 dark:bg-slate-800">
                    <Calendar className="mb-4 text-blue-600" size={32} />
                    <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                      Book a Time
                    </h3>
                    <p className="mb-6 text-slate-600 dark:text-slate-400">
                      Select a convenient time for a 30-minute call with our
                      team.
                    </p>
                    <div className="space-y-2">
                      {["10:00 AM", "2:00 PM", "4:00 PM"].map((time) => (
                        <button
                          key={time}
                          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-600 transition-colors hover:border-blue-600 hover:bg-blue-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-blue-900/20"
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 6: Live Chat Widget */}
          <div className="relative">
            <SectionDivider title="Contact with Live Chat">
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
              <div className="mx-auto max-w-2xl px-4">
                <div className="overflow-hidden rounded-lg bg-slate-50 shadow-lg dark:bg-slate-900">
                  <div className="flex items-center justify-between bg-blue-600 p-4 text-white">
                    <h3 className="font-bold">Live Chat Support</h3>
                    <span className="flex items-center gap-2 text-sm">
                      <span className="h-2 w-2 rounded-full bg-green-400"></span>
                      Available
                    </span>
                  </div>
                  <div className="flex h-96 flex-col p-6">
                    <div className="mb-4 flex-1 space-y-4 overflow-y-auto">
                      <div className="flex gap-3">
                        <div className="h-8 w-8 shrink-0 rounded-full bg-blue-600"></div>
                        <div className="max-w-xs rounded-lg bg-blue-100 p-3 dark:bg-blue-900">
                          <p className="text-sm text-slate-900 dark:text-white">
                            Hello! How can we help you today?
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end gap-3">
                        <div className="max-w-xs rounded-lg bg-slate-200 p-3 dark:bg-slate-700">
                          <p className="text-sm text-slate-900 dark:text-white">
                            I have a question about pricing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                      />
                      <button className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700">
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 7: Support Channels Matrix */}
          <div className="relative">
            <SectionDivider title="Support Channels Matrix">
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
              <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
                  Support Channels
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="px-4 py-4 text-left font-bold text-slate-900 dark:text-white">
                          Channel
                        </th>
                        <th className="px-4 py-4 text-left font-bold text-slate-900 dark:text-white">
                          Response Time
                        </th>
                        <th className="px-4 py-4 text-left font-bold text-slate-900 dark:text-white">
                          Availability
                        </th>
                        <th className="px-4 py-4 text-left font-bold text-slate-900 dark:text-white">
                          Contact
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Email", "24-48 hours", "24/7", "hello@company.com"],
                        [
                          "Phone",
                          "Immediate",
                          "Mon-Fri 9AM-5PM",
                          "+1 (234) 567-890",
                        ],
                        ["Chat", "5-10 minutes", "9AM-10PM daily", "Live Chat"],
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-slate-200 dark:border-slate-700"
                        >
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className="px-4 py-4 text-slate-600 dark:text-slate-400"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 8: Form with File Attachments */}
          <div className="relative">
            <SectionDivider title="Form with File Attachments">
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
              className="rounded-lg bg-white py-16 dark:bg-slate-950"
            >
              <div className="mx-auto max-w-2xl px-4">
                <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 dark:text-white">
                  Send us Your Project Details
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="mb-2 block font-medium text-slate-900 dark:text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-slate-900 dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-medium text-slate-900 dark:text-white">
                      Project Description
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-white"
                    ></textarea>
                  </div>
                  <div className="rounded-lg border-2 border-dashed border-slate-300 p-8 text-center transition-colors hover:border-blue-600 dark:border-slate-600">
                    <input type="file" className="hidden" />
                    <Mail className="mx-auto mb-2 text-slate-400" size={32} />
                    <p className="font-medium text-slate-900 dark:text-white">
                      Upload your files
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Drag and drop or click to select files
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 font-medium text-white hover:bg-blue-700"
                  >
                    <Send size={18} />
                    Submit Project
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
