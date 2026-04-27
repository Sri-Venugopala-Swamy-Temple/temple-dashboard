import type { Metadata } from "next";

export const metadata: Metadata = { title: "Gallery | Sri Venugopala Swamy Temple" };

const GALLERY_ITEMS = [
  { category: "Temple", title: "Main Sanctum", desc: "The sacred garbhagriha" },
  { category: "Festival", title: "Rukmini Kalyanam", desc: "Annual divine wedding" },
  { category: "Seva", title: "Abhishekam", desc: "Sacred bathing ritual" },
  { category: "Festival", title: "Janmashtami", desc: "Krishna's birth celebration" },
  { category: "Temple", title: "Rajagopuram", desc: "The grand temple tower" },
  { category: "Seva", title: "Annadanam", desc: "Sacred food distribution" },
  { category: "Festival", title: "Vaikunta Ekadasi", desc: "Uttara Dwara Darshan" },
  { category: "Temple", title: "Pushkarini", desc: "Sacred temple tank" },
  { category: "Festival", title: "Brahmotsavam", desc: "Grand annual festival" },
];

export default function GalleryPage() {
  return (
    <div>
      <section style={{ background: "linear-gradient(180deg, #1a0800, #0d0500)", padding: "60px 24px", textAlign: "center", borderBottom: "1px solid #4a2c00" }}>
        <h1 className="section-title">Temple Gallery</h1>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "3px", color: "#c8860a", marginTop: "8px" }}>✦ &nbsp; DIVINE MOMENTS &nbsp; ✦</p>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px" }}>
        <p className="section-subtitle" style={{ marginBottom: "40px" }}>A glimpse into the divine ambience of Sri Venugopala Swamy Temple</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" }}>
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="card"
              style={{ overflow: "hidden", cursor: "pointer" }}
            >
              {/* Placeholder image area */}
              <div style={{
                height: "200px",
                background: `linear-gradient(135deg, ${["#2d1500","#1a0d00","#251000"][i % 3]}, #1a0800)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid #3a2000",
                position: "relative",
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "48px", marginBottom: "8px" }}>
                    {["🛕","🪷","🪔","🎉","🌺","🙏"][i % 6]}
                  </div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "1.5px", color: "#c8860a" }}>
                    {item.category.toUpperCase()}
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: "8px", right: "8px" }}>
                  <span className="badge" style={{ fontSize: "9px" }}>{item.category}</span>
                </div>
              </div>
              <div style={{ padding: "16px" }}>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "14px", color: "#f0d080", marginBottom: "6px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: "#8a7060", fontStyle: "italic" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px", padding: "32px", background: "#1a0d00", border: "1px solid #3a2000", borderRadius: "6px" }}>
          <div style={{ fontSize: "32px", marginBottom: "12px" }}>📸</div>
          <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "16px", color: "#f0d080", marginBottom: "8px" }}>Share Your Divine Experience</h3>
          <p style={{ fontSize: "15px", color: "#8a7060", fontStyle: "italic" }}>
            Devotees can share their temple visit photos with us. Tag us on social media or send to temple@venugopalswamy.org
          </p>
        </div>
      </div>
    </div>
  );
}
