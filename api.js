async function post(path, body) {
  let response;
  try {
    response = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
  } catch {
    throw new Error('Unable to reach the server. Check that the app server is running.');
  }

  const result = await response.json();
  if (!response.ok) throw new Error(result.error || 'The request could not be completed.');
  return result.user;
}

export const register = (account) => post('/api/auth/register', account);
export const login = (credentials) => post('/api/auth/login', credentials);
