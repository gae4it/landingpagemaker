"use client";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { useRef } from "react";
import { Copy } from "lucide-react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksDividersPage() {
  // Refs for each divider section
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
        title="Dividers Sections"
        subtitle="Dividers blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Divider Block 1 */}
          <div className="relative">
            <SectionDivider title="Divider Block 1">
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
              className="flex-no-wrap flex items-center py-4"
            >
              <div className="h-px max-w-full grow bg-gray-500"></div>
              <div className="w-auto px-10">
                <h2 className="text-2xl font-semibold uppercase">
                  Divider Title
                </h2>
              </div>
              <div className="h-px max-w-full grow bg-gray-500"></div>
            </section>
          </div>

          {/* Divider Block 2 */}
          <div className="relative">
            <SectionDivider title="Divider Block 2">
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
              className="flex-no-wrap flex items-center py-4"
            >
              <div className="h-px max-w-full grow bg-gray-500"></div>
              <div className="w-auto px-10">
                <span className="block h-8 w-8 bg-gray-900"></span>
              </div>
              <div className="h-px max-w-full grow bg-gray-500"></div>
            </section>
          </div>

          {/* Divider Block 3 */}
          <div className="relative">
            <SectionDivider title="Divider Block 3">
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
              className="flex-no-wrap flex items-center py-4"
            >
              <div className="h-px max-w-full grow bg-gray-500"></div>
              <div className="w-auto px-10">
                <span className="block h-8 w-8 rotate-45 transform bg-gray-900"></span>
              </div>
              <div className="h-px max-w-full grow bg-gray-500"></div>
            </section>
          </div>

          {/* Divider Block 4 */}
          <div className="relative">
            <SectionDivider title="Divider Block 4">
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
              className="flex-no-wrap mx-auto flex w-9/12 items-center py-4"
            >
              <div className="h-px max-w-full grow bg-gray-500"></div>
              <div className="w-auto">
                <span className="block h-8 w-8 bg-gray-900"></span>
              </div>
              <div className="h-px max-w-full grow bg-gray-500"></div>
            </section>
          </div>

          {/* Divider Block 5 */}
          <div className="relative">
            <SectionDivider title="Divider Block 5">
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
              className="flex-no-wrap flex items-center py-4"
            >
              <div className="h-px max-w-full grow bg-red-600"></div>
              <div className="w-auto px-6">
                <span className="block rounded-full bg-red-600 p-1 text-white">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                  </svg>
                </span>
              </div>
              <div className="h-px max-w-full grow bg-red-600"></div>
            </section>
          </div>

          {/* Divider Block 6 */}
          <div className="relative">
            <SectionDivider title="Divider Block 6">
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
              className="flex-no-wrap flex items-center py-4"
            >
              <div className="h-1 max-w-full grow bg-blue-600"></div>
              <div className="-mx-1 w-auto">
                <span className="block text-blue-600">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 155 43"
                    className="h-6"
                  >
                    <path d="M133.213 0L92 21.213l41.213 21.213 21.213-21.213L133.213 0z" />
                    <path d="M21.213 0L0 21.213l21.213 21.213 41.213-21.213L21.213 0z" />
                    <path d="M92.004 21c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 8.284 0 15 6.716 15 15z" />
                  </svg>
                </span>
              </div>
              <div className="h-1 max-w-full grow bg-blue-600"></div>
            </section>
          </div>

          {/* Divider Block 7 */}
          <div className="relative">
            <SectionDivider title="Divider Block 7">
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
              className="flex-no-wrap flex items-center py-4"
            >
              <div className="h-px max-w-full grow bg-green-500"></div>
              <div className="-mx-1 w-auto">
                <span className="block text-green-500">
                  <svg
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 103"
                    className="h-8"
                  >
                    <path d="M552 27.586l.069.9c.936 12.311 10.72 22.095 23.031 23.031l.9.069-.9.068c-12.311.937-22.095 10.72-23.031 23.032l-.069.9-.069-.9c-.936-12.311-10.72-22.095-23.031-23.032l-.9-.068.9-.069c12.311-.936 22.095-10.72 23.031-23.03l.069-.901z" />
                    <path d="M24 27.586l.069.9c.936 12.311 10.72 22.095 23.03 23.031l.901.069-.9.068c-12.311.937-22.095 10.72-23.032 23.032l-.068.9-.069-.9C22.995 62.375 13.211 52.59.901 51.654L0 51.586l.9-.069c12.311-.936 22.095-10.72 23.032-23.03l.068-.901z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M432.576 93.015c-33.605 16.117-73.582 10.64-101.613-13.921-16.93-14.834-16.93-41.182 0-56.016C358.994-1.483 398.971-6.96 432.576 9.157l87.422 41.929-87.422 41.93zM411.588 83.3c-25.766 12.312-56.387 8.123-77.899-10.657-13.062-11.403-13.062-31.71 0-43.114 21.512-18.78 52.133-22.969 77.899-10.657l67.41 32.214-67.41 32.214z"
                    />
                    <path d="M312 51.586c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M143.422 93.015c33.605 16.117 73.582 10.64 101.613-13.921 16.93-14.834 16.93-41.182 0-56.016C217.004-1.483 177.027-6.96 143.422 9.157L56 51.086l87.422 41.93zM164.41 83.3c25.766 12.312 56.387 8.123 77.899-10.657 13.062-11.403 13.062-31.71 0-43.114-21.512-18.78-52.133-22.969-77.899-10.657L97 51.086 164.41 83.3z"
                    />
                  </svg>
                </span>
              </div>
              <div className="h-px max-w-full grow bg-green-500"></div>
            </section>
          </div>

          {/* Divider Block 8 */}
          <div className="relative">
            <SectionDivider title="Divider Block 8">
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
            <section ref={sectionRef8} className="w-full">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                height="160"
                width="100%"
                className="bg-gray-900 text-blue-600"
              >
                <path d="M 100 100 V 0 L 0 100" />
              </svg>
            </section>
          </div>

          {/* Divider Block 9 */}
          <div className="relative">
            <SectionDivider title="Divider Block 9">
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
            <section ref={sectionRef9} className="w-full">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="160"
                className="text-red-600"
              >
                <path d="M 0 100 V 0 L 100 100" />
                <path d="M 100 100 V 0 L 0 100" />
              </svg>
            </section>
          </div>

          {/* Divider Block 10 */}
          <div className="relative">
            <SectionDivider title="Divider Block 10">
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
            <section ref={sectionRef10} className="w-full">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="160"
                className="bg-gray-600 text-yellow-500"
              >
                <path d="M 0 100 V 40 L 100 100" />
                <path d="M 100 100 V 0 L 0 100" opacity="0.5" />
              </svg>
            </section>
          </div>

          {/* Divider Block 11 */}
          <div className="relative">
            <SectionDivider title="Divider Block 11">
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
            <section ref={sectionRef11} className="w-full">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="160"
                className="bg-gray-600 text-white"
              >
                <path d="M 100 100 V 20 L 0 100" />
                <path d="M 100 100 V 0 L 0 100" opacity="0.5" />
              </svg>
            </section>
          </div>

          {/* Divider Block 12 */}
          <div className="relative">
            <SectionDivider title="Divider Block 12">
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
            <section ref={sectionRef12} className="w-full">
              <svg
                viewBox="0 0 1440 134"
                preserveAspectRatio="none"
                fill="currentColor"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-gray-600 text-white"
                width="100%"
                height="160"
              >
                <path d="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z" />
              </svg>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
