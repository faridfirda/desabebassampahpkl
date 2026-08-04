import React, { useState } from 'react';

type FilterType = 'all' | 'batas' | 'sampah' | 'cctv' | 'pju';

interface RtDetail {
  ketua: string;
  telp: string;
  warga: string;
  kk: string;
  cctv: string;
  pju: string;
  fasilitas: string;
  status: string;
  hasSampah: boolean;
  hasCctv: boolean;
  hasPju: boolean;
  hasBatas: boolean;
}

export default function PetaWilayahSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedRt, setSelectedRt] = useState<string>('rt03');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const dataRt: Record<string, RtDetail> = {
    rt01: { ketua: 'Bpk. H. Dadang', telp: '0812-1111-2222', warga: '130 Jiwa', kk: '38 KK', cctv: '2 Unit', pju: '5 Titik', fasilitas: 'Kantor Sekretariat RW & Pos Ronda', status: 'Bebas Sampah', hasSampah: false, hasCctv: false, hasPju: true, hasBatas: true },
    rt02: { ketua: 'Bpk. Asep Saepudin', telp: '0812-3333-4444', warga: '145 Jiwa', kk: '42 KK', cctv: '1 Unit', pju: '4 Titik', fasilitas: 'Bank Sampah Induk RW 08', status: 'Bebas Sampah', hasSampah: true, hasCctv: true, hasPju: true, hasBatas: false },
    rt03: { ketua: 'Bpk. M. Yasin', telp: '0812-3456-7803', warga: '142 Jiwa', kk: '40 KK', cctv: '1 Unit', pju: '4 Titik', fasilitas: 'Rumah Komposting Organik', status: 'Bebas Sampah', hasSampah: true, hasCctv: true, hasPju: true, hasBatas: false },
    rt04: { ketua: 'Bpk. Hendra Gunawan', telp: '0812-5555-6666', warga: '120 Jiwa', kk: '35 KK', cctv: '2 Unit', pju: '3 Titik', fasilitas: 'Posko Pemilahan Sampah Warga', status: 'Bebas Sampah', hasSampah: true, hasCctv: true, hasPju: true, hasBatas: false },
    rt05: { ketua: 'Bpk. Rudi Hartono', telp: '0812-7777-8888', warga: '150 Jiwa', kk: '45 KK', cctv: '2 Unit', pju: '6 Titik', fasilitas: 'Kawasan Mandiri & CCTV Lingkungan', status: 'Bebas Sampah', hasSampah: false, hasCctv: true, hasPju: true, hasBatas: false },
    rt06: { ketua: 'Bpk. Sulaeman', telp: '0812-9999-0000', warga: '115 Jiwa', kk: '32 KK', cctv: '1 Unit', pju: '3 Titik', fasilitas: 'Area Hijau & Bank Sampah Unit', status: 'Bebas Sampah', hasSampah: true, hasCctv: true, hasPju: true, hasBatas: false },
    rt07: { ketua: 'Bpk. Diki Wahyudi', telp: '0813-1234-5678', warga: '135 Jiwa', kk: '39 KK', cctv: '2 Unit', pju: '5 Titik', fasilitas: 'Pusat Daur Ulang Plastik', status: 'Bebas Sampah', hasSampah: true, hasCctv: true, hasPju: true, hasBatas: true },
  };

  const currentInfo = dataRt[selectedRt] || dataRt['rt03'];

  const triggerNotification = (msg: string) => {
    setToastMessage(msg);
    setShowPopup(false);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Helper untuk merender ikon filter berdasarkan status RT
  const renderRtIcons = (rtKey: string) => {
    const item = dataRt[rtKey];
    if (!item) return null;

    const showAll = activeFilter === 'all';

    return (
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', minHeight: '24px', alignItems: 'center' }}>
        {(showAll || activeFilter === 'batas') && item.hasBatas && (
          <span title="Batas / Sekretariat / Fasum" style={{ animation: 'bounce 1s infinite alternate' }}>🏢</span>
        )}
        {(showAll || activeFilter === 'sampah') && item.hasSampah && (
          <span title="Bank Sampah / Pengelolaan">♻️</span>
        )}
        {(showAll || activeFilter === 'cctv') && item.hasCctv && (
          <span title="CCTV Pengawas">📹</span>
        )}
        {(showAll || activeFilter === 'pju') && item.hasPju && (
          <span title="Penerangan Jalan (PJU)">💡</span>
        )}
      </div>
    );
  };

  return (
    <section style={{ width: '100%', padding: '40px 20px', backgroundColor: '#f8fafc', boxSizing: 'border-box', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", position: 'relative' }}>
      
      {/* INJECT ANIMATION KEYFRAMES */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        .rt-card {
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .rt-card:hover {
          transform: translateY(-3px) scale(1.01);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
        }
      `}</style>

      {/* TOAST NOTIFICATION */}
      {toastMessage && (
        <div style={{
          position: 'fixed', top: '24px', right: '24px', zIndex: 10000,
          backgroundColor: '#0f172a', color: '#ffffff', padding: '14px 20px', borderRadius: '12px',
          boxShadow: '0 10px 20px -3px rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', gap: '10px',
          animation: 'fadeInDown 0.3s ease'
        }}>
          <span style={{ fontSize: '18px' }}>🚨</span>
          <span style={{ fontSize: '13px', fontWeight: '500' }}>{toastMessage}</span>
        </div>
      )}

      <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '260px 1fr 320px', gap: '24px', alignItems: 'start' }}>
        
        {/* KOLOM KIRI: FILTER & EMERGENCY */}
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0f172a', margin: '0 0 6px 0' }}>Filter Peta</h3>
          <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 16px 0', lineHeight: '1.4' }}>Klik opsi untuk menyaring fasilitas pada peta.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { id: 'batas', label: '🗺️ Batas RW & RT', activeBg: '#eff6ff', activeBorder: '#2563eb' },
              { id: 'sampah', label: '♻️ Bank Sampah & TPS', activeBg: '#f0fdf4', activeBorder: '#16a34a' },
              { id: 'cctv', label: '📹 CCTV Pengawas', activeBg: '#f1f5f9', activeBorder: '#475569' },
              { id: 'pju', label: '💡 PJU (Penerangan)', activeBg: '#fffbeb', activeBorder: '#d97706' },
            ].map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(isActive ? 'all' : (filter.id as FilterType))}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', borderRadius: '10px',
                    border: isActive ? `2px solid ${filter.activeBorder}` : '1px solid #cbd5e1',
                    backgroundColor: isActive ? filter.activeBg : '#ffffff',
                    color: '#1e293b', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', textAlign: 'left', width: '100%',
                    transition: 'all 0.2s'
                  }}
                >
                  {filter.label}
                </button>
              );
            })}

            {activeFilter !== 'all' && (
              <button 
                onClick={() => setActiveFilter('all')}
                style={{ marginTop: '6px', padding: '8px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', color: '#475569', cursor: 'pointer' }}
              >
                🔄 Tampilkan Semua Fasilitas
              </button>
            )}
          </div>

          {/* TOMBOL DARURAT */}
          <div style={{ marginTop: '24px', backgroundColor: '#fef2f2', border: '1px solid #fecaca', padding: '14px', borderRadius: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#dc2626', display: 'block', marginBottom: '4px' }}>⚠️ Status Wilayah</span>
            <p style={{ fontSize: '11px', color: '#7f1d1d', margin: '0 0 10px 0', lineHeight: '1.4' }}>Sistem respon cepat & penanganan darurat warga.</p>
            <button 
              onClick={() => setShowPopup(true)}
              style={{
                width: '100%', padding: '10px', backgroundColor: '#ef4444', color: '#ffffff', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '12px', cursor: 'pointer',
                animation: 'pulseGlow 2s infinite'
              }}
            >
              🚨 Cek Alarm Warga
            </button>
          </div>
        </div>

        {/* KOLOM TENGAH: PETA WILAYAH INTERAKTIF */}
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <span style={{ fontSize: '12px', color: '#64748b' }}>🧭 Utara (N)</span>
            <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#475569', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '20px' }}>
              {activeFilter !== 'all' ? `Filter: ${activeFilter.toUpperCase()}` : 'Semua Fasilitas Terlihat'}
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '110px 1fr 1fr 1fr', gridTemplateRows: 'auto auto', gap: '12px' }}>
            
            {/* RT 01 */}
            <div 
              className="rt-card"
              onClick={() => setSelectedRt('rt01')}
              style={{
                gridRow: 'span 2', border: selectedRt === 'rt01' ? '2px solid #2563eb' : '1px solid #93c5fd', borderRadius: '12px', padding: '12px',
                backgroundColor: selectedRt === 'rt01' ? '#eff6ff' : '#ffffff', cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                boxShadow: selectedRt === 'rt01' ? '0 0 0 3px rgba(37, 99, 235, 0.2)' : 'none'
              }}
            >
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#1d4ed8', margin: '0 0 8px 0' }}>RT 01</h4>
                {renderRtIcons('rt01')}
              </div>
              <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#3b82f6', marginTop: '10px' }}>Sekretariat RW</span>
            </div>

            {/* RT 02 */}
            <div 
              className="rt-card"
              onClick={() => setSelectedRt('rt02')}
              style={{
                gridColumn: 'span 2', gridRow: 'span 1', border: selectedRt === 'rt02' ? '2px solid #dc2626' : '1px solid #fca5a5', borderRadius: '12px', padding: '14px',
                backgroundColor: selectedRt === 'rt02' ? '#fef2f2' : '#ffffff', cursor: 'pointer',
                boxShadow: selectedRt === 'rt02' ? '0 0 0 3px rgba(220, 38, 38, 0.2)' : 'none'
              }}
            >
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#b91c1c', margin: '0 0 8px 0' }}>RT 02</h4>
              {renderRtIcons('rt02')}
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#16a34a', marginTop: '6px', display: 'block' }}>Bank Sampah Induk</span>
            </div>

            {/* RT 04 */}
            <div 
              className="rt-card"
              onClick={() => setSelectedRt('rt04')}
              style={{
                border: selectedRt === 'rt04' ? '2px solid #9333ea' : '1px solid #d8b4fe', borderRadius: '12px', padding: '12px',
                backgroundColor: selectedRt === 'rt04' ? '#faf5ff' : '#ffffff', cursor: 'pointer',
                boxShadow: selectedRt === 'rt04' ? '0 0 0 3px rgba(147, 51, 234, 0.2)' : 'none'
              }}
            >
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#7e22ce', margin: '0 0 6px 0' }}>RT 04</h4>
              {renderRtIcons('rt04')}
            </div>

            {/* RT 06 */}
            <div 
              className="rt-card"
              onClick={() => setSelectedRt('rt06')}
              style={{
                border: selectedRt === 'rt06' ? '2px solid #0284c7' : '1px solid #7dd3fc', borderRadius: '12px', padding: '12px',
                backgroundColor: selectedRt === 'rt06' ? '#f0f9ff' : '#ffffff', cursor: 'pointer',
                boxShadow: selectedRt === 'rt06' ? '0 0 0 3px rgba(2, 132, 199, 0.2)' : 'none'
              }}
            >
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#0369a1', margin: '0 0 6px 0' }}>RT 06</h4>
              {renderRtIcons('rt06')}
            </div>

            {/* RT 03 */}
            <div 
              className="rt-card"
              onClick={() => setSelectedRt('rt03')}
              style={{
                gridColumn: 'span 2', border: selectedRt === 'rt03' ? '2px solid #ca8a04' : '1px solid #fde047', borderRadius: '12px', padding: '14px',
                backgroundColor: selectedRt === 'rt03' ? '#fefce8' : '#ffffff', cursor: 'pointer',
                boxShadow: selectedRt === 'rt03' ? '0 0 0 3px rgba(202, 138, 4, 0.2)' : 'none'
              }}
            >
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#a16207', margin: '0 0 6px 0' }}>RT 03</h4>
              {renderRtIcons('rt03')}
              <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#854d0e', marginTop: '6px', display: 'block' }}>Komposter Organik</span>
            </div>

            {/* RT 07 */}
            <div 
              className="rt-card"
              onClick={() => setSelectedRt('rt07')}
              style={{
                gridColumn: 'span 2', border: selectedRt === 'rt07' ? '2px solid #ea580c' : '1px solid #fdba74', borderRadius: '12px', padding: '14px',
                backgroundColor: selectedRt === 'rt07' ? '#fff7ed' : '#ffffff', cursor: 'pointer',
                boxShadow: selectedRt === 'rt07' ? '0 0 0 3px rgba(234, 88, 12, 0.2)' : 'none'
              }}
            >
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#c2410c', margin: '0 0 6px 0' }}>RT 07</h4>
              {renderRtIcons('rt07')}
            </div>

          </div>
        </div>

        {/* KOLOM KANAN: DETAIL PANEL RT */}
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
              👤
            </div>
            <div>
              <span style={{ fontSize: '10px', fontWeight: 'bold', color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Ketua {selectedRt.toUpperCase()}
              </span>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#0f172a', margin: '2px 0 0 0' }}>{currentInfo.ketua}</h4>
              <span style={{ fontSize: '12px', color: '#64748b' }}>📞 {currentInfo.telp}</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px dashed #f1f5f9' }}>
              <span style={{ color: '#64748b' }}>👥 Total Warga</span>
              <strong style={{ color: '#0f172a' }}>{currentInfo.warga}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px dashed #f1f5f9' }}>
              <span style={{ color: '#64748b' }}>🏠 Kepala Keluarga</span>
              <strong style={{ color: '#0f172a' }}>{currentInfo.kk}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px dashed #f1f5f9' }}>
              <span style={{ color: '#64748b' }}>📹 CCTV Aktif</span>
              <strong style={{ color: '#0f172a' }}>{currentInfo.cctv}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px dashed #f1f5f9' }}>
              <span style={{ color: '#64748b' }}>💡 Titik PJU</span>
              <strong style={{ color: '#0f172a' }}>{currentInfo.pju}</strong>
            </div>
          </div>

          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
            <span style={{ fontSize: '11px', color: '#64748b', display: 'block', marginBottom: '4px' }}>Fasilitas Utama:</span>
            <strong style={{ fontSize: '13px', color: '#16a34a', display: 'block', marginBottom: '12px' }}>🌱 {currentInfo.fasilitas}</strong>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f8fafc', padding: '10px 12px', borderRadius: '8px' }}>
              <span style={{ fontSize: '12px', color: '#64748b' }}>Status Wilayah</span>
              <span style={{ fontSize: '11px', fontWeight: 'bold', backgroundColor: '#dcfce7', color: '#15803d', padding: '4px 8px', borderRadius: '6px' }}>
                {currentInfo.status}
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* POP-UP MODAL INFORMASI DARURAT */}
      {showPopup && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', width: '400px', maxWidth: '90%',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', borderTop: '6px solid #ef4444', animation: 'fadeInDown 0.2s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#b91c1c', margin: 0 }}>🚨 Pusat Alarm & Darurat Warga</h3>
              <button 
                onClick={() => setShowPopup(false)}
                style={{ background: 'none', border: 'none', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            <p style={{ fontSize: '13px', color: '#475569', lineHeight: '1.5', margin: '0 0 16px 0' }}>
              Status keamanan seluruh RT di RW 08 saat ini terpantau <strong>AMAN</strong>. Belum ada laporan insiden darurat atau tombol panik yang ditekan warga.
            </p>

            <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '12px', color: '#334155' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span>📞 Hotline Satpam RW:</span>
                <strong>0812-9988-7766</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>🚑 Ambulans Siaga:</span>
                <strong>Aktif (2 Unit)</strong>
              </div>
            </div>

            <button 
              onClick={() => triggerNotification('Sinyal Alarm Darurat berhasil disiarkan ke seluruh pengurus RT!')}
              style={{
                width: '100%', padding: '12px', backgroundColor: '#ef4444', color: '#ffffff',
                border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer'
              }}
            >
              Bunyikan Alarm Tes / Darurat
            </button>
          </div>
        </div>
      )}
    </section>
  );
}