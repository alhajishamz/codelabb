'use client';

import {
  Monitor,
  ShoppingCart,
  Globe,
  Clock,
} from 'lucide-react';
import Link from 'next/link';

const navigation = [
  { name: 'Product', href: '/dashboard/product', icon: ShoppingCart },
  { name: 'Sales', href: '/dashboard/sales', icon: Monitor },
  { name: 'cart', href: '/dashboard/cart', icon: Globe },
  { name: 'receipts', href: '/dashboard/receipts', icon: Clock },

];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export function SideBar() {
  return (
    <div className="fixed inset-y-0 left-0 w-72 bg-sky-500 p-6 text-white">
      <div className="flex items-center space-x-2 mb-12">
        <span className="text-2xl font-bold italic">Dashboard</span>
      </div>
      <nav className="space-y-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-sky-400 transition-colors duration-200 italic"
          >
            <item.icon className="w-6 h-6" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
