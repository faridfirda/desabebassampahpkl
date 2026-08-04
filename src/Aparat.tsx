import React, { useState } from 'react';

export default function Aparat() {
  // State untuk melacak card yang sedang di-hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Daftar Pengurus Lengkap (RW, RT, Sekretaris, Bendahara, Kebersihan, dll)
  const pengurus = [
    { 
      nama: 'Ketua RW 08', 
      jabatan: 'Penanggung Jawab Wilayah & Program RW Bebas Sampah', 
      namaOrang: 'Bpk. Supriatna' 
    },
    { 
      nama: 'Sekretaris RW', 
      jabatan: 'Administrasi, Pendataan Warga & Pelayanan Surat', 
      namaOrang: 'Ibu Nining' 
    },
    { 
      nama: 'Bendahara RW', 
      jabatan: 'Pengelolaan Keuangan & Kas Program Kebersihan', 
      namaOrang: 'Bpk. H. Ahmad' 
    },
    { 
      nama: 'Ketua RT 01', 
      jabatan: 'Koordinator Warga RT 01 Cibangkong', 
      namaOrang: 'Bpk. Mulyana' 
    },
    { 
      nama: 'Ketua RT 02', 
      jabatan: 'Koordinator Warga RT 02 Cibangkong', 
      namaOrang: 'Bpk. Jaka' 
    },
    { 
      nama: 'Ketua RT 03', 
      jabatan: 'Koordinator Warga RT 03 Cibangkong', 
      namaOrang: 'Bpk. Endang' 
    },
    { 
      nama: 'Koordinator Kebersihan', 
      jabatan: 'Penanggung Jawab Giat Kerja Bakti & Pengangkutan Sampah', 
      namaOrang: 'Bpk. Herman' 
    },
    { 
      nama: 'Ketua Bank Sampah', 
      jabatan: 'Koordinator Pemilahan & Penimbangan Sampah Warga', 
      namaOrang: 'Ibu Ratna' 
    },
    { 
      nama: 'Seksi Lingkungan & PKK', 
      jabatan: 'Edukasi Daur Ulang Plastik & Dapur Bebas Sampah', 
      namaOrang: 'Ibu Dewi' 
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
                {/* AVATAR ICON */}
                <div 
                  style={{ 
                    width: '68px', 
                    height: '68px', 
                    borderRadius: '50%', 
                    backgroundColor: isHovered ? '#16a34a' : '#dcfce7', 
                    color: isHovered ? '#ffffff' : '#16a34a', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontSize: '28px', 
                    margin: '0 auto 16px auto', 
                    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  👤
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