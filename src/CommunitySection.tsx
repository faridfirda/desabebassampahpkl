import React, { useState, useEffect } from 'react';

export default function CommunitySection() {
  const [activeTab, setActiveTab] = useState('jadwal');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [namaPelapor, setNamaPelapor] = useState('');
  const [rtPelapor, setRtPelapor] = useState('RT 01');
  const [pesanLaporan, setPesanLaporan] = useState('');
  const [statusKirim, setStatusKirim] = useState(false);
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const days = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];
    const today = new Date().getDay();
    setCurrentDay(days[today]);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const jadwalBankSampah = [
    {
      hari: 'Sabtu',
      jam: '08.00 - 11.00 WIB',
      kegiatan: 'Penimbangan Sampah Anorganik (Plastik, Kertas, Logam)',
      lokasi: 'RT 02 (Bank Sampah Induk)',
    },
    {
      hari: 'Minggu',
      jam: '09.00 - 12.00 WIB',
      kegiatan: 'Setor Sampah Organik & Pelatihan Komposter',
      lokasi: 'RT 03 (Titik Kumpul Utama)',
    },
    {
      hari: 'Rabu',
      jam: '15.30 - 17.00 WIB',
      kegiatan: 'Penyetoran Botol & Kemasan Minuman Warga',
      lokasi: 'RT 03 (Titik Kumpul Utama)',
    },
  ];

  const galeriKegiatan = [
    {
      id: 1,
      title: 'Gotong Royong Kebersihan Lingkungan',
      img: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?auto=format&fit=crop&w=600&q=75',
      tag: 'Kerja Bakti',
      desc: 'Aksi rutin warga RW 08 Cibangkong menjaga kebersihan saluran air dan jalan.',
    },
    {
      id: 2,
      title: 'Pemisahan Sampah Anorganik',
      img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=75',
      tag: 'Bank Sampah',
      desc: 'Pemilahan sampah rumah tangga oleh kader kebersihan ibu-ibu PKK.',
    },
    {
      id: 3,
      title: 'Pelatihan Pembuatan Kompos Organik',
      img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=600&q=75',
      tag: 'Pemberdayaan',
      desc: 'Pemanfaatan sisa dapur menjadi pupuk tanaman bernilai ekonomi.',
    },
  ];

  const handleKirimLaporan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!namaPelapor || !pesanLaporan) return;

    const text = encodeURIComponent(
      `Halo Pengurus RW 08 Cibangkong,\n\nNama: ${namaPelapor}\nAsal: ${rtPelapor}\nLaporan: ${pesanLaporan}`
    );

    window.open(`https://wa.me/6281234567890?text=${text}`, '_blank');
    setStatusKirim(true);

    setTimeout(() => {
      setStatusKirim(false);
      setIsModalOpen(false);
    }, 2000);

    setNamaPelapor('');
    setPesanLaporan('');
  };

  const actionButtonStyles: React.CSSProperties = {
    backgroundColor: '#f1f5f9',
    color: '#475569',
    border: '1px solid #cbd5e1',
    padding: '12px 20px',
    borderRadius: '16px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    boxSizing: 'border-box',
    textAlign: 'center',
  };

  return (
    <section
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        boxSizing: 'border-box',
        cursor: 'default',
        position: 'relative',
        color: '#475569',
        scrollBehavior: 'smooth',
      }}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .smooth-tab-content {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .modal-animation {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* NAVBAR */}
      <nav
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid #e2e8f0',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          padding: '16px 24px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: '800',
              fontSize: '18px',
              color: '#334155',
            }}
          >
            🌱 Desa Bebas Sampah RW 08
          </div>

          <div
            style={{
              display: 'flex',
              gap: '24px',
              alignItems: 'center',
            }}
          >
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, 'hero')}
              style={{
                textDecoration: 'none',
                color: '#64748b',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#334155')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              Beranda
            </a>

            <a
              href="#jadwal"
              onClick={(e) => scrollToSection(e, 'jadwal')}
              style={{
                textDecoration: 'none',
                color: '#64748b',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#334155')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              Jadwal & Edukasi
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                backgroundColor: '#f1f5f9',
                color: '#475569',
                padding: '12px 20px',
                borderRadius: '16px',
                border: '1px solid #cbd5e1',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = '#94a3b8';
                e.currentTarget.style.backgroundColor = '#e2e8f0';
                e.currentTarget.style.color = '#334155';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                e.currentTarget.style.borderColor = '#cbd5e1';
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.color = '#475569';
              }}
            >
              <span>🚨</span> Lapor Sampah Warga
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header
        id="hero"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px 20px 20px',
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '28px',
            padding: '48px',
            color: '#475569',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
            border: '1px solid #e2e8f0',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.03)';
          }}
        >
          <div style={{ maxWidth: '750px', zIndex: 2 }}>
            <div
              style={{
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                marginBottom: '12px',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  backgroundColor: '#f1f5f9',
                  color: '#64748b',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  border: '1px solid #cbd5e1',
                }}
              >
                🌿 Sub-Tema: Desa Bebas Sampah
              </span>

              <span
                style={{
                  backgroundColor: '#f1f5f9',
                  color: '#64748b',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  border: '1px solid #cbd5e1',
                }}
              >
                📅 Hari Ini: {currentDay}
              </span>
            </div>

            <h1
              style={{
                fontSize: '38px',
                fontWeight: '800',
                margin: '0 0 16px 0',
                lineHeight: '1.2',
                letterSpacing: '-0.5px',
                color: '#334155',
              }}
            >
              Gerakan Sadar Lingkungan & Pengelolaan Sampah Mandiri RW 08
            </h1>

            <p
              style={{
                fontSize: '16px',
                color: '#64748b',
                lineHeight: '1.6',
                margin: 0,
              }}
            >
              Fokus pada sistem bank sampah terpadu, proses daur ulang kreatif, dan edukasi kebersihan warga berbasis digital untuk lingkungan yang asri.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap',
              zIndex: 2,
            }}
          >
            <a
              href="#jadwal"
              onClick={(e) => scrollToSection(e, 'jadwal')}
              style={actionButtonStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = '#e2e8f0';
                e.currentTarget.style.color = '#334155';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.color = '#475569';
              }}
            >
              <span>📅</span> Lihat Jadwal & Edukasi
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              style={actionButtonStyles}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = '#e2e8f0';
                e.currentTarget.style.color = '#334155';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.color = '#475569';
              }}
            >
              <span>🚨</span> Akses Pelaporan Warga
            </button>
          </div>
        </div>
      </header>

      {/* KONTEN TENGAH (JADWAL & EDUKASI) */}
      <main
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px 20px 60px 20px',
        }}
      >
        <div
          id="jadwal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '32px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveTab('jadwal')}
            style={{
              padding: '14px 28px',
              borderRadius: '16px',
              border: '1px solid #cbd5e1',
              backgroundColor: activeTab === 'jadwal' ? '#e2e8f0' : '#ffffff',
              color: '#475569',
              fontWeight: 'bold',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>🗑️</span> Jadwal & Edukasi Kebersihan
          </button>

          <button
            onClick={() => setActiveTab('galeri')}
            style={{
              padding: '14px 28px',
              borderRadius: '16px',
              border: '1px solid #cbd5e1',
              backgroundColor: activeTab === 'galeri' ? '#e2e8f0' : '#ffffff',
              color: '#475569',
              fontWeight: 'bold',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>📸</span> Panduan Daur Ulang Interaktif
          </button>
        </div>

        {activeTab === 'jadwal' && (
          <div key="jadwal" className="smooth-tab-content" style={{ backgroundColor: '#ffffff', padding: '36px', borderRadius: '28px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#334155', margin: 0 }}>
                  Jadwal Edukasi & Operasional Bank Sampah
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', margin: '6px 0 0 0' }}>
                  Pastikan sampah sudah dipilah dari rumah sebelum disetorkan.
                </p>
              </div>

              <span style={{ backgroundColor: '#f1f5f9', color: '#64748b', padding: '8px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 'bold', border: '1px solid #cbd5e1' }}>
                ♻️ Status: Sistem Aktif Minggu Ini
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {jadwalBankSampah.map((item, idx) => {
                const isToday = item.hari.toLowerCase() === currentDay.toLowerCase();

                return (
                  <div
                    key={idx}
                    style={{
                      padding: '24px',
                      borderRadius: '20px',
                      backgroundColor: '#f8fafc',
                      border: isToday ? '2px solid #94a3b8' : '1px solid #e2e8f0',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ backgroundColor: '#f1f5f9', color: '#64748b', fontSize: '11px', fontWeight: 'bold', padding: '6px 14px', borderRadius: '12px', textTransform: 'uppercase', border: '1px solid #cbd5e1' }}>
                          {item.hari}
                        </span>

                        {isToday && (
                          <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#475569', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
                            Hari Ini! 🔥
                          </span>
                        )}
                      </div>

                      <h4 style={{ fontSize: '17px', fontWeight: 'bold', color: '#334155', margin: '14px 0 8px 0', lineHeight: '1.4' }}>
                        {item.kegiatan}
                      </h4>

                      <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px 0', fontWeight: '600' }}>
                        ⏰ {item.jam}
                      </p>
                    </div>

                    <div style={{ paddingTop: '12px', borderTop: '1px dashed #cbd5e1', fontSize: '13px', color: '#475569', fontWeight: 'bold' }}>
                      📍 {item.lokasi}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'galeri' && (
          <div key="galeri" className="smooth-tab-content" style={{ backgroundColor: '#ffffff', padding: '36px', borderRadius: '28px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#334155', marginBottom: '24px' }}>
              Panduan Daur Ulang & Dokumentasi Warga
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
              {galeriKegiatan.map((item) => (
                <div
                  key={item.id}
                  style={{
                    borderRadius: '22px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#f8fafc',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '210px',
                        objectFit: 'cover',
                        display: 'block',
                        filter: 'grayscale(20%) contrast(90%)',
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                      loading="lazy"
                    />
                  </div>

                  <div style={{ padding: '20px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {item.tag}
                    </span>

                    <h4 style={{ fontSize: '17px', fontWeight: 'bold', color: '#334155', margin: '8px 0 10px 0' }}>
                      {item.title}
                    </h4>

                    <p style={{ fontSize: '13px', color: '#64748b', margin: 0, lineHeight: '1.6' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* POP-UP MODAL LAPOR SAMPAH WARGA */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(15, 23, 42, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            backdropFilter: 'blur(4px)',
            padding: '16px',
            boxSizing: 'border-box',
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="modal-animation"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              padding: '30px',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '450px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              position: 'relative',
              boxSizing: 'border-box',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '20px' }}>🚨</span>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#334155', margin: 0 }}>
                  Lapor Sampah Warga
                </h3>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  cursor: 'pointer',
                  color: '#64748b',
                  fontWeight: 'bold',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#334155')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleKirimLaporan} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Budi Santoso"
                  value={namaPelapor}
                  onChange={(e) => setNamaPelapor(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#f8fafc',
                    color: '#334155',
                    fontSize: '13px',
                    boxSizing: 'border-box',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#94a3b8')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#cbd5e1')}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b', divider: 'block', marginBottom: '4px' }}>
                  Asal Wilayah RT
                </label>
                <select
                  value={rtPelapor}
                  onChange={(e) => setRtPelapor(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#f8fafc',
                    color: '#334155',
                    fontSize: '13px',
                    boxSizing: 'border-box',
                    outline: 'none',
                  }}
                >
                  <option value="RT 01">RT 01</option>
                  <option value="RT 02">RT 02</option>
                  <option value="RT 03">RT 03</option>
                  <option value="RT 05">RT 05</option>
                  <option value="RT 06">RT 06</option>
                  <option value="RT 07">RT 07</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12px', fontWeight: 'bold', color: '#64748b', display: 'block', marginBottom: '4px' }}>
                  Keterangan Laporan / Aduan
                </label>
                <textarea
                  rows={4}
                  placeholder="Contoh: Ada penumpukan sampah liar di pinggir jalan..."
                  value={pesanLaporan}
                  onChange={(e) => setPesanLaporan(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#f8fafc',
                    color: '#334155',
                    fontSize: '13px',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#94a3b8')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#cbd501')}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '12px',
                  backgroundColor: '#f1f5f9',
                  color: '#475569',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  border: '1px solid #cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginTop: '8px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e2e8f0';
                  e.currentTarget.style.color = '#334155';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f5f9';
                  e.currentTarget.style.color = '#475569';
                }}
              >
                📤 Kirim Laporan via WhatsApp
              </button>

              {statusKirim && (
                <div style={{ backgroundColor: '#f1f5f9', color: '#475569', border: '1px solid #cbd5e1', padding: '12px', borderRadius: '10px', fontSize: '12px', textAlign: 'center', fontWeight: 'bold' }}>
                  ✅ Laporan siap diteruskan ke WhatsApp Admin!
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  );
}