"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Calendar, Users, Briefcase, Globe, Database, Layers, Code, Zap } from "lucide-react";
import { ContentData } from "../../types/content";

// Define the Project type based on the ContentData structure
type Project = ContentData["portfolio"]["trackList"]["tracks"][0];

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  // Lock body scroll when modal is open and compensate for scrollbar width
  useEffect(() => {
    // Calculate scrollbar width before hiding it
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  // Prevent click propagation from modal content to backdrop
  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl flex flex-col bg-white dark:bg-[#111] border-4 border-black dark:border-[#FF00FF] shadow-[16px_16px_0px_0px_#000] dark:shadow-[16px_16px_0px_0px_#00FFFF]"
          style={{ maxHeight: "90vh", overflow: "hidden", display: "flex", flexDirection: "column" }}
          onClick={handleContentClick}
        >
          {/* Header */}
          <div className="shrink-0 flex items-center justify-between p-6 bg-white dark:bg-[#111] border-b-4 border-black dark:border-[#FF00FF]">
            <div>
              <h3 className="text-3xl md:text-5xl font-black uppercase text-black dark:text-[#FF00FF] italic">
                {project.title}
              </h3>
              <p className="text-base md:text-lg font-bold text-neutral-600 dark:text-neutral-400 font-mono mt-2">
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-black hover:text-white dark:hover:bg-[#FF00FF] dark:hover:text-black transition-colors rounded-full"
            >
              <X size={32} />
            </button>
          </div>

          <div className="p-8 space-y-12 custom-scrollbar" style={{ overflowY: "auto", minHeight: 0, flex: 1 }}>
            {/* Meta Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-lg text-black dark:text-white">
                  <Calendar className="text-[#EE00EE] dark:text-[#00FFFF]" size={24} />
                  <span className="font-mono font-bold">{project.period}</span>
                </div>
                <div className="flex items-center gap-4 text-lg text-black dark:text-white">
                  <Users className="text-[#EE00EE] dark:text-[#00FFFF]" size={24} />
                  <span className="font-mono font-bold">{project.team_size}</span>
                </div>
                <div className="flex items-center gap-4 text-lg text-black dark:text-white">
                  <Briefcase className="text-[#EE00EE] dark:text-[#00FFFF]" size={24} />
                  <span className="font-mono font-bold">{project.role}</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                    {project.platforms.map((platform) => (
                    <span key={platform} className="px-4 py-2 bg-black text-white dark:bg-[#FF00FF] dark:text-black font-black text-sm">
                        {platform.toUpperCase()}
                    </span>
                    ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xl text-black dark:text-[#00FFFF] font-bold hover:underline"
                  >
                    <ExternalLink size={24} />
                    <span>Visit Project / Repository</span>
                  </a>
                )}
              </div>
            </div>

            <hr className="border-2 border-black dark:border-neutral-800" />

            {/* Tech Stack */}
            <div className="space-y-6">
              <h4 className="flex items-center gap-3 text-2xl font-black text-black dark:text-white uppercase">
                <Database className="text-black dark:text-[#FF00FF]" size={28} /> Tech Stack
              </h4>
              <div className="grid grid-cols-1 gap-6">
                {Object.entries(project.tech_stack).map(([category, stackMap]) => (
                  <div key={category} className="border-2 border-black dark:border-neutral-700 p-6 bg-neutral-50 dark:bg-neutral-900">
                    <h5 className="font-black mb-4 uppercase text-base text-neutral-500 dark:text-neutral-400">
                      {category}
                    </h5>
                    <ul className="space-y-3">
                      {Object.entries(stackMap).map(([key, value]) => (
                        <li key={key} className="text-base font-mono text-black dark:text-neutral-300">
                          <span className="font-bold text-black dark:text-[#00FFFF] mr-3 text-lg">{key}:</span>
                          {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h4 className="flex items-center gap-3 text-2xl font-black text-black dark:text-white uppercase">
                <Zap className="text-black dark:text-[#FF00FF]" size={28} /> Key Features
              </h4>
              <ul className="space-y-4 list-disc list-inside font-mono text-base md:text-lg text-black dark:text-neutral-300 pl-2">
                {project.key_features.map((feature, idx) => (
                  <li key={idx} className="leading-relaxed pl-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

             {/* Contributions */}
             <div className="space-y-6 pb-8">
              <h4 className="flex items-center gap-3 text-2xl font-black text-black dark:text-white uppercase">
                <Code className="text-black dark:text-[#FF00FF]" size={28} /> Contributions
              </h4>
              <ul className="space-y-4">
                {project.contributions.map((item, idx) => (
                  <li key={idx} className="flex gap-4 text-black dark:text-neutral-300 font-mono text-base md:text-lg">
                    <span className="text-[#FF00FF] dark:text-[#00FFFF] font-bold min-w-[24px] text-xl">{idx + 1}.</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
