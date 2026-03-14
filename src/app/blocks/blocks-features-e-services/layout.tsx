import { type Metadata } from "next";
import { type ReactNode } from "react";

import SeoJsonLd from "@/components/SeoJsonLd";
import {
  getBlockJsonLd,
  getBlockMetadata,
  type BlockSlug,
} from "@/lib/seo/blocks";

const slug = "blocks-features-e-services" as BlockSlug;

export const metadata: Metadata = getBlockMetadata(slug);

export default function BlocksFeaturesEServicesLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SeoJsonLd data={getBlockJsonLd(slug)} />
      {children}
    </>
  );
}
