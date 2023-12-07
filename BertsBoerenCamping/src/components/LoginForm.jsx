import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (response.ok) {
        // Login successful
        setError('');
        // Redirect to dashboard
        window.location.href = '/dashboard';
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Internal Server Error');
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