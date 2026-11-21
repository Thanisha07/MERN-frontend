import Icon from './Icon.jsx';
import { Link } from './router.jsx';

export default function Brand({ light = false }) {
  return (
    <Link to="home" className={'brand' + (light ? ' brand-w' : '')} aria-label="Megha Institutions">
      <span className="mark"><Icon n="cloud" /></span>
      <span className="brand-t"><strong>MEGHA INSTITUTIONS</strong><small>College of Technology</small></span>
    </Link>
  );
}
