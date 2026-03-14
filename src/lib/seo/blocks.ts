import { type Metadata } from "next";

import {
  createBreadcrumbListSchema,
  createWebPageSchema,
} from "@/lib/seo/schema";

export const SITE_URL = "https://landingpagemaker.vercel.app";

export const BLOCKS_META = {
  "blocks-call-to-action": {
    name: "Call to Action Blocks",
    title: "Call to Action Blocks | LandingPageMaker",
    description:
      "Engaging CTAs to drive conversions with copy-paste ready Tailwind CSS sections.",
  },
  "blocks-columns": {
    name: "Column Blocks",
    title: "Column Layout Blocks | LandingPageMaker",
    description:
      "Multi-column layouts for content organization built with responsive Tailwind CSS patterns.",
  },
  "blocks-contact": {
    name: "Contact Blocks",
    title: "Contact Form Blocks | LandingPageMaker",
    description:
      "Contact forms and information sections to capture leads and conversations.",
  },
  "blocks-content": {
    name: "Content Blocks",
    title: "Content Section Blocks | LandingPageMaker",
    description:
      "Rich content sections for storytelling, long-form pages, and marketing narratives.",
  },
  "blocks-counter": {
    name: "Counter Blocks",
    title: "Counter and Stats Blocks | LandingPageMaker",
    description:
      "Animated counters and statistics sections for social proof and key metrics.",
  },
  "blocks-dividers": {
    name: "Divider Blocks",
    title: "Divider Blocks | LandingPageMaker",
    description:
      "Stylish section dividers and separators to improve visual hierarchy.",
  },
  "blocks-features-e-services": {
    name: "Features and Services Blocks",
    title: "Feature and Services Blocks | LandingPageMaker",
    description:
      "Showcase features and services with modern cards, lists, and highlight sections.",
  },
  "blocks-footer": {
    name: "Footer Blocks",
    title: "Footer Blocks | LandingPageMaker",
    description:
      "Professional footer designs for product, company, and marketing websites.",
  },
  "blocks-forms": {
    name: "Forms Blocks",
    title: "Form Blocks | LandingPageMaker",
    description:
      "Beautiful form components for signup, login, onboarding, and lead generation.",
  },
  "blocks-headers": {
    name: "Header Blocks",
    title: "Header and Navigation Blocks | LandingPageMaker",
    description:
      "Eye-catching header sections and navigation bars for modern landing pages.",
  },
  "blocks-hero": {
    name: "Hero Blocks",
    title: "Hero Section Blocks | LandingPageMaker",
    description:
      "Stunning hero sections to introduce products and capture attention above the fold.",
  },
  "blocks-interactions": {
    name: "Interaction Blocks",
    title: "Interactive Blocks | LandingPageMaker",
    description:
      "Interactive UI elements that improve engagement and user flow.",
  },
  "blocks-partner": {
    name: "Partner Blocks",
    title: "Partner and Logo Blocks | LandingPageMaker",
    description:
      "Partner logo walls and trust sections to reinforce credibility.",
  },
  "blocks-post": {
    name: "Post Blocks",
    title: "Blog and Post Blocks | LandingPageMaker",
    description:
      "Blog post and article layout blocks for editorial and content marketing pages.",
  },
  "blocks-pricing": {
    name: "Pricing Blocks",
    title: "Pricing Table Blocks | LandingPageMaker",
    description:
      "Pricing plans, comparison tables, and subscription section components.",
  },
  "blocks-shop": {
    name: "Shop Blocks",
    title: "Shop and Product Blocks | LandingPageMaker",
    description:
      "E-commerce product displays and merchandising sections for online stores.",
  },
  "blocks-social": {
    name: "Social Blocks",
    title: "Social Blocks | LandingPageMaker",
    description:
      "Social media integrations and social proof modules for landing pages.",
  },
  "blocks-teams": {
    name: "Team Blocks",
    title: "Team Showcase Blocks | LandingPageMaker",
    description:
      "Team member showcases and company profile sections for about pages.",
  },
  "blocks-testimonials": {
    name: "Testimonial Blocks",
    title: "Testimonial Blocks | LandingPageMaker",
    description:
      "Customer testimonial and review sections to increase trust and conversion.",
  },
  "blocks-ui": {
    name: "UI Blocks",
    title: "UI Component Blocks | LandingPageMaker",
    description:
      "Essential UI components and utility patterns for interface design.",
  },
} as const;

export type BlockSlug = keyof typeof BLOCKS_META;

export const BLOCK_SLUGS = Object.keys(BLOCKS_META) as BlockSlug[];

export function getBlockMetadata(slug: BlockSlug): Metadata {
  const block = BLOCKS_META[slug];
  const canonicalPath = `/blocks/${slug}`;

  return {
    title: block.title,
    description: block.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: block.title,
      description: block.description,
      type: "website",
      url: `${SITE_URL}${canonicalPath}`,
      images: [
        {
          url: `${SITE_URL}/api/og?block=${slug}`,
          width: 1200,
          height: 630,
          alt: block.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: block.title,
      description: block.description,
      images: [`${SITE_URL}/api/og?block=${slug}`],
    },
  };
}

export function getBlockJsonLd(slug: BlockSlug) {
  const block = BLOCKS_META[slug];
  const canonicalUrl = `${SITE_URL}/blocks/${slug}`;

  return [
    createWebPageSchema({
      name: block.name,
      description: block.description,
      url: canonicalUrl,
    }),
    createBreadcrumbListSchema([
      { name: "Home", item: SITE_URL },
      { name: "Blocks", item: `${SITE_URL}/#categories` },
      { name: block.name, item: canonicalUrl },
    ]),
  ];
}
