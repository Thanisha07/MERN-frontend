import { useState, useEffect } from 'react';

export const ROUTES = ['login', 'signup', 'home', 'portals', 'about', 'contact', 'faq', 'terms', 'privacy', 'dashboard'];
const read = () => { const h = location.hash.slice(1); return ROUTES.includes(h) ? h : null; };

export function useRoute() {
  const [route, setRoute] = useState(read());
  useEffect(() => {
    const on = () => setRoute(read());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}
export const go = (to) => { location.hash = '#' + to; };
export function Link({ to, children, ...rest }) { return <a href={'#' + to} {...rest}>{children}</a>; }
