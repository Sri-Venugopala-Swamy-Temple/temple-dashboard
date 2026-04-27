"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        toast.success("Message sent successfully!");
      } else {
        toast.error(data.error || "Failed to send message");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section style={{ background: "linear-gradient(180deg, #1a0800, #0d0500)", padding: "60px 24px", textAlign: "center", borderBottom: "1px solid #4a2c00" }}>
        <h1 className="section-title">Contact Us</h1>
        <p style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "3px", color: "#c8860a", marginTop: "8px" }}>✦ &nbsp; WE ARE HERE TO HELP &nbsp; ✦</p>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px" }}>
          
          {/* Info */}
          <div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "20px", color: "#f0d080", marginBottom: "24px" }}>Temple Office</h2>
            
            {[
              { icon: "📍", title: "Address", lines: ["Sri Venugopala Swamy Temple", "Andhra Pradesh, India"] },
              { icon: "📞", title: "Phone", lines: ["Temple Office: 9:00 AM – 6:00 PM", "For emergency: Available after hours"] },
              { icon: "✉️", title: "Email", lines: ["temple@venugopalswamy.org", "bookings@venugopalswamy.org"] },
              { icon: "⏰", title: "Office Hours", lines: ["Monday – Sunday", "9:00 AM to 6:00 PM"] },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: "16px", marginBottom: "28px" }}>
                <div style={{ fontSize: "24px", flexShrink: 0, marginTop: "2px" }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "1.5px", color: "#c8860a", marginBottom: "6px" }}>{item.title}</div>
                  {item.lines.map((line, i) => <p key={i} style={{ fontSize: "15px", color: "#c4a882", lineHeight: 1.8 }}>{line}</p>)}
                </div>
              </div>
            ))}

            <div style={{ background: "#1a0d00", border: "1px solid #3a2000", borderLeft: "3px solid #c8860a", padding: "20px", borderRadius: "4px", marginTop: "32px" }}>
              <div style={{ fontFamily: "'Cinzel', serif", fontSize: "11px", letterSpacing: "1.5px", color: "#c8860a", marginBottom: "8px" }}>DARSHAN TIMINGS</div>
              <p style={{ fontSize: "15px", color: "#f0d080", fontWeight: 600 }}>Morning: 6:00 AM – 12:00 PM</p>
              <p style={{ fontSize: "15px", color: "#f0d080", fontWeight: 600 }}>Evening: 4:00 PM – 8:30 PM</p>
              <p style={{ fontSize: "13px", color: "#8a7060", fontStyle: "italic", marginTop: "8px" }}>Open all days including holidays</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: "20px", color: "#f0d080", marginBottom: "24px" }}>Send a Message</h2>

            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 24px", background: "#1a0d00", border: "1px solid #c8860a", borderRadius: "6px" }}>
                <div style={{ fontSize: "48px", marginBottom: "16px" }}>🙏</div>
                <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: "16px", color: "#f0d080", marginBottom: "12px" }}>Message Received!</h3>
                <p style={{ color: "#c4a882", fontStyle: "italic", lineHeight: 1.8 }}>Thank you for reaching out. Our temple office will respond to your message within 1–2 business days.</p>
                <p style={{ color: "#c8860a", fontSize: "18px", marginTop: "20px" }}>Sri Venugopala Swamy blesses you! 🪔</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input className="form-input" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input className="form-input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 9999999999" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <select className="form-input" name="subject" value={form.subject} onChange={handleChange} required>
                    <option value="">Select a subject</option>
                    <option>Seva Booking Inquiry</option>
                    <option>Festival Information</option>
                    <option>General Inquiry</option>
                    <option>Donation / Sponsorship</option>
                    <option>Temple Events</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea className="form-input form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="How can we help you?" required />
                </div>
                <button type="submit" disabled={loading} className="btn-primary" style={{ width: "100%", padding: "14px", opacity: loading ? 0.7 : 1 }}>
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
