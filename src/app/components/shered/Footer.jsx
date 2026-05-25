import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-white/60 text-sm">
              © 2026 Jahid Hasan. All Rights Reserved.
            </p>
          </div>

          <div className="flex gap-8 text-white/60 text-sm">
            <Link href="https://www.linkedin.com/in/jahidhasan-webdev/" className="hover:text-white transition">LinkedIn</Link>
            <Link href="https://github.com/Jahidbsl" className="hover:text-white transition">GitHub</Link>
            <Link href="#" className="hover:text-white transition">Twitter</Link>
          </div>

          <div className="text-white/60 text-sm">
            Crafted with passion &amp; code
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;