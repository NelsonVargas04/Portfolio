import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';

const Header: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className={`h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black text-white transition-colors duration-300`}>
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 animate-scaleIn">Nelson Vargas</h1>
        <p className="text-4xl text-blue-400 mb-8 animate-slideIn">{t.role}</p> {/* Increased subtitle size */}
        <div className="flex justify-center space-x-6 animate-fadeIn">
          <a href="https://www.linkedin.com/in/nelson-vargas-470893254/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
            <Linkedin className="w-10 h-10" />
          </a>
          <a href="https://github.com/NelsonVargas04" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
            <Github className="w-10 h-10" />
          </a>
          <a href="mailto:varnelson15.@gmail.com" className="text-white hover:text-blue-300 transition-colors">
            <Mail className="w-10 h-10" />
          </a>
          <a href="/Nelson_Vargas_CV.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
            <FileText className="w-10 h-10" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;