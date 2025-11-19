import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";

export default function BlocksFooterPage() {
  return (
    <>
      <Navigation />
      <Hero title="Footer Sections" subtitle="Footer blocks ready to use. Copy, paste, and customize for your next project." />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Example section */}
          <section className="bg-gray-800 text-white p-8 rounded-lg text-center">Footer Block Example</section>
          <section className="mt-8 bg-gray-900 text-white p-8 rounded-lg text-center">
            {/* Aggiunta di una nuova section di esempio */}
            <h2 className="text-2xl font-bold">Un altro esempio di footer</h2>
            <p className="mt-4">Questo è un altro blocco di footer che puoi utilizzare.</p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
