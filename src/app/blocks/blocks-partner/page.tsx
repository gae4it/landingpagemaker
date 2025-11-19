import Navigation from "~/components/Navigation";
import Footer from "~/components/Footer";
import Hero from "~/components/Hero";

export default function BlocksPartnerPage() {
  return (
    <>
      <Navigation />
      <Hero title="Partner Sections" subtitle="Partner blocks ready to use. Copy, paste, and customize for your next project." />
      <main className="bg-background min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Example section */}
          <section className="bg-gray-800 text-white p-8 rounded-lg text-center">Partner Block Example</section>
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-center text-gray-900">Join Our Partner Program</h2>
            <p className="mt-4 text-center text-gray-600">
              Become a part of our community and enjoy exclusive benefits. Whether you&apos;re a developer, designer, or
              entrepreneur, we have something for you.
            </p>
            <div className="mt-6 flex justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-700"
              >
                Apply Now
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
