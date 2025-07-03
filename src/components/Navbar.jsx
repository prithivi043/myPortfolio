import React, { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-gray-800 to-rose-400 shadow-md z-50 bg-transparent">
      <div className="flex items-center justify-between px-6 h-16 bg-transparent">
        <div className="text-white text-xl font-semibold bg-transparent">
          <span>
            <a href="#home" className='hover:cursor-pointer'>
              Prithiviraj T
            </a>
          </span>
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <a href="#home" className="hover:text-yellow-300">Home</a>
          <a href="#aboutme" className="hover:text-yellow-300">About Me</a>
          <a href="#ido" className="hover:text-yellow-300">Ido</a>
          <a href="#projects" className="hover:text-yellow-300">Projects</a>
          <a href="#achievements" className="hover:text-yellow-300">Achievements</a>
          <a href="#education" className="hover:text-yellow-300">Education</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </div>
        <div className="md:hidden text-white text-2xl" style={{ cursor: "pointer" }} onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gray-700 text-white flex flex-col items-center space-y-4 py-4 cursor-pointer">
          <a href="#home" className="hover:text-yellow-300">Home</a>
          <a href="#aboutme" className="hover:text-yellow-300">About Me</a>
          <a href="#ido" className="hover:text-yellow-300">Ido</a>
          <a href="#projects" className="hover:text-yellow-300">Projects</a>
          <a href="#achievements" className="hover:text-yellow-300">Achievements</a>
          <a href="#education" className="hover:text-yellow-300">Education</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </div>
      )}
    </nav>
  );
}
