import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import { session } from 'electron';

//new code
const LOGIN_EXPIRY_TIME= 15 * 60* 1000; 

const LoginPage = ({ login }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');


  

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8081/authenticate', {
        userName,
        password,
      });
      const expiry = new Date().getTime() + LOGIN_EXPIRY_TIME;      
      const session = {userName, expiry};
      localStorage.setItem('session', JSON.stringify(session));

      setTimeout(() =>{
        console.log('session expired, Logging out...');
        localStorage.removeItem('session');
        navigate('/login')
        window.location.reload();
      }, LOGIN_EXPIRY_TIME);


      // localStorage.setItem('userName', userName); // old code
      login(); 
      console.log("Login successful", response);
      alert("Login successful");
      navigate('/home');
    } catch (error) {
      console.log("Login failed", error);
      if (error.response.status === 401) {
       console.log("wrong username or password")
       alert("Wrong Username or Password !!Enter a correct one ")
      } else if (error.request) {
        console.log('No response received', error.request);
      } else {
        console.log('Error', error.message);
      }
    }
    
  };
  

  return (
    <div className='bg-light align-items-center'>
      <div className="login-container bg-light" style={{ fontWeight: 'bold' }}>
        <div className="marquee-container bg-dark text-white">
          <marquee behavior="scroll" direction="left">
            WELCOME TO THE LOGIN PAGE.
          </marquee>
        </div>
        <div className="form-container d-flex justify-content-center align-items-center">
          <form className="login-form p-4 rounded shadow" onSubmit={submitHandler} style={{ maxWidth: '800px', width: '100%' }}>
            <h2 className="text-center mb-4">Login</h2>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

