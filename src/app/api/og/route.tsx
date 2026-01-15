import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  try {
    return new ImageResponse(
      (
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
                fontSize: "96px",
                fontWeight: "bold",
                marginBottom: "20px",
                background: "linear-gradient(135deg, #00d4ff, #0066ff)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              LandingPageMaker
            </div>
            <div style={{ fontSize: "48px", marginBottom: "30px", color: "#e0e0e0" }}>
              Free Next.js Components
            </div>
            <div style={{ fontSize: "36px", color: "#a0a0a0" }}>
              Copy & Paste Landing Page Sections
            </div>
          </div>
        </>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response("Failed to generate image", { status: 500 });
  }
}
