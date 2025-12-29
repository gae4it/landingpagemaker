"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Copy } from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "@/components/useCopyNotification";
import SectionDivider from "@/components/SectionDivider";
import { Button } from "@/components/ui/button";

export default function BlocksFooterPage() {
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
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
        title="Footer Sections"
        subtitle="Beautiful footer blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
          {/* Footer Block 1 */}
          <div className="relative">
            <SectionDivider title="Footer Block 1">
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
              className="bg-gray-50 pt-12 font-light text-gray-500"
            >
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full p-4 xl:mr-auto xl:w-4/12">
                    <a
                      href="#"
                      className="mr-auto mb-6 inline-block text-3xl font-medium text-blue-600 uppercase hover:text-blue-800"
                    >
                      Company
                    </a>
                    <p className="mb-4 text-sm">
                      Duis pharetra venenatis felis, ut tincidunt ipsum
                      consequat nec. Fusce et porttitor libero, eu aliquam nisi.
                      Nam finibus ullamcorper semper.
                    </p>
                    <div className="mb-6">
                      <a href="#" className="hover:text-blue-600">
                        +1 234 567-890
                      </a>
                      <br />
                      <a href="#" className="hover:text-blue-600">
                        hello@fantico.com
                      </a>
                    </div>
                    <div className="inline-flex flex-wrap space-x-3">
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="facebook"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="twitter"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="instagram"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="linkedin"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="youtube"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full p-4 sm:w-4/12 xl:w-2/12">
                    <h2 className="mb-8 text-lg font-bold text-blue-600 uppercase">
                      About
                    </h2>
                    <ul>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Get Quote
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Enterprise Plan
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Become an Affiliate
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Our Portfolio
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full p-4 sm:w-4/12 xl:w-2/12">
                    <h2 className="mb-8 text-lg font-bold text-blue-600 uppercase">
                      Services
                    </h2>
                    <ul>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Web Design
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Web Development
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          WordPress
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Digital Marketing
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Content Writing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full p-4 sm:w-4/12 xl:w-2/12">
                    <h2 className="mb-8 text-lg font-bold text-blue-600 uppercase">
                      Other
                    </h2>
                    <ul>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Business Stories
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Learning
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Licence
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Refund Policy
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="py-4 text-center">
                  <hr className="mb-4 border-gray-400" />
                  <p className="text-sm">Copyright &copy; 2020 Company Name</p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Block 2 */}
          <div className="relative mt-12">
            <SectionDivider title="Footer Block 2">
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
              className="bg-gray-900 pt-12 font-light text-gray-300"
            >
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full p-4 xl:mr-auto xl:w-4/12">
                    <a
                      href="#"
                      className="mr-auto mb-6 inline-block text-3xl font-medium text-white uppercase hover:text-blue-800"
                    >
                      Company
                    </a>
                    <p className="mb-4 text-sm">
                      Duis pharetra venenatis felis, ut tincidunt ipsum
                      consequat nec. Fusce et porttitor libero, eu aliquam nisi.
                      Nam finibus ullamcorper semper.
                    </p>
                    <div className="mb-6">
                      <a href="#" className="hover:text-blue-600">
                        +1 234 567-890
                      </a>
                      <br />
                      <a href="#" className="hover:text-blue-600">
                        hello@fantico.com
                      </a>
                    </div>
                    <div className="inline-flex flex-wrap space-x-3">
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="facebook"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="twitter"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="instagram"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="linkedin"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="youtube"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="w-full p-4 sm:w-4/12 xl:w-2/12">
                    <h2 className="mb-8 text-lg font-bold uppercase">About</h2>
                    <ul>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Get Quote
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Enterprise Plan
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Become an Affiliate
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Our Portfolio
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full p-4 sm:w-4/12 xl:w-2/12">
                    <h2 className="mb-8 text-lg font-bold uppercase">
                      Services
                    </h2>
                    <ul>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Web Design
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Web Development
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          WordPress
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Digital Marketing
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Content Writing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full p-4 sm:w-4/12 xl:w-2/12">
                    <h2 className="mb-8 text-lg font-bold uppercase">Other</h2>
                    <ul>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Business Stories
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Learning
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Licence
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Refund Policy
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Terms of Service
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="py-4 text-center">
                  <hr className="mb-4 opacity-25" />
                  <p className="text-sm">Copyright &copy; 2020 Company Name</p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Block 3 - Con Subscribe form */}
          <div className="relative mt-12">
            <SectionDivider title="Footer Block 3">
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
              className="bg-gray-50 pt-12 font-light text-gray-500"
            >
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full p-4 xl:w-4/12">
                    <a
                      href="#"
                      className="mr-auto mb-6 inline-block text-3xl font-semibold text-blue-600 uppercase hover:text-blue-800"
                    >
                      Company
                    </a>
                    <p className="mb-4">
                      Duis pharetra venenatis felis, ut tincidunt ipsum
                      consequat nec. Fusce et porttitor libero, eu aliquam nisi.
                      Nam finibus ullamcorper semper.
                    </p>
                    <div className="mb-6">
                      <a href="#" className="hover:text-blue-600">
                        +1 234 567-890
                      </a>
                      <br />
                      <a href="#" className="hover:text-blue-600">
                        hello@fantico.com
                      </a>
                    </div>
                  </div>
                  <div className="w-full p-4 sm:w-6/12 md:w-3/12 xl:w-2/12">
                    <h2 className="mb-8 text-lg font-bold text-blue-600 uppercase">
                      About
                    </h2>
                    <ul>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Get Quote
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Enterprise Plan
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Become an Affiliate
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Our Portfolio
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full p-4 sm:w-6/12 md:w-3/12 xl:w-2/12">
                    <h2 className="mb-8 text-lg font-bold text-blue-600 uppercase">
                      Services
                    </h2>
                    <ul>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Web Design
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Web Development
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          WordPress
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Digital Marketing
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="hover:text-blue-600">
                          Content Writing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full p-4 md:w-6/12 xl:w-4/12">
                    <h2 className="mb-8 text-lg font-bold text-blue-600 uppercase">
                      Subscribe
                    </h2>
                    <p className="mb-4">
                      Subscribe to our newsletter and get exclusive updates
                      directly in your inbox.
                    </p>
                    <form>
                      <div className="mb-6 flex items-center overflow-hidden border-2 border-gray-400 bg-white p-1">
                        <input
                          className="w-full flex-1 appearance-none border-blue-600 p-2 font-light text-gray-600 outline-none"
                          placeholder="Enter email..."
                          type="email"
                        />
                        <button
                          type="submit"
                          className="inline-block bg-blue-600 px-6 py-2 text-center font-medium text-white uppercase hover:bg-blue-700"
                          aria-label="submit"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="inline-block h-4 w-4"
                          >
                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                    <h2 className="mb-4 text-lg font-bold text-blue-600 uppercase">
                      Get Social
                    </h2>
                    <div className="inline-flex flex-wrap space-x-3">
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="facebook"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="twitter"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="instagram"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="linkedin"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="youtube"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="py-4 text-sm">
                  <hr className="mb-4 border-gray-400" />
                  <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 py-2 md:flex-1">
                      <p>
                        &copy; 2002 - 2020. All Rights Reserved - Company Name
                      </p>
                    </div>
                    <div className="w-full px-4 py-2 sm:w-auto">
                      <a href="#" className="hover:text-blue-600">
                        Privacy Policy
                      </a>{" "}
                      |{" "}
                      <a href="#" className="hover:text-blue-600">
                        Terms of Use
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Block 4 - Con Latest Posts */}
          <div className="relative mt-12">
            <SectionDivider title="Footer Block 4">
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
              className="bg-gray-50 pt-12 font-light text-gray-500"
            >
              <div className="relative container mx-auto px-4">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full p-4 lg:w-4/12">
                    <h2 className="mb-8 text-lg font-bold text-blue-600 uppercase">
                      About
                    </h2>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 sm:w-6/12">
                        <ul>
                          <li className="mb-4">
                            <a href="#" className="hover:text-blue-600">
                              Get Quote
                            </a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:text-blue-600">
                              Enterprise Plan
                            </a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:text-blue-600">
                              Become an Affiliate
                            </a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:text-blue-600">
                              Our Portfolio
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full px-4 sm:w-6/12">
                        <ul>
                          <li className="mb-4">
                            <a href="#" className="hover:text-blue-600">
                              Web Design
                            </a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:text-blue-600">
                              Web Development
                            </a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:text-blue-600">
                              WordPress
                            </a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:text-blue-600">
                              Digital Marketing
                            </a>
                          </li>
                          <li className="mb-4">
                            <a href="#" className="hover:text-blue-600">
                              Content Writing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-4 md:w-1/2 lg:w-4/12">
                    <h2 className="mb-8 text-lg font-bold text-blue-600 uppercase">
                      Latest Posts
                    </h2>
                    <div className="space-y-4">
                      <div className="flex w-full flex-wrap items-center">
                        <div className="w-3/12">
                          <a href="#" className="block hover:opacity-75">
                            <Image
                              src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI4fHx0cmF2ZWx8ZW58MHx8fA&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop"
                              className="w-full"
                              alt="..."
                              width={350}
                              height={240}
                            />
                          </a>
                        </div>
                        <div className="w-9/12 pl-3">
                          <a
                            href="#"
                            className="mb-1 block text-gray-700 hover:text-blue-600"
                          >
                            <h3 className="text-sm leading-tight font-semibold">
                              Travelling as a way of self-discovery and progress
                            </h3>
                          </a>
                          <h4 className="text-xs">10 August 2020</h4>
                        </div>
                      </div>
                      <div className="flex w-full flex-wrap items-center">
                        <div className="w-3/12">
                          <a href="#" className="block hover:opacity-75">
                            <Image
                              src="https://images.unsplash.com/photo-1577327966244-999949c7e884?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDEyfHxidXNpbmVzcyUyMHBob3RvZ3JhcGhlcnxlbnwwfHx8&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop"
                              className="w-full"
                              alt="..."
                              width={350}
                              height={240}
                            />
                          </a>
                        </div>
                        <div className="w-9/12 pl-3">
                          <a
                            href="#"
                            className="mb-1 block text-gray-700 hover:text-blue-600"
                          >
                            <h3 className="text-sm leading-tight font-semibold">
                              Where to grow your business as a photographer:
                              site or social media?
                            </h3>
                          </a>
                          <h4 className="text-xs">10 August 2020</h4>
                        </div>
                      </div>
                      <div className="flex w-full flex-wrap items-center">
                        <div className="w-3/12">
                          <a href="#" className="block hover:opacity-75">
                            <Image
                              src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixid=MXwyMDkyMnwwfDF8c2VhcmNofDE0MHx8Y29sb3JzJTIwd2Vic2l0ZXxlbnwwfHx8&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=350&h=240&fit=crop"
                              className="w-full"
                              alt="..."
                              width={350}
                              height={240}
                            />
                          </a>
                        </div>
                        <div className="w-9/12 pl-3">
                          <a
                            href="#"
                            className="mb-1 block text-gray-700 hover:text-blue-600"
                          >
                            <h3 className="text-sm leading-tight font-semibold">
                              How to choose the right colors when creating a
                              website?
                            </h3>
                          </a>
                          <h4 className="text-xs">10 August 2020</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-4 md:w-1/2 lg:w-4/12">
                    <h2 className="mb-8 text-lg font-bold text-blue-600 uppercase">
                      Subscribe
                    </h2>
                    <p className="mb-4">
                      Subscribe to our newsletter and get exclusive updates
                      directly in your inbox.
                    </p>
                    <form>
                      <div className="mb-6 flex items-center overflow-hidden rounded-full border-2 border-gray-400 bg-white p-1">
                        <input
                          className="w-full flex-1 appearance-none border-blue-600 p-2 font-light text-gray-600 outline-none"
                          placeholder="Enter email..."
                          type="email"
                        />
                        <button
                          type="submit"
                          className="inline-block rounded-full bg-blue-600 px-6 py-2 text-center font-medium text-white uppercase hover:bg-blue-700"
                          aria-label="submit"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="inline-block h-4 w-4"
                          >
                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                    <h2 className="mb-4 text-lg font-bold text-blue-600 uppercase">
                      Get Social
                    </h2>
                    <div className="inline-flex flex-wrap space-x-3">
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="facebook"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="twitter"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37a4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="instagram"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="linkedin"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="hover:text-blue-600"
                        aria-label="youtube"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="py-4 text-sm">
                  <hr className="mb-4 border-gray-400" />
                  <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-4 py-2 md:flex-1">
                      <p>
                        &copy; 2002 - 2020. All Rights Reserved - Company Name
                      </p>
                    </div>
                    <div className="w-full px-4 py-2 sm:w-auto">
                      <a href="#" className="hover:text-blue-600">
                        Privacy Policy
                      </a>{" "}
                      |{" "}
                      <a href="#" className="hover:text-blue-600">
                        Terms of Use
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
