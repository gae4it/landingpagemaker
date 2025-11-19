"use client";

import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import { Copy } from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "~/components/useCopyNotification";
import SectionDivider from "~/components/SectionDivider";
import { Button } from "~/components/ui/button";

export default function BlocksColumnsPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
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
        title="Columns Sections"
        subtitle="Columns blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Columns Block 1 */}
          <div className="relative">
            <SectionDivider title="Columns Block 1">
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
              className="rounded-lg bg-gray-800 p-8 text-center text-white"
            >
              Columns Block Example
              <div className="mt-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold">
                      Column 1 Title
                    </h3>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold">
                      Column 2 Title
                    </h3>
                    <p className="text-gray-700">
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h3 className="mb-2 text-lg font-semibold">
                      Column 3 Title
                    </h3>
                    <p className="text-gray-700">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Columns Block 2 */}
          <div className="relative">
            <SectionDivider title="Columns Block 2">
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
              className="bg-gray-100 py-20 text-gray-800"
            >
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="rounded-lg bg-white p-8 shadow-md">
                    <h3 className="mb-4 text-xl font-bold">Left Column</h3>
                    <p className="text-gray-600">
                      Content for the left column goes here. You can add any
                      elements you want.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-8 shadow-md">
                    <h3 className="mb-4 text-xl font-bold">Right Column</h3>
                    <p className="text-gray-600">
                      Content for the right column goes here. You can add any
                      elements you want.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Columns Block 3 */}
          <div className="relative">
            <SectionDivider title="Columns Block 3">
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
            <section ref={sectionRef3} className="bg-white py-20 text-gray-800">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="rounded-lg bg-gray-100 p-8 text-center shadow-md">
                    <h3 className="mb-4 text-2xl font-bold">Column One</h3>
                    <p className="text-gray-600">
                      This is the first column. Add your content here for
                      features, services, or anything else.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-8 text-center shadow-md">
                    <h3 className="mb-4 text-2xl font-bold">Column Two</h3>
                    <p className="text-gray-600">
                      This is the second column. You can easily duplicate or
                      modify these columns as needed.
                    </p>
                  </div>
                  <div className="rounded-lg bg-gray-100 p-8 text-center shadow-md">
                    <h3 className="mb-4 text-2xl font-bold">Column Three</h3>
                    <p className="text-gray-600">
                      This is the third column. Use this layout for pricing,
                      features, or team members.
                    </p>
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
