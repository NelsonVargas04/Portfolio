import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Contact: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="mb-20">
      <div className="relative inline-flex items-center gap-4 mb-8 bg-gradient-to-r from-purple-500/20 to-transparent p-6 rounded-lg">
        <h2 className="text-4xl font-semibold text-blue-400">
          {t.contactTitle}
        </h2>
      </div>
  
      <div className="bg-gray-800 rounded-lg shadow-md p-10">
        <p className="text-gray-300 mb-6 text-lg">{t.contactText}</p>
        <div className="flex flex-col space-y-6">
          <a
            href="mailto:varnelson15.@gmail.com"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-lg"
          >
            <Mail className="w-8 h-8 mr-2" />
            varnelson15.@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/nelson-vargas-470893254/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-lg"
          >
            <Linkedin className="w-8 h-8 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/NelsonVargas04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-lg"
          >
            <Github className="w-8 h-8 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
