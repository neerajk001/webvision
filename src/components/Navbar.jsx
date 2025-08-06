import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home' },
    { name: 'services' },
    { name: 'portfolio' },
    { name: 'our product' },
    { name: 'Client' },
    { name: 'contact' },
  ];

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-black flex items-center">
          <span className="text-3xl font-extrabold text-black">V</span>
          <div className="ml-2">
            <p className="text-xl font-semibold">WebVision</p>
            <p className="text-xs text-gray-500 -mt-1">Infotech Pvt Limited</p>
          </div>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-3">
        {navLinks.map((link, index) => (
          <button
            key={index}
            className={`px-4 py-1 border rounded-full text-sm font-medium ${
              index === 0
                ? 'bg-black text-white shadow-md'
                : 'text-black border-black hover:bg-gray-100'
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-2 py-4 md:hidden z-50">
          {navLinks.map((link, index) => (
            <button
              key={index}
              className={`w-11/12 py-2 border rounded-full text-sm font-medium ${
                index === 0
                  ? 'bg-black text-white shadow'
                  : 'text-black border-black hover:bg-gray-100'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
