"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Temple", href: "/about" },
  { label: "Sevas & Booking", href: "/sevas" },
  { label: "Festivals", href: "/festivals" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Marquee */}
      <div style={{ background: "linear-gradient(90deg,#8B1a1a,#c8860a,#8B1a1a)", padding: "6px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
        <span style={{ display: "inline-block", animation: "marquee 30s linear infinite", fontFamily: "'Cinzel',serif", fontSize: "11px", letterSpacing: "2px", color: "#fff8e7" }}>
          🔔 &nbsp; DARSHAN: 6:00 AM – 12:00 PM &nbsp;|&nbsp; 4:00 PM – 8:30 PM &nbsp;|&nbsp; Online Seva Booking Available &nbsp;|&nbsp; Sri Venugopala Swamy Ki Jai! &nbsp;&nbsp;&nbsp;
          🔔 &nbsp; DARSHAN: 6:00 AM – 12:00 PM &nbsp;|&nbsp; 4:00 PM – 8:30 PM &nbsp;|&nbsp; Online Seva Booking Available &nbsp;|&nbsp; Sri Venugopala Swamy Ki Jai!
        </span>
      </div>

      <style>{`@keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }`}</style>

      {/* Header */}
      <header style={{ background: "linear-gradient(180deg,#1a0d00 0%,#2d1500 60%,#1a0d00 100%)", borderBottom: "2px solid #c8860a", padding: "20px 24px", textAlign: "center" }}>
        <div style={{ fontSize: "36px", color: "#c8860a", lineHeight: 1, marginBottom: "8px" }}>ॐ</div>
        <h1 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "clamp(12px,2.5vw,20px)", color: "#f0d080", letterSpacing: "1px", lineHeight: 1.4 }}>
          Sri Rukmini Satyabhama Sametha<br />Sri Venugopala Swamy Temple
        </h1>
        <p style={{ fontFamily: "'Cinzel',serif", fontSize: "11px", color: "#c8860a", letterSpacing: "3px", marginTop: "8px" }}>✦ &nbsp; DIVYA KSHETRAM &nbsp; ✦</p>
      </header>

      {/* Nav bar */}
      <nav style={{ background: scrolled ? "#0d0700" : "#1a0d00", borderBottom: "1px solid #4a2c00", position: "sticky", top: 0, zIndex: 100, transition: "background 0.3s" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flex: 1, justifyContent: "center" }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: "'Cinzel',serif", fontSize: "11px", letterSpacing: "1.5px",
                color: pathname === link.href ? "#f0d080" : "#d4a855",
                textDecoration: "none", padding: "14px 16px",
                borderRight: "1px solid #4a2c00",
                background: pathname === link.href ? "rgba(200,134,10,0.2)" : "transparent",
                transition: "all 0.2s",
              }}>
                {link.label}
              </Link>
            ))}
          </div>
          <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: "#c8860a", cursor: "pointer", padding: "12px 0" }} className="mobile-menu-btn">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div style={{ background: "#1a0d00", borderTop: "1px solid #4a2c00", padding: "8px 0" }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} style={{
                display: "block", fontFamily: "'Cinzel',serif", fontSize: "12px", letterSpacing: "1.5px",
                color: pathname === link.href ? "#f0d080" : "#d4a855",
                textDecoration: "none", padding: "12px 24px",
                borderBottom: "1px solid #3a2000",
                background: pathname === link.href ? "rgba(200,134,10,0.15)" : "transparent",
              }}>
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
