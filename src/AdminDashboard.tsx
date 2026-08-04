import React, { useState, useEffect } from "react";
import "./AdminDashboard.css";

interface ItemData {
  id: number;
  judul: string;
  sub?: string;
  status?: string;
}

export default function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  // State Data
  const [berita, setBerita] = useState<ItemData[]>(() => {
    const saved = localStorage.getItem("rw_berita");
    return saved ? JSON.parse(saved) : [];
  });
  const [kegiatan, setKegiatan] = useState<ItemData[]>(() => {
    const saved = localStorage.getItem("rw_kegiatan");
    return saved ? JSON.parse(saved) : [];
  });
  const [umkm, setUmkm] = useState<ItemData[]>(() => {
    const saved = localStorage.getItem("rw_umkm");
    return saved ? JSON.parse(saved) : [];
  });
  const [cctv, setCctv] = useState<ItemData[]>(() => {
    const saved = localStorage.getItem("rw_cctv");
    return saved ? JSON.parse(saved) : [];
  });

  // State Modal Form Modern
  const [showModal, setShowModal] = useState(false);
  const [jenisForm, setJenisForm] = useState("");
  const [inputJudul, setInputJudul] = useState("");
  const [inputSub, setInputSub] = useState("");

  // Sync ke LocalStorage
  useEffect(() => { localStorage.setItem("rw_berita", JSON.stringify(berita)); }, [berita]);
  useEffect(() => { localStorage.setItem("rw_kegiatan", JSON.stringify(kegiatan)); }, [kegiatan]);
  useEffect(() => { localStorage.setItem("rw_umkm", JSON.stringify(umkm)); }, [umkm]);
  useEffect(() => { localStorage.setItem("rw_cctv", JSON.stringify(cctv)); }, [cctv]);

  // Handler Logout sangkan langsung pindah ka Halaman Utama
  const handleLogoutClick = () => {
    if (onLogout) {
      onLogout();
    } else {
      window.location.href = "/";
    }
  };

  // Buka Modal Form
  const openModal = (jenis: string) => {
    setJenisForm(jenis);
    setInputJudul("");
    setInputSub("");
    setShowModal(true);
  };

  // Submit Data dari Modal Form
  const handleSimpan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputJudul.trim()) return;

    const newItem = { id: Date.now(), judul: inputJudul, sub: inputSub };

    if (jenisForm === "Berita") setBerita([...berita, newItem]);
    if (jenisForm === "Kegiatan") setKegiatan([...kegiatan, newItem]);
    if (jenisForm === "UMKM") setUmkm([...umkm, newItem]);
    if (jenisForm === "CCTV") setCctv([...cctv, { ...newItem, status: "Aktif" }]);

    // Trigger custom event sangkan komponen Hero/Home ter-update sacara otomatis
    window.dispatchEvent(new Event("local-storage-update"));

    setShowModal(false);
  };

  // Fungsi Hapus
  const handleHapus = (jenis: string, id: number) => {
    if (jenis === "Berita") setBerita(berita.filter((i) => i.id !== id));
    if (jenis === "Kegiatan") setKegiatan(kegiatan.filter((i) => i.id !== id));
    if (jenis === "UMKM") setUmkm(umkm.filter((i) => i.id !== id));
    if (jenis === "CCTV") setCctv(cctv.filter((i) => i.id !== id));

    window.dispatchEvent(new Event("local-storage-update"));
  };

  return (
    <div className="admin-container" style={{ minHeight: "100vh", backgroundColor: "#f8fafc", padding: "30px 20px" }}>
      
      {/* HEADER */}
      <div className="admin-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
        <div>
          <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#0f172a", margin: 0 }}>Admin Dashboard</h1>
          <p style={{ color: "#64748b", margin: "4px 0 0 0", fontSize: "14px" }}>Kelola seluruh data website RW 08 Cibangkong</p>
        </div>
        <button 
          className="logout" 
          onClick={handleLogoutClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 6px 15px rgba(239, 68, 68, 0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
          style={{
            backgroundColor: "#ef4444",
            color: "#ffffff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.2s ease"
          }}
        >
          🚪 Logout
        </button>
      </div>

      {/* DASHBOARD GRID */}
      <div className="dashboard-grid">
        
        {/* STATISTIK */}
        <div className="card">
          <h2>📊 Statistik</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px", marginTop: "12px" }}>
            <div className="stat-box" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "12px", borderRadius: "10px" }}>
              <h3 style={{ color: "#16a34a", margin: 0, fontSize: "22px" }}>{berita.length}</h3>
              <p style={{ margin: 0, fontSize: "12px", color: "#475569" }}>Total Berita</p>
            </div>
            <div className="stat-box" style={{ background: "#eff6ff", border: "1px solid #bfdbfe", padding: "12px", borderRadius: "10px" }}>
              <h3 style={{ color: "#2563eb", margin: 0, fontSize: "22px" }}>{kegiatan.length}</h3>
              <p style={{ margin: 0, fontSize: "12px", color: "#475569" }}>Total Kegiatan</p>
            </div>
            <div className="stat-box" style={{ background: "#fefce8", border: "1px solid #fef08a", padding: "12px", borderRadius: "10px" }}>
              <h3 style={{ color: "#ca8a04", margin: 0, fontSize: "22px" }}>{umkm.length}</h3>
              <p style={{ margin: 0, fontSize: "12px", color: "#475569" }}>Total UMKM</p>
            </div>
            <div className="stat-box" style={{ background: "#faf5ff", border: "1px solid #e9d5ff", padding: "12px", borderRadius: "10px" }}>
              <h3 style={{ color: "#9333ea", margin: 0, fontSize: "22px" }}>{cctv.length}</h3>
              <p style={{ margin: 0, fontSize: "12px", color: "#475569" }}>Total CCTV</p>
            </div>
          </div>
        </div>

        {/* BERITA */}
        <div className="card">
          <h2>📰 Berita</h2>
          <button className="btn-add" onClick={() => openModal("Berita")}>+ Tambah Berita</button>
          {berita.map((item) => (
            <div className="item" key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", transition: "transform 0.2s" }}>
              <div><h3>{item.judul}</h3><p>{item.sub}</p></div>
              <button onClick={() => handleHapus("Berita", item.id)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: "6px", padding: "6px 10px", cursor: "pointer", margin: 0 }}>🗑️</button>
            </div>
          ))}
        </div>

        {/* KEGIATAN */}
        <div className="card">
          <h2>🏃 Kegiatan</h2>
          <button className="btn-add" onClick={() => openModal("Kegiatan")}>+ Tambah Kegiatan</button>
          {kegiatan.map((item) => (
            <div className="item" key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><h3>{item.judul}</h3><p>{item.sub}</p></div>
              <button onClick={() => handleHapus("Kegiatan", item.id)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: "6px", padding: "6px 10px", cursor: "pointer", margin: 0 }}>🗑️</button>
            </div>
          ))}
        </div>

        {/* PETA INTERAKTIF */}
        <div className="card">
          <h2>🗺️ Peta Interaktif</h2>
          <div className="map" style={{ padding: "16px", borderRadius: "10px", background: "#e2e8f0", textAlign: "center", fontWeight: "600", color: "#334155" }}>
            📍 Balai RW 08 - Cibangkong
          </div>
        </div>

        {/* APARAT */}
        <div className="card">
          <h2>👨‍💼 Aparat</h2>
          <div className="item"><h3>Budi Santoso</h3><p>Ketua RT 01</p></div>
        </div>

        {/* UMKM */}
        <div className="card">
          <h2>🛍️ UMKM</h2>
          <button className="btn-add" onClick={() => openModal("UMKM")}>+ Tambah UMKM</button>
          {umkm.map((item) => (
            <div className="item" key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><h3>{item.judul}</h3><p>{item.sub}</p></div>
              <button onClick={() => handleHapus("UMKM", item.id)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: "6px", padding: "6px 10px", cursor: "pointer", margin: 0 }}>🗑️</button>
            </div>
          ))}
        </div>

        {/* CCTV */}
        <div className="card">
          <h2>📹 CCTV</h2>
          <button className="btn-add" onClick={() => openModal("CCTV")}>+ Tambah CCTV</button>
          {cctv.map((item) => (
            <div className="item" key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div><h3>{item.judul}</h3><p>Status: <span style={{ color: "#16a34a", fontWeight: "700" }}>{item.status}</span></p></div>
              <button onClick={() => handleHapus("CCTV", item.id)} style={{ background: "#ef4444", color: "#fff", border: "none", borderRadius: "6px", padding: "6px 10px", cursor: "pointer", margin: 0 }}>🗑️</button>
            </div>
          ))}
        </div>
      </div>

      {/* --- MODAL POP-UP FORM MODERN DENGAN ANIMASI SMOOTH --- */}
      {showModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(15, 23, 42, 0.6)", backdropFilter: "blur(6px)",
          display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999,
          animation: "fadeIn 0.2s ease-out"
        }}>
          <form onSubmit={handleSimpan} style={{
            backgroundColor: "#ffffff", padding: "28px", borderRadius: "16px",
            width: "90%", maxWidth: "420px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            animation: "scaleUp 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
          }}>
            <h3 style={{ margin: "0 0 16px 0", color: "#0f172a", fontSize: "20px", fontWeight: "700" }}>
              ➕ Tambah Data {jenisForm}
            </h3>

            <div style={{ marginBottom: "14px" }}>
              <label style={{ display: "block", fontSize: "13px", color: "#64748b", marginBottom: "6px", fontWeight: "600" }}>
                Judul / Nama {jenisForm}
              </label>
              <input
                type="text"
                required
                placeholder={`Contoh Nama ${jenisForm}...`}
                value={inputJudul}
                onChange={(e) => setInputJudul(e.target.value)}
                style={{
                  width: "100%", padding: "10px 12px", borderRadius: "8px",
                  border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box", outline: "none"
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", color: "#64748b", marginBottom: "6px", fontWeight: "600" }}>
                Keterangan / Deskripsi
              </label>
              <textarea
                placeholder="Detail informasi..."
                rows={3}
                value={inputSub}
                onChange={(e) => setInputSub(e.target.value)}
                style={{
                  width: "100%", padding: "10px 12px", borderRadius: "8px",
                  border: "1px solid #cbd5e1", fontSize: "14px", boxSizing: "border-box", outline: "none", resize: "none"
                }}
              />
            </div>

            <div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: "#f1f5f9", color: "#475569", border: "none",
                  padding: "10px 18px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", margin: 0
                }}
              >
                Batal
              </button>
              <button
                type="submit"
                style={{
                  backgroundColor: "#2563eb", color: "#ffffff", border: "none",
                  padding: "10px 18px", borderRadius: "8px", fontWeight: "600", cursor: "pointer", margin: 0
                }}
              >
                Simpan Data
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}