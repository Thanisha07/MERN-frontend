import { useState, useEffect } from 'react';
import { useRoute, go } from './router.jsx';
import { PORTALS } from './data.js';
import Navbar from './Navbar.jsx';
import LoginPage from './LoginPage.jsx';
import SignupPage from './SignupPage.jsx';
import HomePage from './HomePage.jsx';
import PortalsPage from './PortalsPage.jsx';
import AboutPage from './AboutPage.jsx';
import ContactPage from './ContactPage.jsx';
import FaqPage from './FaqPage.jsx';
import TermsPage from './TermsPage.jsx';
import PrivacyPage from './PrivacyPage.jsx';
import DashboardPage from './DashboardPage.jsx';

const OPEN = ['login', 'signup', 'faq', 'terms', 'privacy'];   // pages available before signing in
const TITLES = { login: 'Sign in', signup: 'Create account', home: 'Home', portals: 'Portals', about: 'About', contact: 'Contact', faq: 'FAQ', terms: 'Terms and conditions', privacy: 'Privacy policy', dashboard: 'Dashboard' };

export default function App() {
  const route = useRoute();
  const [user, setUser] = useState(null);      // kept in memory only, nothing is stored
  const [role, setRole] = useState('student');

  const wanted = route || (user ? 'home' : 'login');
  const page = user || OPEN.includes(wanted) ? wanted : 'login';

  useEffect(() => { if (route !== page) go(page); }, [route, page]);
  useEffect(() => { document.title = TITLES[page] + ' | Megha Institutions'; }, [page]);

  const signIn = (u) => { setUser(u); setRole(u.role); go('home'); };
  const signOut = () => { setUser(null); go('login'); };
  const themed = ['login', 'signup', 'dashboard'].includes(page);
  const t = PORTALS[themed ? role : 'student'];

  const views = {
    login: <LoginPage role={role} setRole={setRole} onAuth={signIn} />,
    signup: <SignupPage role={role} setRole={setRole} onAuth={signIn} />,
    home: <HomePage onOpen={(r) => { setRole(r); go('dashboard'); }} />,
    portals: <PortalsPage onOpen={(r) => { setRole(r); go('dashboard'); }} />,
    about: <AboutPage />,
    contact: <ContactPage />,
    faq: <FaqPage />,
    terms: <TermsPage />,
    privacy: <PrivacyPage />,
    dashboard: <DashboardPage role={role} setRole={setRole} user={user} />
  };

  return (
    <div className="app" style={{ '--accent': t.color, '--on': t.on }}>
      <Navbar route={page} user={user} onSignOut={signOut} />
      <main className={'page pg-' + page} key={page}>{views[page]}</main>
    </div>
  );
}
