import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Temple | Sri Venugopala Swamy Temple",
};

export default function AboutPage() {
  return (
    <div>
      <section style={{ background: "linear-gradient(180deg, #1a0800, #0d0500)", padding: "60px 24px", textAlign: "center", borderBottom: "1px solid #4a2c00" }}>
        <h1 className="section-title" style={{ marginBottom: "12px" }}>About the Temple</h1>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "3px", color: "#c8860a" }}>✦ &nbsp; DIVYA KSHETRAM &nbsp; ✦</p>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "60px 24px" }}>
        
        {/* Temple overview */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: "22px", color: "#f0d080", marginBottom: "20px" }}>Sri Rukmini Satyabhama Sametha Sri Venugopala Swamy Temple</h2>
          <p style={{ fontSize: "18px", color: "#c4a882", lineHeight: 1.9, marginBottom: "16px" }}>
            This divine temple enshrines Lord Venugopala Swamy — the cosmic flutist, an incarnation of Lord Sri Krishna — alongside his divine consorts Goddess Rukmini and Goddess Satyabhama. The combined presence of the divine trinity symbolizes the perfect balance of love, strength, and divine grace.
          </p>
          <p style={{ fontSize: "17px", color: "#c4a882", lineHeight: 1.9 }}>
            Built following the sacred traditions of the Tennacharya Sampradaya under the Pancharathra Agama Shastra, the temple serves as a spiritual powerhouse where devotees seek blessings for health, prosperity, progeny, marriage, and liberation.
          </p>
        </div>

        <div className="divider"><div className="divider-line" /><div className="divider-symbol">✦</div><div className="divider-line" /></div>

        {/* Deities */}
        <h2 className="section-title" style={{ marginBottom: "32px" }}>The Presiding Deities</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "48px" }}>
          {[
            {
              name: "Sri Venugopala Swamy",
              role: "Principal Deity",
              desc: "The divine form of Lord Krishna playing his enchanting flute. Venugopala represents cosmic love, beauty, and the universal call of the soul towards the divine. Devotees worship him for progeny, happiness, and spiritual liberation.",
              color: "#c8860a",
            },
            {
              name: "Sri Rukmini Devi",
              role: "Incarnation of Mahalakshmi",
              desc: "The divine consort of Lord Krishna, Rukmini Devi, is the embodiment of Mahalakshmi. She bestows prosperity, marital harmony, and grace. The annual Rukmini Kalyanam ceremony is the most celebrated event at the temple.",
              color: "#d4557a",
            },
            {
              name: "Sri Satyabhama Devi",
              role: "Incarnation of Bhoodevi",
              desc: "The second consort of Lord Krishna, Satyabhama Devi is the incarnation of Bhoodevi — the earth goddess. She represents courage, assertiveness, and strength. Her presence balances the energy of the divine.",
              color: "#4a9a6a",
            },
          ].map((deity) => (
            <div key={deity.name} className="card" style={{ padding: "28px 24px", borderLeft: `3px solid ${deity.color}` }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "1.5px", color: deity.color, marginBottom: "8px" }}>{deity.role}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "16px", color: "#f0d080", marginBottom: "12px" }}>{deity.name}</h3>
              <p style={{ fontSize: "15px", color: "#c4a882", lineHeight: 1.8, fontStyle: "italic" }}>{deity.desc}</p>
            </div>
          ))}
        </div>

        <div className="divider"><div className="divider-line" /><div className="divider-symbol">✦</div><div className="divider-line" /></div>

        {/* Sampradaya */}
        <div style={{ background: "#1a0d00", border: "1px solid #3a2000", borderRadius: "6px", padding: "32px", marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "18px", color: "#f0d080", marginBottom: "16px" }}>Temple Tradition & Sampradaya</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "24px" }}>
            {[
              { label: "Tradition", value: "Tennacharya Sampradaya" },
              { label: "Agama", value: "Pancharathra Agama Shastra" },
              { label: "Deity Form", value: "Santana Venugopala Swamy" },
              { label: "Primary Veda", value: "Yajur Veda" },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "1.5px", color: "#c8860a", marginBottom: "6px" }}>{item.label}</div>
                <div style={{ fontSize: "16px", color: "#f0d080", fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Significance */}
        <h2 className="section-title" style={{ marginBottom: "24px" }}>Temple Significance</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {[
            { icon: "👶", title: "Santana Prapti", desc: "Devotees seek blessings for progeny and child welfare through Sri Krishna Vratham" },
            { icon: "💍", title: "Marriage Blessings", desc: "Young devotees worship to find suitable life partners. Rukmini Kalyanam is a powerful remedy for delayed marriages." },
            { icon: "🌿", title: "Health & Wellbeing", desc: "Regular darshan and Abhishekam at the temple is believed to cure ailments and bring mental peace" },
            { icon: "✨", title: "Moksha", desc: "The Vaikunta Ekadasi Uttara Dwara Darshan is believed to cleanse all sins and lead to liberation" },
          ].map((item) => (
            <div key={item.title} className="card" style={{ padding: "20px" }}>
              <div style={{ fontSize: "28px", marginBottom: "10px" }}>{item.icon}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "13px", color: "#f0d080", marginBottom: "8px" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#8a7060", lineHeight: 1.7, fontStyle: "italic" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
