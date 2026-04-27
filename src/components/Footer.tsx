import Link from "next/link";


export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Temple", href: "/about" },
  { label: "Sevas & Booking", href: "/sevas" },
  { label: "Festivals", href: "/festivals" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0d0700", borderTop: "2px solid #4a2c00", marginTop: "60px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "40px", marginBottom: "40px" }}>

          <div>
            <div style={{ fontSize: "32px", color: "#c8860a", marginBottom: "12px" }}>ॐ</div>
            <h3 style={{ fontFamily: "'Cinzel Decorative',serif", fontSize: "13px", color: "#f0d080", marginBottom: "12px", lineHeight: 1.5 }}>
              Sri Rukmini Satyabhama Sametha<br />Sri Venugopala Swamy Temple
            </h3>
            <p style={{ fontSize: "14px", color: "#8a7060", fontStyle: "italic", lineHeight: 1.8 }}>
              A divine abode of Lord Venugopala Swamy, Goddess Rukmini, and Goddess Satyabhama — blessing all devotees with love, grace, and prosperity.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Cinzel',serif", fontSize: "11px", letterSpacing: "2px", color: "#c8860a", marginBottom: "16px" }}>QUICK LINKS</h4>
            <ul style={{ listStyle: "none" }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href} style={{ marginBottom: "8px" }}>
                  <Link href={link.href} style={{ color: "#c4a882", textDecoration: "none", fontSize: "15px" }}>✦ {link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Cinzel',serif", fontSize: "11px", letterSpacing: "2px", color: "#c8860a", marginBottom: "16px" }}>DARSHAN TIMINGS</h4>
            <div style={{ marginBottom: "12px" }}>
              <p style={{ color: "#f0d080", fontSize: "15px", fontWeight: 600 }}>Morning</p>
              <p style={{ color: "#c4a882", fontSize: "14px" }}>6:00 AM – 12:00 PM</p>
            </div>
            <div>
              <p style={{ color: "#f0d080", fontSize: "15px", fontWeight: 600 }}>Evening</p>
              <p style={{ color: "#c4a882", fontSize: "14px" }}>4:00 PM – 8:30 PM</p>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Cinzel',serif", fontSize: "11px", letterSpacing: "2px", color: "#c8860a", marginBottom: "16px" }}>CONTACT</h4>
            <div style={{ fontSize: "14px", color: "#c4a882", lineHeight: 2 }}>
              <p>📍 Andhra Pradesh, India</p>
              <p>✉️ temple@venugopalswamy.org</p>
              <p>⏰ Office: 9:00 AM – 6:00 PM</p>
            </div>
            <Link href="/contact" style={{ display: "inline-block", marginTop: "16px", background: "transparent", color: "#c8860a", border: "1px solid #c8860a", padding: "8px 20px", fontFamily: "'Cinzel',serif", fontSize: "10px", letterSpacing: "1.5px", textDecoration: "none", borderRadius: "3px" }}>
              GET IN TOUCH
            </Link>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #3a2000", paddingTop: "24px", textAlign: "center" }}>
          <div style={{ fontSize: "28px", color: "#c8860a", marginBottom: "8px" }}>ॐ</div>
          <p style={{ fontFamily: "'Cinzel',serif", fontSize: "10px", letterSpacing: "2px", color: "#5a4030", marginBottom: "6px" }}>✦ &nbsp; SARVE JANA SUKHINO BHAVANTU &nbsp; ✦</p>
          <p style={{ fontSize: "13px", color: "#5a4030", fontStyle: "italic" }}>Sri Venugopala Swamy Ki Jai!</p>
          <p style={{ fontSize: "12px", color: "#3a2800", marginTop: "12px" }}>© {new Date().getFullYear()} Sri Venugopala Swamy Temple Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
