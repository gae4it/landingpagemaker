import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";

export default function BlocksInteractionsPage() {
  return (
    <>
      <Navigation />
      <Hero
        title="Interactions Sections"
        subtitle="Interactions blocks ready to use. Copy, paste, and customize for your next project."
      />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Example section */}
          <section className="rounded-lg bg-gray-800 p-8 text-center text-white">
            Interactions Block Example
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
