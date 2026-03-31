'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Work', href: '/projects' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container-max">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold font-['Plus_Jakarta_Sans']">
            <span className="gradient-text text-xl">JB</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-12 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm underline-animate"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:jakeeb05@gmail.com"
              className="btn-primary text-sm py-2 px-5"
            >
              Let's chat
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-fade-in-down">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-blue-600 font-medium text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:jakeeb05@gmail.com"
              className="block mt-4 btn-primary text-center w-full text-sm"
              onClick={() => setIsOpen(false)}
            >
              Let's chat
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
