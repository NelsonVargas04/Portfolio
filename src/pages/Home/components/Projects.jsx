import { useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal.js';

function ProjCard({ p, linkLabel }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="proj-card">
      <div className="proj-card-img">
        {!imgError
          ? <img src={p.img} alt={p.name + p.nameEm} onError={() => setImgError(true)} />
          : (
            <div className="proj-card-placeholder">
              <span>{p.name}{p.nameEm}</span>
            </div>
          )
        }
        <span className="proj-card-badge">{p.cat}</span>
      </div>
      <div className="proj-card-body">
        <div className="proj-card-name">{p.name}<em>{p.nameEm}</em></div>
        <p className="proj-card-desc">{p.desc}</p>
        <div className="proj-card-tags">
          {p.tags.map(tag => <span className="proj-tag" key={tag}>{tag}</span>)}
        </div>
        <div className="proj-card-actions">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary">{linkLabel} →</a>
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
        </div>
      </div>
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
      <div className="proj-grid">
        {projects.map((p, i) => (
          <div key={i} className={`reveal reveal-delay-${Math.min(i + 1, 4)}`}>
            <ProjCard p={p} linkLabel={linkLabel} />
          </div>
        ))}
      </div>
    </section>
  );
}
