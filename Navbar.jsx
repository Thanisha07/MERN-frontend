import { useState } from 'react';
import Brand from './Brand.jsx';
import Icon from './Icon.jsx';
import { Link } from './router.jsx';

const MAIN = [['home', 'Home'], ['portals', 'Portals'], ['about', 'About'], ['contact', 'Contact'], ['faq', 'FAQ'], ['terms', 'Terms'], ['privacy', 'Privacy']];
const PUBLIC = [['faq', 'FAQ'], ['terms', 'Terms'], ['privacy', 'Privacy']];

export default function Navbar({ route, user, onSignOut }) {
  const [open, setOpen] = useState(false);
  const links = user ? MAIN : PUBLIC;
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="nav-in">
        <Brand />
        <nav className={'links' + (open ? ' open' : '')} aria-label="Main">
          {links.map(([to, label]) => (
            <Link key={to} to={to} className={route === to ? 'active' : ''} onClick={close}>{label}</Link>
          ))}
        </nav>
        <div className={'nav-cta' + (open ? ' open' : '')}>
          {user ? (
            <>
              <Link to="dashboard" className="btn btn-dark" onClick={close}><Icon n="layers" />My dashboard</Link>
              <button className="btn btn-line" onClick={() => { close(); onSignOut(); }}><Icon n="out" />Sign out</button>
            </>
          ) : (
            <>
              <Link to="login" className="btn btn-line" onClick={close}>Sign in</Link>
              <Link to="signup" className="btn btn-dark" onClick={close}>Create account</Link>
            </>
          )}
        </div>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><Icon n={open ? 'x' : 'menu'} /></button>
      </div>
    </header>
  );
}
