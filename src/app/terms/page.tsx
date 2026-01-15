import { type Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | LandingPageMaker",
  description:
    "Terms of Service for LandingPageMaker - an educational project for learning landing page design with Tailwind CSS components.",
};

export default function TermsOfService() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Last updated: January 15, 2026
            </p>
          </div>

          {/* Big Educational Disclaimer */}
          <div className="mb-12 rounded-lg border-2 border-yellow-700/50 bg-yellow-950/30 p-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 text-2xl text-yellow-500">⚠️</span>
              <div>
                <h2 className="mb-2 text-xl font-bold text-yellow-300">
                  📚 Educational Project Disclaimer
                </h2>
                <p className="text-base leading-relaxed text-yellow-200/90">
                  LandingPageMaker is an{" "}
                  <strong>educational, non-commercial project</strong> designed
                  to help developers and designers learn how to build landing
                  pages using Tailwind CSS. This is NOT a commercial service,
                  and these terms reflect that nature. By using this service,
                  you understand and agree that this is an educational resource
                  shared by the community.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using LandingPageMaker, you accept and agree to
                be bound by the terms and provision of this agreement. If you do
                not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* 2. Service Description */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                2. Service Description
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                LandingPageMaker is an educational platform that provides:
              </p>
              <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                <li>Pre-built Tailwind CSS component blocks</li>
                <li>Code samples and examples for learning purposes</li>
                <li>Documentation and tutorials</li>
                <li>A showcase of modern web design patterns</li>
              </ul>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                This service is provided &quot;as-is&quot; for educational
                purposes only.
              </p>
            </section>

            {/* 3. Content Usage Rights */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                3. Content Usage Rights
              </h2>
              <div className="bg-muted/30 my-4 space-y-4 rounded-lg p-6">
                <div>
                  <h3 className="text-foreground mb-2 font-bold">
                    ✅ What You Can Do:
                  </h3>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>View and study the code samples</li>
                    <li>
                      Copy and modify components for your personal projects
                    </li>
                    <li>Use components in commercial projects</li>
                    <li>
                      Learn from the patterns and best practices demonstrated
                    </li>
                    <li>Share knowledge about what you learned with others</li>
                    <li>Fork and contribute to the open-source repository</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground mb-2 font-bold">
                    ❌ What You Cannot Do:
                  </h3>
                  <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                    <li>Claim the code or designs as your own original work</li>
                    <li>
                      Rebrand LandingPageMaker components as your own product
                    </li>
                    <li>Remove copyright notices or attributions</li>
                    <li>Use the site for commercial scraping or harvesting</li>
                    <li>
                      Bypass security measures or attempt unauthorized access
                    </li>
                    <li>Sell unmodified components from this site</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. Intellectual Property */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                4. Intellectual Property Rights
              </h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                LandingPageMaker content is provided under the MIT License,
                which allows for broad usage with minimal restrictions. However:
              </p>
              <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                <li>
                  The LandingPageMaker name, logo, and branding are not covered
                  by the MIT License
                </li>
                <li>Third-party libraries used maintain their own licenses</li>
                <li>
                  You are responsible for complying with all applicable licenses
                </li>
                <li>
                  Tailwind CSS is provided under the Tailwind CSS Free License
                </li>
                <li>shadcn/ui components are provided under the MIT License</li>
              </ul>
            </section>

            {/* 5. Information Accuracy */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                5. Information Accuracy & Disclaimers
              </h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                While we strive to provide accurate and up-to-date information:
              </p>
              <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                <li>
                  Code samples may not work in all environments or versions
                </li>
                <li>Components should be tested before use in production</li>
                <li>Tailwind CSS and other dependencies may have updates</li>
                <li>Documentation may be incomplete or contain errors</li>
                <li>Component browser compatibility may vary</li>
              </ul>
            </section>

            {/* 6. User Conduct */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                6. User Conduct
              </h2>
              <p className="text-muted-foreground mb-3 leading-relaxed">
                When using LandingPageMaker, you agree to:
              </p>
              <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                <li>Not engage in any activity that disrupts the service</li>
                <li>Not attempt to hack, exploit, or compromise security</li>
                <li>
                  Respect the time and resources invested by the maintainers
                </li>
                <li>
                  Provide constructive feedback and report bugs responsibly
                </li>
                <li>Not use the platform for illegal activities</li>
                <li>Respect the intellectual property of others</li>
              </ul>
            </section>

            {/* 7. Privacy Policy */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                7. Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For information about how we collect, use, and protect your
                data, please refer to our{" "}
                <Link
                  href="/privacy"
                  className="text-primary font-medium hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </section>

            {/* 8. Disclaimer of Warranties */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                8. Disclaimer of Warranties
              </h2>
              <p className="text-muted-foreground mb-3 leading-relaxed font-semibold">
                THIS SERVICE IS PROVIDED &quot;AS IS&quot; WITHOUT WARRANTY OF
                ANY KIND.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                LandingPageMaker makes no representations or warranties
                regarding the completeness, accuracy, timeliness, or
                functionality of the code samples, components, or documentation.
                To the fullest extent permitted by law, LandingPageMaker
                disclaims all warranties, express or implied.
              </p>
            </section>

            {/* 9. Limitation of Liability */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                9. Limitation of Liability
              </h2>
              <p className="text-muted-foreground mb-3 leading-relaxed font-semibold">
                IN NO EVENT SHALL LANDINGPAGEMAKER BE LIABLE FOR ANY DAMAGES.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by applicable law, in no event
                shall LandingPageMaker be liable for any indirect, incidental,
                special, consequential, or punitive damages.
              </p>
            </section>

            {/* 10. Modifications */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                10. Modifications to Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                LandingPageMaker reserves the right to modify these terms at any
                time. Changes will be posted with an updated &quot;Last
                updated&quot; date. Continued use of the service following the
                posting of revised terms means that you accept and agree to the
                changes.
              </p>
            </section>

            {/* 11. Contact Information */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                11. Contact & Questions
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                If you have questions about these Terms of Service, please reach
                out through GitHub:
              </p>
              <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                <li>
                  <strong className="text-foreground">GitHub Issues:</strong>{" "}
                  <Link
                    href="https://github.com/gae4it/landingpagemaker/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Report an issue
                  </Link>
                </li>
                <li>
                  <strong className="text-foreground">
                    GitHub Discussions:
                  </strong>{" "}
                  <Link
                    href="https://github.com/gae4it/landingpagemaker/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Start a discussion
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          {/* Closing Statement */}
          <div className="bg-muted/30 border-border mt-12 rounded-lg border p-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              By using LandingPageMaker, you acknowledge that you have read,
              understood, and agree to be bound by these Terms of Service. If
              you do not agree with any part of these terms, please discontinue
              use of the service immediately. Thank you for being part of our
              educational community!
            </p>
          </div>

          {/* Links to other legal pages */}
          <div className="border-border mt-16 flex flex-wrap justify-center gap-6 border-t pt-8 text-sm">
            <Link
              href="/privacy"
              className="text-primary font-medium hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/cookies"
              className="text-primary font-medium hover:underline"
            >
              Cookie Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/terms"
              className="text-primary font-medium hover:underline"
            >
              Terms of Service
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/disclaimer"
              className="text-primary font-medium hover:underline"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
