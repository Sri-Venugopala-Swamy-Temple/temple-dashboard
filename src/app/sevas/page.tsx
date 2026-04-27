"use client";
import { useState, useEffect } from "react";
import { Seva } from "@/types";
import toast from "react-hot-toast";
import BookingModal from "@/components/BookingModal";

const CATEGORIES = [
  { value: "all", label: "All Sevas" },
  { value: "daily", label: "Daily Sevas" },
  { value: "special", label: "Special Sevas" },
  { value: "festival", label: "Festival Sevas" },
  { value: "annadanam", label: "Annadanam" },
];

export default function SevasPage() {
  const [sevas, setSevas] = useState<Seva[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("all");
  const [selectedSeva, setSelectedSeva] = useState<Seva | null>(null);

  useEffect(() => {
    const url = category === "all" ? "/api/sevas" : `/api/sevas?category=${category}`;
    setLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((d) => {
        setSevas(d.data || []);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load sevas");
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      <section style={{ background: "linear-gradient(180deg, #1a0800, #0d0500)", padding: "60px 24px", textAlign: "center", borderBottom: "1px solid #4a2c00" }}>
        <h1 className="section-title">Sevas & Offerings</h1>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "3px", color: "#c8860a", marginTop: "8px" }}>✦ &nbsp; BOOK YOUR SACRED SEVA &nbsp; ✦</p>
        <p style={{ fontSize: "17px", color: "#c4a882", fontStyle: "italic", marginTop: "16px", maxWidth: "600px", margin: "16px auto 0" }}>
          Performing sevas is an act of love and surrender to Lord Venugopala Swamy. Each seva is conducted with Vedic chants and traditional rituals by our trained archakas.
        </p>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px" }}>
        {/* Category filter */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "11px",
                letterSpacing: "1.5px",
                padding: "10px 20px",
                border: "1px solid",
                borderColor: category === cat.value ? "#c8860a" : "#3a2000",
                background: category === cat.value ? "rgba(200,134,10,0.2)" : "transparent",
                color: category === cat.value ? "#f0d080" : "#8a7060",
                cursor: "pointer",
                borderRadius: "3px",
                transition: "all 0.2s",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "60px", color: "#8a7060", fontStyle: "italic" }}>Loading sevas...</div>
        ) : sevas.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px", color: "#8a7060", fontStyle: "italic" }}>No sevas found in this category.</div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {sevas.map((seva) => (
              <div key={seva._id} className="card" style={{ padding: "24px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "15px", color: "#f0d080", flex: 1 }}>{seva.name}</h3>
                  <span className="badge" style={{ marginLeft: "8px", fontSize: "9px" }}>{seva.category}</span>
                </div>
                <p style={{ fontSize: "15px", color: "#c4a882", lineHeight: 1.8, fontStyle: "italic", flex: 1, marginBottom: "16px" }}>{seva.description}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
                  <div style={{ background: "rgba(200,134,10,0.08)", padding: "8px", borderRadius: "4px" }}>
                    <div style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "1px", color: "#c8860a", marginBottom: "2px" }}>DURATION</div>
                    <div style={{ fontSize: "13px", color: "#f5e6c8" }}>{seva.duration}</div>
                  </div>
                  <div style={{ background: "rgba(200,134,10,0.08)", padding: "8px", borderRadius: "4px" }}>
                    <div style={{ fontFamily: "'Cinzel', serif", fontSize: "9px", letterSpacing: "1px", color: "#c8860a", marginBottom: "2px" }}>TIMINGS</div>
                    <div style={{ fontSize: "13px", color: "#f5e6c8" }}>{seva.timings}</div>
                  </div>
                </div>
                {seva.benefits && seva.benefits.length > 0 && (
                  <ul style={{ marginBottom: "16px", paddingLeft: "0", listStyle: "none" }}>
                    {seva.benefits.slice(0, 2).map((b, i) => (
                      <li key={i} style={{ fontSize: "13px", color: "#8a7060", fontStyle: "italic", marginBottom: "4px" }}>✦ {b}</li>
                    ))}
                  </ul>
                )}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: "16px", borderTop: "1px solid #3a2000" }}>
                  <div style={{ fontSize: "24px", color: "#c8860a", fontWeight: 700 }}>₹ {seva.price.toLocaleString("en-IN")}</div>
                  <button
                    onClick={() => setSelectedSeva(seva)}
                    style={{
                      background: "linear-gradient(135deg, #c8860a, #a06808)",
                      color: "#fff8e7",
                      border: "none",
                      padding: "10px 20px",
                      fontFamily: "'Cinzel', serif",
                      fontSize: "11px",
                      letterSpacing: "1.5px",
                      cursor: "pointer",
                      borderRadius: "3px",
                    }}
                  >
                    Book Seva
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedSeva && (
        <BookingModal seva={selectedSeva} onClose={() => setSelectedSeva(null)} />
      )}
    </div>
  );
}
