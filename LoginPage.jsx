import { useState } from 'react';
import AuthShell from './AuthShell.jsx';
import RoleTabs from './RoleTabs.jsx';
import PasswordField from './PasswordField.jsx';
import Icon from './Icon.jsx';
import { Link } from './router.jsx';
import { PORTALS } from './data.js';
import { idError, pwError, emailOk } from './validate.js';
import { login } from './api.js';

export default function LoginPage({ role, setRole, onAuth }) {
  const p = PORTALS[role];
  const [mode, setMode] = useState('sign');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [mail, setMail] = useState('');
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState({});
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const er = {};
    const a = idError(id, p.idLabel), b = pwError(pw);
    if (a) er.id = a;
    if (b) er.pw = b;
    setErr(er);
    if (a || b) return;
    setBusy(true);
    try {
      onAuth(await login({ role, id: id.trim(), password: pw }));
    } catch (error) {
      setErr({ form: error.message });
    } finally {
      setBusy(false);
    }
  };
  const reset = (e) => { e.preventDefault(); const ok = emailOk(mail); setErr({ mail: ok ? '' : 'Enter a valid email address.' }); setSent(ok); };
  const pick = (r) => { setRole(r); setErr({}); };

  return (
    <AuthShell role={role}>
      {mode === 'sign' ? (
        <>
          <h1>Sign in</h1>
          <p className="sub">Choose your portal and enter your details.</p>
          <RoleTabs role={role} onChange={pick} />
          <form onSubmit={submit} noValidate>
            <div className="fg">
              <label className="lbl" htmlFor="lid">{p.idLabel}</label>
              <div className="field"><Icon n="user" />
                <input id="lid" value={id} placeholder={p.idPh} maxLength={20} autoComplete="username" spellCheck={false}
                  aria-invalid={err.id ? 'true' : undefined} onChange={(e) => setId(e.target.value)} /></div>
              {err.id && <p className="err" role="alert">{err.id}</p>}
            </div>
            <PasswordField id="lpw" label="Password" value={pw} onChange={setPw} error={err.pw} rules autoComplete="current-password"
              extra={<button type="button" className="lnk" onClick={() => { setMode('forgot'); setSent(false); setErr({}); }}>Forgot password?</button>} />
            {err.form && <p className="err" role="alert">{err.form}</p>}
            <button className="btn btn-block" type="submit" disabled={busy}>{busy ? <><span className="spin" />Signing in…</> : 'Sign in'}</button>
          </form>
          <p className="swap">New to Megha? <Link to="signup">Create an account</Link></p>
        </>
      ) : (
        <>
          <h1>Reset password</h1>
          <p className="sub">Enter the email registered with your college account and we will send a reset link.</p>
          <form onSubmit={reset} noValidate>
            <div className="fg">
              <label className="lbl" htmlFor="rm">Registered email</label>
              <div className="field"><Icon n="mail" />
                <input id="rm" type="email" value={mail} autoComplete="email" aria-invalid={err.mail ? 'true' : undefined} onChange={(e) => setMail(e.target.value)} /></div>
              {err.mail && <p className="err" role="alert">{err.mail}</p>}
            </div>
            <button className="btn btn-block" type="submit">Send reset link</button>
            {sent && <p className="ok">If an account exists for that email, a reset link is on its way. This is a demo, so nothing was sent.</p>}
          </form>
          <p className="swap"><button type="button" className="lnk" onClick={() => setMode('sign')}>Back to sign in</button></p>
        </>
      )}
    </AuthShell>
  );
}
