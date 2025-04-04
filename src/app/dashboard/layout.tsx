import { SideBar } from '@/components';
import Header from '@/app/dashboard/header';
import React from 'react';

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-12 bg-sky-600 rounded-lg shadow-lg mx-auto max-w-5xl">
      {children}
    </div>
  );
}

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="lg:pl-72">
        <Header />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            {children}
            </div>
          <div className="mt-6 flex justify-center">
           
          </div>
        </main>
      </div>
      <SideBar />
    </>
  );
}


