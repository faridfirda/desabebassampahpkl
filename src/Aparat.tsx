import React, { useState } from "react";
import "./Aparat.css";

export default function Aparat() {
  const [dataAparat] = useState(() => {
    const savedAparat = localStorage.getItem("rw08_aparat");
    if (savedAparat) {
      return JSON.parse(savedAparat);
    }
    return [
      {
        nama: "Ahmad Fauzi",
        jabatan: "Ketua RT 01",
        wilayah: "RT 01 / RW 08",
        foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      },
      {
        nama: "Rudi Hartono",
        jabatan: "Ketua RW 08",
        wilayah: "RW 08 Cibangkong",
        foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      },
      {
        nama: "Dedi Setiawan",
        jabatan: "Lurah Cibangkong",
        wilayah: "Kelurahan Cibangkong",
        foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      },
      {
        nama: "Sertu Andi Pratama",
        jabatan: "Babinsa",
        wilayah: "Koramil Batununggal / Cibangkong",
        foto: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
      },
      {
        nama: "Bripka Budi Santoso",
        jabatan: "Bhabinkamtibmas",
        wilayah: "Polsek Batununggal",
        foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
      },
    ];
  });

  return (
    <section className="aparat-section">
      <h2>Aparat Wilayah RW 08</h2>
      <p className="subtitle">
        Pengurus RT, RW, dan Aparat Keamanan yang bertugas di wilayah RW 08 Cibangkong
      </p>

      <div className="aparat-container">
        {dataAparat.map((item: any, index: number) => (
          <div className="aparat-card" key={index}>
            <img src={item.foto || item.gambar} alt={item.nama} />

            <h3>{item.nama}</h3>
            <p>{item.jabatan}</p>
            <span>{item.wilayah}</span>
          </div>
        ))}
      </div>
    </section>
  );
}