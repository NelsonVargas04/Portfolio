export default function Experience({ experience }) {
  const { dateStart, present, company, location, stack, stackLabel, role, bullets } = experience;
  return (
    <section id="experience" className="section">
      <div className="sec-header">
        <div className="sec-label">{experience.label}</div>
        <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: experience.title }} />
      </div>
      <div className="exp-grid">
        <div>
          <div className="exp-date">{dateStart} — {present}</div>
          <div className="exp-stack-label">{stackLabel}</div>
          {stack.map(s => (
            <div className="exp-stack-item" key={s}>{s}</div>
          ))}
        </div>
        <div>
          <div className="exp-role">{role}</div>
          <div className="exp-company">{company} — {location}</div>
          <ul className="exp-bullets">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
