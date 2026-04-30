"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 md:px-8 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Optional: Subtle background glow to mimic the dark purple vibe */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#7A34F2]/20 rounded-full blur-[120px] -translate-y-1/2 -z-10 hidden dark:block"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white leading-tight">
              Let&apos;s Create Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A34F2] to-[#87CEEB]">
                Amazing
              </span>{" "}
              Together!
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Have an idea, a question, or just want to say hello? Feel free to
              reach out! Use the details below or fill out the quick contact
              form. Let&apos;s bring great ideas to life together!
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-[#7A34F2] group-hover:text-white transition-all duration-300 shadow-sm border border-transparent dark:border-gray-700">
                  <FiPhone size={24} />
                </div>
                <span className="text-xl font-medium text-gray-800 dark:text-gray-200 tracking-wide">
                  +8801815109616
                </span>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-[#87CEEB] group-hover:text-white transition-all duration-300 shadow-sm border border-transparent dark:border-gray-700">
                  <FiMail size={24} />
                </div>
                <span className="text-xl font-medium text-gray-800 dark:text-gray-200 tracking-wide">
                  contact.rizbi123@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800/80 flex items-center justify-center text-gray-700 dark:text-gray-300 group-hover:bg-gradient-to-r group-hover:from-[#7A34F2] group-hover:to-[#87CEEB] group-hover:text-white transition-all duration-300 shadow-sm border border-transparent dark:border-gray-700">
                  <FiMapPin size={24} />
                </div>
                <span className="text-xl font-medium text-gray-800 dark:text-gray-200 tracking-wide">
                  Mirsharai, Chittagong, Bangladesh
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#1b0d36] dark:to-[#0f111a] shadow-2xl border border-gray-100 dark:border-[#2d1b54]">
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="w-full">
                    <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-200 tracking-wide">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-[#7A34F2] dark:focus:border-[#87CEEB] transition-colors font-medium placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    />
                  </div>
                  <div className="w-full">
                    <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-200 tracking-wide">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-[#7A34F2] dark:focus:border-[#87CEEB] transition-colors font-medium placeholder:text-gray-400 dark:placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-200 tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-[#7A34F2] dark:focus:border-[#87CEEB] transition-colors font-medium placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-200 tracking-wide">
                    Write Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter Your Message"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-[#7A34F2] dark:focus:border-[#87CEEB] transition-colors resize-none font-medium placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  ></textarea>
                </div>

                <div className="flex justify-end pt-2">
                  <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-transparent border-2 border-gray-900 dark:border-gray-600 text-gray-900 dark:text-white font-bold hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black dark:hover:border-white hover:scale-105 active:scale-95 transition-all shadow-sm">
                    <FiSend size={18} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
