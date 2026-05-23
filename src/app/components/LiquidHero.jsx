"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiBetterauth
} from "react-icons/si";
import Link from "next/link";

const LiquidHero = () => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newRipple = { id: Date.now(), x: `${x}%`, y: `${y}%` };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 3000);
  };

  const skills = [
    {
      name: "React",
      color: "text-cyan-300",
      icon: SiReact,
      size: "w-32 h-32 md:w-44 md:h-44",
      bg: "bg-white/10",
      pos: "top-[10%] -right-[2%]",
    },
    {
      isEmpty: true,
      size: "w-24 h-24 md:w-32 md:h-32",
      bg: "bg-white/5",
      pos: "top-[42%] -right-[4%]",
    },
    {
      name: "MongoDB",
      color: "text-green-400",
      icon: SiMongodb,
      size: "w-32 h-32 md:w-44 md:h-44",
      bg: "bg-white/5",
      pos: "bottom-[2%] -right-[2%]",
    },
    {
      name: "JavaScript",
      color: "text-yellow-300",
      icon: SiJavascript,
      size: "w-24 h-24 md:w-32 md:h-32",
      bg: "bg-white/5",
      pos: "top-[5%] right-[24%]",
    },
    {
      name: "Next.js",
      color: "text-white",
      icon: SiNextdotjs,
      size: "w-28 h-28 md:w-38 md:h-38",
      bg: "bg-white/5",
      pos: "top-[32%] right-[16%]",
    },
    {
      name: "Node.js",
      color: "text-green-300",
      icon: SiNodedotjs,
      size: "w-32 h-32 md:w-40 md:h-40",
      bg: "bg-white/15",
      pos: "bottom-[12%] right-[22%]",
    },
    {
      isEmpty: true,
      size: "w-24 h-24 md:w-32 md:h-32",
      bg: "bg-white/5",
      pos: "top-[-5%] right-[45%]",
    },
    {
      isEmpty: true,
      size: "w-20 h-20 md:w-26 md:h-26",
      bg: "bg-white/5",
      pos: "top-[40%] right-[42%]",
    },
    {
      name: "Better Auth",
      color: "text-violet-300",
      icon: SiBetterauth,
      size: "w-24 h-24 md:w-28 md:h-28",
      bg: "bg-white/10",
      pos: "top-[22%] right-[40%]",
    },
    {
      name: "Express.js",
      color: "text-gray-200",
      icon: SiExpress,
      size: "w-22 h-22 md:w-26 md:h-26",
      bg: "bg-white/10",
      pos: "top-[55%] right-[2%]",
    },
    {
      name: "TypeScript",
      color: "text-blue-300",
      icon: SiTypescript,
      size: "w-20 h-20 md:w-24 md:h-24",
      bg: "bg-white/10",
      pos: "bottom-[46%] right-[32%]",
    },
    {
      name: "Tailwind CSS",
      color: "text-sky-300",
      icon: SiTailwindcss,
      size: "w-22 h-22 md:w-26 md:h-26",
      bg: "bg-white/10",
      pos: "bottom-[28%] right-[42%]",
    },
    {
      name: "Redux",
      color: "text-purple-300",
      icon: SiRedux,
      size: "w-20 h-20 md:w-24 md:h-24",
      bg: "bg-white/5",
      pos: "bottom-[5%] right-[46%]",
    },
    {
      name: "JWT Auth",
      color: "text-emerald-300",
      icon: SiJsonwebtokens,
      size: "w-20 h-20 md:w-24 md:h-24",
      bg: "bg-white/5",
      pos: "bottom-[18%] right-[5%]",
    },
    {
      name: "Git",
      color: "text-orange-400",
      icon: SiGit,
      size: "w-16 h-16 md:w-20 md:h-20",
      bg: "bg-white/10",
      pos: "top-[48%] right-[52%]",
    },
    {
      name: "GitHub",
      color: "text-white",
      icon: SiGithub,
      size: "w-16 h-16 md:w-20 md:h-20",
      bg: "bg-white/5",
      pos: "bottom-[40%] right-[55%]",
    },
    {
      isEmpty: true,
      size: "w-16 h-16 md:w-20 md:h-20",
      bg: "bg-white/5",
      pos: "bottom-[-6%] right-[30%]",
    },
  ];

  return (
    <>
      <div
        className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center cursor-pointer select-none pt-20"
        onClick={handleClick}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#2A0A4A] via-[#9F1D8C] via-[#E11D8A] to-[#FF4F00] to-[#FFB800]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E0B3A]/70 to-black/80" />

        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-white/20 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                width: `${160 + i * 90}px`,
                height: `${160 + i * 90}px`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [0.6, 4.5],
                opacity: [0.28, 0],
              }}
              transition={{
                duration: 6.8 + i * 1.1,
                repeat: Infinity,
                delay: i * -0.9,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        <AnimatePresence>
          {ripples.map((ripple) => (
            <React.Fragment key={ripple.id}>
              <motion.div
                className="absolute border border-white/70 rounded-full pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{
                  width: 40,
                  height: 40,
                  opacity: 0.8,
                  borderWidth: 6,
                }}
                animate={{
                  width: 680,
                  height: 680,
                  opacity: 0,
                  borderWidth: 1,
                }}
                transition={{ duration: 3, ease: "easeOut" }}
              />
              <motion.div
                className="absolute border border-white/50 rounded-full pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{
                  width: 30,
                  height: 30,
                  opacity: 0.6,
                  borderWidth: 4,
                }}
                animate={{
                  width: 520,
                  height: 520,
                  opacity: 0,
                  borderWidth: 0.8,
                }}
                transition={{ duration: 2.8, ease: "easeOut", delay: 0.2 }}
              />
            </React.Fragment>
          ))}
        </AnimatePresence>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.35)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,rgba(255,220,100,0.25)_0%,transparent_55%)]" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto px-6 h-full min-h-[80vh]">
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.35em",
                color: "rgba(255,255,255,0.45)",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
                fontWeight: 400,
              }}
            >
              Full-Stack Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
            >
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.92,
                  color: "#fff",
                  margin: 0,
                }}
                className="text-[13vw] sm:text-[80px] lg:text-[96px]"
              >
                Welcome
              </h1>
              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.92,
                  color: "#fff",
                  margin: 0,
                }}
                className="text-[13vw] sm:text-[80px] lg:text-[96px] mt-1 md:-mt-2"
              >
                to My
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-5 mb-8"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="h-px w-12 md:w-16 bg-white/50" />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    letterSpacing: "0.4em",
                    color: "rgba(255,255,255,0.92)",
                    textTransform: "uppercase",
                    margin: 0,
                  }}
                  className="text-[24px] md:text-[38px] lg:text-[44px]"
                >
                  Portfolio
                </p>
                <div className="h-px w-12 md:w-16 bg-white/50 lg:hidden" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.22em",
                color: "rgba(255,255,255,0.55)",
                textTransform: "uppercase",
                fontWeight: 400,
                margin: 0,
              }}
            >
              MERN Stack &nbsp;·&nbsp; Next.js &nbsp;·&nbsp; Full-Stack
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/projects"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
                className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition text-center"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
                className="px-8 py-4 border border-white/60 text-white rounded-full hover:bg-white/10 transition text-center"
              >
                Let&apos;s Connect
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative w-full h-[500px] md:h-[600px] lg:h-[650px] mt-10 lg:mt-0 overflow-visible">
            <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-4 lg:block">
              {skills.map((skill, i) => {
                if (skill.isEmpty) {
                  return (
                    <div
                      key={`empty-${i}`}
                      className={`
                        hidden lg:block
                        ${skill.size} ${skill.bg} lg:absolute ${skill.pos}
                        rounded-full backdrop-blur-md border border-white/5
                        pointer-events-none select-none
                      `}
                    />
                  );
                }

                const Icon = skill.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.2 + i * 0.05,
                      type: "spring",
                      stiffness: 60,
                    }}
                    whileHover={{ scale: 1.08, y: -6 }}
                    className={`
                      ${skill.size} 
                      ${skill.bg} 
                      lg:absolute ${skill.pos}
                      rounded-full backdrop-blur-xl border border-white/10 
                      flex flex-col items-center justify-center p-4
                      shadow-[0_15px_50px_rgba(0,0,0,0.3)] hover:bg-white/20 
                      transition-colors duration-300 group select-none
                    `}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

                    <Icon
                      className={`text-3xl md:text-4xl lg:text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 mb-1 md:mb-2`}
                    />

                    <span
                      className="text-white/80 text-center select-none"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {skill.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black to-transparent" />
      </div>
    </>
  );
};

export default LiquidHero;