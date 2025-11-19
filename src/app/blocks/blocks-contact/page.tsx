
"use client";

import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import { Copy } from "lucide-react";
import { useRef } from "react";
import { useCopyNotification } from "~/components/useCopyNotification";
import SectionDivider from "~/components/SectionDivider";
import { Button } from "~/components/ui/button";

export default function BlocksContactPage() {
  // Refs for each section
  const sectionRef1 = useRef<HTMLElement>(null);
  const sectionRef2 = useRef<HTMLElement>(null);
  const sectionRef3 = useRef<HTMLElement>(null);
  const sectionRef4 = useRef<HTMLElement>(null);
  const sectionRef5 = useRef<HTMLElement>(null);
  const sectionRef6 = useRef<HTMLElement>(null);
  const sectionRef7 = useRef<HTMLElement>(null);


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
        <div style={{position: "fixed", top: 24, right: 24, zIndex: 1000}} className="bg-black text-white px-4 py-2 rounded shadow-lg animate-fade-in">
          Section copied
        </div>
      )}
      <Navigation />
      <Hero title="Contact Sections" subtitle="Contact blocks ready to use. Copy, paste, and customize for your next project." />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Contact Block 1 */}
          <div className="relative">
            <SectionDivider title="Contact Block 1">
              <Button variant="ghost" size="icon" onClick={() => handleCopy(sectionRef1)} className="absolute right-2 top-2" aria-label="Copy section HTML">
                <Copy size={18} />
              </Button>
            </SectionDivider>
            <section ref={sectionRef1} className="bg-gray-50 py-20 text-gray-500">
              <div className="container mx-auto px-4 relative">
                <div className="flex flex-wrap -mx-4 items-center">
                  <div className="p-4 w-full lg:w-5/12">
                    <h2 className="font-bold leading-tight mb-6 text-2xl text-gray-800 uppercase">Get In Touch</h2>
                    <p className="mb-10">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <address className="not-italic">
                      <ul className="mb-10 space-y-6">
                        <li className="flex">
                          {/* Address Icon */}
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 mr-6 text-blue-600 w-6"><path d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/></svg>
                          <span>9056 Fairground Ave.<br/>Dearborn, MI 48124<br/>United States of America</span>
                        </li>
                        <li className="flex">
                          {/* Email Icon */}
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 mr-6 text-blue-600 w-6"><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"></path></svg>
                          <a href="mailto:info@company.com" className="hover:text-blue-600">info@company.com</a>
                        </li>
                        <li className="flex">
                          {/* Phone Icon */}
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 mr-6 text-blue-600 w-6"><path d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"/></svg>
                          <a href="tel:+0 123-456-789" className="hover:text-blue-600">+0 123-456-789</a>
                        </li>
                      </ul>
                    </address>
                  </div>
                  <div className="ml-auto p-4 w-full lg:w-6/12">
                    <div className="bg-white p-10 shadow-xl sm:p-16">
                      <h2 className="font-bold leading-tight mb-6 text-2xl text-gray-800 uppercase">Send Us A Message</h2>
                      <form>
                        <div className="mb-6">
                          <input className="appearance-none border-2 border-blue-600 focus:shadow-lg outline-none px-5 py-3 w-full" placeholder="Enter name..." />
                        </div>
                        <div className="mb-6">
                          <input className="appearance-none border-2 border-blue-600 focus:shadow-lg outline-none px-5 py-3 w-full" placeholder="Enter email..." type="email" />
                        </div>
                        <div className="mb-6">
                          <textarea rows={6} className="appearance-none border-2 border-blue-600 focus:shadow-lg outline-none px-5 py-3 w-full" placeholder="Enter your message..."></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 font-medium hover:bg-blue-700 inline-block p-3 text-center text-white uppercase w-full">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Contact Block 2 */}
          {/* ...altri blocchi... */}
        </div>
      </main>
      <Footer />
    </>
  );
}
