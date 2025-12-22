import React from 'react';
import { motion } from 'framer-motion';

const AppointmentSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-white">
      <div className="flex flex-col lg:flex-row overflow-hidden rounded-[30px] lg:rounded-[50px] shadow-sm min-h-[600px] border border-gray-100">
        
        {/* Left Side: Image Section (Same as Image) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 relative bg-[#00AEEF]/10 flex items-center justify-center overflow-hidden"
        >
          {/* Main Doctor Image */}
          <img 
            src="https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827775.jpg" 
            alt="Doctor" 
            className="w-full h-full object-cover grayscale-[20%] contrast-[1.1]"
          />
          {/* Blue-ish Overlay Gradient to match the vibe */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF]/20 to-transparent mix-blend-multiply"></div>
        </motion.div>

        {/* Right Side: Form Section (Same to Same Colors & Padding) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/2 bg-[#3F3BB3] p-10 md:p-16 text-white flex flex-col justify-center"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Book Appointment</h2>
          <p className="text-gray-200 text-[15px] mb-10 leading-relaxed font-light opacity-90">
            Lorem ipsum dolor sit amet consectetur. Pulvinar orci posuere quis accumsan vulputate libero.
          </p>

          <form className="space-y-6">
            {/* Row 1: First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full bg-white p-4 rounded-2xl text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-sm"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full bg-white p-4 rounded-2xl text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition-all shadow-sm"
              />
            </div>

            {/* Row 2: Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative flex items-center bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="flex items-center gap-2 pl-4 pr-3 border-r border-gray-100">
                  {/* Flag Icon */}
                  <img src="https://flagcdn.com/w40/bd.png" alt="BD" className="w-5 h-auto rounded-sm" />
                  <span className="text-gray-500 font-medium text-sm">+880</span>
                </div>
                <input 
                  type="tel" 
                  placeholder=""
                  className="w-full p-4 text-gray-800 outline-none"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white p-4 rounded-2xl text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 shadow-sm"
              />
            </div>

            {/* Row 3: Message Box */}
            <textarea 
              rows="5" 
              placeholder="Enter Your Message" 
              className="w-full bg-white p-5 rounded-[25px] text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 shadow-sm resize-none"
            ></textarea>

            {/* Submit Button (Exact Style) */}
            <div className="flex justify-end pt-4">
              <motion.button 
                whileHover={{ backgroundColor: "#2D2991", y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2D2991] text-white px-12 py-3.5 rounded-2xl font-bold uppercase tracking-[2px] text-xs shadow-xl transition-all"
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