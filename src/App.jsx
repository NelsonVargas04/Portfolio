
import './App.css';
import { I18nProvider } from './i18n.jsx';
import { ThemeProvider } from './ThemeContext.jsx';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <div className="container">
          <Header />
          <Hero />
        </div>
        <About />
        <div className="container">
          <Projects />
        </div>
        <div className="container">
          <Contact />
          <Footer />
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}

export default App;
