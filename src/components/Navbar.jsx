import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/service' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Our Product', path: '/product' },
    { name: 'Client', path: '/client' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavigation = (path) => {
    setIsOpen(false); // Close mobile menu
    if (location.pathname !== path) {
      navigate(path);
    }
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-md px-4 py-3 flex justify-between items-center transition duration-300"
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation('/')}>
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
          <motion.button
            key={index}
            onClick={() => handleNavigation(link.path)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-1 border rounded-full cursor-pointer text-sm font-medium transition-all duration-200 ${
              location.pathname === link.path
                ? 'bg-black text-white shadow-md'
                : 'text-black border-black hover:bg-gray-100'
            }`}
          >
            {link.name}
          </motion.button>
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
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-2 py-4 md:hidden z-50"
        >
          {navLinks.map((link, index) => (
            <motion.button
              key={index}
              onClick={() => handleNavigation(link.path)}
              whileTap={{ scale: 0.95 }}
              className={`w-11/12 py-2 border rounded-full text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'bg-black text-white shadow'
                  : 'text-black border-black hover:bg-gray-100'
              }`}
            >
              {link.name}
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
