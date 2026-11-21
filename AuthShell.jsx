import Brand from './Brand.jsx';
import Icon from './Icon.jsx';
import { PORTALS } from './data.js';

export default function AuthShell({ role, children }) {
  const p = PORTALS[role];
  return (
    <div className="auth">
      <aside className="auth-side">
        <div className="cloud c1" /><div className="cloud c2" />
        <Brand light />
        <div className="auth-copy">
          <h2>{p.head}</h2>
          <p>{p.sub}</p>
          <ul>{p.perks.map(([ic, t]) => <li key={t}><Icon n={ic} />{t}</li>)}</ul>
        </div>
        <p className="auth-foot"><Icon n="shield" className="sm" /> Demo preview. No details are stored or sent anywhere.</p>
      </aside>
      <section className="auth-main"><div className="auth-card">{children}</div></section>
    </div>
  );
}
