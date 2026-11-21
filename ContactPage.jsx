import { useState } from 'react';
import Icon from './Icon.jsx';
import { CONTACTS } from './data.js';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: '', role: 'Student', msg: '' });
  const submit = (e) => { e.preventDefault(); if (f.name.trim() && f.msg.trim()) setSent(true); };   // demo only: nothing is sent
  return (
    <div className="wrap">
      <header className="ph"><h1>Contact and support</h1><p>Write or call the desk that fits your question. We reply within one working day.</p></header>
      <div className="ccols">
        <div className="clist">
          {CONTACTS.map((c) => (
            <article className="cc" key={c.title}>
              <span className="cic"><Icon n={c.icon} /></span>
              <div><h2>{c.title}</h2><p>{c.text}</p>
                <a href={'mailto:' + c.mail}><Icon n="mail" className="sm" />{c.mail}</a>
                <a href={'tel:' + c.tel.replace(/\s/g, '')}><Icon n="phone" className="sm" />{c.tel}</a></div>
            </article>
          ))}
          <div className="cbar"><span><Icon n="pin" className="sm" />Your Street, Your City, PIN 000000</span><span><Icon n="clock" className="sm" />Mon to Sat, 9 am to 5 pm</span></div>
        </div>
        <form className="ticket" onSubmit={submit}>
          <h2>Send us a message</h2>
          <div className="row">
            <label>Your name<input value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} required /></label>
            <label>Role<select value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })}><option>Student</option><option>Staff</option><option>Admin</option><option>Visitor</option></select></label>
          </div>
          <label>Message<textarea rows="4" value={f.msg} onChange={(e) => setF({ ...f, msg: e.target.value })} required placeholder="Tell us what went wrong and where." /></label>
          <button className="btn btn-amber" type="submit">Send message</button>
          {sent && <p className="ok">Thank you. This is a demo, so your message was not sent or stored.</p>}
        </form>
      </div>
    </div>
  );
}
