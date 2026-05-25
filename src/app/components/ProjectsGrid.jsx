"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

const allProjects = [
  {
    id: 1,
    title: "Pet Adoption Platform",
    category: "Full Stack",
    desc: "Complete Adoption solution with payment integration and admin dashboard.",
    image:
      "https://i.ibb.co.com/HfRKXYTM/Screenshot-From-2026-05-25-19-54-33.png",
    tech: ["Next.js", "Tailwind", "Express.js", "MongoDB"],
    features: [
      "Real-time order tracking",
      "Advanced filtering & search",
      "Beautiful product animations",
      "Admin dashboard with analytics",
    ],
    liveLink: "https://b13-a9-pet-adoption-platform.vercel.app",
    githubLink: "https://github.com/Jahidbsl/b13-a9-pet-adoption-platform",
  },
  {
    id: 2,
    title: "Qurbanihat Livestock",
    category: "Full Stack",
    desc: "Modern Platform to sell halal animals.",
    image:
      "https://i.ibb.co.com/mCTZpXxK/Screenshot-From-2026-05-25-20-03-21.png",
    tech: ["Next.js", "Tailwind", "Express.js", "MongoDB"],
    features: [
      "Real-time order tracking",
      "Advanced filtering & search",
      "Beautiful product animations",
    ],
    liveLink: "https://a8-b13-qurbanihat-livestock.vercel.app",
    githubLink: "https://github.com/Jahidbsl/a8-b13-qurbanihat-livestock",
  },
  {
    id: 3,
    title: "Dragon News",
    category: "Online News Portal",
    desc: "Journalism Without Fear or Favour.",
    image:
      "https://i.ibb.co.com/rGPYR6Fj/Screenshot-From-2026-05-25-20-07-04.png",
    tech: ["Next.js", "Tailwind", "Express.js", "MongoDB"],
    features: [
      "Modern responsive news platform",
      "Dynamic category-wise news browsing",
      "Trending and latest news sections",
      "JWT/Firebase authentication",
      "Protected premium content routes",
      "Interactive news details page",
      "Advanced search functionality",
      "Real-time user online status",
      "Secure authentication system",
      "Bookmark favorite news articles",
    ],
    liveLink: "https://dragon-news-next-rho.vercel.app",
    githubLink: "https://github.com/Jahidbsl/dragon-news-next",
  },
  {
    id: 4,
    title: "KeenKeeper",
    category: "Social platform",
    desc: "Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
    image:
      "https://i.ibb.co.com/HfYK4BX3/Screenshot-From-2026-05-25-20-19-47.png",
    tech: ["Next.js", "Tailwind", "Express.js", "MongoDB"],
    features: [
      "Real-time messaging",
      "Video & voice calls",
      "Online status",
      "Message encryption",
    ],
    liveLink: "https://b13-a7-keen-keeper-chi.vercel.app",
    githubLink: "https://github.com/Jahidbsl/b13-a7-keen-keeper",
  },
  {
    id: 5,
    title: "Book Vibe",
    category: "Finance",
    desc: "Books to freshen up your bookshelf",
    image:
      "https://i.ibb.co.com/7x54XD0Z/Screenshot-From-2026-05-25-20-26-17.png",
    tech: ["Next.js", "Chart.js", "Firebase"],
    features: [
      "Browse and discover books",
      "Category based book filtering",
      "Detailed book information page",
      "Responsive modern UI",
      "Authentication system",
      "Wishlist functionality",
      "Book review and ratings",
      "Search books by title or author",
    ],
    liveLink: "https://admirable-pastelito-c3b49d.netlify.app/",
    githubLink: "#",
  },
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
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                All Projects
              </h2>
              <p className="text-white/60 mt-2">
                Showcasing my journey as a MERN & Next.js Developer
              </p>
            </div>
            <p className="text-white/60 mt-4 md:mt-0">
              5+ Projects • Continuously Growing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {allProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => openProject(project)}
                className="group bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-pink-500/40 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="absolute top-4 right-4 px-4 py-1 text-xs font-medium bg-black/70 text-white rounded-full">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-pink-400 transition">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mb-6 line-clamp-3">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 bg-white/5 text-white/70 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="text-pink-400 text-sm font-medium flex items-center gap-2">
                    View Project Details →
                  </div>
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
