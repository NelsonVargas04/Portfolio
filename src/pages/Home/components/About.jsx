import { Reveal, RevealGroup, RevealItem, fadeLeft, scaleIn } from '../../../components/Motion.jsx';
import AnimatedTitle from '../../../components/AnimatedTitle.jsx';

export default function About({ about }) {
  return (
    <section id="about" className="section">
      <Reveal>
        <div className="sec-label">{about.label}</div>
      </Reveal>
      <AnimatedTitle html={about.title} className="sec-title" />

      <div className="about-grid">
        <Reveal variant={fadeLeft}>
          <p className="about-bio" dangerouslySetInnerHTML={{ __html: about.bio }} />
          <blockquote className="about-quote">{about.quote}</blockquote>
        </Reveal>

        <RevealGroup className="about-stats">
          <RevealItem variant={scaleIn} className="about-stat">
            <div className="about-stat-n">3<em>+</em></div>
            <div className="about-stat-l">{about.stat1}</div>
          </RevealItem>
          <RevealItem variant={scaleIn} className="about-stat">
            <div className="about-stat-n">20<em>+</em></div>
            <div className="about-stat-l">{about.stat2}</div>
          </RevealItem>
          <RevealItem variant={scaleIn} className="about-stat full">
            <div className="about-stat-n">JS</div>
            <div className="about-stat-l">{about.stat3}</div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
