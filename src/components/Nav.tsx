"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { BorderBeam } from "@stianlarsen/border-beam";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skill" },
    { name: "Works", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "pt-2" : "pt-4 sm:pt-6"}`}
    >
      <div className="container mx-auto px-4 xl:w-9/12 relative">
        <div className="flex justify-between items-center px-6 py-3 rounded-full bg-white/30 dark:bg-[#0f111a]/60 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative overflow-hidden transition-colors duration-300">
          {/* Main Navbar BorderBeam - Surrounds the glass nav */}
          <BorderBeam
            size={400}
            duration={15}
            colorFrom={"#7A34F2"}
            colorTo={"#87CEEB"}
          />

          {/* Logo / Left Side */}
          <div className="flex items-center z-10">
            <a
              href="#"
              className="relative group text-xl sm:text-2xl font-black tracking-tight"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7A34F2] via-[#87CEEB] to-[#7A34F2] bg-[length:200%_auto] animate-gradient">
                Rizbi Ahmmad
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7A34F2] to-[#87CEEB] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1 lg:gap-4 z-10 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block px-4 py-2 border-b border-purple-600 rounded-full hover:bg-[#7A34F2] hover:text-white transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side - Actions */}
          <div className="flex items-center gap-3 z-10">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-white/60 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-gray-800 dark:text-gray-200 shadow-sm transition-all duration-300"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? (
                  <Sun size={18} className="text-[#87CEEB]" />
                ) : (
                  <Moon size={18} className="text-[#7A34F2]" />
                )}
              </button>
            )}

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="relative hidden sm:block bg-gray-900 border-b border-purple-600 hover:bg-[#7A34F2] text-white py-2 px-4 rounded-full transition overflow-hidden"
            >
              Resume
              <BorderBeam
                size={300}
                duration={20}
                colorFrom={"#7A34F2"}
                colorTo={"#87CEEB"}
              />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-full bg-white/60 dark:bg-white/10 text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-white/20 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 mt-4 p-4 rounded-3xl bg-white/90 dark:bg-[#0f111a]/95 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-2xl md:hidden flex flex-col gap-2 z-40 overflow-hidden"
            >
              {/* Optional: Add a subtle border beam to the mobile menu too */}
              <BorderBeam
                size={300}
                duration={12}
                colorFrom={"#7A34F2"}
                colorTo={"#87CEEB"}
              />

              <div className="relative z-10 flex flex-col w-full text-center items-center py-4">
                <ul className="flex flex-col gap-4 items-center w-full">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-6 py-2 border-b border-purple-600 rounded-full hover:bg-[#7A34F2] hover:text-white transition text-lg"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <li className="mt-4">
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      className="relative flex justify-center items-center gap-2 bg-gray-900 border-b border-purple-600 hover:bg-[#7A34F2] text-white py-3 px-8 rounded-full font-bold overflow-hidden shadow-lg transition"
                    >
                      <span>Resume</span>
                      <BorderBeam
                        size={100}
                        duration={12}
                        colorFrom={"#7A34F2"}
                        colorTo={"#87CEEB"}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Nav;
