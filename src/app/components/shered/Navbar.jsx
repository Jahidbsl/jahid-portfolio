'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-white tracking-tight"
        >
          JAHID<span className="text-pink-500">.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-white/80">
         <Link href="/" className="hover:text-white transition">Home</Link>
         
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/skills" className="hover:text-white transition">Skills</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/95 border-t border-white/10 py-6"
        >
          <div className="flex flex-col items-center gap-6 text-lg text-white/80">
            
            <a href="/projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="/skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;