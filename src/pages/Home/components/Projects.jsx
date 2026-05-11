import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Reveal, RevealGroup, RevealItem, fadeUp, scaleIn } from '../../../components/Motion.jsx';
import AnimatedTitle from '../../../components/AnimatedTitle.jsx';

function ProjCard({ p, linkLabel }) {
  const [imgError, setImgError] = useState(false);
  const ref = useRef(null);

  // Tilt state
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [6, -6]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-6, 6]), {
    stiffness: 250,
    damping: 25,
  });

  const glowX = useTransform(mouseX, (v) => `${v * 100}%`);
  const glowY = useTransform(mouseY, (v) => `${v * 100}%`);

  function handleMouseMove(e) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  function handleCardClick(e) {
    // Don't fire if user clicked a button/link inside the card.
    if (e.target.closest('a,button')) return;
    if (!p.url) return;
    window.open(p.url, '_blank', 'noopener,noreferrer');
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (p.url) window.open(p.url, '_blank', 'noopener,noreferrer');
    }
  }

  return (
    <motion.div
      ref={ref}
      className="proj-card"
      role="link"
      tabIndex={0}
      aria-label={`Abrir proyecto ${p.name}${p.nameEm}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1200,
        cursor: 'pointer',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Magnetic glow follows cursor */}
      <motion.div
        className="proj-card-glow"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) => `radial-gradient(420px circle at ${x} ${y}, ${p.accent}, transparent 60%)`
          ),
        }}
      />
      <div className="proj-card-img">
        {!imgError ? (
          <img
            src={p.img}
            alt={p.name + p.nameEm}
            onError={() => setImgError(true)}
            style={p.imgFit ? { objectFit: p.imgFit } : undefined}
          />
        ) : (
          <div className="proj-card-placeholder">
            <span>
              {p.name}
              {p.nameEm}
            </span>
          </div>
        )}
        <span className="proj-card-badge">{p.cat}</span>
      </div>
      <div className="proj-card-body">
        <div className="proj-card-name">
          {p.name}
          <em>{p.nameEm}</em>
        </div>
        <p className="proj-card-desc">{p.desc}</p>
        <div className="proj-card-tags">
          {p.tags.map((tag) => (
            <span className="proj-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="proj-card-actions">
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {linkLabel} →
          </a>
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects({ projects, label, title, linkLabel }) {
  return (
    <section id="projects" className="section">
      <Reveal variant={fadeUp}>
        <div className="sec-label">{label}</div>
      </Reveal>
      <AnimatedTitle html={title} className="sec-title" />

      <RevealGroup className="proj-grid">
        {projects.map((p, i) => (
          <RevealItem key={i} variant={scaleIn}>
            <ProjCard p={p} linkLabel={linkLabel} />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
