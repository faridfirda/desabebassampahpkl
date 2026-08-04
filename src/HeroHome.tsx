import React from 'react';
import gerbangFoto from './gerbang.jpeg';

interface HeroHomeProps {
  onLoginClick?: () => void;
}

export default function HeroHome({ onLoginClick }: HeroHomeProps) {
  return (
    <section id="beranda" style={{ width: '100%', minHeight: 'calc(100vh - 73px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 50px', boxSizing: 'border-box', backgroundColor: '#ffffff' }}>
      <div style={{ width: '100%', maxWidth: '1350px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center', boxSizing: 'border-box' }}>
        
        <div>
          {/* Badge Pengubah Nuansa Tema */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '9999px', fontSize: '13px', marginBottom: '24px', color: '#16a34a', fontWeight: '600' }}>
            <span style={{ color: '#16a34a' }}>●</span> RW 08 Cibangkong Kawasan Bebas Sampah
          </div>

          {/* H1 Diselaraskan dengan Fokus Kebersihan & Bank Sampah */}
          <h1 style={{ fontSize: '44px', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '24px', color: '#0f172a' }}>
            Mewujudkan RW 08 Cibangkong <br />
            <span style={{ color: '#16a34a' }}>Bebas Sampah & Mandiri</span>
          </h1>

          {/* Paragraph Narasi Utama Dibuat Eksplisit Sesuai Catatan Evaluasi */}
          <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.6', marginBottom: '32px', maxWidth: '600px' }}>
            Selamat datang warga RW 08 Kelurahan Cibangkong! Bersama kita wujudkan lingkungan yang bersih, sehat, dan berdaya melalui pengelolaan bank sampah mandiri, gotong royong kerja bakti, serta transparansi informasi publik.
          </p>

          <div style={{ display: 'flex', gap: '16px' }}>
            <button 
              onClick={onLoginClick}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#2563eb', color: '#ffffff', padding: '12px 24px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: '600', boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)' }}
            >
              🔒 Login Admin
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '16px', width: '100%', maxWidth: '500px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.08)', boxSizing: 'border-box' }}>
            <div style={{ overflow: 'hidden', borderRadius: '12px', aspectRatio: '16/9' }}>
              <img 
                src={gerbangFoto} 
                alt="Gerbang Masuk RW 08" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{ marginTop: '14px', fontSize: '14px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🏛️</span>
              <span>Kawasan Kawasan Edukasi & Pengelolaan Sampah RW 08 Cibangkong</span>
            </div>
          </div>
        </div>

      </div>
    </section> 
  );
}