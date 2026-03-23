"use client";

// SEO Keywords: essay writers, assignment writing service, reviews, blog, contact, order essay, get help

import React, { useState, useRef, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Order any Assignment', path: '/gethelp' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Blog', path: '/blog' }
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex text-black items-center transition-transform hover:scale-105 duration-200">
            Essayproficiency
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                href={path}
                className={`relative px-4 py-2 text-gray-700 font-medium rounded-full transition-all duration-200 hover:text-indigo-600 ${
                  pathname === path
                    ? 'text-indigo-600 bg-indigo-50/80'
                    : 'hover:bg-gray-100/80'
                }`}
              >
                {name}
                {pathname === path && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-indigo-50 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-xl z-50 md:hidden rounded-b-2xl border-t border-white/20"
            >
              <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col space-y-3">
                {navLinks.map(({ name, path }) => (
                  <Link
                    key={name}
                    href={path}
                    className={`px-4 py-3 text-gray-700 font-medium rounded-xl transition-all duration-200 ${
                      pathname === path
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-3 rounded-xl text-center font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating urgent help button */}
      {pathname !== '/gethelp' && pathname !== '/admin' && (
        <Link href="/gethelp" className="fixed bottom-6 right-6 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-bold flex items-center gap-2 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Need urgent help? Click here
          </motion.div>
        </Link>
      )}
    </>
  );
};

export default Navbar;