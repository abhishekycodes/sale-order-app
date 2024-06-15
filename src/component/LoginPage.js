import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'abhi' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/active');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='text-center'>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input className='mb-3' type="text"  value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='btn btn-primary mt-3' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
