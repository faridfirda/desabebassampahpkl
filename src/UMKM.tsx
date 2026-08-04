import React, { useState } from "react";
import "./UMKM.css";

export default function UMKM() {
  const [umkm] = useState(() => {
    const savedUmkm = localStorage.getItem("rw08_umkm");
    if (savedUmkm) {
      return JSON.parse(savedUmkm);
    }
    return [
      {
        nama: "Warung Makanan Bu Siti",
        jenis: "Kuliner",
        alamat: "Jl. RW 08 Cibangkong",
        deskripsi: "Menyediakan makanan rumahan dan jajanan warga.",
        gambar:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
      },
      {
        nama: "Toko Sembako Makmur",
        jenis: "Sembako",
        alamat: "Area RW 08 Cibangkong",
        deskripsi: "Menjual kebutuhan harian warga sekitar.",
        gambar:
          "https://images.unsplash.com/photo-1604719312566-8912e9227c6a"
      },
      {
        nama: "Kerajinan Warga RW 08",
        jenis: "Kerajinan",
        alamat: "Lingkungan RW 08",
        deskripsi: "Produk kreatif hasil karya warga.",
        gambar:
          "https://images.unsplash.com/photo-1452860606245-08befc0ff44b"
      }
    ];
  });

  return (
    <section className="umkm-section">

      <h2>🏪 UMKM Warga</h2>

      <p className="subtitle">
        Kenali dan dukung usaha warga RW 08 Cibangkong.
      </p>

      <div className="umkm-container">

        {umkm.map((item: any, index: number) => (

          <div className="umkm-card" key={index}>

            <img src={item.gambar} alt={item.nama} />

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

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}