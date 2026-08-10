import React, { useState } from 'react';

export default function Aparat() {
  // State untuk melacak card yang sedang di-hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Daftar Pengurus Lengkap dengan foto profil (menggunakan Unsplash portrait)
  const pengurus = [
    { 
      nama: 'Ketua RW 08', 
      jabatan: 'Penanggung Jawab Wilayah & Program RW Bebas Sampah', 
      namaOrang: 'Bpk. Supriatna',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80'
    },
    { 
      nama: 'Sekretaris RW', 
      jabatan: 'Administrasi, Pendataan Warga & Pelayanan Surat', 
      namaOrang: 'Ibu Nining',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
    },
    { 
      nama: 'Bendahara RW', 
      jabatan: 'Pengelolaan Keuangan & Kas Program Kebersihan', 
      namaOrang: 'Bpk. H. Ahmad',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80'
    },
    { 
      nama: 'Ketua RT 01', 
      jabatan: 'Koordinator Warga RT 01 Cibangkong', 
      namaOrang: 'Bpk. Mulyana',
      foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80'
    },
    { 
      nama: 'Ketua RT 02', 
      jabatan: 'Koordinator Warga RT 02 Cibangkong', 
      namaOrang: 'Bpk. Jaka',
      foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80'
    },
    { 
      nama: 'Ketua RT 03', 
      jabatan: 'Koordinator Warga RT 03 Cibangkong', 
      namaOrang: 'Bpk. Endang',
      foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80'
    },
    { 
      nama: 'Koordinator Kebersihan', 
      jabatan: 'Penanggung Jawab Giat Kerja Bakti & Pengangkutan Sampah', 
      namaOrang: 'Bpk. Herman',
      foto: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80'
    },
    { 
      nama: 'Ketua Bank Sampah', 
      jabatan: 'Koordinator Pemilahan & Penimbangan Sampah Warga', 
      namaOrang: 'Ibu Ratna',
      foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80'
    },
    { 
      nama: 'Seksi Lingkungan & PKK', 
      jabatan: 'Edukasi Daur Ulang Plastik & Dapur Bebas Sampah', 
      namaOrang: 'Ibu Dewi',
      foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80'
    }
  ];

  return (
    <section id="aparat" style={{ width: '100%', padding: '80px 20px', backgroundColor: '#f8fafc', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* HEADER SECTION */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#16a34a', fontWeight: '600', fontSize: '14px', textTransform: 'uppercase' }}>
            Pengurus Wilayah
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0f172a', marginTop: '8px' }}>
            Aparat & Pengurus RW 08 Cibangkong
          </h2>
          <p style={{ color: '#64748b', fontSize: '16px', marginTop: '8px' }}>
            Tim penggerak program lingkungan, aparat RT/RW, dan pelayanan masyarakat.
          </p>
        </div>

        {/* GRID CONTAINER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {pengurus.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '32px 24px',
                  borderRadius: '16px',
                  border: '1px solid',
                  borderColor: isHovered ? '#16a34a' : '#e2e8f0',
                  boxShadow: isHovered 
                    ? '0 12px 24px -6px rgba(22, 163, 74, 0.15)' 
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  transform: isHovered ? 'translateY(-6px)' : 'translateY(0px)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer'
                }}
              >
                {/* FOTO PROFIL */}
                <div 
                  style={{ 
                    width: '80px', 
                    height: '80px', 
                    borderRadius: '50%', 
                    overflow: 'hidden',
                    margin: '0 auto 16px auto',
                    border: isHovered ? '3px solid #16a34a' : '3px solid #dcfce7',
                    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                  }}
                >
                  <img 
                    src={item.foto} 
                    alt={item.namaOrang}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    loading="lazy"
                  />
                </div>

                {/* NAMA PENGURUS */}
                <h3 
                  style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold', 
                    color: isHovered ? '#16a34a' : '#0f172a',
                    margin: 0,
                    transition: 'color 0.2s ease'
                  }}
                >
                  {item.namaOrang}
                </h3>

                {/* JABATAN RT/RW */}
                <p style={{ color: '#16a34a', fontSize: '14px', fontWeight: '600', marginTop: '4px', marginBottom: '0' }}>
                  {item.nama}
                </p>

                {/* TUGAS / JABATAN */}
                <p style={{ color: '#64748b', fontSize: '13px', marginTop: '8px', marginBottom: '0', lineHeight: '1.4' }}>
                  {item.jabatan}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}