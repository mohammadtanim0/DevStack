import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-gray-700 md:hidden"
        >
          ☰
        </button>

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 md:order-1"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-r from-purple-500 to-pink-500 text-xs font-bold text-white">
            DS
          </div>

          <h2 className="text-lg font-bold text-gray-900">
            Dev <span className="text-pink-500">Stack</span>
          </h2>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 text-sm text-gray-600 md:order-2 md:flex">
          <a
            href="#"
            className="font-medium text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-5 md:order-3 md:flex">
          <button className="text-sm font-medium text-gray-600 transition hover:text-pink-500">
            Sign In
          </button>

          <button className="rounded-full bg-linear-to-r from-orange-500 to-pink-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button className="text-xs font-medium text-gray-600">
            Sign In
          </button>

          <button className="rounded-full bg-linear-to-r from-orange-500 to-pink-500 px-3 py-1.5 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-gray-600">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-500"
            >
              Contact
            </a>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;