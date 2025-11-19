"use client";

import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Image from "next/image";
import { Copy } from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "~/components/useCopyNotification";
import SectionDivider from "~/components/SectionDivider";
import { Button } from "~/components/ui/button";

export default function BlocksCallToActionPage() {
  // Refs for each section
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);
  const sectionRef8 = useRef<HTMLElement>(null);
  const sectionRef9 = useRef<HTMLElement>(null);

  // Copy handler with notification
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
        title="Call To Action Sections"
        subtitle="Call To Action blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Call-To-Action Block 1 */}
          <div className="relative">
            <SectionDivider title="Call-To-Action Block 1">
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
              className="bg-gray-50 py-20 text-gray-500"
            >
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="mb-6 w-full px-4 lg:mb-0 lg:w-9/12">
                    <h2 className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </h2>
                    <h3 className="mb-4 text-4xl font-bold text-gray-800">
                      The Natural Experience
                    </h3>
                    <p className="text-2xl leading-tight font-light">
                      You never change things by fighting the existing reality.
                      To change something, build a new model that makes the
                      existing model obsolete.
                    </p>
                  </div>
                  <div className="w-full px-4 lg:w-3/12 lg:text-right">
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Call-To-Action Block 2 */}
          <div className="relative">
            <SectionDivider title="Call-To-Action Block 2">
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
              className="bg-gray-50 py-20 text-gray-500"
            >
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="mb-6 w-full px-4 lg:mb-0 lg:w-9/12">
                    <h2 className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </h2>
                    <h3 className="text-4xl font-bold text-gray-900">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </h3>
                  </div>
                  <div className="w-full px-4 lg:w-3/12 lg:text-right">
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Call-To-Action Block 3 */}
          <div className="relative">
            <SectionDivider title="Call-To-Action Block 3">
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
              className="bg-gray-50 py-20 text-gray-500"
            >
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="mx-auto w-full px-4 text-center lg:w-7/12">
                    <h2 className="mb-6 text-4xl font-bold text-gray-900">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </h2>
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Call-To-Action Block 4 */}
          <div className="relative">
            <SectionDivider title="Call-To-Action Block 4">
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
            <section ref={sectionRef4} className="bg-gray-900 py-20">
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="mb-6 w-full px-4 lg:mb-0 lg:w-7/12">
                    <h2 className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </h2>
                    <h3 className="text-4xl font-semibold text-white">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </h3>
                  </div>
                  <div className="w-full px-4 lg:w-5/12 lg:text-right">
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Call-To-Action Block 5 */}
          <div className="relative">
            <SectionDivider title="Call-To-Action Block 5">
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
            <section ref={sectionRef5} className="bg-blue-700 py-20">
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="mb-6 w-full px-4 lg:mb-0 lg:w-7/12">
                    <h2 className="text-4xl font-semibold text-white">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </h2>
                  </div>
                  <div className="w-full px-4 lg:w-5/12 lg:text-right">
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-white px-5 py-2 font-light text-blue-600 uppercase hover:bg-gray-300"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Call-To-Action Block 6 */}
          <div className="relative">
            <SectionDivider title="Call-To-Action Block 6">
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
            <section ref={sectionRef6} className="bg-gray-800 pt-12">
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap items-center text-center lg:text-left">
                  <div className="w-full px-4 py-16 lg:order-2 lg:w-7/12">
                    <h2 className="text-lg font-medium text-blue-500 uppercase">
                      Grab your collection today
                    </h2>
                    <h3 className="mb-6 text-4xl font-bold text-white">
                      {" "}
                      Seasonal sale upto 70% off
                    </h3>
                    <a
                      href="#"
                      className="inline-block border-b border-current py-1 text-lg font-light text-gray-400 hover:border-current hover:text-blue-600"
                    >
                      {" "}
                      See Collection
                    </a>
                  </div>
                  <div className="w-full px-4 lg:order-1 lg:w-5/12">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 839.2 727.08"
                      className="mx-auto h-auto max-w-full"
                      height="727.08"
                      width="839.2"
                    >
                      {/* ...svg content... */}
                    </svg>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Call-To-Action Block 7 */}
          <div className="relative">
            <SectionDivider title="Call-To-Action Block 7">
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
            <section ref={sectionRef7} className="bg-gray-100 pt-12">
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="w-full px-4 py-16 lg:w-7/12">
                    <h2 className="text-lg font-medium text-gray-500 uppercase">
                      Grab your collection today
                    </h2>
                    <h3 className="mb-6 text-4xl font-bold text-gray-800">
                      {" "}
                      Seasonal sale upto 70% off
                    </h3>
                    <a
                      href="#"
                      className="inline-block border-b border-current py-1 text-lg font-light text-blue-600 hover:border-current hover:text-gray-800"
                    >
                      {" "}
                      See Collection
                    </a>
                  </div>
                  <div className="w-full px-4 lg:w-5/12">
                    <svg
                      data-name="Layer 1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 839.2 727.08"
                      className="mx-auto h-auto max-w-full"
                      height="727.08"
                      width="839.2"
                    >
                      {/* ...svg content... */}
                    </svg>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Call-To-Action Block 8 */}
          <div className="relative">
            <SectionDivider title="Call-To-Action Block 8">
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
            <section ref={sectionRef8} className="bg-opacity-50 bg-yellow-900">
              <div className="px-4">
                <div className="-mx-4 flex flex-wrap items-center text-center md:text-left">
                  <div className="w-full px-10 py-16 md:order-2 md:w-7/12 md:py-0 xl:w-8/12">
                    <h2 className="text-lg font-medium text-white uppercase">
                      Grab your collection today
                    </h2>
                    <h3 className="mb-4 text-4xl font-bold text-white">
                      Seasonal sale upto 70% off
                    </h3>
                    <a
                      href="#"
                      className="inline-block border-b border-current py-1 text-lg font-light text-white hover:border-current hover:text-gray-900"
                    >
                      See Collection
                    </a>
                  </div>
                  <div className="w-full md:order-1 md:w-5/12 xl:w-4/12">
                    <Image
                      src="https://images.unsplash.com/photo-1556228308-f6e92d757b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI5fHxjdXJvbG9neXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080"
                      className="mx-auto xl:w-full"
                      alt="..."
                      width={1080}
                      height={720}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Call-To-Action Block 9 */}
          <div className="relative">
            <SectionDivider title="Call-To-Action Block 9">
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
            <section ref={sectionRef9} className="bg-opacity-75 bg-purple-800">
              <div className="px-4">
                <div className="-mx-4 flex flex-wrap items-center text-center md:text-left">
                  <div className="w-full px-10 py-16 md:order-2 md:w-8/12 md:py-0 xl:w-9/12">
                    <h2 className="text-lg font-medium text-white uppercase">
                      Grab your collection today
                    </h2>
                    <h3 className="mb-4 text-4xl font-bold text-white">
                      Seasonal sale upto 70% off
                    </h3>
                    <a
                      href="#"
                      className="inline-block border-b border-current py-1 text-lg font-light text-white hover:border-current hover:text-gray-900"
                    >
                      See Collection
                    </a>
                  </div>
                  <div className="w-full md:order-1 md:w-4/12 xl:w-3/12">
                    <Image
                      src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                      className="mx-auto xl:w-full"
                      alt="..."
                      width={720}
                      height={1080}
                    />
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
