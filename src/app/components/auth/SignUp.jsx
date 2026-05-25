'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';

const SignUp = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();

 const formData = new FormData(e.currentTarget);
 const userData = Object.fromEntries(formData.entries());
    console.log(userData, "uuuu");
    if (userData.password !== userData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Sign Up:', userData);

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.imgurl,
      callbackURL: "/",
    });
    if(data){
      redirect('/')
    }
    console.log(data, error);
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
            <h1 className="text-4xl font-bold text-white mb-2">Create Account</h1>
            <p className="text-white/60">Join to manage your portfolio</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-white/70 text-sm block mb-2">Full Name</label>
              <input
                type="text"
                name="name"
               
               
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition"
                placeholder="Jahid Hasan"
              />
            </div>

            <div>
              <label className="text-white/70 text-sm block mb-2">Email Address</label>
              <input
                type="email"
                name="email"
               
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
              
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <div>
              <label className="text-white/70 text-sm block mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
              
                required
                className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-pink-500 outline-none transition"
                placeholder="••••••••"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-orange-500 py-4 rounded-2xl text-white font-semibold text-lg hover:from-pink-600 hover:to-orange-600 transition"
            >
              Create Account
            </motion.button>
          </form>

          <p className="text-center text-white/60 mt-8">
            Already have an account?{' '}
            <Link href="/signin" className="text-pink-400 hover:text-pink-500 font-medium">
              Sign In
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;