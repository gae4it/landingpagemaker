import { ImageResponse } from "next/og";

import { BLOCKS_META, type BlockSlug } from "@/lib/seo/blocks";

export const runtime = "edge";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const maybeSlug = searchParams.get("block") as BlockSlug | null;
  const blockMeta = maybeSlug ? BLOCKS_META[maybeSlug] : undefined;

  const mainTitle = blockMeta?.name ?? "LandingPageMaker";
  const subtitle = blockMeta
    ? "Copy and paste Tailwind CSS landing page sections"
    : "Free HTML / React / Vue Components Library";
  const tertiary = blockMeta
    ? "Production-ready sections for modern landing pages"
    : "Copy and Paste Landing Page Sections";

  return new ImageResponse(
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
          color: "white",
          padding: "60px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: blockMeta ? "76px" : "96px",
            fontWeight: "bold",
            marginBottom: "20px",
            background: "linear-gradient(135deg, #00d4ff, #0066ff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {mainTitle}
        </div>
        <div
          style={{ fontSize: "48px", marginBottom: "30px", color: "#e0e0e0" }}
        >
          {subtitle}
        </div>
        <div style={{ fontSize: "36px", color: "#a0a0a0" }}>
          {tertiary}
        </div>
      </div>
    </>,
    {
      width: 1200,
      height: 630,
    },
  );
}
