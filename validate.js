export const RULES = [
  { k: 'len', label: '8 to 64 characters', test: (v) => v.length >= 8 && v.length <= 64 },
  { k: 'up', label: 'One uppercase letter', test: (v) => /[A-Z]/.test(v) },
  { k: 'low', label: 'One lowercase letter', test: (v) => /[a-z]/.test(v) },
  { k: 'num', label: 'One number', test: (v) => /[0-9]/.test(v) },
  { k: 'sp', label: 'One special character', test: (v) => /[^A-Za-z0-9\s]/.test(v) },
  { k: 'ns', label: 'No spaces', test: (v) => v.length > 0 && !/\s/.test(v) }
];
const SAY = { len: 'be 8 to 64 characters long', up: 'include an uppercase letter', low: 'include a lowercase letter',
  num: 'include a number', sp: 'include a special character', ns: 'not contain spaces' };

export const check = (v) => Object.fromEntries(RULES.map((r) => [r.k, r.test(v)]));
export function strength(v) {
  if (!v) return 0;
  const passed = RULES.filter((r) => r.test(v)).length;
  return passed <= 3 ? 1 : passed < 6 ? 2 : v.length >= 12 ? 4 : 3;
}
export function pwError(v) {
  if (!v) return 'Enter your password.';
  const miss = RULES.find((r) => !r.test(v));
  return miss ? 'Your password must ' + SAY[miss.k] + '.' : '';
}
export function idError(v, label) {
  v = v.trim();
  if (!v) return 'Enter your ' + label.toLowerCase() + '.';
  return /^[A-Za-z0-9._-]{4,20}$/.test(v) ? '' : label + ' must be 4 to 20 letters or numbers, with no spaces.';
}
export const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
