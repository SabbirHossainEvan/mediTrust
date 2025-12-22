import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = ['Home', 'Medicine', 'Doctors', 'About Us'];

  return (
    <nav className="bg-[#E5E7EB] px-4 py-3 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 min-w-fit">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
             <img src="/logo.png" alt="MediTrust" className="w-8 h-8" /> 
          </div>
          <span className="font-bold text-[#2E5A88] text-lg hidden sm:block">
            Medi<span className="text-[#7AB342]">Trust</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => setActiveTab(link)}
              className={`relative text-sm font-semibold transition-colors duration-300 ${
                activeTab === link ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              {link}
              {activeTab === link && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                />
              )}
            </button>
          ))}
        </div>

        {/* Search Bar - Animated expansion on focus */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Menu size={18} />
            </div>
            <input
              type="text"
              placeholder="Hinted search text"
              className="w-full bg-[#F3F4F6] border-none rounded-full py-2 pl-10 pr-10 focus:ring-2 focus:ring-blue-400 transition-all outline-none text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Search size={18} />
            </div>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-3">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full shadow-sm text-gray-700 hover:bg-gray-50"
          >
            <ShoppingCart size={20} />
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white rounded-full shadow-sm text-gray-700 hover:bg-gray-50"
          >
            <User size={20} />
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white mt-3 rounded-xl overflow-hidden shadow-lg"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a key={link} href={`#${link}`} className="text-gray-700 font-medium hover:text-blue-600">
                  {link}
                </a>
              ))}
              <div className="relative md:hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-100 rounded-lg py-2 px-4 outline-none"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;