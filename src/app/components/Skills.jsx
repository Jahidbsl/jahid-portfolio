'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Framer Motion", level: 88 },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "NestJS", level: 80 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 78 },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Redux / Zustand", level: 85 },
      { name: "Figma", level: 82 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Technologies I use to bring ideas to life with precision and creativity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 hover:border-pink-500/30 transition-all group"
            >
              <h3 className="text-2xl font-semibold text-white mb-8 pb-4 border-b border-white/10">
                {category.title}
              </h3>

              <div className="space-y-7">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90 font-medium">{skill.name}</span>
                      <span className="text-white/50 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 + i * 0.1 }}
                        className="h-full bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-white/60 mb-6 text-sm tracking-widest">ALSO PROFICIENT IN</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["REST API", "GraphQL", "WebSocket", "JWT Auth", "Zod", "Jest", "Vercel", "Linux", "UI/UX Design", "Performance Optimization"].map((item, i) => (
              <span
                key={i}
                className="px-5 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm text-white/70 hover:text-white transition-all cursor-default"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;