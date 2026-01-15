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
          <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6 mb-10">
            <h2 className="text-lg font-semibold text-blue-300 mb-2">
              📚 Educational Project Disclaimer
            </h2>
            <p className="text-blue-200">
              LandingPageMaker is an <strong>educational platform</strong> designed
              to teach landing page design and component creation. This privacy
              policy outlines our minimal data practices for educational purposes.
              This is not a commercial service and is intended for learning and
              demonstration purposes only.
            </p>
          </div>

          {/* Content Sections */}
          <div className="prose prose-invert max-w-none space-y-10">
            {/* Introduction */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                LandingPageMaker ("we," "our," or "us") is committed to protecting
                your privacy. This Privacy Policy explains how we handle your
                information when you visit our website.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                📊 Data Collection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe in minimal data collection. We collect only essential
                information to provide educational functionality:
              </p>
              <ul className="text-muted-foreground space-y-3 ml-6 list-disc">
                <li>
                  <strong className="text-foreground">Usage Analytics:</strong> Anonymous
                  page views and feature interactions (no personal identification)
                </li>
                <li>
                  <strong className="text-foreground">Browser Information:</strong> Device
                  type, browser version, and OS for compatibility optimization
                </li>
                <li>
                  <strong className="text-foreground">IP Address Logs:</strong> Server
                  logs for security (automatically purged after 30 days)
                </li>
              </ul>
              <p className="text-muted-foreground text-sm bg-yellow-950/30 border border-yellow-900/50 p-3 rounded mt-4">
                ⚠️ We <strong>do not</strong> collect personal information unless
                voluntarily provided. We do not sell or share data with third parties.
              </p>
            </section>

            {/* How We Use Data */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                🎯 How We Use Data
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your data is used exclusively for educational and operational
                purposes:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-6 list-disc">
                <li>Improving platform functionality and user experience</li>
                <li>Understanding which features students find most valuable</li>
                <li>Detecting and preventing misuse or security threats</li>
                <li>Responding to contact form inquiries (if provided)</li>
              </ul>
            </section>

            {/* Cookie Usage */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                🍪 Cookie Usage
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies minimally to enhance your learning experience:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500/50 pl-4">
                  <h4 className="font-semibold text-foreground mb-1">
                    Essential Cookies
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Required for platform functionality. Cannot be disabled.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500/50 pl-4">
                  <h4 className="font-semibold text-foreground mb-1">
                    Analytics Cookies
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Help us understand usage to improve experience. Fully anonymized
                    and optional.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm bg-blue-950/30 border border-blue-900/50 p-3 rounded mt-4">
                💡 You can disable non-essential cookies in your browser settings.
              </p>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                🔒 Data Security
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Your privacy is important to us. We implement industry-standard
                security measures:
              </p>
              <ul className="text-muted-foreground space-y-2 ml-6 list-disc">
                <li>HTTPS encryption for all data in transit</li>
                <li>Secure authentication mechanisms</li>
                <li>Regular security audits and updates</li>
                <li>Limited data retention (personal data deleted upon request)</li>
              </ul>
              <p className="text-muted-foreground text-sm bg-amber-950/30 border border-amber-900/50 p-3 rounded mt-4">
                ⚠️ While we implement robust protections, no system is 100% secure.
                Please don't share sensitive information through our platform.
              </p>
            </section>

            {/* GDPR Rights */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                ⚖️ Your GDPR Rights
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're in the EU or EEA, you have specific rights under GDPR:
              </p>
              <div className="grid gap-3">
                <div className="bg-muted/20 p-3 rounded border border-border">
                  <h4 className="font-semibold text-foreground mb-1">
                    ✏️ Right to Access
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Request a copy of personal data we hold about you
                  </p>
                </div>
                <div className="bg-muted/20 p-3 rounded border border-border">
                  <h4 className="font-semibold text-foreground mb-1">
                    🗑️ Right to Erasure
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Request deletion of your data ("right to be forgotten")
                  </p>
                </div>
                <div className="bg-muted/20 p-3 rounded border border-border">
                  <h4 className="font-semibold text-foreground mb-1">
                    ✏️ Right to Rectification
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Correct inaccurate personal data
                  </p>
                </div>
                <div className="bg-muted/20 p-3 rounded border border-border">
                  <h4 className="font-semibold text-foreground mb-1">
                    🚫 Right to Object
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Opt-out of certain data processing (e.g., analytics)
                  </p>
                </div>
                <div className="bg-muted/20 p-3 rounded border border-border">
                  <h4 className="font-semibold text-foreground mb-1">
                    📥 Right to Data Portability
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Receive your data in a portable, machine-readable format
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm bg-green-950/30 border border-green-900/50 p-3 rounded mt-4">
                To exercise any of these rights, contact us at the email below.
                We'll respond within 30 days.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                📧 Contact Us
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Questions about our privacy practices? We're here to help:
              </p>
              <div className="bg-blue-950/30 border border-blue-900/50 rounded-lg p-6">
                <p className="text-muted-foreground font-semibold mb-2">
                  Privacy Contact
                </p>
                <p className="text-blue-300 font-mono break-all">
                  <a href="mailto:privacy@landingpagemaker.edu" className="hover:underline">
                    privacy@landingpagemaker.edu
                  </a>
                </p>
                <p className="text-muted-foreground text-sm mt-3">
                  We aim to respond to all inquiries within 5 business days.
                </p>
              </div>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                📝 Policy Updates
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this privacy policy to reflect changes in our
                practices or legal requirements. We'll notify you of significant
                changes via email or prominent website notice. Your continued use
                of LandingPageMaker after updates constitutes acceptance of the
                new policy.
              </p>
            </section>
          </div>

          {/* Links to other legal pages */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm pt-8 border-t border-border">
            <Link href="/privacy" className="text-primary hover:underline font-medium">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/cookies" className="text-primary hover:underline font-medium">
              Cookie Policy
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/terms" className="text-primary hover:underline font-medium">
              Terms of Service
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/disclaimer" className="text-primary hover:underline font-medium">
              Disclaimer
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
