"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Calendar, Users, Briefcase, Database, Code, Zap, CheckCircle2 } from "lucide-react";
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl flex flex-col bg-white dark:bg-[#0a0a0a] border-4 border-black dark:border-[#FF00FF] shadow-[16px_16px_0px_0px_#000] dark:shadow-[16px_16px_0px_0px_#00FFFF]"
          style={{ maxHeight: "90vh", overflow: "hidden", display: "flex", flexDirection: "column" }}
          onClick={handleContentClick}
        >
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="shrink-0 flex items-center justify-between p-6 bg-white dark:bg-[#0a0a0a] border-b-4 border-black dark:border-[#FF00FF] relative z-20"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-3 h-3 bg-[#00FFFF] dark:bg-[#00FFFF] rounded-full pulse-glow"
                />
              </div>
              <h3 className="text-3xl md:text-5xl font-black uppercase text-black dark:text-[#FF00FF] italic">
                {project.title}
              </h3>
              <p className="text-base md:text-lg font-bold text-neutral-600 dark:text-[#00FFFF] font-mono mt-2">
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-black hover:text-white dark:hover:bg-[#FF00FF] dark:hover:text-black transition-all rounded-none border-2 border-transparent hover:border-black dark:hover:border-[#00FFFF]"
            >
              <X size={32} />
            </button>
          </motion.div>

          <div className="flex flex-col gap-6 p-8 space-y-16 custom-scrollbar relative z-20" style={{ overflowY: "auto", minHeight: 0, flex: 1 }}>
            {/* Meta Info Grid */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-lg text-black dark:text-white font-mono">
                  <Calendar className="text-[#EE00EE] dark:text-[#00FFFF]" size={24} />
                  <span className="font-bold">{project.period}</span>
                </div>
                <div className="flex items-center gap-4 text-lg text-black dark:text-white font-mono">
                  <Users className="text-[#EE00EE] dark:text-[#00FFFF]" size={24} />
                  <span className="font-bold">{project.team_size}</span>
                </div>
                <div className="flex items-center gap-4 text-lg text-black dark:text-white font-mono">
                  <Briefcase className="text-[#EE00EE] dark:text-[#00FFFF]" size={24} />
                  <span className="font-bold">{project.role}</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                    {project.platforms.map((platform, idx) => (
                    <motion.span 
                      key={platform}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="px-4 py-2 bg-black text-white dark:bg-[#FF00FF] dark:text-black font-black text-sm border-2 border-black dark:border-[#00FFFF] hover:scale-105 transition-transform"
                    >
                        {platform.toUpperCase()}
                    </motion.span>
                    ))}
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xl text-black dark:text-[#00FFFF] font-black hover:underline font-mono"
                  >
                    <ExternalLink size={24} />
                    <span>VISIT GITHUB</span>
                  </a>
                )}
              </div>
            </motion.div>

            <hr className="border-2 border-black dark:border-[#FF00FF]" />

            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <h4 className="flex items-center gap-3 text-2xl font-black text-black dark:text-white uppercase font-mono">
                <Database className="text-black dark:text-[#FF00FF]" size={28} /> 
                <span>TECH STACK</span>
              </h4>
              <div className="grid grid-cols-1 gap-6">
                {Object.entries(project.tech_stack).map(([category, stackMap], idx) => (
                  <motion.div 
                    key={category}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="border-4 border-black dark:border-[#00FFFF] p-6 bg-neutral-50 dark:bg-[#111] hover:scale-[1.02] transition-transform"
                  >
                    <h5 className="font-black mb-4 uppercase text-base text-neutral-500 dark:text-[#00FFFF] font-mono tracking-wider">
                      {category}
                    </h5>
                    <ul className="space-y-3">
                      {Object.entries(stackMap).map(([key, value]) => (
                        <li key={key} className="text-base font-mono text-black dark:text-neutral-300">
                          <span className="font-bold text-black dark:text-[#FF00FF] mr-3 text-lg">{key}:</span>
                          {value}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <h4 className="flex items-center gap-3 text-2xl font-black text-black dark:text-white uppercase font-mono">
                <Zap className="text-black dark:text-[#FF00FF]" size={28} /> 
                <span>KEY FEATURES</span>
              </h4>
              <ul className="space-y-4 font-mono text-base md:text-lg text-black dark:text-neutral-300">
                {project.key_features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + idx * 0.05 }}
                    className="flex gap-4 leading-relaxed pl-2 hover:translate-x-2 transition-transform"
                  >
                    <span className="text-[#FF00FF] dark:text-[#00FFFF] font-bold text-xl min-w-[24px]">▸</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

             {/* Contributions */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.6 }}
               className="space-y-6 pb-8"
             >
              <h4 className="flex items-center gap-3 text-2xl font-black text-black dark:text-white uppercase font-mono">
                <Code className="text-black dark:text-[#FF00FF]" size={28} /> 
                <span>CONTRIBUTIONS</span>
              </h4>
              <ul className="space-y-4">
                {project.contributions.map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + idx * 0.05 }}
                    className="flex items-start gap-4 text-black dark:text-neutral-300 font-mono text-base md:text-lg hover:translate-x-2 transition-transform"
                  >
                    <CheckCircle2 
                      className="text-[#FF00FF] dark:text-[#00FFFF] mt-1" 
                      size={24} 
                      style={{ width: "24px", height: "24px", minWidth: "24px", flexShrink: 0 }} 
                    />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
