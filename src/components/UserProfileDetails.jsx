import React, { useState } from 'react';
import { User } from 'lucide-react';

const UserProfileDetails = () => {
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saved Data:", formData);
    alert("Profile Updated Successfully!");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 bg-gray-100">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070')` }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500">
        
        {/* Blue Header */}
        <div className="bg-sky-500 py-3 text-center shadow-md">
          <h2 className="text-white text-2xl font-bold tracking-wide">Your Details</h2>
        </div>

        <form onSubmit={handleSave} className="p-6 md:p-10 space-y-4">
          
          {/* Profile Avatar */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-lg transition-transform hover:scale-105 duration-300">
              <User size={80} className="text-gray-400" strokeWidth={1} />
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-3 rounded-lg border-none bg-gray-50 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-inner"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border-none bg-gray-50 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-inner"
              onChange={handleChange}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="number"
                name="age"
                placeholder="Age"
                className="w-full p-3 rounded-lg border-none bg-gray-50 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-inner"
                onChange={handleChange}
              />
              <select
                name="gender"
                className="w-full p-3 rounded-lg border-none bg-gray-50 text-gray-500 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-inner"
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
              className="w-full p-3 rounded-lg border-none bg-gray-50 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-inner"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="number"
              placeholder="Number"
              className="w-full p-3 rounded-lg border-none bg-gray-50 focus:ring-2 focus:ring-sky-400 outline-none transition-all shadow-inner"
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button
              type="submit"
              className="flex-1 bg-sky-500 text-white py-2 px-6 rounded-lg font-bold hover:bg-sky-600 transition-all active:scale-95 shadow-lg"
            >
              SAVE
            </button>
            <button
              type="button"
              className="flex-1 bg-white text-sky-500 border border-sky-500 py-2 px-6 rounded-lg font-bold hover:bg-gray-50 transition-all active:scale-95 shadow-md"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UserProfileDetails;