import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Award, Star, ChevronLeft, ChevronRight, Video } from 'lucide-react';

const doctorData = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', hospital: 'General Health Hospital', rating: 4.9, experience: '12 Years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Neurologist', hospital: 'Neuro Center Plus', rating: 4.8, experience: '15 Years', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=500' },
  { id: 3, name: 'Dr. Emily White', specialty: 'Pediatrician', hospital: 'Children’s Care Clinic', rating: 5.0, experience: '8 Years', image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=500' },
  { id: 4, name: 'Dr. James Wilson', specialty: 'Dermatologist', hospital: 'Skin & Beauty Center', rating: 4.7, experience: '10 Years', image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500' },
  { id: 5, name: 'Dr. Sophia Martinez', specialty: 'Gynecologist', hospital: 'City Women’s Hospital', rating: 4.9, experience: '14 Years', image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=500' },
  { id: 6, name: 'Dr. Robert Brown', specialty: 'Orthopedic', hospital: 'Bone & Joint Institute', rating: 4.8, experience: '20 Years', image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=500' },
  { id: 7, name: 'Dr. Lisa Wang', specialty: 'Psychiatrist', hospital: 'Mind Wellness Center', rating: 5.0, experience: '9 Years', image: 'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=500' },
  { id: 8, name: 'Dr. David Miller', specialty: 'General Surgeon', hospital: 'Metropolitan Hospital', rating: 4.7, experience: '18 Years', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500' },
  { id: 9, name: 'Dr. Anna Taylor', specialty: 'Endocrinologist', hospital: 'Diabetes Care Unit', rating: 4.9, experience: '11 Years', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=500' },
  { id: 10, name: 'Dr. Kevin Lee', specialty: 'Ophthalmologist', hospital: 'Vision Eye Hospital', rating: 4.8, experience: '13 Years', image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=500' },
  { id: 11, name: 'Dr. Rachel Adams', specialty: 'Dentist', hospital: 'Pearl Dental Clinic', rating: 4.6, experience: '7 Years', image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=500' },
  { id: 12, name: 'Dr. Thomas Moore', specialty: 'Urologist', hospital: 'Modern Urology Care', rating: 4.9, experience: '16 Years', image: 'https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=500' },
];

const DoctorSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      {/* Banner */}
      <div className="bg-gradient-to-br from-indigo-700 via-blue-600 to-sky-400 text-white text-center py-20 px-4 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-4 tracking-tight relative z-10"
        >
          Meet Our Specialists
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-blue-50 text-lg md:text-xl max-w-3xl mx-auto font-medium opacity-90 relative z-10"
        >
          Consult with world-class doctors from the comfort of your home.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Filter Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 pb-6 mb-10 gap-6">
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold text-slate-900">Available Doctors</h2>
            <p className="text-slate-500 text-sm">Find the right specialist for your health needs.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <select className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm font-semibold outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all">
              <option>All Specializations</option>
              <option>Cardiology</option>
              <option>Neurology</option>
              <option>Pediatrics</option>
            </select>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95">
              Search
            </button>
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {doctorData.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Photo Area */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-xs font-bold text-slate-800">{doc.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                     <span className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        {doc.experience} EXP
                     </span>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-blue-600 font-bold text-sm mb-2">{doc.specialty}</p>
                  
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center gap-2 text-slate-500 text-xs">
                      <Award size={14} />
                      <span>{doc.hospital}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="p-6 pt-0 space-y-3">
                  <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-2xl text-xs font-bold hover:bg-blue-700 shadow-lg shadow-blue-100 transition-all active:scale-95">
                    <Calendar size={16} /> Book Appointment
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 bg-slate-50 text-slate-700 py-3 rounded-2xl text-xs font-bold hover:bg-slate-100 transition-all">
                    <Video size={16} /> Video Consult
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="mt-16 flex items-center justify-center gap-2">
            <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"><ChevronLeft size={20}/></button>
            {[1, 2, 3, 4].map(n => (
                <button 
                    key={n}
                    onClick={() => setCurrentPage(n)}
                    className={`w-12 h-12 rounded-2xl font-bold transition-all ${currentPage === n ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-white text-slate-500 hover:bg-blue-50'}`}
                >
                    {n}
                </button>
            ))}
            <button className="p-3 bg-white border border-slate-200 rounded-2xl text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all"><ChevronRight size={20}/></button>
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;