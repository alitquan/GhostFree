
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from '@pages/Home.tsx';
import Login from '@pages/Login.tsx'; 
import Register from '@pages/Register.tsx'; 

function App() {
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
