import React, { useState, useEffect } from "react";
import { DatabaseBackup, Menu, X } from "lucide-react"; // Importing Lucide icons

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full px-6 py-4 flex justify-between items-center ${
        isScrolled ? "bg-gray-900 fixed top-0 left-0 shadow-lg z-50" : "bg-transparent"
      } transition-all duration-300`}
    >
      {/* Icon + Name */}
      <a href="/">
        <div className="flex items-center gap-2">
          <DatabaseBackup size={32} className="text-white" />
          <h1 className="text-2xl md:text-3xl font-bold text-white">Vinay Shirole</h1>
        </div>
      </a>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#about" className="hover:text-pink-500 text-white text-lg">About</a>
        <a href="#skills" className="hover:text-pink-500 text-white text-lg">Skills</a>
        <a href="#projects" className="hover:text-pink-500 text-white text-lg">Projects</a>
        <a href="#webEnding" className="hover:text-pink-500 text-white text-lg">Contact</a>
        <a href="Vinay_Shirole_Resume.pdf" className="hover:text-pink-500 text-white text-lg">Resume</a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="#about" className="hover:text-pink-500 text-white text-lg" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" className="hover:text-pink-500 text-white text-lg" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-pink-500 text-white text-lg" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#webEnding" className="hover:text-pink-500 text-white text-lg" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="/public/Vinay_Shirole_Resume.pdf" className="hover:text-pink-500 text-white text-lg" onClick={() => setMenuOpen(false)}>Resume</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
