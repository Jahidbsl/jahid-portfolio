"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Business Administration",
    institution: "National University of Bangladesh",
    location: "Barishal, Bangladesh",
    duration: "4 years",
    status: "Completed",
    grade: "CGPA: 2.69/4.00",
    description:
      "Comprehensive program focusing on core business operations, financial management, market analytics, and organizational leadership. Developed strong analytical, project management, and cross-functional communication skills applicable to agile tech environments.",
    achievements: [
      "Developed a data-driven market research project analyzing consumer behavior trends for local enterprises.",
      "Collaborated in cross-functional teams to design business development strategies and financial models.",
      "Optimized project workflows and timelines during final year case study presentations",
    ],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Barishal Model School & College",
    location: "Barishal, Bangladesh",
    duration: "2014 - 2015",
    status: "Completed",
    grade: "GPA: 2.92/5.00",
    description:
      "Bisiness Studies Group with strong foundation in Accounting Business Organization, and Management.",
    achievements: [
      "Developed a solid foundation in financial accounting principles and mathematics.",
      "Engaged in academic teamwork for commerce-related presentations and projects.",
    ],
  },
{
    "id": 3,
    "degree": "Secondary School Certificate (SSC)",
    "institution": "Barishal Model School & College",
    "location": "Barishal, Bangladesh",
    "duration": "2012 - 2013",
    "status": "Completed",
    "grade": "GPA: 4.38/5.00",
    "description": "Business Studies Group with a strong foundational focus on Accounting, Finance, and General Science.",
    "achievements": [
      "Maintained a strong academic record, graduating in the top tier of the commerce department.",
      "Achieved excellent marks in core mathematical and accounting subjects."
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-pink-400 mb-4">
            <GraduationCap className="w-8 h-8" />
            <span className="text-sm tracking-[3px] font-medium">
              EDUCATION
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            My Academic Journey
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Building a strong foundation for creating exceptional digital
            experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-zinc-900/80 border border-white/10 rounded-3xl p-8 md:p-10 hover:border-pink-500/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-9 h-9 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <h3 className="text-2xl font-semibold text-white group-hover:text-pink-400 transition">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                  </div>

                  <p className="text-white/70 mt-1 text-lg">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2 text-white/60 text-sm mt-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/80 border border-white/10">
                      {edu.status}
                    </div>
                    <div className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/80 border border-white/10">
                      {edu.grade}
                    </div>
                  </div>

                  <p className="mt-6 text-white/70 leading-relaxed">
                    {edu.description}
                  </p>

                  {edu.achievements && (
                    <div className="mt-8">
                      <h4 className="text-white font-medium mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-white/70"
                          >
                            <span className="text-pink-500 mt-1.5">★</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
