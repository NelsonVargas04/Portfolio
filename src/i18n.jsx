// Simple i18n context for en/es
import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: { projects: 'PROJECTS', about: 'ABOUT', contact: 'CONTACT' },
    hero: { name: 'Nelson Vargas', subtitle: 'Software Engineering Team Lead | Fullstack Developer' },
    projects: {
      title: 'Selected Projects',
      category1: 'E-commerce', name1: 'Shop.ar', desc1: 'E-commerce platform to compare quality products in clothing, appliances, and technology. Features product management, cart, and payments.',
      category2: 'Mobile App', name2: 'SplitApp', desc2: 'Expense splitting app that automatically calculates who owes what. Organize dinners, trips, rent and more. Notifies you when you get paid.',
      category3: 'Development', name3: 'Project Name 03', desc3: 'The third project that demonstrates your versatility and expertise. Shares the results obtained and the impact of the work done.',
      link: 'View project',
      github: 'GitHub'
    },
    about: {
      title: 'About Me',
      bio: 'With over 3 years of experience transforming ideas into scalable digital products, I lead technical teams in building high-impact web and mobile applications. My approach combines technical strength in the JavaScript ecosystem (React, React Native, Node.js) with a strategic, results-oriented vision.',
      whatIBringTitle: 'What I Bring',
      bring1Title: 'Technical Leadership',
      bring1Desc: 'Leading teams under agile methodologies, ensuring code quality through mentoring and technical code reviews.',
      bring2Title: 'Fullstack Development & AI',
      bring2Desc: 'Specialist in React and Node.js, integrating Artificial Intelligence tools to optimize development workflows and create smarter user experiences.',
      bring3Title: 'Product Vision',
      bring3Desc: 'Exploring advanced design patterns and clean architectures, applying them in corporate environments to maximize performance.',
      closingBio: 'I am passionate about solving complex technical challenges and building teams where innovation and continuous learning are the norm.',
      experienceTitle: 'Experience',
      current: 'Current',
      present: 'Present',
      exp1a: 'Leading a global multidisciplinary development team, driving code quality through mentoring and technical reviews',
      exp1b: 'Building high-impact web and mobile applications using React, React Native, Vite, and modern JavaScript tooling',
      exp1c: 'Integrating AI tools (LLMs, Prompt Engineering) to optimize development workflows and automate testing',
      exp1d: 'Architecting scalable, reusable solutions with clean code patterns and agile methodologies',
      exp2a: 'Developed web applications using React and JavaScript in a fast-paced consulting environment',
      exp2b: 'Designed product and technical flowcharts, bridging the gap between business requirements and implementation',
      skillsTitle: 'Skills',
      educationTitle: 'Education',
      education: [
        { name: 'Full Stack Developer', institution: 'Intensive Program', hours: '+800 hrs' },
        { name: 'Responsive Web Design', institution: 'FreeCodeCamp', hours: '+300 hrs' },
        { name: 'TypeScript', institution: 'Course', hours: '+80 hrs' },
        { name: 'Design for Programmers', institution: 'Platzi', hours: '+14 hrs' },
        { name: 'Design Systems', institution: 'Platzi', hours: '+20 hrs' },
        { name: 'Public Speaking', institution: 'Course 2021', hours: '' },
      ],
      langEs: 'Spanish', langEsLevel: 'Native',
      langEn: 'English', langEnLevel: 'A2',
    },
    contact: { title: "Let's Work Together" },
    footer: 'Designed and developed with attention to detail'
  },
  es: {
    nav: { projects: 'PROYECTOS', about: 'SOBRE MÍ', contact: 'CONTACTO' },
    hero: { name: 'Nelson Vargas', subtitle: 'Software Engineering Team Lead | Fullstack Developer' },
    projects: {
      title: 'Proyectos Seleccionados',
      category1: 'E-commerce', name1: 'Shop.ar', desc1: 'Plataforma de e-commerce para comparar productos de calidad en ropa, electrodomésticos y tecnología. Incluye gestión de productos, carrito y pagos.',
      category2: 'App Móvil', name2: 'SplitApp', desc2: 'App para dividir gastos que calcula automáticamente quién debe qué. Organizá cenas, viajes, alquileres y más. Te avisa cuando te pagan.',
      category3: 'Desarrollo', name3: 'Nombre del Proyecto 03', desc3: 'El tercer proyecto que demuestra tu versatilidad y expertise. Comparte los resultados obtenidos y el impacto del trabajo realizado.',
      link: 'Ver proyecto',
      github: 'GitHub'
    },
    about: {
      title: 'Sobre Mí',
      bio: 'Con más de 3 años de experiencia transformando ideas en productos digitales escalables, hoy lidero equipos técnicos en la creación de aplicaciones web y móviles de alto impacto. Mi enfoque combina la solidez técnica en el ecosistema JavaScript (React, React Native, Node.js) con una visión estratégica orientada a resultados.',
      whatIBringTitle: '¿Qué aporto a los proyectos?',
      bring1Title: 'Liderazgo Técnico',
      bring1Desc: 'Dirección de equipos bajo metodologías ágiles, asegurando la calidad del código mediante mentoría y revisiones técnicas (Code Reviews).',
      bring2Title: 'Desarrollo Fullstack & IA',
      bring2Desc: 'Especialista en React y Node.js, integrando herramientas de Inteligencia Artificial para optimizar flujos de desarrollo y crear experiencias de usuario más inteligentes.',
      bring3Title: 'Visión de Producto',
      bring3Desc: 'Exploro patrones de diseño avanzados y arquitecturas limpias que aplico en entornos corporativos para maximizar el rendimiento.',
      closingBio: 'Me apasiona resolver retos técnicos complejos y construir equipos donde la innovación y el aprendizaje continuo sean la norma.',
      experienceTitle: 'Experiencia',
      current: 'Actual',
      present: 'Actualidad',
      exp1a: 'Lidero un equipo de desarrollo multidisciplinario, impulsando la calidad del código mediante mentoría y revisiones técnicas',
      exp1b: 'Desarrollo de aplicaciones web y móviles de alto impacto usando React, React Native, Vite y herramientas modernas de JavaScript',
      exp1c: 'Integración de herramientas de IA (LLMs, Prompt Engineering) para optimizar flujos de desarrollo y automatizar pruebas',
      exp1d: 'Diseño de soluciones escalables y reutilizables con patrones de código limpio y metodologías ágiles',
      exp2a: 'Desarrollo de aplicaciones web usando React y JavaScript en un entorno de consultoría de ritmo acelerado',
      exp2b: 'Diseño de diagramas de flujo de producto y técnicos, conectando los requerimientos de negocio con la implementación',
      skillsTitle: 'Habilidades',
      educationTitle: 'Educación',
      education: [
        { name: 'Full Stack Developer', institution: 'Programa Intensivo', hours: '+800 hrs' },
        { name: 'Responsive Web Design', institution: 'FreeCodeCamp', hours: '+300 hrs' },
        { name: 'TypeScript', institution: 'Curso', hours: '+80 hrs' },
        { name: 'Diseño para Programadores', institution: 'Platzi', hours: '+14 hrs' },
        { name: 'Sistema de Diseño', institution: 'Platzi', hours: '+20 hrs' },
        { name: 'Oratoria', institution: 'Curso 2021', hours: '' },
      ],
      langEs: 'Español', langEsLevel: 'Nativo',
      langEn: 'Inglés', langEnLevel: 'A2',
    },
    contact: { title: 'Trabajemos Juntos' },
    footer: 'Diseñado y desarrollado con atención al detalle'
  }
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
