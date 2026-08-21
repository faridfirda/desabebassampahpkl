import React, { useState } from "react";
import "./UMKM.css";

// Import Gambar Lokal
import cerminSendokImg from "./cerminsendok.jpg";
import daurUlangImg from "./daurulang.jpeg";
import tasBelanjaImg from "./tasbelanja.jpg";
import sampahBotolImg from "./sampahbotol.jpg";
import potImg from "./pot.jpeg";
import tatakanImg from "./tatakan.jpeg";
import manggotImg from "./manggot.jpg";
import komposImg from "./kompos.jpg";

export default function UMKM() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // Data UMKM / Unit Usaha Warga
  const [umkm] = useState([
    {
      nama: "Pusat Budidaya Mangot RW 08",
      jenis: "UMKM Mandiri",
      alamat: "Jl. RW 08 Cibangkong",
      deskripsi: "Pusat budidaya mangot (maggot BSF) mandiri yang dikelola warga untuk pengolahan sampah sekaligus produk ekonomi produktif.",
      gambar: manggotImg,
      kontakWA: "6281234567890",
      pemilik: "Bpk. Dadan (Ketua UMKM Mangot)",
      jamOperasional: "08:00 - 15:00 WIB",
      tipe: "unit"
    },
    {
      nama: "botol plastik",
      jenis: "Pengolahan Sampah Organik",
      alamat: "Area Samping Pos Ronda RW 08",
      deskripsi: "Pusat pengolahan dan pembuatan kompos organik berkualitas tinggi dari sampah sisa rumah tangga warga.",
      gambar: sampahBotolImg,
      kontakWA: "6281234567890",
      pemilik: "Bpk. Hendra (Koordinator Lingkungan)",
      jamOperasional: "07:00 - 17:00 WIB",
      tipe: "unit"
    },
    {
      nama: "Eco-Craft Sendok Plastik",
      jenis: "UMKM Kerajinan",
      alamat: "Lingkungan RW 08",
      deskripsi: "Mengubah limbah sendok plastik sekali pakai dan botol bekas menjadi cermin hias serta dekorasi estetis.",
      gambar: cerminSendokImg,
      kontakWA: "6281234567890",
      pemilik: "Kelompok Pemuda & PKK RW 08",
      jamOperasional: "09:00 - 16:00 WIB",
      tipe: "unit"
    }
  ]);

  const [pahlawan] = useState([
    { rank: 1, nama: "Keluarga Bpk. Budi", rt: "RT 02", jumlah: "45 kg", status: "Terpilih" },
    { rank: 2, nama: "Ibu Siti Nurbaya", rt: "RT 05", jumlah: "38 kg" },
    { rank: 3, nama: "Warung Teh Ani", rt: "RT 01", jumlah: "32 kg" }
  ]);

  const [pasarKreatif] = useState([
    {
      nama: "Tas Belanja Anyam",
      pembuat: "Oleh: Kelompok PKK RT 04",
      harga: "Rp 45.000",
      kategori: "Upcycle",
      gambar: tasBelanjaImg,
      deskripsi: "Tas belanja ramah lingkungan hasil anyaman limbah plastik pilihan yang kuat dan tahan lama.",
      kontakWA: "6281234567890",
      tipe: "produk"
    },
    {
      nama: "Kompos",
      pembuat: "Oleh: Unit Kreatif RW 08",
      harga: "Rp 25.000",
      kategori: "Organik",
      gambar: komposImg,
      deskripsi: "Pupuk kompos organik murni yang sangat baik untuk menyuburkan tanaman pekarangan rumah.",
      kontakWA: "6281234567890",
      tipe: "produk"
    },
    {
      nama: "Pot Kertas Daur Ulang",
      pembuat: "Oleh: Pemuda Karang Taruna",
      harga: "Rp 25.000",
      kategori: "Kerajinan",
      gambar: potImg,
      deskripsi: "Pot tanaman estetik yang terbuat dari daur ulang bubur kertas koran dan kardus bekas.",
      kontakWA: "6281234567890",
      tipe: "produk"
    },
    {
      nama: "Tatakan Gelas Mozaik",
      pembuat: "Oleh: Komunitas Kreatif",
      harga: "Rp 30.000 / set",
      kategori: "Dekorasi",
      gambar: tatakanImg,
      deskripsi: "Set tatakan gelas unik dengan motif mozaik warna-warni dari pecahan tutup botol plastik daur ulang.",
      kontakWA: "6281234567890",
      tipe: "produk"
    }
  ]);

  return (
    <div className="page-wrapper">
      <div className="dashboard-container">
        
        {/* SECTION 1: AGENDA & PAHLAWAN LESTARI */}
        <div className="top-section">
          <div className="agenda-card">
            <div className="agenda-text">
              <span className="badge-agenda">Agenda Mendatang</span>
              <h2>Pelatihan Pemilahan & Daur Ulang Sampah</h2>
              <p>
                Tingkatkan keterampilan Anda dalam mengolah sampah anorganik rumah tangga
                menjadi produk kerajinan bernilai ekonomis tinggi.
              </p>
              <div className="agenda-meta">
                <span>📅 24 Okt 2026</span>
                <span>⏰ 09:00 WIB</span>
              </div>
              <div className="agenda-location">📍 SDN 028 Gumuruh</div>
            </div>
            <div className="agenda-image">
              <img src={daurUlangImg} alt="Pelatihan Daur Ulang Sampah" />
            </div>
          </div>

          <div className="pahlawan-card">
            <div className="pahlawan-header">
              <h3>🏅 Pahlawan Lestari</h3>
              <span className="bulan-tag">Bulan Ini</span>
            </div>
            <div className="pahlawan-list">
              {pahlawan.map((item, index) => (
                <div className={`pahlawan-item ${item.rank === 1 ? "rank-1" : ""}`} key={index}>
                  <div className="rank-badge">{item.rank}</div>
                  <div className="pahlawan-info">
                    <h4>{item.nama}</h4>
                    <p>{item.rt}</p>
                  </div>
                  <div className="pahlawan-score">
                    <span className="jumlah">{item.jumlah}</span>
                    {item.status && <span className="status">{item.status}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: PASAR KREATIF WARGA */}
        <section className="section-block">
          <div className="section-header">
            <div>
              <h2>Pasar Kreatif Warga</h2>
              <p className="subtitle">
                Dukung ekonomi sirkular dengan membeli produk daur ulang sampah karya warga RW 08.
              </p>
            </div>
            <a href="#toko" className="kunjungi-toko-btn">Kunjungi Toko 🛍️</a>
          </div>

          <div className="product-grid">
            {pasarKreatif.map((item, index) => (
              <div 
                key={index} 
                className="product-card"
                onClick={() => setSelectedItem(item)}
                style={{ cursor: "pointer" }}
              >
                <div className="image-wrapper" style={{ overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <img 
                    src={item.gambar} 
                    alt={item.nama} 
                    style={item.nama === "Kompos" ? { objectFit: "cover", width: "100%", height: "100%", transform: "scale(1)" } : {}} 
                  />
                  {item.kategori && <span className="badge-kategori">{item.kategori}</span>}
                </div>
                <div className="product-info">
                  <h3 className="product-nama">{item.nama}</h3>
                  <p className="product-pembuat">{item.pembuat}</p>
                  <p className="product-harga">{item.harga}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: UMKM WARGA */}
        <section className="section-block">
          <div className="section-header">
            <div>
              <h2>🏪 UMKM Warga</h2>
              <p className="subtitle">
                Daftar UMKM mandiri dan pusat daur ulang sampah anorganik warga RW 08 Cibangkong.
              </p>
            </div>
          </div>

          <div className="umkm-grid">
            {umkm.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(item)}
                className="umkm-card"
                style={{ cursor: "pointer" }}
              >
                <div className="image-wrapper" style={{ overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", background: "#f8fafc", height: "180px" }}>
                  <img 
                    src={item.gambar} 
                    alt={item.nama} 
                    style={{ objectFit: "contain", width: "85%", height: "85%" }}
                  />
                  {item.jenis && <span className="badge-kategori-umkm">{item.jenis}</span>}
                </div>

                <div className="umkm-info">
                  <h3 className="umkm-nama">{item.nama}</h3>
                  <p className="umkm-alamat">📍 {item.alamat}</p>
                  <p className="umkm-deskripsi">{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* MODAL / POP-UP DETAIL ITEM */}
      {selectedItem && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
          padding: "20px",
          boxSizing: "border-box"
        }}>
          <div style={{
            background: "#ffffff",
            borderRadius: "16px",
            maxWidth: "480px",
            width: "100%",
            overflow: "hidden",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            position: "relative",
            animation: "fadeIn 0.2s ease-out",
            maxHeight: "90vh",
            display: "flex",
            flexDirection: "column"
          }}>
            <button
              onClick={() => setSelectedItem(null)}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                background: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                fontSize: "16px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 20
              }}
            >
              ✕
            </button>

            {/* Bagian gambar di modal dibuat mundur juga menggunakan contain dan ukuran 85% */}
            <div style={{ width: "100%", height: "200px", flexShrink: 0, overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", background: "#f8fafc" }}>
              <img
                src={selectedItem.gambar}
                alt={selectedItem.nama}
                style={{ width: "85%", height: "85%", objectFit: "contain" }}
              />
            </div>

            <div style={{ padding: "24px", overflowY: "auto" }}>
              <span style={{
                background: "#f0fdf4",
                color: "#16a34a",
                fontSize: "12px",
                fontWeight: "600",
                padding: "4px 10px",
                borderRadius: "20px",
                display: "inline-block",
                marginBottom: "8px"
              }}>
                {selectedItem.tipe === "produk" ? (selectedItem.kategori || "Produk Daur Ulang") : selectedItem.jenis}
              </span>

              <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#0f172a", marginBottom: "8px" }}>
                {selectedItem.nama}
              </h3>

              <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "16px", lineHeight: "1.5" }}>
                {selectedItem.deskripsi}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#334155", marginBottom: "20px", background: "#f8fafc", padding: "12px", borderRadius: "8px" }}>
                {selectedItem.tipe === "produk" ? (
                  <>
                    <div>🛠️ <strong>Pembuat:</strong> {selectedItem.pembuat}</div>
                    <div>💰 <strong>Harga:</strong> <span style={{ color: "#16a34a", fontWeight: "bold" }}>{selectedItem.harga}</span></div>
                  </>
                ) : (
                  <>
                    <div>📍 <strong>Lokasi:</strong> {selectedItem.alamat}</div>
                    <div>👤 <strong>Penanggung Jawab:</strong> {selectedItem.pemilik}</div>
                    <div>⏰ <strong>Jam Operasional:</strong> {selectedItem.jamOperasional}</div>
                  </>
                )}
              </div>

              <a
                href={`https://wa.me/${selectedItem.kontakWA}?text=Halo%2520saya%2520warga%2520RW%252008%2520mau%2520tanya%2520terkait%2520${encodeURIComponent(selectedItem.nama)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  width: "100%",
                  background: "#22c55e",
                  color: "#fff",
                  textAlign: "center",
                  padding: "12px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  boxSizing: "border-box",
                  transition: "background 0.2s"
                }}
              >
                💬 {selectedItem.tipe === "produk" ? "Pesan / Tanya Produk" : "Hubungi Penanggung Jawab"}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}