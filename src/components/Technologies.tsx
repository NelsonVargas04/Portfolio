import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const technologies = [
  { name: "HTML5", color: "bg-orange-500" },
  { name: "CSS3", color: "bg-blue-500" },
  { name: "JavaScript", color: "bg-yellow-400" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "React", color: "bg-cyan-400" },
  { name: "Redux", color: "bg-purple-500" },
  { name: "Zustand", color: "bg-pink-500" },
  { name: "Node.js", color: "bg-green-500" },
  { name: "Express", color: "bg-gray-600" },
  { name: "Sequelize", color: "bg-blue-400" },
  { name: "PostgreSQL", color: "bg-blue-800" },
  { name: "GraphQL", color: "bg-pink-600" },
  { name: "Scrum", color: "bg-green-600" },
  { name: "Less", color: "bg-indigo-600" },
  { name: "Vite", color: "bg-purple-600" },
  { name: "React Suite", color: "bg-cyan-600" },
  { name: "TanStack Query", color: "bg-red-500" },
  { name: "Git", color: "bg-orange-600" },
  { name: "Firebase", color: "bg-yellow-600" },
  { name: "Bootstrap", color: "bg-purple-700" },
  { name: "Figma", color: "bg-pink-700" },
  { name: "Microsoft Excel", color: "bg-green-700" },
  { name: "Microsoft Word", color: "bg-blue-700" },
];

const Technologies: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="technologies" className="mb-20">
      {/* Título de la sección */}
      <div className="relative inline-flex items-center gap-4 mb-8 bg-gradient-to-r from-purple-500/20 to-transparent p-6 rounded-lg">
        <h2
          className={`text-4xl font-semibold ${
            darkMode ? "text-[#00b4d8]" : "text-[#1D2D44]"
          }`}
        >
          {t.technologiesTitle}
        </h2>
      </div>

      {/* Lista de tecnologías */}
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`${
              tech.color
            } text-lg text-white px-4 py-2 rounded-full text-base font-semibold shadow-md transition-transform transform-gpu hover:scale-105 ${
              darkMode ? "shadow-gray-800" : "shadow-gray-400"
            }`}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;