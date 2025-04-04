'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation

const mockEmail = 'user@example.com';
const mockPassword = 'password123';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize the router

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === mockEmail && password === mockPassword) {
      // Redirect to product page upon successful login
      router.push('/dashboard/product');
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-light-blue-200">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-medium text-blue-800" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 mt-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-lg font-medium text-blue-800" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 mt-2 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 text-lg"
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="text-red-500 text-center mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
