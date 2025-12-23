import React, { useState } from 'react';
import { User, Camera } from 'lucide-react';

const UserDetailsSection = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    age: '',
    gender: '',
    address: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Form Data Saved:', formData);

  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4">

      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070')` 
        }}
      >
        <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500">
        
        {/* Header Banner */}
        <div className="bg-sky-500 py-4 text-center shadow-md">
          <h2 className="text-white text-2xl font-bold tracking-widest uppercase">
            Your Details
          </h2>
        </div>

        <form onSubmit={handleSave} className="p-8 md:p-12 space-y-5">

          <div className="flex justify-center mb-6">
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                <User size={80} className="text-gray-300" strokeWidth={1} />
              </div>
              <div className="absolute bottom-2 right-2 bg-sky-500 p-2 rounded-full text-white shadow-lg cursor-pointer hover:bg-sky-600 transition-colors">
                <Camera size={18} />
              </div>
            </div>
          </div>

          {/* 4. Responsive Input Fields */}
          <div className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-3 rounded-lg border-none bg-white/90 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-sm"
              onChange={handleChange}
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border-none bg-white/90 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-sm"
              onChange={handleChange}
            />

            {/* Grid for Age and Gender */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="number"
                name="age"
                placeholder="Age"
                className="w-full p-3 rounded-lg border-none bg-white/90 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-sm"
                onChange={handleChange}
              />
              <select
                name="gender"
                className="w-full p-3 rounded-lg border-none bg-white/90 text-gray-500 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-sm"
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full p-3 rounded-lg border-none bg-white/90 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-sm"
              onChange={handleChange}
            />
            
            <input
              type="tel"
              name="number"
              placeholder="Number"
              className="w-full p-3 rounded-lg border-none bg-white/90 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-sm"
              onChange={handleChange}
            />
          </div>

          {/* 5. Action Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-sky-500 text-white py-2 rounded-lg font-bold text-lg hover:bg-sky-600 transition-all active:scale-95 shadow-lg"
            >
              SAVE
            </button>
            <button
              type="button"
              className="flex-1 bg-white text-sky-500 border-2 border-sky-500 py-2 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all active:scale-95 shadow-md"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetailsSection;