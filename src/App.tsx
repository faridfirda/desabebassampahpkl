import { useState } from "react";

import HeroHome from "./HeroHome";
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


      {/* BERANDA */}
      <section id="beranda">
        <HeroHome />
      </section>


      {/* PETA INTERAKTIF */}
      <section id="peta">
        <InteractiveMap />
      </section>


      {/* APARAT RW */}
      <section id="aparat">
        <Aparat />
      </section>


      {/* STATISTIK */}
      <section id="statistik">
        <Statistik />
      </section>


      {/* BERITA & KEGIATAN */}
      <section id="berita">
        <BeritaKegiatan />
      </section>


      {/* UMKM */}
      <section id="umkm">
        <UMKM />
      </section>


      {/* CCTV */}
      <section id="cctv">
        <CCTV />
      </section>


    </div>
  );
}
