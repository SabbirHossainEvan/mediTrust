import React from 'react';
import { motion } from 'framer-motion';

const AppointmentSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row overflow-hidden rounded-[20px] shadow-2xl min-h-[550px]">
        
        {/* Left Side: Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative h-[400px] lg:h-auto"
        >
          <img 
            src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827775.jpg" 
            alt="Doctor" 
            className="w-full h-full object-cover"
          />
          {/* Cyan overlay effect like image */}
          <div className="absolute inset-0 bg-cyan-500/10 mix-blend-multiply"></div>
        </motion.div>

        {/* Right Side: Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 bg-[#3F3BB3] p-8 md:p-12 text-white flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-3">Book Appointment</h2>
          <p className="text-blue-100/80 text-sm mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Pulvinar orci posuere quis accumsan vulputate libero.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full p-4 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-cyan-400 transition-all shadow-inner"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full p-4 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-cyan-400 transition-all shadow-inner"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative flex items-center bg-white rounded-xl overflow-hidden">
                <div className="flex items-center gap-1 pl-4 pr-2 border-r border-gray-200">
                  <span className="text-xl">🇧🇩</span>
                  <span className="text-gray-600 text-sm">+880</span>
                </div>
                <input 
                  type="tel" 
                  className="w-full p-4 text-gray-800 outline-none"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full p-4 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-cyan-400 shadow-inner"
              />
            </div>

            <textarea 
              rows="4" 
              placeholder="Enter Your Message" 
              className="w-full p-4 rounded-xl text-gray-800 outline-none focus:ring-2 focus:ring-cyan-400 shadow-inner"
            ></textarea>

            <div className="flex justify-end pt-2">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2D2991] hover:bg-[#232075] text-white px-10 py-3 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg border border-white/10"
              >
                Send
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AppointmentSection;