import { ImageResponse } from "next/og";

export const alt = "Tanishq Sharma: I build software that talks to hardware";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 90,
        background: "#f6f5f1",
        color: "#1a1c1e",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", fontSize: 30 }}>
        <div style={{ width: 22, height: 22, borderRadius: 11, background: "#1f7a4d", marginRight: 16 }} />
        Available for freelance
      </div>
      <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.1, marginTop: 36 }}>
        I build software that talks to hardware.
      </div>
      <div style={{ fontSize: 34, color: "#5c6166", marginTop: 36 }}>
        Tanishq Sharma · Qt/C++, video systems, device control apps
      </div>
    </div>,
    size,
  );
}
