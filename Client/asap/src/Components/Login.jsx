// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './Login.css';
import Home from './home/hero';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="input">
        <input type="email" id="login-email" required />
        <label htmlFor="login-email">Email</label>
      </div>
      <div className="input">
        <input type="password" id="login-password" required />
        <label htmlFor="login-password">Password</label>
      </div>
      <button type="submit" className="button">Login</button>
    </form>
  );
};

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <div className="input">
        <input type="text" id="register-username" required />
        <label htmlFor="register-username">Username</label>
      </div>
      <div className="input">
        <input type="email" id="register-email" required />
        <label htmlFor="register-email">Email</label>
      </div>
      <div className="input">
        <input type="password" id="register-password" required />
        <label htmlFor="register-password">Password</label>
      </div>
      <button type="submit" className="button">Register</button>
    </form>
  );
};


