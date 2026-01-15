import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Megaphone,
  Columns3,
  PhoneCall,
  FileText,
  Gauge,
  SeparatorHorizontal,
  Sparkles,
  Square,
  PenLine,
  AlignLeft,
  PanelsTopLeft,
  Pointer,
  Users,
  Newspaper,
  BadgeDollarSign,
  ShoppingBag,
  Share2,
  Users2,
  Quote,
  Shapes,
  Check,
  HelpCircle,
} from "lucide-react";

const categories = [
  {
    name: "Call to Action",
    slug: "blocks-call-to-action",
    description: "Engaging CTAs to drive conversions",
    icon: Megaphone,
  },
  {
    name: "Columns",
    slug: "blocks-columns",
    description: "Multi-column layouts for content organization",
    icon: Columns3,
  },
  {
    name: "Contact",
    slug: "blocks-contact",
    description: "Contact forms and information sections",
    icon: PhoneCall,
  },
  {
    name: "Content",
    slug: "blocks-content",
    description: "Rich content sections for storytelling",
    icon: FileText,
  },
  {
    name: "Counter",
    slug: "blocks-counter",
    description: "Animated statistics and counters",
    icon: Gauge,
  },
  {
    name: "Dividers",
    slug: "blocks-dividers",
    description: "Stylish section dividers",
    icon: SeparatorHorizontal,
  },
  {
    name: "Features & Services",
    slug: "blocks-features-e-services",
    description: "Showcase features and services",
    icon: Sparkles,
  },
  {
    name: "Footer",
    slug: "blocks-footer",
    description: "Professional footer designs",
    icon: Square,
  },
  {
    name: "Forms",
    slug: "blocks-forms",
    description: "Beautiful form components",
    icon: PenLine,
  },
  {
    name: "Headers",
    slug: "blocks-headers",
    description: "Eye-catching header sections",
    icon: AlignLeft,
  },
  {
    name: "Hero",
    slug: "blocks-hero",
    description: "Stunning hero sections",
    icon: PanelsTopLeft,
  },
  {
    name: "Interactions",
    slug: "blocks-interactions",
    description: "Interactive UI elements",
    icon: Pointer,
  },
  {
    name: "Partner",
    slug: "blocks-partner",
    description: "Partner and logo showcases",
    icon: Users,
  },
  {
    name: "Post",
    slug: "blocks-post",
    description: "Blog post and article layouts",
    icon: Newspaper,
  },
  {
    name: "Pricing",
    slug: "blocks-pricing",
    description: "Pricing tables and plans",
    icon: BadgeDollarSign,
  },
  {
    name: "Shop",
    slug: "blocks-shop",
    description: "E-commerce product displays",
    icon: ShoppingBag,
  },
  {
    name: "Social",
    slug: "blocks-social",
    description: "Social media integrations",
    icon: Share2,
  },
  {
    name: "Teams",
    slug: "blocks-teams",
    description: "Team member showcases",
    icon: Users2,
  },
  {
    name: "Testimonials",
    slug: "blocks-testimonials",
    description: "Customer testimonials and reviews",
    icon: Quote,
  },
  {
    name: "UI",
    slug: "blocks-ui",
    description: "Essential UI components",
    icon: Shapes,
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Are these components completely free to use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! All components are 100% free to use in both personal and commercial projects. No attribution required, though it's appreciated. The code is open-source and can be modified to fit your needs.",
                },
              },
              {
                "@type": "Question",
                name: "What tech stack are these components built with?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "All components are built with Next.js 15, React 19, shadcn/ui components, and Tailwind CSS 4. They're fully typed with TypeScript and include dark mode support out of the box.",
                },
              },
              {
                "@type": "Question",
                name: "How do I use these components in my project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Simply browse to the component you want, click the copy button to copy the code, and paste it into your Next.js project. Make sure you have shadcn/ui and Tailwind CSS set up first. Each component is self-contained and ready to use.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need to install any dependencies?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You'll need a Next.js project with Tailwind CSS and shadcn/ui configured. Some components may require specific shadcn/ui components to be installed (like Button, Card, etc.), which you can add using the shadcn/ui CLI.",
                },
              },
              {
                "@type": "Question",
                name: "Are the components responsive and accessible?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! All components are fully responsive and follow accessibility best practices. They work seamlessly on mobile, tablet, and desktop devices, and include proper ARIA labels and keyboard navigation support.",
                },
              },
              {
                "@type": "Question",
                name: "Can I customize the components?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Since you're copying the source code directly, you have full control to customize colors, spacing, animations, and any other aspects using Tailwind CSS classes or custom CSS. The components are designed to be easily adaptable.",
                },
              },
              {
                "@type": "Question",
                name: "Will more components be added?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! We're continuously adding new sections and improving existing ones. Follow our GitHub repository to stay updated with new releases and component additions.",
                },
              },
            ],
          }),
        }}
      />
      <Navigation />
      <main className="bg-background min-h-screen">
        <Hero
          title="Free Next.js Components Library - Copy & Paste Landing Page Sections with shadcn/ui"
          subtitle="Free, copy-paste ready Next.js components & landing page sections."
          subsubtitle="Build beautiful landing pages quickly with our professionally designed, Tailwind CSS-based components. 20+ pre-built blocks with Tailwind CSS & shadcn/ui. No signup, no installation needed—just copy, customize & ship."
          ctaText="Browse Components"
          ctaLink="#categories"
        />

        {/* Animated Hero Image Section */}
        <section className="from-background to-muted/20 bg-gradient-to-b py-2 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="border-border bg-card relative overflow-hidden rounded-2xl border shadow-2xl">
              {/* Image background */}
              <div className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&h=1080&q=80&fit=crop"
                  alt="Developer workspace with code"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Dark gradient overlay */}
                <div className="from-background/90 via-background/80 to-background/60 absolute inset-0 bg-gradient-to-r" />
              </div>

              {/* Content */}
              <div className="relative p-8 sm:p-12">
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className="space-y-4">
                    <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium">
                      <PanelsTopLeft className="h-4 w-4" />
                      <span>20+ Ready-to-Use Components</span>
                    </div>
                    <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                      Copy, Paste, Ship
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      Production-ready Next.js sections built with shadcn/ui and
                      Tailwind CSS. No configuration needed&mdash;just copy and
                      use.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Built with Next.js 15 & React 19",
                        "Fully responsive & accessible",
                        "Dark mode support included",
                        "TypeScript ready",
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Check className="text-primary h-5 w-5 shrink-0" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual demo cards with animation */}
                  <div className="relative hidden h-[400px] lg:block lg:h-[500px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid w-full max-w-sm grid-cols-2 gap-4">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="border-border bg-card/50 aspect-square rounded-xl border shadow-lg backdrop-blur-sm"
                            style={{
                              animation: `float 3s ease-in-out infinite`,
                              animationDelay: `${i * 0.2}s`,
                            }}
                          >
                            <div className="from-primary/20 to-secondary/20 h-full w-full rounded-xl bg-gradient-to-br p-4">
                              <div className="space-y-2">
                                <div className="bg-foreground/10 h-3 w-3/4 rounded" />
                                <div className="bg-foreground/5 h-2 w-1/2 rounded" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                Free Next.js Landing Page Component Categories
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Browse 20+ free, copy-paste ready landing page sections. All
                components built with Next.js, shadcn/ui, and Tailwind CSS. No
                installation needed—just copy the code and customize.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blocks/${category.slug}`}
                  title={`Copy and paste ${category.name} components for your Next.js landing page`}
                >
                  <Card className="hover:border-primary h-full transition-colors">
                    <CardHeader className="flex flex-row items-start gap-3">
                      {category.icon ? (
                        <category.icon
                          className="text-primary mt-1 h-5 w-5 shrink-0"
                          aria-hidden
                        />
                      ) : null}
                      <div>
                        <CardTitle className="text-lg">
                          {category.name} Blocks
                        </CardTitle>
                        <CardDescription>
                          {category.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2">
                <HelpCircle className="text-primary h-6 w-6" />
                <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-muted-foreground text-lg">
                Everything you need to know about using our component library
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Are these components completely free to use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! All components are 100% free to use in both personal and
                  commercial projects. No attribution required, though it&apos;s
                  appreciated. The code is open-source and can be modified to
                  fit your needs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  What tech stack are these components built with?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  All components are built with Next.js 15, React 19, shadcn/ui
                  components, and Tailwind CSS 4. They&apos;re fully typed with
                  TypeScript and include dark mode support out of the box.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  How do I use these components in my project?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Simply browse to the component you want, click the copy button
                  to copy the code, and paste it into your Next.js project. Make
                  sure you have shadcn/ui and Tailwind CSS set up first. Each
                  component is self-contained and ready to use.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Do I need to install any dependencies?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  You&apos;ll need a Next.js project with Tailwind CSS and
                  shadcn/ui configured. Some components may require specific
                  shadcn/ui components to be installed (like Button, Card,
                  etc.), which you can add using the shadcn/ui CLI.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Are the components responsive and accessible?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely! All components are fully responsive and follow
                  accessibility best practices. They work seamlessly on mobile,
                  tablet, and desktop devices, and include proper ARIA labels
                  and keyboard navigation support.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Can I customize the components?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! Since you&apos;re copying the source code directly, you
                  have full control to customize colors, spacing, animations,
                  and any other aspects using Tailwind CSS classes or custom
                  CSS. The components are designed to be easily adaptable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-7"
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  Will more components be added?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes! We&apos;re continuously adding new sections and improving
                  existing ones. Follow our GitHub repository to stay updated
                  with new releases and component additions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
