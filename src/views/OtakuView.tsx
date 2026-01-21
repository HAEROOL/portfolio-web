"use client";

import { Hero } from "../components/main/Hero";
import { Navigation } from "../components/main/Navigation";
import { TrackList } from "../components/main/TrackList";
import { ExperienceEducation } from "../components/main/ExperienceEducation";
import { Inventory } from "../components/main/Inventory";

const OtakuView = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-[#f4f4f4] dark:bg-[#0a0a0a] text-black dark:text-white font-sans selection:bg-[#FF00FF] selection:text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <ExperienceEducation />
      <Inventory />
      <TrackList />
    </div>
  );
};

export default OtakuView;
