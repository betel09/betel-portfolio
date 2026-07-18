import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d1117 0%, #1a2d4a 100%)",
          borderRadius: "8px",
        }}
      >
        <span
          style={{
            color: "#f5a623",
            fontSize: "14px",
            fontWeight: "bold",
            letterSpacing: "-0.5px",
            fontFamily: "sans-serif",
          }}
        >
          BY
        </span>
      </div>
    ),
    { ...size }
  );
}