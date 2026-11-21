import { useState } from 'react';
import AuthShell from './AuthShell.jsx';
import RoleTabs from './RoleTabs.jsx';
import PasswordField from './PasswordField.jsx';
import Icon from './Icon.jsx';
import { Link } from './router.jsx';
import { PORTALS } from './data.js';
import { idError, pwError, emailOk, RULES, check, strength } from './validate.js';
import { register } from './api.js';

export default function SignupPage({ role, setRole, onAuth }) {
  const p = PORTALS[role];
  const [f, setF] = useState({ name: '', mail: '', id: '', pw: '', pw2: '', agree: false });
  const [err, setErr] = useState({});
  const [busy, setBusy] = useState(false);
  const set = (k) => (v) => setF((s) => ({ ...s, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    if (f.name.trim().length < 2) er.name = 'Enter your full name.';
    if (!emailOk(f.mail)) er.mail = 'Enter a valid email address.';
    const a = idError(f.id, p.idLabel); if (a) er.id = a;
    const b = pwError(f.pw); if (b) er.pw = b;
    if (!er.pw && f.pw !== f.pw2) er.pw2 = 'The passwords do not match.';
    if (!f.agree) er.agree = 'Please accept the terms and privacy policy to continue.';
    setErr(er);
    if (Object.keys(er).length) return;
    setBusy(true);
    try {
      onAuth(await register({
        name: f.name.trim(),
        email: f.mail.trim(),
        id: f.id.trim(),
        password: f.pw,
        role
      }));
    } catch (error) {
      setErr({ form: error.message });
    } finally {
      setBusy(false);
    }
  };
  const text = (k, label, icon, extra = {}) => (
    <div className="fg">
      <label className="lbl" htmlFor={'s' + k}>{label}</label>
      <div className="field"><Icon n={icon} />
        <input id={'s' + k} value={f[k]} onChange={(e) => set(k)(e.target.value)} aria-invalid={err[k] ? 'true' : undefined} {...extra} /></div>
      {err[k] && <p className="err" role="alert">{err[k]}</p>}
    </div>
  );

  return (
    <AuthShell role={role}>
      <h1>Create your account</h1>
      <p className="sub">It takes a minute. Pick your portal first.</p>
      <RoleTabs role={role} onChange={setRole} />
      <form onSubmit={submit} noValidate className="two">
        {text('name', 'Full name', 'user', { autoComplete: 'name' })}
        {text('mail', 'Email', 'mail', { type: 'email', autoComplete: 'email' })}
        {text('id', p.idLabel, 'file', { placeholder: p.idPh, maxLength: 20, spellCheck: false })}
        <PasswordField id="spw" label="Password" value={f.pw} onChange={set('pw')} error={err.pw} autoComplete="new-password" />
        <PasswordField id="spw2" label="Confirm password" value={f.pw2} onChange={set('pw2')} error={err.pw2} autoComplete="new-password" />
        <PasswordRulesOnly value={f.pw} bad={!!err.pw} />
        <label className="chk full">
          <input type="checkbox" checked={f.agree} onChange={(e) => set('agree')(e.target.checked)} />
          <span>I agree to the <Link to="terms">Terms and conditions</Link> and <Link to="privacy">Privacy policy</Link></span>
        </label>
        {err.agree && <p className="err full" role="alert">{err.agree}</p>}
        {err.form && <p className="err full" role="alert">{err.form}</p>}
        <button className="btn btn-block full" type="submit" disabled={busy}>{busy ? <><span className="spin" />Creating account…</> : 'Create account'}</button>
      </form>
      <p className="swap">Already registered? <Link to="login">Sign in</Link></p>
    </AuthShell>
  );
}

function PasswordRulesOnly({ value, bad }) {
  const res = check(value), s = strength(value);
  return (
    <div className="fg full">
      <div className="meter" data-s={s} aria-hidden="true"><i /><i /><i /><i /><span>{['', 'Weak', 'Fair', 'Good', 'Strong'][s]}</span></div>
      <ul className="rules" aria-label="Password requirements">
        {RULES.map((r) => <li key={r.k} className={value && res[r.k] ? 'ok' : value && bad ? 'bad' : ''}>{r.label}</li>)}
      </ul>
    </div>
  );
}
