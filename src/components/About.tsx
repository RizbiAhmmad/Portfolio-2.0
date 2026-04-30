"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BorderBeam } from "@stianlarsen/border-beam";
import { Download, Laptop, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 transition-colors duration-300"
    >
      <div className="container mx-auto lg:w-11/12 xl:w-10/12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold inline-block relative text-gray-900 dark:text-white">
            About Me
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#7A34F2] to-[#87CEEB] rounded-full"></span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Image Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-5/12 flex justify-center relative"
          >
            {/* Image Wrapper */}
            <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-[2.5rem] p-1 bg-gradient-to-br from-[#7A34F2]/50 to-[#87CEEB]/50 shadow-[0_0_40px_rgba(122,52,242,0.15)]">
              <div className="w-full h-full rounded-[2.3rem] overflow-hidden relative bg-gray-200 dark:bg-gray-800">
                <Image
                  src="/Rizbi_Ahmmad 2.jpeg"
                  alt="About Rizbi Ahmmad"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating CV Button */}
              <a
                href="/resume.pdf"
                target="_blank"
                className="absolute -top-4 -right-4 sm:-right-8 bg-[#8B5CF6] hover:bg-[#7A34F2] text-white px-5 py-3 rounded-2xl flex items-center gap-2 font-medium shadow-xl transition-transform hover:scale-105 z-20"
              >
                My CV <Download size={18} />
              </a>

              {/* Optional: Add BorderBeam for extra glow */}
              <BorderBeam
                size={200}
                borderWidth={2}
                duration={12}
                colorFrom={"#7A34F2"}
                colorTo={"#87CEEB"}
              />
            </div>
          </motion.div>

          {/* Text Section - Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-7/12 text-gray-700 dark:text-gray-300 space-y-8"
          >
            {/* Intro Paragraph */}
            <p className="text-base sm:text-lg leading-relaxed">
              I&apos;m a passionate Developer who loves turning ideas into
              clean, responsive, and user-focused web experiences. I specialize
              in crafting modern interfaces and robust backends using the MERN
              stack, and I have expanded my expertise into Next.js, PostgreSQL,
              and TypeScript to build scalable and high-performance
              applications.
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {/* Card 1: Programming Journey */}
              <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#0f111a]/50 hover:border-[#7A34F2]/50 dark:hover:border-[#7A34F2]/50 transition-colors shadow-sm">
                <Laptop className="text-[#8B5CF6] mb-4" size={28} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Programming Journey
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  After completing my B.Sc. in CSE, I finished Programming
                  Hero&apos;s MERN course and secured a job. While working, I
                  pushed myself to complete their Next Level course, mastering
                  Next.js, TypeScript, and PostgreSQL to elevate my skills.
                </p>
              </div>

              {/* Card 2: Education & Creativity */}
              <div className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#0f111a]/50 hover:border-[#87CEEB]/50 dark:hover:border-[#87CEEB]/50 transition-colors shadow-sm">
                <GraduationCap className="text-[#87CEEB] mb-4" size={28} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Education & Creativity
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  I hold a B.Sc. in Computer Science & Engineering. Outside of
                  coding, I enjoy staying active with sports, watching movies,
                  and exploring tech trends. I believe balancing logic with
                  creativity fuels better problem-solving.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
