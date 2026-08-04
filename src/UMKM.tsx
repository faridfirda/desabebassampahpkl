import React, { useState } from "react";
import "./UMKM.css";

// Import Gambar Lokal
import cerminSendokImg from "./cerminsendok.jpg";
import daurUlangImg from "./daurulang.jpeg";
import tasBelanjaImg from "./tasbelanja.jpg";
import komposImg from "./kompos.jpg";
import potImg from "./pot.jpeg";       // <-- Import pot.jpeg
import tatakanImg from "./tatakan.jpeg"; // <-- Import tatakan.jpeg

export default function UMKM() {
  // Data UMKM Warga
  const [umkm] = useState([
    {
      nama: "Warung Makanan Bu Siti",
      jenis: "Kuliner",
      alamat: "Jl. RW 08 Cibangkong",
      deskripsi: "Menyediakan makanan rumahan dan jajanan warga.",
      gambar: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
      kontakWA: "6281234567890"
    },
    {
      nama: "Toko Sembako Makmur",
      jenis: "Sembako",
      alamat: "Area RW 08 Cibangkong",
      deskripsi: "Menjual kebutuhan harian warga sekitar.",
      gambar: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=600&q=80",
      kontakWA: "6281234567890"
    },
    {
      nama: "Kerajinan Warga RW 08",
      jenis: "Kerajinan",
      alamat: "Lingkungan RW 08",
      deskripsi: "Cermin hias unik buatan tangan dari daur ulang sendok plastik.",
      gambar: cerminSendokImg,
      kontakWA: "6281234567890"
    }
  ]);

  // Data Pahlawan Lestari
  const [pahlawan] = useState([
    { rank: 1, nama: "Keluarga Bpk. Budi", rt: "RT 02", jumlah: "45 kg", status: "Terpilih" },
    { rank: 2, nama: "Ibu Siti Nurbaya", rt: "RT 05", jumlah: "38 kg" },
    { rank: 3, nama: "Warung Teh Ani", rt: "RT 01", jumlah: "32 kg" }
  ]);

  // Data Pasar Kreatif Warga
  const [pasarKreatif] = useState([
    {
      nama: "Tas Belanja Anyam",
      pembuat: "Oleh: Kelompok PKK RT 04",
      harga: "Rp 45.000",
      kategori: "Upcycle",
      gambar: tasBelanjaImg
    },
    {
      nama: "Kompos Subur Plus",
      pembuat: "Oleh: Bank Sampah Induk",
      harga: "Rp 15.000 / kg",
      kategori: "Organik",
      gambar: komposImg
    },
    {
      nama: "Pot Kertas Daur Ulang",
      pembuat: "Oleh: Pemuda Karang Taruna",
      harga: "Rp 25.000",
      kategori: "",
      gambar: potImg // <-- Pakai gambar lokal
    },
    {
      nama: "Tatakan Gelas Mozaik",
      pembuat: "Oleh: Komunitas Kreatif",
      harga: "Rp 30.000 / set",
      kategori: "",
      gambar: tatakanImg // <-- Pakai gambar lokal
    }
  ]);

  return (
    <div className="page-wrapper">
      <div className="dashboard-container">
        
        {/* SECTION 1: AGENDA & PAHLAWAN LESTARI */}
        <div className="top-section">
          
          {/* Card Agenda */}
          <div className="agenda-card">
            <div className="agenda-text">
              <span className="badge-agenda">Agenda Mendatang</span>
              <h2>Pelatihan Daur Ulang Sampah</h2>
              <p>
                Tingkatkan keterampilan Anda dalam mengolah sampah rumah tangga
                menjadi barang bernilai guna. Dipandu oleh instruktur berpengalaman
                dari bank sampah kota.
              </p>
              <div className="agenda-meta">
                <span>📅 24 Okt 2026</span>
                <span>⏰ 09:00 WIB</span>
              </div>
              
              <div className="agenda-location">
                📍 SDN 028 Gumuruh
              </div>
            </div>
            
            <div className="agenda-image">
              <img
                src={daurUlangImg}
                alt="Pelatihan Daur Ulang Sampah"
              />
            </div>
          </div>

          {/* Card Pahlawan Lestari */}
          <div className="pahlawan-card">
            <div className="pahlawan-header">
              <h3>🏅 Pahlawan Lestari</h3>
              <span className="bulan-tag">Bulan Ini</span>
            </div>
            <div className="pahlawan-list">
              {pahlawan.map((item, index) => (
                <div
                  className={`pahlawan-item ${item.rank === 1 ? "rank-1" : ""}`}
                  key={index}
                >
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
                Dukung ekonomi sirkular dengan membeli produk daur ulang karya warga RW 08.
              </p>
            </div>
            <a href="#toko" className="kunjungi-toko-btn">
              Kunjungi Toko 🛍️
            </a>
          </div>

          <div className="product-grid">
            {pasarKreatif.map((item, index) => (
              <div key={index} className="product-card">
                <div className="image-wrapper">
                  <img src={item.gambar} alt={item.nama} />
                  {item.kategori && (
                    <span className="badge-kategori">{item.kategori}</span>
                  )}
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
                Kenali dan dukung usaha warga RW 08 Cibangkong.
              </p>
            </div>
          </div>

          <div className="umkm-grid">
            {umkm.map((item, index) => (
              <a
                key={index}
                href={`https://wa.me/${item.kontakWA}?text=Halo%20saya%20warga%20RW%2008%20mau%20tanya%20produk%20${encodeURIComponent(item.nama)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="umkm-card"
              >
                <div className="image-wrapper">
                  <img src={item.gambar} alt={item.nama} />
                  {item.jenis && (
                    <span className="badge-kategori-umkm">{item.jenis}</span>
                  )}
                </div>

                <div className="umkm-info">
                  <h3 className="umkm-nama">{item.nama}</h3>
                  <p className="umkm-alamat">📍 {item.alamat}</p>
                  <p className="umkm-deskripsi">{item.deskripsi}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}