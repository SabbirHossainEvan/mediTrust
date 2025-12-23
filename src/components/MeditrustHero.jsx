import React from 'react';

const MeditrustHero = () => {
  return (
    <section className="relative w-full min-h-[500px] flex items-center overflow-hidden bg-gradient-to-r from-blue-100 via-blue-200 to-white">
      
      {/* Background Decorative Shapes (Subtle Animation) */}
      <div className="absolute top-10 left-10 w-24 h-24 border-2 border-blue-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>

      <div className="container mx-auto px-6 py-12 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Side: Illustration Container */}
        <div className="w-full lg:w-1/2 relative flex justify-center items-center group">
          {/* Main Illustration Placeholder (Replace src with your actual image path) */}
          <div className="relative z-10 animate-in slide-in-from-left duration-1000">
             <img 
               src="/path-to-your-medical-illustration.png" 
               alt="Healthcare illustration" 
               className="max-w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
             />
          </div>

          {/* Floating Elements (Insurance card, Shield icons etc) */}
          <div className="absolute -left-4 top-1/4 bg-white p-3 rounded-xl shadow-lg z-20 animate-bounce transition-all duration-1000 delay-200">
             <div className="w-8 h-1 bg-red-400 rounded-full mb-2"></div>
             <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
          </div>
          
          <div className="absolute right-4 bottom-1/4 bg-green-100 p-4 rounded-full shadow-md z-20 animate-pulse">
             <span className="text-green-600 font-bold">+</span>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 z-10 animate-in fade-in slide-in-from-right duration-1000">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight">
            WELCOME TO <br />
            <span className="text-blue-600 uppercase tracking-tighter">Meditrust</span>
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Commodo ullamcorper vulputate 
            nullam egestas tellus erat viverra in. Providing world-class care right at your fingertips.
          </p>

          <div className="pt-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95">
              Explore Services
            </button>
          </div>
        </div>

      </div>

      {/* Global Style for the 'Blob' animation if not in tailwind.config.js */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </section>
  );
};

export default MeditrustHero;