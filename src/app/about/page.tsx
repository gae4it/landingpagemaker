import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { type Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Github, Code, Palette } from "lucide-react";
import Link from "next/link";
import SeoJsonLd from "@/components/SeoJsonLd";
import {
  createBreadcrumbListSchema,
  createWebPageSchema,
} from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/blocks";

export const metadata: Metadata = {
  title: "About LandingPageMaker | Free Tailwind CSS Components",
  description:
    "Learn about LandingPageMaker, an open-source library of copy-paste ready Tailwind CSS landing page components.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About LandingPageMaker | Free Tailwind CSS Components",
    description:
      "Learn about LandingPageMaker, an open-source library of copy-paste ready Tailwind CSS landing page components.",
    type: "website",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: `${SITE_URL}/api/og`,
        width: 1200,
        height: 630,
        alt: "About LandingPageMaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About LandingPageMaker",
    description:
      "Open-source Tailwind CSS blocks and components for high-converting landing pages.",
    images: [`${SITE_URL}/api/og`],
  },
};

export default function About() {
  const aboutSchema = createWebPageSchema({
    name: "About LandingPageMaker",
    description:
      "Learn about LandingPageMaker, an open-source library of copy-paste ready Tailwind CSS landing page components.",
    url: `${SITE_URL}/about`,
  });

  const breadcrumbSchema = createBreadcrumbListSchema([
    { name: "Home", item: SITE_URL },
    { name: "About", item: `${SITE_URL}/about` },
  ]);

  return (
    <>
      <SeoJsonLd data={[aboutSchema, breadcrumbSchema]} />
      <Navigation />
      <main className="min-h-screen bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About LandingPageMaker
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A passion project built with love for web design and modern
              development tools
            </p>
          </div>

          <div className="mt-16 space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Palette className="h-6 w-6 text-primary" />
                  <CardTitle>Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  LandingPageMaker provides a curated collection of beautiful,
                  ready-to-use Tailwind CSS components. Our goal is to help
                  developers and designers build stunning landing pages faster
                  by offering high-quality, customizable blocks that can be
                  easily integrated into any project.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-primary" />
                  <CardTitle>Technology Stack</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Next.js 15</strong> -
                    React framework with App Router
                  </li>
                  <li>
                    <strong className="text-foreground">TypeScript</strong> -
                    Type-safe development
                  </li>
                  <li>
                    <strong className="text-foreground">Tailwind CSS v4</strong>{" "}
                    - Modern utility-first CSS
                  </li>
                  <li>
                    <strong className="text-foreground">shadcn/ui</strong> -
                    Beautiful, accessible components
                  </li>
                  <li>
                    <strong className="text-foreground">tRPC</strong> -
                    End-to-end typesafe APIs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Github className="h-6 w-6 text-primary" />
                  <CardTitle>Open Source</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  This project is open source and available on GitHub. Feel free
                  to contribute, report issues, or suggest new features.
                </p>
                <Link
                  href="https://github.com/gae4it/landingpagemaker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Built with passion for web design and marketing • © 2025
              LandingPageMaker
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
