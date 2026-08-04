import { useState } from "react";

interface Props {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error saat submit ulang

    if (
      email === "rw8@gmail.com" &&
      password === "bebas sampah"
    ) {
      // ❌ HAPUS: alert("Login Berhasil");
      
      // ✅ LANGSUNG MASUK!
      onLogin(); 
    } else {
      // Menampilkan pesan error langsung di UI tanpa alert()
      setError("Email atau Password salah!");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f3f4f6",
        fontFamily: "system-ui, sans-serif"
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: 400,
          background: "#fff",
          padding: 30,
          borderRadius: 15,
          boxShadow: "0 10px 30px rgba(0,0,0,.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20, color: "#1e293b" }}>
          Login Admin RW 08
        </h2>

        {/* PESAN ERROR MODERN (Tanpa Alert Pop-Up) */}
        {error && (
          <div
            style={{
              padding: "10px 14px",
              backgroundColor: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#dc2626",
              borderRadius: 8,
              fontSize: 14,
              marginBottom: 15,
              textAlign: "center"
            }}
          >
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
            borderRadius: 8,
            border: "1px solid #cbd5e1",
            boxSizing: "border-box"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 20,
            borderRadius: 8,
            border: "1px solid #cbd5e1",
            boxSizing: "border-box"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: 12,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}