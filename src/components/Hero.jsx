import { useI18n } from '../i18n.jsx';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section className="hero">
      <h1>Nelson Vargas</h1>
      <p className="hero-subtitle" data-i18n="hero.subtitle">{t.hero.subtitle}</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/nelsonvargas-dev/" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <LinkedInIcon sx={{ fontSize: 32 }} />
        </a>
        <a href="https://github.com/NelsonVargas04" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
          <GitHubIcon sx={{ fontSize: 32 }} />
        </a>
        <a href="mailto:var.nelson15@gmail.com" className="social-link" title="Email">
          <EmailIcon sx={{ fontSize: 32 }} />
        </a>
        <a href="/nelson-vargas-cv.pdf" className="social-link" target="_blank" rel="noopener noreferrer" title="Resume / CV">
          <DescriptionIcon sx={{ fontSize: 32 }} />
        </a>
      </div>
      <div className="scroll-indicator"></div>
    </section>
  );
}