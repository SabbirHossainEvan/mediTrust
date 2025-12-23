import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending Email:", formData);
    // Add your email service integration here (e.g., EmailJS or a backend route)
  };

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
            LET’S TALK
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Enim id adipiscing interdum gravida nisi id tellus eu.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50/30 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-inner"
              onChange={handleChange}
            />
            {/* Last Name */}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50/30 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all shadow-inner"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone Number with Flag Placeholder */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <img 
                  src="https://flagcdn.com/w20/bd.png" 
                  alt="BD Flag" 
                  className="w-5 h-auto rounded-sm"
                />
                <span className="text-gray-400 text-sm border-r pr-2">+880</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-4 pl-24 rounded-xl border border-gray-200 bg-gray-50/30 focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-inner"
                onChange={handleChange}
              />
            </div>
            {/* Email Address */}
            <input
              type="email"
              name="email"
              placeholder="E-mail Address"
              required
              className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50/30 focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-inner"
              onChange={handleChange}
            />
          </div>

          {/* Message Area */}
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows="6"
            className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50/30 focus:ring-2 focus:ring-indigo-500 outline-none transition-all shadow-inner resize-none"
            onChange={handleChange}
          ></textarea>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#3F37C9] text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-[#322BB3] hover:shadow-xl transition-all active:scale-95 shadow-lg"
            >
              SEND EMAIL
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;