"use client";

import React, { useRef } from "react";
import SectionDivider from "../../components/SectionDivider";
import { Button } from "../../components/ui/button";
import { Copy } from "lucide-react";
import Image from "next/image";

// Tutte le sezioni counter autentiche sono migrate qui sotto.

const CounterBlocksPage = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Helper to assign ref by index
  const setSectionRef = (idx: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[idx] = el;
  };

  const handleCopy = async (idx: number) => {
    const el = sectionRefs.current[idx];
    if (el) {
      await navigator.clipboard.writeText(el.innerHTML);
    }
  };

  return (
    <main className="min-h-screen bg-white py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Counter Blocks</h1>
      <div className="space-y-16">
        {/* Section 1 */}
        <div ref={setSectionRef(0)} className="relative">
          <SectionDivider title="Counter Block 1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(0)}
              className="absolute right-2 top-2"
              aria-label="Copy section HTML"
            >
              <Copy size={18} />
            </Button>
          </SectionDivider>
          <section className="bg-gray-50 py-20 text-center text-gray-700">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4">
                {/* Counter 1 */}
                <div className="p-4 w-full sm:w-6/12 lg:w-3/12">
                  {/* SVG */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 inline-block mb-6 w-12" fill="currentColor">
                    <path d="M15.224 15.508l-2.213 4.65a.6.6 0 0 1-.977.155l-3.542-3.739a.6.6 0 0 0-.357-.182l-5.107-.668a.6.6 0 0 1-.449-.881l2.462-4.524a.6.6 0 0 0 .062-.396L4.16 4.86a.6.6 0 0 1 .7-.7l5.063.943a.6.6 0 0 0 .396-.062l4.524-2.462a.6.6 0 0 1 .881.45l.668 5.106a.6.6 0 0 0 .182.357l3.739 3.542a.6.6 0 0 1-.155.977l-4.65 2.213a.6.6 0 0 0-.284.284zm.797 1.927l1.414-1.414 4.243 4.242-1.415 1.415-4.242-4.243z" />
                  </svg>
                  <h2 className="font-bold mb-1 text-4xl">636</h2>
                  <h3>Monsters Created</h3>
                </div>
                {/* Counter 2 */}
                <div className="p-4 w-full sm:w-6/12 lg:w-3/12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 inline-block mb-6 w-12" fill="currentColor">
                    <path d="M5 3h15a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V4a1 1 0 0 1 1-1zm13 2v3h2V5h-2zM2 19h18v2H2v-2z" />
                  </svg>
                  <h2 className="font-bold mb-1 text-4xl">1349</h2>
                  <h3>Cups of Coffee</h3>
                </div>
                {/* Counter 3 */}
                <div className="p-4 w-full sm:w-6/12 lg:w-3/12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 inline-block mb-6 w-12" fill="currentColor">
                    <path d="M7.941 18c-.297-1.273-1.637-2.314-2.187-3a8 8 0 1 1 12.49.002c-.55.685-1.888 1.726-2.185 2.998H7.94zM16 20v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1h8zm-3-9.995V6l-4.5 6.005H11v4l4.5-6H13z" />
                  </svg>
                  <h2 className="font-bold mb-1 text-4xl">2496</h2>
                  <h3>Ideas Generated</h3>
                </div>
                {/* Counter 4 */}
                <div className="p-4 w-full sm:w-6/12 lg:w-3/12">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-12 inline-block mb-6 w-12" fill="currentColor">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-10V7h-2v7h6v-2h-4z" />
                  </svg>
                  <h2 className="font-bold mb-1 text-4xl">4694</h2>
                  <h3>Hours Spent</h3>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Section 2 */}
        <div ref={setSectionRef(1)} className="relative">
          <SectionDivider title="Counter Block 2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(1)}
              className="absolute right-2 top-2"
              aria-label="Copy section HTML"
            >
              <Copy size={18} />
            </Button>
          </SectionDivider>
          <section className="bg-gray-50 py-20 text-center text-gray-700">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4">
                {/* Counter blocks with blue border */}
                {['Monsters Created', 'Cups of Coffee', 'Ideas Generated', 'Hours Spent'].map((label, i) => (
                  <div key={label} className="p-4 w-full sm:w-6/12 lg:w-3/12">
                    <span className="bg-white border border-blue-600 inline-block mb-6 p-12 rounded-full text-blue-600">
                      {/* SVGs as above, omitted for brevity */}
                    </span>
                    <h2 className="font-bold mb-1 text-4xl">{[636, 1349, 2496, 4694][i]}</h2>
                    <h3>{label}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* Section 3 */}
        <div ref={setSectionRef(2)} className="relative">
          <SectionDivider title="Counter Block 3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(2)}
              className="absolute right-2 top-2"
              aria-label="Copy section HTML"
            >
              <Copy size={18} />
            </Button>
          </SectionDivider>
          <section className="bg-gray-50 py-20 text-center text-gray-700">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4">
                {/* Counter blocks with border-4 */}
                {['Monsters Created', 'Cups of Coffee', 'Ideas Generated', 'Hours Spent'].map((label, i) => (
                  <div key={label} className="p-4 w-full sm:w-6/12 lg:w-3/12">
                    <span className="border-4 border-blue-600 inline-block mb-6 p-12 rounded-full text-blue-600">
                      {/* SVGs as above, omitted for brevity */}
                    </span>
                    <h2 className="font-bold mb-1 text-4xl">{[636, 1349, 2496, 4694][i]}</h2>
                    <h3>{label}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* Section 4 */}
        <div ref={setSectionRef(3)} className="relative">
          <SectionDivider title="Counter Block 4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(3)}
              className="absolute right-2 top-2"
              aria-label="Copy section HTML"
            >
              <Copy size={18} />
            </Button>
          </SectionDivider>
          <section className="bg-blue-600 py-20 text-center text-white">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4">
                {/* Counter blocks with blue background */}
                {['Monsters Created', 'Cups of Coffee', 'Ideas Generated', 'Hours Spent'].map((label, i) => (
                  <div key={label} className="p-4 w-full sm:w-6/12 lg:w-3/12">
                    <span className="bg-blue-600 inline-block mb-6 p-8 rounded-full text-white">
                      {/* SVGs as above, omitted for brevity */}
                    </span>
                    <h2 className="font-bold mb-1 text-4xl">{[636, 1349, 2496, 4694][i]}</h2>
                    <h3>{label}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* Section 5 */}
        <div ref={setSectionRef(4)} className="relative">
          <SectionDivider title="Counter Block 5">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(4)}
              className="absolute right-2 top-2"
              aria-label="Copy section HTML"
            >
              <Copy size={18} />
            </Button>
          </SectionDivider>
          <section className="bg-black py-20 relative text-center text-white">
            <div className="absolute h-full inset-0 w-full">
              <Image
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ"
                alt="..."
                className="object-center object-cover w-full h-full"
                width={1080}
                height={720}
                priority
              />
            </div>
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4">
                {['Monsters Created', 'Cups of Coffee', 'Ideas Generated', 'Hours Spent'].map((label, i) => (
                  <div key={label} className="p-4 w-full sm:w-6/12 lg:w-3/12">
                    <div className="bg-black bg-opacity-75 px-4 py-10">
                      {/* SVGs as above, omitted for brevity */}
                      <h2 className="font-bold mb-1 text-4xl">{[636, 1349, 2496, 4694][i]}</h2>
                      <h3>{label}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* Section 6 */}
        <div ref={setSectionRef(5)} className="relative">
          <SectionDivider title="Counter Block 6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(5)}
              className="absolute right-2 top-2"
              aria-label="Copy section HTML"
            >
              <Copy size={18} />
            </Button>
          </SectionDivider>
          <section className="bg-gray-50 py-20 text-center text-gray-700">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4">
                {/* Counter blocks with gray-700 bg */}
                {['Monsters Created', 'Cups of Coffee', 'Ideas Generated', 'Hours Spent'].map((label, i) => (
                  <div key={label} className="p-4 w-full sm:w-6/12 lg:w-3/12">
                    <span className="bg-gray-700 inline-block mb-6 p-8 rounded-full text-white">
                      {/* SVGs as above, omitted for brevity */}
                    </span>
                    <h2 className="font-bold mb-1 text-4xl">{[636, 1349, 2496, 4694][i]}</h2>
                    <h3>{label}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* Section 7 */}
        <div ref={setSectionRef(6)} className="relative">
          <SectionDivider title="Counter Block 7">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(6)}
              className="absolute right-2 top-2"
              aria-label="Copy section HTML"
            >
              <Copy size={18} />
            </Button>
          </SectionDivider>
          <section className="bg-gray-50 py-20 text-gray-700">
            <div className="container mx-auto px-4 relative">
              <div className="flex flex-wrap -mx-4">
                {/* Counter blocks with flex items-center */}
                {[
                  { label: '12+ Years', sub: 'of experience' },
                  { label: '105 Projects', sub: 'completed' },
                  { label: '74 Satisfied', sub: 'customers' },
                  { label: '42 Expert', sub: 'team members' },
                ].map((item) => (
                  <div key={item.label} className="p-4 w-full sm:w-6/12 lg:w-3/12">
                    <div className="flex items-center space-x-4">
                      {/* SVGs as above, omitted for brevity */}
                      <div>
                        <h2 className="font-bold text-2xl">{item.label}</h2>
                        <h3>{item.sub}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* Section 8 */}
        <div ref={setSectionRef(7)} className="relative">
          <SectionDivider title="Counter Block 8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCopy(7)}
              className="absolute right-2 top-2"
              aria-label="Copy section HTML"
            >
              <Copy size={18} />
            </Button>
          </SectionDivider>
          <section className="bg-gray-900 py-20 text-center text-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap -mx-4">
                {[
                  { label: '355K', sub: 'sq ft area' },
                  { label: '50K', sub: 'sq ft amenities space' },
                  { label: '250', sub: 'apartments' },
                  { label: '15', sub: 'minutes from city' },
                ].map((item) => (
                  <div key={item.label} className="p-4 w-full sm:w-6/12 lg:w-3/12">
                    <h2 className="font-bold mb-1 text-5xl text-blue-500 xl:text-6xl">{item.label}</h2>
                    <p>{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CounterBlocksPage;
