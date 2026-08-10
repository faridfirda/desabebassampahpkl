import React, { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  AreaChart,
  Area
} from "recharts";

const penduduk5Tahun = [
  { tahun: "2021", penduduk: 45200, laki: 22800, perempuan: 22400, kematian: 210, kelahiran: 520 },
  { tahun: "2022", penduduk: 45850, laki: 23100, perempuan: 22750, kematian: 215, kelahiran: 550 },
  { tahun: "2023", penduduk: 46500, laki: 23450, perempuan: 23050, kematian: 220, kelahiran: 580 },
  { tahun: "2024", penduduk: 47200, laki: 23800, perempuan: 23400, kematian: 225, kelahiran: 610 },
  { tahun: "2025", penduduk: 48000, laki: 24200, perempuan: 23800, kematian: 230, kelahiran: 650 }
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

const sexRatioData = [
  { nama: "Laki-Laki", jumlah: 24200 },
  { nama: "Perempuan", jumlah: 23800 }
];

const COLORS_PIE = ["#3b82f6", "#f43f5e", "#8b5cf6", "#f59e0b", "#10b981", "#06b6d4"];

export default function Statistik() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div style={{ background: "#f8fafc", padding: "30px", width: "100%", fontFamily: "sans-serif", boxSizing: "border-box" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#0f172a", marginBottom: "24px" }}>
        📊 Dashboard Statistik Penduduk
      </h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "24px" }}>
        
        {[
          {
            id: "card-1",
            title: "📈 Trend Total Penduduk (5 Tahun)",
            content: (
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={penduduk5Tahun}>
                  <defs>
                    <linearGradient id="colorPenduduk" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="tahun" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} domain={['dataMin - 500', 'dataMax + 500']} />
                  <Tooltip />
                  <Area type="monotone" dataKey="penduduk" name="Total Penduduk" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorPenduduk)" />
                </AreaChart>
              </ResponsiveContainer>
            )
          },
          {
            id: "card-2",
            title: "👥 Komposisi Jenis Kelamin (5 Tahun)",
            content: (
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={penduduk5Tahun}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="tahun" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Bar dataKey="laki" name="Laki-Laki" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={18} />
                  <Bar dataKey="perempuan" name="Perempuan" fill="#f43f5e" radius={[4, 4, 0, 0]} barSize={18} />
                </BarChart>
              </ResponsiveContainer>
            )
          },
          {
            id: "card-3",
            title: "⚧️ Sex Ratio Kelamin (Saat Ini)",
            content: (
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Pie
                    data={sexRatioData}
                    dataKey="jumlah"
                    nameKey="nama"
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={5}
                    label
                  >
                    {sexRatioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 0 ? "#3b82f6" : "#f43f5e"} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )
          },
          {
            id: "card-4",
            title: "👶 Kelahiran vs ⚰️ Kematian",
            content: (
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={penduduk5Tahun}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="tahun" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Bar dataKey="kelahiran" name="Kelahiran" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
                  <Bar dataKey="kematian" name="Kematian" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            )
          },
          {
            id: "card-5",
            title: "🎓 Tingkat Pendidikan Penduduk",
            content: (
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Pie
                    data={pendidikan}
                    dataKey="jumlah"
                    nameKey="nama"
                    cx="50%"
                    cy="50%"
                    outerRadius={85}
                    label
                  >
                    {pendidikan.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS_PIE[index % COLORS_PIE.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )
          },
          {
            id: "card-6",
            title: "💼 Distribusi Mata Pencarian",
            content: (
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Pie
                    data={pekerjaan}
                    dataKey="jumlah"
                    nameKey="nama"
                    cx="50%"
                    cy="50%"
                    outerRadius={85}
                    label
                  >
                    {pekerjaan.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={["#f97316", "#06b6d4", "#3b82f6", "#10b981"][index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )
          },
          {
            id: "card-7",
            title: "🏥 Status Kesehatan Warga",
            content: (
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Pie
                    data={kesehatan}
                    dataKey="jumlah"
                    nameKey="nama"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={85}
                    paddingAngle={4}
                    label
                  >
                    {kesehatan.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={["#10b981", "#f59e0b", "#6366f1"][index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )
          },
          {
            id: "card-8",
            title: "🪪 Kelengkapan Administrasi Kependudukan",
            content: (
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={administrasi} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                  <XAxis type="number" stroke="#64748b" fontSize={12} domain={[0, 50000]} />
                  <YAxis dataKey="nama" type="category" stroke="#64748b" fontSize={12} width={55} />
                  <Tooltip />
                  <Bar dataKey="jumlah" name="Kepemilikan" radius={[0, 4, 4, 0]} barSize={24}>
                    {administrasi.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={["#0ea5e9", "#6366f1", "#8b5cf6", "#ec4899"][index]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )
          },
          {
            id: "card-9",
            title: "🩸 Distribusi Golongan Darah",
            content: (
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Tooltip />
                  <Legend wrapperStyle={{ fontSize: "12px" }} />
                  <Pie
                    data={golonganDarah}
                    dataKey="jumlah"
                    nameKey="nama"
                    cx="50%"
                    cy="50%"
                    outerRadius={85}
                    label
                  >
                    {golonganDarah.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={["#ef4444", "#f97316", "#84cc16", "#06b6d4"][index]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            )
          }
        ].map((card) => {
          const isHovered = hoveredCard === card.id;
          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: "#ffffff",
                padding: "20px",
                borderRadius: "16px",
                border: "1px solid #e2e8f0",
                boxShadow: isHovered
                  ? "0 10px 20px -5px rgba(0, 0, 0, 0.08)"
                  : "0 1px 3px rgba(0,0,0,0.03)",
                transform: isHovered ? "translateY(-3px)" : "translateY(0px)",
                transition: "transform 0.15s ease, box-shadow 0.15s ease",
                willChange: "transform",
                cursor: "pointer"
              }}
            >
              <h3 style={{ margin: "0 0 16px 0", color: "#1e293b", fontSize: "16px" }}>{card.title}</h3>
              {card.content}
            </div>
          );
        })}

      </div>
    </div>
  );
}