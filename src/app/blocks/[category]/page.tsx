import Navigation from "~/components/Navigation";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

const categoryNames: Record<string, string> = {
  "call-to-action-blocks": "Call to Action",
  columns: "Columns",
  "contact-blocks": "Contact",
  "content-blocks": "Content",
  "counter-blocks": "Counter",
  dividers: "Dividers",
  "features-e-services-blocks": "Features & Services",
  "footer-blocks": "Footer",
  "forms-blocks": "Forms",
  headers: "Headers",
  "hero-blocks": "Hero",
  interactions: "Interactions",
  "partner-blocks": "Partner",
  "post-blocks": "Post",
  "pricing-blocks": "Pricing",
  "shop-blocks": "Shop",
  "social-blocks": "Social",
  "teams-blocks": "Teams",
  "testimonials-blocks": "Testimonials",
  "ui-blocks": "UI",
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryTitle = categoryNames[category] ?? category;

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero
          title={`${categoryTitle} Blocks`}
          subtitle={`Browse our collection of ${categoryTitle.toLowerCase()} components`}
        />
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
              <p className="text-lg text-gray-600">
                Content for {categoryTitle} blocks coming soon...
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(categoryNames).map((category) => ({
    category,
  }));
}
