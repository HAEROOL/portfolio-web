import { Hero } from "../components/main/Hero";
import { Navigation } from "../components/main/Navigation";
import { TrackList } from "../components/main/TrackList";
import { ExperienceEducation } from "../components/main/ExperienceEducation";
import { Skills } from "../components/main/Skills";
import { FanMail } from "../components/main/FanMail";
import { getContentData } from "@/lib/content";

const OtakuView = async () => {
  const { portfolio } = await getContentData();

  return (
    <div className="min-h-screen transition-colors duration-300 bg-[#f4f4f4] dark:bg-[#0a0a0a] text-black dark:text-white font-sans selection:bg-[#FF00FF] selection:text-white overflow-x-hidden">
      <Navigation />
      <Hero content={portfolio.hero} />
      <ExperienceEducation resume={portfolio.resume} />
      <Skills content={portfolio.skills} />
      <TrackList content={portfolio.trackList} />
      <FanMail content={portfolio.fanMail} />
    </div>
  );
};

export default OtakuView;
