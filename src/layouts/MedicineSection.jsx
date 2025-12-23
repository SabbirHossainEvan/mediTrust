import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

// Enhanced Data with professional medicine images
const medicineData = [
  { id: 1, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500' },
  { id: 2, name: 'Napa Extend', mg: '665 mg', company: 'Beximco Pharmaceuticals Ltd.', price: 15.00, image: 'https://images.unsplash.com/photo-1550572017-ed200f5e6a33?q=80&w=500' },
  { id: 3, name: 'Seclo', mg: '20 mg', company: 'Square Pharmaceuticals Ltd.', price: 45.00, image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=500' },
  { id: 4, name: 'Fexo', mg: '120 mg', company: 'Incepta Pharmaceuticals Ltd.', price: 80.00, image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=500' },
  { id: 5, name: 'Monas', mg: '10 mg', company: 'ACME Laboratories Ltd.', price: 120.00, image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=500' },
  { id: 6, name: 'Zithrin', mg: '500 mg', company: 'Square Pharmaceuticals Ltd.', price: 210.00, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=500' },
  { id: 7, name: 'Fenofix', mg: '200 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 150.00, image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=500' },
  { id: 8, name: 'Rivotril', mg: '0.5 mg', company: 'Radiant Pharmaceuticals Ltd.', price: 60.00, image: 'https://images.unsplash.com/photo-1579165466541-74e2b70a11d3?q=80&w=500' },
  { id: 9, name: 'Alatrol', mg: '10 mg', company: 'Square Pharmaceuticals Ltd.', price: 30.00, image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=500' },
  { id: 10, name: 'Esonix', mg: '20 mg', company: 'Incepta Pharmaceuticals Ltd.', price: 70.00, image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=500' },
  { id: 11, name: 'Finix', mg: '20 mg', company: 'Opsonin Pharma Ltd.', price: 50.00, image: 'https://images.unsplash.com/photo-1615461066159-fea0960485d5?q=80&w=500' },
  { id: 12, name: 'Maxpro', mg: '20 mg', company: 'Renata Limited', price: 95.00, image: 'https://images.unsplash.com/photo-1550572017-4f3b23766472?q=80&w=500' },
];

const MedicineSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Dynamic Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-16 px-4 shadow-lg">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
        >
          Your Trusted Medicine Partner
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-blue-50 text-lg md:text-xl max-w-2xl mx-auto font-light"
        >
          Safe, authentic and affordable medications delivered to your doorstep.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Header with Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-6 mb-10 gap-6">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl font-bold text-slate-800">Medicines</h2>
            <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded-md">2,920 Total</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer shadow-sm">
              <option>Filter by Category</option>
              <option>Tablets</option>
              <option>Syrups</option>
              <option>Supplements</option>
            </select>
            <select className="bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400 transition-all cursor-pointer shadow-sm">
              <option>Sort by: Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Medicine Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {medicineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Image Area */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    In Stock
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-gray-800 truncate pr-2">
                      {item.name}
                    </h3>
                    <span className="text-blue-600 text-xs font-semibold bg-blue-50 px-2 py-1 rounded tracking-tighter">
                      {item.mg}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wide truncate">
                    {item.company}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span className="text-2xl font-black text-slate-900 font-mono">
                      ৳{item.price.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-4 pt-0 grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 bg-slate-50 text-slate-700 py-3 rounded-xl text-xs font-bold hover:bg-slate-100 active:scale-95 transition-all">
                    <ShoppingCart size={16} /> Cart
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl text-xs font-bold hover:bg-blue-700 hover:shadow-lg active:scale-95 transition-all">
                    <Zap size={16} /> Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Section */}
        <div className="mt-16 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1">
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <ChevronLeft size={24} />
            </button>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button 
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
                  currentPage === num 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200' 
                  : 'text-gray-500 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {num}
              </button>
            ))}
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="text-right">
            <p className="text-sm font-medium text-gray-600">
              Showing <span className="text-blue-600">1 to 12</span> of 2,920 items
            </p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Page {currentPage} of 293
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineSection;