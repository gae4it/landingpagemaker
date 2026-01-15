import { type Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | LandingPageMaker",
  description:
    "Privacy Policy for LandingPageMaker - Educational platform for learning landing page design and component creation.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Last updated: January 15, 2026
            </p>
          </div>

          {/* Educational Disclaimer */}
          <div className="mb-10 rounded-lg border border-blue-900/50 bg-blue-950/30 p-6">
            <h2 className="mb-2 text-lg font-semibold text-blue-300">
              📚 Educational Project Disclaimer
            </h2>
            <p className="text-blue-200">
              LandingPageMaker is an <strong>educational platform</strong>{" "}
              designed to teach landing page design and component creation. This
              privacy policy outlines our minimal data practices for educational
              purposes. This is not a commercial service and is intended for
              learning and demonstration purposes only.
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-invert max-w-none space-y-10">
            {/* Introduction */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                LandingPageMaker (&quot;we,&quot; &quot;our,&quot; or
                &quot;us&quot;) is committed to protecting your privacy. This
                Privacy Policy explains how we handle your information when you
                visit our website.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                📊 Data Collection
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We believe in minimal data collection. We collect only essential
                information to provide educational functionality:
              </p>
              <ul className="text-muted-foreground ml-6 list-disc space-y-3">
                <li>
                  <strong className="text-foreground">Usage Analytics:</strong>{" "}
                  Anonymous page views and feature interactions (no personal
                  identification)
                </li>
                <li>
                  <strong className="text-foreground">
                    Browser Information:
                  </strong>{" "}
                  Device type, browser version, and OS for compatibility
                  optimization
                </li>
                <li>
                  <strong className="text-foreground">IP Address Logs:</strong>{" "}
                  Server logs for security (automatically purged after 30 days)
                </li>
              </ul>
              <p className="text-muted-foreground mt-4 rounded border border-yellow-900/50 bg-yellow-950/30 p-3 text-sm">
                ⚠️ We <strong>do not</strong> collect personal information
                unless voluntarily provided. We do not sell or share data with
                third parties.
              </p>
            </section>

            {/* How We Use Data */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                🎯 How We Use Data
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Your data is used exclusively for educational and operational
                purposes:
              </p>
              <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                <li>Improving platform functionality and user experience</li>
                <li>
                  Understanding which features students find most valuable
                </li>
                <li>Detecting and preventing misuse or security threats</li>
                <li>Responding to contact form inquiries (if provided)</li>
              </ul>
            </section>

            {/* Cookie Usage */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                🍪 Cookie Usage
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We use cookies minimally to enhance your learning experience:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500/50 pl-4">
                  <h4 className="text-foreground mb-1 font-semibold">
                    Essential Cookies
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Required for platform functionality. Cannot be disabled.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500/50 pl-4">
                  <h4 className="text-foreground mb-1 font-semibold">
                    Analytics Cookies
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Help us understand usage to improve experience. Fully
                    anonymized and optional.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 rounded border border-blue-900/50 bg-blue-950/30 p-3 text-sm">
                💡 You can disable non-essential cookies in your browser
                settings.
              </p>
            </section>
            {/* Third-Party Analytics (Cronitor RUM) */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                📈 Third-Party Analytics (Cronitor RUM)
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                With your consent, we use{" "}
                <strong className="text-foreground">Cronitor RUM</strong> for
                anonymous performance metrics and page usage analytics. If you
                decline non-essential cookies, Cronitor will not be loaded.
              </p>
              <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                <li>
                  Data types: Visited URLs, performance timings, anonymous
                  navigation events
                </li>
                <li>
                  Personal data:{" "}
                  <strong className="text-foreground">
                    We do not collect personal information
                  </strong>{" "}
                  (no names, emails, form contents)
                </li>
                <li>Legal basis: Consent (opt-in via cookie banner)</li>
              </ul>
              <p className="text-muted-foreground mt-4 rounded border border-blue-900/50 bg-blue-950/30 p-3 text-sm">
                💡 You can change your choice at any time by clearing browser
                cookies or using the consent banner if it reappears.
              </p>
            </section>
            {/* Data Security */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                🔒 Data Security
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Your privacy is important to us. We implement industry-standard
                security measures:
              </p>
              <ul className="text-muted-foreground ml-6 list-disc space-y-2">
                <li>HTTPS encryption for all data in transit</li>
                <li>Secure authentication mechanisms</li>
                <li>Regular security audits and updates</li>
                <li>
                  Limited data retention (personal data deleted upon request)
                </li>
              </ul>
              <p className="text-muted-foreground mt-4 rounded border border-amber-900/50 bg-amber-950/30 p-3 text-sm">
                ⚠️ While we implement robust protections, no system is 100%
                secure. Please don&apos;t share sensitive information through
                our platform.
              </p>
            </section>

            {/* GDPR Rights */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                ⚖️ Your GDPR Rights
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                If you&apos;re in the EU or EEA, you have specific rights under
                GDPR:
              </p>
              <div className="grid gap-3">
                <div className="bg-muted/20 border-border rounded border p-3">
                  <h4 className="text-foreground mb-1 font-semibold">
                    ✏️ Right to Access
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Request a copy of personal data we hold about you
                  </p>
                </div>
                <div className="bg-muted/20 border-border rounded border p-3">
                  <h4 className="text-foreground mb-1 font-semibold">
                    🗑️ Right to Erasure
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Request deletion of your data (&quot;right to be
                    forgotten&quot;)
                  </p>
                </div>
                <div className="bg-muted/20 border-border rounded border p-3">
                  <h4 className="text-foreground mb-1 font-semibold">
                    ✏️ Right to Rectification
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Correct inaccurate personal data
                  </p>
                </div>
                <div className="bg-muted/20 border-border rounded border p-3">
                  <h4 className="text-foreground mb-1 font-semibold">
                    🚫 Right to Object
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Opt-out of certain data processing (e.g., analytics)
                  </p>
                </div>
                <div className="bg-muted/20 border-border rounded border p-3">
                  <h4 className="text-foreground mb-1 font-semibold">
                    📥 Right to Data Portability
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Receive your data in a portable, machine-readable format
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mt-4 rounded border border-green-900/50 bg-green-950/30 p-3 text-sm">
                To exercise any of these rights, contact us at the email below.
                We&apos;ll respond within 30 days.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                📧 Contact Us
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Questions about our privacy practices? We&apos;re here to help:
              </p>
              <div className="rounded-lg border border-blue-900/50 bg-blue-950/30 p-6">
                <p className="text-muted-foreground mb-2 font-semibold">
                  Privacy Contact
                </p>
                <p className="font-mono break-all text-blue-300">
                  <a
                    href="mailto:privacy@landingpagemaker.edu"
                    className="hover:underline"
                  >
                    privacy@landingpagemaker.edu
                  </a>
                </p>
                <p className="text-muted-foreground mt-3 text-sm">
                  We aim to respond to all inquiries within 5 business days.
                </p>
              </div>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-foreground mb-4 text-2xl font-bold">
                📝 Policy Updates
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy to reflect changes in our
                practices or legal requirements. We&apos;ll notify you of
                significant changes via email or prominent website notice. Your
                continued use of LandingPageMaker after updates constitutes
                acceptance of the new policy.
              </p>
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
