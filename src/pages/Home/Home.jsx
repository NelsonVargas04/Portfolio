import { useI18n } from '../../hooks/useI18n.js';
import { useTheme } from '../../hooks/useTheme.js';
import { useProjects } from '../../hooks/useProjects.js';
import { useExperience } from '../../hooks/useExperience.js';

import Ticker from '../../widgets/Ticker/Ticker.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function Home() {
  const { t, lang, switchLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const projects = useProjects();
  const experience = useExperience();

  return (
    <>
      <Header nav={t.nav} lang={lang} onSwitchLang={switchLang} theme={theme} onToggleTheme={toggleTheme} />
      <Hero hero={t.hero} />
      <Ticker />
      <About about={t.about} />
      <Experience experience={{ ...experience, label: t.experience.label, title: t.experience.title }} />
      <Projects projects={projects} label={t.projects.label} title={t.projects.title} linkLabel={t.projects.link} />
      <Contact contact={t.contact} />
      <Footer footerText={t.footer} />
    </>
  );
}
