import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id="about"
      ref={ref}
      className={`mb-20 ${darkMode ? 'text-[#edf6f9]' : 'text-[#0D1321]'} transition-colors duration-300`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.75 }}
    >
     <div className="relative inline-flex items-center gap-4 mb-8 bg-gradient-to-r from-purple-500/20 to-transparent p-6 rounded-lg">
  <h2 className={`text-4xl font-semibold ${darkMode ? 'text-[#00b4d8]' : 'text-[#1D2D44]'}`}>
    {t.aboutTitle}
  </h2>
</div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-6 md:mb-0">
          <img
            src="src/components/img/perfil.jpeg"
            alt="Nelson Vargas"
            className="w-96 h-112 object-cover border-4 border-[#3E5C76] shadow-lg rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          {t.aboutContent.map((paragraph, index) => (
            <p
              key={index}
              className={`mb-4 ${darkMode ? 'text-[#edf6f9]' : 'text-[#0D1321]'} ${
                index < t.aboutContent.length - 1 ? "mb-4" : ""
              }`}
              style={{ fontSize: "1.375rem" }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;