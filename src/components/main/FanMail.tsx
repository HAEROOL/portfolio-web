"use client";

import { motion } from "motion/react";
import { Send, Mail, Twitter, Instagram } from "lucide-react";
import contentData from "../../data/content.json";
import { ContentData } from "../../types/content";

const content = (contentData as ContentData).portfolio.fanMail;

export const FanMail = () => {
  return (
    <section id="contact" className="py-20 bg-[#9d50bb] dark:bg-[#200a2b] overflow-hidden transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="bg-white dark:bg-[#0a0a0a] border-4 border-black dark:border-[#00FFFF] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_#FF00FF]"
        >
          {/* Browser Header */}
          <div className="bg-[#e0e0e0] dark:bg-[#222] border-b-4 border-black dark:border-[#00FFFF] p-3 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-black dark:border-transparent bg-[#ff5f57]" />
            <div className="w-4 h-4 rounded-full border-2 border-black dark:border-transparent bg-[#ffbd2e]" />
            <div className="w-4 h-4 rounded-full border-2 border-black dark:border-transparent bg-[#28c940]" />
            <div className="flex-1 bg-white dark:bg-black border-2 border-black dark:border-[#00FFFF] mx-2 px-2 font-mono text-sm truncate text-black dark:text-[#00FFFF]">
              mail-to: {content.address}
            </div>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center uppercase text-black dark:text-white">
              {content.title}
            </h2>

            <form className="space-y-6 font-mono" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="block font-bold text-lg text-black dark:text-[#00FFFF]">{content.form.nameLabel}</label>
                <input 
                  type="text" 
                  className="w-full bg-[#f0f0f0] dark:bg-[#111] border-4 border-black dark:border-[#00FFFF] p-4 focus:bg-[#FFFF00] dark:focus:bg-black dark:focus:text-[#00FFFF] focus:outline-none transition-colors font-bold text-xl placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-black dark:text-white"
                  placeholder={content.form.namePlaceholder}
                />
              </div>

              <div className="space-y-2">
                <label className="block font-bold text-lg text-black dark:text-[#00FFFF]">{content.form.messageLabel}</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#f0f0f0] dark:bg-[#111] border-4 border-black dark:border-[#00FFFF] p-4 focus:bg-[#00FFFF] dark:focus:bg-black dark:focus:text-[#00FFFF] focus:outline-none transition-colors font-bold text-lg placeholder:text-neutral-400 dark:placeholder:text-neutral-600 resize-none text-black dark:text-white"
                  placeholder={content.form.messagePlaceholder}
                />
              </div>

              <button className="w-full bg-[#FF00FF] dark:bg-black text-white dark:text-[#00FFFF] border-4 border-black dark:border-[#00FFFF] py-4 text-2xl font-black hover:shadow-[4px_4px_0px_0px_#000] dark:hover:shadow-[4px_4px_0px_0px_#FF00FF] hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all flex items-center justify-center gap-3 dark:hover:bg-[#00FFFF] dark:hover:text-black">
                <Send strokeWidth={3} /> {content.form.button}
              </button>
            </form>

            <div className="mt-12 flex justify-center gap-6">
              <a href="#" className="w-12 h-12 bg-black dark:bg-transparent text-white dark:text-[#00FFFF] flex items-center justify-center border-2 border-black dark:border-[#00FFFF] hover:bg-[#1DA1F2] dark:hover:bg-[#00FFFF] dark:hover:text-black transition-colors">
                <Twitter />
              </a>
              <a href="#" className="w-12 h-12 bg-black dark:bg-transparent text-white dark:text-[#00FFFF] flex items-center justify-center border-2 border-black dark:border-[#00FFFF] hover:bg-[#E1306C] dark:hover:bg-[#00FFFF] dark:hover:text-black transition-colors">
                <Instagram />
              </a>
              <a href="#" className="w-12 h-12 bg-black dark:bg-transparent text-white dark:text-[#00FFFF] flex items-center justify-center border-2 border-black dark:border-[#00FFFF] hover:bg-[#EA4335] dark:hover:bg-[#00FFFF] dark:hover:text-black transition-colors">
                <Mail />
              </a>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-12 text-center font-mono font-bold text-white/80">
          <p>{content.footer.copyright}</p>
          <p className="text-sm mt-2">{content.footer.credits}</p>
        </div>
      </div>
    </section>
  );
};

