import { useState, useEffect } from "react";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [berita, setBerita] = useState(() => {
    const saved = localStorage.getItem("rw08_berita");
    return saved ? JSON.parse(saved) : [
      {
        judul: "Kerja Bakti RW 08",
        isi: "Kerja bakti akan dilaksanakan hari Minggu pukul 07.00 WIB.",
      },
    ];
  });

  const [kegiatan, setKegiatan] = useState(() => {
    const saved = localStorage.getItem("rw08_kegiatan");
    return saved ? JSON.parse(saved) : [
      {
        nama: "Senam Pagi Bersama",
        waktu: "Minggu 07.00 WIB",
        lokasi: "Lapangan RW 08",
      },
    ];
  });

  const [umkm, setUmkm] = useState([
    {
      nama: "Warung Bu Ani",
      jenis: "Kuliner",
    },
  ]);

  const [aparat, setAparat] = useState([
    {
      nama: "Budi Santoso",
      jabatan: "Ketua RT 01",
    },
  ]);

  const [cctv, setCctv] = useState([
    { lokasi: "Gerbang RW 08", status: "Aktif" },
    { lokasi: "Pos Jaga RT 01", status: "Aktif" },
    { lokasi: "GSG RT 02", status: "Gangguan" },
    { lokasi: "Masjid Al-Manar", status: "Aktif" },
    { lokasi: "SDN 028 Gumuruh", status: "Non-aktif" },
  ]);

  const [peta, setPeta] = useState([
    {
      nama: "Balai RW 08",
      lokasi: "Cibangkong",
    },
  ]);

  // State Modal (Pop-up Input & Edit)
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModalTambah = (type: string) => {
    setEditIndex(null);
    setFormData(type === "cctv" ? { status: "Aktif" } : {});
    setActiveModal(type);
  };

  const openModalEdit = (type: string, index: number, item: any) => {
    setEditIndex(index);
    setFormData({ ...item });
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
    setEditIndex(null);
    setFormData({});
  };

  const simpanData = (e: React.FormEvent) => {
    e.preventDefault();

    if (activeModal === "berita") {
      const updated = [...berita];
      const dataBaru = { judul: formData.judul || "", isi: formData.isi || "", tanggal: formData.tanggal || "Terbaru" };
      if (editIndex !== null) updated[editIndex] = dataBaru;
      else updated.push(dataBaru);
      setBerita(updated);
      localStorage.setItem("rw08_berita", JSON.stringify(updated));
    } else if (activeModal === "kegiatan") {
      const updated = [...kegiatan];
      const dataBaru = { nama: formData.nama || "", waktu: formData.waktu || "", lokasi: formData.lokasi || "" };
      if (editIndex !== null) updated[editIndex] = dataBaru;
      else updated.push(dataBaru);
      setKegiatan(updated);
      localStorage.setItem("rw08_kegiatan", JSON.stringify(updated));
    } else if (activeModal === "peta") {
      const updated = [...peta];
      const dataBaru = { nama: formData.nama || "", lokasi: formData.lokasi || "" };
      if (editIndex !== null) updated[editIndex] = dataBaru;
      else updated.push(dataBaru);
      setPeta(updated);
    } else if (activeModal === "aparat") {
      const updated = [...aparat];
      const dataBaru = { nama: formData.nama || "", jabatan: formData.jabatan || "" };
      if (editIndex !== null) updated[editIndex] = dataBaru;
      else updated.push(dataBaru);
      setAparat(updated);
    } else if (activeModal === "umkm") {
      const updated = [...umkm];
      const dataBaru = { nama: formData.nama || "", jenis: formData.jenis || "" };
      if (editIndex !== null) updated[editIndex] = dataBaru;
      else updated.push(dataBaru);
      setUmkm(updated);
    } else if (activeModal === "cctv") {
      const updated = [...cctv];
      const dataBaru = { lokasi: formData.lokasi || "", status: formData.status || "Aktif" };
      if (editIndex !== null) updated[editIndex] = dataBaru;
      else updated.push(dataBaru);
      setCctv(updated);
    }

    closeModal();
  };

  const hapusData = (type: string, index: number) => {
    if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      if (type === "berita") {
        const updated = berita.filter((_, i) => i !== index);
        setBerita(updated);
        localStorage.setItem("rw08_berita", JSON.stringify(updated));
      } else if (type === "kegiatan") {
        const updated = kegiatan.filter((_, i) => i !== index);
        setKegiatan(updated);
        localStorage.setItem("rw08_kegiatan", JSON.stringify(updated));
      } else if (type === "peta") setPeta(peta.filter((_, i) => i !== index));
      else if (type === "aparat") setAparat(aparat.filter((_, i) => i !== index));
      else if (type === "umkm") setUmkm(umkm.filter((_, i) => i !== index));
      else if (type === "cctv") setCctv(cctv.filter((_, i) => i !== index));
    }
  };

  const logout = () => {
    window.location.href = "/";
  };

  const getStatusBadge = (status: string) => {
    if (status === "Aktif") return "🟢 Aktif";
    if (status === "Gangguan") return "🟡 Gangguan";
    return "🔴 Non-aktif";
  };

  // Komponen Tombol Icon Edit & Hapus Menggunakan Inline SVG
  const ActionButtons = ({ type, index, item }: { type: string; index: number; item: any }) => (
    <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
      {/* Icon Edit */}
      <button
        style={btnIconEditStyle}
        title="Edit Data"
        onClick={() => openModalEdit(type, index, item)}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      </button>

      {/* Icon Hapus */}
      <button
        style={btnIconHapusStyle}
        title="Hapus Data"
        onClick={() => hapusData(type, index)}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
        </svg>
      </button>
    </div>
  );

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Kelola seluruh data website RW 08</p>
        </div>

        <button className="logout" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="dashboard-grid">
        {/* Statistik */}
        <div className="card">
          <h2>📊 Statistik</h2>
          <div className="stat-box">
            <h3 style={{ color: "#2563eb", fontSize: "32px", margin: 0, fontWeight: "bold" }}>{berita.length}</h3>
            <p style={{ color: "#475569", margin: 0, fontSize: "13px", fontWeight: "600" }}>Total Berita</p>
          </div>
          <div className="stat-box">
            <h3 style={{ color: "#2563eb", fontSize: "32px", margin: 0, fontWeight: "bold" }}>{kegiatan.length}</h3>
            <p style={{ color: "#475569", margin: 0, fontSize: "13px", fontWeight: "600" }}>Total Kegiatan</p>
          </div>
          <div className="stat-box">
            <h3 style={{ color: "#2563eb", fontSize: "32px", margin: 0, fontWeight: "bold" }}>{umkm.length}</h3>
            <p style={{ color: "#475569", margin: 0, fontSize: "13px", fontWeight: "600" }}>Total UMKM</p>
          </div>
          <div className="stat-box">
            <h3 style={{ color: "#2563eb", fontSize: "32px", margin: 0, fontWeight: "bold" }}>{cctv.length}</h3>
            <p style={{ color: "#475569", margin: 0, fontSize: "13px", fontWeight: "600" }}>Total CCTV</p>
          </div>
          <div className="stat-box">
            <h3 style={{ color: "#2563eb", fontSize: "32px", margin: 0, fontWeight: "bold" }}>{aparat.length}</h3>
            <p style={{ color: "#475569", margin: 0, fontSize: "13px", fontWeight: "600" }}>Total Aparat</p>
          </div>
        </div>

        {/* Berita */}
        <div className="card">
          <h2>📰 Berita</h2>
          <button onClick={() => openModalTambah("berita")}>+ Tambah Berita</button>
          {berita.map((item: any, index: number) => (
            <div className="item" key={index} style={{ backgroundColor: "#ffffff" }}>
              <div style={itemHeaderStyle}>
                <h3 style={{ color: "#0f172a", margin: 0, fontSize: "16px", fontWeight: "bold" }}>{item.judul}</h3>
                <ActionButtons type="berita" index={index} item={item} />
              </div>
              <p style={{ color: "#475569", margin: "6px 0 0 0", fontSize: "14px" }}>{item.isi}</p>
            </div>
          ))}
        </div>

        {/* Kegiatan */}
        <div className="card">
          <h2>🎉 Kegiatan</h2>
          <button onClick={() => openModalTambah("kegiatan")}>+ Tambah Kegiatan</button>
          {kegiatan.map((item: any, index: number) => (
            <div className="item" key={index} style={{ backgroundColor: "#ffffff" }}>
              <div style={itemHeaderStyle}>
                <h3 style={{ color: "#0f172a", margin: 0, fontSize: "16px", fontWeight: "bold" }}>{item.nama}</h3>
                <ActionButtons type="kegiatan" index={index} item={item} />
              </div>
              <p style={{ color: "#475569", margin: "6px 0 0 0", fontSize: "14px" }}>⏰ {item.waktu}</p>
              <p style={{ color: "#475569", margin: "2px 0 0 0", fontSize: "14px" }}>📍 {item.lokasi}</p>
            </div>
          ))}
        </div>

        {/* Peta */}
        <div className="card">
          <h2>🗺️ Peta Interaktif</h2>
          <button onClick={() => openModalTambah("peta")}>+ Tambah Lokasi</button>
          {peta.map((item, index) => (
            <div className="item" key={index} style={{ backgroundColor: "#ffffff" }}>
              <div style={itemHeaderStyle}>
                <h3 style={{ color: "#0f172a", margin: 0, fontSize: "16px", fontWeight: "bold" }}>{item.nama}</h3>
                <ActionButtons type="peta" index={index} item={item} />
              </div>
              <p style={{ color: "#475569", margin: "6px 0 0 0", fontSize: "14px" }}>{item.lokasi}</p>
            </div>
          ))}
        </div>

        {/* Aparat */}
        <div className="card">
          <h2>👮 Aparat</h2>
          <button onClick={() => openModalTambah("aparat")}>+ Tambah Aparat</button>
          {aparat.map((item, index) => (
            <div className="item" key={index} style={{ backgroundColor: "#ffffff" }}>
              <div style={itemHeaderStyle}>
                <h3 style={{ color: "#0f172a", margin: 0, fontSize: "16px", fontWeight: "bold" }}>{item.nama}</h3>
                <ActionButtons type="aparat" index={index} item={item} />
              </div>
              <p style={{ color: "#475569", margin: "6px 0 0 0", fontSize: "14px" }}>{item.jabatan}</p>
            </div>
          ))}
        </div>

        {/* UMKM */}
        <div className="card">
          <h2>🏪 UMKM</h2>
          <button onClick={() => openModalTambah("umkm")}>+ Tambah UMKM</button>
          {umkm.map((item, index) => (
            <div className="item" key={index} style={{ backgroundColor: "#ffffff" }}>
              <div style={itemHeaderStyle}>
                <h3 style={{ color: "#0f172a", margin: 0, fontSize: "16px", fontWeight: "bold" }}>{item.nama}</h3>
                <ActionButtons type="umkm" index={index} item={item} />
              </div>
              <p style={{ color: "#475569", margin: "6px 0 0 0", fontSize: "14px" }}>{item.jenis}</p>
            </div>
          ))}
        </div>

        {/* CCTV */}
        <div className="card">
          <h2>📹 CCTV</h2>
          <button onClick={() => openModalTambah("cctv")}>+ Tambah CCTV</button>
          {cctv.map((item, index) => (
            <div className="item" key={index} style={{ backgroundColor: "#ffffff" }}>
              <div style={itemHeaderStyle}>
                <h3 style={{ color: "#0f172a", margin: 0, fontSize: "16px", fontWeight: "bold" }}>{item.lokasi}</h3>
                <ActionButtons type="cctv" index={index} item={item} />
              </div>
              <p style={{ color: "#475569", margin: "6px 0 0 0", fontSize: "14px" }}>Status: {getStatusBadge(item.status)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL INPUT */}
      {activeModal && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h3 style={{ marginTop: 0, color: "#0f172a" }}>
              {editIndex !== null ? "Edit" : "Tambah"} Data {activeModal.toUpperCase()}
            </h3>
            <form onSubmit={simpanData}>
              {activeModal === "berita" && (
                <>
                  <input type="text" name="judul" placeholder="Judul Berita" value={formData.judul || ""} required onChange={handleInputChange} style={inputStyle} />
                  <textarea name="isi" placeholder="Isi Berita" value={formData.isi || ""} required onChange={handleInputChange} style={{ ...inputStyle, height: "80px" }} />
                </>
              )}
              {activeModal === "kegiatan" && (
                <>
                  <input type="text" name="nama" placeholder="Nama Kegiatan" value={formData.nama || ""} required onChange={handleInputChange} style={inputStyle} />
                  <input type="text" name="waktu" placeholder="Waktu (contoh: Minggu 07.00)" value={formData.waktu || ""} required onChange={handleInputChange} style={inputStyle} />
                  <input type="text" name="lokasi" placeholder="Lokasi" value={formData.lokasi || ""} required onChange={handleInputChange} style={inputStyle} />
                </>
              )}
              {activeModal === "peta" && (
                <>
                  <input type="text" name="nama" placeholder="Nama Lokasi" value={formData.nama || ""} required onChange={handleInputChange} style={inputStyle} />
                  <input type="text" name="lokasi" placeholder="Alamat / Deskripsi Lokasi" value={formData.lokasi || ""} required onChange={handleInputChange} style={inputStyle} />
                </>
              )}
              {activeModal === "aparat" && (
                <>
                  <input type="text" name="nama" placeholder="Nama Aparat" value={formData.nama || ""} required onChange={handleInputChange} style={inputStyle} />
                  <input type="text" name="jabatan" placeholder="Jabatan (contoh: Ketua RT 02)" value={formData.jabatan || ""} required onChange={handleInputChange} style={inputStyle} />
                </>
              )}
              {activeModal === "umkm" && (
                <>
                  <input type="text" name="nama" placeholder="Nama UMKM" value={formData.nama || ""} required onChange={handleInputChange} style={inputStyle} />
                  <input type="text" name="jenis" placeholder="Jenis (contoh: Kuliner / Jasa)" value={formData.jenis || ""} required onChange={handleInputChange} style={inputStyle} />
                </>
              )}
              {activeModal === "cctv" && (
                <>
                  <input type="text" name="lokasi" placeholder="Lokasi CCTV" value={formData.lokasi || ""} required onChange={handleInputChange} style={inputStyle} />
                  <select name="status" value={formData.status || "Aktif"} onChange={handleInputChange} style={inputStyle}>
                    <option value="Aktif">🟢 Aktif</option>
                    <option value="Gangguan">🟡 Gangguan</option>
                    <option value="Non-aktif">🔴 Non-aktif</option>
                  </select>
                </>
              )}
              <div style={{ display: "flex", gap: "10px", marginTop: "15px", justifyContent: "flex-end" }}>
                <button type="button" onClick={closeModal} style={{ padding: "8px 16px", cursor: "pointer", borderRadius: "6px", border: "1px solid #ccc", backgroundColor: "#f1f5f9", color: "#334155" }}>
                  Batal
                </button>
                <button type="submit" style={{ padding: "8px 16px", cursor: "pointer", backgroundColor: "#2563eb", color: "#fff", border: "none", borderRadius: "6px" }}>
                  {editIndex !== null ? "Update" : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// STYLING TOMBOL ICON MODERN
const itemHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "6px",
};

const btnIconEditStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px",
  backgroundColor: "#f59e0b",
  color: "#ffffff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.2s",
};

const btnIconHapusStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "6px",
  backgroundColor: "#ef4444",
  color: "#ffffff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.2s",
};

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle: React.CSSProperties = {
  background: "#ffffff",
  padding: "24px",
  borderRadius: "12px",
  width: "90%",
  maxWidth: "400px",
  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  margin: "8px 0",
  boxSizing: "border-box",
  borderRadius: "6px",
  border: "1px solid #cbd5e1",
  fontSize: "14px",
  color: "#0f172a",
};