import React, { useEffect, useState } from 'react';
import { removeToken, getToken } from '../utils/auth'; // getToken to retrieve token
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminTable from '../components/AdminTable';
const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication
  const navigate = useNavigate();
  const [tokenSession , setTokenSession] = useState('')
  const [AdminMemberData , setAdminMemberData] = useState('')
  useEffect(() => {
    const token = getToken(); // Retrieve token from local storage
    if (!token) {
      navigate('/login'); // Redirect if token is not found
    } else {
      // Verify token via API
      axios
        .post('http://localhost:5000/api/auth/verify-token', { token })
        .then((response) => {
          if (response.data.valid) {
            setIsAuthenticated(true); // If token is valid, set authentication to true
            setTokenSession(token)
            setAdminMemberData(response.data.AdminMember)
          } else {
            removeToken(); // If token is invalid, remove it and navigate to login
            navigate('/login');
          }
        })
        .catch((err) => {
          console.log('Error verifying token:', err);
          removeToken();
          navigate('/login'); // Redirect if error occurs during token verification
        });
    }
  }, [navigate]);

  const handleLogout = () => {
    removeToken(); // Remove token from storage
    navigate('/login'); // Navigate to login page after logout
  };

  // Show a loading indicator while token verification is happening
  if (!isAuthenticated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Username: {AdminMemberData.username}</h2>
      <h4>Job: {AdminMemberData.job_role}</h4>
      <AdminTable ontoken={tokenSession}/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
