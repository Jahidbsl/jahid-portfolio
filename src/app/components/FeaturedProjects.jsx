'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const featuredProjects = [
  {
    id: 1,
    title: "Pet Adoption Platform",
    category: "Full Stack",
    desc: "Complete Adoption solution with payment integration and admin dashboard.",
    image: "https://i.ibb.co.com/HfRKXYTM/Screenshot-From-2026-05-25-19-54-33.png", 
    tech: ["Next.js", "Tailwind", "Express.js", "MongoDB", "Heroui"],
    features: [
      "Real-time order tracking",
      "Advanced filtering & search",
      "Beautiful product animations",
      "Admin dashboard with analytics"
    ],
    liveLink: "https://b13-a9-pet-adoption-platform.vercel.app",
    githubLink: "https://github.com/Jahidbsl/b13-a9-pet-adoption-platform"
  },
  {
    id: 2,
    title: "Qurbanihat livestock",
    category: "Full Stack",
    desc: "Modern Platform to sell halal amimals.",
    image: "https://i.ibb.co.com/mCTZpXxK/Screenshot-From-2026-05-25-20-03-21.png", // Dashboard
    tech: ["Next.js", "Tailwind", "Express.js", "MongoDB", "Heroui","Lotte"],
    features: [
      "Real-time order tracking",
      "Advanced filtering & search",
      "Beautiful product animations",
    ],
    liveLink: "https://a8-b13-qurbanihat-livestock.vercel.app",
    githubLink: "https://github.com/Jahidbsl/a8-b13-qurbanihat-livestock"
  },
  {
    id: 3,
    title: "Dragon News",
    category: "Online news portal",
    desc: "Journalism Without Fear or Favour.",
    image: "https://i.ibb.co.com/rGPYR6Fj/Screenshot-From-2026-05-25-20-07-04.png", // Chat
    tech: ["Next.js", "Tailwind", "Express.js", "MongoDB", "Heroui"],
    features: [
      "Real-time messaging",
      "Video & voice calls",
      "Online status",
      "Message encryption"
    ],
    liveLink: "https://dragon-news-next-rho.vercel.app",
    githubLink: "https://github.com/Jahidbsl/dragon-news-next"
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