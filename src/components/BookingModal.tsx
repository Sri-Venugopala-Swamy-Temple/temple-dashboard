"use client";
import { useState } from "react";
import { Seva } from "@/types";
import { createBooking } from "@/lib/api";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import { NAKSHATRAS } from "@/lib/constants";

interface Props { seva: Seva; onClose: () => void; }

export default function BookingModal({ seva, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", preferredDate: "", nakshatra: "", gotra: "", specialRequests: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await createBooking({ ...form, sevaId: seva._id });
      setSuccess(data.bookingReference);
      toast.success("Seva booked successfully!");
    } catch (err: any) {
      toast.error(err.message || "Booking failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <div style={{ background: "#1a0d00", border: "1px solid #c8860a", borderRadius: "8px", width: "100%", maxWidth: "560px", maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ background: "linear-gradient(135deg,#2d1500,#1a0800)", padding: "20px 24px", borderBottom: "1px solid #3a2000", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: "10px", letterSpacing: "1.5px", color: "#c8860a", marginBottom: "4px" }}>BOOKING SEVA</div>
            <h2 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "16px", color: "#f0d080" }}>{seva.name}</h2>
            <div style={{ fontSize: "20px", color: "#c8860a", fontWeight: 700, marginTop: "4px" }}>₹ {seva.price.toLocaleString("en-IN")}</div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#8a7060", cursor: "pointer" }}><X size={24} /></button>
        </div>

        <div style={{ padding: "24px" }}>
          {success ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🙏</div>
              <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: "16px", color: "#f0d080", marginBottom: "12px" }}>Booking Confirmed!</h3>
              <p style={{ color: "#c4a882", fontStyle: "italic", marginBottom: "16px" }}>Your seva has been booked. Please keep your reference number safe.</p>
              <div style={{ background: "rgba(200,134,10,0.1)", border: "1px solid #c8860a", borderRadius: "4px", padding: "16px", marginBottom: "24px" }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: "10px", letterSpacing: "1.5px", color: "#c8860a", marginBottom: "4px" }}>BOOKING REFERENCE</div>
                <div style={{ fontSize: "22px", color: "#f0d080", fontWeight: 700, letterSpacing: "2px" }}>{success}</div>
              </div>
              <button onClick={onClose} className="btn-primary">Close</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div className="form-group" style={{ gridColumn: "1/-1" }}>
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email *</label>
                  <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone *</label>
                  <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9999999999" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Preferred Date *</label>
                  <input className="form-input" type="date" name="preferredDate" value={form.preferredDate} onChange={handleChange} min={new Date().toISOString().split("T")[0]} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Nakshatra</label>
                  <select className="form-input" name="nakshatra" value={form.nakshatra} onChange={handleChange}>
                    <option value="">Select Nakshatra</option>
                    {NAKSHATRAS.map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div className="form-group" style={{ gridColumn: "1/-1" }}>
                  <label className="form-label">Gotra</label>
                  <input className="form-input" type="text" name="gotra" value={form.gotra} onChange={handleChange} placeholder="Enter your gotra (optional)" />
                </div>
                <div className="form-group" style={{ gridColumn: "1/-1" }}>
                  <label className="form-label">Special Requests</label>
                  <textarea className="form-input form-textarea" name="specialRequests" value={form.specialRequests} onChange={handleChange} placeholder="Any specific prayers or requests..." />
                </div>
              </div>
              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <button type="button" onClick={onClose} className="btn-outline" style={{ flex: 1 }}>Cancel</button>
                <button type="submit" disabled={loading} className="btn-primary" style={{ flex: 1, opacity: loading ? 0.7 : 1 }}>
                  {loading ? "Booking..." : "Confirm Booking"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
