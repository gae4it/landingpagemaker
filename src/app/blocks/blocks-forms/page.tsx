"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  Mail,
  Upload,
  CreditCard,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useRef, type RefObject } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksFormsPage() {
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
        title="Forms Sections"
        subtitle="Beautiful form sections built with shadcn/ui and Tailwind CSS 4. Copy and deploy."
      />

      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Form Block 1: Contact Form */}
          <div className="relative">
            <SectionDivider title="Contact Form">
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
              <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                    Get in touch
                  </h2>
                  <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                    We&apos;d love to hear from you. Fill out the form below.
                  </p>
                </div>
                <form className="mt-12 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-50"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-50"
                      placeholder="Your message here..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </section>
          </div>

          {/* Form Block 2: Newsletter Signup */}
          <div className="relative">
            <SectionDivider title="Newsletter Signup">
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
              <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
                <Mail className="mx-auto mb-6 h-12 w-12 text-neutral-900 dark:text-neutral-50" />
                <h2 className="text-3xl font-bold text-neutral-950 sm:text-4xl dark:text-neutral-50">
                  Subscribe to our newsletter
                </h2>
                <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
                  Get the latest updates and exclusive content delivered to your
                  inbox.
                </p>
                <form className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="max-w-md flex-1 rounded-lg border border-neutral-300 bg-white px-5 py-3.5 text-neutral-900 placeholder:text-neutral-500 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-50"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-8 py-3.5 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
                <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </section>
          </div>

          {/* Form Block 3: Multi-Step Wizard */}
          <div className="relative">
            <SectionDivider title="Multi-Step Form (Wizard)">
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
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 flex items-center justify-center">
                  {[1, 2, 3].map((step, idx) => (
                    <div key={step} className="flex items-center">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          idx === 0
                            ? "bg-neutral-900 text-white dark:bg-neutral-50 dark:text-neutral-900"
                            : "bg-neutral-200 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                        } font-semibold`}
                      >
                        {step}
                      </div>
                      {idx < 2 && (
                        <div
                          className={`mx-2 h-0.5 w-16 ${
                            idx === 0
                              ? "bg-neutral-900 dark:bg-neutral-50"
                              : "bg-neutral-200 dark:bg-neutral-800"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
                  <h3 className="mb-6 text-xl font-semibold text-neutral-950 dark:text-neutral-50">
                    Step 1: Personal Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50 dark:focus:ring-neutral-50"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50 dark:focus:ring-neutral-50"
                      />
                    </div>
                    <div className="flex justify-between pt-6">
                      <button className="rounded-lg border border-neutral-300 px-6 py-2.5 font-semibold text-neutral-700 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800">
                        Back
                      </button>
                      <button className="rounded-lg bg-neutral-900 px-6 py-2.5 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200">
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Form Block 4: Validation Feedback */}
          <div className="relative">
            <SectionDivider title="Form with Validation Feedback">
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
              <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                  Create Account
                </h2>
                <form className="mt-8 space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Username
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-green-500 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-green-500 focus:outline-none dark:border-green-600 dark:bg-neutral-900 dark:text-neutral-50"
                    />
                    <p className="mt-2 flex items-center text-sm text-green-600 dark:text-green-400">
                      <CheckCircle className="mr-1.5 h-4 w-4" />
                      Username is available
                    </p>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-red-500 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-red-500 focus:outline-none dark:border-red-600 dark:bg-neutral-900 dark:text-neutral-50"
                    />
                    <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                      Please enter a valid email address
                    </p>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:ring-neutral-50"
                    />
                    <div className="mt-2 space-y-1">
                      <p className="flex items-center text-xs text-neutral-600 dark:text-neutral-400">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-green-500" />
                        At least 8 characters
                      </p>
                      <p className="flex items-center text-xs text-neutral-600 dark:text-neutral-400">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                        Contains a number
                      </p>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Create account
                  </button>
                </form>
              </div>
            </section>
          </div>

          {/* Form Block 5: Payment Form (Stripe) */}
          <div className="relative">
            <SectionDivider title="Payment Form (Stripe Style)">
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
              <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
                  <h2 className="mb-6 text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                    Payment Details
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Card Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 pr-12 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50 dark:focus:ring-neutral-50"
                        />
                        <CreditCard className="absolute top-3.5 right-3 h-5 w-5 text-neutral-400" />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50 dark:focus:ring-neutral-50"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          CVC
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50 dark:focus:ring-neutral-50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-50 dark:focus:ring-neutral-50"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
                    >
                      Pay $99.00
                    </button>
                    <p className="text-center text-xs text-neutral-500 dark:text-neutral-400">
                      Your payment information is secure and encrypted
                    </p>
                  </form>
                </div>
              </div>
            </section>
          </div>

          {/* Form Block 6: File Upload */}
          <div className="relative">
            <SectionDivider title="File Upload Form">
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
              <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                  Upload Document
                </h2>
                <form className="mt-8 space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Document Title
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:ring-neutral-50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Upload File
                    </label>
                    <div className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 bg-white p-12 transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600">
                      <Upload className="mb-4 h-12 w-12 text-neutral-400" />
                      <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Description
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:ring-neutral-50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Upload Document
                  </button>
                </form>
              </div>
            </section>
          </div>

          {/* Form Block 7: Select/Dropdown Fields */}
          <div className="relative">
            <SectionDivider title="Form with Select/Dropdown Fields">
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
              <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                  Booking Form
                </h2>
                <form className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Service Type
                      </label>
                      <select className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:ring-neutral-50">
                        <option>Choose a service</option>
                        <option>Consultation</option>
                        <option>Design</option>
                        <option>Development</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                        Duration
                      </label>
                      <select className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:ring-neutral-50">
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>2 hours</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:ring-neutral-50"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Time Slot
                    </label>
                    <select className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 focus:ring-2 focus:ring-neutral-900 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:ring-neutral-50">
                      <option>9:00 AM - 10:00 AM</option>
                      <option>10:00 AM - 11:00 AM</option>
                      <option>2:00 PM - 3:00 PM</option>
                      <option>3:00 PM - 4:00 PM</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </section>
          </div>

          {/* Form Block 8: Checkbox/Radio Options */}
          <div className="relative">
            <SectionDivider title="Form with Checkbox/Radio Options">
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
              <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-neutral-950 dark:text-neutral-50">
                  Preferences Survey
                </h2>
                <form className="mt-8 space-y-8">
                  <div>
                    <label className="mb-4 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Choose your plan
                    </label>
                    <div className="space-y-3">
                      {[
                        "Starter ($9/mo)",
                        "Professional ($29/mo)",
                        "Enterprise ($99/mo)",
                      ].map((plan) => (
                        <label
                          key={plan}
                          className="flex cursor-pointer items-center rounded-lg border border-neutral-300 bg-white p-4 transition-all hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
                        >
                          <input
                            type="radio"
                            name="plan"
                            className="h-4 w-4 border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-900"
                          />
                          <span className="ml-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                            {plan}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-4 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      Select features you need
                    </label>
                    <div className="space-y-3">
                      {[
                        "Advanced Analytics",
                        "API Access",
                        "Priority Support",
                        "Custom Integrations",
                      ].map((feature) => (
                        <label
                          key={feature}
                          className="flex cursor-pointer items-center rounded-lg border border-neutral-300 bg-white p-4 transition-all hover:border-neutral-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
                        >
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-900"
                          />
                          <span className="ml-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                            {feature}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-neutral-900 dark:border-neutral-700 dark:bg-neutral-900"
                    />
                    <label className="ml-3 text-sm text-neutral-700 dark:text-neutral-300">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="underline hover:text-neutral-900 dark:hover:text-neutral-50"
                      >
                        terms and conditions
                      </a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-neutral-900 px-6 py-3 font-semibold text-white hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Submit Survey
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
