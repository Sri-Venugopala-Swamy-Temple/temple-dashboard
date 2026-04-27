import Link from "next/link";
import { DAILY_RITUALS } from "@/lib/constants";

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #1a0800 0%, #2d1800 50%, #1a0800 100%)",
        borderBottom: "1px solid #4a2c00",
        padding: "80px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(200,134,10,0.12) 0%, transparent 70%)" }} />
        
        {/* Mandala SVG */}
        <div style={{ marginBottom: "32px", position: "relative" }}>
          <svg width="140" height="140" viewBox="0 0 140 140" style={{ margin: "0 auto", display: "block" }}>
            <circle cx="70" cy="70" r="68" fill="none" stroke="#c8860a" strokeWidth="1"/>
            <circle cx="70" cy="70" r="56" fill="none" stroke="#8B1a1a" strokeWidth="0.5"/>
            <circle cx="70" cy="70" r="42" fill="none" stroke="#c8860a" strokeWidth="1"/>
            <circle cx="70" cy="70" r="26" fill="#1a0800" stroke="#c8860a" strokeWidth="1.5"/>
            {[0,45,90,135,180,225,270,315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 70 + 44 * Math.cos(rad);
              const y1 = 70 + 44 * Math.sin(rad);
              const x2 = 70 + 56 * Math.cos(rad);
              const y2 = 70 + 56 * Math.sin(rad);
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#c8860a" strokeWidth="1" opacity="0.6"/>;
            })}
            <text x="70" y="78" textAnchor="middle" fontSize="22" fill="#c8860a">ॐ</text>
          </svg>
        </div>

        <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "clamp(18px, 4vw, 36px)", color: "#f0d080", marginBottom: "16px", position: "relative" }}>
          Seek Divine Blessings
        </h2>
        <p style={{ fontSize: "18px", color: "#c4a882", lineHeight: 1.9, maxWidth: "600px", margin: "0 auto 32px", fontStyle: "italic", position: "relative" }}>
          Where Lord Venugopala Swamy, the divine flutist, blesses all devotees alongside Goddess Rukmini and Goddess Satyabhama — a sacred abode of love, grace, and eternal devotion.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
          <Link href="/sevas" className="btn-primary">Book a Seva</Link>
          <Link href="/about" className="btn-outline">About Temple</Link>
        </div>
      </section>

      {/* DARSHAN TIMINGS */}
      <section style={{ padding: "60px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="divider"><div className="divider-line" /><div className="divider-symbol">✦</div><div className="divider-line" /></div>
        <h2 className="section-title">Daily Darshan Timings</h2>
        <p className="section-subtitle">The temple doors open twice daily for devotees</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "16px" }}>
          {DAILY_RITUALS.map((r, i) => (
            <div key={i} className="card" style={{ padding: "20px 16px", textAlign: "center", borderTop: "2px solid #c8860a" }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "1.5px", color: "#c8860a", marginBottom: "6px" }}>{r.time}</div>
              <div style={{ fontSize: "16px", color: "#f0d080", fontWeight: 600, marginBottom: "4px" }}>{r.name}</div>
              <div style={{ fontSize: "13px", color: "#8a7060", fontStyle: "italic" }}>{r.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* DEITIES */}
      <section style={{ background: "linear-gradient(135deg, #2d1500, #1a0800, #2d1500)", borderTop: "1px solid #4a2c00", borderBottom: "1px solid #4a2c00", padding: "60px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="section-title">The Divine Trinity</h2>
          <p className="section-subtitle">The presiding deities of our sacred temple</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            {[
              { name: "Sri Venugopala Swamy", title: "The Divine Flutist", desc: "Lord Krishna in his serene form, playing the divine flute, embodying love, compassion, and cosmic harmony.", symbol: "🪈" },
              { name: "Sri Rukmini Devi", title: "Incarnation of Mahalakshmi", desc: "Goddess Rukmini, the beloved consort of Lord Krishna, bestowing prosperity, grace, and marital bliss.", symbol: "🌸" },
              { name: "Sri Satyabhama Devi", title: "Incarnation of Bhoodevi", desc: "Goddess Satyabhama, the embodiment of courage, strength, and assertiveness — the divine earth goddess.", symbol: "🌺" },
            ].map((deity) => (
              <div key={deity.name} className="card" style={{ padding: "32px 24px", textAlign: "center", borderTop: "3px solid #c8860a" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>{deity.symbol}</div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "16px", color: "#f0d080", marginBottom: "6px" }}>{deity.name}</h3>
                <p style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "1px", color: "#c8860a", marginBottom: "12px" }}>{deity.title}</p>
                <p style={{ fontSize: "15px", color: "#c4a882", lineHeight: 1.8, fontStyle: "italic" }}>{deity.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section style={{ padding: "60px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="divider"><div className="divider-line" /><div className="divider-symbol">✦</div><div className="divider-line" /></div>
        <h2 className="section-title">Explore the Temple</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginTop: "32px" }}>
          {[
            { href: "/sevas", icon: "🪔", label: "Sevas & Booking", desc: "Book your seva online" },
            { href: "/festivals", icon: "🎉", label: "Festivals", desc: "Upcoming celebrations" },
            { href: "/about", icon: "🏛️", label: "Temple History", desc: "Our sacred heritage" },
            { href: "/gallery", icon: "🖼️", label: "Gallery", desc: "Divine photographs" },
            { href: "/contact", icon: "📞", label: "Contact", desc: "Get in touch with us" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <div className="card" style={{ padding: "24px", textAlign: "center" }}>
                <div style={{ fontSize: "36px", marginBottom: "12px" }}>{item.icon}</div>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: "#f0d080", marginBottom: "6px" }}>{item.label}</div>
                <div style={{ fontSize: "14px", color: "#8a7060", fontStyle: "italic" }}>{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SLOKA */}
      <section style={{ background: "#0d0700", borderTop: "1px solid #4a2c00", padding: "60px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: "40px", color: "#c8860a", marginBottom: "24px" }}>ॐ</div>
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "16px", color: "#f0d080", letterSpacing: "1px", lineHeight: 2, marginBottom: "16px" }}>
            Vasudeva Sutham Devam Kamsa Chanura Mardhanam<br />
            Devaki Paramanandham Krishnam Vande Jagadgurum
          </p>
          <p style={{ fontSize: "14px", color: "#8a7060", fontStyle: "italic", lineHeight: 1.8 }}>
            I bow to you O Krishna, the ultimate guru, son of Devaki and Vasudeva,<br />destroyer of Kamsa and Chanura — Sri Venugopala Swamy Ki Jai!
          </p>
        </div>
      </section>
    </div>
  );
}
