'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl overflow-y-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative bg-zinc-900 border border-white/10 rounded-3xl w-full max-w-4xl max-h-[95vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 text-white/70 hover:text-white transition text-4xl leading-none bg-black/50 hover:bg-black/70 w-10 h-10 rounded-full flex items-center justify-center"
            >
              ×
            </button>

            {/* Hero Image */}
            <div className="relative h-64 sm:h-72 md:h-80 w-full flex-shrink-0">
              <Image 
                src={project.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"} 
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white/80 text-xs sm:text-sm tracking-widest uppercase">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-1 leading-tight">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                
                {/* Main Description */}
                <div className="md:col-span-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">Project Overview</h3>
                  <p className="text-white/70 leading-relaxed text-[15px] md:text-base">
                    {project.description || 
                      "A modern, high-performance web application built with cutting-edge technologies. Focused on exceptional user experience, scalability, and clean architecture."}
                  </p>

                  <div className="mt-10">
                    <h4 className="text-white font-medium mb-4 text-lg">Key Features</h4>
                    <ul className="space-y-3 text-white/70">
                      {project.features?.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-pink-500 mt-1.5 text-lg">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sidebar - Tech Stack & Links */}
                <div className="md:col-span-1">
                  <h4 className="text-white font-medium mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech?.map((t, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <a
                      href={project.liveLink || "#"}
                      target="_blank"
                      className="block w-full text-center py-4 bg-white text-black font-semibold rounded-2xl hover:bg-white/90 transition"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink || "#"}
                      target="_blank"
                      className="block w-full text-center py-4 border border-white/30 text-white font-medium rounded-2xl hover:bg-white/10 transition"
                    >
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;