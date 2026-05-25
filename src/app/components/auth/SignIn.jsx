'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign In:', formData);
    // Add your authentication logic here
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/80 border border-white/10 rounded-3xl p-10 shadow-2xl"
        >
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/60">Sign in to continue to your portfolio</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white/70 text-sm block mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-white/70 text-sm block mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-white/70">
                <input type="checkbox" className="accent-pink-500" />
                Remember me
              </label>
              <a href="#" className="text-pink-400 hover:text-pink-500">Forgot Password?</a>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-orange-500 py-4 rounded-2xl text-white font-semibold text-lg hover:from-pink-600 hover:to-orange-600 transition"
            >
              Sign In
            </motion.button>
          </form>

          <p className="text-center text-white/60 mt-8">
            Don't have an account?{' '}
            <Link href="/signup" className="text-pink-400 hover:text-pink-500 font-medium">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;