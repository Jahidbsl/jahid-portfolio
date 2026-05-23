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
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
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