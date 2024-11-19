import { useState } from 'react'
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '@pages/Home.tsx';
import Login from '@pages/Login.tsx'; 
import Register from '@pages/Register.tsx'; 

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
	  console.log("handleLogin() -- called");
	  setIsLoggedIn(true);
  };

  window.onload = () => {
	const token = localStorage.getItem('token');
	if (token) { 
		console.log("Token output: "); 
		const userInfo = jwtDecode(token);
		console.log(userInfo);
		handleLogin();
	}
  }

  return (
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>My App</title>
          <meta name="description" content="This is my React application." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		  <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' />
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
		  <Route path="/login" element={<Login />} />  
		  <Route path="/register" element={<Register />} /> 
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
