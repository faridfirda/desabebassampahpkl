import React, { useState, useEffect } from "react";
import "./BeritaKegiatan.css";

import fotoSampah from "./sampah.jpeg";
import fotoKerjaBakti from "./kerjabakti.jpg";
import fotoSapu from "./sapu.jpg";

export default function BeritaKegiatan() {
  // 1. Inisialisasi state berita (ambil dari LocalStorage)
  const [berita, setBerita] = useState(() => {
    const savedBerita = localStorage.getItem("rw08_berita");
    if (savedBerita) {
      return JSON.parse(savedBerita);
    }
    return [
      {
        judul: "Peluncuran Resmi Program Bank Sampah RW 08",
        tanggal: "Minggu Ke-1 & Ke-3 (08.00 - 11.00 WIB)",
        isi: "Ayo sukseskan gerakan RW Bebas Sampah! Warga RW 08 Cibangkong kini dapat menyetorkan sampah anorganik terpilah untuk ditukar menjadi saldo tabungan warga di Pos RW 08.",
        gambar: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800",
      },
      {
        judul: "Sosialisasi Pemilahan Sampah & Daur Ulang Bersama PKK",
        tanggal: "20 Juli 2026",
        isi: "Pelatihan pengolahan sampah organik rumah tangga dan pemilahan botol plastik bernilai ekonomis bersama Tim PKK RW 08 Cibangkong.",
        gambar: fotoSampah,
      },
    ];
  });

  // 2. Inisialisasi state kegiatan (ambil dari LocalStorage "rw08_kegiatan" yang diinput dari Admin Dashboard)
  const [kegiatan] = useState(() => {
    const savedKegiatan = localStorage.getItem("rw08_kegiatan");
    if (savedKegiatan) {
      return JSON.parse(savedKegiatan);
    }
    return [
      {
        nama: "Kerja Bakti Membersihkan Saluran Air & Gorong-Gorong",
        waktu: "Sabtu, 07.30 WIB",
        lokasi: "Wilayah RW 08 Cibangkong",
        gambar: fotoKerjaBakti,
      },
      {
        nama: "Gotong Royong Kebersihan Lingkungan",
        waktu: "Minggu, 07.00 WIB",
        lokasi: "Pos & Area Lapangan RW 08",
        gambar: fotoSapu,
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("rw08_berita", JSON.stringify(berita));
  }, [berita]);

  return (
    <section className="berita-kegiatan" id="bank-sampah" style={{ padding: "40px 20px" }}>
      
      {/* MODUL INFORMASI BANK SAMPAH */}
      <div 
        style={{
          backgroundColor: "#f0fdf4",
          border: "1px solid #bbf7d0",
          borderRadius: "16px",
          padding: "24px",
          marginBottom: "40px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.03)"
        }}
      >
        <h2 style={{ color: "#166534", marginTop: 0, marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
          🏛️ Modul Informasi & Alur Bank Sampah RW 08
        </h2>
        
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
          <div style={{ backgroundColor: "#ffffff", padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "#0f172a" }}>⏰ Jam Operasional & Lokasi</h4>
            <p style={{ margin: 0, fontSize: "14px", color: "#475569", lineHeight: "1.5" }}>
              <strong>Waktu:</strong> Minggu Ke-1 & Ke-3 (08.00 - 11.00 WIB)<br />
              <strong>Lokasi:</strong> Pos RW 08 Cibangkong
            </p>
          </div>

          <div style={{ backgroundColor: "#ffffff", padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "#0f172a" }}>♻️ Jenis Sampah Diterima</h4>
            <p style={{ margin: 0, fontSize: "14px", color: "#475569", lineHeight: "1.5" }}>
              Anorganik bernilai jual: Plastik (Botol/Gelas PET), Kardus/Kertas, Kaleng, dan Minyak Jelantah.
            </p>
          </div>

          <div style={{ backgroundColor: "#ffffff", padding: "16px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "#0f172a" }}>🔄 Alur Penimbangan Warga</h4>
            <ol style={{ margin: 0, paddingLeft: "18px", fontSize: "13px", color: "#475569", lineHeight: "1.5" }}>
              <li>Pilah sampah kering dari rumah.</li>
              <li>Bawa ke Pos RW 08 saat operasional.</li>
              <li>Ditimbang & dicatat ke tabungan warga.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* GALERI BERITA & KEGIATAN */}
      <h2>♻️ Berita & Edukasi Lingkungan</h2>
      <div className="grid-card">
        {berita.map((item: any, index: number) => (
          <div className="card" key={index}>
            <div className="card-img-wrapper">
              <img src={item.gambar} alt={item.judul} />
            </div>

            <div className="card-content">
              <h3>{item.judul}</h3>
              <span>📅 {item.tanggal}</span>
              <p>{item.isi}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "40px" }}>🧹 Gotong Royong & Kegiatan Kebersihan</h2>
      <div className="grid-card">
        {kegiatan.map((item: any, index: number) => (
          <div className="card" key={index}>
            <div className="card-img-wrapper">
              <img src={item.gambar || (index % 2 === 0 ? fotoKerjaBakti : fotoSapu)} alt={item.nama} />
            </div>

            <div className="card-content">
              <h3>{item.nama}</h3>
              <p>⏰ {item.waktu}</p>
              <p>📍 {item.lokasi}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}