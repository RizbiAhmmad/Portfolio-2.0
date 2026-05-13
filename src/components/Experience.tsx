"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BorderBeam } from "@stianlarsen/border-beam";
import { Code, Network } from "lucide-react";

const experienceData = [
  {
    role: "MERN Stack Developer",
    company: "Bangladeshi IT Company",
    location: "Bangladesh",
    duration: "July 2025 - Present",
    description:
      "Specializing in full-stack web development using MongoDB, Express.js, React, and Node.js. Responsible for building scalable web applications, optimizing performance, and delivering seamless user experiences.",
    icon: <Code className="w-6 h-6" />,
    color: "#7A34F2",
    skills: ["React", "Node.js", "Express", "MongoDB", "Next.js", "TypeScript"],
  },
  {
    role: "Network Support Engineer",
    company: "KS Network Limited",
    location: "Chittagong, Bangladesh",
    duration: "July 2024 - June 2025",
    description:
      "Managed and maintained network infrastructure, providing technical support for LAN/WAN systems, and ensuring optimal network performance and security for the organization.",
    icon: <Network className="w-6 h-6" />,
    color: "#87CEEB",
    skills: [
      "Networking",
      "Troubleshooting",
      "Hardware Support",
      "LAN/WAN",
      "System Admin",
    ],
  },
];

const Experience = () => {
  const containerRef = useRef(null);

  // Scroll Animation for the middle line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-12 sm:py-20 px-4 md:px-8 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="container mx-auto lg:w-10/12 xl:w-9/12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-black inline-block relative text-gray-900 dark:text-white">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A34F2] to-[#87CEEB]">
              Experience
            </span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7A34F2] to-[#87CEEB] rounded-full"></span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Main Vertical Line (Background) */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gray-100 dark:bg-white/5 rounded-full hidden md:block" />

          {/* Scroll-linked Animated Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#7A34F2] to-[#87CEEB] rounded-full hidden md:block z-10"
          />

          <div className="space-y-16 md:space-y-24">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Center Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-[#0f111a] border-4 border-gray-200 dark:border-gray-800 z-20 hidden md:flex items-center justify-center shadow-lg">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: exp.color }}
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="relative p-7 md:p-8 rounded-3xl bg-white dark:bg-[#0f111a] border border-gray-100 dark:border-white/5 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                    <BorderBeam
                      size={250}
                      duration={12}
                      delay={index * 2}
                      colorFrom={exp.color}
                      colorTo={index % 2 === 0 ? "#87CEEB" : "#7A34F2"}
                    />

                    <div
                      className={`flex flex-col gap-3 relative z-10 ${
                        index % 2 === 0 ? "md:items-end" : "md:items-start"
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg mb-2"
                        style={{ backgroundColor: exp.color }}
                      >
                        {exp.icon}
                      </div>

                      <span className="text-sm font-bold px-3 py-1 rounded-full bg-gray-50 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-white/10">
                        {exp.duration}
                      </span>

                      <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-tight">
                        {exp.role}
                      </h3>

                      <p className="text-lg font-bold text-[#7A34F2] dark:text-[#87CEEB]">
                        {exp.company}
                      </p>

                      <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills Tags */}
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          index % 2 === 0
                            ? "md:justify-end"
                            : "md:justify-start"
                        }`}
                      >
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-[#7A34F2]/5 text-[#7A34F2] dark:text-[#87CEEB] border border-[#7A34F2]/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Empty Space for the other side (Desktop) */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
