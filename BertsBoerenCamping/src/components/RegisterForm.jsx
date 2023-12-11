import React, { useState } from 'react';
import'./RegisterForm.css';

const RegisterForm = () => {
    const [voornaam, setVoornaam] = useState('');
    const [tussenvoegsel, setTussenvoegsel] = useState('');
    const [achternaam, setAchternaam] = useState('');
    const [rol, setRol] = useState('');
    const [wachtwoord, setWachtwoord] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleRegister = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ voornaam, tussenvoegsel, achternaam, rol, wachtwoord }),
          });
    
          if (response.ok) {
            console.log('Registration successful');
            setError('');
            setVoornaam('');
            setTussenvoegsel('');
            setAchternaam('');
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
                onChange={(e) => setWachtwoord(e.target.value)}
                className="input"
            />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" disabled={loading} className="submit-button">
            {loading ? 'Registering...' : 'Register'}
        </button>
    </form>
    );
  };

export default RegisterForm;