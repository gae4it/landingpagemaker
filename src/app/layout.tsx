import "@/styles/globals.css";

import { type Metadata, type Viewport } from "next";
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
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

const faqSchema = {
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
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
