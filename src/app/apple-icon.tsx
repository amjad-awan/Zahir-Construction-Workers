import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <svg width="180" height="180" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" fill="#202522" />
          <rect x="30" y="30" width="18" height="18" fill="#B49A78" />
          <path d="M11 12h24L11 36h16" stroke="#F8F7F3" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      </div>
    ),
    { ...size }
  );
}