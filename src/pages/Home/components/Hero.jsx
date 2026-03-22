export default function Hero({ hero }) {
  return (
    <section id="hero">
      <div className="hero-main">
        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-dot"></span>
            <span>{hero.eyebrow}</span>
          </div>
          <div>
            <span className="hero-outline">NELSON</span>
            <span className="hero-solid">VAR<em>GAS</em></span>
          </div>
          <div className="hero-meta">
            <div className="hero-role">
              <strong>{hero.role}</strong>
              <span>{hero.stack}</span>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div>
            <div className="hr-label">{hero.quickLinks}</div>
            <div className="hero-links">
              <a href="https://www.linkedin.com/in/nelsonvargas-dev/" target="_blank" rel="noopener noreferrer" className="hero-link">
                linkedin.com/in/nelsonvargas-dev <span>→</span>
              </a>
              <a href="https://github.com/NelsonVargas04" target="_blank" rel="noopener noreferrer" className="hero-link">
                GitHub <span>→</span>
              </a>
              <a href="mailto:var.nelson15@gmail.com" className="hero-link">
                var.nelson15@gmail.com <span>→</span>
              </a>
              <a href={hero.cvUrl} target="_blank" rel="noopener noreferrer" className="hero-link">
                {hero.resume} <span>→</span>
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="h-stat">
              <div className="h-stat-n">3<em>+</em></div>
              <div className="h-stat-l">{hero.years}</div>
            </div>
            <div className="h-stat">
              <div className="h-stat-n">20<em>+</em></div>
              <div className="h-stat-l">{hero.technologies}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bar">
        <div className="scroll-line"></div>
        <span>{hero.scroll}</span>
      </div>
    </section>
  );
}
