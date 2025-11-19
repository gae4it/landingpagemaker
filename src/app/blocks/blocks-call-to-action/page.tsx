
"use client";

import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Image from "next/image";
import { Copy } from "lucide-react";
import { useRef } from "react";

function SectionDivider({ name, onCopy }: { name: string; onCopy: () => void }) {
  return (
    <section className="section-divider">
      <p>{name}</p>
      <button className="copy-btn" title="Copia section" onClick={onCopy} type="button">
        <Copy size={28} />
      </button>
    </section>
  );
}

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

  // Copy handler
  const handleCopy = (ref: React.RefObject<HTMLElement | null>) => {
    const el = ref.current;
    if (el) {
      void navigator.clipboard.writeText(el.outerHTML);
    }
  };
  return (
    <>
      <Navigation />
      <Hero title="Call To Action Sections" subtitle="Call To Action blocks ready to use. Copy, paste, and customize for your next project." />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Call-To-Action Block 1 */}
          <SectionDivider name="Call-To-Action Block 1" onCopy={() => handleCopy(sectionRef1)} />
          <section ref={sectionRef1} className="bg-gray-50 py-20 text-gray-500">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="mb-6 px-4 w-full lg:mb-0 lg:w-9/12">
                  <h2 className="font-medium mb-2 text-blue-600 uppercase">The Latest</h2>
                  <h3 className="font-bold mb-4 text-4xl text-gray-800">The Natural Experience</h3>
                  <p className="font-light leading-tight text-2xl">You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.</p>
                </div>
                <div className="px-4 w-full lg:text-right lg:w-3/12">
                  <a href="#" className="bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white uppercase">Read More</a>
                </div>
              </div>
            </div>
          </section>
          {/* Call-To-Action Block 2 */}
          <SectionDivider name="Call-To-Action Block 2" onCopy={() => handleCopy(sectionRef2)} />
          <section ref={sectionRef2} className="bg-gray-50 py-20 text-gray-500">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="mb-6 px-4 w-full lg:mb-0 lg:w-9/12">
                  <h2 className="font-medium mb-2 text-blue-600 uppercase">The Latest</h2>
                  <h3 className="font-bold text-4xl text-gray-900">Our ability to feel, act and communicate is indistinguishable from magic.</h3>
                </div>
                <div className="px-4 w-full lg:text-right lg:w-3/12">
                  <a href="#" className="bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white uppercase">Read More</a>
                </div>
              </div>
            </div>
          </section>
          {/* Call-To-Action Block 3 */}
          <SectionDivider name="Call-To-Action Block 3" onCopy={() => handleCopy(sectionRef3)} />
          <section ref={sectionRef3} className="bg-gray-50 py-20 text-gray-500">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="mx-auto px-4 text-center w-full lg:w-7/12">
                  <h2 className="font-bold mb-6 text-4xl text-gray-900">Our ability to feel, act and communicate is indistinguishable from magic.</h2>
                  <a href="#" className="bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white uppercase">Read More</a>
                </div>
              </div>
            </div>
          </section>
          {/* Call-To-Action Block 4 */}
          <SectionDivider name="Call-To-Action Block 4" onCopy={() => handleCopy(sectionRef4)} />
          <section ref={sectionRef4} className="bg-gray-900 py-20">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="mb-6 px-4 w-full lg:mb-0 lg:w-7/12">
                  <h2 className="font-medium mb-2 text-blue-600 uppercase">The Latest</h2>
                  <h3 className="font-semibold text-4xl text-white">Our ability to feel, act and communicate is indistinguishable from magic.</h3>
                </div>
                <div className="px-4 w-full lg:text-right lg:w-5/12">
                  <a href="#" className="bg-blue-600 font-light hover:bg-blue-700 inline-block px-5 py-2 rounded-sm text-white uppercase">Read More</a>
                </div>
              </div>
            </div>
          </section>
          {/* Call-To-Action Block 5 */}
          <SectionDivider name="Call-To-Action Block 5" onCopy={() => handleCopy(sectionRef5)} />
          <section ref={sectionRef5} className="bg-blue-700 py-20">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="mb-6 px-4 w-full lg:mb-0 lg:w-7/12">
                  <h2 className="font-semibold text-4xl text-white">Our ability to feel, act and communicate is indistinguishable from magic.</h2>
                </div>
                <div className="px-4 w-full lg:text-right lg:w-5/12">
                  <a href="#" className="bg-white font-light hover:bg-gray-300 inline-block px-5 py-2 rounded-sm text-blue-600 uppercase">Read More</a>
                </div>
              </div>
            </div>
          </section>
          {/* Call-To-Action Block 6 */}
          <SectionDivider name="Call-To-Action Block 6" onCopy={() => handleCopy(sectionRef6)} />
          <section ref={sectionRef6} className="bg-gray-800 pt-12">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4 items-center text-center lg:text-left">
                <div className="px-4 py-16 w-full lg:order-2 lg:w-7/12">
                  <h2 className="font-medium text-blue-500 text-lg uppercase">Grab your collection today</h2>
                  <h3 className="font-bold mb-6 text-4xl text-white"> Seasonal sale upto 70% off</h3>
                  <a href="#" className="border-b border-current font-light hover:border-current hover:text-blue-600 inline-block py-1 text-gray-400 text-lg"> See Collection</a>
                </div>
                <div className="px-4 w-full lg:order-1 lg:w-5/12">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 839.2 727.08" className="h-auto max-w-full mx-auto" height="727.08" width="839.2">
                    {/* ...svg content... */}
                  </svg>
                </div>
              </div>
            </div>
          </section>
          {/* Call-To-Action Block 7 */}
          <SectionDivider name="Call-To-Action Block 7" onCopy={() => handleCopy(sectionRef7)} />
          <section ref={sectionRef7} className="bg-gray-100 pt-12">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4 items-center">
                <div className="px-4 py-16 w-full lg:w-7/12">
                  <h2 className="font-medium text-gray-500 text-lg uppercase">Grab your collection today</h2>
                  <h3 className="font-bold mb-6 text-4xl text-gray-800"> Seasonal sale upto 70% off</h3>
                  <a href="#" className="border-b border-current font-light hover:border-current hover:text-gray-800 inline-block py-1 text-blue-600 text-lg"> See Collection</a>
                </div>
                <div className="px-4 w-full lg:w-5/12">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 839.2 727.08" className="h-auto max-w-full mx-auto" height="727.08" width="839.2">
                    {/* ...svg content... */}
                  </svg>
                </div>
              </div>
            </div>
          </section>
          {/* Call-To-Action Block 8 */}
          <SectionDivider name="Call-To-Action Block 8" onCopy={() => handleCopy(sectionRef8)} />
          <section ref={sectionRef8} className="bg-opacity-50 bg-yellow-900">
            <div className="px-4">
              <div className="flex flex-wrap -mx-4 items-center text-center md:text-left">
                <div className="px-10 py-16 w-full md:order-2 md:py-0 md:w-7/12 xl:w-8/12">
                  <h2 className="font-medium text-lg text-white uppercase">Grab your collection today</h2>
                  <h3 className="font-bold mb-4 text-4xl text-white">Seasonal sale upto 70% off</h3>
                  <a href="#" className="border-b border-current font-light hover:border-current hover:text-gray-900 inline-block py-1 text-lg text-white">See Collection</a>
                </div>
                <div className="w-full md:order-1 md:w-5/12 xl:w-4/12">
                  <Image src="https://images.unsplash.com/photo-1556228308-f6e92d757b1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDkyMnwwfDF8c2VhcmNofDI5fHxjdXJvbG9neXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080" className="mx-auto xl:w-full" alt="..." width={1080} height={720} />
                </div>
              </div>
            </div>
          </section>
          {/* Call-To-Action Block 9 */}
          <SectionDivider name="Call-To-Action Block 9" onCopy={() => handleCopy(sectionRef9)} />
          <section ref={sectionRef9} className="bg-opacity-75 bg-purple-800">
            <div className="px-4">
              <div className="flex flex-wrap -mx-4 items-center text-center md:text-left">
                <div className="px-10 py-16 w-full md:order-2 md:py-0 md:w-8/12 xl:w-9/12">
                  <h2 className="font-medium text-lg text-white uppercase">Grab your collection today</h2>
                  <h3 className="font-bold mb-4 text-4xl text-white">Seasonal sale upto 70% off</h3>
                  <a href="#" className="border-b border-current font-light hover:border-current hover:text-gray-900 inline-block py-1 text-lg text-white">See Collection</a>
                </div>
                <div className="w-full md:order-1 md:w-4/12 xl:w-3/12">
                  <Image src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" className="mx-auto xl:w-full" alt="..." width={720} height={1080} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
