import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-cover py-10 bg-center px-4"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop')" }}>

            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

            <div className="relative w-full max-w-5xl flex flex-col md:flex-row bg-white/10 backdrop-blur-md rounded-[40px] overflow-hidden shadow-2xl border border-white/20">

                {/* Left Side: Text Content */}
                <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-black">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
                    >
                        WELCOME TO <br />
                        <span className="text-black">MEDITRUST</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-800 max-w-md"
                    >
                        Lorem ipsum dolor sit amet consectetur. Commodo ullamcorper vulputate nullam egestas tellus erat viverra in.
                    </motion.p>
                </div>

                {/* Right Side: Login Form */}
                <div className="w-89 md:w-[500px] bg-white p-8 md:p-12 m-4 rounded-[30px] shadow-lg">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Welcome Back!</h2>
                        <p className="text-gray-500 text-sm mt-2">Log in to start managing your health with ease.</p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="Input your email"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-bold text-gray-700 mb-2">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Input your password"
                                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-[45px] text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                <span className="text-gray-600 font-medium">Remember Me</span>
                            </label>
                            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">Forgot Password?</a>
                        </div>
                        <Link to={"/profile"}>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-3 bg-[#00A3FF] text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all"
                            >
                                Login
                            </motion.button>
                        </Link>

                    </form>

                    <div className="relative my-8 text-center">
                        <hr className="border-gray-200" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs text-gray-400 uppercase tracking-widest">
                            Or continue with
                        </span>
                    </div>

                    <button className="w-full py-3 px-4 border border-gray-200 rounded-xl flex items-center justify-center gap-3 font-semibold text-gray-700 hover:bg-gray-50 transition-all">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                        Continue with Google
                    </button>

                    <p className="text-center mt-8 text-sm text-gray-600">
                        Don't have an account? <Link to="/register" className="text-black font-bold hover:underline">Sign up here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;