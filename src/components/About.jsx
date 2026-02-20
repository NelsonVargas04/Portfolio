import { useI18n } from '../i18n.jsx';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import GroupsIcon from '@mui/icons-material/Groups';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <h2>{t.about.title}</h2>
          <p className="about-bio">{t.about.bio}</p>
        </div>

        {/* What I Bring */}
        <div className="value-section">
          <h3 className="subsection-title">{t.about.whatIBringTitle}</h3>
          <div className="value-grid">
            <div className="value-card">
              <div className="value-icon"><GroupsIcon sx={{ fontSize: 28, color: 'var(--accent)' }} /></div>
              <h4>{t.about.bring1Title}</h4>
              <p>{t.about.bring1Desc}</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><SmartToyIcon sx={{ fontSize: 28, color: 'var(--accent)' }} /></div>
              <h4>{t.about.bring2Title}</h4>
              <p>{t.about.bring2Desc}</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><RocketLaunchIcon sx={{ fontSize: 28, color: 'var(--accent)' }} /></div>
              <h4>{t.about.bring3Title}</h4>
              <p>{t.about.bring3Desc}</p>
            </div>
          </div>
          <p className="closing-bio">{t.about.closingBio}</p>
        </div>

       
        <div className="experience-section">
          <h3 className="subsection-title">
            <WorkIcon sx={{ fontSize: 24, marginRight: '10px', color: 'var(--accent)' }} />
            {t.about.experienceTitle}
          </h3>
          <div className="timeline">
          
            <div className="timeline-item">
              <div className="timeline-dot current">
                <GroupsIcon sx={{ fontSize: 16 }} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Frontend Developer</h4>
                  <span className="timeline-badge current">{t.about.current}</span>
                </div>
                <div className="timeline-company">Vela One — California, USA</div>
                <div className="timeline-date">2023 — {t.about.present}</div>
                <ul className="timeline-details">
                  <li>{t.about.exp1a}</li>
                  <li>{t.about.exp1b}</li>
                  <li>{t.about.exp1c}</li>
                  <li>{t.about.exp1d}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h3 className="subsection-title">
            <CodeIcon sx={{ fontSize: 24, marginRight: '10px', color: 'var(--accent)' }} />
            {t.about.skillsTitle}
          </h3>
          <div className="skills-grid">
            {[
              'HTML', 'CSS / Sass / Less', 'JavaScript', 'TypeScript',
              'React.js', 'React Native', 'Redux', 'Zustand',
              'React Suite', 'TanStack Query', 'GraphQL', 'Node.js',
              'Sequelize', 'PostgreSQL', 'IndexDB', 'Vite', 'Git',
              'npm / yarn', 'Scrum', 'Python',
              'AI / Prompt Engineering', 'LLM Integration'
            ].map((skill) => (
              <span className="skill-tag" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}