const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text2)' }}>
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text2)' }}>
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);

export default function Header({ nav, lang, onSwitchLang, theme, onToggleTheme }) {
  return (
    <nav>
      <div className="nav-links">
        <a href="#about">{nav.about}</a>
        <a href="#experience">{nav.experience}</a>
        <a href="#projects">{nav.projects}</a>
        <a href="#contact">{nav.contact}</a>
      </div>
      <div className="nav-controls">
        <button
          className={`lang-btn${lang === 'en' ? ' active' : ''}`}
          onClick={() => onSwitchLang('en')}
        >EN</button>
        <span className="lang-sep">/</span>
        <button
          className={`lang-btn${lang === 'es' ? ' active' : ''}`}
          onClick={() => onSwitchLang('es')}
        >ES</button>
        <button className="theme-btn" onClick={onToggleTheme} title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}
