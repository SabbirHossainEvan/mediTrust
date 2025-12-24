import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex py-10 items-center justify-center relative overflow-hidden bg-gray-100">
      
      {/* Background Image with Blur Effect */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center scale-105"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.9)"
        }}
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12 px-6">
        
        {/* Left Side: Signup Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-[500px] bg-white rounded-[45px] p-10 md:p-14 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Let's join with us</h2>
          <p className="text-gray-500 mt-2 mb-10 text-lg">Create an account to join the community.</p>

          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label className="block text-base font-bold text-gray-800 mb-2">Name<span className="text-red-500">*</span></label>
              <input 
                type="text" 
                placeholder="Input your name" 
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-base font-bold text-gray-800 mb-2">Email<span className="text-red-500">*</span></label>
              <input 
                type="email" 
                placeholder="Input your email" 
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label className="block text-base font-bold text-gray-800 mb-2">Password<span className="text-red-500">*</span></label>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Input your password" 
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all placeholder:text-gray-400"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-[52px] text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </button>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-400" />
              <p className="text-sm text-gray-500 font-medium">
                I agree to all <span className="text-gray-700 underline cursor-pointer">Term</span>, <span className="text-gray-700 underline cursor-pointer">Privacy Policy</span> and Fees.
              </p>
            </div>

            {/* Signup/Login Button */}
            <Link to="/">
              <button className="w-full py-4 bg-[#00A3FF] text-white font-bold rounded-[20px] text-lg shadow-lg hover:bg-blue-600 transition-all transform active:scale-95">
                Login
              </button>
            </Link>
          </form>

          {/* Divider */}
          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-gray-400 font-medium">Or continue with</span>
            </div>
          </div>

          {/* Google Signup */}
          <button className="w-full py-4 px-4 border border-gray-200 rounded-[20px] flex items-center justify-center gap-3 font-bold text-gray-700 hover:bg-gray-50 transition-all mb-8">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-6 h-6" alt="Google" />
            Continue with Google
          </button>

          {/* Footer Link */}
          <p className="text-center text-sm font-medium text-gray-500">
            Already have an account? <Link to="/login" className="text-black font-extrabold hover:underline ml-1">Sign In</Link>
          </p>
        </motion.div>

        {/* Right Side: Welcome Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[90px] font-[1000] leading-[0.9] text-black tracking-tighter uppercase"
          >
            WELCOME TO <br /> MEDITRUST
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-xl text-gray-900 font-semibold max-w-md leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur. Commodo ullamcorper vulputate nullam egestas tellus erat viverra in.
          </motion.p>
        </div>

      </div>
    </div>
  );
};

export default Signup;