import Icon from './Icon.jsx';
import { PORTALS } from './data.js';

export default function RoleTabs({ role, onChange }) {
  return (
    <div className="rtabs" role="tablist" aria-label="Portal">
      {Object.entries(PORTALS).map(([k, p]) => (
        <button key={k} type="button" role="tab" aria-selected={role === k} className="rtab" onClick={() => onChange(k)}>
          <Icon n={p.icon} />{p.label}
        </button>
      ))}
    </div>
  );
}
