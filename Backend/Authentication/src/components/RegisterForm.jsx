import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const RegisterForm = ({ onLogin }) => {
  const [username , setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { username , email, password });
      onLogin(response.data.token);
      navigate('/home')
    } catch (err) {
      setError('Invalid credentials'+err);
      console.log(err)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <div>
        <label>Name:</label>
        <input type="name" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">register</button>
    </form>
  );
};

export default RegisterForm;
