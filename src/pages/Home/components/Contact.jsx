export default function Contact({ contact }) {
  return (
    <section id="contact" className="section">
      <div className="sec-header">
        <div className="sec-label">{contact.label}</div>
        <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: contact.title }} />
      </div>
      <div className="contact-grid">
        <div>
          <div className="contact-big" dangerouslySetInnerHTML={{ __html: contact.big }} />
          <p className="contact-note">{contact.note}</p>
        </div>
        <div className="contact-links">
          <a href="mailto:var.nelson15@gmail.com" className="contact-link">
            <div>
              <div className="contact-name">Email</div>
              <div className="contact-sub">var.nelson15@gmail.com</div>
            </div>
            <span className="contact-arr">→</span>
          </a>
          <a href="https://www.linkedin.com/in/nelsonvargas-dev/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div>
              <div className="contact-name">LinkedIn</div>
              <div className="contact-sub">{contact.linkedinSub}</div>
            </div>
            <span className="contact-arr">→</span>
          </a>
          <a href="https://github.com/NelsonVargas04" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div>
              <div className="contact-name">GitHub</div>
              <div className="contact-sub">{contact.githubSub}</div>
            </div>
            <span className="contact-arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
