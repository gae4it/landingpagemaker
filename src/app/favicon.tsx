import { ImageResponse } from "next/og";

export default function favicon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "32px",
        height: "32px",
        background: "#000",
        borderRadius: "6px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#222"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1.5" fill="white" stroke="none" />
        <rect
          x="3"
          y="13"
          width="7"
          height="7"
          rx="1.5"
          fill="white"
          stroke="none"
          opacity="0.6"
        />
        <rect
          x="13"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          fill="white"
          stroke="none"
          opacity="0.6"
        />
      </svg>
    </div>,
    {
      width: 32,
      height: 32,
    },
  );
}
