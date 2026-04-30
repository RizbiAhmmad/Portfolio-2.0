"use client";

import React from "react";
import {
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { BorderBeam } from "@stianlarsen/border-beam";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner = () => {
  return (
    <div
      id="home"
      className="flex items-center justify-center pt-24 pb-14 min-h-[80vh] px-8 transition-colors duration-300"
    >
      <div className="container mx-auto lg:w-10/12 xl:w-9/12 flex flex-col-reverse md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
        {/* Text Section */}
        <div className="text-center md:text-left pl-0 md:pl-4 mt-10 md:mt-0 flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
              Hello there 👋
            </p>
            <h1 className="text-5xl md:text-6xl font-black mt-2">
              I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A34F2] to-[#87CEEB]">
                Rizbi Ahmmad
              </span>
            </h1>

            <div className="text-2xl md:text-3xl font-bold mt-4 h-[40px] text-gray-700 dark:text-gray-200">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Next.js Developer",
                  2000,
                  "MERN Stack Specialist",
                  2000,
                  "UI/UX Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#7A34F2] dark:text-[#87CEEB]"
              />
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg text-left mt-6 xl:w-11/12 leading-relaxed">
              I&apos;m deeply passionate about creating innovative, responsive,
              and user-friendly web applications that captivate and engage
              users. I specialize in building sleek, interactive front-end
              designs with React and Next.js, while leveraging the power of
              Node.js, Express.js, and MongoDB for scalable back-end solutions.
              Let&apos;s collaborate to turn your ideas into seamless digital
              solutions!
            </p>

            {/* Social Icons */}
            <div className="flex items-center justify-center md:justify-start gap-6 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-[#7A34F2] dark:hover:text-[#87CEEB] hover:-translate-y-1 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-[#7A34F2] dark:hover:text-[#87CEEB] hover:-translate-y-1 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-[#7A34F2] dark:hover:text-[#87CEEB] hover:-translate-y-1 transition-all duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-[#7A34F2] dark:hover:text-[#87CEEB] hover:-translate-y-1 transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>

            {/* Hire Me Button */}
            <div className="flex justify-center md:justify-start">
              <a
                href="mailto:rizonahmed0486@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <button className="mt-8 px-10 py-3 flex items-center gap-2 cursor-pointer bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-b-2 border-purple-600 hover:bg-[#7A34F2] dark:hover:bg-[#7A34F2] dark:hover:text-white hover:text-white rounded-full transition-all duration-300 shadow-lg group">
                  <span className="font-semibold text-lg">Hire Me</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 flex justify-center md:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-2xl z-10 relative">
              {/* Replace the src below with your actual image path like '/profile.jpg' */}
              <Image
                src="/Rizbi_Ahmmad.png"
                alt="Rizbi Ahmmad"
                width={500}
                height={500}
                className="object-cover"
              />
              <BorderBeam
                size={250}
                borderWidth={3}
                duration={12}
                colorFrom={"#7A34F2"}
                colorTo={"#87CEEB"}
              />
            </div>

            {/* Decorative background glow behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-gradient-to-r from-[#7A34F2] to-[#87CEEB] rounded-full blur-3xl opacity-20 -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
