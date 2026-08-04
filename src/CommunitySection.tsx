import React, { useState } from 'react';

// Definisi tipe data supados aman tina error TypeScript
interface Lokasi {
  id: number;
  nama: string;
  jarak: string;
  waktu: string;
  tipe: string;
  bg: string;
  color: string;
  icon: string;
  detail: string;
}

export default function CommunitySection() {
  const [activeTab, setActiveTab] = useState('jadwal');
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [showAllLocationsModal, setShowAllLocationsModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Lokasi | null>(null);

  const jadwalBankSampah = [
    { 
      hari: 'Sabtu', 
      jam: '08.00 - 11.00 WIB', 
      kegiatan: 'Penimbangan Sampah Anorganik (Plastik, Kertas, Logam)', 
      lokasi: 'RT 02 (Bank Sampah Induk)' 
    },
    { 
      hari: 'Minggu', 
      jam: '09.00 - 12.00 WIB', 
      kegiatan: 'Setor Sampah Organik & Pelatihan Komposter', 
      lokasi: 'RT 03 (Titik Kumpul Utama)' 
    },
    { 
      hari: 'Rabu', 
      jam: '15.30 - 17.00 WIB', 
      kegiatan: 'Penyetoran Botol & Kemasan Minuman Warga', 
      lokasi: 'RT 03 (Titik Kumpul Utama)' 
    },
  ];

  const galeriKegiatan = [
    { 
      id: 1, 
      title: 'Gotong Royong Kebersihan Lingkungan', 
      img: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=600&q=75', 
      tag: 'Kerja Bakti', 
      desc: 'Aksi rutin warga RW 08 Cibangkong menjaga kebersihan saluran air dan jalan.' 
    },
    { 
      id: 2, 
      title: 'Pemisahan Sampah Anorganik', 
      img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=75', 
      tag: 'Bank Sampah', 
      desc: 'Pemilahan sampah rumah tangga oleh kader kebersihan ibu-ibu PKK.' 
    },
    { 
      id: 3, 
      title: 'Pelatihan Pembuatan Kompos Organik', 
      img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=600&q=75', 
      tag: 'Pemberdayaan', 
      desc: 'Pemanfaatan sisa dapur menjadi pupuk tanaman bernilai ekonomi.' 
    },
  ];

  const mapMarkers = [
    { id: 'lokasi-saya', name: '📍 Posisi Anda Sekarang', top: '48%', left: '46%', desc: 'Estimasi titik lokasi Anda saat ini.', type: 'user' },
    { id: 'rt01', name: 'Wilayah RT 01', top: '50%', left: '38%', desc: 'Zona permukiman warga RT 01.', type: 'rt' },
    { id: 'rt02', name: 'Wilayah RT 02', top: '29%', left: '30%', desc: 'Zona permukiman warga RT 02.', type: 'rt' },
    { id: 'rt03', name: 'Wilayah RT 03', top: '48%', left: '65%', desc: 'Zona permukiman warga RT 03.', type: 'rt' },
    { id: 'rt05', name: 'Wilayah RT 05', top: '41%', left: '80%', desc: 'Zona permukiman warga RT 05.', type: 'rt' },
    { id: 'rt06', name: 'Wilayah RT 06', top: '37%', left: '91%', desc: 'Zona permukiman warga RT 06.', type: 'rt' },
    { id: 'rt07', name: 'Wilayah RT 07', top: '21%', left: '78%', desc: 'Zona permukiman warga RT 07.', type: 'rt' },
    { id: 'bank-rt02', name: 'Bank Sampah RT 02', top: '35%', left: '33%', desc: 'Pusat penimbangan sampah anorganik.', type: 'bank' },
    { id: 'titik-rt03', name: 'Titik Kumpul Utama RT 03', top: '55%', left: '53%', desc: 'Titik kumpul tunggal pengumpulan sampah warga di area abu-abu.', type: 'titik' },
  ];

  const daftarLokasiTerdekat: Lokasi[] = [
    { 
      id: 1, 
      nama: 'Titik Kumpul Utama RT 03', 
      jarak: '120m', 
      waktu: '2 menit', 
      tipe: 'titik', 
      bg: '#d1fae5', 
      color: '#059669', 
      icon: '🗑️',
      detail: 'Titik kumpul tunggal dan pusat drop point pengumpulan sampah warga RW 08.'
    },
    { 
      id: 2, 
      nama: 'Bank Sampah RT 02', 
      jarak: '200m', 
      waktu: '3 menit', 
      tipe: 'bank', 
      bg: '#fef3c7', 
      color: '#d97706', 
      icon: '♻️',
      detail: 'Pusat penukaran tabungan sampah menjadi sembako dan daur ulang mandiri.'
    }
  ];

  return (
    <section style={{ width: '100%', padding: '60px 20px', backgroundColor: '#f0fdf4', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", boxSizing: 'border-box' }}>
      
      {/* INJECT ANIMASI CSS DYNAMIC */}
      <style>{`
        @keyframes pulseGlow {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 12px rgba(37, 99, 235, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }
        @keyframes livePulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        .card-hover {
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px -6px rgba(22, 163, 74, 0.15) !important;
        }
        .marker-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .marker-btn:hover {
          transform: scale(1.25) !important;
          z-index: 60 !important;
        }
        .tab-btn {
          transition: all 0.2s ease-in-out;
        }
        .tab-btn:hover {
          transform: translateY(-2px);
        }
        .tab-btn:active {
          transform: translateY(0);
        }
        .interactive-row {
          transition: all 0.2s ease;
        }
        .interactive-row:hover {
          transform: translateX(4px);
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER UTAMA */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '6px 18px', borderRadius: '20px', fontSize: '13px', fontWeight: '800', letterSpacing: '0.8px', textTransform: 'uppercase', display: 'inline-block' }}>
            🌱 DESA BEBAS SAMPAH, MASYARAKAT BERDAYA
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#14532d', margin: '14px 0 10px 0', letterSpacing: '-0.5px' }}>
            Pemberdayaan Warga & Komunitas RW 08 Cibangkong
          </h2>
          <p style={{ color: '#166534', fontSize: '15px', maxWidth: '650px', margin: '0 auto', lineHeight: '1.6' }}>
            Wujud gotong royong dan kemandirian warga dalam mengelola lingkungan hidup yang bersih, sehat, dan bernilai guna.
          </p>
        </div>

        {/* TOMBOL TAB INTERAKTIF */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <button 
            className="tab-btn"
            onClick={() => setActiveTab('jadwal')}
            style={{ 
              padding: '12px 26px', 
              borderRadius: '12px', 
              border: 'none', 
              backgroundColor: activeTab === 'jadwal' ? '#16a34a' : '#ffffff', 
              color: activeTab === 'jadwal' ? '#ffffff' : '#166534', 
              fontWeight: 'bold', 
              fontSize: '14px', 
              cursor: 'pointer', 
              boxShadow: activeTab === 'jadwal' ? '0 4px 14px rgba(22, 163, 74, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)', 
            }}>
            🗑️ Jadwal Bank Sampah
          </button>
          <button 
            className="tab-btn"
            onClick={() => setActiveTab('galeri')}
            style={{ 
              padding: '12px 26px', 
              borderRadius: '12px', 
              border: 'none', 
              backgroundColor: activeTab === 'galeri' ? '#16a34a' : '#ffffff', 
              color: activeTab === 'galeri' ? '#ffffff' : '#166534', 
              fontWeight: 'bold', 
              fontSize: '14px', 
              cursor: 'pointer', 
              boxShadow: activeTab === 'galeri' ? '0 4px 14px rgba(22, 163, 74, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)', 
            }}>
            📸 Galeri Kegiatan Warga
          </button>
        </div>

        {/* TAB 1: JADWAL */}
        {activeTab === 'jadwal' && (
          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '24px', border: '1px solid #bbf7d0', boxShadow: '0 4px 20px rgba(22, 163, 74, 0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#14532d', margin: 0 }}>
                  Operasional & Penimbangan Sampah
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', margin: '4px 0 0 0' }}>Pastikan sampah sudah dipilah dari rumah sebelum disetorkan.</p>
              </div>
              <span style={{ backgroundColor: '#f0fdf4', color: '#15803d', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', border: '1px solid #86efac' }}>
                ♻️ Terintegrasi Sistem Tabungan Warga
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {jadwalBankSampah.map((item, idx) => (
                <div 
                  key={idx} 
                  className="card-hover"
                  style={{ padding: '20px', borderRadius: '18px', backgroundColor: '#f0fdf4', border: '1px solid #86efac', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}>
                  <div>
                    <span style={{ backgroundColor: '#16a34a', color: '#ffffff', fontSize: '11px', fontWeight: 'bold', padding: '4px 12px', borderRadius: '12px', textTransform: 'uppercase', display: 'inline-block' }}>
                      {item.hari}
                    </span>
                    <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#14532d', margin: '12px 0 6px 0', lineHeight: '1.4' }}>{item.kegiatan}</h4>
                    <p style={{ fontSize: '13px', color: '#166534', margin: '0 0 12px 0' }}>⏰ {item.jam}</p>
                  </div>
                  <div style={{ paddingTop: '10px', borderTop: '1px dashed #bbf7d0', fontSize: '12px', color: '#334155', fontWeight: 'bold' }}>
                    📍 {item.lokasi}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: GALERI */}
        {activeTab === 'galeri' && (
          <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '24px', border: '1px solid #bbf7d0', boxShadow: '0 4px 20px rgba(22, 163, 74, 0.05)' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#14532d', marginBottom: '20px' }}>
              Dokumentasi Aksi Komunitas Bebas Sampah
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {galeriKegiatan.map((item) => (
                <div 
                  key={item.id} 
                  className="card-hover"
                  style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', cursor: 'pointer' }}>
                  <div style={{ overflow: 'hidden', height: '190px' }}>
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease' }} 
                      loading="lazy"
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ padding: '18px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{item.tag}</span>
                    <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f172a', margin: '6px 0 8px 0' }}>{item.title}</h4>
                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BAGIAN EKSPLORASI LINGKUNGAN / PETA */}
        <div style={{ marginTop: '50px' }}>
          
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#14532d', margin: '0 0 6px 0' }}>
              Eksplorasi Lingkungan Kita
            </h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, lineHeight: '1.5' }}>
              Temukan lokasi Bank Sampah dan Titik Kumpul terdekat di RW 08 Cibangkong untuk berpartisipasi dalam gerakan Gotong Royong kebersihan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'start' }}>
            
            {/* KOTAK PETA UTAMA */}
            <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '24px', border: '1px solid #bbf7d0', boxShadow: '0 4px 20px rgba(22, 163, 74, 0.05)', gridColumn: 'span 2' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '18px' }}>🗺️</span>
                  <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#14532d', margin: 0 }}>
                    Peta RW 08 Cibangkong
                  </h4>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#f0fdf4', padding: '6px 12px', borderRadius: '20px', border: '1px solid #bbf7d0' }}>
                  <span style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%', display: 'inline-block', animation: 'livePulse 1.8s infinite' }}></span>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#15803d' }}>Live Status</span>
                </div>
              </div>

              <div style={{ width: '100%', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #cbd5e1', padding: '12px', display: 'flex', justifyContent: 'center', position: 'relative', overflow: 'visible' }}>
                
                <div style={{ position: 'relative', display: 'inline-block', maxWidth: '100%' }}>
                  <img 
                    src="/rw08.jpeg" 
                    alt="Peta Wilayah RW 08 Cibangkong" 
                    style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', borderRadius: '12px', display: 'block' }} 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('rw08.jpeg')) {
                        target.src = '/rw08.jpg';
                      } else if (target.src.includes('rw08.jpg')) {
                        target.src = '/rw08.png';
                      }
                    }}
                    loading="lazy"
                  />

                  {mapMarkers.map((marker) => {
                    const topVal = parseFloat(marker.top);
                    const isNearTop = topVal < 40;
                    const isUserLocation = marker.id === 'lokasi-saya';
                    const isBank = marker.type === 'bank';
                    const isTitik = marker.type === 'titik';

                    return (
                      <div 
                        key={marker.id}
                        style={{ position: 'absolute', top: marker.top, left: marker.left, transform: 'translate(-50%, -50%)', zIndex: activeMarker === marker.id ? 50 : (isUserLocation ? 20 : 10) }}
                      >
                        <button
                          className="marker-btn"
                          onClick={() => setActiveMarker(activeMarker === marker.id ? null : marker.id)}
                          style={{
                            backgroundColor: isUserLocation ? '#2563eb' : (isBank ? '#d97706' : (isTitik ? '#059669' : '#16a34a')),
                            color: '#ffffff',
                            border: '2px solid #ffffff',
                            borderRadius: '50%',
                            width: isUserLocation ? '34px' : '28px',
                            height: isUserLocation ? '34px' : '28px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: isUserLocation ? 'none' : '0 3px 8px rgba(0,0,0,0.3)',
                            animation: isUserLocation ? 'pulseGlow 2s infinite' : 'none',
                            fontWeight: 'bold',
                            fontSize: '12px',
                          }}
                          title={marker.name}
                        >
                          {isUserLocation ? '🔵' : (isBank ? '♻️' : (isTitik ? '🗑️' : '📍'))}
                        </button>

                        {activeMarker === marker.id && (
                          <div style={{
                            position: 'absolute',
                            ...(isNearTop ? { top: '38px' } : { bottom: '38px' }),
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#ffffff',
                            color: '#0f172a',
                            padding: '12px 16px',
                            borderRadius: '12px',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
                            fontSize: '13px',
                            width: '220px',
                            whiteSpace: 'normal',
                            lineHeight: '1.4',
                            border: '1px solid #cbd5e1',
                            zIndex: 100,
                            pointerEvents: 'auto'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                              <strong style={{ color: isUserLocation ? '#2563eb' : (isTitik ? '#059669' : '#15803d'), fontSize: '13px' }}>{marker.name}</strong>
                              <button 
                                onClick={(e) => { e.stopPropagation(); setActiveMarker(null); }} 
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: '#64748b', padding: 0 }}
                              >
                                ✕
                              </button>
                            </div>
                            <span style={{ color: '#475569', display: 'block' }}>{marker.desc}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>

            {/* KOLOM KANAN */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* 1. Keterangan Peta */}
              <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <span style={{ fontSize: '15px' }}>ℹ️</span>
                  <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Keterangan Peta</h4>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div className="interactive-row" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', backgroundColor: '#eff6ff', borderRadius: '12px', border: '1px solid #bfdbfe' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '13px', flexShrink: 0 }}>🔵</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#1d4ed8' }}>Lokasi Anda</div>
                      <div style={{ fontSize: '11px', color: '#3b82f6' }}>Posisi saat ini</div>
                    </div>
                  </div>

                  <div className="interactive-row" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', backgroundColor: '#fef3c7', borderRadius: '12px', border: '1px solid #fde68a' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '13px', flexShrink: 0 }}>♻️</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#92400e' }}>Bank Sampah</div>
                      <div style={{ fontSize: '11px', color: '#b45309' }}>Penyetoran & Penukaran</div>
                    </div>
                  </div>

                  <div className="interactive-row" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '10px 14px', backgroundColor: '#d1fae5', borderRadius: '12px', border: '1px solid #a7f3d0' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontSize: '13px', flexShrink: 0 }}>🗑️</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#065f46' }}>Titik Kumpul</div>
                      <div style={{ fontSize: '11px', color: '#047857' }}>RT 03 (Pusat Utama)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Jadwal Hari Ini */}
              <div style={{ backgroundColor: '#065f46', color: '#ffffff', padding: '24px', borderRadius: '20px', boxShadow: '0 10px 25px -5px rgba(6, 95, 70, 0.3)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span style={{ fontSize: '12px', opacity: 0.9, fontWeight: '500' }}>Jadwal Hari Ini</span>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>Rabu, 24 Mei</span>
                </div>
                
                <h4 style={{ fontSize: '20px', fontWeight: 'bold', margin: '0 0 8px 0', letterSpacing: '-0.3px' }}>
                  Pengangkutan Plastik
                </h4>
                <p style={{ fontSize: '13px', opacity: 0.9, margin: '0 0 16px 0', lineHeight: '1.5' }}>
                  Tim Gotong Royong akan berkeliling mulai pukul 08:00 WIB. Siapkan kantong pilah Anda.
                </p>
              </div>

              {/* 3. Lokasi Terdekat (Interaktif) */}
              <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Lokasi Terdekat</h4>
                  <span style={{ fontSize: '16px' }}>📍</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
                  {daftarLokasiTerdekat.map((loc) => (
                    <div 
                      key={loc.id} 
                      className="interactive-row"
                      onClick={() => setSelectedLocation(loc)}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between', 
                        padding: '10px 12px', 
                        borderRadius: '12px', 
                        backgroundColor: selectedLocation?.id === loc.id ? '#f0fdf4' : '#f8fafc', 
                        border: selectedLocation?.id === loc.id ? '1px solid #16a34a' : '1px solid #e2e8f0',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: loc.bg, color: loc.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', flexShrink: 0 }}>
                          {loc.icon}
                        </div>
                        <div>
                          <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#0f172a' }}>{loc.nama}</div>
                          <div style={{ fontSize: '11px', color: '#64748b' }}>👣 {loc.jarak} • 🚶 {loc.waktu}</div>
                        </div>
                      </div>
                      <span style={{ color: '#94a3b8', fontSize: '14px' }}>›</span>
                    </div>
                  ))}
                </div>

                {selectedLocation && (
                  <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #86efac', padding: '14px', borderRadius: '12px', marginBottom: '12px', fontSize: '12px', color: '#14532d', lineHeight: '1.4' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '4px', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{selectedLocation.nama}</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedLocation(null); }} 
                        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', color: '#64748b' }}
                      >
                        ✕
                      </button>
                    </div>
                    <div>{selectedLocation.detail}</div>
                  </div>
                )}

                <button 
                  className="tab-btn"
                  style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #16a34a', backgroundColor: '#ffffff', color: '#16a34a', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}
                  onClick={() => setShowAllLocationsModal(true)}
                >
                  Lihat Semua Lokasi
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* MODAL LIHAT SEMUA LOKASI */}
      {showAllLocationsModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            maxWidth: '500px',
            width: '100%',
            padding: '24px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#14532d', margin: 0 }}>
                📋 Daftar Semua Titik Lokasi Sampah RW 08
              </h3>
              <button 
                onClick={() => setShowAllLocationsModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '14px', borderRadius: '16px', backgroundColor: '#fef3c7', border: '1px solid #fde68a' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '16px' }}>♻️</span>
                  <strong style={{ color: '#92400e', fontSize: '14px' }}>Bank Sampah Induk RT 02</strong>
                </div>
                <p style={{ fontSize: '12px', color: '#b45309', margin: 0 }}>Pusat penimbangan utama sampah anorganik warga RW 08 Cibangkong.</p>
              </div>

              <div style={{ padding: '14px', borderRadius: '16px', backgroundColor: '#d1fae5', border: '1px solid #a7f3d0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '16px' }}>🗑️</span>
                  <strong style={{ color: '#065f46', fontSize: '14px' }}>Titik Kumpul Utama RT 03</strong>
                </div>
                <p style={{ fontSize: '12px', color: '#047857', margin: 0 }}>Titik kumpul tunggal pengumpulan dan drop point sampah warga RW 08.</p>
              </div>

              <div style={{ padding: '14px', borderRadius: '16px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '16px' }}>🔵</span>
                  <strong style={{ color: '#1d4ed8', fontSize: '14px' }}>Posisi Anda Sekarang</strong>
                </div>
                <p style={{ fontSize: '12px', color: '#3b82f6', margin: 0 }}>Titik estimasi lokasi Anda saat ini di sekitar wilayah RW 08.</p>
              </div>
            </div>

            <button 
              className="tab-btn"
              onClick={() => setShowAllLocationsModal(false)}
              style={{ width: '100%', marginTop: '20px', padding: '12px', borderRadius: '12px', backgroundColor: '#16a34a', color: '#ffffff', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}