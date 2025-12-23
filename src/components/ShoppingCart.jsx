import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

const ShoppingCart = () => {
  // Initial dynamic data
  const [items, setItems] = useState([
    { id: 1, name: 'Flowing Linen Blazer', desc: 'Printed Bermuda shorts. Waist cord.', price: 99.00, qty: 1, img: 'https://via.placeholder.com/60' },
    { id: 2, name: 'Flowing Linen Blazer', desc: 'Printed Bermuda shorts. Waist cord.', price: 99.00, qty: 1, img: 'https://via.placeholder.com/60' },
    { id: 3, name: 'Flowing Linen Blazer', desc: 'Printed Bermuda shorts. Waist cord.', price: 99.00, qty: 1, img: 'https://via.placeholder.com/60' },
    { id: 4, name: 'Flowing Linen Blazer', desc: 'Printed Bermuda shorts. Waist cord.', price: 99.00, qty: 1, img: 'https://via.placeholder.com/60' },
  ]);

  const discount = 96.00;

  // Handlers
  const updateQty = (id, newQty) => {
    if (newQty < 1) return;
    setItems(items.map(item => item.id === id ? { ...item, qty: parseInt(newQty) } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const total = subtotal - (items.length > 0 ? discount : 0);

  return (
    <div className="max-w-4xl mx-auto p-4 font-sans text-gray-700">
      {/* Header */}
      <div className="bg-blue-500 text-white text-center py-6 rounded-t-lg shadow-sm">
        <h1 className="text-3xl font-bold italic">Shopping Cart</h1>
      </div>

      {/* Cart Table Container */}
      <div className="border border-gray-200 rounded-b-lg overflow-hidden bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b text-sm font-semibold">
                <th className="p-4 w-16"></th>
                <th className="p-4">Product</th>
                <th className="p-4 text-center">Price</th>
                <th className="p-4 text-center">Quantity</th>
                <th className="p-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {items.map((item) => (
                <tr key={item.id} className="transition-all duration-300 hover:bg-gray-50 animate-in fade-in slide-in-from-top-1">
                  <td className="p-4 text-center">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <img src={item.img} alt={item.name} className="w-16 h-16 rounded border object-cover" />
                      <div>
                        <div className="font-bold text-gray-800">{item.name}</div>
                        <div className="text-xs text-gray-400">{item.desc}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center font-medium">৳ {item.price.toFixed(2)}</td>
                  <td className="p-4 text-center">
                    <input 
                      type="number" 
                      value={item.qty} 
                      onChange={(e) => updateQty(item.id, e.target.value)}
                      className="w-16 border rounded p-1 text-center focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                  </td>
                  <td className="p-4 text-right font-bold">৳ {(item.price * item.qty).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Coupon Section */}
        <div className="p-4 bg-white border-t flex flex-col sm:flex-row gap-2">
          <input 
            type="text" 
            placeholder="Coupon Code" 
            className="flex-grow border rounded px-4 py-2 bg-gray-50 outline-none focus:border-blue-400"
          />
          <button className="bg-cyan-400 text-white px-8 py-2 font-bold rounded hover:bg-cyan-500 transition-all active:scale-95">
            APPLY
          </button>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center text-lg font-medium">
            <span>Subtotal</span>
            <span>৳ {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-lg font-medium border-b pb-3">
            <span>Discount</span>
            <span>৳ {items.length > 0 ? discount.toFixed(2) : "0.00"}</span>
          </div>
          <div className="flex justify-between items-center text-xl font-bold pt-2">
            <span>Total</span>
            <span>৳ {Math.max(0, total).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 flex justify-end">
        <button className="bg-cyan-400 text-white px-10 py-3 font-bold rounded hover:bg-cyan-500 transition-all shadow-lg hover:shadow-cyan-200 active:scale-95">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;