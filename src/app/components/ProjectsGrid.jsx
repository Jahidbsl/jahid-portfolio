'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    desc: "Complete e-commerce solution with payment integration and admin dashboard.",
    description: "A modern full-stack e-commerce platform built with Next.js 15, featuring real-time inventory, Razorpay payment gateway, and a powerful admin dashboard.",
    tech: ["Next.js", "Tailwind", "Node.js", "MongoDB", "Razorpay"],
    features: [
      "Real-time order tracking",
      "Advanced product filtering",
      "Admin analytics dashboard",
      "Secure payment integration"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "AI SaaS Dashboard",
    category: "SaaS Platform",
    desc: "Modern AI-powered SaaS with subscription management and analytics.",
    description: "An intelligent SaaS platform that leverages AI to help businesses generate content, analyze performance, and manage subscriptions effortlessly.",
    tech: ["Next.js 15", "TypeScript", "Prisma", "Stripe", "OpenAI"],
    features: [
      "AI content generation",
      "Real-time analytics",
      "Team collaboration tools",
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
    description: "A fast and secure real-time messaging application with video and voice calling capabilities built using Socket.io.",
    tech: ["React", "Socket.io", "Express", "MongoDB", "WebRTC"],
    features: [
      "Real-time messaging",
      "Video & voice calls",
      "Online user status",
      "End-to-end encryption"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 4,
    title: "TaskFlow - Project Management",
    category: "Productivity",
    desc: "Beautiful and intuitive project management tool for teams.",
    description: "A modern project management tool that helps teams collaborate, track progress, and meet deadlines with ease.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: [
      "Kanban & List views",
      "Task dependencies",
      "Real-time updates",
      "Team permissions"
    ],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 5,
    title: "Crypto Portfolio Tracker",
    category: "Finance",
    desc: "Real-time cryptocurrency portfolio tracking and analytics.",
    description: "Track your crypto investments with beautiful charts, price alerts, and comprehensive portfolio analytics.",
    tech: ["Next.js", "Chart.js", "Firebase", "Tailwind"],
    features: [
      "Live price tracking",
      "Portfolio performance",
      "Price alerts",
      "Beautiful charts"
    ],
    liveLink: "#",
    githubLink: "#"
  }
];

const ProjectsGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">All Projects</h2>
              <p className="text-white/60 mt-2">Showcasing my journey as a MERN & Next.js Developer</p>
            </div>
            <p className="text-white/60 mt-4 md:mt-0">5+ Projects • Continuously Growing</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {allProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                onClick={() => openProject(project)}
                className="group bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-pink-500/40 cursor-pointer transition-all duration-300"
              >
                <div className="text-pink-500 text-sm font-medium mb-3">{project.category}</div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/70 mb-6 line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-pink-400 text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                  View Project Details →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ProjectsGrid;