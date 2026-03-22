export default function About({ about }) {
  return (
    <section id="about" className="section">
      <div className="sec-header">
        <div className="sec-label">{about.label}</div>
        <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: about.title }} />
      </div>
      <div className="about-grid">
        <div>
          <p className="about-bio" dangerouslySetInnerHTML={{ __html: about.bio }} />
          <br />
          <blockquote className="about-quote">{about.quote}</blockquote>
        </div>
        <div className="about-side">
          <div className="about-stat">
            <div className="about-stat-n">3<em>+</em></div>
            <div className="about-stat-l">{about.stat1}</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-n">20<em>+</em></div>
            <div className="about-stat-l">{about.stat2}</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-n">JS</div>
            <div className="about-stat-l">{about.stat3}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
