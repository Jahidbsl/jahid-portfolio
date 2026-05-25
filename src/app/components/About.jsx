'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-pink-400 mb-6">
              WHO AM I
            </div>

            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-none mb-8">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-400">Jahid</span>
            </h2>

            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                A passionate <span className="text-white font-medium">Full-Stack Developer</span> specializing in 
                building exceptional digital experiences with modern web technologies.
              </p>
              <p>
                With expertise in the <span className="text-pink-400">MERN Stack</span> and <span className="text-white">Next.js</span>, 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p>
                Currently crafting pixel-perfect interfaces and robust backend systems. 
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or capturing moments through photography.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-white">2+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-white/60 text-sm">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white">8+</div>
                <div className="text-white/60 text-sm">Happy Clients</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Photo Area (Fixed) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative aspect-[4/4.5] md:aspect-square rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
              
              {/* Your Photo - Better Cropping */}
              <Image 
                src="https://i.ibb.co.com/NnLWY2jN/45b74f14-5230-469a-8bef-50c0355e8828.jpg"
                alt="Jahid Hasan"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-orange-500/10" />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              {/* Name & Title */}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white text-3xl font-bold tracking-tight">JAHID HASAN</p>
                <p className="text-pink-400 text-lg font-medium">Full-Stack Developer</p>
              </div>

              {/* Decorative Rings */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border border-white/20 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 border border-white/20 rounded-full" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-center shadow-2xl"
            >
              <div className="text-3xl">🇧🇩</div>
              <div className="text-white text-sm mt-1">Based in</div>
              <div className="text-white/90 font-medium">Barishal, Bangladesh</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;