"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiEye } from "react-icons/fi";
import { projectsData } from "@/data/projects";
import { BorderBeam } from "@stianlarsen/border-beam";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 md:px-8 transition-colors duration-300"
    >
      <div className="container mx-auto lg:w-10/12 xl:w-9/12">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black inline-block relative text-gray-900 dark:text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A34F2] to-[#87CEEB]">
              Projects
            </span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7A34F2] to-[#87CEEB] rounded-full"></span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-24">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-10 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative group rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-[300px] sm:h-[400px] w-full bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-100 group-hover:opacity-100"
                  />

                  <BorderBeam
                    size={250}
                    duration={12}
                    delay={9}
                    colorFrom="#7A34F2"
                    colorTo="#87CEEB"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-[#7A34F2] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gray-900 dark:bg-[#111] text-white border border-transparent dark:border-gray-800 hover:bg-black dark:hover:bg-[#222] hover:scale-105 active:scale-95 transition-all shadow-sm">
                      <FaGithub size={18} />
                      <span className="font-semibold text-sm">Code</span>
                    </button>
                  </Link>

                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:bg-gray-50 dark:hover:bg-white/5 hover:scale-105 active:scale-95 transition-all shadow-sm">
                      <FiExternalLink size={18} />
                      <span className="font-semibold text-sm">Live Demo</span>
                    </button>
                  </Link>

                  <Link href={`/projects/${project.id}`}>
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#7A34F2] to-[#4F46E5] text-white font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all">
                      <FiEye size={18} />
                      <span className="font-semibold text-sm">View Details</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
