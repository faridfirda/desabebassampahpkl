import React, { useState } from "react";
import mapImage from "./mapsbaru.png";

export default function InteractiveMap() {
  const [filters, setFilters] = useState({
    batas: true,
    fasilitas: true,
    cctv: true,
    pju: true,
  });

  const [hoverInfo, setHoverInfo] = useState<{
    title: string;
    subtitle: string;
    details: { label: string; val: string; icon: string }[];
  } | null>(null);

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderPolygon = (name: string, color: string, points: string, details: any) => {
    const isHovered = hoverInfo?.title === name;
    return (
      <polygon
        points={points}
        fill={isHovered ? color.replace("0.4", "0.75") : color}
        stroke={color.replace("0.4", "0.95")}
        strokeWidth="2.5"
        strokeLinejoin="round"
        style={{ cursor: "pointer", transition: "all 0.2s ease" }}
        onMouseEnter={() => setHoverInfo({ title: name, subtitle: "Wilayah Administrasi", details })}
        onMouseLeave={() => setHoverInfo(null)}
        onClick={() => setHoverInfo({ title: name, subtitle: "Wilayah Administrasi", details })}
      />
    );
  };

  const facilities = [
    { type: "fasilitas", label: "🏫 SDN", top: "53%", left: "47%", bg: "#059669", title: "SDN Gumuruh", subtitle: "Pendidikan", details: [{ label: "Pengurus", val: "Bpk. Drs. H. Dadang", icon: "👤" }, { label: "Jam Operasional", val: "08:00 - 17:00", icon: "⏰" }] },
    { type: "fasilitas", label: "🏢 GSG", top: "30%", left: "28%", bg: "#4f46e5", title: "Gedung Serba Guna", subtitle: "Aula Warga RT 02", details: [{ label: "Pengurus", val: "Bpk. Cepi Iskandar", icon: "👤" }, { label: "Kondisi", val: "Layak & Terawat", icon: "✅" }] },
    { type: "fasilitas", label: "🕌 Masjid 1", top: "45%", left: "62%", bg: "#0d9488", title: "Masjid Al-Hidayah", subtitle: "Tempat Ibadah RT 03", details: [{ label: "Pengurus", val: "Ust. Solihin", icon: "👤" }, { label: "Kondisi", val: "Aktif 24 Jam", icon: "🌙" }] },
    { type: "fasilitas", label: "🕌 Masjid 2", top: "45%", left: "33%", bg: "#0d9488", title: "Masjid Baiturrahman", subtitle: "Tempat Ibadah RT 01", details: [{ label: "Pengurus", val: "Ust. Fathur", icon: "👤" }, { label: "Kondisi", val: "Aktif 24 Jam", icon: "🌙" }] },
    { type: "fasilitas", label: "🕌 Masjid 3", top: "39%", left: "79%", bg: "#0d9488", title: "Masjid Nurul Iman", subtitle: "Tempat Ibadah RT 07", details: [{ label: "Pengurus", val: "Ust. H. Mahmud", icon: "👤" }, { label: "Kondisi", val: "Aktif 24 Jam", icon: "🌙" }] },
    { type: "fasilitas", label: "🛡️ Pos Linmas", top: "75%", left: "47%", bg: "#334155", title: "Pos Satkamling / Linmas", subtitle: "Keamanan Wilayah", details: [{ label: "Komandan", val: "Bpk. Nana Suryana", icon: "👤" }, { label: "Status", val: "Siaga Ronda Malam", icon: "🛡️" }] },

    { type: "cctv", label: "📷 CCTV-1", top: "34%", left: "45%", bg: "#1f2937", title: "CCTV Pengawas 01", subtitle: "Simpang Utama RT 02 & 04", details: [{ label: "Resolusi", val: "1080p Full HD", icon: "📺" }, { label: "Status", val: "Online", icon: "🟢" }] },
    { type: "cctv", label: "📷 CCTV-2", top: "26%", left: "77%", bg: "#1f2937", title: "CCTV Pengawas 02", subtitle: "Gerbang Utama RT 07", details: [{ label: "Resolusi", val: "4K Ultra HD", icon: "📺" }, { label: "Status", val: "Online", icon: "🟢" }] },
    { type: "cctv", label: "📷 CCTV-3", top: "45%", left: "85%", bg: "#1f2937", title: "CCTV Pengawas 03", subtitle: "Perbatasan Timur RT 05 & 06", details: [{ label: "Resolusi", val: "1080p Full HD", icon: "📺" }, { label: "Status", val: "Online", icon: "🟢" }] },
    { type: "cctv", label: "📷 CCTV-4", top: "58%", left: "38%", bg: "#1f2937", title: "CCTV Pengawas 04", subtitle: "Area RT 01 Selatan", details: [{ label: "Resolusi", val: "1080p Full HD", icon: "📺" }, { label: "Status", val: "Online", icon: "🟢" }] },
    { type: "cctv", label: "📷 CCTV-5", top: "52%", left: "58%", bg: "#1f2937", title: "CCTV Pengawas 05", subtitle: "Gerbang Utara RT 04 & RT 06", details: [{ label: "Resolusi", val: "4K Ultra HD", icon: "📺" }, { label: "Status", val: "Online", icon: "🟢" }] },

    { type: "pju", label: "💡 PJU-1", top: "45%", left: "43%", bg: "#d97706", title: "Penerangan Jalan A1", subtitle: "PJU RT 01 (Area Barat)", details: [{ label: "Daya", val: "50 Watt LED", icon: "⚡" }, { label: "Kondisi", val: "Menyala Normal", icon: "✨" }] },
    { type: "pju", label: "💡 PJU-2", top: "57%", left: "68%", bg: "#d97706", title: "Penerangan Jalan A2", subtitle: "PJU RT 03 (Area Tengah)", details: [{ label: "Daya", val: "50 Watt LED", icon: "⚡" }, { label: "Kondisi", val: "Menyala Normal", icon: "✨" }] },
    { type: "pju", label: "💡 PJU-3", top: "35%", left: "55%", bg: "#d97706", title: "Penerangan Jalan A3", subtitle: "PJU RT 04 (Area Utara)", details: [{ label: "Daya", val: "50 Watt LED", icon: "⚡" }, { label: "Kondisi", val: "Menyala Normal", icon: "✨" }] },
    { type: "pju", label: "💡 PJU-4", top: "20%", left: "70%", bg: "#d97706", title: "Penerangan Jalan A4", subtitle: "PJU RT 07 (Area Atas)", details: [{ label: "Daya", val: "50 Watt LED", icon: "⚡" }, { label: "Kondisi", val: "Menyala Normal", icon: "✨" }] },
    { type: "pju", label: "💡 PJU-5", top: "40%", left: "73%", bg: "#d97706", title: "Penerangan Jalan A5", subtitle: "PJU RT 05 (Area Timur)", details: [{ label: "Daya", val: "50 Watt LED", icon: "⚡" }, { label: "Kondisi", val: "Menyala Normal", icon: "✨" }] },
  ];

  const filterList = [
    { key: "batas", label: "Batas RW & RT", icon: "🗺️", activeBg: "rgba(56, 189, 248, 0.15)", activeBorder: "#38bdf8", activeColor: "#38bdf8" },
    { key: "fasilitas", label: "Fasilitas Umum", icon: "🏛️", activeBg: "rgba(13, 148, 136, 0.15)", activeBorder: "#0d9488", activeColor: "#2dd4bf" },
    { key: "cctv", label: "CCTV Pengawas", icon: "📷", activeBg: "rgba(239, 68, 68, 0.15)", activeBorder: "#ef4444", activeColor: "#f87171" },
    { key: "pju", label: "PJU (Penerangan)", icon: "💡", activeBg: "rgba(217, 119, 6, 0.15)", activeBorder: "#d97706", activeColor: "#fbbf24" },
  ];

  return (
    <>
      <style>{`
        .map-layout {
          display: flex;
          gap: 24px;
          align-items: flex-start;
          flex-direction: row;
        }
        .filter-panel {
          width: 300px;
          flex-shrink: 0;
        }
        .map-panel {
          flex: 1;
          min-width: 300px;
        }
        .map-container {
          min-height: 520px;
        }
        .filter-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        @media (max-width: 768px) {
          .map-layout {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 16px !important;
          }
          .filter-panel {
            width: 100% !important;
            max-width: 100% !important;
          }
          .filter-grid {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8px !important;
          }
          .map-panel {
            width: 100% !important;
            max-width: 100% !important;
          }
          .map-container {
            min-height: 420px !important;
          }
        }
      `}</style>

      <div style={{ background: "#ffffff", minHeight: "100vh", padding: "24px 16px", fontFamily: "'Inter', sans-serif", color: "#1e293b", boxSizing: "border-box" }}>
        <div style={{ maxWidth: "1300px", margin: "0 auto" }} className="map-layout">
          
          {/* PANEL KIRI: FILTER MENU DENGAN WARNA KHUSUS */}
          <div className="filter-panel" style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)", boxSizing: "border-box" }}>
            <div style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "6px" }}>Peta Wilayah Interaktif</div>
            <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "16px", lineHeight: "1.4" }}>
              Filter tampilan batas administrasi dan infrastruktur wilayah.
            </div>

            <div className="filter-grid">
              {filterList.map((f) => {
                const isActive = filters[f.key as keyof typeof filters];
                return (
                  <button
                    key={f.key}
                    onClick={() => toggleFilter(f.key as keyof typeof filters)}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px", width: "100%",
                      background: isActive ? f.activeBg : "#ffffff", 
                      border: `1.5px solid ${isActive ? f.activeBorder : "#cbd5e1"}`,
                      borderRadius: "10px", padding: "12px 14px", fontSize: "13px", fontWeight: "600",
                      color: isActive ? f.activeColor : "#64748b", cursor: "pointer", textAlign: "left",
                      transition: "all 0.2s", boxSizing: "border-box",
                      boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.04)" : "none"
                    }}
                  >
                    <span>{f.icon}</span>
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* PANEL KANAN: PETA DENGAN POLIGON PRESISI */}
          <div className="map-panel" style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "16px", position: "relative", boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)", boxSizing: "border-box" }}>
            
            <div className="map-container" style={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden", border: "1px solid #cbd5e1", background: "#f1f5f9", boxSizing: "border-box" }}>
              
              <img 
                src={mapImage} 
                alt="Peta Wilayah RW 08" 
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", position: "absolute", top: 0, left: 0 }}
              />

              {/* 1. RENDER BLOK WARNA MENGGUNAKAN SVG POLYGON */}
              {filters.batas && (
                <svg viewBox="0 0 1000 600" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 5, pointerEvents: "auto" }}>
                  
                 {/* RT 01 (Biru) */}
                  {renderPolygon("RT 01", "rgba(56, 189, 248, 0.4)", "250,320 300,300 500,270 500,480 370,490 250,590 240,350",[
                    { label: "Total Warga", val: "120 Jiwa", icon: "👥" },
                    { label: "Ketua RT", val: "Bpk. Ahmad Suhendar", icon: "👨‍💼" }
                  ])}

                  {/* RT 02 (Pink) */}
                  {renderPolygon("RT 02", "rgba(236, 72, 153, 0.4)", "200,160 390,100 380,270 320,280 200,320 200,290",[
                    { label: "Total Warga", val: "145 Jiwa", icon: "👥" },
                    { label: "Ketua RT", val: "Bpk. Rahmat Hidayat", icon: "👨‍💼" }
                  ])}
                  
                  {/* RT 04 (ungu) */}
                  {renderPolygon("RT 04", "rgba(168, 85, 247, 0.4)", "395,130 630,100 630,240 390,245", [
                    { label: "Total Warga", val: "130 Jiwa", icon: "👥" },
                    { label: "Ketua RT", val: "Bpk. Dedi Supriadi", icon: "👨‍💼" }
                  ])}

                  {/* RT 03 (abu) */}
                 {renderPolygon("RT 03", "rgba(156, 163, 175, 0.4)", "500,250 710,250 710,410 500,410", [
                    { label: "Total Warga", val: "130 Jiwa", icon: "👥" },
                    { label: "Ketua RT", val: "Bpk. Dedi Supriadi", icon: "👨‍💼" }
                  ])}

                  {/* RT 05 (Merah) */}
                 {renderPolygon("RT 05", "rgba(239, 68, 68, 0.4)", "720,205 850,180 850,350 720,350", [
                    { label: "Total Warga", val: "150 Jiwa", icon: "👥" },
                    { label: "Ketua RT", val: "Bpk. Hendra Gunawan", icon: "👨‍💼" }
                  ])}

                  {/* RT 06 (Ijo) */}
                  {renderPolygon("RT 06", "rgba(34, 197, 94, 0.4)", "850,170 930,170 950,380 850,380",  [
                    { label: "Total Warga", val: "135 Jiwa", icon: "👥" },
                    { label: "Ketua RT", val: "Bpk. Usep Saepudin", icon: "👨‍💼" }
                  ])}

                  {/* RT 07 (Oren) */}
                  {renderPolygon("RT 07", "rgba(249, 115, 22, 0.4)", "630,70 880,15 950,120 650,230", [
                    { label: "Total Warga", val: "160 Jiwa", icon: "👥" },
                    { label: "Ketua RT", val: "Bpk. Yayan Suryana", icon: "👨‍💼" }
                  ])}

                </svg>
              )}

              {/* 2. RENDER IKON / PIN FASILITAS, CCTV, & PJU */}
              {facilities.map((item, idx) => {
                if (item.type === "fasilitas" && !filters.fasilitas) return null;
                if (item.type === "cctv" && !filters.cctv) return null;
                if (item.type === "pju" && !filters.pju) return null;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoverInfo({ title: item.title, subtitle: item.subtitle, details: item.details })}
                    onMouseLeave={() => setHoverInfo(null)}
                    onClick={() => setHoverInfo({ title: item.title, subtitle: item.subtitle, details: item.details })}
                    style={{
                      position: "absolute",
                      top: item.top,
                      left: item.left,
                      transform: "translate(-50%, -100%)",
                      cursor: "pointer",
                      zIndex: 10,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    <div style={{ background: item.bg, color: "#fff", padding: "4px 8px", borderRadius: "6px", fontSize: "9px", fontWeight: "bold", border: "1.5px solid #fff", whiteSpace: "nowrap", boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }}>
                      {item.label}
                    </div>
                    <div style={{ width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: `6px solid ${item.bg}`, marginTop: "-1px" }}></div>
                  </div>
                );
              })}

              {/* FLOATING TOOLTIP / PANEL DETAIL SAAT DI-HOVER/KLIK */}
              {hoverInfo && (
                <div style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  background: "#ffffff",
                  border: "1px solid #cbd5e1",
                  borderRadius: "14px",
                  padding: "16px",
                  width: "280px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  zIndex: 9999,
                  pointerEvents: "auto"
                }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #e2e8f0", paddingBottom: "10px", marginBottom: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", border: "2px solid #3b82f6" }}>
                        📍
                      </div>
                      <div>
                        <div style={{ fontSize: "9px", fontWeight: "700", color: "#2563eb", textTransform: "uppercase" }}>{hoverInfo.subtitle}</div>
                        <div style={{ fontSize: "13px", fontWeight: "800", color: "#0f172a" }}>{hoverInfo.title}</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => setHoverInfo(null)}
                      style={{ background: "none", border: "none", color: "#64748b", fontSize: "16px", cursor: "pointer", padding: "4px" }}
                    >
                      ✕
                    </button>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {hoverInfo.details.map((stat, idx) => (
                      <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8fafc", padding: "6px 10px", borderRadius: "6px", fontSize: "11px", border: "1px solid #e2e8f0" }}>
                        <span style={{ color: "#64748b" }}>{stat.icon} {stat.label}</span>
                        <span style={{ fontWeight: "700", color: "#0f172a" }}>{stat.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </>
  );
}