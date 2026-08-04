import { useState } from "react";
import "./CCTV.css";

// Import 5 foto lokasi utama
import gerbangImg from "./gerbang.jpeg";
import posJagaImg from "./PosJagakeamanan_RT01_RW08.jpeg";
import gsgImg from "./GSG_RT02_RW08.jpeg";
import masjidImg from "./MasjidAlManar_RT02_RW08.jpeg";
import sdnImg from "./SDN028Gumuruh_RW08_RT01.jpeg";

export default function CCTV() {

  const [search, setSearch] = useState("");
  // State untuk menyimpan data gambar yang sedang diklik/di-preview
  const [selectedImage, setSelectedImage] = useState<{ foto: string; nama: string } | null>(null);

  const cctv = [
    {
      nama: "CCTV Gerbang",
      lokasi: "Gerbang RW 08",
      status: "Online",
      foto: gerbangImg
    },
    {
      nama: "CCTV Pos Jaga Keamanan",
      lokasi: "RT 01 / RW 08",
      status: "Online",
      foto: posJagaImg
    },
    {
      nama: "CCTV GSG",
      lokasi: "RT 02 / RW 08",
      status: "Online",
      foto: gsgImg
    },
    {
      nama: "CCTV Masjid Al-Manar",
      lokasi: "RT 02 / RW 08",
      status: "Online",
      foto: masjidImg
    },
    {
      nama: "CCTV SDN 028 Gumuruh",
      lokasi: "RT 01 / RW 08",
      status: "Online",
      foto: sdnImg
    }
  ];

  const filteredCCTV = cctv.filter((item) =>
    item.nama.toLowerCase().includes(search.toLowerCase()) ||
    item.lokasi.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="cctv-section">

      <h2>📹 CCTV RW 08</h2>

      <p className="subtitle">
        Pantau keamanan lingkungan RW 08 Cibangkong.
      </p>

      <input
        className="search-cctv"
        type="text"
        placeholder="Cari CCTV..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="cctv-container">

        {filteredCCTV.map((item, index) => (

          <div 
            className="cctv-card" 
            key={index}
            style={{ width: "240px", flexShrink: 0, cursor: "pointer" }}
            onClick={() => setSelectedImage({ foto: item.foto, nama: item.nama })}
          >

            <img
              src={item.foto}
              alt={item.nama}
              style={{ width: "100%", height: "135px", objectFit: "cover" }}
            />

            <div className="cctv-content">

              <h3>{item.nama}</h3>

              <p>
                📍 {item.lokasi}
              </p>

              <span>
                🟢 {item.status}
              </span>

            </div>

          </div>

        ))}

      </div>

      {/* POPUP / MODAL SAAT GAMBAR DIKLIK */}
      {selectedImage && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "20px"
          }}
          onClick={() => setSelectedImage(null)} // Klik di mana saja untuk menutup
        >
          <div style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}>
            <img 
              src={selectedImage.foto} 
              alt={selectedImage.nama} 
              style={{ width: "100%", maxHeight: "80vh", borderRadius: "8px", objectFit: "contain" }}
            />
            <p style={{ color: "#fff", textAlign: "center", marginTop: "10px", fontSize: "16px", fontWeight: "bold" }}>
              {selectedImage.nama} (Klik di mana saja untuk menutup)
            </p>
          </div>
        </div>
      )}

    </section>
  );
} 