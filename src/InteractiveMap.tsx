import React, { useState, useEffect } from "react";

export default function InteractiveMap() {
  const [activeRT, setActiveRT] = useState("rt07");
  const [emergencyRT, setEmergencyRT] = useState<string | null>("rt07");
  const [filters, setFilters] = useState({
    batas: true,
    fasilitas: true,
    cctv: true,
    pju: true,
  });

  const [pulseAnim, setPulseAnim] = useState(false);

  // State untuk menyimpan item yang sedang dipilih/diklik (RT, Fasilitas, CCTV, atau PJU)
  const [selectedItem, setSelectedItem] = useState<{
    type: "rt" | "fasilitas" | "cctv" | "pju";
    title: string;
    subtitle?: string;
    details: { label: string; val: string; icon: string }[];
    status?: { label: string; type: "aman" | "darurat" | "info" };
    ketua?: { nama: string; kontak: string };
  }>({
    type: "rt",
    title: "RT 07",
    subtitle: "Wilayah RT 07",
    details: [
      { label: "Total Warga", val: "160 Jiwa", icon: "👥" },
      { label: "Kepala Keluarga", val: "45 KK", icon: "🏠" },
      { label: "CCTV Aktif", val: "5 Unit", icon: "📷" },
      { label: "Titik PJU", val: "5 Titik", icon: "💡" },
    ],
    status: { label: "Darurat", type: "darurat" },
    ketua: { nama: "Bpk. Yayan Suryana", kontak: "0819-4455-6677" },
  });

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
  const isCurrentEmergency = emergencyRT === activeRT;

  const toggleFilter = (key: keyof typeof filters) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleToggleEmergency = () => {
    if (emergencyRT === activeRT) {
      setEmergencyRT(null);
      if (selectedItem.type === "rt") {
        setSelectedItem((prev) => ({
          ...prev,
          status: { label: "Aman", type: "aman" }
        }));
      }
    } else {
      setEmergencyRT(activeRT);
      if (selectedItem.type === "rt") {
        setSelectedItem((prev) => ({
          ...prev,
          status: { label: "Darurat", type: "darurat" }
        }));
      }
    }
  };

  const handleSelectRT = (rtId: string) => {
    setActiveRT(rtId);
    const data = rtData[rtId];
    const isAlarm = emergencyRT === rtId;
    setSelectedItem({
      type: "rt",
      title: data.nama,
      subtitle: `Wilayah ${data.nama}`,
      ketua: { nama: data.ketua, kontak: data.kontak },
      details: [
        { label: "Total Warga", val: data.warga, icon: "👥" },
        { label: "Kepala Keluarga", val: data.kk, icon: "🏠" },
        { label: "CCTV Aktif", val: data.cctv, icon: "📷" },
        { label: "Titik PJU", val: data.pju, icon: "💡" },
      ],
      status: { label: isAlarm ? "Darurat" : "Aman", type: isAlarm ? "darurat" : "aman" }
    });
  };

  const handleSelectFasilitas = (f: { title: string; label: string; kategori: string; penanggungJawab: string; kontak: string }) => {
    setSelectedItem({
      type: "fasilitas",
      title: f.label,
      subtitle: f.title,
      details: [
        { label: "Kategori", val: f.kategori, icon: "🏛️" },
        { label: "Jam Operasional", val: "08:00 - 17:00 WIB", icon: "⏰" },
        { label: "Kondisi Bangunan", val: "Layak & Terawat", icon: "✅" },
        { label: "Pengurus / PJ", val: f.penanggungJawab, icon: "👤" },
      ],
      status: { label: "Normal", type: "aman" },
      ketua: { nama: f.penanggungJawab, kontak: f.kontak }
    });
  };

  const handleSelectCCTV = (c: { title: string; lokasi: string; resolusi: string; ip: string }) => {
    setSelectedItem({
      type: "cctv",
      title: c.title,
      subtitle: `Area Pantau: ${c.lokasi}`,
      details: [
        { label: "Resolusi", val: c.resolusi, icon: "📺" },
        { label: "Alamat IP", val: c.ip, icon: "🌐" },
        { label: "Penyimpanan", val: "Cloud (30 Hari)", icon: "💾" },
        { label: "Frame Rate", val: "30 FPS", icon: "⚡" },
      ],
      status: { label: "Online 24 Jam", type: "aman" }
    });
  };

  const handleSelectPJU = (p: { title: string; jenis: string; daya: string; statusLampu: string }) => {
    setSelectedItem({
      type: "pju",
      title: p.title,
      subtitle: "Penerangan Jalan Umum",
      details: [
        { label: "Jenis Lampu", val: p.jenis, icon: "💡" },
        { label: "Daya Listrik", val: p.daya, icon: "⚡" },
        { label: "Kontrol Panel", val: "Otomatis (LDR Sensor)", icon: "🎛️" },
        { label: "Kondisi Fisik", val: "Baik", icon: "✨" },
      ],
      status: { label: p.statusLampu, type: "aman" }
    });
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
              <div style={{ fontSize: "12px", color: "#64748b", marginBottom: "16px" }}>Klik ikon apa saja di peta (RT, Fasilitas, CCTV, atau PJU) untuk melihat rincian di panel kanan.</div>

              <div style={{ 
                background: isCurrentEmergency ? "#fef2f2" : "#f0fdf4", 
                border: `1px solid ${isCurrentEmergency ? "#fecaca" : "#bbf7d0"}`, 
                borderRadius: "12px", 
                padding: "14px", 
                marginBottom: "16px",
                boxShadow: isCurrentEmergency && pulseAnim ? "0 0 12px rgba(239, 68, 68, 0.3)" : "none",
                transition: "box-shadow 0.4s ease"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", fontWeight: "700", color: isCurrentEmergency ? "#dc2626" : "#16a34a", marginBottom: "6px" }}>
                  <span style={{ transform: isCurrentEmergency && pulseAnim ? "scale(1.2)" : "scale(1)", transition: "transform 0.3s" }}>⚠️</span> 
                  {isCurrentEmergency ? "Status Darurat Aktif!" : "Kondisi Normal"}
                </div>
                <div style={{ fontSize: "12px", color: "#4b5563", marginBottom: "10px" }}>
                  {isCurrentEmergency ? `Alarm darurat aktif di wilayah ${current.nama}.` : "Tidak ada laporan darurat aktif."}
                </div>
                <button 
                  onClick={handleToggleEmergency}
                  style={{ width: "100%", background: isCurrentEmergency ? "#ef4444" : "#16a34a", color: "#fff", border: "none", padding: "8px", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer", transition: "0.2s" }}
                >
                  {isCurrentEmergency ? "Matikan Alarm" : "Aktifkan Siaga"}
                </button>
              </div>

              {/* Toggle Filters */}
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { key: "batas", label: "Batas RW & RT", icon: "🗺️" },
                  { key: "fasilitas", label: "Fasilitas Umum", icon: "🏛️" },
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

              {/* 1. MARKER RT */}
              {filters.batas && (
                <>
                  {[
                    { id: "rt01", label: "RT 01", top: "70%", left: "22%" },
                    { id: "rt02", label: "RT 02", top: "45%", left: "15%" },
                    { id: "rt03", label: "RT 03", top: "63%", left: "50%" },
                    { id: "rt04", label: "RT 04", top: "37%", left: "43%" },
                    { id: "rt05", label: "RT 05", top: "56%", left: "88%" },
                    { id: "rt06", label: "RT 06", top: "43%", left: "86%" },
                    { id: "rt07", label: "RT 07", top: "27%", left: "71%" },
                  ].map((rtItem) => {
                    const data = rtData[rtItem.id];
                    const isActive = activeRT === rtItem.id && selectedItem.type === "rt";
                    const isAlarmRT = emergencyRT === rtItem.id;

                    let bgColor = data.warna;
                    if (isAlarmRT) {
                      bgColor = "#dc2626";
                    } else if (isActive) {
                      bgColor = "#2563eb";
                    }

                    return (
                      <div 
                        key={rtItem.id}
                        onClick={() => handleSelectRT(rtItem.id)} 
                        title={`Klik untuk lihat detail ${rtItem.label}`} 
                        style={{ 
                          position: "absolute", 
                          top: rtItem.top, 
                          left: rtItem.left, 
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
                          background: bgColor, 
                          color: "#fff", 
                          padding: "5px 10px", 
                          borderRadius: "8px", 
                          fontSize: "10px", 
                          fontWeight: "bold", 
                          boxShadow: isAlarmRT && pulseAnim ? "0 0 15px #dc2626" : "0 4px 10px rgba(0,0,0,0.3)", 
                          border: "2px solid #fff", 
                          whiteSpace: "nowrap" 
                        }}>
                          📍 {rtItem.label} {isAlarmRT ? "⚠️" : ""}
                        </div>
                        <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `7px solid ${bgColor}`, marginTop: "-1px" }}></div>
                      </div>
                    );
                  })}
                </>
              )}

              {/* 2. MARKER FASILITAS UMUM */}
              {filters.fasilitas && (
                <>
                  {[
                    { title: "SDN Gumuruh", label: "🏫 SDN Gumuruh", top: "60%", left: "38%", bg: "#059669", kategori: "Pendidikan", penanggungJawab: "Bpk. Drs. H. Dadang", kontak: "0812-1122-3344" },
                    { title: "Gedung GSG", label: "🏢 Gedung GSG", top: "35%", left: "16%", bg: "#4f46e5", kategori: "Aula Warga / Serbaguna", penanggungJawab: "Bpk. Cepi Iskandar", kontak: "0813-2233-5566" },
                    { title: "Masjid Al-Hidayah", label: "🕌 Masjid", top: "50%", left: "55%", bg: "#0d9488", kategori: "Tempat Ibadah", penanggungJawab: "Ust. Solihin", kontak: "0815-4455-7788" },
                    { title: "Masjid Al-Barokah RT 02", label: "🕌 Masjid", top: "50%", left: "21%", bg: "#0d9488", kategori: "Tempat Ibadah", penanggungJawab: "Ust. M. Ridwan", kontak: "0818-7788-9900" },
                    { title: "Masjid Al-Mubarok RT 05", label: "🕌 Masjid", top: "45%", left: "75%", bg: "#0d9488", kategori: "Tempat Ibadah", penanggungJawab: "Ust. Hasan Basri", kontak: "0812-6677-8899" },
                  ].map((f, i) => {
                    const isSelected = selectedItem.title === f.label && selectedItem.type === "fasilitas";
                    return (
                      <div 
                        key={i} 
                        onClick={() => handleSelectFasilitas(f)}
                        title={`Klik info ${f.title}`} 
                        style={{ position: "absolute", top: f.top, left: f.left, transform: `translate(-50%, -100%) ${isSelected ? "scale(1.1)" : "scale(1)"}`, cursor: "pointer", zIndex: isSelected ? 5 : 2, display: "flex", flexDirection: "column", alignItems: "center", transition: "transform 0.2s" }}
                      >
                        <div style={{ 
                          background: f.bg, 
                          color: "#fff", 
                          padding: "5px 10px", 
                          borderRadius: "8px", 
                          fontSize: "10px", 
                          fontWeight: "bold", 
                          border: "2px solid #ffffff", 
                          boxShadow: pulseAnim ? `0 0 10px ${f.bg}` : "0 4px 10px rgba(0,0,0,0.3)", 
                          whiteSpace: "nowrap"
                        }}>
                          {f.label}
                        </div>
                        <div style={{ width: 0, height: 0, borderLeft: "5px solid transparent", borderRight: "5px solid transparent", borderTop: `7px solid ${f.bg}`, marginTop: "-1px" }}></div>
                      </div>
                    );
                  })}
                </>
              )}

              {/* 3. MARKER CCTV PENGAWAS */}
              {filters.cctv && (
                <>
                  {[
                    { title: "CCTV-01", top: "48%", left: "35%", lokasi: "Simpang Utama RT 03", resolusi: "1080p Full HD", ip: "192.168.1.101" },
                    { title: "CCTV-02", top: "68%", left: "48%", lokasi: "Pos Satkamling RT 01", resolusi: "1080p Full HD", ip: "192.168.1.102" },
                    { title: "CCTV-03", top: "35%", left: "73%", lokasi: "Gerbang Komplek RT 07", resolusi: "4K Ultra HD", ip: "192.168.1.103" },
                    { title: "CCTV-04", top: "38%", left: "14%", lokasi: "Area GSG & Lapangan", resolusi: "1080p Full HD", ip: "192.168.1.104" },
                    { title: "CCTV-05", top: "50%", left: "80%", lokasi: "Perbatasan RT 05 / 06", resolusi: "1080p Full HD", ip: "192.168.1.105" },
                  ].map((c, i) => {
                    const isSelected = selectedItem.title === c.title && selectedItem.type === "cctv";
                    return (
                      <div 
                        key={i} 
                        onClick={() => handleSelectCCTV(c)}
                        title={`Klik info ${c.title}`} 
                        style={{ position: "absolute", top: c.top, left: c.left, transform: `translate(-50%, -100%) ${isSelected ? "scale(1.1)" : "scale(1)"}`, cursor: "pointer", zIndex: isSelected ? 5 : 3, display: "flex", flexDirection: "column", alignItems: "center", transition: "transform 0.2s" }}
                      >
                        <div style={{ 
                          background: "#0f172a", 
                          color: "#38bdf8", 
                          padding: "4px 8px", 
                          borderRadius: "6px", 
                          fontSize: "9px", 
                          fontWeight: "bold", 
                          border: "1px solid #38bdf8", 
                          boxShadow: pulseAnim ? "0 0 10px rgba(56, 189, 248, 0.8)" : "0 2px 6px rgba(0,0,0,0.4)", 
                          whiteSpace: "nowrap"
                        }}>
                          📷 {c.title}
                        </div>
                        <div style={{ width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "6px solid #0f172a", marginTop: "-1px" }}></div>
                      </div>
                    );
                  })}
                </>
              )}

              {/* 4. MARKER PJU / PENERANGAN */}
              {filters.pju && (
                <>
                  {[
                    { title: "PJU-A1", top: "59%", left: "25%", jenis: "LED 50W Solar Cell", daya: "50 Watt", statusLampu: "Menyala Normal" },
                    { title: "PJU-A2", top: "65%", left: "59%", jenis: "LED 50W Solar Cell", daya: "50 Watt", statusLampu: "Menyala Normal" },
                    { title: "PJU-A3", top: "56%", left: "79%", jenis: "LED 80W PLN", daya: "80 Watt", statusLampu: "Menyala Normal" },
                    { title: "PJU-A4", top: "41%", left: "45%", jenis: "LED 50W Solar Cell", daya: "50 Watt", statusLampu: "Menyala Normal" },
                    { title: "PJU-A5", top: "27%", left: "80%", jenis: "LED 80W PLN", daya: "80 Watt", statusLampu: "Menyala Normal" },
                  ].map((p, i) => {
                    const isSelected = selectedItem.title === p.title && selectedItem.type === "pju";
                    return (
                      <div 
                        key={i} 
                        onClick={() => handleSelectPJU(p)}
                        title={`Klik info ${p.title}`} 
                        style={{ position: "absolute", top: p.top, left: p.left, transform: `translate(-50%, -100%) ${isSelected ? "scale(1.1)" : "scale(1)"}`, cursor: "pointer", zIndex: isSelected ? 5 : 3, display: "flex", flexDirection: "column", alignItems: "center", transition: "transform 0.2s" }}
                      >
                        <div style={{ 
                          background: "#f59e0b", 
                          color: "#fff", 
                          padding: "4px 8px", 
                          borderRadius: "6px", 
                          fontSize: "9px", 
                          fontWeight: "bold", 
                          border: "1px solid #fff", 
                          boxShadow: pulseAnim ? "0 0 10px rgba(245, 158, 11, 0.8)" : "0 2px 6px rgba(0,0,0,0.4)", 
                          whiteSpace: "nowrap"
                        }}>
                          💡 {p.title}
                        </div>
                        <div style={{ width: 0, height: 0, borderLeft: "4px solid transparent", borderRight: "4px solid transparent", borderTop: "6px solid #f59e0b", marginTop: "-1px" }}></div>
                      </div>
                    );
                  })}
                </>
              )}

            </div>

          </div>

          {/* KOLOM 3: SIDEBAR DETAIL ITEM YANG DIPILIH */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", display: "flex", flexDirection: "column", gap: "20px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)" }}>
            
            {/* Header Informasi Terpilih */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", borderBottom: "1px solid #f1f5f9", paddingBottom: "16px" }}>
              <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", overflow: "hidden", border: "2px solid #3b82f6" }}>
                {selectedItem.type === "rt" ? "👨‍💼" : selectedItem.type === "fasilitas" ? "🏛️" : selectedItem.type === "cctv" ? "📷" : "💡"}
              </div>
              <div>
                <div style={{ fontSize: "11px", fontWeight: "700", color: "#3b82f6", textTransform: "uppercase" }}>
                  {selectedItem.type === "rt" ? `KETUA ${selectedItem.title}` : selectedItem.subtitle || "DETAIL INFRASTRUKTUR"}
                </div>
                <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>
                  {selectedItem.ketua ? selectedItem.ketua.nama : selectedItem.title}
                </div>
                {selectedItem.ketua && (
                  <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px" }}>📞 {selectedItem.ketua.kontak}</div>
                )}
              </div>
            </div>

            {/* List Detail Atribut */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {selectedItem.details.map((stat, idx) => (
                <div key={idx} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8fafc", padding: "10px 14px", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                  <span style={{ fontSize: "13px", color: "#4b5563", display: "flex", alignItems: "center", gap: "8px" }}>{stat.icon} {stat.label}</span>
                  <span style={{ fontSize: "14px", fontWeight: "700", color: "#0f172a" }}>{stat.val}</span>
                </div>
              ))}

              {/* Status / Kondisi */}
              {selectedItem.status && (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#f8fafc", padding: "10px 14px", borderRadius: "10px", border: "1px solid #f1f5f9" }}>
                  <span style={{ fontSize: "13px", color: "#4b5563", display: "flex", alignItems: "center", gap: "8px" }}>🛡️ Status Operasional</span>
                  <span style={{ 
                    fontSize: "13px", 
                    fontWeight: "700", 
                    color: selectedItem.status.type === "darurat" ? "#dc2626" : "#16a34a", 
                    background: selectedItem.status.type === "darurat" ? "#fef2f2" : "#f0fdf4", 
                    padding: "2px 8px", 
                    borderRadius: "6px" 
                  }}>
                    {selectedItem.status.label}
                  </span>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}