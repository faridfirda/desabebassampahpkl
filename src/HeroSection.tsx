import React from 'react';
import { Lock, ShieldCheck, Leaf, MapPin } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* --- Navbar --- */}
      <header className="flex items-center justify-between px-8 py-4 bg-white text-slate-900 shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-green-600 flex items-center justify-center font-bold text-xs text-white shadow">
            RW 08
          </div>
          <span className="font-bold text-lg tracking-wide">RW 08 Cibangkong</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6 font-medium text-sm text-slate-700">
          <a href="#beranda" className="text-emerald-600 font-semibold">Beranda</a>
          <a href="#peta" className="hover:text-emerald-600 transition">Peta Interaktif</a>
          <a href="#bank-sampah" className="hover:text-emerald-600 transition">Bank Sampah</a>
          <a href="#aparat" className="hover:text-emerald-600 transition">Aparat</a>
          <a href="#statistik" className="hover:text-emerald-600 transition">Statistik</a>
          <a href="#berita" className="hover:text-emerald-600 transition">Berita</a>
          <a href="#umkm" className="hover:text-emerald-600 transition">UMKM</a>
          <a href="#cctv" className="hover:text-emerald-600 transition">CCTV</a>
        </nav>

        <button className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition">
          <Lock size={16} />
          <span>Login Admin</span>
        </button>
      </header>

      {/* --- Hero Section Content --- */}
      <main className="relative w-full min-h-[calc(100vh-73px)] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 filter brightness-40"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12">
          
          {/* Kolom Kiri: Penekanan Jadwal Bank Sampah & Tombol Pelaporan */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-700/60 text-emerald-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Desa Bebas Sampah RW 08 Cibangkong</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Jadwal Bank Sampah & <br />
              <span className="text-emerald-400">Pengelolaan Kebersihan</span>
            </h1>

            <p className="text-slate-300 text-base lg:text-lg max-w-xl leading-relaxed">
              Akses cepat jadwal penimbangan sampah, titik kumpul warga, edukasi daur ulang, serta layanan pelaporan lingkungan secara langsung untuk RW 08 yang lebih bersih dan asri.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a 
                href="#bank-sampah"
                className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-emerald-600/30 transition transform hover:-translate-y-0.5"
              >
                <Leaf size={18} />
                <span>Jadwal Bank Sampah</span>
              </a>
              <a 
                href="#peta"
                className="flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 px-6 py-3 rounded-xl font-bold shadow-lg transition transform hover:-translate-y-0.5"
              >
                <MapPin size={18} />
                <span>Lapor Sampah Warga</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Highlight Kartu Ilustrasi Lingkungan */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3 shadow-2xl backdrop-blur-md max-w-md w-full">
              <div className="overflow-hidden rounded-xl aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800" 
                  alt="Aksi Kebersihan RW 08 Cibangkong" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 px-2 pb-1 flex items-center space-x-2 text-slate-300 text-sm font-medium">
                <span className="text-lg">🌿</span>
                <span className="truncate">Giat Kebersihan & Bank Sampah RW 08 Cibangkong</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}