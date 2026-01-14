"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import {
  Copy,
  ChevronDown,
  X,
  Info,
  HelpCircle,
  Eye,
  EyeOff,
} from "lucide-react";
import { useRef, useState } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksInteractionsPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);
  const [showCopied, triggerCopied] = useCopyNotification();

  // State for variant 1: Accordion
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(0);

  // State for variant 2: Tabs
  const [activeTab, setActiveTab] = useState(0);

  // State for variant 3: Toggle
  const [toggleState, setToggleState] = useState(false);

  // State for variant 4: Collapsible Sections
  const [expandedCollapsible, setExpandedCollapsible] = useState<number | null>(0);

  // State for variant 5: Expandable Cards
  const [expandedCards, setExpandedCards] = useState<number | null>(null);

  // State for variant 6: Modal Dialog
  const [showModal, setShowModal] = useState(false);

  // State for variant 7: Tooltip
  const [tooltipActive, setTooltipActive] = useState<number | null>(null);

  // State for variant 8: Popover
  const [activePopover, setActivePopover] = useState<number | null>(null);

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
        title="Interactive Components"
        subtitle="Interactive component blocks for dynamic user experiences. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Variant 1: Accordion */}
          <div className="relative">
            <SectionDivider title="Accordion (Expandable Items)">
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
              className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8"
            >
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h3>
                {[
                  {
                    title: "What is this product?",
                    content:
                      "This is a comprehensive design system for building modern web applications with beautiful components.",
                  },
                  {
                    title: "How do I get started?",
                    content:
                      "Simply copy any component, paste it into your project, and customize the styles to match your brand.",
                  },
                  {
                    title: "Is it free to use?",
                    content:
                      "Yes, all components are free to use for personal and commercial projects.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedAccordion(
                          expandedAccordion === index ? null : index
                        )
                      }
                      className="w-full flex items-center justify-between p-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-slate-600 dark:text-slate-400 transition-transform ${
                          expandedAccordion === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedAccordion === index && (
                      <div className="p-4 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 2: Tabs */}
          <div className="relative">
            <SectionDivider title="Tabs (Content Switcher)">
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
              className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8"
            >
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Product Features
                </h3>
                <div className="flex gap-2 mb-6 border-b border-slate-200 dark:border-slate-700">
                  {["Overview", "Details", "Reviews"].map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`px-4 py-3 font-medium transition-colors border-b-2 ${
                        activeTab === index
                          ? "border-blue-600 text-blue-600 dark:text-blue-400"
                          : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-300"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="text-slate-700 dark:text-slate-300">
                  {activeTab === 0 && (
                    <div>
                      <p className="mb-4">
                        Our product offers a comprehensive solution for modern web
                        development.
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>Fast and responsive design</li>
                        <li>Easy to customize</li>
                        <li>Well documented</li>
                      </ul>
                    </div>
                  )}
                  {activeTab === 1 && (
                    <div>
                      <p className="mb-4">
                        Built with modern technologies and best practices.
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>React 18+</li>
                        <li>TypeScript support</li>
                        <li>Tailwind CSS</li>
                      </ul>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div>
                      <p className="mb-4">
                        Loved by thousands of developers worldwide.
                      </p>
                      <ul className="list-disc list-inside space-y-2">
                        <li>5 stars from 1,000+ reviews</li>
                        <li>99% uptime guarantee</li>
                        <li>24/7 customer support</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 3: Toggle */}
          <div className="relative">
            <SectionDivider title="Toggle (On/Off Switch)">
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
              className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8"
            >
              <div className="max-w-2xl mx-auto space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  Settings
                </h3>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Dark Mode
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Enable dark theme
                    </p>
                  </div>
                  <button
                    onClick={() => setToggleState(!toggleState)}
                    className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors ${
                      toggleState
                        ? "bg-blue-600"
                        : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        toggleState ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-lg">
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">
                      Notifications
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Receive notifications
                    </p>
                  </div>
                  <button
                    onClick={() => setToggleState(!toggleState)}
                    className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors ${
                      toggleState
                        ? "bg-blue-600"
                        : "bg-slate-300 dark:bg-slate-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        toggleState ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Variant 4: Collapsible Sections */}
          <div className="relative">
            <SectionDivider title="Collapsible Sections (Expandable Cards)">
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
              className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8"
            >
              <div className="max-w-2xl mx-auto space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Documentation
                </h3>
                {[
                  {
                    title: "Getting Started",
                    content: "Installation and basic setup instructions.",
                  },
                  {
                    title: "API Reference",
                    content: "Complete API documentation and examples.",
                  },
                  {
                    title: "Advanced Usage",
                    content: "Advanced patterns and best practices.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`rounded-lg overflow-hidden transition-all ${
                      expandedCollapsible === index
                        ? "bg-white dark:bg-slate-800 shadow-md"
                        : "bg-slate-100 dark:bg-slate-800"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setExpandedCollapsible(
                          expandedCollapsible === index ? null : index
                        )
                      }
                      className="w-full flex items-center justify-between p-4 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {item.title}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-slate-600 dark:text-slate-400 transition-transform ${
                          expandedCollapsible === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expandedCollapsible === index && (
                      <div className="p-4 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-700">
                        {item.content}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Variant 5: Expandable Cards */}
          <div className="relative">
            <SectionDivider title="Expandable Cards (Click to Expand)">
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
              className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8"
            >
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Web Design",
                      preview: "Beautiful, responsive designs",
                      details:
                        "Create stunning web experiences with modern design principles.",
                    },
                    {
                      title: "Development",
                      preview: "Full-stack solutions",
                      details:
                        "Build powerful applications with cutting-edge technologies.",
                    },
                    {
                      title: "Consulting",
                      preview: "Expert guidance",
                      details:
                        "Get professional advice on your digital transformation.",
                    },
                    {
                      title: "Support",
                      preview: "24/7 assistance",
                      details:
                        "Round-the-clock support to ensure your success.",
                    },
                  ].map((card, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        setExpandedCards(
                          expandedCards === index ? null : index
                        )
                      }
                      className={`cursor-pointer rounded-lg p-6 transition-all ${
                        expandedCards === index
                          ? "bg-blue-50 dark:bg-blue-900 border-2 border-blue-500"
                          : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                      }`}
                    >
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                        {card.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {card.preview}
                      </p>
                      {expandedCards === index && (
                        <p className="mt-4 text-slate-700 dark:text-slate-300">
                          {card.details}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 6: Modal Dialog */}
          <div className="relative">
            <SectionDivider title="Modal Dialog (Popup)">
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
              className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8"
            >
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Alert Dialog Example
                </h3>
                <Button
                  onClick={() => setShowModal(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Open Modal
                </Button>

                {showModal && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-8 max-w-md mx-4 shadow-xl">
                      <div className="flex items-start justify-between mb-4">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                          Confirm Action
                        </h2>
                        <button
                          onClick={() => setShowModal(false)}
                          className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                        >
                          <X size={24} />
                        </button>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 mb-6">
                        Are you sure you want to proceed with this action?
                      </p>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setShowModal(false)}
                          className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-white rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => setShowModal(false)}
                          className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          {/* Variant 7: Tooltip */}
          <div className="relative">
            <SectionDivider title="Tooltip (Hover Popups)">
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
              className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8"
            >
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  Hover for Tooltip
                </h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Info, text: "Information" },
                    { icon: HelpCircle, text: "Help" },
                    { icon: Eye, text: "View" },
                    { icon: EyeOff, text: "Hide" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="relative inline-block"
                      onMouseEnter={() => setTooltipActive(index)}
                      onMouseLeave={() => setTooltipActive(null)}
                    >
                      <button className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 transition-colors">
                        <item.icon
                          size={24}
                          className="text-slate-600 dark:text-slate-400"
                        />
                      </button>
                      {tooltipActive === index && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-950 text-white text-sm rounded whitespace-nowrap z-10">
                          {item.text}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-950"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Variant 8: Popover */}
          <div className="relative">
            <SectionDivider title="Popover (Click-to-Show Panel)">
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
              className="bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-lg p-8"
            >
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  Click for Popover
                </h3>
                <div className="flex flex-wrap gap-6">
                  {[
                    { title: "Account", items: ["Profile", "Settings", "Logout"] },
                    {
                      title: "Notifications",
                      items: ["Alerts On", "Alerts Off", "Clear All"],
                    },
                    { title: "More", items: ["About", "Help", "Contact"] },
                  ].map((popover, index) => (
                    <div key={index} className="relative inline-block">
                      <button
                        onClick={() =>
                          setActivePopover(activePopover === index ? null : index)
                        }
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                      >
                        {popover.title}
                      </button>
                      {activePopover === index && (
                        <div className="absolute top-full left-0 mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg z-10">
                          {popover.items.map((item, itemIndex) => (
                            <button
                              key={itemIndex}
                              onClick={() => setActivePopover(null)}
                              className="block w-full text-left px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      )}
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
