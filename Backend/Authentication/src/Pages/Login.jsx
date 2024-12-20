import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({ onLogin }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
