import './App.css';
import { I18nProvider } from './contexts/i18n.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import Home from './pages/Home/Home.jsx';

function Grain() {
  return (
    <svg className="grain" xmlns="http://www.w3.org/2000/svg">
      <filter id="grain-filter">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-filter)" />
    </svg>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <Grain />
        <Home />
      </I18nProvider>
    </ThemeProvider>
  );
}
