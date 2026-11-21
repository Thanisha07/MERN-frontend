import Icon from './Icon.jsx';
import { PORTALS } from './data.js';

export default function PortalsPage({ onOpen }) {
  return (
    <div className="wrap">
      <header className="ph"><h1>Three portals, one login</h1><p>Each role sees only what it needs. Open a preview of any portal.</p></header>
      <div className="pcols">
        {Object.entries(PORTALS).map(([k, p]) => (
          <article className="pcard" key={k} style={{ '--accent': p.color }}>
            <span className="pic"><Icon n={p.icon} /></span>
            <h2>{p.label} portal</h2>
            <p>{p.blurb}</p>
            <ul>{p.mods.map(([ic, t]) => <li key={t}><Icon n={ic} className="sm" />{t}</li>)}</ul>
            <button className="btn btn-block" style={{ '--on': p.on }} onClick={() => onOpen(k)}>Preview dashboard</button>
          </article>
        ))}
      </div>
    </div>
  );
}
