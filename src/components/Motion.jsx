import { motion } from 'framer-motion';

// ── Variants ────────────────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const staggerContainerSlow = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// ── Components ──────────────────────────────────────────────

export function Reveal({
  as = 'div',
  variant = fadeUp,
  amount = 0.2,
  className,
  style,
  children,
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variant}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}

export function RevealGroup({
  as = 'div',
  amount = 0.15,
  stagger = staggerContainer,
  className,
  style,
  children,
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={stagger}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ as = 'div', variant = fadeUp, className, style, children }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag variants={variant} className={className} style={style}>
      {children}
    </Tag>
  );
}
