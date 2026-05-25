"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    id: 1,
    title: "Next.js & MERN Stack Developer",
    issuer: "Programming Hero",
    date: "June 2026",
    credential: "Professional Certificate",
    color: "from-blue-500 to-cyan-500",
    link: "#",
  },
  {
    id: 2,
    title: "Database ManageMent",
    issuer: "Department of youth development ministry of youth & sports",
    date: "January 2026",
    credential: "Professional Certificate",
    color: "from-green-500 to-emerald-500",
    link: "https://i.ibb.co.com/SD5nNtmT/Whats-App-Image-2026-05-25-at-5-55-22-PM.jpg",
  },

  {
    id: 3,
    title: "Web Design, Level-3 (360 hours)",
    issuer: "NSDA",
    date: "February 2025",
    credential: "Professional Certificate",
    color: "from-pink-500 to-rose-500",
    link: "https://i.ibb.co.com/zvCyyJg/Certificate-Md-Jahid-Hasan.png",
  },
  {
    id: 4,
    title: "BBA",
    issuer: "National University of Bangladesh",
    date: "2022",
    credential: "Professional Certificate",
    color: "from-orange-500 to-amber-500",
    link: "https://i.ibb.co.com/pBw5ZpJY/8dfd79dc-3d2c-49b5-bf47-dcf151a0b797-page-0001.jpg",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-pink-400 mb-4">
            <Award className="w-8 h-8" />
            <span className="text-sm tracking-[3px] font-medium">
              ACHIEVEMENTS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Certifications
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              className="group bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-pink-500/30 transition-all duration-300 flex flex-col"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-6`}
              >
                <Award className="w-9 h-9 text-white" />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2 group-hover:text-pink-400 transition">
                {cert.title}
              </h3>

              <p className="text-white/70 mb-1">{cert.issuer}</p>
              <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
                <Calendar className="w-4 h-4" />
                {cert.date}
              </div>

              <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-white/60">{cert.credential}</span>

                <Link
                  href={cert.link}
                  target="_blank"
                  className="flex items-center gap-2 text-pink-400 hover:text-pink-500 transition text-sm font-medium"
                >
                  Verify Credential
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 text-white/50 text-sm"
        >
          More certifications and achievements are being added regularly.
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
