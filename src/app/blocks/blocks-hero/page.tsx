"use client";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Image from "next/image";
import { useRef } from "react";
import { Copy } from "lucide-react";
import { useCopyNotification } from "~/components/useCopyNotification";
import SectionDivider from "~/components/SectionDivider";
import { Button } from "~/components/ui/button";

export default function BlocksHeroPage() {
  // Refs for each hero section
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
        title="Hero Sections"
        subtitle="Beautiful landing page hero blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Hero Block 1 */}
          <div className="relative">
            <SectionDivider title="Hero Block 1">
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
            <section ref={sectionRef1} className="relative text-gray-500">
              <div className="container mx-auto px-4 py-48">
                <div className="-mx-4 flex flex-wrap">
                  <div className="mx-auto w-full px-4 text-center lg:w-8/12">
                    <p className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </p>
                    <h1 className="mb-4 text-6xl font-extrabold text-gray-800">
                      The Natural Experience
                    </h1>
                    <p className="mb-6 text-xl font-light">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Get It Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 2 */}
          <div className="relative">
            <SectionDivider title="Hero Block 2">
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
              className="relative bg-gray-800 text-gray-400"
            >
              <div className="container mx-auto px-4 py-48">
                <div className="-mx-4 flex flex-wrap">
                  <div className="mx-auto w-full px-4 text-center lg:w-8/12">
                    <p className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </p>
                    <h1 className="mb-4 text-6xl font-extrabold text-white">
                      The Natural Experience
                    </h1>
                    <p className="mb-6 text-xl font-light">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Get It Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 3 */}
          <div className="relative">
            <SectionDivider title="Hero Block 3">
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
              className="relative bg-gray-800 text-white"
            >
              <Image
                src="https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ"
                alt="..."
                fill
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative container mx-auto px-4 py-48">
                <div className="-mx-4 flex flex-wrap">
                  <div className="mx-auto w-full px-4 text-center lg:w-8/12">
                    <p className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </p>
                    <h1 className="mb-4 text-6xl font-extrabold">
                      The Natural Experience
                    </h1>
                    <p className="mb-6 text-xl font-light">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Get It Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 4 */}
          <div className="relative">
            <SectionDivider title="Hero Block 4">
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
              className="relative bg-gray-800 text-gray-400"
            >
              <div className="container mx-auto px-4 py-48">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 lg:w-6/12">
                    <p className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </p>
                    <h1 className="mb-4 text-6xl font-extrabold text-white">
                      The Natural Experience
                    </h1>
                    <p className="mb-6 text-xl font-light">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Get It Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 5 */}
          <div className="relative">
            <SectionDivider title="Hero Block 5">
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
              className="relative bg-gray-800 text-gray-400"
            >
              <Image
                src="https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ"
                alt="..."
                fill
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="relative container mx-auto px-4 py-48">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-10/12 lg:w-6/12">
                    <p className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </p>
                    <h1 className="mb-4 text-6xl font-extrabold text-white">
                      The Natural Experience
                    </h1>
                    <p className="mb-6 text-xl font-light">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Get It Now
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 6 */}
          <div className="relative">
            <SectionDivider title="Hero Block 6">
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
              className="relative bg-gray-100 text-gray-500"
            >
              <div className="container mx-auto px-4 pt-24">
                <div className="-mx-4 flex flex-wrap">
                  <div className="mx-auto w-full px-4 text-center lg:w-2/3">
                    <p className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </p>
                    <h1 className="mb-4 text-6xl font-extrabold text-gray-800">
                      The Natural Experience
                    </h1>
                    <p className="mb-6 text-3xl leading-tight font-light">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Get It Now
                    </a>
                    <div className="mt-10 -mb-32 rounded-lg bg-white p-16">
                      {/* SVG illustration omitted for brevity */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 7 */}
          <div className="relative">
            <SectionDivider title="Hero Block 7">
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
              className="relative bg-gray-100 text-gray-500"
            >
              <div className="container mx-auto px-4 pt-24">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="mb-16 w-full px-4 lg:w-6/12">
                    <p className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </p>
                    <h1 className="mb-4 text-6xl font-extrabold text-gray-800">
                      The Natural Experience
                    </h1>
                    <p className="mb-6 text-2xl leading-tight font-light">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Get It Now
                    </a>
                  </div>
                  <div className="w-full px-4 lg:w-6/12">
                    <div className="-mb-14 bg-white p-4 shadow-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1565972476522-4338522b1929?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDV8fGJ1YmJsZXN8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=800&h=1200&fit=crop"
                        alt="..."
                        width={800}
                        height={1200}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 8 */}
          <div className="relative">
            <SectionDivider title="Hero Block 8">
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
              className="relative bg-gray-100 text-gray-500"
            >
              <div className="container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="mt-16 mb-16 w-full px-4 lg:w-8/12">
                    <p className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </p>
                    <h1 className="mb-4 text-6xl font-extrabold text-gray-800">
                      The Natural Experience
                    </h1>
                    <p className="mb-6 text-2xl leading-tight font-light">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Get It Now
                    </a>
                  </div>
                  <div className="w-full px-4 lg:w-4/12">
                    <Image
                      src="https://images.unsplash.com/photo-1565972476522-4338522b1929?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDV8fGJ1YmJsZXN8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=800&h=1200&fit=crop"
                      alt="..."
                      width={800}
                      height={1200}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 9 */}
          <div className="relative">
            <SectionDivider title="Hero Block 9">
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
              className="relative bg-gray-100 text-gray-500"
            >
              <div className="container mx-auto px-4 py-48 pt-24 pb-24">
                <div className="-mx-4 flex flex-wrap items-center">
                  <div className="w-full px-4 lg:w-6/12">
                    <p className="mb-2 font-medium text-blue-600 uppercase">
                      The Latest
                    </p>
                    <h1 className="mb-4 text-6xl font-extrabold text-gray-800">
                      The Natural Experience
                    </h1>
                    <p className="mb-6 text-2xl leading-tight font-light">
                      Our ability to feel, act and communicate is
                      indistinguishable from magic.
                    </p>
                    <a
                      href="#"
                      className="inline-block rounded-sm bg-blue-600 px-5 py-2 font-light text-white uppercase hover:bg-blue-700"
                    >
                      Get It Now
                    </a>
                  </div>
                  <div className="w-full p-4 lg:w-6/12">
                    <div className="bg-white p-4 shadow-xl">
                      {/* Embedded YouTube video */}
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/mlD9KngeV2E"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Pinegrow location map"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Hero Block 10 */}
          <div className="relative">
            <SectionDivider title="Hero Block 10">
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
              className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
            >
              <Image
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
                alt=""
                fill
                className="-z-10 object-cover object-right opacity-40 md:object-center"
              />
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Welcome to LandingPageMaker
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Build beautiful landing pages with ready-to-use hero sections.
                  Copy, paste, and customize for your next project.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm leading-6 font-semibold text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
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
