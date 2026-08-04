import React from 'react';
import { Recycling, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BankSampah() {
  const steps = [
    {
      number: '01',
      title: 'Pilah dari Rumah',
      desc: 'Pisahkan sampah anorganik (plastik, botol, kertas, kardus, dan logam) dari sampah organik.',
    },
    {
      number: '02',
      title: 'Bawa ke Pos Penimbangan',
      desc: 'Bawa sampah ke Pos Bank Sampah RW 08 Cibangkong pada jadwal operasional.',
    },
    {
      number: '03',
      title: 'Pencatatan Saldo',
      desc: 'Petugas akan menimbang sampah dan mengkonversi beratnya menjadi saldo tabungan warga.',
    },
  ];

  return (
    <section id="bank-sampah" className="bg-slate-900 text-white py-16 px-6 md:px-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header Modul */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-slate-800/60 border border-slate-700/80 p-6 md:p-8 rounded-2xl backdrop-blur-md">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
              <Recycling size={18} />
              <span>Program Edukasi & Ekonomi Warga</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Modul Bank Sampah RW 08 Cibangkong
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Wujudkan lingkungan bersih sekaligus bernilai ekonomi! Kelola sampah anorganik keluarga kamu dan tukarkan menjadi saldo tabungan.
            </p>
          </div>

          {/* Jam Operasional Card */}
          <div className="bg-emerald-950/80 border border-emerald-700/60 p-5 rounded-xl min-w-[280px] space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <Clock size={16} />
              <span>Jam Operasional Penimbangan</span>
            </div>
            <p className="text-white font-bold text-lg">Minggu Ke-1 & Ke-3</p>
            <p className="text-slate-300 text-xs">Pukul 08.00 - 11.00 WIB</p>
            <p className="text-emerald-300/80 text-[11px] pt-1 border-t border-emerald-800/80">
              📍 Pos RW 08 Cibangkong
            </p>
          </div>
        </div>

        {/* Alur Penimbangan Warga */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-slate-200 flex items-center space-x-2">
            <span>Alur Penimbangan Sampah Warga</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-slate-950 border border-slate-800 p-6 rounded-2xl relative overflow-hidden group hover:border-emerald-600/50 transition duration-300"
              >
                <span className="text-4xl font-black text-slate-800 group-hover:text-emerald-950 transition duration-300 absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="relative z-10 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center font-bold">
                    <CheckCircle2 size={20} />
                  </div>
                  <h4 className="font-bold text-lg text-white">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}