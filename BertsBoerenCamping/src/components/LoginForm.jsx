import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'correctUsername' && password === 'correctPassword') {
      window.location.href = '/dashboard';
    } else {
      setErrorMessage('Verkeerd wachtwoord of gebruikersnaam');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="login-input"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="login-input"
        />
      </div>
      <div>
        <button type="submit" className="login-button">Login</button>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  );
};

export default LoginForm;