import { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const [darkMode, setDarkMode] = useState(true);
  const { language, toggleLanguage } = useLanguage();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#0D1321] text-[#F0EBD8]' : 'bg-[#edf6f9] text-[#0D1321]'} transition-colors duration-300`}>
      <div className="fixed top-4 right-4 z-50">
        <div className={`flex items-center  rounded-full px-4 py-3 shadow-lg" ${darkMode ? 'bg-[#1D2D44]' : 'bg-[#748CAB] '} `} >
          <div className="flex items-center">
            <img 
              src="https://flagcdn.com/w40/us.png"
              alt="English" 
              className={`w-8 h-5 ${language === 'en' ? 'opacity-100' : 'opacity-50'}`}
            />
            <div className="mx-2 w-12 h-6 relative cursor-pointer" onClick={toggleLanguage}>
              <div className="w-12 h-6 bg-[#3E5C76] rounded-full"></div>
              <div 
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-[#F0EBD8] rounded-full transition-transform duration-300 ${
                  language === 'es' ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </div>
            <img 
              src="https://flagcdn.com/w40/es.png"
              alt="Español" 
              className={`w-8 h-5 ${language === 'es' ? 'opacity-100' : 'opacity-50'}`}
            />
          </div>
          <div className="mx-2 w-px h-6 bg-[#748CAB]"></div>
          <div className="flex items-center">
            <svg className={`w-8 h-8 ${darkMode ? 'opacity-50' : 'text-[#edf6f9]'}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
            <div className="mx-2 w-12 h-6 relative cursor-pointer" onClick={toggleDarkMode}>
              <div className="w-12 h-6 bg-[#3E5C76] rounded-full"></div>
              <div 
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-[#F0EBD8] rounded-full transition-transform duration-300 ${
                  darkMode ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </div>
            <svg className={`w-8 h-8 ${darkMode ? 'text-[#edf6f9]' : 'opacity-50'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </div>
        </div>
      </div>
      <div className={`max-w-7xl mx-auto px-4 py-4 ${darkMode ? 'bg-[#0D1321]' : 'bg-[#edf6f9]'}`}>
      <Header darkMode ={darkMode}  />
      <main >
        <About  darkMode ={darkMode}/>
        <WorkExperience darkMode ={darkMode} />
        <Projects darkMode ={darkMode} />
        <Certificates darkMode ={darkMode} />
        <Technologies darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;