import { useState } from "react";
import { Sun, Moon, Globe } from "lucide-react";
import Header from "./components/Header";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

function AppContent() {
  const [darkMode, setDarkMode] = useState(true);
  const { language, toggleLanguage } = useLanguage();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-black text-gray-100" : "bg-white text-gray-900"
      } transition-colors duration-300`}
    >
      <div className="fixed top-4 right-4 flex space-x-2 z-50">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${
            darkMode
              ? "bg-gray-800 text-yellow-400"
              : "bg-gray-100 text-gray-900"
          } shadow-lg`}
        >
          {darkMode ? (
            <Sun className="w-6 h-6" />
          ) : (
            <Moon className="w-6 h-6" />
          )}
        </button>
        <button
          onClick={toggleLanguage}
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-800 text-blue-400" : "bg-gray-100 text-blue-600"
          } shadow-lg`}
        >
          <Globe className="w-6 h-6" />
        </button>
      </div>
      <Header />
      <main
        className={`mx-auto px-4 py-8 ${darkMode ? "bg-black" : "bg-white"}`}
        style={{ maxWidth: "90rem" }}
      >
        <About />
        <WorkExperience />
        <Projects />
        <Technologies />
        <Contact />
      </main>
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
