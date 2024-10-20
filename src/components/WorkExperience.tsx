import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const WorkExperience: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="mb-20">
      <h2 className="text-3xl font-semibold mb-8 text-blue-400">{t.workExperienceTitle}</h2>
      <div className="space-y-12">
        {t.workExperience.map((job, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
                <p className="text-blue-400">{job.company}</p>
              </div>
              <span className="text-gray-400 font-medium">{job.period}</span>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {job.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;