import { motion } from 'framer-motion';
import { Reveal, RevealGroup, RevealItem, fadeRight, fadeUp } from '../../../components/Motion.jsx';
import AnimatedTitle from '../../../components/AnimatedTitle.jsx';

export default function Contact({ contact }) {
  return (
    <section id="contact" className="section">
      <div className="contact-grid">
        <div>
          <Reveal>
            <div className="sec-label">{contact.label}</div>
          </Reveal>
          <AnimatedTitle html={contact.title} className="sec-title" />
          <Reveal variant={fadeUp}>
            <p className="contact-tagline">{contact.tagline}</p>
          </Reveal>
        </div>

        <Reveal variant={fadeRight}>
          <div className="contact-big" dangerouslySetInnerHTML={{ __html: contact.big }} />
          <RevealGroup className="contact-links">
            {[
              { href: 'mailto:var.nelson15@gmail.com', label: 'Email', value: 'var.nelson15@gmail.com', external: false },
              { href: 'https://www.linkedin.com/in/nelsonvargas-dev/', label: 'LinkedIn', value: contact.linkedinSub, external: true },
              { href: 'https://github.com/NelsonVargas04', label: 'GitHub', value: 'github.com/NelsonVargas04', external: true },
            ].map((l) => (
              <RevealItem key={l.label} variant={fadeUp}>
                <motion.a
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener noreferrer' : undefined}
                  className="contact-link"
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <div>
                    <div className="contact-link-label">{l.label}</div>
                    <div className="contact-link-value">{l.value}</div>
                  </div>
                  <span className="contact-arr">→</span>
                </motion.a>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
