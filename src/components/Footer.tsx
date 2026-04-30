import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-gray-200 dark:border-gray-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-5">
        {/* Social Links */}
        <div className="flex gap-6">
          <Link
            href="https://github.com/RizbiAhmmad"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rizbi2001/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0a66c2] dark:hover:text-white transition-all"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href="https://www.facebook.com/mdakashkhan444/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-[#1877F2] hover:text-white dark:hover:bg-[#1877F2] dark:hover:text-white transition-all"
          >
            <FaFacebook size={20} />
          </Link>
          <Link
            href="https://wa.me/+8801815109616"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-[#25D366] hover:text-white dark:hover:bg-[#25D366] dark:hover:text-white transition-all"
          >
            <FaWhatsapp size={20} />
          </Link>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 dark:text-gray-500 text-sm font-medium tracking-wide">
          &copy; {currentYear} Rizbi Ahmmad. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
