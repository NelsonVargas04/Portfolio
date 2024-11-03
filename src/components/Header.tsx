import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';

const Header: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <header className={`h-screen flex flex-col justify-center items-center ${darkMode ? ' text-[#edf6f9]' : 'text-[#0D1321]'} transition-colors duration-300`}>
      <div className="text-center">
        <h1 className={`text-9xl font-bold mb-4 animate-scaleIn ${darkMode ? 'text-[#edf6f9]' : 'text-[#1d2d44]'}`}>Nelson Vargas</h1>
        <p className={`text-4xl mb-8 animate-slideIn ${darkMode ? 'text-[#00b4d8]' : 'text-[#0077b6]'}`}>{t.role}</p>
        <div className="flex justify-center space-x-6 animate-fadeIn">
          <a href="https://www.linkedin.com/in/nelson-vargas-470893254/" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-[#edf6f9]' : 'text-[#1D2D44]'} hover:text-blue-300 transition-colors`}>
            <Linkedin className="w-10 h-10" />
          </a>
          <a href="https://github.com/NelsonVargas04" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-[#edf6f9]' : 'text-[#1D2D44]'} hover:text-blue-300 transition-colors`}>
            <Github className="w-10 h-10" />
          </a>
          <a href="mailto:varnelson15.@gmail.com" className={`${darkMode ? 'text-[#edf6f9]' : 'text-[#1D2D44]'} hover:text-blue-300 transition-colors`}>
            <Mail className="w-10 h-10" />
          </a>
          <a href="/Nelson_Vargas_CV.pdf" target="_blank" rel="noopener noreferrer" className={`${darkMode ? 'text-[#edf6f9]' : 'text-[#1D2D44]'} hover:text-blue-300 transition-colors`}>
            <FileText className="w-10 h-10" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;