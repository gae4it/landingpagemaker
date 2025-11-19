import Navigation from "~/components/Navigation";
import Hero from "~/components/Hero";
import Footer from "~/components/Footer";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero title="About LandingPageMaker" />
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto">
              <p className="text-lg leading-relaxed text-gray-700">
                LandingPageMaker was born from a passion for web design and
                marketing. We believe that creating beautiful, effective landing
                pages shouldn&apos;t be complicated or time-consuming.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Our collection of ready-made Tailwind CSS blocks helps
                developers and designers quickly build professional landing
                pages without reinventing the wheel. Each component is carefully
                crafted and fully responsive.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Built with modern web technologies including Next.js,
                TypeScript, and Tailwind CSS, LandingPageMaker is open-source
                and continuously growing.
              </p>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900">Tech Stack</h3>
                <ul className="mt-4 space-y-2">
                  <li className="text-gray-700">
                    <strong>Framework:</strong> Next.js (T3 App)
                  </li>
                  <li className="text-gray-700">
                    <strong>Language:</strong> TypeScript
                  </li>
                  <li className="text-gray-700">
                    <strong>Styling:</strong> Tailwind CSS v4
                  </li>
                  <li className="text-gray-700">
                    <strong>Deployment:</strong> Vercel
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900">Credits</h3>
                <p className="mt-4 text-gray-700">
                  Created by <strong>GaeMaz</strong>. Inspired by
                  Tailwind2Blocks and the amazing web development community.
                </p>
                <p className="mt-4">
                  <a
                    href="https://github.com/gae4it/landingpagemaker"
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
