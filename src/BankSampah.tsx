import React, { useState, useEffect } from 'react';

export default function BankSampah() {
  const [counts, setCounts] = useState({ ton: 0, warga: 0, titik: 0 });

  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts({
        ton: parseFloat(((1.2 / steps) * step).toFixed(1)),
        warga: Math.floor((150 / steps) * step),
        titik: Math.floor((24 / steps) * step),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({ ton: 1.2, warga: 150, titik: 24 });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="bank-sampah" 
      style={{ 
        width: '100%', 
        padding: '90px 20px', 
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)', 
        boxSizing: 'border-box',
        scrollMarginTop: '90px',
        position: 'relative',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
      }}
    >
      <style>{`
        @keyframes floatEffect {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .stat-card, .feature-card {
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .stat-card:hover, .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 35px -10px rgba(0, 0, 0, 0.08) !important;
        }
        .feature-card:hover .icon-box {
          transform: scale(1.1) rotate(5deg);
          background-color: #dcfce7 !important;
        }
        .icon-box {
          transition: all 0.3s ease;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* 1. 3 CARD STATISTIK */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '80px' }}>
          
          {/* Statistik 1 */}
          <div className="stat-card" style={{ 
            backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px 30px', textAlign: 'center',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.04)', cursor: 'default'
          }}>
            <div className="icon-box" style={{ width: '68px', height: '68px', borderRadius: '20px', background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '28px', boxShadow: '0 8px 16px -4px rgba(22, 163, 74, 0.2)' }}>
              🗑️
            </div>
            <h3 style={{ fontSize: '42px', fontWeight: '800', color: '#16a34a', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>
              {counts.ton} Ton
            </h3>
            <p style={{ color: '#64748b', fontSize: '15px', margin: 0, fontWeight: '600' }}>
              Sampah Terolah
            </p>
          </div>

          {/* Statistik 2 */}
          <div className="stat-card" style={{ 
            backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px 30px', textAlign: 'center',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.04)', cursor: 'default'
          }}>
            <div className="icon-box" style={{ width: '68px', height: '68px', borderRadius: '20px', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '28px', boxShadow: '0 8px 16px -4px rgba(217, 119, 6, 0.2)' }}>
              👥
            </div>
            <h3 style={{ fontSize: '42px', fontWeight: '800', color: '#0f172a', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>
              {counts.warga}+
            </h3>
            <p style={{ color: '#64748b', fontSize: '15px', margin: 0, fontWeight: '600' }}>
              Warga Aktif
            </p>
          </div>

          {/* Statistik 3 */}
          <div className="stat-card" style={{ 
            backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px 30px', textAlign: 'center',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.04)', cursor: 'default'
          }}>
            <div className="icon-box" style={{ width: '68px', height: '68px', borderRadius: '20px', background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', fontSize: '28px', boxShadow: '0 8px 16px -4px rgba(2, 132, 199, 0.2)' }}>
              📍
            </div>
            <h3 style={{ fontSize: '42px', fontWeight: '800', color: '#2563eb', margin: '0 0 6px 0', letterSpacing: '-0.5px' }}>
              {counts.titik}
            </h3>
            <p style={{ color: '#64748b', fontSize: '15px', margin: 0, fontWeight: '600' }}>
              Titik Kumpul
            </p>
          </div>

        </div>

        {/* 2. BAGIAN JUDUL */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: '#f0fdf4', color: '#16a34a', padding: '6px 18px', borderRadius: '99px', fontSize: '13px', fontWeight: '700', marginBottom: '14px', border: '1px solid #bbf7d0', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            <span style={{ animation: 'floatEffect 2s infinite ease-in-out' }}>🌱</span> AKSI KOMUNITAS
          </span>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0f172a', marginBottom: '14px', letterSpacing: '-0.5px' }}>
            Langkah Nyata, Bersama-sama
          </h2>
          <p style={{ fontSize: '16px', color: '#475569', maxWidth: '620px', margin: '0 auto', lineHeight: '1.6' }}>
            Program terpadu kami dirancang untuk mempermudah warga dalam mengelola lingkungan dengan cara yang modern dan komunal.
          </p>
        </div>

        {/* 3. 3 CARD FITUR DI BAWAH */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          
          {/* Feature 1 */}
          <div className="feature-card" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px 30px', textAlign: 'center', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.04)' }}>
            <div className="icon-box" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', fontSize: '34px' }}>
              ♻️
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>
              Pilah dari Rumah
            </h3>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
              Panduan interaktif dan starter-kit untuk membantu Anda memisahkan sampah organik, plastik, dan kertas dengan mudah langsung dari dapur Anda.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px 30px', textAlign: 'center', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.04)' }}>
            <div className="icon-box" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', fontSize: '34px' }}>
              💳
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>
              Bank Sampah Digital
            </h3>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
              Pantau setoran sampah daur ulang Anda dan konversikan menjadi poin yang bisa ditukar dengan insentif ekonomi bagi keluarga.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '40px 30px', textAlign: 'center', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.04)' }}>
            <div className="icon-box" style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', fontSize: '34px' }}>
              🎓
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', marginBottom: '12px' }}>
              Pelatihan Komunitas
            </h3>
            <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.6', margin: 0 }}>
              Sesi rutin membuat kompos, kerajinan daur ulang, dan praktik hidup minim sampah (zero waste) bersama para ahli lokal.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}