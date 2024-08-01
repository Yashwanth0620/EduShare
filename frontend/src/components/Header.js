import React, { useState } from 'react';
import {Link} from "react-router-dom"
import '../styles/Header.css';

const ResponsiveHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="logo"><Link style={{color: 'white',textDecoration: 'none'}} to="/">EduShare</Link></div>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <div className="hr-line"><hr /></div>
          <li><Link to="/contact">Contact Us</Link></li>
          <div className="hr-line"><hr /></div>
        </ul>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-outline-primary">Login</Link>
          <Link to="/register" className="btn btn-primary">Sign Up</Link>
        </div>
      </nav>
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
    </header>
  );
};

export default ResponsiveHeader;
