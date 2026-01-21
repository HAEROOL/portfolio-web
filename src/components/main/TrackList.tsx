"use client";

import { motion, AnimatePresence } from "motion/react";
import { Disc, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import contentData from "../../data/content.json";
import { ContentData } from "../../types/content";
import { ProjectModal } from "./ProjectModal";

const content = (contentData as ContentData).portfolio.trackList;
type Project = typeof content.tracks[0];

export const TrackList = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 bg-[#FFFF00] dark:bg-black border-y-4 border-black dark:border-[#FF00FF] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12 border-b-4 border-black dark:border-[#FF00FF] pb-4">
          <h2 className="text-5xl md:text-7xl font-black text-black dark:text-[#FF00FF] italic">{content.title}</h2>
          <span className="font-mono font-bold text-xl bg-black dark:bg-[#FF00FF] text-white dark:text-black px-3 py-1">{content.subtitle}</span>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {content.tracks.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-card-${project.id}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white dark:bg-[#111] border-4 border-black dark:border-[#FF00FF] p-4 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#00FFFF] hover:shadow-[12px_12px_0px_0px_#000] dark:hover:shadow-[12px_12px_0px_0px_#FF00FF] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                {/* Cover Art */}
                <div className="md:col-span-4 relative aspect-square md:aspect-4/3 border-4 border-black dark:border-[#FF00FF] overflow-hidden bg-black">
                   <img 
                     src={project.image}
                     alt={project.title}
                     className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                   />
                   <div className="absolute top-2 left-2 bg-white dark:bg-black text-black dark:text-[#FF00FF] border-2 border-black dark:border-[#FF00FF] px-2 font-black text-xs">
                     TRACK {project.id}
                   </div>
                </div>

                {/* Info */}
                <div className="md:col-span-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                       <span className={`inline-block ${project.color} border-2 border-black dark:border-white px-2 py-1 text-xs font-bold mb-2 text-black`}>
                         {project.genre}
                       </span>
                       <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black dark:text-white">
                         {project.title}
                       </h3>
                    </div>
                    <Disc className="animate-spin-slow hidden md:block text-black dark:text-[#FF00FF]" size={40} />
                  </div>
                  
                  <p className="text-lg font-medium font-mono border-l-4 border-black dark:border-[#FF00FF] pl-4 text-black dark:text-neutral-300">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 py-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 border-2 border-black dark:border-neutral-600 font-bold text-sm text-black dark:text-[#E0E0E0]">
                        #{tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-2">
                    <button className="flex-1 bg-black dark:bg-[#FF00FF] text-white dark:text-black border-2 border-black dark:border-[#FF00FF] py-3 font-black hover:bg-[#FF00FF] hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors flex justify-center items-center gap-2">
                      <ExternalLink size={18} /> DETAIL VIEW
                    </button>
                    {/* Replaced generic buttons with a single call to action since clicking anywhere opens modal */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

