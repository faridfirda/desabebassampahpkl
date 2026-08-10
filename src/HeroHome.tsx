import React, { useState } from "react";
import gerbangImg from "../src/gerbang.jpeg";

export default function HeroHome({ onLoginClick }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh", padding: "40px 24px", fontFamily: "'Inter', sans-serif", color: "#1f2937" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "40px", alignItems: "center" }}>
        
        {/* KOLOM KIRI */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", padding: "8px 16px", borderRadius: "30px", fontSize: "13px", fontWeight: "600" }}>
              🌱 Menuju Kawasan Zero Waste
            </span>
          </div>

          <h1 style={{ fontSize: "42px", fontWeight: "800", lineHeight: "1.15", margin: 0, color: "#111827" }}>
            Wujudkan RW 08 <br />
            <span style={{ color: "#16a34a" }}>Kawasan Bebas Sampah</span>
          </h1>

          <p style={{ fontSize: "15px", color: "#4b5563", lineHeight: "1.6", margin: 0 }}>
            Gerakan sadar lingkungan untuk menciptakan RW 08 Cibangkong yang bersih, sehat, dan asri. Bersama kita kelola sampah mandiri mulai dari rumah melalui pemilahan yang bijak dan berkelanjutan.
          </p>

          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ fontSize: "13px", fontWeight: "700", color: "#16a34a", display: "flex", alignItems: "center", gap: "8px" }}>
              📅 JADWAL OPERASIONAL BANK SAMPAH:
            </div>
            <div style={{ fontSize: "14px", fontWeight: "700", color: "#1f2937" }}>
              Setiap Sabtu & Minggu | Pukul 08.00 - 12.00 WIB
            </div>
            <div style={{ fontSize: "12px", color: "#6b7280", display: "flex", alignItems: "center", gap: "6px", marginTop: "4px" }}>
              💡 <strong style={{ color: "#374151" }}>Edukasi Pemilahan:</strong> Pisahkan sampah Organik, Anorganik, dan B3 sebelum disetor!
            </div>
          </div>

          {/* TOMBOL BERFUNGSI SESUAI ID DI APP.JSX */}
          <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap" }}>
            
            {/* Tombol Cek Bank Sampah -> Scroll ke id="bank-sampah" */}
            <button 
              onClick={() => scrollToSection("bank-sampah")}
              style={{ 
                background: "#16a34a", color: "#ffffff", padding: "12px 24px", borderRadius: "10px", 
                fontWeight: "600", fontSize: "14px", border: "none", cursor: "pointer", display: "inline-flex", 
                alignItems: "center", gap: "8px", boxShadow: "0 4px 12px rgba(22, 163, 74, 0.25)",
                transition: "transform 0.2s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              ♻️ Cek Bank Sampah
            </button>

            {/* Tombol Lapor Sampah Warga -> Scroll ke id="pemberdayaan" atau section lain */}
            <button 
              onClick={() => scrollToSection("pemberdayaan")}
              style={{ 
                background: "#ef4444", color: "#ffffff", padding: "12px 24px", borderRadius: "10px", 
                fontWeight: "600", fontSize: "14px", border: "none", cursor: "pointer", display: "inline-flex", 
                alignItems: "center", gap: "8px", boxShadow: "0 4px 12px rgba(239, 68, 68, 0.25)",
                transition: "transform 0.2s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              📢 Lapor Sampah Warga
            </button>

            {/* Tombol Login Admin -> Memanggil fungsi onLoginClick dari App.jsx */}
            <button 
              onClick={onLoginClick}
              style={{ 
                background: "#2563eb", color: "#ffffff", padding: "12px 24px", borderRadius: "10px", 
                fontWeight: "600", fontSize: "14px", border: "none", cursor: "pointer", display: "inline-flex", 
                alignItems: "center", gap: "8px", boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
                transition: "transform 0.2s ease"
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
            >
              🔒 Login Admin
            </button>

          </div>

        </div>

        {/* KOLOM KANAN (Gambar & Efek Mouse) */}
        <div 
          style={{ 
            background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "16px", 
            boxShadow: isHovered ? "0 20px 40px rgba(22,163,74,0.15)" : "0 10px 25px rgba(0,0,0,0.05)", 
            display: "flex", flexDirection: "column", gap: "12px",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
            transform: isHovered ? "translateY(-4px)" : "translateY(0)"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePos({ x: 0, y: 0 });
          }}
          onMouseMove={handleMouseMove}
        >
          <div style={{ position: "relative", width: "100%", borderRadius: "14px", overflow: "hidden" }}>
            <img 
              src={gerbangImg} 
              alt="Gapura Utama RW 08 Kelurahan Cibangkong" 
              style={{ 
                width: "100%", height: "360px", objectFit: "cover", display: "block",
                transform: `scale(${isHovered ? 1.08 : 1}) translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
                transition: "transform 0.1s ease-out",
              }}
            />

            <div style={{ 
              position: "absolute", bottom: "16px", left: "16px", background: "rgba(255, 255, 255, 0.95)", 
              backdropFilter: "blur(4px)", padding: "10px 16px", borderRadius: "12px", display: "flex", 
              alignItems: "center", gap: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
              transition: "transform 0.1s ease-out"
            }}>
              <span style={{ fontSize: "18px" }}>♻️</span>
              <div>
                <div style={{ fontSize: "11px", color: "#6b7280", fontWeight: "600" }}>Target Minggu Ini</div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: "#16a34a" }}>85% (Bersih)</div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#4b5563", padding: "4px 8px" }}>
            <span>📍</span> Gapura Utama RW 08 Kelurahan Cibangkong, Kecamatan Batununggal
          </div>
        </div>

      </div>
    </div>
  );
}