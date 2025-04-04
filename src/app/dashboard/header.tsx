'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import router for navigation

export default function ColorfulHeader() {
  const [position, setPosition] = useState(0);
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    const moveText = () => {
      setPosition((prev) => (prev >= 100 ? 0 : prev + 0.2));
    };
    const interval = setInterval(moveText, 20);
    return () => clearInterval(interval);
  }, []);

  // Handle logout logic (e.g., clear authentication, redirect)
  const handleLogout = () => {
    // Perform logout logic (e.g., clearing tokens, session data)
    router.push('/logout'); // Redirect to logout page or perform logout functionality
  };

  return (
    <div className="bg-sky-500 p-10 shadow-md h-24">
      <div className="flex justify-between items-center h-20">
        <h1
          className="text-4xl text-white font-bold italic"
          style={{ transform: `translateX(${position}%)` }}
        >
          MOMAS E-COMMERCE SHOP
        </h1>
        <div className="flex items-center space-x-4">
          <button className="text-white text-xl">Online</button>
          <div className="relative">
            <button className="text-white text-xl">Settings</button>
            <div className="absolute right-0 mt-2 w-32 bg-white text-black shadow-md rounded-md">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-center hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

