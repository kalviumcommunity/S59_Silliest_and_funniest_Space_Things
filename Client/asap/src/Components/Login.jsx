import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import Home from './home';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements['login-email'].value;
    document.cookie = `userName=${email}; path=/`;
    navigate('/home');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="input">
        <input type="text" id="login-email" required />
        <label htmlFor="login-email">Username</label>
      </div>
      <div className="input">
        <input type="password" id="login-password" required />
        <label htmlFor="login-password">Password</label>
      </div>
      <p>
        Not regestered ? {<Link to= "/register">Register</Link>} here
      </p>
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

const Logout = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(()=>{
      document.cookie = 'email=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
      navigate('/');
    },1000)
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
