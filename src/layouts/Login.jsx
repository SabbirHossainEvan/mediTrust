import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gray-100">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Side: Welcome Text */}
        <div className="w-full md:w-1/2 text-left mb-10 md:mb-0">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black leading-tight text-gray-900 tracking-tighter"
          >
            WELCOME TO <br /> MEDITRUST
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-gray-800 max-w-md font-medium"
          >
            Lorem ipsum dolor sit amet consectetur. Commodo ullamcorper vulputate nullam egestas tellus erat viverra in.
          </motion.p>
        </div>

        {/* Right Side: Login Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-[480px] bg-white rounded-[40px] p-8 md:p-12 shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-gray-900">Welcome Back!</h2>
          <p className="text-gray-500 mt-2 mb-8">Log in to start managing your health with ease.</p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                placeholder="Input your email" 
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Input your password" 
                className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-9 text-gray-400"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-center justify-between text-xs sm:text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-gray-500">
                <input type="checkbox" className="rounded border-gray-300" />
                Remember Me
              </label>
              <a href="#" className="text-gray-400 hover:text-blue-500">Forgot Password?</a>
            </div>

            <button className="w-full py-4 bg-[#00A3FF] text-white font-bold rounded-2xl shadow-lg hover:bg-blue-600 transition-all transform active:scale-95">
              Login
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100"></div></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">Or continue with</span></div>
          </div>

          <button className="w-full py-3 px-4 border border-gray-200 rounded-2xl flex items-center justify-center gap-3 font-semibold text-gray-700 hover:bg-gray-50 transition-all">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
            Continue with Google
          </button>

          <p className="text-center mt-8 text-sm text-gray-600">
            Don't have an account? <Link to="/signup" className="text-black font-bold hover:underline">Sign up here</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;