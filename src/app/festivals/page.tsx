"use client";
import { useState, useEffect } from "react";
import { Festival } from "@/types";
import { format } from "date-fns";
import toast from "react-hot-toast";

export default function FestivalsPage() {
  const [festivals, setFestivals] = useState<Festival[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/festivals")
      .then((r) => r.json())
      .then((d) => { setFestivals(d.data || []); setLoading(false); })
      .catch(() => { toast.error("Failed to load festivals"); setLoading(false); });
  }, []);

  const upcoming = festivals.filter((f) => new Date(f.endDate) >= new Date());
  const past = festivals.filter((f) => new Date(f.endDate) < new Date());

  return (
    <div>
      <section style={{ background: "linear-gradient(180deg, #1a0800, #0d0500)", padding: "60px 24px", textAlign: "center", borderBottom: "1px solid #4a2c00" }}>
        <h1 className="section-title">Temple Festivals</h1>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "3px", color: "#c8860a", marginTop: "8px" }}>✦ &nbsp; DIVINE CELEBRATIONS &nbsp; ✦</p>
        <p style={{ fontSize: "17px", color: "#c4a882", fontStyle: "italic", marginTop: "16px", maxWidth: "600px", margin: "16px auto 0" }}>
          Festivals at Sri Venugopala Swamy Temple are celebrated with devotion, grandeur, and ancient Vedic traditions that bring together devotees from far and near.
        </p>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: "60px", color: "#8a7060", fontStyle: "italic" }}>Loading festivals...</div>
        ) : (
          <>
            {upcoming.length > 0 && (
              <>
                <h2 className="section-title" style={{ marginBottom: "8px" }}>Upcoming Festivals</h2>
                <p className="section-subtitle">Mark your calendar for these auspicious occasions</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "60px" }}>
                  {upcoming.map((festival) => (
                    <FestivalCard key={festival._id} festival={festival} />
                  ))}
                </div>
              </>
            )}

            {past.length > 0 && (
              <>
                <div className="divider"><div className="divider-line" /><div className="divider-symbol">✦</div><div className="divider-line" /></div>
                <h2 className="section-title" style={{ marginBottom: "8px" }}>Past Celebrations</h2>
                <p className="section-subtitle">Cherished memories of divine festivities</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {past.map((festival) => (
                    <FestivalCard key={festival._id} festival={festival} past />
                  ))}
                </div>
              </>
            )}

            {festivals.length === 0 && (
              <div style={{ textAlign: "center", padding: "80px", color: "#8a7060", fontStyle: "italic" }}>
                <div style={{ fontSize: "40px", marginBottom: "16px" }}>🪔</div>
                Festival schedule will be updated soon. Please check back.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function FestivalCard({ festival, past }: { festival: Festival; past?: boolean }) {
  const start = new Date(festival.startDate);
  const end = new Date(festival.endDate);
  const isMultiDay = start.toDateString() !== end.toDateString();

  return (
    <div className="card" style={{ padding: "24px", display: "grid", gridTemplateColumns: "120px 1fr", gap: "24px", alignItems: "start", borderLeft: `3px solid ${past ? "#3a2000" : "#c8860a"}`, opacity: past ? 0.75 : 1 }}>
      {/* Date block */}
      <div style={{ textAlign: "center", background: past ? "rgba(58,32,0,0.3)" : "rgba(200,134,10,0.1)", border: `1px solid ${past ? "#3a2000" : "#c8860a"}`, borderRadius: "4px", padding: "16px" }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", letterSpacing: "1.5px", color: past ? "#5a4030" : "#c8860a", marginBottom: "4px" }}>
          {format(start, "MMM").toUpperCase()}
        </div>
        <div style={{ fontSize: "28px", fontWeight: 700, color: past ? "#5a4030" : "#f0d080", lineHeight: 1 }}>{format(start, "dd")}</div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: "10px", color: past ? "#3a2800" : "#8a7060", marginTop: "4px" }}>{format(start, "yyyy")}</div>
        {isMultiDay && (
          <div style={{ marginTop: "6px", fontSize: "11px", color: "#8a7060", fontStyle: "italic" }}>to {format(end, "dd MMM")}</div>
        )}
      </div>

      {/* Details */}
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
          <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "17px", color: past ? "#8a7060" : "#f0d080" }}>{festival.name}</h3>
          {festival.featured && !past && <span className="badge tag-special">Featured</span>}
          {past && <span className="badge" style={{ opacity: 0.5 }}>Completed</span>}
        </div>
        <p style={{ fontSize: "15px", color: "#c4a882", lineHeight: 1.8, fontStyle: "italic", marginBottom: "12px" }}>{festival.description}</p>
        {festival.highlights && festival.highlights.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {festival.highlights.map((h, i) => (
              <span key={i} style={{ fontSize: "12px", color: "#8a7060", background: "rgba(200,134,10,0.06)", border: "1px solid #3a2000", padding: "4px 10px", borderRadius: "2px", fontStyle: "italic" }}>
                ✦ {h}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
