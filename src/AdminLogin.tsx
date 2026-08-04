import { useState } from "react";

interface Props {
  onLogin: () => void;
}

export default function AdminLogin({ onLogin }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      email === "rw8@gmail.com" &&
      password === "bebas sampah"
    ) {
      alert("Login Berhasil");
      onLogin();
    } else {
      alert("Email atau Password salah!");
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
        <h2 style={{ textAlign: "center", marginBottom: 25 }}>
          Login Admin RW 08
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: 12,
            marginBottom: 15,
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
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}