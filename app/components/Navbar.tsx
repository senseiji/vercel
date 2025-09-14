'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo/MLA-logo.png"
                alt="ML Academy"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link 
                href="/courses" 
                className="text-gray-700 hover:text-[#76a9fa] px-3 py-2 text-sm font-medium transition-colors"
              >
                Courses
              </Link>
              <Link 
                href="/blogs" 
                className="text-gray-700 hover:text-[#76a9fa] px-3 py-2 text-sm font-medium transition-colors"
              >
                Blogs
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-[#76a9fa] px-3 py-2 text-sm font-medium transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#76a9fa] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#76a9fa] transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          <Link
            href="/courses"
            className="text-gray-700 hover:text-[#76a9fa] hover:bg-gray-100 block px-3 py-2 text-base font-medium rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </Link>
          <Link
            href="/blogs"
            className="text-gray-700 hover:text-[#76a9fa] hover:bg-gray-100 block px-3 py-2 text-base font-medium rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-[#76a9fa] hover:bg-gray-100 block px-3 py-2 text-base font-medium rounded-md transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
}