"use client";

import { motion } from "motion/react";
import { Battery, Cpu, Wifi, Database, Layers, Monitor } from "lucide-react";
import contentData from "../../data/content.json";
import { ContentData } from "../../types/content";

const content = (contentData as ContentData).portfolio.inventory;

const IconMap: { [key: string]: React.ReactNode } = {
  Cpu: <Cpu />,
  Monitor: <Monitor />,
  Layers: <Layers />,
  Wifi: <Wifi />,
  Database: <Database />,
  Battery: <Battery />,
};

export const Inventory = () => {
  return (
    <section id="skills" className="min-h-screen py-20 bg-[#65c7f7] dark:bg-[#050505] relative transition-colors duration-300">
      <div className="absolute inset-0 opacity-20 dark:opacity-10"
           style={{ backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12 text-center bg-white dark:bg-black border-4 border-black dark:border-[#00FF00] p-6 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#00FF00] inline-block transform -rotate-1">
          <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-[#00FF00]">{content.title}</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {content.skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, type: "spring" }}
              className="bg-white dark:bg-[#111] border-4 border-black dark:border-[#00FF00] p-2 flex flex-col items-center justify-center gap-1 shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#00FF00] hover:translate-y-0.5 hover:shadow-none transition-all w-24 h-24 sm:w-28 sm:h-28 shrink-0"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-black dark:border-[#00FF00] flex items-center justify-center ${skill.color} text-black shrink-0`}>
                <div className="scale-75 sm:scale-90">
                  {IconMap[skill.icon]}
                </div>
              </div>
              <span className="font-black text-[10px] sm:text-xs uppercase text-black dark:text-white text-center leading-tight truncate w-full px-1">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Sticker Decorations */}
        <div className="mt-12 flex justify-center gap-6 flex-wrap">
           {content.stickers.map((sticker, i) => {
              const styles = [
                 `bg-[#FFFF00] text-black border-black dark:border-[#00FF00] rotate-3`,
                 `bg-[#FF00FF] text-white border-black dark:border-[#00FF00] -rotate-2`,
                 `bg-black dark:bg-white text-[#00FFFF] dark:text-black border-black dark:border-[#00FF00] rotate-1`
              ];
              // fallback if more stickers than styles
              const style = styles[i % styles.length]; 
              return (
                  <div key={i} className={`${style} px-4 py-2 border-2 font-bold`}>
                      {sticker}
                  </div>
              );
           })}
        </div>
      </div>
    </section>
  );
};

