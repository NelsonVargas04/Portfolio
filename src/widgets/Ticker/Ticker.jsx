import { SKILLS } from '../../models/skills.js';

function MarqueeRow() {
  return (
    <span>
      {SKILLS.map((s, i) => (
        <span key={i} className="marquee-item">
          {s}
          {i < SKILLS.length - 1 && <span className="marquee-sep">✦</span>}
        </span>
      ))}
    </span>
  );
}

export default function Ticker() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-inner">
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </div>
  );
}
