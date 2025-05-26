"use client";

import React, {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleClose = () => setMenuOpen(false);

    window.addEventListener("scroll", handleClose);
    window.addEventListener("hashchange", handleClose);

    return () => {
      window.removeEventListener("scroll", handleClose);
      window.removeEventListener("hashchange", handleClose);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-gray-900 z-50 shadow-md">
      <div className="max-w-screen-xl mx-auto relative px-4 overflow-visible">
        {/* Header row */}
        <div className="flex justify-between items-center py-4 h-16">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Nedim</h1>
            <img
              src="/dev-icon-1.png"
              alt="Nedim Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
              {["about", "projects", "contact"].map((section) => (
                <li key={section}>
                  <button
                    className="w-30 h-12 text-gray-900 border-2 border-transparent rounded-md hover:bg-gray-800 hover:text-white transition">
                    <a href={`#${section}`}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden z-40">
            <div className="bg-white shadow-md mx-auto mt-2 rounded-md max-w-sm px-4 py-4">
              <ul className="flex flex-col items-center space-y-4">
                {["about", "projects", "contact"].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className="block text-gray-900 hover:text-white hover:bg-gray-800 px-4 py-2 rounded transition"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
