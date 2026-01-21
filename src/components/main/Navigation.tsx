"use client";

import { motion } from "motion/react";
import { Home, Disc, Backpack, Moon, Sun, Briefcase } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { icon: <Home size={20} />, label: "HOME", id: "home" },
    { icon: <Briefcase size={20} />, label: "INFO", id: "experience" },
    { icon: <Backpack size={20} />, label: "SKILLS", id: "skills" },
    { icon: <Disc size={20} />, label: "PROJECTS", id: "projects" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div className="bg-white dark:bg-black border-4 border-black dark:border-white shadow-[4px_4px_0px_0px_#000] dark:shadow-[4px_4px_0px_0px_#FF00FF] p-2 flex gap-2 md:gap-4 pointer-events-auto transition-all duration-300">
        {navItems.map((item) => (
          <button 
            key={item.label}
            onClick={() => scrollToSection(item.id)}
            className="flex items-center gap-2 px-4 py-2 font-black font-mono hover:bg-[#FFFF00] dark:hover:bg-[#FF00FF] dark:hover:text-black transition-colors border-2 border-transparent hover:border-black dark:hover:border-white rounded-none text-black dark:text-white"
          >
            {item.icon}
            <span className="hidden md:block">{item.label}</span>
          </button>
        ))}
        
        <div className="w-[2px] bg-black dark:bg-white mx-2" />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center justify-center px-4 py-2 font-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors border-2 border-transparent hover:border-transparent rounded-none text-black dark:text-white"
        >
          {mounted && (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
        </button>
      </div>
    </motion.nav>
  );
};
