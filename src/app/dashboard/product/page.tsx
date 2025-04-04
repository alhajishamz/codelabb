'use client';

import React, { useState, useEffect } from 'react';

const clothingProducts = [
  { name: 'Product 1', image: '/images/photo-1555529771-835f59fc5efe.avif', price: '₦5000' },
  { name: 'Product 2', image: '/images/istockphoto-2159557717-612x612.webp', price: '₦7000' },
  { name: 'Product 3', image: '/images/photo-1578681994506-b8f463449011.avif', price: '₦9000' },
  { name: 'Product 4', image: '/images/photo-1555529771-835f59fc5efe.avif', price: '₦6000' },
  { name: 'Product 5', image: '/images/photo-1521572163474-6864f9cf17ab.avif', price: '₦8000' },
  { name: 'Product 6', image: '/images/photo-1576566588028-4147f3842f27.avif', price: '₦12000' },
  { name: 'Product 7', image: '/images/photo-1564584217132-2271feaeb3c5.avif', price: '₦4500' },
  { name: 'Product 8', image: '/images/photo-1588099768531-a72d4a198538.avif', price: '₦11000' },
  { name: 'Product 9', image: '/images/premium_photo-1682090778813-3938ba76ee57.avif', price: '₦13000' },
  { name: 'Product 10', image: '/images/istockphoto-1805986697-612x612.webp', price: '₦15000' },
  { name: 'Product 11', image: '/images/photo-1585487000160-6ebcfceb0d03.avif', price: '₦10000' },
  { name: 'Product 12', image: '/images/istockphoto-471973362-612x612111222.jpg', price: '₦9500' },
  { name: 'Product 13', image: '/images/istockphoto-1089326536-612x61244444.jpg', price: '₦7000' },
  { name: 'Product 14', image: '/images/istockphoto-1339264709-612x612555555.jpg', price: '₦8500' },
  { name: 'Product 15', image: '/images/istockphoto-1364208715-612x612333333.jpg', price: '₦12000' },
];

const phoneProducts = [
  { name: 'iPhone 13', image: '/images/premium_photo-1705022119961-2cc016ae074f.avif', price: '₦250000', description: 'Incredible performance and camera quality! A true game-changer!' },
  { name: 'Phone 2', image: '/images/photo-1610945415295-d9bbf067e59c.avif', price: '₦350000', description: 'Fast, reliable, and built for your everyday needs.' },
  { name: 'Phone 3', image: '/images/photo-1611407019488-0a354195b618.avif', price: '₦450000', description: 'A phone that takes mobile gaming to the next level!' },
  { name: 'Phone 4', image: '/images/photo-1721864429288-f77b22fdc9eagalaxy.avif', price: '₦550000', description: 'Stunning display and super-fast processor.' },
  { name: 'Phone 5', image: '/images/photo-1507955987999-df4864ee80d4.avif', price: '₦600000', description: 'Experience speed and clarity with every tap!' },
  { name: 'Phone 6', image: '/images/photo-1691449808001-bb8c157f0094opps.avif', price: '₦700000', description: 'Packed with features and a killer battery life!' },
  { name: 'Phone 7', image: '/images/photo-1537589376225-5405c60a5bd8.avif', price: '₦800000', description: 'Perfect blend of performance and style!' },
  { name: 'Phone 8', image: '/images/photo-1616348436168-de43ad0db179.avif', price: '₦900000', description: 'Sharp camera, lightning-fast processor, and sleek design!' },
  { name: 'Phone 9', image: '/images/photo-1721864428894-3900930506aaflip.avif', price: '₦1000000', description: 'Everything you need in one powerful device.' },
  { name: 'Phone 10', image: '/images/photo-1721864428881-dbabb9ea0017fold.avif', price: '₦1200000', description: 'Your ultimate mobile experience starts here.' },
];

const wristwatchProducts = [
  { name: 'Wristwatch 1', image: '/images/istockphoto-118803311-612x612jjjj.jpg', price: '₦15000' },
  { name: 'Wristwatch 2', image: '/images/istockphoto-115021385-612x612ggg.jpg', price: '₦20000' },
  { name: 'Wristwatch 3', image: '/images/istockphoto-165853320-612x612lllll.jpg', price: '₦18000' },
  { name: 'Wristwatch 4', image: '/images/istockphoto-175412203-612x612kkkk.jpg', price: '₦25000' },
  { name: 'Wristwatch 5', image: '/images/istockphoto-1204442466-612x612ssss.jpg', price: '₦22000' },
  { name: 'Wristwatch 6', image: '/images/istockphoto-1474569964-612x612ffff.jpg', price: '₦17000' },
  { name: 'Wristwatch 7', image: '/images/istockphoto-1180244659-612x612 (1)aaaa.jpg',price: '₦19000' },
  { name: 'Wristwatch 8', image: '/images/istockphoto-1053001622-612x612hhhh.jpg', price: '₦21000' },
  { name: 'Wristwatch 9', image: '/images/istockphoto-697173746-612x612ddd.jpg', price: '₦23000' },
 
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    alert(`${product.name} has been added to your cart.`);
  };

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-center mb-2">Clothing Section</h2>
      <p className="text-center text-gray-600 mb-4">Discover trendy, comfortable, and affordable clothing for all occasions. Stay stylish without breaking the bank!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-10">
        {clothingProducts.map((product) => (
          <div key={product.name} className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-center">{product.name}</h3>
            <p className="text-lg font-medium text-center text-blue-500 mb-2">{product.price}</p>
            <button onClick={() => addToCart(product)} className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Add to Cart</button>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-extrabold text-center mb-2">Phone Section</h2>
      <p className="text-center text-gray-600 mb-4">Explore the latest smartphones with amazing features, and find the perfect one for you!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {phoneProducts.map((product) => (
          <div key={product.name} className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-center">{product.name}</h3>
            <p className="text-lg font-medium text-center text-blue-500 mb-2">{product.price}</p>
            <p className="text-center text-gray-600 mb-4">{product.description}</p>
            <button onClick={() => addToCart(product)} className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Add to Cart</button>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-extrabold text-center mb-2">Wristwatch Section</h2>
      <p className="text-center text-gray-600 mb-4">Explore premium wristwatches that combine style and functionality for the modern wearer.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {wristwatchProducts.map((product) => (
          <div key={product.name} className="bg-white p-4 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-center">{product.name}</h3>
            <p className="text-lg font-medium text-center text-blue-500 mb-2">{product.price}</p>
            <button onClick={() => addToCart(product)} className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;

