import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import Home from './home';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements['login-email'].value;
    const password = event.target.elements['login-password'].value;

    try {
      const response = await fetch('http://localhost:8080/route/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });
      if (response.ok) {
        navigate('/home');
      } else {
        console.error('Login failed');
        alert('Either password or user name is wrong or You have not registered.');
      }
    } catch (err) {
      console.error('An error occurred:', err);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="input">
        <input type="text" id="login-email" required />
        <label htmlFor="login-email">Email</label>
      </div>
      <div className="input">
        <input type="password" id="login-password" required />
        <label htmlFor="login-password">Password</label>
      </div>
      <p>
        Not registered? <Link to="/register">Register</Link> here
      </p>
      <button type="submit" className="button">Login</button>
    </form>
  );
};

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.elements['register-username'].value;
    const email = event.target.elements['register-email'].value;
    const password = event.target.elements['register-password'].value;

    try {
      const response = await fetch('http://localhost:8080/route/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
     
      if (response.ok) {
        navigate('/');
      } else {
        console.error('Registration failed');
      }
    } catch (err) {
      console.error('An error occurred:', err);
    }
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

const Logout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      navigate('/');
    }, 1000);
  }, [navigate]);

  return (
    <div className="logout-message">
      <h2>Logging out...</h2>
    </div>
  );
};

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
};

export default Main;
