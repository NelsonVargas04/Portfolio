import { useI18n } from '../i18n.jsx';
import { useTheme } from '../ThemeContext.jsx';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';

export default function Header() {
  const { t, lang, switchLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  return (
    <header>
      <div className="header-content">
        {/* Logo removed as requested */}
        <nav>
          <ul>
            <li><a href="#proyectos" data-i18n="nav.projects">{t.nav.projects}</a></li>
            <li><a href="#about" data-i18n="nav.about">{t.nav.about}</a></li>
            <li><a href="#contacto" data-i18n="nav.contact">{t.nav.contact}</a></li>
          </ul>
        </nav>
        <div className="controls">
          {/* Language toggle */}
          <div className="lang-toggle" onClick={() => switchLang(lang === 'en' ? 'es' : 'en')} title={lang === 'en' ? 'Cambiar a Español' : 'Switch to English'}>
            <TranslateIcon sx={{ fontSize: 16, color: 'var(--accent)', marginRight: '4px' }} />
            <span className="lang-label">{lang === 'en' ? 'EN' : 'ES'}</span>
            <div className="lang-pill">
              <div className={`lang-option ${lang === 'en' ? 'active' : ''}`}>EN</div>
              <div className={`lang-option ${lang === 'es' ? 'active' : ''}`}>ES</div>
            </div>
          </div>

          {/* Theme toggle */}
          <div className="theme-toggle-wrapper" onClick={toggleTheme} title={theme === 'light' ? 'Dark mode' : 'Light mode'}>
            <div className="theme-slider">
              {theme === 'light'
                ? <LightModeIcon sx={{ fontSize: 14, color: '#fff' }} />
                : <DarkModeIcon sx={{ fontSize: 14, color: '#fff' }} />
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}