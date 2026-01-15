import { type Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | LandingPageMaker",
  description:
    "Learn about cookies used on LandingPageMaker. Understand how we collect and use data, manage your preferences, and your rights under GDPR.",
};

export default function CookiePolicy() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Last updated: January 2026
            </p>
          </div>

          {/* Educational Disclaimer */}
          <div className="mb-10 rounded-lg border border-blue-900/50 bg-blue-950/30 p-6">
            <h2 className="mb-2 text-lg font-semibold text-blue-300">
              📚 Educational Project Notice
            </h2>
            <p className="text-blue-200">
              LandingPageMaker is an educational project designed to showcase
              landing page components and web development practices. This Cookie
              Policy is provided for informational purposes to demonstrate
              professional documentation standards.
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-invert max-w-none space-y-10">
            {/* What Are Cookies */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                👁️ What Are Cookies?
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  Cookies are small text files that are stored on your browser
                  or device when you visit a website. They serve various
                  purposes and help websites provide you with a better user
                  experience by remembering your preferences, login information,
                  and browsing behavior.
                </p>
                <p>There are two main types of cookies:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong className="text-foreground">
                      Session Cookies:
                    </strong>{" "}
                    Temporary cookies that are deleted when you close your
                    browser.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Persistent Cookies:
                    </strong>{" "}
                    Cookies that remain on your device for a specified period or
                    until manually deleted.
                  </li>
                </ul>
              </div>
            </section>

            {/* How We Use Cookies */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                🔒 How We Use Cookies
              </h2>
              <div className="text-muted-foreground space-y-6">
                <div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Essential Cookies
                  </h3>
                  <p>
                    These cookies are necessary for the website to function
                    properly. They enable basic functionality such as page
                    navigation, security, and access to secure areas of the
                    website. The website cannot function properly without these
                    cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Analytics Cookies
                  </h3>
                  <p>
                    We use analytics cookies to understand how visitors interact
                    with our website. This helps us analyze page traffic,
                    visitor behavior, and improve the overall user experience.
                    Data is typically anonymized and aggregated.
                  </p>
                </div>

                <div>
                  <h3 className="text-foreground mb-2 font-semibold">
                    Performance Cookies
                  </h3>
                  <p>
                    These cookies monitor website performance and optimize
                    loading times. They help us identify and fix errors,
                    ensuring the website runs smoothly and efficiently for all
                    visitors.
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                Third-Party Services
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  LandingPageMaker uses the following third-party services that
                  may set cookies:
                </p>
                <ul className="ml-6 list-disc space-y-3">
                  <li>
                    <strong className="text-foreground">
                      Google Analytics:
                    </strong>{" "}
                    Used to track website traffic and user behavior.
                    Google&apos;s privacy policy applies to data collected.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Vercel Analytics:
                    </strong>{" "}
                    Used to monitor performance metrics and website health. Data
                    is processed in accordance with Vercel&apos;s data policies.
                  </li>
                  <li>
                    <strong className="text-foreground">Next.js:</strong> The
                    framework used to build this website may use cookies for
                    functionality and optimization.
                  </li>
                </ul>
                <p>
                  We recommend reviewing the privacy policies of these services
                  to understand how they collect and process your data.
                </p>
              </div>
            </section>

            {/* Cookie Management */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                Managing Your Cookies
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  You have full control over cookies in your browser. You can:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>View cookies stored on your device</li>
                  <li>Accept or reject cookies</li>
                  <li>Delete all cookies or specific ones</li>
                  <li>Set preferences for automatic cookie management</li>
                </ul>
                <p className="text-foreground mt-4 font-semibold">
                  Browser Instructions:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Chrome:</strong> Settings → Privacy and security →
                    Cookies and other site data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Preferences → Privacy & Security →
                    Cookies and Site Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences → Privacy → Manage
                    Website Data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings → Privacy, search, and
                    services → Clear browsing data
                  </li>
                </ul>
                <div className="mt-4 rounded border border-yellow-900/50 bg-yellow-950/30 p-3">
                  <p className="text-sm text-yellow-200">
                    <strong>Note:</strong> Disabling essential cookies may
                    affect website functionality.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookie Duration */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                ⏰ Cookie Duration
              </h2>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  The duration for which cookies are stored varies depending on
                  their type and purpose:
                </p>
                <div className="border-primary border-l-4 pl-4">
                  <p className="text-foreground font-semibold">
                    Session Cookies
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Deleted when you close your browser
                  </p>
                </div>
                <div className="border-primary border-l-4 pl-4">
                  <p className="text-foreground font-semibold">
                    Analytics Cookies
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Typically stored for 1-2 years
                  </p>
                </div>
                <div className="border-primary border-l-4 pl-4">
                  <p className="text-foreground font-semibold">
                    Preference Cookies
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Can persist for up to several years
                  </p>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                ⚖️ Your Rights Under GDPR
              </h2>
              <div className="text-muted-foreground space-y-3">
                <p>
                  If you are located in the European Union or other
                  jurisdictions with similar privacy regulations, you have the
                  following rights:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong className="text-foreground">
                      Right to Access:
                    </strong>{" "}
                    You can request information about what cookies we store.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Right to Rectification:
                    </strong>{" "}
                    You can request to correct any inaccurate data.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Right to Erasure:
                    </strong>{" "}
                    You can request deletion of your data (right to be
                    forgotten).
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Right to Restrict Processing:
                    </strong>{" "}
                    You can request limitations on how we use your data.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Right to Object:
                    </strong>{" "}
                    You can object to the processing of your data for marketing
                    purposes.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Right to Data Portability:
                    </strong>{" "}
                    You can request your data in a portable format.
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                Contact Us
              </h2>
              <div className="text-muted-foreground space-y-4">
                <p>
                  If you have any questions about this Cookie Policy or wish to
                  exercise your rights regarding cookies and data processing,
                  please contact us:
                </p>
                <div className="ml-4 space-y-3">
                  <div>
                    <p className="text-foreground font-semibold">GitHub</p>
                    <Link
                      href="https://github.com/gae4it/landingpagemaker"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github.com/gae4it/landingpagemaker
                    </Link>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">
                      Project Documentation
                    </p>
                    <p className="text-sm">
                      See our README and documentation for more information
                      about this educational project.
                    </p>
                  </div>
                </div>
              </div>
            </section>
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
