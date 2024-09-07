import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import { setToken, removeToken } from './utils/auth';
import RegisterForm from './components/RegisterForm';

const App = () => {

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path='/register' element={<RegisterForm onLogin={handleLogin}/>}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  );
};

export default App;
