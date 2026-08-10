import React, { useState, useEffect } from "react";

export default function InteractiveMap() {
  const [activeRT, setActiveRT] = useState("rt07");
  const [alarmActive, setAlarmActive] = useState(true);
  const [filters, setFilters] = useState({
    batas: true,
    fasilitas: true,
    cctv: true,
    pju: true,
  });

  // State untuk efek interaktif/hidup (pulsa radar & animasi rotasi/kedip)
  const [pulseAnim, setPulseAnim] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulseAnim((prev) => !prev);
    }, 1200);
    return () => clearInterval(timer);
  }, []);

  const rtData: Record<string, { nama: string; warna: string; ketua: string; kontak: string; warga: string; kk: string; cctv: string; pju: string; status: string }> = {
    rt01: {
      nama: "RT 01",
      warna: "#0284c7",
      ketua: "Bpk. Ahmad Suhendar",
      kontak: "0812-3456-7801",
      warga: "120 Jiwa",
      kk: "35 KK",
      cctv: "5 Unit",
      pju: "5 Titik",
      status: "Aman",
    },
    rt02: {
      nama: "RT 02",
      warna: "#dc2626",
      ketua: "Bpk. Rahmat Hidayat",
      kontak: "0813-5566-7788",
      warga: "145 Jiwa",
      kk: "40 KK",
      cctv: "5 Unit",
      pju: "5 Titik",
      status: "Aman",
    },
    rt03: {
      nama: "RT 03",
      warna: "#16a34a",
      ketua: "Bpk. Dedi Supriadi",
      kontak: "0815-9988-2233",
      warga: "130 Jiwa",
      kk: "38 KK",
      cctv: "5 Unit",
      pju: "5 Titik",
      status: "Aman",
    },
    rt04: {
      nama: "RT 04",
      warna: "#2563eb",
      ketua: "Bpk. Rudi Hermawan",
      kontak: "0813-2233-4455",
      warga: "125 Jiwa",
      kk: "36 KK",
      cctv: "5 Unit",
      pju: "5 Titik",
      status: "Aman",
    },
    rt05: {
      nama: "RT 05",
      warna: "#e11d48",
      ketua: "Bpk. Usep Saepudin",
      kontak: "0812-9911-2233",
      warga: "135 Jiwa",
      kk: "39 KK",
      cctv: "5 Unit",
      pju: "5 Titik",
      status: "Aman",
    },
    rt06: {
      nama: "RT 06",
      warna: "#16a34a",
      ketua: "Bpk. Hendra Gunawan",
      kontak: "0812-7788-9900",
      warga: "150 Jiwa",
      kk: "42 KK",
      cctv: "5 Unit",
      pju: "5 Titik",
      status: "Aman",
    },
    rt07: {
      nama: "RT 07",
      warna: "#d97706",
      ketua: "Bpk. Yayan Suryana",
      kontak: "0819-4455-6677",
      warga: "160 Jiwa",
      kk: "45 KK",
      cctv: "5 Unit",
      pju: "5 Titik",
      status: "Darurat",
    },
  };

  const current = rtData[activeRT] || rtData.rt07;

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", padding: "30px 20px", fontFamily: "'Inter', sans-serif", color: "#1f2937" }}>
      <div style={{ maxWidth: "1300px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* HEADER UTAMA & STATISTIK ATAS */}
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
              <span style={{ fontSize: "20px" }}>🗺️</span>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#0f172a", margin: 0 }}>
                RW 08 Kelurahan Cibangkong / Kecamatan Batununggal
              </h2>
            </div>
            <div style={{ fontSize: "14px", fontWeight: "600", color: "#3b82f6", marginBottom: "8px" }}>
              Ketua RW: Bpk. H. Rahmat Hidayat
            </div>
            <p style={{ fontSize: "13px", color: "#64748b", margin: 0, maxWidth: "600px", lineHeight: "1.5" }}>
              Wilayah RW 08 merupakan kawasan pemukiman yang tertib, aman, dan didukung oleh infrastruktur digital serta keamanan warga berbasis RT.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { label: "TOTAL WARGA", val: "965 Jiwa", color: "#0284c7" },
              { label: "TOTAL KK", val: "270 KK", color: "#0f172a" },
              { label: "JUMLAH RT", val: "7 RT", color: "#0f172a" },
              { label: "LUAS WILAYAH", val: "12.5 Ha", color: "#0f172a" },
            ].map((item, idx) => (
              <div key={idx} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "12px 16px", textAlign: "center", minWidth: "110px" }}>
                <div style={{ fontSize: "10px", fontWeight: "700", color: "#64748b", textTransform: "uppercase", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "16px", fontWeight: "800", color: item.color }}>{item.val}</div>
              </div>
            ))}
          </div>
        </div>

        {/* KONTEN UTAMA */}
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr 340px", gap: "20px", alignItems: "start" }}>
          
          {/* KOLOM 1: FILTER PETA & STATUS DARURAT */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
              <div style={{ fontSize: "16px", fontWeight: "700", color: "#0f172a", marginBottom: "4px" }}>Filter Peta</div>
              <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "16px" }}>Atur elemen peta atau pilih tombol RT untuk melihat rincian.</div>

              {/* Status Darurat Card dengan efek kedip halus saat alarm aktif */}
              <div style={{ 
                background: alarmActive ? "#fef2f2" : "#f0fdf4", 
                border: `1px solid ${alarmActive ? "#fecaca" : "#bbf7d0"}`, 
                borderRadius: "12px", 
                padding: "14px", 
                marginBottom: "16px",
                boxShadow: alarmActive && pulseAnim ? "0 0 12px rgba(239, 68, 68, 0.3)" : "none",
                transition: "box-shadow 0.4s ease"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "700", color: alarmActive ? "#dc2626" : "#16a34a", marginBottom: "6px" }}>
                  <span style={{ transform: alarmActive && pulseAnim ? "scale(1.2)" : "scale(1)", transition: "transform 0.3s" }}>⚠️</span> 
                  {alarmActive ? "Status Darurat di RT 07!" : "Kondisi Normal"}
                </div>
                <div style={{ fontSize: "12px", color: "#4b5563", marginBottom: "10px" }}>
                  {alarmActive ? "Alarm darurat aktif di wilayah RT 07." : "Tidak ada laporan darurat aktif."}
                </div>
                <button 
                  onClick={() => setAlarmActive(!alarmActive)}
                  style={{ width: "100%", background: alarmActive ? "#ef4444" : "#16a34a", color: "#fff", border: "none", padding: "8px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer", transition: "0.2s" }}
                >
                  {alarmActive ? "Matikan Alarm" : "Aktifkan Siaga"}
                </button>
              </div>

              {/* Toggle Filters */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { key: "batas", label: "Batas RW & RT", icon: "🗺️" },
                  { key: "fasilitas", label: "Fasilitas Umum, 3 Masjid & GSG", icon: "🏛️" },
                  { key: "cctv", label: "CCTV Pengawas (5)", icon: "📷" },
                  { key: "pju", label: "PJU (Penerangan 5)", icon: "💡" },
                ].map((f) => (
                  <button
                    key={f.key}
                    onClick={() => toggleFilter(f.key as keyof typeof filters)}
                    style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",
                      background: filters[f.key as keyof typeof filters] ? "#f8fafc" : "#ffffff", border: "1px solid #e2e8f0",
                      borderRadius: "10px", padding: "10px 14px", fontSize: "13px", fontWeight: "600",
                      color: filters[f.key as keyof typeof filters] ? "#0f172a" : "#94a3b8", cursor: "pointer", textAlign: "left",
                      transition: "background 0.2s"
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>{f.icon} {f.label}</span>
                    <span style={{ color: filters[f.key as keyof typeof filters] ? "#16a34a" : "#cbd5e1" }}>{filters[f.key as keyof typeof filters] ? "✓" : "○"}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* KOLOM 2: BAGIAN TENGAH (PETA INTERAKTIF) */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "16px", position: "relative", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", padding: "0 4px" }}>
              <div style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", display: "flex", alignItems: "center", gap: "6px" }}>
                <span>🗺️</span> Peta Zonasi & Batas Wilayah RW 08
              </div>
              <span style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0", padding: "4px 10px", borderRadius: "20px", fontSize: "11px", fontWeight: "600", display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ width: "6px", height: "6px", background: "#16a34a", borderRadius: "50%", opacity: pulseAnim ? 1 : 0.4, transition: "opacity 0.6s" }}></span> Live Status Online
              </span>
            </div>

            {/* Container Peta */}
            <div style={{ position: "relative", width: "100%", borderRadius: "12px", overflow: "hidden", border: "1px solid #e2e8f0", background: "#000" }}>
              
              <img 
                src="/maps.jpeg" 
                alt="Peta Wilayah RW 08" 
                style={{ width: "100%", height: "auto", display: "block", opacity: "0.95" }}
              />

              {/* Logo Kiri Bawah */}
              <div style={{ position: "absolute", bottom: "16px", left: "16px", background: "rgba(255, 255, 255, 0.92)", backdropFilter: "blur(4px)", padding: "10px 14px", borderRadius: "10px", border: "1px solid #cbd5e1", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.15)", zIndex: 10 }}>
                <div style={{ width: "36px", height: "36px", background: "#3b82f6", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "18px", fontWeight: "bold" }}>
                  🛡️
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: "800", color: "#0f172a" }}>RW 08 CIBANGKONG</div>
                  <div style={{ fontSize: "9px", fontWeight: "600", color: "#64748b" }}>Kec. Batununggal, Bandung</div>
                </div>
              </div>

              {/* 1. MARKER RT (Dengan Efek Hover & Animasi Aktif) */}
              {filters.batas && (
                <>
                  {[
                    { id: "rt01", label: "RT 01", top: "70%", left: "22%", color: "#16a34a" },
                    { id: "rt02", label: "RT 02", top: "45%", left: "15%", color: "#dc2626" },
                    { id: "rt03", label: "RT 03", top: "63%", left: "50%", color: "#16a34a" },
                    { id: "rt04", label: "RT 04", top: "37%", left: "43%", color: "#2563eb" },
                    { id: "rt05", label: "RT 05", top: "56%", left: "88%", color: "#e11d48" },
                    { id: "rt06", label: "RT 06", top: "43%", left: "86%", color: "#16a34a" },
                    { id: "rt07", label: "RT 07", top: "27%", left: "71%", color: alarmActive ? "#dc2626" : "#16a34a" },
                  ].map((rt) => {
                    const isActive = activeRT === rt.id;
                    const isAlarmRT = rt.id === "rt07" && alarmActive;
                    return (
                      <div 
                        key={rt.id}
                        onClick={() => setActiveRT(rt.id)} 
                        title={rt.label} 
                        style={{ 
                          position: "absolute", 
                          top: rt.top, 
                          left: rt.left, 
                          transform: `translate(-50%, -100%) ${isActive ? "scale(1.1)" : "scale(1)"}`, 
                          cursor: "pointer", 
                          zIndex: isActive ? 5 : 2, 
                          display: "flex", 
                          flexDirection: "column", 
                          alignItems: "center",
                          transition: "transform 0.2s ease"
                        }}
                      >
                        <div style={{ 
                          background: isActive ? "#2563eb" : rt.color, 
                          color: "#fff", 
                          padding: "5px 10px", 
                          borderRadius: "8px", 
                          fontSize: "10px", 
                          fontWeight: "bold", 
                          boxShadow: isAlarmRT && pulseAnim ? "0 0 15px #dc2626" : "0 4px 10px rgba(0,0,0,0.3)", 
                          border: "2px solid #fff", 
                          whiteSpace: "nowrap" 
                        }}>
                          📍 {rt.label} {isAlarmRT ? "⚠️" : ""}
                        </div>
                        <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `7px solid ${isActive ? "#2563eb" : rt.color}`, marginTop: "-1px" }}></div>
                      </div>
                    );
                  })}
                </>
              )}

              {/* 2. MARKER FASILITAS UMUM */}
              {filters.fasilitas && (
                <>
                  <div title="SDN Gumuruh" style={{ position: "absolute", top: "60%", left: "38%", transform: "translate(-50%, -100%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ background: "#059669", color: "#fff", padding: "5px 10px", borderRadius: "8px", fontSize: "10px", fontWeight: "bold", border: "2px solid #ffffff", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", whiteSpace: "nowrap" }}>
                      🏫 SDN Gumuruh
                    </div>
                    <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "7px solid #059669", marginTop: "-1px" }}></div>
                  </div>

                  <div title="Gedung GSG" style={{ position: "absolute", top: "35%", left: "16%", transform: "translate(-50%, -100%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ background: "#4f46e5", color: "#fff", padding: "5px 10px", borderRadius: "8px", fontSize: "10px", fontWeight: "bold", border: "2px solid #ffffff", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", whiteSpace: "nowrap" }}>
                      🏢 Gedung GSG
                    </div>
                    <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "7px solid #4f46e5", marginTop: "-1px" }}></div>
                  </div>

                  <div title="Masjid Al-Hidayah" style={{ position: "absolute", top: "50%", left: "55%", transform: "translate(-50%, -100%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ background: "#0d9488", color: "#fff", padding: "5px 10px", borderRadius: "8px", fontSize: "10px", fontWeight: "bold", border: "2px solid #ffffff", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", whiteSpace: "nowrap" }}>
                      🕌 Masjid
                    </div>
                    <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "7px solid #0d9488", marginTop: "-1px" }}></div>
                  </div>

                  <div title="Masjid Al-Barokah RT 02" style={{ position: "absolute", top: "50%", left: "21%", transform: "translate(-50%, -100%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ background: "#0d9488", color: "#fff", padding: "5px 10px", borderRadius: "8px", fontSize: "10px", fontWeight: "bold", border: "2px solid #ffffff", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", whiteSpace: "nowrap" }}>
                      🕌 Masjid
                    </div>
                    <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "7px solid #0d9488", marginTop: "-1px" }}></div>
                  </div>

                  <div title="Masjid Al-Mubarok RT 05" style={{ position: "absolute", top: "45%", left: "75%", transform: "translate(-50%, -100%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ background: "#0d9488", color: "#fff", padding: "5px 10px", borderRadius: "8px", fontSize: "10px", fontWeight: "bold", border: "2px solid #ffffff", boxShadow: "0 4px 10px rgba(0,0,0,0.3)", whiteSpace: "nowrap" }}>
                      🕌 Masjid 3 (RT 05)
                    </div>
                    <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: "7px solid #0d9488", marginTop: "-1px" }}></div>
                  </div>
                </>
              )}

              {/* 3. MARKER CCTV PENGAWAS (Berkedip hidup) */}
              {filters.cctv && (
                <>
                  {[
                    { title: "CCTV-01", top: "48%", left: "35%" },
                    { title: "CCTV-02", top: "68%", left: "48%" },
                    { title: "CCTV-03", top: "35%", left: "73%" },
                    { title: "CCTV-04", top: "38%", left: "14%" },
                    { title: "CCTV-05", top: "50%", left: "80%" },
                  ].map((c, i) => (
                    <div key={i} title={c.title} style={{ position: "absolute", top: c.top, left: c.left, transform: "translate(-50%, -100%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ 
                        background: "#0f172a", 
                        color: "#38bdf8", 
                        padding: "4px 8px", 
                        borderRadius: "6px", 
                        fontSize: "9px", 
                        fontWeight: "bold", 
                        border: "1px solid #38bdf8", 
                        boxShadow: pulseAnim ? "0 0 8px rgba(56, 189, 248, 0.6)" : "0 2px 6px rgba(0,0,0,0.4)", 
                        whiteSpace: "nowrap",
                        transition: "box-shadow 0.5s ease"
                      }}>
                        📷 {c.title}
                      </div>
                      <div style={{ width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "6px solid #0f172a", marginTop: "-1px" }}></div>
                    </div>
                  ))}
                </>
              )}

              {/* 4. MARKER PJU / PENERANGAN */}
              {filters.pju && (
                <>
                  {[
                    { title: "PJU-A1", top: "59%", left: "25%" },
                    { title: "PJU-A2", top: "65%", left: "59%" },
                    { title: "PJU-A3", top: "56%", left: "79%" },
                    { title: "PJU-A4", top: "41%", left: "45%" },
                    { title: "PJU-A5", top: "27%", left: "80%" },
                  ].map((p, i) => (
                    <div key={i} title={p.title} style={{ position: "absolute", top: p.top, left: p.left, transform: "translate(-50%, -100%)", zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ background: "#f59e0b", color: "#fff", padding: "4px 8px", borderRadius: "6px", fontSize: "9px", fontWeight: "bold", border: "1px solid #fff", boxShadow: "0 2px 6px rgba(0,0,0,0.4)", whiteSpace: "nowrap" }}>
                        💡 {p.title}
                      </div>
                      <div style={{ width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "6px solid #f59e0b", marginTop: "-1px" }}></div>
                    </div>
                  ))}
                </>
              )}

            </div>

          </div>

          {/* KOLOM 3: SIDEBAR DETAIL RT TERPILIH */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "20px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
            
            {/* Profil Ketua RT */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", borderBottom: "1px solid #f1f5f9", paddingBottom: "16px" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", overflow: "hidden", border: "2px solid #3b82f6" }}>
                👨‍💼
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#3b82f6", textTransform: "uppercase" }}>KETUA {current.nama}</div>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>{current.ketua}</div>
                <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>📞 {current.kontak}</div>
              </div>
            </div>

            {/* Statistik Detail RT */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { label: "Total Warga", val: current.warga, icon: "👥" },
                { label: "Kepala Keluarga", val: current.kk, icon: "🏠" },
                { label: "CCTV Aktif", val: current.cctv, icon: "📷" },
                { label: "Titik PJU", val: current.pju, icon: "💡" },
              ].map((stat, idx) => (
                <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8fafc", padding: "10px 14px", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                  <span style={{ fontSize: "13px", color: "#4b5563", display: "flex", alignItems: "center", gap: "8px" }}>{stat.icon} {stat.label}</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a" }}>{stat.val}</span>
                </div>
              ))}

              {/* Status Wilayah */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8fafc", padding: "10px 14px", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                <span style={{ fontSize: "13px", color: "#4b5563", display: "flex", alignItems: "center", gap: "8px" }}>🛡️ Status Wilayah</span>
                <span style={{ 
                  fontSize: "13px", 
                  fontWeight: "700", 
                  color: (activeRT === "rt07" && alarmActive) ? "#dc2626" : current.status === "Aman" ? "#16a34a" : "#ca8a04", 
                  background: (activeRT === "rt07" && alarmActive) ? "#fef2f2" : current.status === "Aman" ? "#f0fdf4" : "#fefce8", 
                  padding: "2px 8px", 
                  borderRadius: "6px" 
                }}>
                  {(activeRT === "rt07" && alarmActive) ? "Darurat" : current.status}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}