"use client";
import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import { useRef } from "react";
import { Copy } from "lucide-react";
import { useCopyNotification } from "~/components/useCopyNotification";
import SectionDivider from "~/components/SectionDivider";
import { Button } from "~/components/ui/button";

export default function BlocksFeaturesEServicesPage() {
  // Refs for each features/services section
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
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
        title="Features & Services Sections"
        subtitle="Features & Services blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Features & Services Block 1 */}
          <div className="relative">
            <SectionDivider title="Features & Services Block 1">
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
                <div className="-mx-4 mb-4 flex flex-wrap items-center">
                  <div className="w-full px-4 lg:w-7/12">
                    <h2 className="mb-1 font-medium text-gray-600">Services</h2>
                    <h3 className="mb-1 text-3xl font-bold text-gray-900">
                      We can do useful things for our clients
                    </h3>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam vitae congue tortor.
                    </p>
                  </div>
                  <div className="w-full px-4 lg:w-5/12 lg:text-right">
                    <a
                      href="#"
                      className="inline-block rounded bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full p-4 sm:w-6/12 xl:w-3/12">
                    <div className="rounded-lg bg-gray-100 px-6 py-16 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="mb-4 inline-block h-10 w-10 text-gray-900"
                        fill="currentColor"
                      >
                        <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z" />
                      </svg>
                      <h4 className="mb-2 text-xl font-bold text-gray-900">
                        Development
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam vitae congue tortor.
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="w-full p-4 sm:w-6/12 xl:w-3/12">
                    <div className="rounded-lg bg-gray-100 px-6 py-16 shadow-lg sm:mt-16 sm:-mb-16">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="mb-4 inline-block h-10 w-10 text-gray-900"
                        fill="currentColor"
                      >
                        <path d="M5.636 12.707l1.828 1.829L8.88 13.12 7.05 11.293l1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414L13.12 8.88l1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414l2.828-2.829zm8.485 5.656l4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 5.636 9.878z" />
                      </svg>
                      <h4 className="mb-2 text-xl font-bold text-gray-900">
                        Product Design
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam vitae congue tortor.
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="w-full p-4 sm:w-6/12 xl:w-3/12">
                    <div className="rounded-lg bg-gray-100 px-6 py-16 shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="mb-4 inline-block h-10 w-10 text-gray-900"
                        fill="currentColor"
                      >
                        <path d="M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2v2z" />
                      </svg>
                      <h4 className="mb-2 text-xl font-bold text-gray-900">
                        UI/UX Research
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam vitae congue tortor.
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="w-full p-4 sm:w-6/12 xl:w-3/12">
                    <div className="rounded-lg bg-gray-100 px-6 py-16 shadow-lg sm:mt-16">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="mb-4 inline-block h-10 w-10 text-gray-900"
                      >
                        <path d="M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zm10 5h3v9h-3v3h-2v-3h-3v-9h3V7h2v3z" />
                      </svg>
                      <h4 className="mb-2 text-xl font-bold text-gray-900">
                        Digital Marketing
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam vitae congue tortor.
                      </p>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Features & Services Block 2 */}
          <div className="relative">
            <SectionDivider title="Features & Services Block 2">
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
                <div className="-mx-4 mb-4 flex flex-wrap items-center">
                  <div className="w-full px-4 lg:w-7/12">
                    <h2 className="mb-1 font-medium text-gray-600">Services</h2>
                    <h3 className="mb-1 text-3xl font-bold text-gray-900">
                      We can do useful things for our clients
                    </h3>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam vitae congue tortor.
                    </p>
                  </div>
                  <div className="w-full px-4 lg:w-5/12 lg:text-right">
                    <a
                      href="#"
                      className="inline-block rounded bg-gray-700 px-5 py-2 text-white hover:bg-gray-800"
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full p-4 sm:w-6/12 xl:w-3/12">
                    <div className="rounded-lg bg-gray-600 px-6 py-16 text-white shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="mb-4 inline-block h-10 w-10"
                        fill="currentColor"
                      >
                        <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z" />
                      </svg>
                      <h4 className="mb-2 text-xl font-bold">Development</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam vitae congue tortor.
                      </p>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gray-300 hover:underline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="w-full p-4 sm:w-6/12 xl:w-3/12">
                    <div className="rounded-lg bg-gray-600 px-6 py-16 text-white shadow-lg sm:mt-16 sm:-mb-16">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="mb-4 inline-block h-10 w-10"
                        fill="currentColor"
                      >
                        <path d="M5.636 12.707l1.828 1.829L8.88 13.12 7.05 11.293l1.414-1.414 1.829 1.828 1.414-1.414L9.88 8.464l1.414-1.414L13.12 8.88l1.415-1.415-1.829-1.828 2.829-2.828a1 1 0 0 1 1.414 0l4.242 4.242a1 1 0 0 1 0 1.414L8.464 21.192a1 1 0 0 1-1.414 0L2.808 16.95a1 1 0 0 1 0-1.414l2.828-2.829zm8.485 5.656l4.243-4.242L21 16.757V21h-4.242l-2.637-2.637zM5.636 9.878L2.807 7.05a1 1 0 0 1 0-1.415l2.829-2.828a1 1 0 0 1 1.414 0L9.88 5.635 5.636 9.878z" />
                      </svg>
                      <h4 className="mb-2 text-xl font-bold">Product Design</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam vitae congue tortor.
                      </p>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gray-300 hover:underline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="w-full p-4 sm:w-6/12 xl:w-3/12">
                    <div className="rounded-lg bg-gray-600 px-6 py-16 text-white shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="mb-4 inline-block h-10 w-10"
                        fill="currentColor"
                      >
                        <path d="M15 21h-2v-3h-2v3H9v-2H7v2H4a1 1 0 0 1-1-1v-3h2v-2H3v-2h3v-2H3V9h2V7H3V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3v-2h-2v2z" />
                      </svg>
                      <h4 className="mb-2 text-xl font-bold">UI/UX Research</h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam vitae congue tortor.
                      </p>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gray-300 hover:underline"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="w-full p-4 sm:w-6/12 xl:w-3/12">
                    <div className="rounded-lg bg-gray-600 px-6 py-16 text-white shadow-lg sm:mt-16">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="mb-4 inline-block h-10 w-10"
                      >
                        <path d="M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zm10 5h3v9h-3v3h-2v-3h-3v-9h3V7h2v3z" />
                      </svg>
                      <h4 className="mb-2 text-xl font-bold">
                        Digital Marketing
                      </h4>
                      <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam vitae congue tortor.
                      </p>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gray-300 hover:underline"
                      >
                        Learn More
                      </a>
                    </div>
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
