"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Copy, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { useRef, useState } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksUIPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);
  const sectionRef9 = useRef<HTMLElement>(null);
  const sectionRef10 = useRef<HTMLElement>(null);
  const sectionRef11 = useRef<HTMLElement>(null);
  const sectionRef12 = useRef<HTMLElement>(null);
  const sectionRef13 = useRef<HTMLElement>(null);
  const sectionRef14 = useRef<HTMLElement>(null);
  const sectionRef15 = useRef<HTMLElement>(null);

  const [showCopied, triggerCopied] = useCopyNotification();
  const [formInput, setFormInput] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [radioSelected, setRadioSelected] = useState("");

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
        title="UI Components"
        subtitle="Beautiful UI components and variants. Copy, paste, and customize for your next project."
      />
      <main className="min-h-screen bg-background py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Button Solid */}
          <div className="relative">
            <SectionDivider title="Button Solid (Primary Filled)">
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
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                  Solid Button
                </button>
                <button className="rounded-lg bg-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-800">
                  Secondary
                </button>
                <button className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800">
                  Success
                </button>
              </div>
            </section>
          </div>

          {/* Variant 2: Button Outline */}
          <div className="relative">
            <SectionDivider title="Button Outline (Bordered)">
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
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-lg border-2 border-blue-600 px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-slate-900">
                  Outline Button
                </button>
                <button className="rounded-lg border-2 border-slate-400 px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-900">
                  Secondary
                </button>
                <button className="rounded-lg border-2 border-red-600 px-6 py-3 font-semibold text-red-600 transition-colors hover:bg-red-50 dark:border-red-500 dark:text-red-400 dark:hover:bg-slate-900">
                  Danger
                </button>
              </div>
            </section>
          </div>

          {/* Variant 3: Button Ghost */}
          <div className="relative">
            <SectionDivider title="Button Ghost (Transparent)">
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
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex flex-wrap items-center gap-4">
                <button className="rounded-lg px-6 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                  Ghost Button
                </button>
                <button className="rounded-lg px-6 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-slate-900">
                  Blue Ghost
                </button>
                <button className="rounded-lg px-6 py-3 font-semibold text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
                  Subtle
                </button>
              </div>
            </section>
          </div>

          {/* Variant 4: Button Loading */}
          <div className="relative">
            <SectionDivider title="Button Loading (Animated)">
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
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                  <Loader size={18} className="animate-spin" />
                  Loading...
                </button>
                <button className="flex items-center gap-2 rounded-lg bg-slate-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-800">
                  <Loader size={18} className="animate-spin" />
                  Processing
                </button>
              </div>
            </section>
          </div>

          {/* Variant 5: Form Input */}
          <div className="relative">
            <SectionDivider title="Form Input (Text Field)">
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
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="max-w-md space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formInput}
                    onChange={(e) => setFormInput(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:ring-blue-400"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Variant 6: Form Select */}
          <div className="relative">
            <SectionDivider title="Form Select (Dropdown)">
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
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="max-w-md space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Category
                  </label>
                  <select
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-400"
                  >
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 7: Form Textarea */}
          <div className="relative">
            <SectionDivider title="Form Textarea (Multi-line)">
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
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="max-w-md space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    placeholder="Enter your message..."
                    rows={4}
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-white dark:placeholder-slate-500 dark:focus:ring-blue-400"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Variant 8: Form Checkbox */}
          <div className="relative">
            <SectionDivider title="Form Checkbox">
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
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="max-w-md space-y-4">
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    checked={checkboxChecked}
                    onChange={(e) => setCheckboxChecked(e.target.checked)}
                    className="h-5 w-5 cursor-pointer rounded border border-slate-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900"
                  />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    I agree to the terms and conditions
                  </span>
                </label>
                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="h-5 w-5 cursor-pointer rounded border border-slate-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900"
                  />
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Subscribe to newsletter
                  </span>
                </label>
              </div>
            </section>
          </div>

          {/* Variant 9: Form Radio */}
          <div className="relative">
            <SectionDivider title="Form Radio (Radio Button)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef9)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef9}
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="max-w-md space-y-4">
                <div>
                  <p className="mb-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    Select an option
                  </p>
                  <div className="space-y-2">
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="radio"
                        name="option"
                        value="option1"
                        checked={radioSelected === "option1"}
                        onChange={(e) => setRadioSelected(e.target.value)}
                        className="h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900"
                      />
                      <span className="text-slate-700 dark:text-slate-300">
                        Option 1
                      </span>
                    </label>
                    <label className="flex cursor-pointer items-center gap-3">
                      <input
                        type="radio"
                        name="option"
                        value="option2"
                        checked={radioSelected === "option2"}
                        onChange={(e) => setRadioSelected(e.target.value)}
                        className="h-5 w-5 cursor-pointer rounded-full border border-slate-300 bg-white text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-900"
                      />
                      <span className="text-slate-700 dark:text-slate-300">
                        Option 2
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 10: Badge */}
          <div className="relative">
            <SectionDivider title="Badge (Small Label Tags)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef10)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef10}
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  New
                </span>
                <span className="rounded bg-green-100 px-3 py-1 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                  Active
                </span>
                <span className="rounded bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                  Warning
                </span>
                <span className="rounded bg-red-100 px-3 py-1 text-sm font-semibold text-red-800 dark:bg-red-900 dark:text-red-200">
                  Danger
                </span>
                <span className="rounded bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-800 dark:bg-slate-700 dark:text-slate-200">
                  Default
                </span>
              </div>
            </section>
          </div>

          {/* Variant 11: Pills */}
          <div className="relative">
            <SectionDivider title="Pills (Rounded Badge Variants)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef11)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef11}
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Technology
                </span>
                <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  Design
                </span>
                <span className="rounded-full bg-pink-100 px-4 py-2 text-sm font-semibold text-pink-800 dark:bg-pink-900 dark:text-pink-200">
                  Marketing
                </span>
                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
                  Development
                </span>
              </div>
            </section>
          </div>

          {/* Variant 12: Card */}
          <div className="relative">
            <SectionDivider title="Card (Content Container)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef12)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef12}
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                    Card Title
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-400">
                    This is a simple card component with content. You can use it
                    to display information in an organized way.
                  </p>
                  <button className="rounded bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                    Learn More
                  </button>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
                  <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                    Another Card
                  </h3>
                  <p className="mb-4 text-slate-600 dark:text-slate-400">
                    Cards are versatile containers that work well in grids or
                    layouts.
                  </p>
                  <button className="rounded border border-blue-600 px-4 py-2 font-semibold text-blue-600 transition-colors hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-slate-800">
                    View
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 13: Alert */}
          <div className="relative">
            <SectionDivider title="Alert (Message Box)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef13)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef13}
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-slate-900">
                  <AlertCircle
                    className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-200">
                      Info Alert
                    </h3>
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      This is an informational alert message.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-slate-900">
                  <CheckCircle
                    className="mt-0.5 shrink-0 text-green-600 dark:text-green-400"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-green-900 dark:text-green-200">
                      Success Alert
                    </h3>
                    <p className="text-sm text-green-800 dark:text-green-300">
                      Your operation completed successfully.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-slate-900">
                  <AlertCircle
                    className="mt-0.5 shrink-0 text-red-600 dark:text-red-400"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-red-900 dark:text-red-200">
                      Error Alert
                    </h3>
                    <p className="text-sm text-red-800 dark:text-red-300">
                      An error occurred while processing your request.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 14: Progress Bar */}
          <div className="relative">
            <SectionDivider title="Progress Bar (Progress Indicator)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef14)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef14}
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="max-w-md space-y-6">
                <div>
                  <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    25% Complete
                  </p>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full w-1/4 bg-blue-600 dark:bg-blue-500"></div>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    60% Complete
                  </p>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full w-3/5 bg-green-600 dark:bg-green-500"></div>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm font-medium text-slate-700 dark:text-slate-300">
                    100% Complete
                  </p>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div className="h-full w-full bg-yellow-600 dark:bg-yellow-500"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 15: Loader/Spinner */}
          <div className="relative">
            <SectionDivider title="Loader/Spinner (Loading Animation)">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleCopy(sectionRef15)}
                className="absolute top-2 right-2"
                aria-label="Copy section HTML"
              >
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section
              ref={sectionRef15}
              className="rounded-lg border border-slate-200 bg-white p-8 sm:p-12 dark:border-slate-800 dark:bg-slate-950"
            >
              <div className="flex flex-wrap items-center justify-center gap-8 py-12">
                <div className="flex flex-col items-center gap-2">
                  <Loader
                    className="animate-spin text-blue-600 dark:text-blue-400"
                    size={32}
                  />
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Standard Spinner
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600 dark:border-slate-700 dark:border-t-blue-400"></div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Ring Spinner
                  </p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1">
                    <div
                      className="h-2 w-2 animate-pulse rounded-full bg-blue-600 dark:bg-blue-400"
                      style={{ animationDelay: "0s" }}
                    ></div>
                    <div
                      className="h-2 w-2 animate-pulse rounded-full bg-blue-600 dark:bg-blue-400"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="h-2 w-2 animate-pulse rounded-full bg-blue-600 dark:bg-blue-400"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Dot Loader
                  </p>
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
