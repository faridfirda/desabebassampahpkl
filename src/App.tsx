import { useState } from "react";

import HeroHome from "./HeroHome";
import BankSampah from "./BankSampah"; // Modul Bank Sampah Baru
import InteractiveMap from "./InteractiveMap";
import Navbar from "./Navbar";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "./AdminDashboard";
import Aparat from "./Aparat";
import Statistik from "./Statistik";
import BeritaKegiatan from "./BeritaKegiatan";
import UMKM from "./UMKM";
import CCTV from "./CCTV";

export default function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  if (showLogin && !isLogin) {
    return (
      <AdminLogin
        onLogin={() => {
          setIsLogin(true);
        }}
      />
    );
  }

  if (isLogin) {
    return <AdminDashboard />;
  }

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#ffffff",
      }}
    >

      <Navbar 
        onLoginClick={() => setShowLogin(true)} 
      />

      <div style={{ height: "110px" }} />

      {/* 1. BERANDA */}
      <section id="beranda">
        <HeroHome onLoginClick={() => setShowLogin(true)} />
      </section>

      {/* 2. MODUL BANK SAMPAH (TASK 2 REVISI) */}
      <section id="bank-sampah">
        <BankSampah />
      </section>

      {/* 3. PETA INTERAKTIF */}
      <section id="peta">
        <InteractiveMap />
      </section>

      {/* 4. APARAT RW */}
      <section id="aparat">
        <Aparat />
      </section>

      {/* 5. STATISTIK LINGKUNGAN */}
      <section id="statistik">
        <Statistik />
      </section>

      {/* 6. BERITA & KEGIATAN LINGKUNGAN */}
      <section id="berita">
        <BeritaKegiatan />
      </section>

      {/* 7. LAPAK UMKM WARGA */}
      <section id="umkm">
        <UMKM />
      </section>

      {/* 8. MONITORING CCTV */}
      <section id="cctv">
        <CCTV />
      </section>

    </div>
  );
}