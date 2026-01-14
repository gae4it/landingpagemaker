"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  CheckCircle,
  AlertCircle,
  Loader,
  Eye,
  EyeOff,
} from "lucide-react";
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
  const [showPassword, setShowPassword] = useState(false);

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
      <main className="bg-background min-h-screen py-16">
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors">
                  Solid Button
                </button>
                <button className="px-6 py-3 bg-slate-600 dark:bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors">
                  Secondary
                </button>
                <button className="px-6 py-3 bg-green-600 dark:bg-green-700 text-white font-semibold rounded-lg hover:bg-green-700 dark:hover:bg-green-800 transition-colors">
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-6 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-900 transition-colors">
                  Outline Button
                </button>
                <button className="px-6 py-3 border-2 border-slate-400 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
                  Secondary
                </button>
                <button className="px-6 py-3 border-2 border-red-600 dark:border-red-500 text-red-600 dark:text-red-400 font-semibold rounded-lg hover:bg-red-50 dark:hover:bg-slate-900 transition-colors">
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-6 py-3 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  Ghost Button
                </button>
                <button className="px-6 py-3 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-900 transition-colors">
                  Blue Ghost
                </button>
                <button className="px-6 py-3 text-slate-500 dark:text-slate-400 font-semibold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="flex flex-wrap gap-4 items-center">
                <button className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors flex items-center gap-2">
                  <Loader size={18} className="animate-spin" />
                  Loading...
                </button>
                <button className="px-6 py-3 bg-slate-600 dark:bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors flex items-center gap-2">
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={formInput}
                    onChange={(e) => setFormInput(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Category
                  </label>
                  <select
                    value={selectValue}
                    onChange={(e) => setSelectValue(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={textareaValue}
                    onChange={(e) => setTextareaValue(e.target.value)}
                    placeholder="Enter your message..."
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="space-y-4 max-w-md">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkboxChecked}
                    onChange={(e) => setCheckboxChecked(e.target.checked)}
                    className="w-5 h-5 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
                    I agree to the terms and conditions
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-5 h-5 border border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-900 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="space-y-4 max-w-md">
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Select an option
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="option"
                        value="option1"
                        checked={radioSelected === "option1"}
                        onChange={(e) => setRadioSelected(e.target.value)}
                        className="w-5 h-5 border border-slate-300 dark:border-slate-600 rounded-full bg-white dark:bg-slate-900 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-slate-700 dark:text-slate-300">
                        Option 1
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="option"
                        value="option2"
                        checked={radioSelected === "option2"}
                        onChange={(e) => setRadioSelected(e.target.value)}
                        className="w-5 h-5 border border-slate-300 dark:border-slate-600 rounded-full bg-white dark:bg-slate-900 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="flex flex-wrap gap-3 items-center">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded">
                  New
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold rounded">
                  Active
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-semibold rounded">
                  Warning
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-sm font-semibold rounded">
                  Danger
                </span>
                <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-semibold rounded">
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="flex flex-wrap gap-3 items-center">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-semibold rounded-full">
                  Technology
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-semibold rounded-full">
                  Design
                </span>
                <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-sm font-semibold rounded-full">
                  Marketing
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-semibold rounded-full">
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm hover:shadow-md dark:shadow-none transition-shadow">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Card Title
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    This is a simple card component with content. You can use it to display information in an organized way.
                  </p>
                  <button className="px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors">
                    Learn More
                  </button>
                </div>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg p-6 shadow-sm hover:shadow-md dark:shadow-none transition-shadow">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    Another Card
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Cards are versatile containers that work well in grids or layouts.
                  </p>
                  <button className="px-4 py-2 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 font-semibold rounded hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-slate-900 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <AlertCircle className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-blue-900 dark:text-blue-200">Info Alert</h3>
                    <p className="text-blue-800 dark:text-blue-300 text-sm">
                      This is an informational alert message.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-slate-900 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle className="text-green-600 dark:text-green-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-green-900 dark:text-green-200">Success Alert</h3>
                    <p className="text-green-800 dark:text-green-300 text-sm">
                      Your operation completed successfully.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-slate-900 border border-red-200 dark:border-red-800 rounded-lg">
                  <AlertCircle className="text-red-600 dark:text-red-400 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h3 className="font-semibold text-red-900 dark:text-red-200">Error Alert</h3>
                    <p className="text-red-800 dark:text-red-300 text-sm">
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="space-y-6 max-w-md">
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    25% Complete
                  </p>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 dark:bg-blue-500 w-1/4"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    60% Complete
                  </p>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 dark:bg-green-500 w-3/5"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    100% Complete
                  </p>
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-600 dark:bg-yellow-500 w-full"></div>
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
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-8 sm:p-12"
            >
              <div className="flex flex-wrap gap-8 items-center justify-center py-12">
                <div className="flex flex-col items-center gap-2">
                  <Loader className="text-blue-600 dark:text-blue-400 animate-spin" size={32} />
                  <p className="text-sm text-slate-600 dark:text-slate-400">Standard Spinner</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 border-4 border-slate-200 dark:border-slate-700 border-t-blue-600 dark:border-t-blue-400 rounded-full animate-spin"></div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Ring Spinner</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0s" }}></div>
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Dot Loader</p>
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
