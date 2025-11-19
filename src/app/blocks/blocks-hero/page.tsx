import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";
import Image from "next/image";

export default function BlocksHeroPage() {
  return (
    <>
      <Navigation />
      <Hero
        title="Hero Sections"
        subtitle="Beautiful landing page hero blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Block Example - Paste your <section> here */}
          <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80"
              alt=""
              fill
              className="object-cover object-right md:object-center opacity-40 -z-10"
            />
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Welcome to LandingPageMaker
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Build beautiful landing pages with ready-to-use hero sections. Copy, paste, and customize for your next project.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
