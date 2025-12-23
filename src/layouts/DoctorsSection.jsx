import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DoctorSection = () => {
  // Mock Data - In a real app, this would come from an API or Props
  const doctors = Array(12).fill({
    name: "Md. Aulad Uddin",
    role: "Head of Department",
    description: "Behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
  });

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 font-sans text-gray-800">
      {/* Header Banner */}
      <div className="bg-sky-500 text-white text-center py-10 rounded-lg mb-12 shadow-md">
        <h1 className="text-4xl font-bold mb-2">Meet Our Specialists</h1>
        <p className="text-lg opacity-90">Our doctors are highly experienced and dedicated to providing the best care.</p>
      </div>

      {/* Filter/Sort Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 border-b pb-4">
        <h2 className="text-3xl font-bold text-gray-700">Doctors</h2>
        <div className="mt-4 sm:mt-0">
          <label className="mr-2 text-sm text-gray-500">Sort by:</label>
          <select className="border rounded-md px-3 py-1 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
            <option>Select an option</option>
            <option>Name (A-Z)</option>
            <option>Department</option>
          </select>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doctor, index) => (
          <div 
            key={index} 
            className="group border rounded-2xl p-5 bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-gray-100"
          >
            <div className="overflow-hidden rounded-xl mb-4 aspect-[4/5]">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="text-center">
              <h3 className="text-blue-700 font-bold text-xl mb-1">{doctor.name}</h3>
              <p className="text-gray-900 font-semibold text-xs uppercase tracking-wider mb-3">{doctor.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                {doctor.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded">PREV</button>
          {[1, 2, 3, 4, 5, 6, 7].map((num) => (
            <button 
              key={num} 
              className={`w-8 h-8 rounded flex items-center justify-center transition-colors ${num === 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'}`}
            >
              {num}
            </button>
          ))}
          <span className="px-2">...</span>
          <button className="p-2 hover:bg-gray-100 rounded">Next</button>
        </div>
        <div>
          Showing 1 to 10 of 2929 (293 Pages)
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Make your appointment now</h2>
        <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
          Lorem Ipsum which looks reasonable generated Ipsum is therefore always.
        </p>
        <button className="bg-blue-600 text-white px-10 py-3 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg active:scale-95">
          Book Your Appointment
        </button>
      </div>
    </section>
  );
};

export default DoctorSection;