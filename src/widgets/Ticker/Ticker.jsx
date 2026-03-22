import { SKILLS } from '../../models/skills.js';

function TickerRow() {
  return (
    <div className="ticker-item">
      {SKILLS.map((s, i) => (
        <span key={i}>
          {s}
          {i < SKILLS.length - 1 && <span className="ticker-sep"> ✦ </span>}
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker-section">
      <div className="ticker-track">
        <div className="ticker-inner">
          <TickerRow />
          <TickerRow />
        </div>
      </div>
    </div>
  );
}
