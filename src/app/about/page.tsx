import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Github, Code, Palette } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
              About LandingPageMaker
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-8">
              A passion project built with love for web design and modern
              development tools
            </p>
          </div>

          <div className="mt-16 space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Palette className="text-primary h-6 w-6" />
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
                  <Code className="text-primary h-6 w-6" />
                  <CardTitle>Technology Stack</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2">
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
                  <Github className="text-primary h-6 w-6" />
                  <CardTitle>Open Source</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
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
            <p className="text-muted-foreground text-sm">
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
