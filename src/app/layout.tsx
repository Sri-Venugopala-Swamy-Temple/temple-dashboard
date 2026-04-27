import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&display=swap" rel="stylesheet" />
export const metadata: Metadata = {
  title: "Sri Rukmini Satyabhama Sametha Sri Venugopala Swamy Temple",
  description: "Official website — Book sevas, check darshan timings, and explore our festivals.",
  keywords: "Venugopala Swamy Temple, Rukmini Satyabhama, Seva Booking, Darshan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#1a0d00",
              color: "#f5e6c8",
              border: "1px solid #c8860a",
              fontFamily: "Crimson Pro, Georgia, serif",
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
