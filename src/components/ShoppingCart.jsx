import React, { useState } from 'react';
import { Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';

const ShoppingCart = () => {
  // Updated with professional medical/health product images
  const [items, setItems] = useState([
    { 
      id: 1, 
      name: 'Napa Extend', 
      desc: 'Paracetamol BP 665mg - Fever & Pain', 
      price: 15.00, 
      qty: 2, 
      img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=200' 
    },
    { 
      id: 2, 
      name: 'Sergel 20mg', 
      desc: 'Esomeprazole - Gastric Relief', 
      price: 90.00, 
      qty: 1, 
      img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=200' 
    },
    { 
      id: 3, 
      name: 'Digital Thermometer', 
      desc: 'High precision infrared reading', 
      price: 450.00, 
      qty: 1, 
      img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=200' 
    },
    { 
      id: 4, 
      name: 'Hand Sanitizer', 
      desc: '75% Alcohol - Kill 99.9% Germs', 
      price: 120.00, 
      qty: 3, 
      img: 'https://images.unsplash.com/photo-1584622781564-1d9876a1df72?q=80&w=200' 
    },
  ]);

  const discount = 50.00;

  // Handlers
  const updateQty = (id, delta) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return { ...item, qty: newQty < 1 ? 1 : newQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const total = subtotal - (items.length > 0 ? discount : 0);

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans text-slate-700 min-h-screen bg-gray-50/50">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-400 text-white p-8 rounded-3xl shadow-lg mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-extrabold flex items-center gap-3">
            <ShoppingBag strokeWidth={2.5} /> Your Cart
          </h1>
          <p className="text-blue-50 mt-1 opacity-90">Review and manage your healthcare essentials.</p>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-sm uppercase tracking-widest font-bold opacity-70">Items</p>
          <p className="text-3xl font-black">{items.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart List */}
        <div className="lg:col-span-2 space-y-4">
          {items.length > 0 ? (
            items.map((item) => (
              <div 
                key={item.id} 
                className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col sm:flex-row items-center gap-6 transition-all hover:shadow-md animate-in fade-in slide-in-from-left-4 duration-500"
              >
                {/* Image */}
                <div className="w-24 h-24 bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-grow text-center sm:text-left">
                  <h3 className="text-lg font-bold text-slate-800">{item.name}</h3>
                  <p className="text-xs text-slate-400 mb-2">{item.desc}</p>
                  <p className="text-blue-600 font-bold">৳ {item.price.toFixed(2)}</p>
                </div>

                {/* Quantity Controller */}
                <div className="flex items-center gap-3 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                  <button 
                    onClick={() => updateQty(item.id, -1)}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm hover:text-blue-600 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center font-bold text-slate-800">{item.qty}</span>
                  <button 
                    onClick={() => updateQty(item.id, 1)}
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm hover:text-blue-600 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Total & Delete */}
                <div className="text-right flex flex-row sm:flex-col items-center sm:items-end gap-6 sm:gap-2">
                  <p className="text-lg font-black text-slate-900">৳ {(item.price * item.qty).toFixed(2)}</p>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white p-20 rounded-3xl text-center border-2 border-dashed border-slate-200">
              <ShoppingBag size={60} className="mx-auto text-slate-200 mb-4" />
              <p className="text-xl font-bold text-slate-400">Your cart is empty</p>
            </div>
          )}
        </div>

        {/* Summary Sidebox */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-8">
            <h2 className="text-xl font-bold text-slate-800 mb-6">Order Summary</h2>
            
            <div className="space-y-4 text-sm font-medium">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="text-slate-800 font-bold">৳ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Discount</span>
                <span className="text-green-500 font-bold">- ৳ {items.length > 0 ? discount.toFixed(2) : "0.00"}</span>
              </div>
              <div className="flex justify-between text-slate-400 border-b pb-4">
                <span>Delivery Charge</span>
                <span className="text-slate-800 font-bold">FREE</span>
              </div>
              <div className="flex justify-between items-center text-xl font-black text-slate-900 pt-2">
                <span>Total Amount</span>
                <span>৳ {Math.max(0, total).toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Coupon" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm font-semibold"
                />
                <button className="bg-slate-800 text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-900 transition-all">
                  Apply
                </button>
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 shadow-xl shadow-blue-100 active:scale-95 transition-all">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;