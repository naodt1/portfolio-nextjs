"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";
import Title from "./Title";
import { projects, Project } from "@/data/projects";
import { TECH_MAP } from "@/data/tech";

/* ─── Modal ─────────────────────────────────────────────────── */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Card */}
      <motion.div
        className="relative z-10 w-full max-w-2xl bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Image */}
        <div className="relative bg-black flex items-center justify-center">
          <Image
            src={project.cover}
            alt={project.title}
            width={800}
            height={600}
            className="w-full max-h-[60vh] object-contain"
            priority
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/60 hover:bg-black/80 text-gray-300 hover:text-white transition-all backdrop-blur-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="px-7 pb-7 -mt-2">
          {/* Title + underline bars */}
          <h2 className="text-2xl font-bold text-white mb-1">{project.title}</h2>
          <div className="flex gap-0 mb-5">
            <div className="h-1.5 w-24 bg-green-500 rounded-full" />
            <div className="h-1.5 w-24 bg-indigo-500 rounded-full translate-x-1" />
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">{project.description}</p>

          {/* Tech stack */}
          <div className="mb-7">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-semibold">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((techId) => {
                const tech = TECH_MAP[techId];
                if (!tech) return null;
                const Icon = tech.Icon;
                return (
                  <span
                    key={techId}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-black border border-gray-700 rounded-full text-sm text-gray-300"
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tech.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-end">
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-green-500 text-white rounded-lg font-semibold hover:bg-green-500 hover:text-black transition-all duration-200"
            >
              View Project
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Card ───────────────────────────────────────────────────── */

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group text-left rounded-md overflow-hidden bg-gray-900 text-white w-full transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
    >
      {/* Image with hover overlay */}
      <div className="relative overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          width={700}
          height={475}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* "Details" hint overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm font-semibold text-white border border-white/60 rounded-full px-4 py-1.5 backdrop-blur-sm">
            View details
          </span>
        </div>
      </div>

      <div className="p-5 pt-3">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-300 text-sm line-clamp-2 mb-4">{project.description}</p>
        <div className="flex flex-row items-center gap-1">
          {project.tech.map((techId) => {
            const tech = TECH_MAP[techId];
            if (!tech) return null;
            const Icon = tech.Icon;
            return (
              <span key={techId} className="w-5 h-5" title={tech.label}>
                <Icon className="w-full h-full" />
              </span>
            );
          })}
        </div>
      </div>
    </button>
  );
}

/* ─── Section ────────────────────────────────────────────────── */

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        isButton={false}
        className="flex flex-col items-center justify-center rotate-6"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
        ))}
      </div>

      <div className="lg:h-40 sm:h-48" />

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={close} />}
      </AnimatePresence>
    </div>
  );
}
