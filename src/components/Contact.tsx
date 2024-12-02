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
        <h2
          className={`text-4xl font-bold ${
            darkMode ? "text-[#00b4d8]" : "text-[#1D2D44]"
          }`}
        >
          {t.contactTitle}
        </h2>
      </div>

  
      <div
        className={`rounded-lg p-10 ${
          darkMode ? "bg-gray-800 shadow-gray-900" : "bg-gray-100 shadow-gray-300"
        } shadow-md`}
      >
      
        <p
          className={`mb-8 text-xl ${
            darkMode ? "text-gray-300" : "text-gray-700"
          } leading-relaxed`}
        >
          {t.contactText}
        </p>

       
        <div className="flex flex-col space-y-8">
          {/* Email */}
          <a
            href="mailto:varnelson15.@gmail.com"
            className={`flex items-center text-xl transition-colors ${
              darkMode
                ? "text-[#00b4d8] hover:text-blue-300"
                : "text-[#1D2D44] hover:text-blue-500"
            }`}
          >
            <Mail className="w-10 h-10 mr-3" />
            <span className="font-medium">varnelson15.@gmail.com</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nelson-vargas-470893254/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-xl transition-colors ${
              darkMode
                ? "text-[#00b4d8] hover:text-blue-300"
                : "text-[#1D2D44] hover:text-blue-500"
            }`}
          >
            <Linkedin className="w-10 h-10 mr-3" />
            <span className="font-medium">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/NelsonVargas04"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center text-xl transition-colors ${
              darkMode
                ? "text-[#00b4d8] hover:text-blue-300"
                : "text-[#1D2D44] hover:text-blue-500"
            }`}
          >
            <Github className="w-10 h-10 mr-3" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
