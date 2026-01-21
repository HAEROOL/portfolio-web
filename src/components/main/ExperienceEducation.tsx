"use client";

import { motion } from "motion/react";
import { GraduationCap, Briefcase, Trophy, Award, Users } from "lucide-react";
import contentData from "../../data/content.json";
import { ContentData } from "../../types/content";

const { resume } = (contentData as ContentData).portfolio;

// Helper components for consistent "Game UI" styling
const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-black dark:bg-white text-white dark:text-black rounded-lg">
      <Icon size={24} />
    </div>
    <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
      {title}
    </h2>
    <div className="h-[2px] flex-1 bg-current opacity-20 ml-4" />
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white dark:bg-[#111] border-2 border-black dark:border-white/20 p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)] transition-all ${className}`}>
    {children}
  </div>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-bold rounded border border-gray-200 dark:border-gray-700 uppercase tracking-wide">
    {children}
  </span>
);

export const ExperienceEducation = () => {
  // Combine work experience and education into one array
  const combinedItems = [
    ...resume.work_experience.map(item => ({
      type: 'experience' as const,
      title: item.company,
      subtitle: item.role || item.department,
      period: item.period,
      details: item.tasks,
      startDate: item.period.split(' - ')[0] // Extract start date for sorting
    })),
    ...resume.education_and_military.education.map(item => ({
      type: 'education' as const,
      title: item.institution || item.program || '',
      subtitle: item.major,
      period: item.period,
      details: [] as string[],
      startDate: item.period.split(' - ')[0] // Extract start date for sorting
    }))
  ];

  // Sort by start date (latest first)
  // Convert date format "YYYY.MM" to comparable number
  const parseDate = (dateStr: string) => {
    const [year, month] = dateStr.split('.');
    return parseInt(year) * 100 + parseInt(month || '0');
  };

  const sortedItems = combinedItems.sort((a, b) => {
    return parseDate(b.startDate) - parseDate(a.startDate);
  });

  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="experience">
      <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-12">
        {/* Left Column: Experience & Education (Combined) */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader title="Experience & Education" icon={Briefcase} />
            <div className="space-y-6">
              {sortedItems.map((item, idx) => (
                <Card key={idx}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-xl font-bold break-keep">{item.title}</h3>
                        <span className="text-xs px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded font-bold uppercase shrink-0">
                          {item.type === 'experience' ? 'Work' : 'Edu'}
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-mono mt-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                    <Badge>{item.period}</Badge>
                  </div>
                  {item.details.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                          <span className="text-purple-500 mt-1">▶</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Awards & Activities */}
        <div className="space-y-12 flex flex-col gap-8">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SectionHeader title="Awards" icon={Trophy} />
            <Card className="bg-linear-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 border-yellow-200 dark:border-yellow-900/30">
              <div className="space-y-6">
                {resume.awards_and_activities.awards.map((award, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Award className="text-yellow-600 dark:text-yellow-500 shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold">{award.title}</h4>
                      <p className="text-sm font-mono text-gray-500 dark:text-gray-400">{award.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SectionHeader title="Activities" icon={Users} />
            {resume.awards_and_activities.activities.map((activity, idx) => (
              <Card key={idx}>
                <div className="mb-4">
                  <h3 className="font-bold">{activity.organization}</h3>
                  <p className="text-sm font-mono text-gray-500">{activity.period}</p>
                </div>
                <ul className="space-y-2">
                  {activity.experience.map((exp, eIdx) => (
                    <li key={eIdx} className="text-sm flex gap-2">
                      <span className="text-blue-500">●</span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
