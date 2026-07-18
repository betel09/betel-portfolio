"use client";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = ["Home", "About", "Skills", "Projects"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0d1117]/90 backdrop-blur-sm border-b border-[#2a3a52]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-[#f5a623] font-bold text-xl">
          Betel Yemanebirhan
        </a>

        <ul className="hidden md:flex gap-8 font-medium text-sm">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[#8a9ab5] hover:text-[#f5a623] transition-colors"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:block bg-[#f5a623] text-[#0d1117] px-5 py-2 rounded-full text-sm font-bold hover:bg-[#d4880a] transition-colors"
        >
          Contact
        </a>

        <button className="md:hidden text-2xl text-[#f0f4f8]" onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#161d2b] px-6 pb-4 flex flex-col gap-3 border-t border-[#2a3a52]">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="font-medium text-[#8a9ab5] hover:text-[#f5a623]"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#f5a623] text-[#0d1117] text-center py-2 rounded-full text-sm font-bold"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}