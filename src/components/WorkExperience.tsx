import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { ArrowUpRight } from 'lucide-react';

const WorkExperience: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="mb-20">
      <div className="relative inline-flex items-center gap-4 mb-8 bg-gradient-to-r from-purple-500/20 to-transparent p-6 rounded-lg">
        <h2 className="text-4xl font-semibold text-blue-400">{t.workExperienceTitle}</h2>
        <div className="flex items-center gap-2">
          <ArrowUpRight className="w-8 h-8 text-blue-400 animate-pulse" />
          <span className="text-gray-400 font-medium text-lg">{t.experienceDuration}</span>
        </div>
      </div>
      
      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-400"></div>

        <div className="space-y-12">
          {t.workExperience.map((job, index) => (
            <div key={index} className="relative pl-16">
              {/* Punto de la línea de tiempo */}
              <div className="absolute left-0 w-10 h-10 bg-blue-400 rounded-full border-4 border-gray-800 z-10">
                <div className="absolute w-full h-full rounded-full bg-blue-400/50 animate-ping"></div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:bg-gray-800/70 hover:translate-x-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-3xl font-semibold text-white">{job.title}</h3>
                    <p className="text-blue-400">{job.company}</p>
                  </div>
                  <span className="text-gray-400 font-medium whitespace-nowrap">{job.period}</span>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;