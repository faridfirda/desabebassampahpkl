import React, { useState } from "react";
import "./Navbar.css";

interface NavbarProps {
  onLoginClick: () => void;
}

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Bank Sampah", href: "#bank-sampah" },
  { label: "Peta RW 08", href: "#peta" },
  { label: "Aparat", href: "#aparat" },
  { label: "Statistik", href: "#statistik" },
  { label: "Berita", href: "#berita" },
  { label: "UMKM", href: "#umkm" },
  { label: "CCTV", href: "#cctv" },
];

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-container" style={{ position: "sticky", top: 0, zIndex: 1000, width: "100%" }}>
      <div className="navbar-wrapper">

        {/* LOGO */}
        <a href="#beranda" className="navbar-logo" onClick={handleLinkClick}>
          <img
            src="/logo.jpg"
            alt="Logo RW 08"
            className="logo-img"
          />

          <div className="logo-title">
            <h2>RW 08 Cibangkong</h2>
          </div>
        </a>

        {/* HAMBURGER BUTTON (GARIS TIGA) UNTUK TAMPILAN MOBILE */}
        <button 
          className="hamburger-btn" 
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* MENU NAVIGASI (RESPONSIF) */}
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} onClick={handleLinkClick}>
                {item.label}
              </a>
            </li>
          ))}
          
          {/* Tombol Login pas di tampilan mobile */}
          <li className="mobile-login-item">
            <button
              className="btn-login"
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                onLoginClick();
              }}
            >
              🔐 Login Admin
            </button>
          </li>
        </ul>

        {/* TOMBOL LOGIN DESKTOP */}
        <button
          className="btn-login desktop-only"
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