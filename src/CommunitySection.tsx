import React, { useState, useEffect } from 'react';

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
  const [selectedLocation, setSelectedLocation] = useState<Lokasi | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setMobileMenuOpen(false);
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

  const mapMarkers = [
    {
      id: 'lokasi-saya',
      name: '📍 Posisi Anda Sekarang',
      top: '43%',
      left: '48%',
      desc: 'Estimasi titik lokasi Anda saat ini di Cibangkong.',
      type: 'user',
    },
    {
      id: 'rt01',
      name: 'Wilayah RT 01',
      top: '71%',
      left: '23%',
      desc: 'Zona permukiman warga RT 01.',
      type: 'rt',
    },
    {
      id: 'rt02',
      name: 'Wilayah RT 02',
      top: '44%',
      left: '25%',
      desc: 'Zona permukiman warga RT 02 ',
      type: 'rt',
    },
    {
      id: 'rt03',
      name: 'Wilayah RT 03',
      top: '67%',
      left: '49%',
      desc: 'Zona permukiman warga RT 03',
      type: 'rt',
    },
    {
      id: 'rt05',
      name: 'Wilayah RT 05',
      top: '59%',
      left: '76%',
      desc: 'Zona permukiman warga RT 05',
      type: 'rt',
    },
    {
      id: 'rt06',
      name: 'Wilayah RT 06',
      top: '50%',
      left: '88%',
      desc: 'Zona permukiman warga RT 06',
      type: 'rt',
    },
    {
      id: 'rt07',
      name: 'Wilayah RT 07',
      top: '31%',
      left: '73%',
      desc: 'Zona permukiman warga RT 07',
      type: 'rt',
    },
    {
      id: 'bank-rt02',
      name: 'Bank Sampah rw 08',
      top: '46%',
      left: '37%',
      desc: 'Pusat penimbangan sampah anorganik',
      type: 'bank',
    },
    {
      id: 'titik-rt03',
      name: 'Titik Kumpul Utama RT 03',
      top: '65%',
      left: '59%',
      desc: 'Titik kumpul pengumpulan sampah warga di area RT 03.',
      type: 'titik',
    },
    {
      id: 'sekolah',
      name: '🏫 SDN Gumuruh RW 08',
      top: '66%',
      left: '39%',
      desc: 'Pusat pendidikan dan edukasi anak-anak wilayah RW 08.',
      type: 'sekolah',
    },
    {
      id: 'masjid-1',
      name: '🕌 Masjid Al-Barokah RW 08 (Utama)',
      top: '54%',
      left: '54%',
      desc: 'Pusat kegiatan ibadah dan musyawarah warga',
      type: 'masjid',
    },
    {
      id: 'masjid-2',
      name: '🕌 Masjid / Mushola Kedua',
      top: '46%',
      left: '75%',
      desc: 'Pusat ibadah warga wilayah RT 05/06',
      type: 'masjid',
    },
    {
      id: 'masjid-3',
      name: '🕌 Masjid / Mushola Ketiga',
      top: '53%',
      left: '21%',
      desc: 'Pusat ibadah warga wilayah RT 02/03',
      type: 'masjid',
    },
    {
      id: 'gedung-ggs',
      name: '🏢 Gedung GGS',
      top: '38%',
      left: '17%',
      desc: 'Pusat fasilitas serbaguna Gedung GGS wilayah RW 08.',
      type: 'gedung',
    },
  ];

  const daftarLokasiTerdekat: Lokasi[] = [
    {
      id: 1,
      nama: 'Titik Kumpul Utama RW 08',
      jarak: '120m',
      waktu: '2 menit',
      tipe: 'titik',
      bg: '#d1fae5',
      color: '#059669',
      icon: '🗑️',
      detail:
        'Titik kumpul tunggal dan pusat drop point pengumpulan sampah warga RW 08.',
    },
    {
      id: 2,
      nama: 'Bank Sampah RW 08',
      jarak: '200m',
      waktu: '3 menit',
      tipe: 'bank',
      bg: '#fef3c7',
      color: '#d97706',
      icon: '♻️',
      detail:
        'Pusat penukaran tabungan sampah menjadi sembako dan daur ulang mandiri.',
    },
    {
      id: 3,
      nama: 'Gedung GGS RW 08',
      jarak: '150m',
      waktu: '2 menit',
      tipe: 'gedung',
      bg: '#e0e7ff',
      color: '#4f46e5',
      icon: '🏢',
      detail:
        'Pusat fasilitas serbaguna warga untuk kegiatan pertemuan dan acara RW 08.',
    },
    {
      id: 4,
      nama: 'SDN Gumuruh RW 08',
      jarak: '180m',
      waktu: '3 menit',
      tipe: 'sekolah',
      bg: '#ede9fe',
      color: '#7c3aed',
      icon: '🏫',
      detail:
        'Pusat pendidikan dan edukasi anak-anak wilayah RW 08.',
    },
  ];

  const handleKirimLaporan = (e: React.FormEvent) => {
    e.preventDefault();

    if (!namaPelapor || !pesanLaporan) return;

    const text = encodeURIComponent(
      `Halo Pengurus RW 08 Cibangkong,\n\nNama: ${namaPelapor}\nAsal: ${rtPelapor}\nLaporan: ${pesanLaporan}`
    );

    window.open(
      `https://wa.me/6281234567890?text=${text}`,
      '_blank'
    );

    setStatusKirim(true);

    setTimeout(() => {
      setStatusKirim(false);
    }, 4000);

    setNamaPelapor('');
    setPesanLaporan('');
  };

  return (
    <section
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: '#f0fdf4',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        boxSizing: 'border-box',
        cursor: 'default',
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #bbf7d0',
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
              color: '#14532d',
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
                color: '#166534',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = '#16a34a')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = '#166534')
              }
            >
              Beranda
            </a>

            <a
              href="#jadwal"
              onClick={(e) => scrollToSection(e, 'jadwal')}
              style={{
                textDecoration: 'none',
                color: '#166534',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = '#16a34a')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = '#166534')
              }
            >
              Jadwal & Edukasi
            </a>

            <a
              href="#peta"
              onClick={(e) => scrollToSection(e, 'peta')}
              style={{
                textDecoration: 'none',
                color: '#166534',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = '#16a34a')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = '#166534')
              }
            >
              Peta Wilayah
            </a>

            <a
              href="#pelaporan"
              onClick={(e) => scrollToSection(e, 'pelaporan')}
              style={{
                backgroundColor: '#16a34a',
                color: '#ffffff',
                padding: '10px 18px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(22, 163, 74, 0.3)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                e.currentTarget.style.backgroundColor = '#15803d';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.backgroundColor = '#16a34a';
              }}
            >
              🚨 Lapor Sampah Warga
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: '1px solid #16a34a',
              borderRadius: '8px',
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: '18px',
              color: '#16a34a',
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* HERO SECTION DENGAN EFEK HOVER KARTU INTERAKTIF */}
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
            background:
              'linear-gradient(135deg, #14532d 0%, #16a34a 100%)',
            borderRadius: '28px',
            padding: '48px',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            boxShadow: '0 15px 35px rgba(22, 163, 74, 0.25)',
            position: 'relative',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 25px 50px rgba(22, 163, 74, 0.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(22, 163, 74, 0.25)';
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
                  backgroundColor: 'rgba(255,255,255,0.25)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  backdropFilter: 'blur(5px)',
                }}
              >
                🌿 Sub-Tema: Desa Bebas Sampah
              </span>

              <span
                style={{
                  backgroundColor: '#f0fdf4',
                  color: '#14532d',
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
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
              }}
            >
              Gerakan Sadar Lingkungan & Pengelolaan Sampah Mandiri RW 08
            </h1>

            <p
              style={{
                fontSize: '16px',
                opacity: '0.95',
                lineHeight: '1.6',
                margin: 0,
              }}
            >
              Fokus pada sistem bank sampah terpadu, proses daur ulang
              kreatif, dan edukasi kebersihan warga berbasis digital untuk
              lingkungan yang asri.
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
              style={{
                backgroundColor: '#ffffff',
                color: '#14532d',
                padding: '14px 28px',
                borderRadius: '14px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              📅 Lihat Jadwal & Edukasi
            </a>

            <a
              href="#pelaporan"
              onClick={(e) => scrollToSection(e, 'pelaporan')}
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.4)',
                padding: '14px 28px',
                borderRadius: '14px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
              }}
            >
              🚨 Akses Pelaporan Warga
            </a>
          </div>
        </div>
      </header>

      {/* KONTEN TENGAH */}
      <main
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px',
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
              borderRadius: '14px',
              border: 'none',
              backgroundColor:
                activeTab === 'jadwal' ? '#16a34a' : '#ffffff',
              color:
                activeTab === 'jadwal' ? '#ffffff' : '#166534',
              fontWeight: 'bold',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            🗑️ Jadwal & Edukasi Kebersihan
          </button>

          <button
            onClick={() => setActiveTab('galeri')}
            style={{
              padding: '14px 28px',
              borderRadius: '14px',
              border: 'none',
              backgroundColor:
                activeTab === 'galeri' ? '#16a34a' : '#ffffff',
              color:
                activeTab === 'galeri' ? '#ffffff' : '#166534',
              fontWeight: 'bold',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            📸 Panduan Daur Ulang Interaktif
          </button>
        </div>

        {activeTab === 'jadwal' && (
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '36px',
              borderRadius: '28px',
              border: '1px solid #bbf7d0',
              boxShadow:
                '0 8px 30px rgba(22, 163, 74, 0.06)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '28px',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    color: '#14532d',
                    margin: 0,
                  }}
                >
                  Jadwal Edukasi & Operasional Bank Sampah
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#64748b',
                    margin: '6px 0 0 0',
                  }}
                >
                  Pastikan sampah sudah dipilah dari rumah sebelum disetorkan.
                </p>
              </div>

              <span
                style={{
                  backgroundColor: '#f0fdf4',
                  color: '#15803d',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  border: '1px solid #86efac',
                }}
              >
                ♻️ Status: Sistem Aktif Minggu Ini
              </span>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
              }}
            >
              {jadwalBankSampah.map((item, idx) => {
                const isToday =
                  item.hari.toLowerCase() ===
                  currentDay.toLowerCase();

                return (
                  <div
                    key={idx}
                    style={{
                      padding: '24px',
                      borderRadius: '20px',
                      backgroundColor: isToday
                        ? '#dcfce7'
                        : '#f0fdf4',
                      border: isToday
                        ? '2px solid #16a34a'
                        : '1px solid #86efac',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: isToday
                        ? '0 6px 20px rgba(22, 163, 74, 0.2)'
                        : '0 2px 8px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(22, 163, 74, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = isToday
                        ? '0 6px 20px rgba(22, 163, 74, 0.2)'
                        : '0 2px 8px rgba(0,0,0,0.02)';
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: isToday
                              ? '#15803d'
                              : '#16a34a',
                            color: '#ffffff',
                            fontSize: '11px',
                            fontWeight: 'bold',
                            padding: '6px 14px',
                            borderRadius: '12px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {item.hari}
                        </span>

                        {isToday && (
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 'bold',
                              color: '#15803d',
                              backgroundColor: '#bbf7d0',
                              padding: '4px 10px',
                              borderRadius: '8px',
                            }}
                          >
                            Hari Ini! 🔥
                          </span>
                        )}
                      </div>

                      <h4
                        style={{
                          fontSize: '17px',
                          fontWeight: 'bold',
                          color: '#14532d',
                          margin: '14px 0 8px 0',
                          lineHeight: '1.4',
                        }}
                      >
                        {item.kegiatan}
                      </h4>

                      <p
                        style={{
                          fontSize: '13px',
                          color: '#166534',
                          margin: '0 0 16px 0',
                          fontWeight: '600',
                        }}
                      >
                        ⏰ {item.jam}
                      </p>
                    </div>

                    <div
                      style={{
                        paddingTop: '12px',
                        borderTop: '1px dashed #bbf7d0',
                        fontSize: '13px',
                        color: '#334155',
                        fontWeight: 'bold',
                      }}
                    >
                      📍 {item.lokasi}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'galeri' && (
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '36px',
              borderRadius: '28px',
              border: '1px solid #bbf7d0',
              boxShadow:
                '0 8px 30px rgba(22, 163, 74, 0.06)',
            }}
          >
            <h3
              style={{
                fontSize: '22px',
                fontWeight: 'bold',
                color: '#14532d',
                marginBottom: '24px',
              }}
            >
              Panduan Daur Ulang & Dokumentasi Warga
            </h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns:
                  'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
              }}
            >
              {galeriKegiatan.map((item) => (
                <div
                  key={item.id}
                  style={{
                    borderRadius: '22px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#ffffff',
                    boxShadow:
                      '0 4px 15px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.04)';
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
                        transition: 'transform 0.4s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                      loading="lazy"
                    />
                  </div>

                  <div style={{ padding: '20px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 'bold',
                        color: '#16a34a',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {item.tag}
                    </span>

                    <h4
                      style={{
                        fontSize: '17px',
                        fontWeight: 'bold',
                        color: '#0f172a',
                        margin: '8px 0 10px 0',
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      style={{
                        fontSize: '13px',
                        color: '#64748b',
                        margin: 0,
                        lineHeight: '1.6',
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* PETA WILAYAH */}
      <section
        id="peta"
        style={{
          maxWidth: '1200px',
          margin: '40px auto 60px auto',
          padding: '0 20px',
          scrollMarginTop: '90px',
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '36px',
            borderRadius: '28px',
            border: '1px solid #bbf7d0',
            boxShadow:
              '0 8px 30px rgba(22, 163, 74, 0.06)',
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <h3
              style={{
                fontSize: '26px',
                fontWeight: '800',
                color: '#14532d',
                margin: '0 0 8px 0',
              }}
            >
              Peta Wilayah RW 08 Cibangkong
            </h3>

            <p
              style={{
                fontSize: '15px',
                color: '#475569',
                margin: 0,
                lineHeight: '1.5',
              }}
            >
              Peta statik interaktif wilayah untuk memeriksa rute penyetoran
              sampah dan titik kumpul warga secara real-time.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns:
                'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              alignItems: 'start',
            }}
          >
            {/* PETA */}
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '24px',
                border: '1px solid #e2e8f0',
                gridColumn: 'span 2',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ fontSize: '18px' }}>🗺️</span>

                  <h4
                    style={{
                      fontSize: '18px',
                      fontWeight: 'bold',
                      color: '#14532d',
                      margin: 0,
                    }}
                  >
                    Peta Zonasi & Batas Wilayah
                  </h4>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#f0fdf4',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    border: '1px solid #bbf7d0',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#22c55e',
                      borderRadius: '50%',
                      display: 'inline-block',
                    }}
                  />

                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#15803d',
                    }}
                  >
                    Live Status Online
                  </span>
                </div>
              </div>

              <div
                style={{
                  width: '100%',
                  backgroundColor: '#f8fafc',
                  borderRadius: '18px',
                  border: '1px solid #cbd5e1',
                  padding: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'visible',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    display: 'inline-block',
                    maxWidth: '100%',
                  }}
                >
                  {/* FOTO MAPS */}
                  <img
                    src="/maps.jpeg"
                    alt="Peta Wilayah RW 08 Cibangkong"
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '500px',
                      objectFit: 'contain',
                      borderRadius: '14px',
                      display: 'block',
                    }}
                    loading="lazy"
                  />

                  {/* MARKER PIN */}
                  {mapMarkers.map((marker) => {
                    const topVal = parseFloat(marker.top);
                    const isNearTop = topVal < 40;
                    const isUserLocation = marker.id === 'lokasi-saya';
                    const isBank = marker.type === 'bank';
                    const isTitik = marker.type === 'titik';
                    const isSekolah = marker.type === 'sekolah';
                    const isMasjid = marker.type === 'masjid';
                    const isGedung = marker.type === 'gedung';

                    return (
                      <div
                        key={marker.id}
                        style={{
                          position: 'absolute',
                          top: marker.top,
                          left: marker.left,
                          transform: 'translate(-50%, -100%)',
                          zIndex:
                            activeMarker === marker.id
                              ? 50
                              : isUserLocation
                              ? 20
                              : 10,
                        }}
                      >
                        <button
                          onClick={() =>
                            setActiveMarker(
                              activeMarker === marker.id
                                ? null
                                : marker.id
                            )
                          }
                          style={{
                            backgroundColor: isUserLocation
                              ? '#2563eb'
                              : isBank
                              ? '#d97706'
                              : isTitik
                              ? '#059669'
                              : isSekolah
                              ? '#7c3aed'
                              : isMasjid
                              ? '#0d9488'
                              : isGedung
                              ? '#4f46e5'
                              : '#16a34a',

                            color: '#ffffff',

                            border: '2px solid #ffffff',

                            width: isUserLocation
                              ? '34px'
                              : '30px',

                            height: isUserLocation
                              ? '34px'
                              : '30px',

                            cursor: 'pointer',

                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',

                            /* BENTUK PIN KLASIK DENGAN UJUNG DIBAWAH */
                            borderRadius: '50% 50% 50% 10%',

                            transform: 'rotate(-45deg)',

                            boxShadow:
                              '0 4px 10px rgba(0,0,0,0.3)',

                            fontWeight: 'bold',
                            fontSize: '12px',

                            transition: 'all 0.2s',
                            padding: 0,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              'rotate(-45deg) scale(1.25)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform =
                              'rotate(-45deg) scale(1)';
                          }}
                          title={marker.name}
                        >
                          <span
                            style={{
                              transform: 'rotate(45deg)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {isUserLocation
                              ? '●'
                              : isBank
                              ? '♻'
                              : isTitik
                              ? '♟'
                              : isSekolah
                              ? '🏫'
                              : isMasjid
                              ? '🕌'
                              : isGedung
                              ? '🏢'
                              : '•'}
                          </span>
                        </button>

                        {/* POPUP MARKER */}
                        {activeMarker === marker.id && (
                          <div
                            style={{
                              position: 'absolute',

                              ...(isNearTop
                                ? { top: '38px' }
                                : { bottom: '38px' }),

                              left: '50%',
                              transform: 'translateX(-50%)',

                              backgroundColor: '#ffffff',
                              color: '#0f172a',

                              padding: '14px 18px',

                              borderRadius: '14px',

                              boxShadow:
                                '0 10px 30px rgba(0,0,0,0.25)',

                              fontSize: '13px',
                              width: '230px',

                              whiteSpace: 'normal',
                              lineHeight: '1.4',

                              border: '1px solid #cbd5e1',

                              zIndex: 100,
                              pointerEvents: 'auto',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '6px',
                              }}
                            >
                              <strong
                                style={{
                                  color: isUserLocation
                                    ? '#2563eb'
                                    : isTitik
                                    ? '#059669'
                                    : isSekolah
                                    ? '#7c3aed'
                                    : isMasjid
                                    ? '#0d9488'
                                    : isGedung
                                    ? '#4f46e5'
                                    : '#15803d',
                                  fontSize: '13px',
                                }}
                              >
                                {marker.name}
                              </strong>

                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveMarker(null);
                                }}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  cursor: 'pointer',
                                  fontSize: '14px',
                                  color: '#64748b',
                                  padding: 0,
                                }}
                              >
                                ✕
                              </button>
                            </div>

                            <span
                              style={{
                                color: '#475569',
                                display: 'block',
                              }}
                            >
                              {marker.desc}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* INFORMASI SAMPING */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* LOKASI TERDEKAT */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px',
                  borderRadius: '24px',
                  border: '1px solid #e2e8f0',
                  boxShadow:
                    '0 4px 15px rgba(0,0,0,0.03)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#0f172a',
                      margin: 0,
                    }}
                  >
                    Lokasi Terdekat
                  </h4>

                  <span style={{ fontSize: '16px' }}>
                    📍
                  </span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    marginBottom: '16px',
                  }}
                >
                  {daftarLokasiTerdekat.map((loc) => (
                    <div
                      key={loc.id}
                      onClick={() =>
                        setSelectedLocation(loc)
                      }
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px',
                        borderRadius: '14px',
                        backgroundColor:
                          selectedLocation?.id === loc.id
                            ? '#f0fdf4'
                            : '#f8fafc',
                        border:
                          selectedLocation?.id === loc.id
                            ? '1px solid #16a34a'
                            : '1px solid #e2e8f0',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(4px)';
                        e.currentTarget.style.borderColor = '#16a34a';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.borderColor =
                          selectedLocation?.id === loc.id
                            ? '#16a34a'
                            : '#e2e8f0';
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                        }}
                      >
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: loc.bg,
                            color: loc.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '15px',
                            flexShrink: 0,
                          }}
                        >
                          {loc.icon}
                        </div>

                        <div>
                          <div
                            style={{
                              fontSize: '13px',
                              fontWeight: 'bold',
                              color: '#0f172a',
                            }}
                          >
                            {loc.nama}
                          </div>

                          <div
                            style={{
                              fontSize: '11px',
                              color: '#64748b',
                            }}
                          >
                            👣 {loc.jarak} • 🚶 {loc.waktu}
                          </div>
                        </div>
                      </div>

                      <span
                        style={{
                          color: '#94a3b8',
                          fontSize: '14px',
                        }}
                      >
                        ›
                      </span>
                    </div>
                  ))}
                </div>

                {selectedLocation && (
                  <div
                    style={{
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #86efac',
                      padding: '14px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      color: '#14532d',
                      lineHeight: '1.4',
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 'bold',
                        marginBottom: '4px',
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span>
                        {selectedLocation.nama}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedLocation(null);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '12px',
                          color: '#64748b',
                        }}
                      >
                        ✕
                      </button>
                    </div>

                    <div>
                      {selectedLocation.detail}
                    </div>
                  </div>
                )}
              </div>

              {/* FORM PELAPORAN */}
              <div
                id="pelaporan"
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px',
                  borderRadius: '24px',
                  border: '1px solid #e2e8f0',
                  boxShadow:
                    '0 4px 15px rgba(0,0,0,0.03)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '16px',
                  }}
                >
                  <span style={{ fontSize: '18px' }}>
                    🚨
                  </span>

                  <h4
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#0f172a',
                      margin: 0,
                    }}
                  >
                    Lapor Sampah Warga
                  </h4>
                </div>

                <form
                  onSubmit={handleKirimLaporan}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#475569',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      Nama Lengkap
                    </label>

                    <input
                      type="text"
                      placeholder="Contoh: Budi Santoso"
                      value={namaPelapor}
                      onChange={(e) =>
                        setNamaPelapor(e.target.value)
                      }
                      required
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13px',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#475569',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      Asal Wilayah RT
                    </label>

                    <select
                      value={rtPelapor}
                      onChange={(e) =>
                        setRtPelapor(e.target.value)
                      }
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13px',
                        backgroundColor: '#ffffff',
                        boxSizing: 'border-box',
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
                    <label
                      style={{
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#475569',
                        display: 'block',
                        marginBottom: '4px',
                      }}
                    >
                      Keterangan Laporan / Aduan
                    </label>

                    <textarea
                      rows={3}
                      placeholder="Contoh: Ada penumpukan sampah liar di pinggir jalan..."
                      value={pesanLaporan}
                      onChange={(e) =>
                        setPesanLaporan(e.target.value)
                      }
                      required
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13px',
                        boxSizing: 'border-box',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '12px',
                      backgroundColor: '#16a34a',
                      color: '#ffffff',
                      fontWeight: 'bold',
                      fontSize: '13px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow:
                        '0 4px 12px rgba(22, 163, 74, 0.25)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                      e.currentTarget.style.backgroundColor = '#15803d';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.backgroundColor = '#16a34a';
                    }}
                  >
                    📤 Kirim Laporan via WhatsApp
                  </button>

                  {statusKirim && (
                    <div
                      style={{
                        backgroundColor: '#dcfce7',
                        color: '#15803d',
                        padding: '10px',
                        borderRadius: '8px',
                        fontSize: '12px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                      }}
                    >
                      ✅ Laporan siap diteruskan ke WhatsApp Admin!
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}