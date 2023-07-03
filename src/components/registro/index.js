import React, { useState } from 'react';

const RegistrationForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes realizar las acciones necesarias con los datos del formulario, como enviarlos al servidor o realizar validaciones.

    // Por ejemplo, puedes imprimir los valores en la consola:
    console.log('Nombre completo:', fullName);
    console.log('Email:', email);
    console.log('Contraseña:', password);

    // Luego, puedes reiniciar los campos del formulario
    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Registro</h2>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '16px', marginBottom: '5px' }}>
            Nombre completo:
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '16px', marginBottom: '5px' }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '16px', marginBottom: '5px' }}>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            style={{ width: '100%', padding: '10px', fontSize: '16px', color: '#fff', backgroundColor: '#007bff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
