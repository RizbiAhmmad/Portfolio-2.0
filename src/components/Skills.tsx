/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { BorderBeam } from "@stianlarsen/border-beam";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const skillsData = {
  "Front-end": [
    {
      name: "HTML5",
      img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      color: "#F44336",
    },
    {
      name: "CSS3",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      color: "#0000CD",
    },
    {
      name: "React",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      color: "#00BFFF",
    },
    {
      name: "Next.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      color: "#FFFFFF",
      invertInDark: true,
    },
    {
      name: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      color: "#FFD700",
    },
    {
      name: "TypeScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      color: "#3178C6",
    },
    {
      name: "Tailwind",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      color: "#E1306C",
    },
    {
      name: "Firebase",
      img: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
      color: "#FF4500",
    },
    {
      name: "ShadcnUI",
      img: "https://avatars.githubusercontent.com/u/139895814?s=280&v=4",
      color: "#000000",
      invertInDark: true,
    },
  ],
  "Back-end": [
    {
      name: "Node.js",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRgfZ2sG6xWL_Ag0kASTIytHshA2F419syVg&s",
      color: "#25D366",
    },
    {
      name: "Express.js",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      color: "#808080",
      invertInDark: true,
    },
    {
      name: "MongoDB",
      img: "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png",
      color: "#4CAF50",
    },
    {
      name: "PostgreSQL",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
      color: "#336791",
    },
    {
      name: "Prisma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      color: "#0C344B",
      invertInDark: true,
    },
  ],
  Tools: [
    {
      name: "GitHub",
      img: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_640.png",
      color: "#5F9EA0",
      invertInDark: true,
    },
    {
      name: "Git",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      color: "#FF69B4",
    },
    // { name: "Bun", img: "https://bun.sh/logo.svg", color: "#FBF0DF" },
    {
      name: "NPM",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/db/Npm-logo.svg",
      color: "#CB3837",
    },
    {
      name: "Figma",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      color: "#F24E1E",
    },
    {
      name: "VSCode",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
      color: "#007ACC",
    },
    {
      name: "Vercel",
      img: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png",
      color: "#000000",
      invertInDark: true,
    },
    {
      name: "Netlify",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
      color: "#00C7B7",
    },
  ],
};

type TabName = "Front-end" | "Back-end" | "Tools";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<TabName>("Front-end");

  return (
    <section
      id="skill"
      className="py-12 sm:py-20 px-4 md:px-8 transition-colors duration-300"
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
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A34F2] to-[#87CEEB]">
              Skills
            </span>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#7A34F2] to-[#87CEEB] rounded-full"></span>
          </h2>
        </motion.div>

        {/* Tabs Container */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 sm:gap-4 p-2 bg-gray-200 dark:bg-gray-900 rounded-full shadow-inner border border-gray-300 dark:border-gray-800">
            {(Object.keys(skillsData) as TabName[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base transition-all duration-300 ${
                  activeTab === tab
                    ? "text-white font-extrabold shadow-xl"
                    : "text-gray-600 dark:text-gray-400 font-bold hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-[#7A34F2] to-[#4F46E5] rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span
                  className={`relative z-10 ${activeTab === tab ? "drop-shadow-md tracking-wider" : ""}`}
                >
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Icons Grid with user's specific design */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap justify-center gap-8 sm:gap-12 lg:gap-16 gap-y-16"
            >
              {skillsData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center gap-4"
                >
                  <div className="relative p-5 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 group overflow-hidden">
                    <Image
                      width={500}
                      height={500}
                      src={skill.img}
                      alt={`${skill.name} Icon`}
                      className={`h-16 w-16 object-contain transform transition duration-500 ease-in-out group-hover:scale-125 ${
                        (skill as any).invertInDark
                          ? "dark:invert"
                          : "dark:filter dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                      }`}
                    />
                    <BorderBeam
                      size={200}
                      duration={10}
                      colorFrom={"#D3D3D3"}
                      colorTo={skill.color}
                    />
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
