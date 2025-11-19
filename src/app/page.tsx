import Navigation from "~/components/Navigation";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero
          title="LandingPageMaker"
          subtitle="Find ready-made Tailwind sections to build your landing pages!"
          ctaText="Browse Blocks"
          ctaLink="/blocks"
        />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              All Block Categories
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                "call-to-action-blocks",
                "columns",
                "contact-blocks",
                "content-blocks",
                "counter-blocks",
                "dividers",
                "features-e-services-blocks",
                "footer-blocks",
                "forms-blocks",
                "headers",
                "hero-blocks",
                "interactions",
                "partner-blocks",
                "post-blocks",
                "pricing-blocks",
                "shop-blocks",
                "social-blocks",
                "teams-blocks",
                "testimonials-blocks",
                "ui-blocks",
              ].map((category) => (
                <a
                  key={category}
                  href={`/blocks/${category}`}
                  className="block rounded-lg border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-900 capitalize">
                    {category.replace(/-/g, " ")}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
