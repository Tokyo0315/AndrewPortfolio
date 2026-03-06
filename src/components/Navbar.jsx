import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import logo from "../assets/imgs/Portfolio-Logo.png";

const navLinks = [
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Gallery", href: "#gallery" },
];

export default function Navbar({ isDark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#111]/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1920px] mx-auto px-8 lg:px-16 py-3 flex items-center justify-between">
        <a href="#">
          <img src={logo} alt="Logo" className="h-20 w-auto dark:invert" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-montserrat font-bold text-[15px] hover:opacity-70 transition-all ${
                scrolled ? "text-black dark:text-white" : "text-white"
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={toggleDark}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              scrolled
                ? "text-black dark:text-white hover:bg-gray-200 dark:hover:bg-white/10"
                : "text-white hover:bg-white/20"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          <a
            href="#contact"
            className={`font-montserrat font-bold text-[15px] px-6 py-2.5 rounded-full transition-colors ${
              scrolled
                ? "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            CONTACT ME
          </a>
        </div>

        {/* Mobile toggle + dark mode */}
        <div className="md:hidden flex items-center gap-3 z-50">
          <button
            onClick={toggleDark}
            className={`p-2 rounded-full transition-colors cursor-pointer ${
              scrolled
                ? "text-black dark:text-white"
                : "text-white"
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button
            className={`text-2xl ${scrolled ? "text-black dark:text-white" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-white font-montserrat font-bold text-xl hover:opacity-70 transition-opacity"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-white text-black font-montserrat font-bold text-lg px-8 py-3 rounded-full"
            >
              CONTACT ME
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
