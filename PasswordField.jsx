import { useState } from 'react';
import Icon from './Icon.jsx';
import { RULES, check, strength } from './validate.js';

export default function PasswordField({ id, label, value, onChange, error, rules = false, autoComplete, extra }) {
  const [show, setShow] = useState(false);
  const [caps, setCaps] = useState(false);
  const res = check(value);
  const s = strength(value);
  const onKey = (e) => setCaps(!!(e.getModifierState && e.getModifierState('CapsLock')));
  return (
    <div className="fg">
      <div className="lbl-row"><label className="lbl" htmlFor={id}>{label}</label>{extra}</div>
      <div className="field">
        <Icon n="lock" />
        <input id={id} type={show ? 'text' : 'password'} value={value} maxLength={64} autoComplete={autoComplete}
          aria-invalid={error ? 'true' : undefined} onChange={(e) => onChange(e.target.value)}
          onKeyUp={onKey} onKeyDown={onKey} onBlur={() => setCaps(false)} />
        <button type="button" className="eye" aria-label={show ? 'Hide password' : 'Show password'} aria-pressed={show} onClick={() => setShow(!show)}>
          <Icon n={show ? 'eyeoff' : 'eye'} />
        </button>
      </div>
      {caps && <p className="caps"><Icon n="alert" className="sm" /> Caps Lock is on</p>}
      {error && <p className="err" role="alert">{error}</p>}
      {rules && (
        <>
          <div className="meter" data-s={s} aria-hidden="true"><i /><i /><i /><i /><span>{['', 'Weak', 'Fair', 'Good', 'Strong'][s]}</span></div>
          <ul className="rules" aria-label="Password requirements">
            {RULES.map((r) => <li key={r.k} className={value && res[r.k] ? 'ok' : value && error ? 'bad' : ''}>{r.label}</li>)}
          </ul>
        </>
      )}
    </div>
  );
}
