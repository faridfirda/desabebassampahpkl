import React, { useState } from 'react';

// ==========================================
// 1. INTERFACES & TYPES
// ==========================================
export interface ProfilDesa {
  namaDesa: string;
  kepalaDesa: string;
  deskripsi: string;
  totalWarga: number;
  totalKK: number;
  totalRT: number;
  luasWilayah: string;
}

interface DataRT {
  rt: string;
  ketua: string;
  kontak: string;
  foto: string;
  warga: number;
  kk: number;
  cctv: number;
  pju: number;
  status: string;
}

// ==========================================
// 2. DATA DUMMY / CONSTANTS (WAJIB DI ATAS)
// ==========================================
const profilDesa: ProfilDesa = {
  namaDesa: 'RW 08 Desa Samudra',
  kepalaDesa: 'Bpk. H. Rahmat Hidayat',
  deskripsi: 'Wilayah RW 08 Desa Samudra merupakan kawasan pemukiman yang tertib, aman, dan didukung oleh infrastruktur digital serta keamanan warga berbasis RT.',
  totalWarga: 940,
  totalKK: 266,
  totalRT: 7,
  luasWilayah: '12.5 Ha',
};

const dataWilayah: Record<string, DataRT> = {
  'RT 01': { rt: 'RT 01', ketua: 'Bpk. Ahmad Suhendar', kontak: '0812-3456-7801', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', warga: 120, kk: 35, cctv: 2, pju: 5, status: 'Aman' },
  'RT 02': { rt: 'RT 02', ketua: 'Bpk. Cecep Solihin', kontak: '0812-3456-7802', foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150', warga: 145, kk: 40, cctv: 1, pju: 4, status: 'Aman' },
  'RT 03': { rt: 'RT 03', ketua: 'Bpk. Dadang Kusnadi', kontak: '0812-3456-7803', foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150', warga: 160, kk: 45, cctv: 3, pju: 6, status: 'Aman' },
  'RT 04': { rt: 'RT 04', ketua: 'Bpk. Eko Herman', kontak: '0812-3456-7804', foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150', warga: 130, kk: 38, cctv: 2, pju: 3, status: 'Pengawasan CCTV' },
  'RT 05': { rt: 'RT 05', ketua: 'Bpk. Farhan Ramdhan', kontak: '0812-3456-7805', foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150', warga: 110, kk: 30, cctv: 1, pju: 5, status: 'Aman' },
  'RT 06': { rt: 'RT 06', ketua: 'Bpk. Gunawan Wibowo', kontak: '0812-3456-7806', foto: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150', warga: 125, kk: 36, cctv: 2, pju: 4, status: 'Aman' },
  'RT 07': { rt: 'RT 07', ketua: 'Bpk. Hendi Mulyana', kontak: '0812-3456-7807', foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150', warga: 150, kk: 42, cctv: 2, pju: 6, status: 'Aman' },
};

// ==========================================
// 3. KOMPONEN HEADER PROFIL
// ==========================================
function HeaderProfil() {
  return (
    <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
      <div style={{ maxWidth: '450px' }}>
        <span style={{ fontSize: '11px', color: '#0284c7', fontWeight: 'bold', letterSpacing: '1px' }}>PROFIL WILAYAH</span>
        <h2 style={{ margin: '2px 0 0 0', fontSize: '22px', fontWeight: 'bold', color: '#0f172a' }}>{profilDesa.namaDesa}</h2>
        <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: '#64748b' }}>Ketua RW: <strong style={{ color: '#1e293b' }}>{profilDesa.kepalaDesa}</strong></p>
        <p style={{ margin: '4px 0 0 0', fontSize: '11px', color: '#475569', lineHeight: '1.4' }}>{profilDesa.deskripsi}</p>
      </div>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
          <span style={{ fontSize: '10px', color: '#64748b', display: 'block', fontWeight: 'bold' }}>TOTAL WARGA</span>
          <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#0284c7' }}>{profilDesa.totalWarga} Jiwa</span>
        </div>
        <div style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
          <span style={{ fontSize: '10px', color: '#64748b', display: 'block', fontWeight: 'bold' }}>TOTAL KK</span>
          <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#0284c7' }}>{profilDesa.totalKK} KK</span>
        </div>
        <div style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
          <span style={{ fontSize: '10px', color: '#64748b', display: 'block', fontWeight: 'bold' }}>JUMLAH RT</span>
          <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#0284c7' }}>{profilDesa.totalRT} RT</span>
        </div>
        <div style={{ textAlign: 'center', backgroundColor: '#ffffff', padding: '8px 16px', borderRadius: '8px', border: '1px solid #cbd5e1' }}>
          <span style={{ fontSize: '10px', color: '#64748b', display: 'block', fontWeight: 'bold' }}>LUAS WILAYAH</span>
          <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#0284c7' }}>{profilDesa.luasWilayah}</span>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 4. KOMPONEN UTAMA
// ==========================================
export default function InteractiveMap() {
  const [alarmActive, setAlarmActive] = useState(true);
  const [selectedRT, setSelectedRT] = useState<DataRT>(dataWilayah['RT 01']);

  const [showBatas, setShowBatas] = useState(true);
  const [showFasum, setShowFasum] = useState(true);
  const [showCCTV, setShowCCTV] = useState(true);
  const [showPJU, setShowPJU] = useState(true);

  const handleBlockClick = (rtName: string) => {
    if (dataWilayah[rtName]) {
      setSelectedRT(dataWilayah[rtName]);
    }
  };

  return (
    <section id="peta" style={{ width: '100%', padding: '40px 20px', backgroundColor: '#ffffff', color: '#1e293b', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)' }}>
        
        {/* HEADER PROFIL DITAMPILKAN DI SINI */}
        <HeaderProfil />

        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr 320px', gap: '20px', alignItems: 'start' }}>
          
          {/* SIDEBAR KIRI - FILTER & ALERT */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '4px 0' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 6px 0', color: '#0f172a' }}>Filter Peta</h3>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.4' }}>
                Atur elemen peta atau klik blok RT untuk melihat rincian.
              </p>
            </div>

            {alarmActive && (
              <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '12px', padding: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#dc2626', fontWeight: 'bold', fontSize: '13px', marginBottom: '6px' }}>
                  <span>⚠️</span> Status Darurat!
                </div>
                <p style={{ fontSize: '11px', color: '#991b1b', margin: '0 0 10px 0', lineHeight: '1.4' }}>
                  Tombol darurat ditekan oleh warga.
                </p>
                <button 
                  onClick={() => setAlarmActive(false)}
                  style={{ width: '100%', backgroundColor: '#ef4444', color: '#ffffff', border: 'none', padding: '8px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', fontSize: '12px' }}
                >
                  Matikan Alarm
                </button>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button 
                onClick={() => setShowBatas(!showBatas)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: showBatas ? '#e0f2fe' : '#f8fafc', border: '1px solid #0284c7', color: showBatas ? '#0369a1' : '#64748b', padding: '10px 14px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
              >
                <span>🗺️ Batas RW & RT</span>
                <span>{showBatas ? '✓' : ''}</span>
              </button>

              <button 
                onClick={() => setShowFasum(!showFasum)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: showFasum ? '#e0f2fe' : '#f8fafc', border: '1px solid #0284c7', color: showFasum ? '#0369a1' : '#64748b', padding: '10px 14px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
              >
                <span>🏛️ Fasilitas Umum</span>
                <span>{showFasum ? '✓' : ''}</span>
              </button>

              <button 
                onClick={() => setShowCCTV(!showCCTV)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: showCCTV ? '#ffe4e6' : '#f8fafc', border: '1px solid #e11d48', color: showCCTV ? '#be123c' : '#64748b', padding: '10px 14px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
              >
                <span>📷 CCTV Pengawas</span>
                <span>{showCCTV ? '✓' : ''}</span>
              </button>

              <button 
                onClick={() => setShowPJU(!showPJU)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: showPJU ? '#fef9c3' : '#f8fafc', border: '1px solid #ca8a04', color: showPJU ? '#854d0e' : '#64748b', padding: '10px 14px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
              >
                <span>💡 PJU (Penerangan)</span>
                <span>{showPJU ? '✓' : ''}</span>
              </button>
            </div>
          </div>

          {/* AREA MAPS / GRID RT */}
          <div style={{ backgroundColor: '#f1f5f9', borderRadius: '12px', border: '1px solid #cbd5e1', padding: '16px', minHeight: '520px', position: 'relative', display: 'grid', gridTemplateColumns: '60px 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '12px' }}>
            <div style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '20px', padding: '2px 8px', fontSize: '11px', fontWeight: 'bold', color: '#0284c7', zIndex: 10 }}>🧭 N</div>

            <div onClick={() => handleBlockClick('RT 01')} style={{ gridRow: '1 / 3', gridColumn: '1', border: showBatas ? '2px solid #0284c7' : '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: selectedRT?.rt === 'RT 01' ? '#bae6fd' : '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#0f172a', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', gap: '6px', transition: 'all 0.2s' }}>
              <span>RT 01</span>
              {showPJU && <span style={{ fontSize: '12px' }}>💡</span>}
            </div>

            <div onClick={() => handleBlockClick('RT 02')} style={{ border: showBatas ? '2px solid #f43f5e' : '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: selectedRT?.rt === 'RT 02' ? '#bae6fd' : '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#0f172a', position: 'relative', cursor: 'pointer', gap: '4px', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {showFasum && <span style={{ fontSize: '14px' }}>🏛️</span>}
                {showPJU && <span style={{ fontSize: '14px' }}>💡</span>}
              </div>
              <span style={{ fontWeight: 'bold', fontSize: '13px' }}>RT 02</span>
            </div>

            <div onClick={() => handleBlockClick('RT 04')} style={{ border: showBatas ? '2px solid #a855f7' : '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: selectedRT?.rt === 'RT 04' ? '#bae6fd' : '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#0f172a', position: 'relative', cursor: 'pointer', gap: '4px', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {showCCTV && <span style={{ fontSize: '14px' }}>📷</span>}
                {showPJU && <span style={{ fontSize: '14px' }}>💡</span>}
              </div>
              <span style={{ fontWeight: 'bold', fontSize: '13px' }}>RT 04</span>
            </div>

            <div onClick={() => handleBlockClick('RT 06')} style={{ border: showBatas ? '2px solid #0284c7' : '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: selectedRT?.rt === 'RT 06' ? '#bae6fd' : '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#0f172a', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', gap: '4px', transition: 'all 0.2s' }}>
              {showPJU && <span style={{ fontSize: '14px' }}>💡</span>}
              <span>RT 06</span>
            </div>

            <div onClick={() => handleBlockClick('RT 03')} style={{ border: showBatas ? '2px solid #10b981' : '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: selectedRT?.rt === 'RT 03' ? '#bae6fd' : '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#0f172a', position: 'relative', cursor: 'pointer', gap: '4px', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {showFasum && <span style={{ fontSize: '14px' }}>🏛️</span>}
                {showPJU && <span style={{ fontSize: '14px' }}>💡</span>}
              </div>
              <span style={{ fontWeight: 'bold', fontSize: '13px' }}>RT 03</span>
            </div>

            <div onClick={() => handleBlockClick('RT 05')} style={{ gridColumn: '4', border: showBatas ? '2px solid #f59e0b' : '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: selectedRT?.rt === 'RT 05' ? '#bae6fd' : '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#0f172a', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', gap: '4px', transition: 'all 0.2s' }}>
              {showPJU && <span style={{ fontSize: '14px' }}>💡</span>}
              <span>RT 05</span>
            </div>

            <div onClick={() => handleBlockClick('RT 07')} style={{ gridColumn: '4', gridRow: '2', border: showBatas ? '2px solid #f97316' : '1px solid #cbd5e1', borderRadius: '10px', backgroundColor: selectedRT?.rt === 'RT 07' ? '#bae6fd' : '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#0f172a', position: 'relative', marginTop: '-100px', cursor: 'pointer', gap: '4px', transition: 'all 0.2s' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                {showFasum && <span style={{ fontSize: '14px' }}>🏛️</span>}
                {showPJU && <span style={{ fontSize: '14px' }}>💡</span>}
              </div>
              <span style={{ fontWeight: 'bold', fontSize: '13px' }}>RT 07</span>
            </div>

            {showCCTV && (
              <div style={{ position: 'absolute', top: '55%', left: '26%', transform: 'translate(-50%, -50%)', backgroundColor: '#e11d48', border: '1px solid #fda4af', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#ffffff' }}>📷</div>
            )}

            {alarmActive && (
              <div style={{ position: 'absolute', top: '75%', left: '26%', transform: 'translate(-50%, -50%)', backgroundColor: '#ef4444', border: '1px solid #fca5a5', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>⚠️</div>
            )}
          </div>

          {/* PANEL KANAN - DETAIL RT */}
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#ffffff', padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
              <img src={selectedRT.foto} alt={selectedRT.ketua} style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0284c7' }} />
              <div>
                <span style={{ fontSize: '11px', color: '#0284c7', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Ketua {selectedRT.rt}</span>
                <h4 style={{ margin: '2px 0 0 0', fontSize: '14px', color: '#0f172a', fontWeight: 'bold' }}>{selectedRT.ketua}</h4>
                <span style={{ fontSize: '11px', color: '#64748b' }}>📞 {selectedRT.kontak}</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>👥 Total Warga</span>
                <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{selectedRT.warga} Jiwa</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>🏠 Kepala Keluarga</span>
                <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{selectedRT.kk} KK</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>📷 CCTV Aktif</span>
                <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{selectedRT.cctv} Unit</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>💡 Titik PJU</span>
                <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{selectedRT.pju} Titik</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#ffffff', padding: '8px 12px', borderRadius: '6px', border: '1px solid #f1f5f9' }}>
                <span style={{ color: '#64748b' }}>🛡️ Status Wilayah</span>
                <span style={{ fontWeight: 'bold', color: selectedRT.status === 'Aman' ? '#16a34a' : '#dc2626' }}>{selectedRT.status}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}