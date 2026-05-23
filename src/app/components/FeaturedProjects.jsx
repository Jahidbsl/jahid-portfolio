'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    desc: "Complete e-commerce solution with payment integration and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-1710528125-0d1d8f6b6c3c?w=800", // Shopping
    tech: ["Next.js", "Tailwind", "Node.js", "MongoDB", "Razorpay"],
    features: [
      "Real-time order tracking",
      "Advanced filtering & search",
      "Beautiful product animations",
      "Admin dashboard with analytics"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "AI SaaS Dashboard",
    category: "SaaS Platform",
    desc: "Modern AI-powered SaaS with subscription management and analytics.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800", // Dashboard
    tech: ["Next.js 15", "TypeScript", "Prisma", "Stripe", "Tailwind"],
    features: [
      "AI content generation",
      "Usage analytics",
      "Team collaboration",
      "Subscription management"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    category: "Messaging",
    desc: "High-performance real-time chat with video calling feature.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800", // Chat
    tech: ["React", "Socket.io", "Express", "MongoDB"],
    features: [
      "Real-time messaging",
      "Video & voice calls",
      "Online status",
      "Message encryption"
    ],
    liveLink: "#",
    githubLink: "#"
  }
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Selected works that represent my expertise in modern web development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -12 }}
                onClick={() => openProject(project)}
                className="group cursor-pointer bg-zinc-900/80 border border-white/10 rounded-3xl overflow-hidden h-full flex flex-col hover:border-pink-500/30 transition-all"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-black/70 text-white rounded-full">
                    {project.category}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-pink-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-6 flex-1">{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-3 py-1 bg-white/5 text-white/70 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-pink-400 text-sm font-medium flex items-center gap-2 mt-auto">
                    View Details →
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default FeaturedProjects;