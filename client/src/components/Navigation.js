import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navigation.css'; 

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {/* More links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
