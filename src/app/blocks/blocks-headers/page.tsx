import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";

export default function BlocksHeadersPage() {
  return (
    <>
      <Navigation />
      <Hero
        title="Headers Sections"
        subtitle="Headers blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Example section */}
          <section className="rounded-lg bg-gray-800 p-8 text-center text-white">
            Headers Block Example
          </section>
          <section className="mt-8">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Another Section
            </h2>
            <p className="mt-4 text-center text-gray-600">
              This is another example section added to the Headers page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
