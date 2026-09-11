import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("");

  const handleNavClick = (link: string) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const getLinkClass = (link: string) => {
    return `transition duration-200 ${
      activeLink === link
        ? "text-pink-500"
        : "text-slate-900 hover:text-pink-500"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav className="mx-auto max-w-7xl px-5">

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden h-16 items-center justify-between md:flex">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-sm font-medium">

            <a
              href="#home"
              onClick={() => handleNavClick("home")}
              className={getLinkClass("home")}
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => handleNavClick("technologies")}
              className={getLinkClass("technologies")}
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => handleNavClick("projects")}
              className={getLinkClass("projects")}
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => handleNavClick("about")}
              className={getLinkClass("about")}
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => handleNavClick("contact")}
              className={getLinkClass("contact")}
            >
              Contact
            </a>

          </div>

          {/* Sign In + Sign Up */}
          <div className="flex items-center gap-5">

            <button
              type="button"
              className="text-sm font-medium text-slate-900 transition duration-200 hover:text-pink-500"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition duration-200 hover:opacity-90"
            >
              Sign Up
            </button>

          </div>
        </div>

        {/* ================= MOBILE NAVBAR ================= */}
        <div className="grid h-16 grid-cols-3 items-center md:hidden">

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="justify-self-start text-2xl text-slate-900"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Mobile Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="justify-self-center"
          >
            <img
              src={logo}
              alt="Dev Stack Logo"
              className="h-9 w-auto object-contain"
            />
          </a>

          {/* Mobile Auth */}
          <div className="flex items-center justify-self-end gap-2">

            <button
              type="button"
              className="text-xs font-medium text-slate-900"
            >
              Sign In
            </button>

            <button
              type="button"
              className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-3 py-2 text-xs font-semibold text-white"
            >
              Sign Up
            </button>

          </div>
        </div>

        {/* ================= MOBILE DROPDOWN ================= */}
        {menuOpen && (
          <div className="border-t border-gray-200 bg-white py-4 md:hidden">

            <div className="flex flex-col gap-1 text-sm font-medium">

              <a
                href="#home"
                onClick={() => handleNavClick("home")}
                className={`rounded-lg px-3 py-2.5 ${getLinkClass(
                  "home"
                )}`}
              >
                Home
              </a>

              <a
                href="#technologies"
                onClick={() => handleNavClick("technologies")}
                className={`rounded-lg px-3 py-2.5 ${getLinkClass(
                  "technologies"
                )}`}
              >
                Technologies
              </a>

              <a
                href="#projects"
                onClick={() => handleNavClick("projects")}
                className={`rounded-lg px-3 py-2.5 ${getLinkClass(
                  "projects"
                )}`}
              >
                Projects
              </a>

              <a
                href="#about"
                onClick={() => handleNavClick("about")}
                className={`rounded-lg px-3 py-2.5 ${getLinkClass(
                  "about"
                )}`}
              >
                About
              </a>

              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className={`rounded-lg px-3 py-2.5 ${getLinkClass(
                  "contact"
                )}`}
              >
                Contact
              </a>

            </div>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;