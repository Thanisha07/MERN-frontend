import { useState } from 'react';
import Icon from './Icon.jsx';

/* Shows one section at a time so the page never needs to scroll. Used by FAQ, Terms and Privacy. */
export default function DocLayout({ icon, title, intro, note, items }) {
  const [i, setI] = useState(0);
  const it = items[i];
  return (
    <div className="wrap doc">
      <header className="doc-h">
        <span className="cic"><Icon n={icon} /></span>
        <div><h1>{title}</h1><p>{intro}</p></div>
      </header>
      <div className="doc-b">
        <nav className="doc-l" aria-label={title}>
          {items.map((x, k) => (
            <button key={x.title} aria-current={k === i ? 'true' : undefined} onClick={() => setI(k)}><b>{k + 1}</b><span>{x.title}</span></button>
          ))}
        </nav>
        <article className="doc-r">
          <h2>{it.title}</h2>
          {it.body.map((p) => <p key={p}>{p}</p>)}
          <div className="doc-n">
            <button className="btn btn-line" disabled={i === 0} onClick={() => setI(i - 1)}>Previous</button>
            <span>{i + 1} of {items.length}</span>
            <button className="btn btn-dark" disabled={i === items.length - 1} onClick={() => setI(i + 1)}>Next</button>
          </div>
        </article>
      </div>
      {note && <p className="doc-note"><Icon n="info" className="sm" /> {note}</p>}
    </div>
  );
}
