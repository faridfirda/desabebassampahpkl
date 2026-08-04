import React from "react";
import "./Navbar.css";

interface NavbarProps {
  onLoginClick: () => void;
}

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Profil Peta Rw 08", href: "#peta" },
  { label: "Aparat", href: "#aparat" },
  { label: "Statistik", href: "#statistik" },
  { label: "Berita", href: "#berita" },
  { label: "UMKM", href: "#umkm" },
  { label: "CCTV", href: "#cctv" },
];

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  return (
    <header className="navbar-container">
      <div className="navbar-wrapper">

        <a href="#beranda" className="navbar-logo">
          <img
            src="/logo.jpg"
            alt="Logo RW 08"
            className="logo-img"
          />

          <div className="logo-title">
            <h2>RW 08 Cibangkong</h2>
          </div>
        </a>

        <ul className="navbar-menu">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="btn-login"
          type="button"
          onClick={onLoginClick}
        >
          🔐 Login Admin
        </button>

      </div>
    </header>
  );
};

export default Navbar;