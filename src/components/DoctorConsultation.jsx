import React from 'react';
import { motion } from 'framer-motion';

const DoctorConsultation = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Main Container with Gradient Background */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[20px] bg-gradient-to-r from-[#D000C1] via-[#8B5CF6] to-[#3B82F6] min-h-[300px] flex items-center"
      >
        
        {/* Content Wrapper */}
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-end gap-6 h-full">
          
          {/* Left Side: Doctor Images */}
          <div className="relative flex items-end justify-center md:justify-start h-full pt-10">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative z-10 w-[60%] md:w-full max-w-[400px]"
            >
              {/* Note: Replace with your actual doctors image path */}
              <img 
                src="https://i.ibb.co/3ykC6Y8/doctors-group.png" 
                alt="Doctors" 
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Right Side: Text and Button */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left py-10 md:py-0">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/90 text-sm md:text-base font-medium mb-2"
            >
              Get Instant Video Consultation
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-white text-2xl md:text-4xl font-bold leading-tight mb-6"
            >
              Consult with Doctors For Only <span className="line-through text-gray-200 opacity-70">TK 200</span> , <span className="text-[#FFD700] drop-shadow-md">TK 20 !!</span>
            </motion.h2>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#A83279] hover:bg-[#8e2a66] text-white px-6 py-3 rounded-lg font-semibold text-sm md:text-base shadow-lg transition-all border border-white/20"
            >
              Live Consultation Now
            </motion.button>
          </div>

        </div>

        {/* Decorative Light Effect */}
        <div className="absolute top-0 right-0 w-full h-full bg-white opacity-[0.05] pointer-events-none transform -skew-x-12 translate-x-1/2"></div>
      </motion.div>
    </div>
  );
};

export default DoctorConsultation;