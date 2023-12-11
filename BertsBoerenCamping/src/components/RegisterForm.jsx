import React, { useState } from 'react';

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
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="voornaam">Voornaam:</label>
          <input
            type="text"
            id="voornaam"
            value={voornaam}
            onChange={(e) => setVoornaam(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tussenvoegsel">Tussenvoegsel:</label>
          <input
            type="text"
            id="tussenvoegsel"
            value={tussenvoegsel}
            onChange={(e) => setTussenvoegsel(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="achternaam">Achternaam:</label>
          <input
            type="text"
            id="achternaam"
            value={achternaam}
            onChange={(e) => setAchternaam(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rol">Rol:</label>
          <input
            type="number"
            id="rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="wachtwoord">Wachtwoord:</label>
          <input
            type="password"
            id="wachtwoord"
            value={wachtwoord}
            onChange={(e) => setWachtwoord(e.target.value)}
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    );
  };

export default RegisterForm;