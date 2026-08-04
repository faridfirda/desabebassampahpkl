import React, { useState } from "react";
import "./UMKM.css";

export default function UMKM() {
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
      deskripsi: "Produk kreatif hasil karya daur ulang warga.",
      gambar: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=600&q=80",
      kontakWA: "6281234567890"
    }
  ]);

  return (
    <section className="umkm-section">
      <h2>🏪 UMKM Warga</h2>

      <p className="subtitle">
        Kenali dan dukung usaha warga RW 08 Cibangkong.
      </p>

      <div className="umkm-container">
        {umkm.map((item: any, index: number) => (
          <div className="umkm-card" key={index}>
            <img 
              src={item.gambar} 
              alt={item.nama} 
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />

            <div className="umkm-content">
              <h3>{item.nama}</h3>

              <span>
                🏷️ {item.jenis}
              </span>

              <p>
                📍 {item.alamat}
              </p>

              <p>
                {item.deskripsi}
              </p>

              <a
                href={`https://wa.me/${item.kontakWA}?text=Halo%20saya%20warga%20RW%2008%20mau%20tanya%20produk%20${encodeURIComponent(item.nama)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  padding: "8px 16px",
                  backgroundColor: "#16a34a",
                  color: "#ffffff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "14px",
                  textAlign: "center"
                }}
              >
                💬 Hubungi Penjual
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}