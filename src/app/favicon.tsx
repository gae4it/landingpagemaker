import { ImageResponse } from "next/og";
import { PanelsTopLeft } from "lucide-react";

export default function favicon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        background: "linear-gradient(135deg, #00d4ff, #0066ff)",
        borderRadius: "6px",
      }}
    >
      <PanelsTopLeft size={20} color="white" />
    </div>,
    {
      width: 32,
      height: 32,
    },
  );
}
