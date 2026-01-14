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
  Globe,
  Calendar,
  MessageCircle,
  Loader,
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
              className="bg-slate-50 dark:bg-slate-900 py-16 rounded-lg"
            >
              <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                      Get in Touch
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 mb-8">
                      Have questions? We'd love to hear from you. Send us a message
                      and we'll get back to you as soon as possible.
                    </p>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <Mail className="text-blue-600 shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            Email
                          </p>
                          <a
                            href="mailto:hello@company.com"
                            className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                          >
                            hello@company.com
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Phone className="text-blue-600 shrink-0 mt-1" size={20} />
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">
                            Phone
                          </p>
                          <a
                            href="tel:+1234567890"
                            className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                          >
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <MapPin className="text-blue-600 shrink-0 mt-1" size={20} />
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
                    <form className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                      <div className="mb-4">
                        <label className="block text-slate-900 dark:text-white font-medium mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-slate-900 dark:text-white font-medium mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-slate-900 dark:text-white font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Your message..."
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center gap-2"
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
              className="bg-white dark:bg-slate-950 rounded-lg overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3">
                <div className="p-8 col-span-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                    Contact Us
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        EMAIL
                      </p>
                      <a
                        href="mailto:contact@company.com"
                        className="text-slate-900 dark:text-white font-medium hover:text-blue-600"
                      >
                        contact@company.com
                      </a>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        PHONE
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="text-slate-900 dark:text-white font-medium hover:text-blue-600"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                    <div>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        ADDRESS
                      </p>
                      <p className="text-slate-900 dark:text-white font-medium">
                        123 Business Ave
                        <br />
                        City, State 12345
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 bg-slate-200 dark:bg-slate-800 h-96 flex items-center justify-center">
                  <div className="text-slate-400 flex items-center gap-2">
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
              className="bg-slate-50 dark:bg-slate-900 py-16 rounded-lg"
            >
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  Our Offices
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  Visit us at any of our global locations
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-white dark:bg-slate-800 p-6 rounded-lg"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">
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
                        <a href="mailto:office@company.com">office@company.com</a>
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
              className="bg-white dark:bg-slate-950 py-16 rounded-lg"
            >
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
                  How to Reach Us
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center">
                    <Phone className="mx-auto mb-4 text-blue-600" size={32} />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      Phone
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-slate-600 dark:text-slate-400 hover:text-blue-600"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
                    <Mail className="mx-auto mb-4 text-green-600" size={32} />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@company.com"
                      className="text-slate-600 dark:text-slate-400 hover:text-green-600 text-sm"
                    >
                      hello@company.com
                    </a>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center">
                    <MapPin className="mx-auto mb-4 text-purple-600" size={32} />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      Address
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      123 Main St, City
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg text-center">
                    <MessageCircle
                      className="mx-auto mb-4 text-orange-600"
                      size={32}
                    />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                      Chat
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
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
              className="bg-slate-50 dark:bg-slate-900 py-16 rounded-lg"
            >
              <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                  Schedule a Meeting
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                      Quick Contact
                    </h3>
                    <form className="space-y-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <textarea
                        placeholder="Tell us about your project..."
                        rows={3}
                        className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-lg">
                    <Calendar className="text-blue-600 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                      Book a Time
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                      Select a convenient time for a 30-minute call with our team.
                    </p>
                    <div className="space-y-2">
                      {["10:00 AM", "2:00 PM", "4:00 PM"].map((time) => (
                        <button
                          key={time}
                          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-600 transition-colors"
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
              className="bg-white dark:bg-slate-950 py-16 rounded-lg"
            >
              <div className="max-w-2xl mx-auto px-4">
                <div className="bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden shadow-lg">
                  <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
                    <h3 className="font-bold">Live Chat Support</h3>
                    <span className="flex items-center gap-2 text-sm">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      Available
                    </span>
                  </div>
                  <div className="p-6 h-96 flex flex-col">
                    <div className="flex-1 space-y-4 mb-4 overflow-y-auto">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full shrink-0"></div>
                        <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3 max-w-xs">
                          <p className="text-slate-900 dark:text-white text-sm">
                            Hello! How can we help you today?
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end">
                        <div className="bg-slate-200 dark:bg-slate-700 rounded-lg p-3 max-w-xs">
                          <p className="text-slate-900 dark:text-white text-sm">
                            I have a question about pricing.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
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
              className="bg-slate-50 dark:bg-slate-900 py-16 rounded-lg"
            >
              <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                  Support Channels
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="text-left py-4 px-4 font-bold text-slate-900 dark:text-white">
                          Channel
                        </th>
                        <th className="text-left py-4 px-4 font-bold text-slate-900 dark:text-white">
                          Response Time
                        </th>
                        <th className="text-left py-4 px-4 font-bold text-slate-900 dark:text-white">
                          Availability
                        </th>
                        <th className="text-left py-4 px-4 font-bold text-slate-900 dark:text-white">
                          Contact
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Email", "24-48 hours", "24/7", "hello@company.com"],
                        ["Phone", "Immediate", "Mon-Fri 9AM-5PM", "+1 (234) 567-890"],
                        ["Chat", "5-10 minutes", "9AM-10PM daily", "Live Chat"],
                      ].map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-slate-200 dark:border-slate-700"
                        >
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className="py-4 px-4 text-slate-600 dark:text-slate-400"
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
              className="bg-white dark:bg-slate-950 py-16 rounded-lg"
            >
              <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
                  Send us Your Project Details
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block font-medium text-slate-900 dark:text-white mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-900 dark:text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-900 dark:text-white mb-2">
                      Project Description
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <div className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center hover:border-blue-600 transition-colors">
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
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium flex items-center justify-center gap-2"
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
