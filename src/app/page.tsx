import Link from "next/link";
import Navigation from "~/components/Navigation";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";

const categories = [
  { name: "Call to Action", slug: "blocks-call-to-action", description: "Engaging CTAs to drive conversions" },
  { name: "Columns", slug: "blocks-columns", description: "Multi-column layouts for content organization" },
    { name: "Contact", slug: "blocks-contact", description: "Contact forms and information sections" },
    { name: "Content", slug: "blocks-content", description: "Rich content sections for storytelling" },
    { name: "Counter", slug: "blocks-counter", description: "Animated statistics and counters" },
    { name: "Dividers", slug: "blocks-dividers", description: "Stylish section dividers" },
    { name: "Features & Services", slug: "blocks-features-e-services", description: "Showcase features and services" },
    { name: "Footer", slug: "blocks-footer", description: "Professional footer designs" },
    { name: "Forms", slug: "blocks-forms", description: "Beautiful form components" },
    { name: "Headers", slug: "blocks-headers", description: "Eye-catching header sections" },
    { name: "Hero", slug: "blocks-hero", description: "Stunning hero sections" },
    { name: "Interactions", slug: "blocks-interactions", description: "Interactive UI elements" },
    { name: "Partner", slug: "blocks-partner", description: "Partner and logo showcases" },
    { name: "Post", slug: "blocks-post", description: "Blog post and article layouts" },
    { name: "Pricing", slug: "blocks-pricing", description: "Pricing tables and plans" },
    { name: "Shop", slug: "blocks-shop", description: "E-commerce product displays" },
    { name: "Social", slug: "blocks-social", description: "Social media integrations" },
    { name: "Teams", slug: "blocks-teams", description: "Team member showcases" },
    { name: "Testimonials", slug: "blocks-testimonials", description: "Customer testimonials and reviews" },
    { name: "UI", slug: "blocks-ui", description: "Essential UI components" },
  ];

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen">
        <Hero
          title="Landing Page Maker"
          subtitle="Beautiful landing page components"
          ctaText="Browse Components"
          ctaLink="#categories"
        />
        <section id="categories" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                Component Categories
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Explore our collection of professionally designed components
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categories.map((category) => (
                <Link key={category.slug} href={`/blocks/${category.slug}`}>
                  <Card className="hover:border-primary h-full transition-colors">
                    <CardHeader>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
