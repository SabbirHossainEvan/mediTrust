import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[500px] lg:h-[80vh] w-full bg-gradient-to-r from-[#DBEAFE] via-[#BFDBFE] to-[#93C5FD] overflow-hidden pt-10 md:pt-0 flex items-center">
      
      {/* Background Decorative Shapes */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-blue-400 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-[#1E3A8A] leading-tight mb-6"
          >
            WELCOME TO <br />
            <span className="text-[#2563EB]">MEDITRUST</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-700 text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur. Commodo ullamcorper vulputate nullam egestas tellus erat viverra in. Your health is our priority.
          </motion.p>

          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-3 rounded-full font-bold hover:bg-[#2563EB] hover:text-white transition-all">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image/Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Main Illustration Placeholder */}
          <div className="relative w-full max-w-[500px]">
            <motion.img 
              src="https://img.freepik.com/free-vector/health-insurance-concept-illustration_114360-1505.jpg" 
              alt="Medical Illustration"
              className="w-full h-auto drop-shadow-2xl rounded-2xl"
              animate={{ 
                y: [0, -20, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            
            {/* Floating Elements (Optional) */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-20 h-20 opacity-40 hidden md:block"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" alt="heart" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;