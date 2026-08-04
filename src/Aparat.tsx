import React from 'react';

export default function Aparat() {
  const pengurus = [
    { nama: 'Ketua RW 08', jabatan: 'Penanggung Jawab Program RW Bebas Sampah', namaOrang: 'Bpk. Ahmad' },
    { nama: 'Ketua Bank Sampah', jabatan: 'Koordinator Pengelolaan & Penimbangan', namaOrang: 'Ibu Ratna' },
    { nama: 'Koordinator Kebersihan', jabatan: 'Penanggung Jawab Giat Kerja Bakti', namaOrang: 'Bpk. Herman' },
  ];

  return (
    <section id="aparat" style={{ width: '100%', padding: '80px 20px', backgroundColor: '#f8fafc', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ color: '#16a34a', fontWeight: '600', fontSize: '14px', textTransform: 'uppercase' }}>
            Pengurus Wilayah
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0f172a', marginTop: '8px' }}>
            Aparat & Pengurus RW 08 Cibangkong
          </h2>
          <p style={{ color: '#64748b', fontSize: '16px', marginTop: '8px' }}>
            Tim penggerak program lingkungan dan pelayanan masyarakat RW 08.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {pengurus.map((item, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: '#ffffff',
                padding: '24px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                textAlign: 'center'
              }}
            >
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', margin: '0 auto 16px auto', fontWeight: 'bold' }}>
                👤
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a' }}>{item.namaOrang}</h3>
              <p style={{ color: '#16a34a', fontSize: '14px', fontWeight: '600', marginTop: '4px' }}>{item.nama}</p>
              <p style={{ color: '#64748b', fontSize: '13px', marginTop: '8px' }}>{item.jabatan}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}