import React, { useState } from 'react';
import { Github, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const projects = [
  {
    title: 'E-commerce Platform',
    description: {
      es: 'Una plataforma de comercio electrónico full-stack construida con React y Node.js',
      en: 'A full-stack e-commerce platform built with React and Node.js'
    },
    fullDescription: {
      es: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos, gestión de inventario y panel de administración.',
      en: 'Complete e-commerce platform with shopping cart, payment gateway, inventory management, and admin dashboard.'
    },
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/nelsonvargas/ecommerce-platform',
    live: 'https://ecommerce-platform-demo.netlify.app',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe']
  },
  {
    title: 'Task Management App',
    description: {
      es: 'Una aplicación móvil de gestión de tareas desarrollada con React Native',
      en: 'A mobile task management app developed with React Native'
    },
    fullDescription: {
      es: 'Aplicación móvil para gestión de tareas con funciones de creación, edición, eliminación y categorización de tareas, así como notificaciones y sincronización en la nube.',
      en: 'Mobile app for task management with features for creating, editing, deleting, and categorizing tasks, as well as notifications and cloud synchronization.'
    },
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/nelsonvargas/task-management-app',
    technologies: ['React Native', 'Redux', 'Firebase']
  },
  {
    title: 'Weather Forecast Dashboard',
    description: {
      es: 'Un panel de pronóstico del tiempo utilizando Angular y la API de OpenWeatherMap',
      en: 'A weather forecast dashboard using Angular and OpenWeatherMap API'
    },
    fullDescription: {
      es: 'Dashboard interactivo que muestra pronósticos detallados del tiempo para múltiples ubicaciones, con gráficos, mapas y alertas meteorológicas.',
      en: 'Interactive dashboard displaying detailed weather forecasts for multiple locations, featuring charts, maps, and weather alerts.'
    },
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    github: 'https://github.com/nelsonvargas/weather-forecast-dashboard',
    live: 'https://weather-forecast-dashboard-demo.netlify.app',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'OpenWeatherMap API']
  },
];

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <section id="projects" className="mb-20">
      <h2 className="text-3xl font-semibold mb-6 text-blue-400">{t.projectsTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className={`bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${expandedProject === index ? 'col-span-full' : ''}`}>
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{expandedProject === index ? project.fullDescription[language] : project.description[language]}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400 hover:text-blue-300">
                    <Github className="w-5 h-5 mr-1" />
                    GitHub
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center text-green-400 hover:text-green-300">
                      <Globe className="w-5 h-5 mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
                <button
                  onClick={() => toggleProject(index)}
                  className="text-blue-400 hover:text-blue-300"
                >
                  {expandedProject === index ? 'Less' : 'More'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;