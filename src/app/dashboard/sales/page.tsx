'use client';

import React, { useState } from 'react';

const initialSoldItems = [
  { id: 1, name: 'T-Shirt', category: 'Clothing', price: '₦5000', quantity: 10 },
  { id: 2, name: 'Jeans', category: 'Clothing', price: '₦7000', quantity: 5 },
  { id: 3, name: 'Jacket', category: 'Clothing', price: '₦9000', quantity: 8 },
  { id: 4, name: 'Dress', category: 'Clothing', price: '₦6000', quantity: 7 },
  { id: 5, name: 'Shoes', category: 'Clothing', price: '₦8000', quantity: 12 },
  { id: 6, name: 'Socks', category: 'Clothing', price: '₦1000', quantity: 20 },
  { id: 7, name: 'Cap', category: 'Clothing', price: '₦1500', quantity: 15 },
  { id: 8, name: 'Phone Case', category: 'Accessories', price: '₦1200', quantity: 25 },
  { id: 9, name: 'Smart Watch', category: 'Accessories', price: '₦15000', quantity: 3 },
  { id: 10, name: 'Headphones', category: 'Accessories', price: '₦8500', quantity: 9 },
  { id: 11, name: 'iPhone 13', category: 'Phone', price: '₦300000', quantity: 4 },
  { id: 12, name: 'Samsung Galaxy S21', category: 'Phone', price: '₦270000', quantity: 6 },
  { id: 13, name: 'Google Pixel 6', category: 'Phone', price: '₦250000', quantity: 2 },
  { id: 14, name: 'Nokia 8.3', category: 'Phone', price: '₦200000', quantity: 5 },
  { id: 15, name: 'OnePlus 9', category: 'Phone', price: '₦280000', quantity: 7 },
];

const SalesPage = () => {
  const [soldItems, setSoldItems] = useState(initialSoldItems);
  const [newItem, setNewItem] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    quantity: '',
  });
  const [successMessage, setSuccessMessage] = useState('');

  // Add or Edit item
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem.id) {
      const updatedItems = soldItems.map(item =>
        item.id === newItem.id ? { ...newItem } : item
      );
      setSoldItems(updatedItems);
      setSuccessMessage('Item edited successfully!');
    } else {
      const newId = soldItems.length ? soldItems[soldItems.length - 1].id + 1 : 1;
      const updatedItems = [...soldItems, { ...newItem, id: newId }];
      setSoldItems(updatedItems);
      setSuccessMessage('Item added successfully!');
    }

    // Clear form after add/edit
    setNewItem({ id: '', name: '', category: '', price: '', quantity: '' });

    // Hide the message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  // Delete item
  const deleteItem = (id) => {
    const updatedItems = soldItems.filter((item) => item.id !== id);
    setSoldItems(updatedItems);
  };

  // Handle input changes for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  // Handle editing of an existing item
  const handleEdit = (item) => {
    setNewItem(item);
  };

  return (
    <div className="py-10 px-4 text-gray-800 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sold Items</h2>
      <p className="text-lg font-semibold text-sky-600 text-center mb-8">
        Here is the list of sold items, including their category, price, and quantity sold.
      </p>

      {/* Success message */}
      {successMessage && (
        <div className="bg-green-500 text-white text-center py-2 mb-4 rounded">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-8">
        <h3 className="text-2xl font-bold text-blue mb-4">Add / Edit Item</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleInputChange}
            placeholder="Item Name"
            className="border py-2 px-4 rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={newItem.category}
            onChange={handleInputChange}
            placeholder="Category"
            className="border py-2 px-4 rounded"
            required
          />
          <input
            type="text"
            name="price"
            value={newItem.price}
            onChange={handleInputChange}
            placeholder="Price"
            className="border py-2 px-4 rounded"
            required
          />
          <input
            type="number"
            name="quantity"
            value={newItem.quantity}
            onChange={handleInputChange}
            placeholder="Quantity"
            className="border py-2 px-4 rounded"
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          {newItem.id ? 'Edit Item' : 'Add Item'}
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-sky-700 text-blue">
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Item Name</th>
              <th className="py-3 px-6 text-left">Category</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Quantity</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {soldItems.map((item) => (
              <tr key={item.id} className="border-b hover:bg-sky-100">
                <td className="py-3 px-6 text-gray-800 font-semibold">{item.id}</td>
                <td className="py-3 px-6 text-gray-800 font-semibold">{item.name}</td>
                <td className="py-3 px-6 text-gray-800 font-semibold">{item.category}</td>
                <td className="py-3 px-6 text-gray-800 font-semibold">{item.price}</td>
                <td className="py-3 px-6 text-gray-800 font-semibold">{item.quantity}</td>
                <td className="py-3 px-6 text-gray-800">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded mr-2 hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesPage;
