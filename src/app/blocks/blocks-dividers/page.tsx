import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";

export default function BlocksDividersPage() {
  return (
    <>
      <Navigation />
      <Hero title="Dividers Sections" subtitle="Dividers blocks ready to use. Copy, paste, and customize for your next project." />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Example section */}
          <section className="bg-gray-800 text-white p-8 rounded-lg text-center">Dividers Block Example</section>
          <section className="my-8">
            <div className="border-t border-gray-700 py-4">
              <h2 className="text-2xl font-bold text-white">Section Title</h2>
              <p className="mt-2 text-gray-400">This is an example of a section with a divider.</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
