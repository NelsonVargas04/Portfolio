import React, { useState } from "react";
import { Github, Globe, X } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

interface Project {
  title: string;
  description: {
    es: string;
    en: string;
  };
  fullDescription: {
    es: string;
    en: string;
  };
  image: string;
  github: string;
  live?: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    title: "E-commerce Platform",
    description: {
      es: "Una plataforma de comercio electrónico full-stack construida con React y Node.js",
      en: "A full-stack e-commerce platform built with React and Node.js",
    },
    fullDescription: {
      es: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos, gestión de inventario y panel de administración.",
      en: "Complete e-commerce platform with shopping cart, payment gateway, inventory management, and admin dashboard.",
    },
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/nelsonvargas/ecommerce-platform",
    live: "https://ecommerce-platform-demo.netlify.app",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
  },
  {
    title: "Password Assistant",
    description: {
      es: "Aplicación para generar y verificar contraseñas de manera segura.",
      en: "An app to securely generate and check passwords.",
    },
    fullDescription: {
      es: "Herramienta interactiva para evaluar la fortaleza de contraseñas y generar nuevas claves seguras, incluyendo contraseñas aleatorias, fáciles de recordar y PINs, con opciones personalizables.",
      en: "Interactive tool to evaluate password strength and generate secure keys, including random, memorable passwords, and PINs, with customizable options.",
    },
    image: "/img/generate.png",
    github: "https://github.com/NelsonVargas04/Password-generator",
    live: "https://password-generator-ef2lgj24k-nelsons-projects-c499b28f.vercel.app/",
    technologies: ["TypeScript", "React"],
  },
  {
    title: "Pet Selector ",
    description: {
      es: "Interfaz interactiva para elegir tu mascota favorita entre diferentes categorías.",
      en: "Interactive interface to choose your favorite pet from different categories.",
    },
    fullDescription: {
      es: "Aplicación intuitiva que permite seleccionar tu mascota preferida entre perros, gatos y peces. Incluye opciones detalladas y visuales para facilitar la elección.",
      en: "Intuitive application that lets you select your preferred pet among dogs, cats, and fish. It includes detailed and visual options to make the choice easier.",
    },
    image: "/img/mascotas.png",
    github: "https://github.com/NelsonVargas04/virtual-pet",
    live: "https://virtual-pet-eta.vercel.app/",
    technologies: ["TypeScript", "React"],
  },
];

const Projects: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const { language } = useLanguage();
  const t = translations[language];
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="mb-20">
      {/* Título de la sección */}
      <div className="relative inline-flex items-center gap-4 mb-8 bg-gradient-to-r from-purple-500/20 to-transparent p-6 rounded-lg">
        <h2
          className={`text-4xl font-semibold ${darkMode ? "text-[#00b4d8]" : "text-[#1D2D44]"
            }`}
        >
          {t.projectsTitle}
        </h2>
      </div>

      {/* Lista de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer flex flex-col ${darkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
            onClick={() => setSelectedProject(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3
                className={`text-2xl font-semibold mb-2 ${darkMode ? "text-[#edf6f9]" : "text-[#0D1321]"
                  }`}
              >
                {project.title}
              </h3>
              <p
                className={`text-base mb-4 ${darkMode ? "text-gray-400" : "text-gray-700"
                  }`}
                style={{
                  maxHeight: "50px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {project.description[language]}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-2 rounded-full text-sm ${darkMode
                      ? "bg-blue-700 text-white"
                      : "bg-blue-300 text-blue-800"
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${darkMode
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-800 hover:text-blue-600"
                    }`}
                >
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center ${darkMode
                      ? "text-green-400 hover:text-green-300"
                      : "text-green-800 hover:text-green-600"
                      }`}
                  >
                    <Globe className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className={`rounded-lg max-w-6xl w-full p-12 relative ${darkMode ? "bg-gray-800" : "bg-gray-200"
              }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h3
              className={`text-3xl font-semibold mb-4 ${darkMode ? "text-[#edf6f9]" : "text-[#0D1321]"
                }`}
            >
              {projectsData[selectedProject].title}
            </h3>
            <img
              src={projectsData[selectedProject].image}
              alt={projectsData[selectedProject].title}
              className="w-full h-[400px] object-cover rounded-lg mb-4"
            />
            <p
              className={`text-lg leading-relaxed mb-6 ${darkMode ? "text-gray-400" : "text-gray-700"
                }`}
            >
              {projectsData[selectedProject].fullDescription[language]}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projectsData[selectedProject].technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-base ${darkMode
                    ? "bg-blue-700 text-white"
                    : "bg-blue-300 text-blue-800"
                    }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href={projectsData[selectedProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center text-lg ${darkMode
                  ? "text-blue-400 hover:text-blue-300"
                  : "text-blue-800 hover:text-blue-600"
                  }`}
              >
                <Github className="w-6 h-6 mr-1" />
                GitHub
              </a>
              {projectsData[selectedProject].live && (
                <a
                  href={projectsData[selectedProject].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center text-lg ${darkMode
                    ? "text-green-400 hover:text-green-300"
                    : "text-green-800 hover:text-green-600"
                    }`}
                >
                  <Globe className="w-6 h-6 mr-1" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
