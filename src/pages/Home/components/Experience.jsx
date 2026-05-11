import { motion } from 'framer-motion';
import { Reveal, RevealGroup, RevealItem, fadeUp, fadeLeft, fadeRight } from '../../../components/Motion.jsx';
import AnimatedTitle from '../../../components/AnimatedTitle.jsx';

const bullet = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};
const tag = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience({ experience }) {
  const { dateStart, present, company, location, stack, role, bullets, label, title } = experience;

  return (
    <section id="experience" className="section">
      <Reveal>
        <div className="sec-label">{label}</div>
      </Reveal>
      <AnimatedTitle html={title} className="sec-title" />

      <div className="exp-layout">
        <Reveal variant={fadeLeft} className="exp-tabs">
          <button className="exp-tab active">{company}</button>
        </Reveal>

        <Reveal variant={fadeRight}>
          <div className="exp-content-title">{role}</div>
          <div className="exp-content-company">{company} — {location}</div>
          <div className="exp-content-period">{dateStart} — {present}</div>

          <motion.ul
            className="exp-bullets"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
          >
            {bullets.map((b, i) => (
              <motion.li key={i} variants={bullet}>{b}</motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="exp-stack-tags"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
          >
            {stack.map((s) => (
              <motion.span className="exp-stack-tag" key={s} variants={tag}>{s}</motion.span>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
