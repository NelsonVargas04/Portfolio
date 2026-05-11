import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const heroName = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const linksContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

export default function Hero({ hero }) {
  return (
    <section id="hero">
      <motion.div className="hero-eyebrow" initial="hidden" animate="visible" variants={fadeUp}>
        <span className="hero-dot" />
        <span>{hero.eyebrow}</span>
      </motion.div>

      <div className="hero-body">
        <motion.div className="hero-name" initial="hidden" animate="visible" variants={heroName}>
          <span className="hero-outline">NELSON</span>
          <span className="hero-solid">
            VAR<span className="hero-underline-wrap">
              <span className="name-accent">GAS</span>
              <span className="hero-underline" />
            </span>
          </span>
        </motion.div>

        <div className="hero-right-panel">
          <motion.div className="hero-links" initial="hidden" animate="visible" variants={linksContainer}>
            <motion.a href="https://www.linkedin.com/in/nelsonvargas-dev/" target="_blank" rel="noopener noreferrer" className="hero-link" variants={fadeUp} whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <span>linkedin.com/in/nelsonvargas-dev</span>
              <span className="hero-link-arrow">→</span>
            </motion.a>
            <motion.a href="https://github.com/NelsonVargas04" target="_blank" rel="noopener noreferrer" className="hero-link" variants={fadeUp} whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <span>GitHub</span>
              <span className="hero-link-arrow">→</span>
            </motion.a>
            <motion.a href="mailto:var.nelson15@gmail.com" className="hero-link" variants={fadeUp} whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <span>var.nelson15@gmail.com</span>
              <span className="hero-link-arrow">→</span>
            </motion.a>
            <motion.a href={hero.cvUrl} target="_blank" rel="noopener noreferrer" className="hero-link" variants={fadeUp} whileHover={{ x: 6 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <span>{hero.resume}</span>
              <span className="hero-link-arrow">→</span>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.div className="hero-footer" initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.4 }}>
        <div className="hero-role-block">
          <strong>{hero.role}</strong>
          <span>{hero.stack}</span>
          <div className="scroll-hint">
            <span className="scroll-hint-label">{hero.scroll}</span>
            <span className="scroll-hint-line" />
          </div>
        </div>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-n">3<em>+</em></div>
            <div className="hero-stat-l">{hero.years}</div>
          </div>
          <div>
            <div className="hero-stat-n">20<em>+</em></div>
            <div className="hero-stat-l">{hero.technologies}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
