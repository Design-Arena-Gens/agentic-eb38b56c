'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Salut!');
  const [name, setName] = useState('');

  const messages = [
    'Salut!',
    'Bonjour!',
    'Bienvenue!',
    'Enchanté!',
    'Comment allez-vous?'
  ];

  const handleGreet = () => {
    if (name.trim()) {
      setMessage(`Salut ${name}! Ravi de vous rencontrer! 🎉`);
    } else {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMessage);
    }
  };

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '60px 40px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        maxWidth: '500px',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '4rem',
          margin: '0 0 20px 0',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          {message}
        </h1>

        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '30px'
        }}>
          Une application de salutation interactive
        </p>

        <input
          type="text"
          placeholder="Entrez votre nom..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleGreet()}
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '1rem',
            border: '2px solid #e0e0e0',
            borderRadius: '10px',
            marginBottom: '20px',
            outline: 'none',
            transition: 'border-color 0.3s',
            boxSizing: 'border-box'
          }}
        />

        <button
          onClick={handleGreet}
          style={{
            width: '100%',
            padding: '15px 30px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: 'white',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
          }}
        >
          Dire Salut! 👋
        </button>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: '#f8f9fa',
          borderRadius: '10px'
        }}>
          <p style={{
            margin: '0',
            fontSize: '0.9rem',
            color: '#666'
          }}>
            💡 Astuce: Entrez votre nom pour un message personnalisé!
          </p>
        </div>
      </div>

      <footer style={{
        marginTop: '40px',
        color: 'white',
        fontSize: '0.9rem',
        opacity: '0.8'
      }}>
        Fait avec ❤️ par Claude
      </footer>
    </main>
  );
}
