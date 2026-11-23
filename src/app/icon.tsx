import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// ImageResponse can't read CSS variables, so the brand hex values are set here.
export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <svg width="64" height="64" viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" fill="#202522" />
          <rect x="30" y="30" width="18" height="18" fill="#B49A78" />
          <path d="M11 12h24L11 36h16" stroke="#F8F7F3" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter" />
        </svg>
      </div>
    ),
    { ...size }
  );
}