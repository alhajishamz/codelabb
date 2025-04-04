// dashboard/cart/page.tsx

'use client';

import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-2">Your Cart</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {cart.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          cart.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-center">{product.name}</h3>
              <p className="text-lg font-semibold text-center text-blue-500 mb-2">{product.price}</p>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && (
        <div className="text-center mt-8">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;


    