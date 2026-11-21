import DocLayout from './DocLayout.jsx';
import { TERMS, LEGAL_NOTE } from './data.js';

export default function TermsPage() {
  return <DocLayout icon="file" title="Terms and conditions" intro="Please read these before using the portal. Last updated November 2026." note={LEGAL_NOTE} items={TERMS} />;
}
