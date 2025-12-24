import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Truck, Wallet } from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  // Dynamic price values
  const prices = {
    subtotal: 696.00,
    shipping: 30.00,
    discount: 96.00
  };

  const total = prices.subtotal + prices.shipping - prices.discount;

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        {/* Header Title */}
        <div className="w-full bg-[#00A3FF] py-4 rounded-lg mb-8 shadow-md">
          <h1 className="text-white text-center text-2xl font-bold tracking-wide">Checkout</h1>
        </div>

        <form className="space-y-4">
          {/* Form Fields Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="checkout-input" />
            <input type="text" placeholder="Last Name" className="checkout-input" />
          </div>
          
          <input type="email" placeholder="E-mail Address" className="checkout-input w-full" />
          <input type="text" placeholder="Country" className="checkout-input w-full" />
          <input type="text" placeholder="Street Address" className="checkout-input w-full" />
          <input type="text" placeholder="Apartment, Suite Unit etc." className="checkout-input w-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="City" className="checkout-input" />
            <select className="checkout-input appearance-none bg-white">
              <option value="">Postcode</option>
              {/* Add options here */}
            </select>
          </div>
          
          <input type="tel" placeholder="Number" className="checkout-input w-full" />
          <textarea placeholder="Special notes" rows="4" className="checkout-input w-full resize-none"></textarea>

          {/* Payment Methods Section */}
          <div className="mt-8 border border-gray-200 rounded-xl overflow-hidden">
            {/* PayPal */}
            <label className={`payment-option ${paymentMethod === 'paypal' ? 'bg-blue-50/50' : ''}`}>
              <input 
                type="radio" 
                name="payment" 
                className="w-5 h-5 accent-blue-600" 
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
              />
              <div className="flex items-center gap-3 flex-1">
                <img src="https://www.svgrepo.com/show/354174/paypal.svg" alt="PayPal" className="w-6 h-6" />
                <div>
                  <p className="font-bold text-gray-800">PayPal</p>
                  <p className="text-[10px] text-gray-500 italic">Thus much I thought proper to tell you in relation to yourself...</p>
                </div>
              </div>
            </label>

            {/* Direct Bank Transfer */}
            <label className={`payment-option border-y border-gray-100 ${paymentMethod === 'bank' ? 'bg-blue-50/50' : ''}`}>
              <input 
                type="radio" 
                name="payment" 
                className="w-5 h-5 accent-blue-600" 
                checked={paymentMethod === 'bank'}
                onChange={() => setPaymentMethod('bank')}
              />
              <div className="flex items-center gap-3 flex-1">
                <CreditCard className="text-gray-600" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Direct Bank Transfer</p>
                  <p className="text-[10px] text-gray-500 italic">Thus much I thought proper to tell you in relation to yourself...</p>
                </div>
              </div>
            </label>

            {/* Cash on Delivery */}
            <label className={`payment-option ${paymentMethod === 'cod' ? 'bg-blue-50/50' : ''}`}>
              <input 
                type="radio" 
                name="payment" 
                className="w-5 h-5 accent-blue-600" 
                checked={paymentMethod === 'cod'}
                onChange={() => setPaymentMethod('cod')}
              />
              <div className="flex items-center gap-3 flex-1">
                <Wallet className="text-green-600" size={24} />
                <div>
                  <p className="font-bold text-gray-800">Cash on Delivery</p>
                  <p className="text-[10px] text-gray-500 italic">Thus much I thought proper to tell you in relation to yourself...</p>
                </div>
              </div>
            </label>
          </div>

          {/* Price Summary Section */}
          <div className="mt-8 bg-gray-50/50 border border-gray-100 rounded-xl p-6 space-y-3">
            <div className="flex justify-between items-center text-gray-700">
              <span className="font-semibold">Subtotal</span>
              <span className="font-bold">৳ {prices.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-gray-700">
              <span className="font-semibold">Shipping</span>
              <span className="font-bold">৳ {prices.shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-gray-700">
              <span className="font-semibold">Discount</span>
              <span className="font-bold">৳ {prices.discount.toFixed(2)}</span>
            </div>
            <div className="h-px bg-gray-200 my-2"></div>
            <div className="flex justify-between items-center text-gray-900 text-lg">
              <span className="font-bold">Total</span>
              <span className="font-black">৳ {total.toFixed(2)}</span>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="flex justify-end mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#00A3FF] text-white px-10 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-blue-600 transition-colors uppercase tracking-wider"
            >
              Place Order
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* Tailwind Custom Styles via CSS-in-JS (or add to your CSS file) */}
      <style jsx="true">{`
        .checkout-input {
          padding: 12px 16px;
          background-color: #F9FAFB;
          border: 1px solid #E5E7EB;
          border-radius: 8px;
          outline: none;
          transition: all 0.2s;
          font-size: 14px;
        }
        .checkout-input:focus {
          border-color: #00A3FF;
          background-color: white;
          box-shadow: 0 0 0 4px rgba(0, 163, 255, 0.1);
        }
        .payment-option {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Checkout;