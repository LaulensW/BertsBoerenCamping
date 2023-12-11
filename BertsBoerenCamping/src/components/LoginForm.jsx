import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    console.log('Response status:', response.status);

    if (response.status === 200) {
      console.log('Login successful');
      setError('');
      setUsername('');
      setPassword('');
      // Redirect or perform any other action
    } else {
      const data = await response.json();
      setError(data.error || 'Login failed');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    setError('Failed to fetch. Check your network connection.');
  } finally {
    setLoading(false);
  }
};

  return (
<form onSubmit={handleLogin} className="form-container">
  <div>
    <label htmlFor="username"></label>
    <input
      placeholder='Gebruikersnaam'
      type="text"
      id="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
  </div>
  <div>
    <label htmlFor="password"></label>
    <input
      placeholder='Wachtwoord'
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
  {error && <div className="error-message">{error}</div>}
  <button type="submit">Inloggen</button>
</form>
  );
};

export default LoginForm;