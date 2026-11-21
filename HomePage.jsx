import { useState } from 'react';
import Icon from './Icon.jsx';
import { Link } from './router.jsx';
import { PORTALS } from './data.js';

const EXPLORE = [['portals', 'layers', 'Portals', 'Student, staff and admin'], ['about', 'info', 'About', 'Who we are'],
  ['contact', 'help', 'Support', 'Talk to a desk'], ['faq', 'file', 'FAQ', 'Quick answers']];

export default function HomePage({ onOpen }) {
  const [tab, setTab] = useState('student');
  const p = PORTALS[tab];
  return (
    <div className="home">
      <div className="cloud c1" /><div className="cloud c2" />
      <div className="wrap hero">
        <div className="hero-copy">
          <p className="pill"><Icon n="shield" className="sm" /> Secure campus portal</p>
          <h1>Your whole campus, on one calm screen.</h1>
          <p className="lead">Classes, marks, fees, leave and records for students, staff and administrators. Pick your portal and carry on.</p>
          <div className="cta">
            <button className="btn btn-amber" onClick={() => onOpen(tab)}>Open {p.label.toLowerCase()} dashboard <Icon n="arrow" className="sm" /></button>
            <Link to="contact" className="btn btn-ghost">Get support</Link>
          </div>
          <ul className="facts"><li><b>3</b> portals</li><li><b>18</b> modules</li><li><b>1</b> login</li></ul>
        </div>
        <div className="switcher" style={{ '--accent': p.color }}>
          <div className="tabs" role="tablist">
            {Object.entries(PORTALS).map(([k, v]) => (
              <button key={k} role="tab" aria-selected={tab === k} className="tab" style={{ '--accent': v.color }} onClick={() => setTab(k)}><Icon n={v.icon} />{v.label}</button>
            ))}
          </div>
          <p className="sw-intro">{p.blurb}</p>
          <div className="grid" key={tab}>
            {p.mods.map(([ic, t, d]) => (
              <button className="mod" key={t} onClick={() => onOpen(tab)}>
                <span className="mi"><Icon n={ic} /></span><span><b>{t}</b><small>{d}</small></span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap explore">
        {EXPLORE.map(([to, ic, t, d]) => (
          <Link key={to} to={to} className="q"><Icon n={ic} /><b>{t}</b><small>{d}</small></Link>
        ))}
      </div>
    </div>
  );
}
