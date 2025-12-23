import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample Data - Real project e eta API theke ashbe
const medicineData = [
  { id: 1, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 7, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 8, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 9, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 10, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 11, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  { id: 12, name: 'Sergel', mg: '20 mg', company: 'Healthcare Pharmaceuticals Ltd.', price: 90.00, image: 'https://via.placeholder.com/150' },
  // ... aro data add korte parbe
];

const MedicineSection = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Blue Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-400 text-white text-center py-10 px-4 shadow-md">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">Your Trusted Medicine Partner</h1>
        <p className="text-blue-100 text-sm md:text-lg">Safe, authentic and affordable medications for every need.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        {/* Header with Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-gray-200 pb-4 mb-8 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">Medicine</h2>
          <div className="flex gap-3">
            <select className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Category</option>
            </select>
            <select className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm outline-none focus:ring-2 focus:ring-blue-400">
              <option>Sort By</option>
            </select>
          </div>
        </div>

        {/* Medicine Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {medicineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden p-4"
              >
                {/* Product Image Area */}
                <div className="bg-gray-100 rounded-lg h-40 flex items-center justify-center mb-4 relative group">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="max-h-full object-contain mix-blend-multiply"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-[10px] px-2 py-1 rounded-full">
                    Available
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-gray-800 flex items-baseline gap-2">
                    {item.name} <span className="text-xs font-normal text-gray-500">{item.mg}</span>
                  </h3>
                  <p className="text-xs text-gray-400 leading-tight h-8 line-clamp-2">
                    {item.company}
                  </p>
                  <p className="text-xl font-bold text-gray-900 mt-2">
                    ৳ {item.price.toFixed(2)}
                  </p>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <button className="flex items-center justify-center gap-1 bg-blue-100 text-blue-700 py-2 rounded-lg text-xs font-bold hover:bg-blue-200 transition-colors">
                    <ShoppingCart size={14} /> Add to cart
                  </button>
                  <button className="flex items-center justify-center gap-1 bg-blue-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors">
                    <Zap size={14} /> Buy Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Section */}
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button className="p-2 border rounded-md hover:bg-gray-100"><ChevronLeft size={18} /></button>
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <button 
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                  currentPage === num ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                {num}
              </button>
            ))}
            <button className="p-2 border rounded-md hover:bg-gray-100"><ChevronRight size={18} /></button>
          </div>
          
          <p className="text-sm text-gray-500 italic">
            Showing 1 to 10 of 2920 (293 Pages)
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicineSection;