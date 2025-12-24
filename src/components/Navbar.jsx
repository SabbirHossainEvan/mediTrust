


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; 
import logoImage from '../assets/logoImage.svg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); 


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Medicine', path: '/medicine' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <nav className="bg-[#E5E7EB] px-4 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        

        <Link to="/" className="flex items-center gap-2 min-w-fit">
          <img src={logoImage} alt="MediTrust Logo" className="w-8 h-8 object-contain" />
          <span className="font-bold text-[#2E5A88] text-xl sm:text-3xl flex">
            Medi<span className="text-[#7AB342]">Trust</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative text-sm font-semibold transition-colors duration-300 ${
                location.pathname === link.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Menu size={18} />
            </div>
            <input
              type="text"
              placeholder="Search medicine, doctors..."
              className="w-full bg-[#F3F4F6] border-none rounded-full py-2 pl-10 pr-10 focus:ring-2 focus:ring-blue-400 transition-all outline-none text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Search size={18} />
            </div>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-3">
          <Link to="/cart">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full shadow-sm text-gray-700 hover:bg-gray-50"
            >
              <ShoppingCart size={20} />
            </motion.button>
          </Link>
          
          <Link to="/login">
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white rounded-full shadow-sm text-gray-700 hover:bg-gray-50 hidden sm:flex"
            >
              <User size={20} />
            </motion.button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:bg-white rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      {/* <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white mt-3 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
          >
            <div className="flex flex-col p-5 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left font-semibold py-2 px-4 rounded-lg transition-all ${
                    location.pathname === link.path 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-1" />
              <div className="relative md:hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-50 rounded-xl py-3 px-4 outline-none border border-gray-100 focus:border-blue-300"
                />
                <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Mobile Menu Animation */}
<AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="lg:hidden bg-white mt-3 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
    >
      <div className="flex flex-col p-5 gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className={`text-left font-semibold py-2 px-4 rounded-lg transition-all ${
              location.pathname === link.path 
                ? 'bg-blue-50 text-blue-600' 
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* --- User Profile Link for Mobile --- */}
        <Link
          to="/login"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center gap-3 font-semibold py-2 px-4 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          <User size={20} />
          <span>Profile</span>
        </Link>
        {/* ------------------------------------ */}

        <div className="h-px bg-gray-100 my-1" />
        <div className="relative md:hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-50 rounded-xl py-3 px-4 outline-none border border-gray-100 focus:border-blue-300"
          />
          <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;