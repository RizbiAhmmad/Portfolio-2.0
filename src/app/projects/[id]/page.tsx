import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaLightbulb } from "react-icons/fa";
import {
  FiExternalLink,
  FiArrowLeft,
  FiCheckCircle,
  FiTarget,
} from "react-icons/fi";
import { projectsData } from "@/data/projects";
import { BorderBeam } from "@stianlarsen/border-beam";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectDetails({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-12 pb-24 px-4 md:px-8 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-800 transition-all mb-12 font-medium border border-transparent dark:border-gray-700 shadow-sm"
        >
          <FiArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-start mb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gray-900 dark:bg-[#111] text-white border border-transparent dark:border-gray-800 hover:bg-black dark:hover:bg-[#222] hover:scale-105 active:scale-95 font-bold transition-all shadow-sm">
                <FaGithub size={20} />
                Source Code
              </button>
            </Link>
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7A34F2] to-[#4F46E5] text-white font-bold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all">
                <FiExternalLink size={20} />
                Live Demo
              </button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-20 shadow-2xl bg-gray-900 border border-gray-200 dark:border-gray-800 group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <BorderBeam
            size={400}
            duration={12}
            delay={9}
            colorFrom="#7A34F2"
            colorTo="#87CEEB"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content (Left) */}
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FiTarget className="text-[#7A34F2]" />
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FaLightbulb className="text-[#87CEEB]" />
                Challenges Faced
              </h2>
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed italic">
                  &ldquo;{project.challenges}&rdquo;
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <FiCheckCircle className="text-emerald-500" />
                Future Improvements
              </h2>
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border border-indigo-100 dark:border-indigo-900/50 shadow-sm">
                <p className="text-lg text-indigo-900 dark:text-indigo-200 leading-relaxed">
                  {project.improvements}
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar (Right) */}
          <div className="md:col-span-1">
            <div className="sticky top-32 p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
                Technology Stack
              </h3>
              <div className="flex flex-col gap-3">
                {project.techStack.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-black/50 border border-gray-100 dark:border-gray-800 hover:border-[#7A34F2] transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#7A34F2] to-[#87CEEB]" />
                    <span className="font-semibold text-gray-700 dark:text-gray-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
