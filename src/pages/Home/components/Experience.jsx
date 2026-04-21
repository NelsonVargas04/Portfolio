import { useScrollReveal } from '../../../hooks/useScrollReveal.js';

export default function Experience({ experience }) {
  const { dateStart, present, company, location, stack, role, bullets, label, title } = experience;
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="reveal">
        <div className="sec-label">{label}</div>
        <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: title }} />
      </div>

      <div className="exp-layout">
        <div className="exp-tabs reveal reveal-delay-1">
          <button className="exp-tab active">{company}</button>
        </div>

        <div className="reveal reveal-delay-2">
          <div className="exp-content-title">{role}</div>
          <div className="exp-content-company">{company} — {location}</div>
          <div className="exp-content-period">{dateStart} — {present}</div>
          <ul className="exp-bullets">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="exp-stack-tags">
            {stack.map(s => <span className="exp-stack-tag" key={s}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
