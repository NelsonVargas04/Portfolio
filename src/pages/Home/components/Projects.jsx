import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal.js';

function BrowserMock({ img, alt, name }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="proj-browser">
      <div className="browser-bar">
        <div className="browser-dot" style={{ background: '#ff5f56' }} />
        <div className="browser-dot" style={{ background: '#ffbd2e' }} />
        <div className="browser-dot" style={{ background: '#27c93f' }} />
        <div className="browser-url" />
      </div>
      <div className="browser-body">
        {!imgError
          ? <img src={img} alt={alt} onError={() => setImgError(true)} />
          : (
            <div className="browser-placeholder">
              <span className="browser-placeholder-label">{name}</span>
            </div>
          )
        }
      </div>
    </div>
  );
}

function ProjCard({ p, linkLabel }) {
  const preview = (
    <div className="proj-preview">
      <BrowserMock img={p.img} alt={p.name + p.nameEm} name={p.name + p.nameEm} />
    </div>
  );

  const info = (
    <div className="proj-info">
      <span className="proj-badge">{p.cat}</span>
      <div className="proj-name">{p.name}{p.nameEm}</div>
      <p className="proj-desc">{p.desc}</p>
      <div className="proj-tags">
        {p.tags.map(tag => <span className="proj-tag" key={tag}>{tag}</span>)}
      </div>
      <div className="proj-actions">
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary">{linkLabel} →</a>
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
      </div>
    </div>
  );

  return (
    <div className="proj-row">
      {p.alt ? <>{info}{preview}</> : <>{preview}{info}</>}
    </div>
  );
}

export default function Projects({ projects, label, title, linkLabel }) {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="reveal">
        <div className="sec-label">{label}</div>
        <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className="proj-list">
        {projects.map((p, i) => (
          <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
            <ProjCard p={p} linkLabel={linkLabel} />
          </div>
        ))}
      </div>
    </section>
  );
}
