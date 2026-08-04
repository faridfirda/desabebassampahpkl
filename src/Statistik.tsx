import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend
} from "recharts";

const penduduk5Tahun = [
  { tahun: "2021", penduduk: 45200, laki: 22800, perempuan: 22400, kematian: 210, kelahiran: 520 },
  { tahun: "2022", penduduk: 45850, laki: 23100, perempuan: 22750, kematian: 215, kelahiran: 550 },
  { tahun: "2023", penduduk: 46500, laki: 23450, perempuan: 23050, kematian: 220, kelahiran: 580 },
  { tahun: "2024", penduduk: 47200, laki: 23800, perempuan: 23400, kematian: 225, kelahiran: 610 },
  { tahun: "2025", penduduk: 48000, laki: 24200, perempuan: 23800, kematian: 230, kelahiran: 650 }
];

const kepadatan = [
  { tahun: "2021", jumlah: 3200 },
  { tahun: "2022", jumlah: 3245 },
  { tahun: "2023", jumlah: 3290 },
  { tahun: "2024", jumlah: 3340 },
  { tahun: "2025", jumlah: 3400 }
];

const pendidikan = [
  { nama: "SD", jumlah: 12000 },
  { nama: "SMP", jumlah: 9500 },
  { nama: "SMA", jumlah: 15000 },
  { nama: "Kuliah", jumlah: 8000 }
];

const pekerjaan = [
  { nama: "Petani", jumlah: 8500 },
  { nama: "Pedagang", jumlah: 7200 },
  { nama: "Karyawan", jumlah: 12500 },
  { nama: "Wirausaha", jumlah: 6000 }
];

const kesehatan = [
  { nama: "Sehat", jumlah: 41000 },
  { nama: "Sakit", jumlah: 5000 },
  { nama: "Disabilitas", jumlah: 2000 }
];

const administrasi = [
  { nama: "KTP", jumlah: 47000 },
  { nama: "KK", jumlah: 46500 },
  { nama: "Akta", jumlah: 43000 },
  { nama: "BPJS", jumlah: 39000 }
];

const golonganDarah = [
  { nama: "A", jumlah: 12000 },
  { nama: "B", jumlah: 14000 },
  { nama: "AB", jumlah: 5000 },
  { nama: "O", jumlah: 17000 }
];

// Data Sex Ratio yang diselaraskan property nama-nya
const sexRatioData = [
  { nama: "Laki-Laki", jumlah: 24200 },
  { nama: "Perempuan", jumlah: 23800 }
];

export default function Statistik() {
  return (
    <div style={{ background: "#f8fafc", padding: "30px", width: "100%", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#0f172a", marginBottom: "24px" }}>
        📊 Dashboard Statistik Penduduk
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "24px" }}>
        
        {/* 1. Trend Penduduk */}
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e293b", fontSize: "16px" }}>Penduduk Trend 5 Tahun</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={penduduk5Tahun}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="tahun" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="penduduk" name="Total Penduduk" stroke="#2563eb" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 2. Jenis Kelamin Trend */}
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e293b", fontSize: "16px" }}>Penduduk Jenis Kelamin (5 Tahun)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={penduduk5Tahun}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="tahun" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="laki" name="Laki-Laki" fill="#2563eb" radius={[4, 4, 0, 0]} />
              <Bar dataKey="perempuan" name="Perempuan" fill="#ec4899" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 3. SEX RATIO KELAMIN (BAGIAN YANG DIPERBAIKI) */}
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e293b", fontSize: "16px" }}>Sex Ratio Kelamin (Saat Ini)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={sexRatioData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="nama" /> {/* Sekarang dataKey cocok dengan properti "nama" */}
              <YAxis />
              <Tooltip />
              <Bar dataKey="jumlah" name="Jumlah Jiwa" fill="#7c3aed" radius={[6, 6, 0, 0]} barSize={50} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 4. Kelahiran & Kematian */}
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e293b", fontSize: "16px" }}>Kelahiran & Kematian Alami</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={penduduk5Tahun}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="tahun" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="kelahiran" name="Kelahiran" fill="#22c55e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="kematian" name="Kematian" fill="#ef4444" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 5. Tingkat Pendidikan */}
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e293b", fontSize: "16px" }}>Tingkat Pendidikan</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={pendidikan}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="nama" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jumlah" name="Siswa/Mahasiswa" fill="#9333ea" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 6. Mata Pencarian */}
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e293b", fontSize: "16px" }}>Mata Pencarian</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={pekerjaan}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="nama" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jumlah" name="Orang" fill="#f97316" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 7. Status Kesehatan */}
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e293b", fontSize: "16px" }}>Status Kesehatan</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={kesehatan}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="nama" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jumlah" name="Orang" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 8. Kelengkapan Administrasi */}
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e293b", fontSize: "16px" }}>Kelengkapan Administrasi</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={administrasi}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="nama" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jumlah" name="Kepemilikan" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 9. Golongan Darah */}
        <div style={{ background: "#ffffff", padding: "20px", borderRadius: "12px", border: "1px solid #e2e8f0" }}>
          <h3 style={{ margin: "0 0 16px 0", color: "#1e293b", fontSize: "16px" }}>Golongan Darah</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={golonganDarah}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="nama" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="jumlah" name="Orang" fill="#dc2626" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}