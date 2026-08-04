import React from 'react';

export default function BankSampah() {
  return (
    <section id="bank-sampah" style={{ width: '100%', padding: '80px 20px', backgroundColor: '#f0fdf4', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Modul */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Program Unggulan RW 08
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#0f172a', marginTop: '8px' }}>
            ♻️ Bank Sampah RW 08 Cibangkong
          </h2>
          <p style={{ color: '#475569', fontSize: '16px', marginTop: '8px', maxWidth: '600px', margin: '8px auto 0 auto' }}>
            Sistem pengelolaan sampah mandiri warga untuk mewujudkan lingkungan bersih dan bernilai ekonomis.
          </p>
        </div>

        {/* Informasional Grid (Jadwal & Jenis Sampah) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          
          {/* Card 1: Jadwal Operasional */}
          <div style={{ backgroundColor: '#ffffff', padding: '28px', borderRadius: '16px', border: '1px solid #bbf7d0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>⏰</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>Jadwal Penimbangan</h3>
            <p style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '16px' }}>Setiap Hari Sabtu</p>
            <p style={{ color: '#64748b', fontSize: '14px', marginTop: '4px' }}>Pukul 08.00 - 11.00 WIB</p>
            <p style={{ color: '#475569', fontSize: '13px', marginTop: '12px', borderTop: '1px solid #e2e8f0', paddingTop: '8px' }}>
              📍 Posko Utama Bank Sampah RW 08 Cibangkong
            </p>
          </div>

          {/* Card 2: Jenis Sampah Diterima */}
          <div style={{ backgroundColor: '#ffffff', padding: '28px', borderRadius: '16px', border: '1px solid #bbf7d0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>📦</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>Jenis Sampah Diterima</h3>
            <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>
              <li>Plastik (Botol, Gelas, Kantong Bersih)</li>
              <li>Kertas & Kardus (Kardus bekas, Buku, Koran)</li>
              <li>Logam & Kaleng (Minyak, Minuman)</li>
            </ul>
          </div>

          {/* Card 3: Hasil Olahan Daur Ulang */}
          <div style={{ backgroundColor: '#ffffff', padding: '28px', borderRadius: '16px', border: '1px solid #bbf7d0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>🌱</div>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', marginBottom: '8px' }}>Manfaat Jadi Nasabah</h3>
            <ul style={{ paddingLeft: '20px', color: '#475569', fontSize: '14px', lineHeight: '1.8', margin: 0 }}>
              <li>Tabungan Rupiah dari sampah terpilah</li>
              <li>Konversi menjadi Pupuk Kompos gratis</li>
              <li>Lingkungan RT/RW bebas dari bau dan banjir</li>
            </ul>
          </div>

        </div>

        {/* 3 Alur Penimbangan */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '32px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#0f172a', textAlign: 'center', marginBottom: '24px' }}>
            Alur Penimbangan Sampah Warga
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', textAlign: 'center' }}>
            <div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#16a34a', color: '#fff', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>1</div>
              <h4 style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '15px' }}>Pilah Dari Rumah</h4>
              <p style={{ color: '#64748b', fontSize: '13px', marginTop: '4px' }}>Pisahkan sampah organik & anorganik bersih.</p>
            </div>
            <div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#16a34a', color: '#fff', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>2</div>
              <h4 style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '15px' }}>Bawa ke Posko</h4>
              <p style={{ color: '#64748b', fontSize: '13px', marginTop: '4px' }}>Datang setiap Sabtu pagi membawa hasil pilahan.</p>
            </div>
            <div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#16a34a', color: '#fff', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px auto' }}>3</div>
              <h4 style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '15px' }}>Timbang & Catat</h4>
              <p style={{ color: '#64748b', fontSize: '13px', marginTop: '4px' }}>Petugas menimbang & mencatat ke buku tabungan.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}