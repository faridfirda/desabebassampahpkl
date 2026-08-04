import React from 'react';
import fotoKerjaBakti from './kerjabakti.jpg';
import fotoDaurUlang from './sampah.jpeg';

export default function BeritaKegiatan() {
  const kegiatanList = [
    {
      id: 1,
      judul: "Giat Kerja Bakti Masif Membersihkan Saluran Air RT 01 - RT 05",
      tanggal: "Minggu, 28 Juli 2026",
      kategori: "Gotong Royong",
      ringkasan: "Antusiasme warga RW 08 Cibangkong dalam pembersihan sedimen gorong-gorong untuk mengantisipasi genangan air hujan.",
      foto: fotoKerjaBakti
    },
    {
      id: 2,
      judul: "Sosialisasi Ibu-Ibu PKK: Pemilahan Sampah Dapur & Daur Ulang Plastik",
      tanggal: "Jumat, 26 Juli 2026",
      kategori: "Pemberdayaan",
      ringkasan: "Edukasi pembuatan pupuk organik cair (POC) dan pengolahan limbah kresek menjadi barang bernilai ekonomis.",
      foto: fotoDaurUlang
    }
  ];

  // Handler saat mouse masuk card
  const handleMouseEnterCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const img = card.querySelector('img');
    const title = card.querySelector('h3');

    card.style.transform = 'translateY(-6px)';
    card.style.boxShadow = '0 16px 24px -8px rgba(15, 23, 42, 0.12)';
    card.style.borderColor = '#cbd5e1';

    if (img) img.style.transform = 'scale(1.04)';
    if (title) title.style.color = '#16a34a';
  };

  // Handler saat mouse keluar card
  const handleMouseLeaveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const img = card.querySelector('img');
    const title = card.querySelector('h3');

    card.style.transform = 'translateY(0px)';
    card.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
    card.style.borderColor = '#e2e8f0';

    if (img) img.style.transform = 'scale(1)';
    if (title) title.style.color = '#0f172a';
  };

  return (
    <section id="berita" style={{ width: '100%', padding: '80px 20px', backgroundColor: '#f8fafc', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>
            Kabar Wilayah
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0f172a', marginTop: '8px' }}>
            Galeri & Kegiatan Lingkungan RW 08
          </h2>
          <p style={{ color: '#64748b', fontSize: '16px', marginTop: '8px' }}>
            Dokumentasi aksi nyata gotong royong dan edukasi kebersihan warga Cibangkong.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {kegiatanList.map((item) => (
            <div 
              key={item.id}
              onMouseEnter={handleMouseEnterCard}
              onMouseLeave={handleMouseLeaveCard}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease'
              }}
            >
              <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                <img 
                  src={item.foto} 
                  alt={item.judul} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#16a34a', backgroundColor: '#dcfce7', padding: '3px 10px', borderRadius: '9999px' }}>
                    {item.kategori}
                  </span>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>{item.tanggal}</span>
                </div>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold', 
                  color: '#0f172a', 
                  lineHeight: '1.4', 
                  marginBottom: '8px',
                  transition: 'color 0.2s ease'
                }}>
                  {item.judul}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.5', margin: 0 }}>
                  {item.ringkasan}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}