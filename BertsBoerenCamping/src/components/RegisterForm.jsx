import React, { useState } from 'react';
import'./RegisterForm.css';

const RegisterForm = () => {
    const [voornaam, setVoornaam] = useState('');
    const [tussenvoegsel, setTussenvoegsel] = useState('');
    const [achternaam, setAchternaam] = useState('');
    const [email, setEmail] = useState('');
    const [rol, setRol] = useState('');
    const [wachtwoord, setWachtwoord] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);
  
    const isPasswordValid = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
      return regex.test(password);
    };
  
    const handlePasswordChange = (password) => {
      setWachtwoord(password);
      if (!isPasswordValid(password)) {
        setPasswordError('Wachtwoord dient minimaal 8 tekens, een hoofdletter, een cijfer en een speciaal teken te bevatten.');
      } else {
        setPasswordError('');
      }
    };
  
    const handleRegister = async () => {
      try {
        if (!isPasswordValid(wachtwoord)) {
          setPasswordError('Wachtwoord moet minimaal 8 Tekens hebben en moet ook een speciale teken hebben.');
          return;
        }
  
        const response = await fetch('http://localhost:3001/werknemer/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ voornaam, tussenvoegsel, achternaam, email, rol, wachtwoord }),
        });
  
        if (response.ok) {
          console.log('Registration successful');
          setPasswordError('');
          setVoornaam('');
          setTussenvoegsel('');
          setAchternaam('');
          setEmail('');
          setRol('');
          setWachtwoord('');
        } else {
          const data = await response.text();
          console.error('Registration failed:', data);
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };
    
  
    return (
      <form onSubmit={handleRegister} className="register-form">
        <div className="input-field">
            <label htmlFor="voornaam">Voornaam:</label>
            <input
                type="text"
                id="voornaam"
                value={voornaam}
                onChange={(e) => setVoornaam(e.target.value)}
                className="input"
            />
        </div>
        <div className="input-field">
            <label htmlFor="tussenvoegsel">Tussenvoegsel:</label>
            <input
                type="text"
                id="tussenvoegsel"
                value={tussenvoegsel}
                onChange={(e) => setTussenvoegsel(e.target.value)}
                className="input"
            />
        </div>
        <div className="input-field">
            <label htmlFor="achternaam">Achternaam:</label>
            <input
                type="text"
                id="achternaam"
                value={achternaam}
                onChange={(e) => setAchternaam(e.target.value)}
                className="input"
            />
        </div>
        <div className="input-field">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
            />
        </div>
        <div className="input-field">
            <label htmlFor="rol">Rol:</label>
            <input
                type="number"
                id="rol"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                className="input"
            />
        </div>
        <div className="input-field">
        <label htmlFor="wachtwoord">Wachtwoord:</label>
        <input
          type="password"
          id="wachtwoord"
          value={wachtwoord}
          onChange={(e) => handlePasswordChange(e.target.value)}
          className="input"
        />
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      </div>
      <button type="submit" disabled={loading} className="submit-button">
        {loading ? 'Registering...' : 'Register'}
      </button>
    </form>
    );
  };

export default RegisterForm;