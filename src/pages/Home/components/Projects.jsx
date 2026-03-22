import { useState } from 'react';

function MockScreen({ accentColor }) {
  return (
    <div className="proj-shot-placeholder">
      <div className="proj-shot-bar">
        <div className="proj-dot" style={{ background: '#ff5f57' }}></div>
        <div className="proj-dot" style={{ background: '#ffbd2e' }}></div>
        <div className="proj-dot" style={{ background: '#28c840' }}></div>
      </div>
      <div className="proj-shot-body">
        <div className="proj-shot-line" style={{ width: '60%', background: accentColor }}></div>
        <div className="proj-shot-line" style={{ width: '85%' }}></div>
        <div className="proj-shot-line" style={{ width: '40%' }}></div>
        <div className="proj-shot-line" style={{ width: '70%', marginTop: '6px' }}></div>
        <div className="proj-shot-line" style={{ width: '90%' }}></div>
        <div className="proj-shot-line" style={{ width: '55%' }}></div>
      </div>
    </div>
  );
}

function ProjShot({ img, alt, accentColor, url }) {
  const [imgError, setImgError] = useState(false);
  return (
    <a className="proj-shot" href={url} target="_blank" rel="noopener noreferrer">
      {!imgError
        ? <img src={img} alt={alt} onError={() => setImgError(true)} />
        : <MockScreen accentColor={accentColor} />
      }
    </a>
  );
}

export default function Projects({ projects, label, title, linkLabel }) {
  return (
    <section id="projects" className="section">
      <div className="sec-header">
        <div className="sec-label">{label}</div>
        <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className="proj-list">
        {projects.map((p, i) => (
          <div className={`proj-card${p.alt ? ' alt' : ''}`} key={i}>
            <ProjShot img={p.img} alt={p.name + p.nameEm} accentColor={p.accent} url={p.url} />
            <div className="proj-info">
              <div>
                <div className="proj-cat">{p.cat}</div>
                <div className="proj-name">{p.name}<em>{p.nameEm}</em></div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map(tag => <span className="proj-tag" key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="proj-actions">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-view">{linkLabel} →</a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-gh">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
