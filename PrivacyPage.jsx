import DocLayout from './DocLayout.jsx';
import { PRIVACY, LEGAL_NOTE } from './data.js';

export default function PrivacyPage() {
  return <DocLayout icon="shield" title="Privacy policy" intro="How Megha Institutions handles your information. Last updated November 2026." note={LEGAL_NOTE} items={PRIVACY} />;
}
