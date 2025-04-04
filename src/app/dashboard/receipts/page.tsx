 'use client';

import React, { useState } from 'react';

const ReceiptPage = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, item: 'T-Shirt', status: 'Successful', amount: '₦5000', quantity: 2 },
    { id: 2, item: 'iPhone 13', status: 'Pending', amount: '₦300000', quantity: 1 },
    { id: 3, item: 'Jeans', status: 'Successful', amount: '₦7000', quantity: 1 },
    { id: 4, item: 'Jacket', status: 'Pending', amount: '₦9000', quantity: 3 },
    { id: 5, item: 'Shoes', status: 'Successful', amount: '₦8000', quantity: 4 },
    { id: 6, item: 'Socks', status: 'Successful', amount: '₦1000', quantity: 5 },
    { id: 7, item: 'Cap', status: 'Pending', amount: '₦1500', quantity: 2 },
    { id: 8, item: 'Phone Case', status: 'Successful', amount: '₦1200', quantity: 3 },
    { id: 9, item: 'Smart Watch', status: 'Pending', amount: '₦15000', quantity: 1 },
    { id: 10, item: 'iPhone 13', status: 'Successful', amount: '₦300000', quantity: 1 },
    { id: 11, item: 'Samsung Galaxy S21', status: 'Pending', amount: '₦270000', quantity: 2 },
    { id: 12, item: 'Google Pixel 6', status: 'Successful', amount: '₦250000', quantity: 1 },
    { id: 13, item: 'Nokia 8.3', status: 'Pending', amount: '₦200000', quantity: 3 },
    { id: 14, item: 'OnePlus 9', status: 'Successful', amount: '₦280000', quantity: 2 },
    { id: 15, item: 'Headphones', status: 'Pending', amount: '₦8500', quantity: 1 },
  ]);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-6">Order Receipt</h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Here are the details of your recent orders. Thank you for shopping with us!
      </p>
      <div className="overflow-x-auto rounded-lg shadow-lg border-t-4 border-blue-500">
        <table className="min-w-full bg-white text-left table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-3 px-6">#</th>
              <th className="py-3 px-6">Item</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Amount</th>
              <th className="py-3 px-6text-gray-800">Quantity</th>
              <th className="py-3 px-6">Total</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6 text-gray-800">{transaction.id}</td>
                <td className="py-3 px-6 text-gray-800" >{transaction.item}</td>
                <td className="py-3 px-6 text-gray-800">
                  <span
                    className={`${
                      transaction.status === 'Successful' ? 'text-green-500' : 'text-red-500'
                    } font-bold`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="py-3 px-6
                text-gray-800">{transaction.amount}</td>
                <td className="py-3 px-6 text-gray-800">{transaction.quantity}</td>
                <td className="py-3 px-6 font-semibold text-gray-800">
                  ₦{parseInt(transaction.amount.replace('₦', '').replace(',', '')) * transaction.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">Order Summary</h3>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <div className="flex justify-between mb-4">
            <span className="text-lg font-semibold text-gray-800">Total Items</span>
            <span className="text-lg text-gray-800">{transactions.reduce((total, item) => total + item.quantity, 0)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-lg font-semibold text-gray-800">Total Amount</span>
            <span className="text-lg text-gray-800">
              ₦
              {transactions
                .reduce((total, item) => total + parseInt(item.amount.replace('₦', '').replace(',', '')) * item.quantity, 0)
                .toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-lg font-semibold text-gray-800">Pending Transactions</span>
            <span className="text-lg text-gray-800">
              {transactions.filter((item) => item.status === 'Pending').length}
            </span>
          </div>
          <div className="flex justify-between mb-4 text-gray-800">
            <span className="text-lg font-semibold text-gray-800">Successful Transactions</span>
            <span className="text-lg text-gray-800">
              {transactions.filter((item) => item.status === 'Successful').length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;

