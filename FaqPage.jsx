import DocLayout from './DocLayout.jsx';
import { FAQ } from './data.js';

export default function FaqPage() {
  return <DocLayout icon="help" title="Frequently asked questions" intro="Pick a question to see the answer." items={FAQ} />;
}
