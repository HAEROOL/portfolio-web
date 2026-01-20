"use client";

import { motion } from "motion/react";
import { Play, Heart, Disc } from "lucide-react";
import contentData from "../../data/content.json";
import { ContentData } from "../../types/content";

const content = (contentData as ContentData).portfolio.hero;

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f4f4f4] dark:bg-[#050505] pt-20 pb-10 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 dark:opacity-30 pointer-events-none" 
           style={{ 
             backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", 
             backgroundSize: "20px 20px" 
           }} 
      />

      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-black dark:bg-[#00FFFF] text-white dark:text-black px-4 py-1 font-mono font-bold w-fit -rotate-2 shadow-[4px_4px_0px_0px_#FF00FF] dark:shadow-[4px_4px_0px_0px_#FF00FF]"
          >
            <span>{content.badge}</span>
            <span className="w-2 h-2 bg-[#00FFFF] dark:bg-black rounded-full animate-pulse" />
            <span>{content.badgeStatus}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-black dark:text-white drop-shadow-[4px_4px_0px_rgba(255,0,255,1)] dark:drop-shadow-[4px_4px_0px_#00FFFF]"
          >
            {content.title.line1} <br />
              {content.title.line2}
            <br />
            <span className="inline-block bg-[#FF00FF] text-white px-4 py-1 my-1 dark:bg-[#00FFFF] dark:text-black">
              {content.title.line3}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-white dark:bg-[#0a0a0a] border-4 border-black dark:border-[#00FFFF] shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#FF00FF]"
          >
            <p className="font-mono text-lg md:text-xl font-bold leading-relaxed text-black dark:text-[#E0E0E0]">
              <span>{content.quote.text}</span>
              <br />
              <span>{content.quote.subtext}</span>
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.6 }}
             className="flex flex-wrap gap-4 mt-4"
          >
            <button className="flex items-center gap-2 bg-[#00FFFF] border-4 border-black dark:border-[#00FFFF] px-8 py-4 font-black text-xl hover:translate-y-1 hover:shadow-none shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#FF00FF] transition-all text-black">
              <Play fill="black" /> {content.buttons.start}
            </button>
            <button className="flex items-center gap-2 bg-[#FF00FF] text-white border-4 border-black dark:border-[#FF00FF] px-8 py-4 font-black text-xl hover:translate-y-1 hover:shadow-none shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#00FFFF] transition-all">
              <Heart fill="white" /> {content.buttons.subscribe}
            </button>
          </motion.div>
        </div>

        {/* Image / Visual */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, rotate: 10 }}
            animate={{ opacity: 1, rotate: 3 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-20 border-4 border-black dark:border-[#00FFFF] bg-white dark:bg-black p-2 shadow-[12px_12px_0px_0px_#000] dark:shadow-[12px_12px_0px_0px_#FF00FF]"
          >
            <div className="aspect-3/4 overflow-hidden relative border-2 border-black dark:border-[#00FFFF]">
               <img 
                 src={content.image} 
                 alt="Anime Room" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-linear-to-t from-[#FF00FF]/40 to-transparent mix-blend-screen" />
               
               {/* Decoration Overlays */}
               <div className="absolute top-4 right-4 bg-black text-[#FFFF00] px-2 py-1 font-mono font-bold text-xs border border-white dark:border-[#FFFF00]">
                 REC ●
               </div>
               <div className="absolute bottom-4 left-4 bg-white dark:bg-black dark:text-[#00FFFF] border-2 border-black dark:border-[#00FFFF] px-3 py-1">
                 <span className="font-black text-xl">{content.level}</span>
               </div>
            </div>
          </motion.div>

          {/* Decorative Elements behind */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 z-10"
          >
            <Disc size={128} className="text-black dark:text-[#00FFFF] opacity-10 dark:opacity-30" />
          </motion.div>
          <div className="absolute -bottom-8 -left-8 w-full h-full border-4 border-[#FFFF00] dark:border-[#FF00FF] bg-transparent z-0" />
        </div>
      </div>
    </section>
  );
};

