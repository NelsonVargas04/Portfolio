import { useI18n } from '../i18n.jsx';

function ShopARPreview() {
  return (
    <img
      src="/shop.ar.png"
      alt="Shop.ar"
      style={{
        width: '100%', height: '100%',
        objectFit: 'cover', borderRadius: '8px',
        display: 'block'
      }}
    />
  );
}

function SplitAppPreview() {
  return (
    <img
      src="/splitapp.png"
      alt="SplitApp"
      style={{
        width: '100%', height: '100%',
        objectFit: 'cover', borderRadius: '8px',
        display: 'block'
      }}
    />
  );
}

function PassKeyPreview() {
  return (
    <img
      src="/PassKey.png"
      alt="PassKey"
      style={{
        width: '100%', height: '100%',
        objectFit: 'cover', borderRadius: '8px',
        display: 'block'
      }}
    />
  );
}

export default function Projects() {
  const { t } = useI18n();
  const projects = [
    { category: t.projects.category1, name: t.projects.name1, desc: t.projects.desc1, preview: <ShopARPreview />, url: 'https://shop-ro6blzxvv-nelsons-projects-c499b28f.vercel.app/', github: 'https://github.com/NelsonVargas04/shop.ar' },
    { category: t.projects.category2, name: t.projects.name2, desc: t.projects.desc2, preview: <SplitAppPreview />, url: 'https://splitapp-demo.com', github: 'https://github.com/nvargasdev/splitapp' },
    { category: t.projects.category3, name: t.projects.name3, desc: t.projects.desc3, preview: <PassKeyPreview />, url: 'https://password-generator-3kjsq6wg3-nelsons-projects-c499b28f.vercel.app', github: 'https://github.com/NelsonVargas04/Password-generator' },
  ];
  return (
    <section id="proyectos" className="projects">
      <h2 className="section-title">{t.projects.title}</h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <article className="project-item" key={i}>
            <div className="project-image">
              {p.preview}
            </div>
            <div className="project-info">
              <div className="project-category">{p.category}</div>
              <h3>{p.name}</h3>
              <p className="project-description">{p.desc}</p>
              <div className="project-links">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="project-link">{t.projects.link}</a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">{t.projects.github}</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
