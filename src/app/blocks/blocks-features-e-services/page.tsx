import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";

export default function BlocksFeaturesEServicesPage() {
  return (
    <>
      <Navigation />
      <Hero title="Features & Services Sections" subtitle="Features & Services blocks ready to use. Copy, paste, and customize for your next project." />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Example section */}
          <section className="bg-gray-800 text-white p-8 rounded-lg text-center">Features & Services Block Example</section>
        </div>
      </main>
      <Footer />
    </>
  );
}
