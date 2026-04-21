import { useScrollReveal } from '../../../hooks/useScrollReveal.js';

export default function Contact({ contact }) {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="contact-grid">
        <div className="reveal">
          <div className="sec-label">{contact.label}</div>
          <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: contact.title }} />
          <p className="contact-tagline">{contact.tagline}</p>
        </div>

        <div className="reveal reveal-delay-1">
          <div className="contact-big" dangerouslySetInnerHTML={{ __html: contact.big }} />
          <div className="contact-links">
            <a href="mailto:var.nelson15@gmail.com" className="contact-link">
              <div>
                <div className="contact-link-label">Email</div>
                <div className="contact-link-value">var.nelson15@gmail.com</div>
              </div>
              <span className="contact-arr">→</span>
            </a>
            <a href="https://www.linkedin.com/in/nelsonvargas-dev/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div>
                <div className="contact-link-label">LinkedIn</div>
                <div className="contact-link-value">{contact.linkedinSub}</div>
              </div>
              <span className="contact-arr">→</span>
            </a>
            <a href="https://github.com/NelsonVargas04" target="_blank" rel="noopener noreferrer" className="contact-link">
              <div>
                <div className="contact-link-label">GitHub</div>
                <div className="contact-link-value">github.com/NelsonVargas04</div>
              </div>
              <span className="contact-arr">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
