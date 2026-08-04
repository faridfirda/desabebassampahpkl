import React from 'react';
import gerbangFoto from './gerbang.jpeg';

interface HeroHomeProps {
  onLoginClick?: () => void;
}

export default function HeroHome({ onLoginClick }: HeroHomeProps) {
  return (
    <section id="beranda" style={{ width: '100%', minHeight: 'calc(100vh - 73px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', boxSizing: 'border-box', backgroundColor: '#ffffff' }}>
      <div style={{ width: '100%', maxWidth: '1200px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
        
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '9999px', fontSize: '13px', marginBottom: '20px', color: '#16a34a', fontWeight: '600' }}>
            <span>🌱</span> Kawasan Bebas Sampah & Masyarakat Berdaya
          </div>

          <h1 style={{ fontSize: '38px', fontWeight: 'bold', lineHeight: '1.25', marginBottom: '20px', color: '#0f172a' }}>
            Wilayah RW 08 Cibangkong <br />
            <span style={{ color: '#16a34a' }}>Bersih, Hijau & Mandiri</span>
          </h1>

          <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.6', marginBottom: '28px' }}>
            Sampurasun Warga RW 08 Cibangkong! Bersama kita wujudkan lingkungan yang sehat melalui gerakan pemilahan sampah dari rumah, gotong royong kerja bakti, dan pemberdayaan ekonomi warga lewat Bank Sampah.
          </p>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a 
              href="#bank-sampah"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#16a34a', color: '#ffffff', padding: '12px 22px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.2)' }}
            >
              ♻️ Program Bank Sampah
            </a>

            <button 
              type="button"
              onClick={onLoginClick}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#2563eb', color: '#ffffff', padding: '12px 22px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontWeight: '600', boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)' }}
            >
              🔒 Login Admin
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '12px', width: '100%', maxWidth: '480px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)' }}>
            <div style={{ overflow: 'hidden', borderRadius: '12px', aspectRatio: '16/10' }}>
              <img 
                src={gerbangFoto} 
                alt="Gerbang RW 08 Cibangkong" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ marginTop: '12px', fontSize: '13px', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>📍</span>
              <span>Gapura Utama RW 08 Kelurahan Cibangkong</span>
            </div>
          </div>
        </div>

      </div>
    </section> 
  );
}