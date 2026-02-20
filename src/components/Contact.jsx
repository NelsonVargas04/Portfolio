import { useI18n } from '../i18n.jsx';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BrushIcon from '@mui/icons-material/Brush';

export default function Contact() {
  const { t } = useI18n();
  return (
    <section id="contacto" className="contact">
      <div className="contact-content">
        <h2>{t.contact.title}</h2>
        <div className="contact-info">
          <a href="mailto:var.nelson15@gmail.com" className="contact-item">
            <EmailIcon sx={{ fontSize: 20, marginRight: '8px', verticalAlign: 'middle' }} />
            var.nelson15@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/nelsonvargas-dev/" className="contact-item" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ fontSize: 20, marginRight: '8px', verticalAlign: 'middle' }} />
            LinkedIn
          </a>
          <a href="https://github.com/NelsonVargas04" className="contact-item" target="_blank" rel="noopener noreferrer">
            <GitHubIcon sx={{ fontSize: 20, marginRight: '8px', verticalAlign: 'middle' }} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}