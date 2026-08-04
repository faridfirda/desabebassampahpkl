import React, { useState, useEffect } from 'react';
import gerbangFoto from './gerbang.jpeg';

interface HeroHomeProps {
  onLoginClick?: () => void;
}

export default function HeroHome({ onLoginClick }: HeroHomeProps) {
  // State pikeun Target Minggu Ini (Dinamis)
  const [targetPersen, setTargetPersen] = useState<string>('85%');
  const [targetLabel, setTargetLabel] = useState<string>('Target Minggu Ini');

  useEffect(() => {
    const loadTargetData = () => {
      const savedTarget = localStorage.getItem("rw_target");
      if (savedTarget) {
        try {
          const parsed = JSON.parse(savedTarget);
          if (parsed.persen) setTargetPersen(parsed.persen);
          if (parsed.label) setTargetLabel(parsed.label);
        } catch (e) {
          setTargetPersen(savedTarget);
        }
      }
    };

    loadTargetData();

    window.addEventListener("storage", loadTargetData);
    window.addEventListener("local-storage-update", loadTargetData);

    return () => {
      window.removeEventListener("storage", loadTargetData);
      window.removeEventListener("local-storage-update", loadTargetData);
    };
  }, []);

  // --- ANIMASI HANDLER FOR CARD TARGET ---
  const handleMouseEnterCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.target-icon') as HTMLElement;
    
    // Animasi Card
    card.style.transform = 'translateY(-8px) scale(1.05)';
    card.style.boxShadow = '0 16px 30px -5px rgba(22, 163, 74, 0.3)';
    card.style.borderColor = '#22c55e';

    // Animasi Ikon ♻️
    if (icon) {
      icon.style.transform = 'rotate(180deg) scale(1.15)';
      icon.style.backgroundColor = '#bbf7d0';
    }
  };

  const handleMouseLeaveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.target-icon') as HTMLElement;

    // Reset Card
    card.style.transform = 'translateY(0px) scale(1)';
    card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
    card.style.borderColor = '#f1f5f9';

    // Reset Ikon
    if (icon) {
      icon.style.transform = 'rotate(0deg) scale(1)';
      icon.style.backgroundColor = '#e6f4ea';
    }
  };

  // --- ANIMASI HANDLER FOR GAMBAR GERBANG ---
  const handleMouseEnterImageFrame = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = 'scale(1.08)';
  };

  const handleMouseLeaveImageFrame = (e: React.MouseEvent<HTMLDivElement>) => {
    const img = e.currentTarget.querySelector('img');
    if (img) img.style.transform = 'scale(1)';
  };

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff', scrollBehavior: 'smooth' }}>
      
      {/* HERO SECTION UTAMA */}
      <section 
        id="beranda" 
        style={{ 
          width: '100%', 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: '100px 24px 60px 24px', 
          boxSizing: 'border-box',
          scrollMarginTop: '20px' 
        }}
      >
        <div style={{ width: '100%', maxWidth: '1320px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* BAGIAN TEKS */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', marginBottom: '20px', color: '#16a34a', fontWeight: '600' }}>
              <span>🌿</span> Menuju Kawasan Zero Waste
            </div>

            <h1 style={{ fontSize: '46px', fontWeight: '800', lineHeight: '1.2', marginBottom: '20px', color: '#0f172a' }}>
              Wujudkan RW 08 <br />
              <span style={{ color: '#16a34a' }}>Kawasan Bebas Sampah</span>
            </h1>

            <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.6', marginBottom: '32px' }}>
              Gerakan sadar lingkungan untuk menciptakan RW 08 Cibangkong yang bersih, sehat, dan asri. Bersama kita kelola sampah mandiri mulai dari rumah melalui pemilahan yang bijak dan berkelanjutan.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a 
                href="#bank-sampah"
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#16a34a', color: '#ffffff', padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', boxShadow: '0 6px 15px -3px rgba(22, 163, 74, 0.25)', transition: 'transform 0.2s ease' }}
              >
                ♻️ Mulai Kelola Sampah
              </a>

              <button 
                type="button"
                onClick={onLoginClick}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0px)'}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#2563eb', color: '#ffffff', padding: '14px 28px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: '600', fontSize: '15px', boxShadow: '0 6px 15px -3px rgba(37, 99, 235, 0.25)', transition: 'transform 0.2s ease' }}
              >
                🔒 Login Admin
              </button>
            </div>
          </div>

          {/* BAGIAN GAMBAR & CARD TARGET */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '14px', width: '100%', maxWidth: '580px', boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.1)' }}>
              
              {/* FRAME GAMBAR DENGAN HOVER ZOOM */}
              <div 
                onMouseEnter={handleMouseEnterImageFrame}
                onMouseLeave={handleMouseLeaveImageFrame}
                style={{ overflow: 'hidden', borderRadius: '16px', aspectRatio: '16/10', position: 'relative' }}
              >
                <img 
                  src={gerbangFoto} 
                  alt="Gerbang RW 08 Cibangkong" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
                />

                {/* CARD TARGET MINGGU INI (MICRO-INTERACTIVE) */}
                <div 
                  onMouseEnter={handleMouseEnterCard}
                  onMouseLeave={handleMouseLeaveCard}
                  style={{ 
                    position: 'absolute', 
                    bottom: '16px', 
                    left: '16px', 
                    backgroundColor: '#ffffff', 
                    padding: '10px 16px', 
                    borderRadius: '14px', 
                    boxShadow: '0 8px 20px rgba(0,0,0,0.12)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px', 
                    border: '1.5px solid #f1f5f9',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)' 
                  }}
                >
                  <div 
                    className="target-icon"
                    style={{ 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '50%', 
                      backgroundColor: '#e6f4ea', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: '#16a34a', 
                      fontSize: '16px', 
                      flexShrink: 0,
                      transition: 'transform 0.4s ease, background-color 0.3s ease'
                    }}
                  >
                    ♻️
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', lineHeight: '1.2' }}>{targetLabel}</div>
                    <div style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', lineHeight: '1.2', marginTop: '2px' }}>{targetPersen}</div>
                  </div>
                </div>

              </div>

              <div style={{ marginTop: '14px', fontSize: '14px', color: '#475569', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
                <span>📍</span>
                <span>Gapura Utama RW 08 Kelurahan Cibangkong</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}