import Icon from './Icon.jsx';
import RoleTabs from './RoleTabs.jsx';
import { DASH, PORTALS } from './data.js';

export default function DashboardPage({ role, setRole, user }) {
  const d = DASH[role], p = PORTALS[role];
  const h = new Date().getHours();
  const hi = h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
  const name = (user && user.role === role ? user.name : p.demoName).split(' ')[0];
  return (
    <div className="wrap dash">
      <header className="dash-top">
        <div><p className="eyebrow">{p.label} dashboard · sample data</p><h1>{hi}, {name}</h1></div>
        <RoleTabs role={role} onChange={setRole} />
      </header>
      <div className="stats">
        {d.stats.map(([t, v, ic]) => <div className="stat" key={t}><small>{t}</small><b>{v}</b><Icon n={ic} /></div>)}
      </div>
      <div className="dcols">
        <section className="card"><h2>{d.chartT}</h2>
          <div className="bars">{d.chart.map(([n, v]) => (
            <div className="bar" key={n}><span>{n}</span><i style={{ '--w': v + '%' }} /><b>{v}%</b></div>))}</div></section>
        <section className="card"><h2>{d.listT}</h2>
          <ul className="list">{d.list.map(([t, a, b]) => <li key={a}><time>{t}</time><span>{a}</span><small>{b}</small></li>)}</ul></section>
        <section className="card"><h2>Notices</h2>
          <ul className="list nl">{d.notices.map((n) => <li key={n}><Icon n="bell" className="sm" />{n}</li>)}</ul></section>
      </div>
    </div>
  );
}
