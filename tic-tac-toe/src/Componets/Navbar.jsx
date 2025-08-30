import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-300 px-4 md:px-20 w-full fixed shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center  h-16">
          
          {/* Logo (Left) */}
          <div className="text-2xl font-bold text-gray-800">
            <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-indigo-700 font-serif to-orange-600">
              Manoj Ojha
            </p>
          </div>

          {/* Desktop Menu (Right) */}
          <div className="hidden md:flex items-center space-x-6 ">
            <HashLink smooth to="/#about" className="text-gray-700 hover:text-blue-600">About</HashLink>
            <HashLink smooth to="/#how-to-play" className="text-gray-700 hover:text-blue-600">How to Play</HashLink>
            <HashLink smooth to="/#play" className="text-gray-700 hover:text-blue-600">Play</HashLink>
            <HashLink smooth to="/#blog" className="text-gray-700 hover:text-blue-600">Blog</HashLink>
            <HashLink smooth to="/#feedback" className="text-gray-700 hover:text-blue-600">Feedback / Report a Bug</HashLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 ">
          <HashLink smooth to="#about" className="block text-gray-700 hover:text-blue-600">About</HashLink>
          <HashLink smooth to="#play" className="block text-gray-700 hover:text-blue-600">Play</HashLink>
          <HashLink smooth to="#blog" className="block text-gray-700 hover:text-blue-600">Blog</HashLink>
          <HashLink smooth to="#feedback" className="block text-gray-700 hover:text-blue-600">Feedback / Report a Bug</HashLink>
          <HashLink smooth to="#how-to-play" className="block text-gray-700 hover:text-blue-600">How to Play</HashLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
