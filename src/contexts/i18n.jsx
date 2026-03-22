import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      eyebrow: 'Software Engineer — Buenos Aires, Argentina',
      role: 'Senior Software Architect & Frontend Specialist',
      stack: 'React · Node.js · TypeScript · Python · AI',
      available: 'Available',
      quickLinks: 'Quick links',
      resume: 'Download Resume',
      cvUrl: '/Nelson_Vargas_CV_EN.pdf',
      years: 'Years',
      technologies: 'Technologies',
      scroll: 'Scroll to explore',
    },
    about: {
      label: 'About me',
      title: 'Building things that <em>matter</em>',
      bio: 'Senior Software Architect specialized in JavaScript and Python ecosystems. I design and build <strong>high-impact web and mobile applications</strong> — combining technical depth in React, React Native and Node.js with strategic vision, AI integration, and human leadership of multidisciplinary teams.',
      quote: 'Versatility, continuous innovation and human leadership — building teams where engineering excellence and growth go hand in hand.',
      stat1: 'Years shipping products',
      stat2: 'Technologies mastered',
      stat3: 'Primary ecosystem',
    },
    experience: {
      label: 'Work Experience',
      title: 'Where I\'ve <em>worked</em>',
      present: 'Present',
      stackLabel: 'Stack used',
      role: 'Frontend Developer',
      bullet1: 'Unified Component Strategy: Engineered a scalable, high-performance design system and component library to converge technical efforts across web and mobile products, accelerating time-to-market.',
      bullet2: 'Infrastructure & Content Delivery: Optimized global content delivery by implementing CDN strategies and managing server-side configurations, ensuring low-latency experiences for a worldwide user base.',
      bullet3: 'AI-Driven Development: Pioneered the integration of LLMs and Prompt Engineering into the SDLC to automate testing suites and optimize internal developer workflows, increasing team velocity.',
      bullet4: 'Technical Leadership & Mentoring: Directing a global multidisciplinary team under Agile methodologies, driving code quality through rigorous technical reviews and professional mentoring.',
    },
    projects: {
      label: 'Selected Projects',
      title: 'Things I\'ve <em>built</em>',
      category1: 'E-Commerce',
      category2: 'Landing Page',
      category3: 'Tool',
      desc1: 'E-commerce platform to compare quality products in clothing, appliances, and technology. Full product management, cart, and payment flows.',
      desc2: 'Expense splitting app that automatically calculates who owes what. Organize dinners, trips, rent and more. Notifies you when you get paid.',
      desc3: 'Generates strong, secure passwords with various character types and lengths. Minimal UI focused entirely on function and speed.',
      link: 'View project',
    },
    contact: {
      label: 'Get in touch',
      title: 'Let\'s build something <em>great</em>',
      big: 'Open to<br>new <em>ideas.</em>',
      note: '',
      linkedinSub: 'Connect professionally',
      githubSub: 'See the code',
    },
    footer: 'Designed & developed with attention to detail',
  },
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: 'Ingeniero de Software — Buenos Aires, Argentina',
      role: 'Arquitecto de Software Senior & Especialista Frontend',
      stack: 'React · Node.js · TypeScript · Python · IA',
      available: 'Disponible',
      quickLinks: 'Links',
      resume: 'Descargar CV',
      cvUrl: '/Nelson_Vargas_CV_ES.pdf',
      years: 'Años',
      technologies: 'Tecnologías',
      scroll: 'Scroll para explorar',
    },
    about: {
      label: 'Sobre mí',
      title: 'Construyendo cosas que <em>importan</em>',
      bio: 'Arquitecto de Software Senior especializado en los ecosistemas JavaScript y Python. Diseño y construyo <strong>aplicaciones web y móviles de alto impacto</strong> — combinando profundidad técnica en React, React Native y Node.js con visión estratégica, integración de IA y liderazgo humano de equipos multidisciplinarios.',
      quote: 'Versatilidad, innovación continua y liderazgo humano — construyendo equipos donde la excelencia en ingeniería y el crecimiento van de la mano.',
      stat1: 'Años de experiencia',
      stat2: 'Tecnologías dominadas',
      stat3: 'Ecosistema principal',
    },
    experience: {
      label: 'Experiencia Laboral',
      title: 'Dónde he <em>trabajado</em>',
      present: 'Actualidad',
      stackLabel: 'Stack utilizado',
      role: 'Desarrollador Frontend',
      bullet1: 'Estrategia de componentes unificada: Diseñé un sistema de diseño y biblioteca de componentes escalable y de alto rendimiento para converger los esfuerzos técnicos en productos web y móviles, acelerando el time-to-market.',
      bullet2: 'Infraestructura y entrega de contenido: Optimicé la entrega de contenido global implementando estrategias CDN y gestionando configuraciones server-side, garantizando experiencias de baja latencia para usuarios mundiales.',
      bullet3: 'Desarrollo impulsado por IA: Pionero en la integración de LLMs y Prompt Engineering en el SDLC para automatizar suites de pruebas y optimizar flujos de trabajo internos, aumentando la velocidad del equipo.',
      bullet4: 'Liderazgo técnico y mentoría: Dirijo un equipo global multidisciplinario bajo metodologías Agile, impulsando la calidad del código mediante revisiones técnicas rigurosas y mentoría profesional.',
    },
    projects: {
      label: 'Proyectos Destacados',
      title: 'Cosas que he <em>construido</em>',
      category1: 'E-Commerce',
      category2: 'Landing Page',
      category3: 'Herramienta',
      desc1: 'Plataforma de e-commerce para comparar productos de calidad. Gestión de productos, carrito y pagos completos.',
      desc2: 'App para dividir gastos que calcula automáticamente quién debe qué. Organizá cenas, viajes, alquileres y más.',
      desc3: 'Genera contraseñas fuertes y seguras con varios tipos de caracteres. UI minimalista enfocada en función y velocidad.',
      link: 'Ver proyecto',
    },
    contact: {
      label: 'Contacto',
      title: 'Construyamos algo <em>grande</em>',
      big: 'Abierto<br>a nuevas <em>ideas.</em>',
      note: '',
      linkedinSub: 'Conectar profesionalmente',
      githubSub: 'Ver el código',
    },
    footer: 'Diseñado y desarrollado con atención al detalle',
  },
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('language') || 'en');
  const t = translations[lang];
  const switchLang = l => { setLang(l); localStorage.setItem('language', l); };
  return (
    <I18nContext.Provider value={{ t, lang, switchLang }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
