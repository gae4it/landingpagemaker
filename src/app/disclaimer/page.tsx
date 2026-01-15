import { type Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | LandingPageMaker",
  description:
    "Legal disclaimer: LandingPageMaker is an educational project. Please read our disclaimer and understand the limitations before use.",
};

export default function Disclaimer() {
  return (
    <>
      <Navigation />
      <main className="bg-background min-h-screen py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl">
              Disclaimer
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Please read this disclaimer carefully before using LandingPageMaker
            </p>
          </div>

          {/* Big Educational Notice */}
          <div className="mb-12 rounded-lg border-2 border-red-700/50 bg-red-950/30 p-6">
            <div className="flex gap-4">
              <span className="text-red-500 text-2xl flex-shrink-0">⚠️</span>
              <div>
                <h2 className="text-red-300 text-xl font-bold mb-2">
                  Educational Project Notice
                </h2>
                <p className="text-red-200">
                  LandingPageMaker is an <strong>EDUCATIONAL and NON-COMMERCIAL
                  project</strong>. This project is created for learning and
                  demonstration purposes only. It is not intended for commercial
                  use. While you are free to use the components and code for
                  educational purposes and personal projects, any commercial use
                  requires explicit permission from the project authors.
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer Sections */}
          <div className="prose prose-invert max-w-none space-y-6">
            {/* No Professional Advice */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                1. No Professional Advice
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  LandingPageMaker provides educational content and code
                  components. Nothing on this project should be considered:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Legal advice</li>
                  <li>Financial advice</li>
                  <li>Technical or security consultation</li>
                  <li>Professional recommendations or guidance</li>
                </ul>
                <p>
                  For matters requiring professional advice, please consult with
                  qualified experts in the appropriate field.
                </p>
              </div>
            </section>

            {/* Warranty Disclaimer */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                2. Warranty Disclaimer
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  LandingPageMaker is provided on an "AS IS" and "AS AVAILABLE"
                  basis without any warranties of any kind, either express or
                  implied. We make no representations or warranties regarding:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>
                    The functionality, reliability, or availability of the
                    project
                  </li>
                  <li>
                    The absence of errors, defects, or security vulnerabilities
                  </li>
                  <li>Compatibility with third-party software or services</li>
                  <li>Fitness for a particular purpose</li>
                </ul>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                3. Limitation of Liability
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  To the maximum extent permitted by law, the project authors
                  and contributors shall not be liable for any:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Direct, indirect, incidental, or consequential damages</li>
                  <li>Loss of data, revenue, or business opportunities</li>
                  <li>Damages arising from the use or misuse of the project</li>
                  <li>Security breaches or unauthorized access</li>
                  <li>Third-party claims or actions</li>
                </ul>
                <p className="mt-3">
                  This applies regardless of whether the project authors were
                  advised of the possibility of such damages.
                </p>
              </div>
            </section>

            {/* Third-Party Content & Links */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                4. Third-Party Content & Links
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  LandingPageMaker may contain links to third-party websites,
                  libraries, and services. We are not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>The content, accuracy, or availability of external sites</li>
                  <li>Privacy practices of third-party services</li>
                  <li>Cookies, tracking, or data collection by external parties</li>
                  <li>Service interruptions or downtime of external resources</li>
                </ul>
                <p className="mt-3">
                  Your use of third-party services is governed by their own
                  terms and policies. Please review them carefully.
                </p>
              </div>
            </section>

            {/* No Guarantees */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                5. No Guarantees - Accuracy & Completeness
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  While we strive to provide accurate and up-to-date
                  information, we make no guarantees regarding:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>The accuracy of code examples and documentation</li>
                  <li>The completeness of the component library</li>
                  <li>The timeliness of updates and bug fixes</li>
                  <li>Browser compatibility across all environments</li>
                  <li>Performance in production environments</li>
                </ul>
                <p className="mt-3">
                  Always test components thoroughly in your own environment
                  before deploying to production.
                </p>
              </div>
            </section>

            {/* User Responsibility */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                6. User Responsibility
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  As a user of LandingPageMaker, you are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Reviewing all code before using it in your projects</li>
                  <li>Testing components thoroughly in your specific use case</li>
                  <li>Maintaining the security of your own applications</li>
                  <li>Respecting intellectual property rights of others</li>
                  <li>Complying with all applicable laws and regulations</li>
                  <li>Not using the project for harmful or unlawful purposes</li>
                </ul>
              </div>
            </section>

            {/* License Information */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                7. License Information
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  LandingPageMaker is released under an open-source license.
                  Please review the LICENSE file in the project repository for
                  complete terms and conditions.
                </p>
                <p>Key points:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>You are free to use, modify, and distribute the code</li>
                  <li>
                    Attribution to the original authors is appreciated but may
                    not be required (depending on license)
                  </li>
                  <li>
                    You must include the license when redistributing the code
                  </li>
                  <li>
                    Commercial use is permitted under most open-source licenses,
                    but verify your specific license
                  </li>
                </ul>
              </div>
            </section>

            {/* Contact & Support */}
            <section>
              <h2 className="text-foreground text-2xl font-bold mb-4">
                8. Contact & Support
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  For questions, bug reports, or feature requests, please visit
                  our GitHub repository:
                </p>
                <p className="pt-2">
                  <a
                    href="https://github.com/gae4it/landingpagemaker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    github.com/gae4it/landingpagemaker
                  </a>
                </p>
                <p className="pt-3">
                  While we try to maintain the project and help when possible,
                  support is provided on a best-effort, non-guaranteed basis.
                </p>
              </div>
            </section>

            {/* Acknowledgment */}
            <section>
              <div className="border-l-4 border-primary pl-4 py-4">
                <p className="text-foreground font-medium">
                  By using LandingPageMaker, you acknowledge that you have read
                  and understood this disclaimer and agree to its terms.
                </p>
              </div>
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
