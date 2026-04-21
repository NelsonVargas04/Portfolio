export default function Hero({ hero }) {
  return (
    <section id="hero">
      <div className="hero-eyebrow">
        <span className="hero-dot" />
        <span>{hero.eyebrow}</span>
      </div>

      <div className="hero-body">
        <div className="hero-name">
          <span className="hero-outline">NELSON</span>
          <span className="hero-solid">
            VAR<span className="hero-underline-wrap">
              <span className="name-accent">GAS</span>
              <span className="hero-underline" />
            </span>
          </span>
        </div>

        <div className="hero-right-panel">
          <div className="hero-links">
            <a href="https://www.linkedin.com/in/nelsonvargas-dev/" target="_blank" rel="noopener noreferrer" className="hero-link">
              <span>linkedin.com/in/nelsonvargas-dev</span>
              <span className="hero-link-arrow">→</span>
            </a>
            <a href="https://github.com/NelsonVargas04" target="_blank" rel="noopener noreferrer" className="hero-link">
              <span>GitHub</span>
              <span className="hero-link-arrow">→</span>
            </a>
            <a href="mailto:var.nelson15@gmail.com" className="hero-link">
              <span>var.nelson15@gmail.com</span>
              <span className="hero-link-arrow">→</span>
            </a>
            <a href={hero.cvUrl} target="_blank" rel="noopener noreferrer" className="hero-link">
              <span>{hero.resume}</span>
              <span className="hero-link-arrow">→</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <div className="hero-role-block">
          <strong>{hero.role}</strong>
          <span>{hero.stack}</span>
          <div className="scroll-hint">
            <span className="scroll-hint-label">{hero.scroll}</span>
            <span className="scroll-hint-line" />
          </div>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-n">3<em>+</em></div>
            <div className="hero-stat-l">{hero.years}</div>
          </div>
          <div>
            <div className="hero-stat-n">20<em>+</em></div>
            <div className="hero-stat-l">{hero.technologies}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
