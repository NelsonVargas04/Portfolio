import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const technologies = [
  { name: 'HTML5', color: 'bg-orange-500' },
  { name: 'CSS3', color: 'bg-blue-500' },
  { name: 'JavaScript', color: 'bg-yellow-400' },
  { name: 'TypeScript', color: 'bg-blue-600' },
  { name: 'React', color: 'bg-cyan-400' },
  { name: 'Redux', color: 'bg-purple-500' },
  { name: 'Zustand', color: 'bg-pink-500' },
  { name: 'Node.js', color: 'bg-green-500' },
  { name: 'Express', color: 'bg-gray-600' },
  { name: 'Sequelize', color: 'bg-blue-400' },
  { name: 'PostgreSQL', color: 'bg-blue-800' },
  { name: 'GraphQL', color: 'bg-pink-600' },
  { name: 'Scrum', color: 'bg-green-600' },
  { name: 'Less', color: 'bg-indigo-600' },
  { name: 'Vite', color: 'bg-purple-600' },
  { name: 'React Suite', color: 'bg-cyan-600' },
  
  { name: 'TanStack Query', color: 'bg-red-500' },
  
  { name: 'Git', color: 'bg-orange-600' },
  { name: 'Firebase', color: 'bg-yellow-600' },
  { name: 'Bootstrap', color: 'bg-purple-700' },
  { name: 'Figma', color: 'bg-pink-700' },
  { name: 'Microsoft Excel', color: 'bg-green-700' },
  { name: 'Microsoft Word', color: 'bg-blue-700' },
];

const Technologies: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="technologies" className="mb-20">
      <h2 className="text-3xl font-semibold mb-6 text-blue-400">{t.technologiesTitle}</h2>
      <div className="flex flex-wrap gap-3"> {/* Ajusta el gap para más espacio entre etiquetas */}
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`${tech.color} text-white px-3 py-1.5 rounded-full text-base font-semibold shadow-md transition-transform hover:scale-105`} // Ajusta el padding y el tamaño del texto
          >
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;