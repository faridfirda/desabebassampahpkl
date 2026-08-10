export default function Footer() {
  return (
    <footer style={{ background: "#0f172a", color: "#ffffff", padding: "24px 0", textAlign: "center", marginTop: "40px" }}>
      <p style={{ fontSize: "14px", margin: 0 }}>
        &copy; {new Date().getFullYear()} RW 08 Cibangkong. All rights reserved.
      </p>
      <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>
        Sistem Informasi Warga &bull; Kelurahan Cibangkong
      </p>
    </footer>
  );
}