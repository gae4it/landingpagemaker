import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://landingpagemaker.vercel.app/"),
  title: "LandingPageMaker - Ready-made Tailwind Blocks for Landing Pages",
  description:
    "Discover beautiful, ready-made landing page components built with Tailwind CSS. Perfect for learning web design and building professional landing pages.",
  keywords: [
    "landing page builder",
    "Tailwind CSS",
    "landing page templates",
    "web components",
    "responsive design",
    "UI blocks",
    "Next.js components",
    "CSS framework",
    "design patterns",
    "web development",
  ],
  authors: [{ name: "LandingPageMaker Team" }],
  creator: "LandingPageMaker",
  publisher: "LandingPageMaker",
  applicationName: "LandingPageMaker",
  category: "Web Development",
  classification: "Educational",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://landingpagemaker.vercel.app/",
    title: "LandingPageMaker - Ready-made Tailwind Blocks for Landing Pages",
    description:
      "Discover beautiful, ready-made landing page components built with Tailwind CSS.",
    siteName: "LandingPageMaker",
    images: [
      {
        url: "https://landingpagemaker.vercel.app/api/og",
        width: 1200,
        height: 630,
        alt: "LandingPageMaker - Free Next.js Components Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LandingPageMaker - Ready-made Tailwind Blocks",
    description: "Beautiful landing page components built with Tailwind CSS",
    creator: "@landingpagemaker",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LandingPageMaker",
  url: "https://landingpagemaker.vercel.app",
  description:
    "Free Next.js components library with copy-paste ready landing page sections built with Tailwind CSS and shadcn/ui",
  logo: "https://landingpagemaker.vercel.app/logo.png",
  sameAs: ["https://github.com/landingpagemaker"],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className="bg-background min-h-screen font-sans antialiased"
        suppressHydrationWarning
      >
        <CookieConsent />
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
